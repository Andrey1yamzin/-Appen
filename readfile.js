
fetch('http://localhost:3000')
.then(res=>res.json())
.then(function(data){
    record(data.posts);
}).catch(err=>console.log('ERROR'))


function record(database){


    // for(key in database){
    //     for(let i = 0; i < database.length; i++){
    //         console.log(key)
    //         };
    // }
console.log(database);

// database.forEach(el => {
//     document.querySelector('.data-wrapper').innerHTML = `<table class="data-base"></table>`;
//   for(key in el){
//     let colum = document.createElement('theader');
//     colum.innerHTML = `<td>${key}</td>`;
//     document.querySelector('.data-base').appendChild(colum);

//     console.log(key)
//      for(let i = 0; i<database.length; i++){
      
//       }}
// });


};

   








// let parse ;
// data.then(function (f1) {
// // return parse = (f1.posts);
// console.log(f1.posts)
// })

// console.log(parse)
// for(key in parse){
    
// }
// parse.forEach(function(element, index, array) {
//     record(element, index);
// });
// });

// function record(el, int){
// document.querySelector('.data-wrapper').innerHTML = `<table class="data-base"></table>`;
// for(key in el){
//     let colum = document.createElement('td');
//     colum.innerHTML = `<th>${el[key]}</th>`;
//     document.querySelector('.data-base').appendChild(colum);
//     console.log(key)
// }};  

// for(key in el){
//     let colum = document.createElement('td');
//     colum.innerHTML = `<th>${el[key]}</th>`;
//     document.querySelector('.data-base').appendChild(colum);