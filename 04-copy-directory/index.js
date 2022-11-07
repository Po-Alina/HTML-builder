const fsPromises = require('node:fs/promises');
const fs = require('fs');
const path = require('path');


async function copyDirect() {
    const filesPath = path.join(__dirname, 'files');
    const filesCopyPath = path.join(__dirname, 'files-copy');

    try {
        await fsPromises.rm(filesCopyPath, {recursive: true});
    } catch (err) {

    }
    await fsPromises.mkdir(filesCopyPath, {recursive: true});
    
    const items = await fsPromises.readdir(filesPath, {withFileTypes: true});
    for (const item of items) {
        try {
            await fsPromises.copyFile(path.join(filesPath, item.name), path.join(filesCopyPath, item.name), fs.constants.COPYFILE_EXCL);
        } catch (err) {

        }
    }
}
copyDirect();