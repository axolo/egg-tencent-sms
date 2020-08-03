'use strict';

const tencentCloud = require('tencentcloud-sdk-nodejs');

/**
 * egg-tencent-sms default config
 *
 * @member Config#cos
 * @property {object} tencentCloud tencentcloud-sdk-nodejs
 * @property {string} version tencent cloud sms sdk version
 * @property {string} ReqMethod HttpProfile reqMethod
 * @property {number} ReqTimeout HttpProfile reqTimeout
 * @property {string} Endpoint HttpProfile endpoint
 * @property {string} Endpoint HttpProfile endpoint
 * @property {string} SignMethod ClientProfile signMethod
 * @property {string} Region smsClient region
 * @property {string} SecretId smsClient SecretId
 * @property {string} SecretKey smsClient SecretKey
 * @property {string} SmsSdkAppid smsClient SmsSdkAppid
 * @property {string} Sign smsClient Sign
 * @property {string} TemplateID smsClient TemplateID
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
  },
  // client: {
  //   SecretId: 'SMS_SECRETID',
  //   SecretKey: 'SMS_SECRETKEY',
  //   SmsSdkAppid: 'SMS_SDK_APPID',
  //   Sign: 'SMS_SIGN',
  //   TemplateID: 'SMS_TEMPLATEID',
  // },
};
