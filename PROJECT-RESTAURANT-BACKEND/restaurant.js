const menuList = require('./menu')

const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')
app.use('/images', express.static('public'))

app.get('/menuList', function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(menuList))
    
})

app.get('/menuList/:menu', (function (req, res) {
    res.send(menuList)
}))

app.listen(3000)


