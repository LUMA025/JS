const curso = require('./curso.json')
console.log(curso)

let infoCurso = {
    "titulo": "Aprendiendo Node.js",
    "numVistas": 3000,
    "numLikes": 5000,
    "temas": [
        "JavasCript",
        "Node.js"
    ],
    "esPublico": true
}
console.log(infoCurso)

let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON)
console.log(typeof infoCursoJSON)

let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
console.log(infoCursoObjeto.titulo)