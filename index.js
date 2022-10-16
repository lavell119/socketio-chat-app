const express = require('express')

const app = express()

const server = app.listen(2222, function(){
    console.log('server listening...')
})


app.use(express.static('public'))