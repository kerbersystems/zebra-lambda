var request = require('request');
var fs = require('fs');
fs.writeFile("/tmp/test.prn", "CT~~CD,~CC^~CT~\n^XA~TA000~JSN^LT18^MNW^MTD^PON^PMN^LH0,0^JMA^PR4,4~SD15^JUS^LRN^CI0^XZ\n^XA\n^MMT\n^PW450\n^LL0150\n^LS0\n^BY4,6^FT395,26^B7I,6,2,,,N\n^FH\^FDtest^FS\n^PQ1,0,1,Y^XZ", function (err) {
        if (err) {
            context.fail("writeFile failed: " + err);
        } else {
            context.succeed("writeFile succeeded");
        }
    });
var options = {
  'method': 'POST',
  'url': 'https://api.zebra.com/v2/devices/printers/send',
  'headers': {
    'accept': 'text/plain',
    'apikey': '*',
    'tenant': '*',
    'Content-Type': 'multipart/form-data',
    'Cookie': 'SERVERID=pod-zsbpenvoy-769cdcbd76-6lv9h'
  },
  formData: {
    'sn': 'D7J213200526',
    'zpl_file': {
      'value': fs.createReadStream('/tmp/test.prn'),
      'options': {
        'filename': '/tmp/test.prn',
        'contentType': null
      }
    }
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
