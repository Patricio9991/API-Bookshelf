const express=require('express')
const route=express.Router()
const {saludo,newBook,all,findById,editInfo,deleteBook}=require('../controllers/bookControllers')
const upload=require('../multer/multer')
route.get('/saludo',saludo)

route.get('/items',all)
route.get('/items/:id',findById)


route.post('/new',upload.single('file'),newBook)

route.put("/editBook/:id",editInfo)

route.delete("/delete/:id",deleteBook)


module.exports=route