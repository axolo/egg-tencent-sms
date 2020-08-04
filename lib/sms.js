'use strict';

class SMS {
  constructor(options) {
    const {
      tencentCloud,
      version = 'v20190711',
      ReqMethod = 'POST',
      ReqTimeout = 30,
      SignMethod = 'HmacSHA256',
      Endpoint = 'sms.tencentcloudapi.com',
      Region = 'ap-guangzhou',
      SecretId,
      SecretKey,
    } = options;

    const Credential = tencentCloud.common.Credential;
    const cred = new Credential(SecretId, SecretKey);

    const HttpProfile = tencentCloud.common.HttpProfile;
    const httpProfile = new HttpProfile();
    httpProfile.reqMethod = ReqMethod;
    httpProfile.reqTimeout = ReqTimeout;
    httpProfile.endpoint = Endpoint;

    const ClientProfile = tencentCloud.common.ClientProfile;
    const clientProfile = new ClientProfile();
    clientProfile.signMethod = SignMethod;
    clientProfile.httpProfile = httpProfile;

    const smsClient = tencentCloud.sms[version].Client;
    this.client = new smsClient(cred, Region, clientProfile);
    this.models = tencentCloud.sms[version].Models;
    this.options = options;
  }

  send(PhoneNumberSet, TemplateParamSet, SessionContext = '') {
    return new Promise((resolve, reject) => {
      const { client, models, options } = this;
      const req = new models.SendSmsRequest();
      const { SmsSdkAppid, Sign, TemplateID, ExtendCode = '', SenderId = '' } = options;
      req.SmsSdkAppid = SmsSdkAppid;
      req.Sign = Sign;
      req.ExtendCode = ExtendCode;
      req.SenderId = SenderId;
      req.SessionContext = SessionContext;
      req.PhoneNumberSet = PhoneNumberSet;
      req.TemplateID = TemplateID;
      req.TemplateParamSet = TemplateParamSet;
      client.SendSms(req, (err, res) => {
        if (err) return reject(err);
        resolve(res.to_json_string());
      });
    });
  }
}

module.exports = SMS;
