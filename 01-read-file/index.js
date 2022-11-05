const fs = require('fs');
const path = require('path');

const read = fs.createReadStream(path.join(__dirname, 'text.txt'), {encoding: 'UTF-8'});
read.on('data', function (chunk) {
  console.log(chunk);
});