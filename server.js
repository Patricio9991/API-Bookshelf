const express= require('express')
const server=express()
const port=4000
const cors=require('cors')


require("./config/configDB")

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({extended:true}))
server.use(express.static('./imagenes'))

server.use('/',require('./routes/booksRoutes'))









server.listen(port,()=>{
    console.log(`Conectado al front en el puerto ${port}`)
})