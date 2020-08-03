'use strict';

class SMS {
  constructor(options) {
    this.options = options;
  }

  send(PhoneNumberSet, TemplateParamSet, SessionContext = '') {
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
      SmsSdkAppid,
      Sign,
      TemplateID,
      ExtendCode = '',
      SenderId = '',
    } = this.options;

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
    const client = new smsClient(cred, Region, clientProfile);

    const models = tencentCloud.sms[version].Models;
    const req = new models.SendSmsRequest();
    req.SmsSdkAppid = SmsSdkAppid;
    req.Sign = Sign;
    req.ExtendCode = ExtendCode;
    req.SenderId = SenderId;
    req.SessionContext = SessionContext;
    req.PhoneNumberSet = PhoneNumberSet;
    req.TemplateID = TemplateID;
    req.TemplateParamSet = TemplateParamSet;

    return new Promise((resolve, reject) => {
      client.SendSms(req, (err, res) => {
        if (err) return reject(err);
        resolve(res.to_json_string());
      });
    });
  }
}

module.exports = SMS;
