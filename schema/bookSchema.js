const mongoose=require('mongoose')


const bookSchema=mongoose.Schema({
    title:String,
    author:String,
    year:Number,
    sinopsis:String,
    img:String


})

const bookModel=mongoose.model('books',bookSchema)

module.exports=bookModel