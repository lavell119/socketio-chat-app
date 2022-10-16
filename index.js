const express = require('express') 
var socket = require('socket.io')


//App setup
const app = express()
const server = app.listen(2222, function(){
    console.log('server listening...')
})

//Static files
app.use(express.static('public'))


//Socket setup
var io = socket(server)

io.on('connection', function(socket){
    console.log('made socket connection')
})