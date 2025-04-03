const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())

console.table({
    Os: os.platform(),
    Version: os.release(),
    Memoriatotal: os.totalmem(),
    Memorilibre: os.freemem()
})