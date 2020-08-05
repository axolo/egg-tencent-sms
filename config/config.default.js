'use strict';

const tencentCloud = require('tencentcloud-sdk-nodejs');

/**
 * egg-tencent-sms default config
 *
 * @member Config#tencentSms
 * @property {object} tencentCloud tencentcloud-sdk-nodejs
 * @property {string} version tencent cloud sms sdk version
 * @property {string} ReqMethod HttpProfile reqMethod
 * @property {number} ReqTimeout HttpProfile reqTimeout
 * @property {string} Endpoint HttpProfile endpoint
 * @property {string} SignMethod ClientProfile signMethod
 * @property {string} Region smsClient region
 * @property {string} SecretId smsClient SecretId
 * @property {string} SecretKey smsClient SecretKey
 * @property {string} SendSms.SmsSdkAppid action params SendSms.SmsSdkAppid
 * @property {string} SendSms.Sign action params SendSms.Sign
 * @property {string} SendSms.TemplateID action params SendSms.TemplateID
 * @see https://cloud.tencent.com/document/product/382/43197
 */
exports.tencentSms = {
  default: {
    tencentCloud,
    version: 'v20190711',
    ReqMethod: 'POST',
    ReqTimeout: 30,
    Endpoint: 'sms.tencentcloudapi.com',
    SignMethod: 'HmacSHA256',
    Region: 'ap-guangzhou',
    // SecretId: 'SECRET_ID',
    // SecretKey: 'SECRET_KEY',
  },
  // client: {
  //   // Tencent Cloud SDK Action name, cover transfer params
  //   SendSms: {
  //     SmsSdkAppid: 'SMS_SDK_APPID',
  //     Sign: 'SMS_SIGN',
  //     TemplateID: 'SMS_TEMPLATE_ID',
  //   }
  // },
};
