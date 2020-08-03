'use strict';

const mock = require('egg-mock');

describe('test/tencent-sms.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-sms-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tencentSms')
      .expect(200);
  });
});
