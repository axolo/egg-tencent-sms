'use strict';

const Sms = require('./lib/sms');

const createSms = options => {
  const sms = new Sms({ ...options });
  const { tencentCloud } = options;
  sms.tencentCloud = tencentCloud;
  return sms;
};

module.exports = app => {
  app.addSingleton('tencentSms', createSms);
};
