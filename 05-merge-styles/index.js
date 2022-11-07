const fsPromises = require('node:fs/promises');
const fs = require('fs');
const path = require('path');

async function mergeStyles () {
    const stylesToCopy = path.join(__dirname, 'styles');
    const bundleStyle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

    const styles = await fsPromises.readdir(stylesToCopy, {withFileTypes: true});
    for(const style of styles) {
        try {
            if (style.isFile()) {
                if(path.extname(path.join(stylesToCopy, style.name)) === '.css') {
                    const read = fs.createReadStream(path.join(stylesToCopy, style.name), {encoding: 'UTF-8'});
                    read.on('data', function (data) {
                        bundleStyle.write(data);
                });
            }
        }
     } catch (err) {

        }
    }
}

mergeStyles();