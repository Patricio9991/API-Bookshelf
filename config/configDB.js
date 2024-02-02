const mongoose=require('mongoose')

const user='ppuchetadev'
const pass='BEkuUqmfsoa3tRSW'

const url=`mongodb+srv://${user}:${pass}@cluster0.ekq3gfw.mongodb.net/?retryWrites=true&w=majority`

const main=async()=>{
   await mongoose.connect(url)
}

main()
.then(()=>{console.log('conexion MongoDB exitosa')})
.catch((err)=>{console.log(err)})