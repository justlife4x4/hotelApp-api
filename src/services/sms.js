const http = require('http');
const SMS_SETTINGS = require('../config/smsOptions');

async function sendOtpSMS(to, otp) {
  try {
      const options = {
          host: SMS_SETTINGS.SMS_SETTINGS.host,
          port: SMS_SETTINGS.SMS_SETTINGS.port,
          path: SMS_SETTINGS.SMS_SETTINGS.path + '?otp=' + otp + '&authkey=' + SMS_SETTINGS.SMS_SETTINGS.apiKey + '&mobile=' + to + '&template_id=' + SMS_SETTINGS.SMS_SETTINGS.templateId
      };

      const callback = function(response) {
        let str = '';

        response.on('data', function (chunk) {
          str += chunk;
        });

        response.on('end', function () {
          const obj = JSON.parse(str);
          if (obj.type === 'success') {
            return true;
          } else {
            return false;
          }
        });
    }

    var req = http.request(options, callback);
    req.end();
  } catch (e) {
    return false;
  }
};

module.exports = sendOtpSMS;