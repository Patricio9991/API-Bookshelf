const mongoose=require('mongoose')

const user='ppuchetadev'
const pass='NanyPato1.'

const url=`mongodb+srv://${user}:${pass}@cluster0.7yzio5l.mongodb.net/?retryWrites=true&w=majority`

const main=async()=>{
   await mongoose.connect(url)
}

main()
.then(()=>{console.log('conexion MongoDB exitosa')})
.catch((err)=>{console.log(err)})