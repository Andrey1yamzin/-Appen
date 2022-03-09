const path = require('path');
const url = require('url');



const xlsx = require('xlsx'); 
const filePath = 'src/baseimport/kugi.xlsx';
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];





const express = require('express')();
let http = require('http').Server(express);



const {app, BrowserWindow} = require('electron');
const { dirname } = require('path');

let win;


function server(){

  let posts = [];
  let post = {};

for (let cell in worksheet) {
  const cellAsString = cell.toString();

  if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
      if (cellAsString[0] === 'A') {
          post.title = worksheet[cell].v;
      }
      if (cellAsString[0] === 'B') {
          post.author = worksheet[cell].v;
      }
      if (cellAsString[0] === 'C') {
          post.released = worksheet[cell].v;
          posts.push(post);
          post = {};
      }
  }
}

console.log(posts);

  express.get('localhost', function(req, res){
      res.sendfile('readfile.js');
    });
    
    http.listen(3000, function(){
      console.log('listening on *:3000');
    });
}





function createWindow(){
    win = new BrowserWindow({
        width:1280, 
        height:500, 
        icon: __dirname + '/icons/icon.png'
    });

    win.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes:true
    }));
    //потом закоментить
    win.webContents.openDevTools();
      //потом закоментить
    win.on('closed', function(){
        win = null; 
    }) 

server();
}






app.on('ready', createWindow);

