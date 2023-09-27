const args = process.argv.slice(2);
const fs = require("fs");

const request = require('request');
request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  // console.log(`body: ${body}`)
  if (error === null && response.statusCode === 200) {
    fs.writeFile(args[1], body, err => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${body.length} bytes of data to ${args[1]}`);
    });
  }
});
