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
  SendSms: { // Tencent Cloud SDK Action name, cover transfer params
    SmsSdkAppid: 'SMS_SDK_APPID',
    Sign: 'SMS_SIGN',
    TemplateID: 'SMS_TEMPLATEID',
  },
};
```

## API

### exec(model, action, params)

> params

| params |  type  |            description             |
| ------ | ------ | ---------------------------------- |
| model  | string | model of Tencent Cloud SMS         |
| action | string | action of Tencent Cloud SMS        |
| params | object | params of Tencent Cloud SMS action |

> return

Promise of Tencent Cloud SMS response.

### send(params)

alias `this.exec('SendSmsRequest', 'SendSms', params)`.

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
    const send = await sms.send({
      PhoneNumberSet: [ phone ],
      TemplateParamSet: [ code ],
    });
    ctx.body = send;
  }
}

module.exports = SmsController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-tencent-sms/issues).

## License

[MIT](LICENSE)

[Tencent Cloud SMS]: https://cloud.tencent.com/document/product/382/43197
