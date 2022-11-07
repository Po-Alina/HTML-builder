const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const folder = path.join(__dirname, 'secret-folder');
const files = fsPromises.readdir(folder, {withFileTypes: true})
files.then((results) => {
    results.forEach(
        (result) => {
            if (result.isFile()) {
                const file = path.join(folder, result.name);
                fs.stat(file, (err, res) => {
                    console.log(`${path.basename(file).replace(path.extname(file), '')} - ${path.extname(file).replace('.', '')} - ${Math.round(res.size / 1024 * 100) / 100} Kbytes`);
                })
            }
        }
    )
});