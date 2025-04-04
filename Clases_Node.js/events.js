const EventEmitters = require('events')

const customEmiter = new EventEmitters()
customEmiter.on('response', (data, seconddata) => {
    console.log('received')
    console.log('data')
    console.log('seconddata')
})

customEmiter.emit('response','Hello world', [1, 2, 3])
/* customEmiter.emit('response','LUIS')
customEmiter.emit('response', 20)
customEmiter.emit('response', [3, 2, 1])
customEmiter.emit('response', {
    name: 'Luis',
    age: 20
}) */