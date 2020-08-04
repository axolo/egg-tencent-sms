# egg-tencent-sms

[腾讯云短信]Egg.js插件。

## 安装

```bash
npm i @axolo/egg-tencent-sms --save
```

## 开启插件

```js
// config/plugin.js
exports.tencentSms = {
  enable: true,
  package: '@axolo/egg-tencent-sms',
};
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

```js
// {app_root}/config/config.default.js
exports.tencentSms = {
  SecretId: 'SMS_SECRETID',
  SecretKey: 'SMS_SECRETKEY',
  SmsSdkAppid: 'SMS_SDK_APPID',
  Sign: 'SMS_SIGN',
  TemplateID: 'SMS_TEMPLATEID',
};
```

## 例子

给单一手机号码发送4位随机验证码。

```js
'use strict';
const Controller = require('egg').Controller;

class SmsController extends Controller {
  async create() {
    const { phone } = this.ctx.reqeust.body; // E.164格式
    const rand = parseInt(Math.random()*10000);
    const code = rand > 1000 ? rand : rand + 1000;
    const sms = this.app.tencentSms;
    const send = await sms.send([ phone ], [ code ]);
    ctx.body = send;
  }
}
```

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-tencent-sms/issues) 异步交流。

## License

[MIT](LICENSE)

[腾讯云短信]: https://cloud.tencent.com/document/product/382/43197
