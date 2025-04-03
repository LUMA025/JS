const { readFile } = require('fs');

const gettext = (pathfile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathfile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

gettext('./data/cuarto.txt')
    .then((result) => console.log(result))
    .catch((error) => console.log(error));