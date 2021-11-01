const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new promises((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Team Page Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resole, reject) => {
        fs.copyFile('./templates/style.css', './dist/style.css', err => {
            if (err ) {
                reject(err);
                return;
                
            }
            resolve({
                ok: true,
                message:"see the file in the 'dist' directory!"

            })
        })
    })
}

module.exports ={writeFile, copyFile};