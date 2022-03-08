const path = require('path');
const url = require('url'); 
const xlsx = require('xlsx');

const {app, BrowserWindow} = require('electron');
const { dirname } = require('path');

let win;

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
}

app.on('ready', createWindow);

