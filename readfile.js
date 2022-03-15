
let data = request('http://localhost:3000');
async function request(url, method = 'GET', data = null){
    
try{
    const headers = {};
    let body
    if(data){
        headers['Content-Type'] = 'application/json'
        body = JSON.stringify(data)
    }

   const response = await fetch(url, {
        method,
        headers,
        body
    })
    return await response.json();  

} catch(e){
    console.warn('Error');
}
};




let parse ;
data.then(function (f1) {
parse = (f1.posts);


for(key in parse){
    
}
parse.forEach(function(element, index, array) {
    record(element, index);
});
});

function record(el, int){
document.querySelector('.data-wrapper').innerHTML = `<table class="data-base"></table>`;
for(key in el){
    let colum = document.createElement('td');
    colum.innerHTML = `<th>${key}</th>`;
    document.querySelector('.data-base').appendChild(colum);

};  
console.log(int);
// for(let i = 0; i < ; i++){
//     // console.log(Object.values(el).join(' '));
//     console.log(i)
// }

}
