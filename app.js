const express = require('express');
const app = express();
//app.use(express.static('public'))

app.use("/resources", express.static(__dirname + '/public'));

//4- Estableciendo el motor de plantillas
app.set('view engine','ejs');

//Para poder capturar los datos del formulario (sin urlencoded nos devuelve "undefined")
app.use(express.urlencoded({extended:false}));
//además le decimos a express que vamos a usar json
app.use(express.json());


 //Establecemos las rutas para las VISTAS usando un archivo aparte (router.js) y la clase Router()
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(4000, ()=>{
    console.log('SERVER corriendo en http://localhost:4000');
});