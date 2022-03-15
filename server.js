
const express = require('express')();
let http = require('http').Server(express);

const xlsx = require('xlsx'); 
const filePath = 'src/baseimport/kugi.xlsx';
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];



function server(){

    let posts = [];
    let post = {};
  
  for (let cell in worksheet) {
    const cellAsString = cell.toString();
  
    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
        if (cellAsString[0] === 'A') {
            post.индекс = worksheet[cell].v;
        }
        if (cellAsString[0] === 'B') {
            post.категория = worksheet[cell].v;
        }
        if (cellAsString[0] === 'C') {
          post.цена = worksheet[cell].v;
            
        }
        if(cellAsString[0] === 'D'){
            post.колличетсво = worksheet[cell].v;
            posts.push(post);
            post = {};
        }
    }
  }
  
//   console.log(posts);
  let datas= posts;
  
  express.get('http://localhost:3000', (req, res)=>{
    res.status(200).json(datas);
  })

  const hostname = '127.0.0.1';
  const port = 3000;
  
    express.get('/', (req, res) => {
      res.send({posts});
  });
      
      http.listen(3000, function(){
        console.log('listening on *:3000');
      });
  };
  

  server();
