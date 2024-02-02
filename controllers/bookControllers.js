
const book=require('../schema/bookSchema')


const saludo=(req,res)=>{
    res.send('Conectado')
}

const all=async(req,res)=>{
    let resultado=await book.find({})
    res.send(resultado)
}

const findById=async(req,res)=>{
    const id=req.params.id

    let resultado= await book.findById(id)
    res.send(resultado)

}

const newBook=async(req,res)=>{
    const {obra,autor,anio,info}=req.body

    const picture=req.file
    console.log(picture)

    if(picture==='undefined'){
        let nuevoLibro= new book({     //aca viene del form y los names del req.body 
            title:obra,                //estan vinculados al schema, OJO
            author:autor,
            year:anio,
            sinopsis:info
            
        })
        let resultado=await book.collection.insertOne(nuevoLibro)
        res.status(201).send(resultado)

    }else{
        let nuevoLibro= new book({    
            title:obra,                
            author:autor,
            year:anio,
            sinopsis:info,
            img:picture.filename
        })
        let resultado=await book.collection.insertOne(nuevoLibro)
        res.status(201).send(resultado)
    }


}



const editInfo=async(req,res)=>{
    const id=req.params.id

    //el req.body debe coincider con la "carga" de info ya almacenada en formato del schema
    //porque esta info ya esta guardada, solo la edito
    
    console.log(req.body)        
    let resultado=await book.findByIdAndUpdate(id,req.body)
    console.log(resultado)
    res.send(resultado)

}

const deleteBook=async(req,res)=>{
    const id=req.params.id

try{
    let resultado = await book.findByIdAndDelete(id)
    res.send(resultado)
}
catch{(error)=>{
    console.log(error.message)
}}
}




module.exports={saludo,newBook,all,findById,editInfo,deleteBook}