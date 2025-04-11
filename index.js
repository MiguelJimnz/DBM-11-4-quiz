const express= require('express')
const client =require('./db')
const path=require('path')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//Apis

app.get('/api/prueba', (req, res) => {
    res.send('API funcionando');
});



