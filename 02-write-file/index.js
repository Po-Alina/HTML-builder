const fs = require('fs');
const path = require('path');
const process = require('process');

const createdFile = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log('Please, enter your message...');

process.stdin.on('data', data => {
    if(data.toString().trim() != 'exit') {
        createdFile.write(data);
    } else {
        close();
    }
})

process.on('SIGINT', close);

function close() {
    console.log('Thank you! Good bye!');
    process.exit();
}