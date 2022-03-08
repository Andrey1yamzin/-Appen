// сделать функциуй чтобы запустить издругогофайла

let i = 0;
let urlDataOne = '';
let urlDataTwo = '';

for (let i = 0; i < 2; i++) { 
urlLink(i);  
};
function urlLink(url){
  if(urlDataOne == ''){
    urlDataOne = sessionStorage.getItem(url);
    return;
  }else{
    urlDataTwo = sessionStorage.getItem(url);
  }
};
console.log(urlDataOne);
console.log(urlDataTwo);

