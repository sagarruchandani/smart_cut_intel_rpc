var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http= require('http');
var routes = require('./routes/index');
var users = require('./routes/users');
var https=require('https');
var app = express();
var request = require('request');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

function make_request(urls,callback){
	var data="";
	var x=https.request(urls, function(res) {
		  console.log('STATUS: ' + res.statusCode);
		  console.log('HEADERS: ' + JSON.stringify(res.headers));
		  //res.setEncoding('utf8');
		  
		  res.on('data', function (chunk) {
		    
			 console.log('BODY: ' + chunk);
		    //data=data+chunk;
		    //console.log('data: '+JSON.stringify(data));
		    //console.log('chunk: '+JSON.stringify(chunk));

		    callback(chunk);
		  });
			
//		res.on('end',function(){
//			console.log("cp1");
//			callback(data);
//		});
		}).end();
	
}


app.use('/selected_recipe', function(req,res){
	console.log("1:"+req.query.urls);
	console.log("1:"+req.query);
	
	
	//
//	var x='';
//	request.get(req.query.urls).on('data', function(data) {
//	   // console.log(response.statusCode); // 200
//	   // console.log(response.headers['content-type']);// 'image/png'
//	  x = data;
//	  console.log(data);
//	  }).on('end',function(response){
//		  console.log(x);
//	  });
	
	request(req.query.urls+".json", function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    console.log(body); // Print the google web page.
		  var temporary = JSON.parse(body);
		  //console.log(tempo.name);
		  
		  var name=temporary.name;
		    var image=temporary.image;
		    var serves=temporary.serves;
		    var yields=temporary.yields;
		    var cost=temporary.cost;
		    var ingredients=temporary.ingredients;
		    var directions=temporary.directions;
		    var nutritional_info=temporary.nutritional_info;
		    console.log("cp6: "+temporary.nutritional_info.calcium);
		    //res.render('index');
		    res.render('selected_recipe',{selected_url:req.query.urls,name:name,image:image,serves:serves,yields:yields,cost:cost,ingredients:ingredients,directions:directions,nutritional_info:nutritional_info});
		  
		  
		  
		  }
		});
	
	
	
	
	
	
	
	
	
	
//	var options = {
//			  host: req.query.urls+".json",
//			  method: 'GET'
//			};
//	 var name=""
//	 ,image=""
//	 ,serves=""
//	 ,yields=""
//	 ,cost=""
//	 ,ingredients=""
//	 ,directions=""
//	 ,nutritional_info=""
//	 ,t2="";
//		
//	 var tempo = make_request(req.query.urls,function(chunk){
//		 	//console.log("t2: "+JSON.stringify(t2));
//		 	var x=0;
//		 	var t2="";
//		 	var temporary=JSON.parse(chunk);
//		 	console.log(temporary);
//		 	var name=temporary.name;
//		    var image=temporary.image;
//		    var serves=temporary.serves;
//		    var yields=temporary.yields;
//		    var cost=temporary.cost;
//		    var ingredients=temporary.ingredients;
//		    var directions=temporary.directions;
//		    var nutritional_info=temporary.nutritional_info;
//		    console.log("cp6: "+temporary.nutritional_info.calcium);
//		    //res.render('index');
//		    res.render('selected_recipe',{selected_url:req.query.urls,name:name,image:image,serves:serves,yields:yields,cost:cost,ingredients:ingredients,directions:directions,nutritional_info:nutritional_info});
// 	
		 	
		 //
		   
		    
		//
		 	
			 
		 	
//		 	for(var i=0; i<2000000;i++){
//		 		for(var j=0; j<100;j++){
//		 			for(var k=0; k<3;k++) {
//		 				x++;	
//		 			}
//		 		}
//		 		
//		 	}
//		 	console.log("THIS "+temporary);
//		 	console.log("THIS2 "+temporary.kind);
//		 	
//		 	//var data = '';
//		 	req.on('temporary', function(chunk2){
//		 		temporary += chunk2;
//		 	});
//		 	req.on('end', function(){
//		 	 // var obj = JSON.parse(temporary);
//		 	var t2 = JSON.parse(temporary);
//		 	console.log("THIIISS: "+t2);
//		 	var name=t2.name;
//		    var image=t2.image;
//		    var serves=t2.serves;
//		    var yields=t2.yields;
//		    var cost=t2.cost;
//		    var ingredients=t2.ingredients;
//		    var directions=t2.directions;
//		    var nutritional_info=t2.nutritional_info;
//		    console.log("cp6: "+t2.nutritional_info.calcium);
//		    //res.render('index');
//		    res.render('selected_recipe',{selected_url:req.query.urls,name:name,image:image,serves:serves,yields:yields,cost:cost,ingredients:ingredients,directions:directions,nutritional_info:nutritional_info});
//	 
//		 	});
		 	
		 	
		 	
		 	
/*		 	t2 = JSON.parse(temporary);
		 	console.log("THAT "+t2);
		 	console.log("THAT2 "+t2.directions);
	*/	 	
//		 	var name=t2.name;
//		    var image=t2.image;
//		    var serves=t2.serves;
//		    var yields=t2.yields;
//		    var cost=t2.cost;
//		    var ingredients=t2.ingredients;
//		    var directions=t2.directions;
//		    var nutritional_info=t2.nutritional_info;
//		    console.log("cp6: "+t2.nutritional_info.calcium);
//		    //res.render('index');
//		    res.render('selected_recipe',{selected_url:req.query.urls,name:name,image:image,serves:serves,yields:yields,cost:cost,ingredients:ingredients,directions:directions,nutritional_info:nutritional_info});
	// });
	 
	 //setInterval( console.log("cp3: "+tempo),3000);
	
//			https.request(req.query.urls, function(res) {
//			  console.log('STATUS: ' + res.statusCode);
//			  console.log('HEADERS: ' + JSON.stringify(res.headers));
//			  res.setEncoding('utf8');
//			  res.on('data', function (chunk) {
//			    console.log('BODY: ' + chunk);
//			    var name=chunk.name;
//			    var image=chunk.image;
//			    var serves=chunk.serves;
//			    var yields=chunk.yields;
//			    var cost=chunk.cost;
//			    var ingredients=chunk.ingredients;
//			    var directions=chunk.directions;
//			    var nutritional_info=chunk.nutritional_info;
//			    routes.index();
//			  });
//				res.render('selected_recipe',{name:name,image:image,serves:serves,yields:yields,cost:cost,ingredients:ingredients,directions:directions,nutritional_info:nutritional_info});			    
//				
//			}).end();
//			

});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000);
console.log('Main Express server listening on port 3000');
module.exports = app;
