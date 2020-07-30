let express = require('express');
let app = express();
let nodemailer = require('nodemailer');
var rimraf = require("rimraf");
const path = require('path'); 
var mkdirp = require('mkdirp');
const {c, cpp, node, python, java} = require('compile-run');
var randomstring = require("randomstring");
let server = require('http').Server(app)
let io = require('socket.io')(server)
let ms = require('mysql');
let fs = require('fs');
const multer = require('multer');
var bodyParser = require("body-parser");
const sqlite3 = require('sqlite3').verbose(); 
let db = new sqlite3.Database('./db/yo.db');
var download = require('download-file')
var formidable = require('formidable');
var compiler = require('compilex');
var option = {stats : true};
const system = require('system-commands')
compiler.init(option);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs')
app.use(express.static('./public'))
const upload = multer({
dest: __dirname+'uploads/'
}); 
///// start page /////////////////////////////////////////////////////////////
app.get('/',(req,res)=>{
  res.render('index',{
    start:"start"
  })
})
app.get('/temp',(req,res)=>{
  res.render('tempe',{})
if(req.query.temop && req.query.id){
  let temop=req.query.temop
  let id=req.query.id
  io.sockets.emit('hhh',{temp:temop,id:id})
}
})
app.get('/devs',(req,res)=>{
res.render('devs',{
})

})

///// check key //////////////////////////////////////////////////////////////
io.on('connection', (socket)=>{
socket.on('retart',function(yy){
system('sudo systemctl restart tarber').then(console.log).catch(console.error)
})
socket.on('savetemp',function(yy){
let iod=yy.id
let temp=yy.temp
let naa=yy.naa
let vy = "INSERT into garnik(id,temp,nn)values('"+iod+"','"+temp+"','"+naa+"')"
db.all(vy, function (err, rows) {
  if(err){
    throw err;
}
    })
var query = "SELECT * FROM garnik WHERE id ='"+iod+"'";
db.all(query, function (err, rows) {
      var nen = rows
      io.sockets.emit('ggg',{arr:nen})

})
})
  socket.on('chekname',function(rr){
    let keyd=rr.keyd;
    let value=rr.value;
    fs.readFile(__dirname+'/senyakner/'+keyd+'/users.txt','utf8', function (err, data) {
    let content = data;
    var res = content.split(" ");
    var n = res.includes(value);
    if(n==true){
      io.sockets.emit('aviq',{avi:"yes",kee:keyd})
    }
    else{
      io.sockets.emit('aviq',{avi:"no",kee:keyd})
    }

  })
  })
  app.post('/check',function(req,res){
    var kit=req.body.key;
    //console.log(kit);
    var query = `SELECT * FROM web WHERE key ='"+kit+"'`;
    db.all(query, function (err, result){  //
      var count=result.length
      if(count==1){
        //console.log('aviable');
        var href="web"
        var dezz="aviable";
        io.sockets.emit('avi',{avi:dezz,href:href,key:kit})
      }
      else{//
        var query = "SELECT * FROM python WHERE key ='"+kit+"'";
        db.all(query, function (err, result){//
          var count=result.length;
          if(count==1){
            //console.log('aviable');
            var href="python"
            var dezz="aviable";
            io.sockets.emit('avi',{avi:dezz,href:href,key:kit})
          }
          else{//
            var query = "SELECT * FROM java WHERE key ='"+kit+"'";
            db.all(query, function (err, result){//
              var count=result.length;
              if(count==1){
                //console.log('aviable');
                var href="java"
                var dezz="aviable";
                io.sockets.emit('avi',{avi:dezz,href:href,key:kit})
              }
              else{
                //console.log('not aviable');
                var dez="notaviable";
                io.sockets.emit('avi',{avi:dez,key:kit})
              }
            })
          }
        })
      }
    })
  })

///// python join ////////////////////////////////////////////////////////////
app.get('/python',(req,res)=>{
  if(req.query.key && req.query.user){
    var banali=req.query.key
    var ok;
    var query = "SELECT time FROM python WHERE key ='"+banali+"'";
    var mn = null;
    db.all(query, function (err, rows) {
      mn = rows[0].time;
      var elapsed=mn*60
      //console.log(elapsed)
      var interval= setInterval(function () {
        elapsed--;
        if(elapsed==0){ 
          console.log("rr")
          deleteroom(banali)
          
        }
        if(elapsed==0){
          detik(banali)
          clearInterval(interval);
        }
        else{okk=elapsed/60
       // console.log(okk)
        let sqlU = "UPDATE python SET time = '"+okk+"' WHERE key = '"+banali+"'"
        db.all(sqlU, function (err, rows) {})}
      }, 1000);  
    })
    
    fs.readFile(__dirname+'/senyakner/'+banali+'/users.txt','utf8', function (err, data) {
      let content = data;
      var resqu = content.split(" ");
      var n = resqu.includes(req.query.user);
      if(n!=true){
        fs.appendFile(__dirname+'/senyakner/'+banali+'/users.txt', req.query.user+" ", function (err) {});

      }
      fs.readFile(__dirname+'/senyakner/'+banali+'/users.txt','utf8', function (err, data) {
        let contentu = data;
        var resquu = contentu.split(" ");
        var query = "SELECT code,time FROM python WHERE key ='"+banali+"'";
        var code = null;
        io.sockets.emit('mini',{tivy:resquu.length-1,array:resquu,brr:banali})
        db.all(query, function (err, rows) {
          code = rows[0].code;
          res.render('python',{
            key : req.query.key,
            textpython:code,
            username:req.query.user,
            time:rows[0].time,
            count:resquu.length-1,
            array:resquu
          })         
        })
      })
    })
  } 
})
  function dursgna(balnik,anun){
    fs.readFile(__dirname+'/senyakner/'+balnik+'/users.txt','utf8', function (err, data) {
      let adam = data;
      var eva = adam.split(" ");
      var index = eva.indexOf(anun);
      if (index > -1) {
        eva.splice(index, 1);
        var yoyo = eva.join(' '); 
        fs.writeFile(__dirname+'/senyakner/'+balnik+'/users.txt', yoyo, function (err) {
          fs.readFile(__dirname+'/senyakner/'+balnik+'/users.txt','utf8', function (err, data) {
          let contentu = data;
          var resquu = contentu.split(" ");
          io.sockets.emit('mini',{tivy:resquu.length-1,array:resquu,brr:balnik})
        })  
      });
      }
    }) 
  }
  let key = socket.handshake.query.room
  socket.on('disconnect', function() {
        if(socket.handshake.query.room){
          dursgna(socket.handshake.query.room,socket.handshake.query.user)
        }
    });

  if(key){
    socket.join(key)
  }
  socket.on('gagarin',(data)=>{
    io.sockets.emit('sahak',{text:"tt"})
  })
  socket.on('tyupik',(dee)=>{
    io.sockets.emit('vaysahak',{anun:dee.anun})
  })
  socket.on('python',(res)=>{
    var se=res.char
    var yourkey=res.mykey
    var yourname=res.myname
    let sqlU = "UPDATE python SET code = '"+se+"' WHERE key = '"+key+"'"
    db.all(sqlU, function (err, rows){
      var query = "SELECT * FROM python WHERE key ='"+key+"'";
      db.all(query, function (err, rows){
        io.to(key).emit('text',{cods:rows[0].code,yourname:yourname,yourkey:yourkey})
      })
    })    
  })
})
app.post('/join',function(req,res){
  res.render('join',{
    v:req.body.usernames,
    key:req.body.key,
    href:req.body.href
  })
})
//////add room/////
app.post('/add',function(req,res){
  var ket=randomstring.generate({
  length:11 ,
  charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmnopqrstuvwxyz1234567890'
  });
  //console.log(ket);
  var url=req.body.ur
  if(url=="web"){
    let vy = "INSERT into web(html,css,js,key)values('','','','"+ket+"')"
    db.all(vy, function (err, rows) {
      if(err){
        throw err;
      }
    })
    var query = "SELECT key FROM web WHERE key ='"+ket+"'";
    db.all(query, function (err, rows) {
      if(err){
        //console.log(err);
      }
      let kluch =rows[0].key;
      res.render('add',{
        username:req.body.nameadmin,
        key:kluch,
        href:url
      })
    })
  }
  if(url=="python"){
    var time=60
    let vy = "INSERT into python(code,key,time)values('','"+ket+"','"+time+"')"
    db.all(vy, function (err, rows){
      if(err){
        throw err;
      }
    })
    var query = "SELECT key FROM python WHERE key ='"+ket+"'";
    db.all(query, function (err, rows){
      if(err){
        console.log(err);
      }
      fs.mkdir(path.join(__dirname+'/senyakner', ket), (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        //console.log('Directory created successfully!'); 
        code=''
        user=''
        fs.writeFile(__dirname+'/senyakner/'+ket+'/'+ket+'.py', code, function (err) {
        });
        fs.writeFile(__dirname+'/senyakner/'+ket+'/users.txt', req.body.nameadmin+' ', function (err) {
        });
      }); 
      let kluch =rows[0].key;
      res.render('add',{
        username:req.body.nameadmin,
        key:kluch,
        href:url,
      })
    })
  }
  if(url=="java"){
    let vy = "INSERT into java(code,key)values('',"+ket+"')"
    db.all(vy, function (err, rows) {
      if(err){
        throw err;
      }
    })
    var query = "SELECT key FROM java WHERE key ='"+ket+"'";
    db.all(query, function (err, rows) {
      if(err){
        //console.log(err);
      }
      let kluch =rows[0].key;
      res.render('add',{
        username:req.body.nameadmin,
        key:kluch,
        href:url
      })
    })
  }
})
io.on('connection',(socket)=>{
  socket.on('runpy',(data)=>{
    var qwer=data.run
    var query = "SELECT code FROM python WHERE key ='"+qwer+"'";
    db.all(query, function (err, rows){
      var code=rows[0].code;
      var isinput=code.includes("input(");
      var aa=code.includes("import os");
      var aa1=code.includes("from os");
      var aa2=code.includes("import subprocess");
      var aa2=code.includes("import shlex");
      var aa3=code.includes("from subprocess");
      var aa4=code.includes("from shlex");
      var aa5=code.includes("import fs");
      var aa6=code.includes("from fs");
      var aa7=code.includes("from path");
      var aa8=code.includes("import path");
      var aa9=code.includes("import pathdir");
      var aa10=code.includes("from pathdir");
      var aa11=code.includes("import pathlib");
      var aa12=code.includes("from pathlib");    
      var aa13=code.includes("import glob");
      var aa14=code.includes("from glob");    
      var aa15=code.includes("import tempfile");
      var aa16=code.includes("from tempfile");    
      var aa17=code.includes("import shutil");
      var aa18=code.includes("from shutil");    
      var aa19=code.includes("import zipfile");
      var aa20=code.includes("from zipfile");    
      var aa21=code.includes("import tarfile");
      var aa22=code.includes("from tarfile");    
      var aa23=code.includes("import fileinput");
      var aa24=code.includes("from fileinput");
      if(isinput==true){
        io.sockets.emit('compilepy',{run:"Sorry You can't Use User inputs :(",key:qwer})
      }
      else{
        if(aa==true || aa1==true || aa2==true || aa3==true || aa4==true || aa5==true || aa6==true || aa7==true || aa8==true || aa9==true ||aa10==true || aa11==true|| aa12==true || aa13==true || aa14==true || aa15==true || aa16==true || aa17==true || aa18==true || aa19==true || aa20==true || aa21==true || aa22==true || aa23==true || aa24==true){
          io.sockets.emit('compilepy',{run:"Sorry You can't Use System Modules :(",key:qwer})
        }  
        else{
          var envData = { OS : "windows"};
          compiler.compilePython(envData , code , function(data){
            if(data.error){
              io.sockets.emit('compilepy',{run:data.error,key:qwer})       
            }
            else{
              io.sockets.emit('compilepy',{run:data.output,key:qwer})
            }
          });
        }
      }
    })  
  })
  socket.on('iam',(data)=>{
    //console.log('d')
    var yourkey=data.mykey
    var yourname=data.myname
    console.log(yourname)
    io.sockets.emit('yokey',{yourname:yourname,yourkey:yourkey})
  })
  function detik(klu) {
    rimraf(__dirname+'/senyakner/'+klu, function () { console.log("done"); });
    db.run(`DELETE FROM python WHERE key=?`, klu, function(err) {});
  }
  socket.on('destroy',(ke)=>{
    var klu=ke.mykey
    detik(klu)
  })
  socket.on('pydown',(ke)=>{
    var ke=ke.ke
    var query = "SELECT code FROM python WHERE key ='"+ke+"'";
    db.all(query, function (err, rows){
      var code=rows[0].code;
      fs.writeFile(__dirname+'/senyakner/'+ke+'/'+ke+'.py', code, function (err) {
        if (err) throw err;
        io.sockets.emit('dowmpy',{do:ke})
        app.get('/downloadpy',function(req,res){
          res.download(__dirname+'/senyakner/'+ke+'/'+ke+'.py',ke+'.py')
        })
      });
    });
  })

  socket.on('closeterminal',(data)=>{
    io.sockets.emit('closs',{yourkey:data.key})
  })
  socket.on('clearterminal',(data)=>{
    io.sockets.emit('cleear',{yourkey:data.key})
  })
  socket.on('mailsander',(ke)=>{
    let firstname=ke.firstname
    let lastname=ke.lastname
    let subject=ke.subject
    let email=ke.email
    let messagetext=ke.messagetext
    var transporter = nodemailer.createTransport({
      service: 'gmail',
        auth:{
          user: 'sandmailnow2020@gmail.com',
          pass: 'sandmailnow'
        }
    });
    var mailOptions = {
      from: 'sandmailnow2020@gmail.com',
      to: 'thegorgevorgyan@gmail.com',
      subject: subject,
      text: "Name:"+firstname+' '+"Lastname:"+lastname+' '+"email"+email+" "+messagetext
    };
    transporter.sendMail(mailOptions, function(error, info){});
  })
  function deleteroom(arg) {
    console.log('rr')
    io.sockets.emit('deletetime',{key:arg})
  }
}) 
  server.listen(1517,()=>{console.log('Start')})
