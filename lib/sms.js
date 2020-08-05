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

  exec(model, action, params) {
    return new Promise((resolve, reject) => {
      const { client, models, options } = this;
      const { [model]: Model } = models;
      const req = new Model();
      req.deserialize({ ...params, ...options[action] });
      client[action](req, (err, res) => {
        if (err) return reject(err);
        resolve(res.to_json_string());
      });
    });
  }

  send(params) {
    return this.exec('SendSmsRequest', 'SendSms', params);
  }
}

module.exports = SMS;
