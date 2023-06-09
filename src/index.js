//console.log("Hola NodeJS")
import express from 'express'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'

import firstRoutes from './routes/index.js'

//import ejs from 'ejs'
const app = express()
//se crea una variable que contiene el path del archivo
const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(__dirname)


app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(firstRoutes)

app.use(express.static(join(__dirname,'public')))

//en lugar de get se utiliza render para renderizar una vista

//process.env.PORT ||   .... //es una variable de entorno que se define en el archivo package.json
app.listen(process.env.PORT || 3000)
console.log('El servidor esta corriendo en el puerto', process.env.PORT || 3000)