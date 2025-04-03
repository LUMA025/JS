const fs = require("fs");

/* const first = fs.readFileSync('./data/primero.txt', 'utf-8')
const second = fs.readFileSync('./data/segundo.txt')

console.log(first)
console.log(second.toString())


fs.writeFileSync('./data/tercero.txt', 'Hola desde el archivo 3')
const title = 'Hola desde el archivo 4'
fs.writeFileSync('./data/cuarto.txt', title)
const title2 = 'Este constenido es un anadido y ya'
fs.writeFileSync('./data/cuarto.txt', title2,{
    flag: 'a'
})
 */

/* fs.readFile('./data/primero.txt', function (error, data){
    console.log(error)
    console.log(data.toString())
}) */

fs.readFile("./data/primero.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());

    fs.readFile("./data/segundo.txt", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data.toString());
      }
    });
  }
});
