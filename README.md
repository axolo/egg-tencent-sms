# egg-tencent-sms

[Tencent Cloud SMS] for Egg.js.

## Install

```bash
npm i @axolo/egg-tencent-sms --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tencentSms = {
  enable: true,
  package: '@axolo/egg-tencent-sms',
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

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

## Example

Send captcha to single phone number.

```js
'use strict';
const Controller = require('egg').Controller;

class SmsController extends Controller {
  async create() {
    const { phone } = this.ctx.reqeust.body; // E.164 format
    const rand = parseInt(Math.random()*10000);
    const code = rand > 1000 ? rand : rand + 1000;
    const sms = this.app.tencentSms;
    const send = await sms.send([ phone ], [ code ]);
    ctx.body = send;
  }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-tencent-sms/issues).

## License

[MIT](LICENSE)

[Tencent Cloud SMS]: https://cloud.tencent.com/document/product/382/43197
