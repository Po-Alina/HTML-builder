const fs = require('fs');
const path = require('path');
const fsPromises = require('node:fs/promises');

async function buildPage() {
    const template = path.join(__dirname, 'template.html');
    const projDir = path.join(__dirname, 'project-dist');

    try {
        await fsPromises.rm(projDir, {recursive: true});
    } catch (err) {
    }

    await fsPromises.mkdir(projDir, {recursive: true});
    
    const readTempl = fs.createReadStream(template, {encoding: 'utf-8'});
    let strTemp = '';
    readTempl.on('data', (data) => {
        strTemp = data.toString();
        console.log(strTemp);

    });

        //const newTemplate = fs.createWriteStream(path.join(projDir, 'index.html'));
        //newTemplate.write(data);

        fs.readdir(path.join(__dirname, 'components'), {withFileTypes: true}, );
        
    
}

buildPage();