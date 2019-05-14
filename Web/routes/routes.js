var express = require('express');
var router = express.Router();
const dbConnection = require('../sql/dbconexion');
const conexion = dbConnection();
var loggedin=false;
var moment = require('moment-timezone');


//VARIABLES DE USUARIO
var usuario,restaurante,idUsuario,reservaFrecuencia=1,datefield;

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
  
  
  var inicio= moment().tz("America/Bogota").set({hour:0,minute:0,second:0,millisecond:0});
  var fin   = moment().tz("America/Bogota").set({hour:23,minute:59,second:59,millisecond:0});
  
  if(reservaFrecuencia==0){
    inicio = moment.tz(datefield, "America/Bogota").set({hour:0,minute:0,second:0,millisecond:0});
    fin = moment.tz(datefield, "America/Bogota").set({hour:23,minute:59,second:59,millisecond:0});   
  }
  else if(reservaFrecuencia==2){
    fin=fin.add(7,"days"); 
  }
  else if(reservaFrecuencia==3){
    fin=fin.add(1,"month"); 
  }
  var con=0;
  if(loggedin){
    conexion.query('select * from Reserva where Restaurante_idRestaurante=?',[restaurante],(err, result)=>{
      var allowed=[];
      for(var i=0;i<result.length;i++) {
        var refecha = moment.tz(result[i].HoraFecha, "America/Bogota");  
        //console.log(refecha.format(),inicio.format(),fin.format(),inicio<=refecha && refecha<=fin );
        if(inicio<=refecha && refecha<=fin){

            allowed[con++]=i
          
        }
      }
      
      
      //console.log(allowed);
      res.render('reservas', { 
      title: 'Reservas',
      resultado: result,
      username: usuario,
      allowed:allowed
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


//obtener variables
router.get('/getVar', (request, response)=> {
  
  conexion.query('SELECT Restaurante_idRestaurante FROM Usuario where idUsuario=? ',[idUsuario], function(error, results, fields) {
      restaurante=results[0].Restaurante_idRestaurante;
      response.redirect('/index');
      
  });
	
});

router.post('/actualizarreserva',(req,res)=>{
  console.log("hola");
  var m = req;
  
  //console.log(m);
  res.redirect("/reservas");
  
});

router.post('/reservas0', (request, response)=>{reservaFrecuencia=0;datefield=request.body.datefield;response.redirect('/reservas');});
router.post('/reservas1', (request, response)=> {reservaFrecuencia=1;response.redirect('/reservas');});
router.post('/reservas2', (request, response)=> {reservaFrecuencia=2;response.redirect('/reservas');});
router.post('/reservas3', (request, response)=> {reservaFrecuencia=3;response.redirect('/reservas');});

module.exports = router;
