var express = require('express');
var router = express.Router();
const dbConnection = require('../sql/dbconexion');
const conexion = dbConnection();
var loggedin=false;

//VARIABLES DE USUARIO
var usuario,restaurante,idUsuario;

/* GET home page. */

router.get('/login', function(req, res, next) {
  loggedin=false;
  res.render('login', { title: 'Login' });
});

router.get('/', function(req, res, next) {
  loggedin=false;
  res.render('login', { title: 'Login' });
});

//main page

router.get('/index', function(req, res, next) {
  if(loggedin){
    res.render('index', { 
      title: 'ReSoft',
      username: usuario });
  }
  else{
    res.redirect('/login');
  }
});

router.get('/inventarios', function(req, res, next) {
  if(loggedin){
    conexion.query('select * from Producto',(err, result)=>{
      res.render('inventarios', { 
        title: 'Inventario',
        resultado: result,
        username: usuario  
      });
    });
  }
  else{
    res.redirect('/login');
  }
});

router.get('/reservas', function(req, res, next) {
  



  if(loggedin){
    conexion.query('select * from Reserva where Restaurante_idRestaurante=?',[restaurante],(err, result)=>{
      //console.log(result);
      res.render('reservas', { 
      title: 'Reservas',
      resultado: result,
      username: usuario     
      });  
    });
  }
  else{
    res.redirect('/login');
  }
});

//posts login auth
router.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		conexion.query('SELECT * FROM Usuario WHERE (username = ? or correoUsuario=?) AND password = ?', [username,username, password], function(error, results, fields) {
      if (results.length > 0) {
        loggedin=true;
        usuario=results[0].username;
        idUsuario=results[0].idUsuario;
      
				response.redirect('/getVar');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

router.post('/reservafre', (request, response)=> {
  console.log("reser");
  console.log(request);
	
});

//obtener variables
router.get('/getVar', (request, response)=> {
  
  conexion.query('SELECT Restaurante_idRestaurante FROM Usuario where idUsuario=? ',[idUsuario], function(error, results, fields) {
      restaurante=results[0].Restaurante_idRestaurante;
      response.redirect('/index');
      
  });
	
});
module.exports = router;
