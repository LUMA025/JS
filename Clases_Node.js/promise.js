const { readFile } = require("fs/promises");

/* const { promisify } = require("util");
const readfilepromise = promisify(readFile); */
/* const gettext = (pathfile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathfile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
 */
/* gettext('./data/cuarto.txt')
    .then((result) => console.log(result))
    .then(() => gettext('./data/primero.txt'))
    .then((result) => console.log(result))
    .catch((error) => console.log(error)); */

async function read() {
  //throw new Error('Error de prueba')
  try {
    const result = await readFile("./data/primero.txt", "utf-8");
    const result2 = await readFile("./data/segundo.txt", "utf-8");
    const result3 = await readFile("./data/tercero.txt", "utf-8");
    const result4 = await readFile("./data/cuarto.txt", "utf-8");
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}
read();
