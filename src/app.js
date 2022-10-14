const express = require('express');
const app = express();
const path = require('path');
const webRoutes = require('./routes/webRoutes');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static(path.resolve(__dirname,'../public')));


app.use('/',webRoutes);

app.listen(3001, console.log('Servidor corriendo en el puerto 3001'))