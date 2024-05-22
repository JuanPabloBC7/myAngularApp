const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express()

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

const PUERTO = 3000

const conection = mysql.createConnection({
  host: 'localhost',
  database: 'mysqldb',
  user: 'root',
  password: 'root'
});

app.listen(PUERTO, () => {
  console.log(`Server running on port: http://localhost:${PUERTO}`);
});

conection.connect(error => {
  if(error) throw error
  console.log('Conexion exitosa a base de datos');
});

app.get('/', (req, res) => {
  res.send('API');
});

app.get('/artistas', (req, res) => {
  const query = 'SELECT * FROM mysqldb.artistas';
  conection.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.json('no hay registros')
    }
  });
});

app.get('/artista/:id', (req, res) => {
  const {id} = req.params;

  const query = `SELECT * FROM mysqldb.artistas WHERE id = ${id}`;
  conection.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado.length > 0) {
      res.json(resultado)
    } else {
      res.json('no hay registros')
    }
  });
});

app.post('/artista', (req, res) => {
  const artista = {
    nombre: req.body.nombre,
    fechaDeNacimiento: req.body.fechaDeNacimiento
  }

  const query = `INSERT INTO artistas SET ?`;
  conection.query(query, artista, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json('artista insertado correctamente');
  });
});

app.put('/artista/:id', (req, res) => {
  const {id} = req.params;
  const {nombre, fechaDeNacimiento} = req.body

  const query = `UPDATE artistas SET nombre='${nombre}', fechaDeNacimiento='${fechaDeNacimiento}' WHERE id='${id}'`;
  conection.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json('artista actualizado correctamente');
  });
});

app.delete('/artista/:id', (req, res) => {
  const {id} = req.params;

  const query = `DELETE FROM artistas WHERE id='${id}'`;
  conection.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json('artista eliminado correctamente');
  });
});