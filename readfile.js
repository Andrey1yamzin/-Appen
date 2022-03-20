
fetch('http://localhost:3000')
.then(res=>res.json())
.then(function(data){
    record(data.posts);
}).catch(err=>console.log('ERROR'))


let btnSeearch = document.querySelector('.btn-search');

let dataWrapper = document.querySelector('.data-wrapper'); 

let wrapperTableNumber = document.createElement('div');
let wrapperTableOwn = document.createElement('div');
let wrapperTableroom = document.createElement('div');
let wrapperTablearea = document.createElement('div');
let wrapperTablesize = document.createElement('div');

wrapperTableNumber.innerHTML = `<table class="table-number"></table>`;
wrapperTableOwn.innerHTML = `<table class="table-own"></table>`;
wrapperTableroom.innerHTML = `<table class="table-room"></table>`;
wrapperTablearea.innerHTML = `<table class="table-area"></table>`;
wrapperTablesize.innerHTML = `<table class="table-size"></table>`;
dataWrapper.appendChild(wrapperTableNumber);
dataWrapper.appendChild(wrapperTableOwn);
dataWrapper.appendChild(wrapperTableroom);
dataWrapper.appendChild(wrapperTablearea);
dataWrapper.appendChild(wrapperTablesize);

let arraySearchFilter = [];
btnSeearch.addEventListener('click', function(){
        for (let i = 0; i < datalist.length; i++){ 
            frrr(datalist[i])
        }
        document.querySelector('.btn-unload').classList.remove('btn-unload--hide');
});



function frrr(strinFilter){
let filterValue = Object.values(strinFilter);

arraySearchFilter.push(listOwnership.value, listRoom.value, listArea.value, listSquare.value);

let own = filterValue.includes(arraySearchFilter[0]);
let room = filterValue.includes(arraySearchFilter[1]);
let area = filterValue.includes(arraySearchFilter[2]);
let size = filterValue.includes(arraySearchFilter[3]);
    if(own === true && room === true && area === true && size === true){
        oneColumnRow(filterValue);
        unloadData(filterValue);
    }






}



let datalist;
function record(database){
    oneColumn(database[0]);
return datalist = database;
}


function oneColumn(numberItem){
    for(key in numberItem){
        if(key == 'Номер'){
            let theadNumber = document.createElement('thead');
            theadNumber.innerHTML = `<tr><td><span>${key}</span></td></tr>`;
            document.querySelector('.table-number').appendChild(theadNumber);
        } if(key == 'собственность'){
            let theadOwn = document.createElement('thead');
            theadOwn.innerHTML = `<tr><td><span>${key}</span></td></tr>`;
            document.querySelector('.table-own').appendChild(theadOwn);
        }
        if(key == 'помещение'){
            let theadroom = document.createElement('thead');
            theadroom.innerHTML = `<tr><td><span>${key}</span></td></tr>`;
            document.querySelector('.table-room').appendChild(theadroom);
        }
        if(key == 'Район'){
            let theadarea = document.createElement('thead');
            theadarea.innerHTML = `<tr><td><span>${key}</span></td></tr>`;
            document.querySelector('.table-area').appendChild(theadarea);
        }
        if(key == 'Площадь'){
            let theadsize = document.createElement('thead');
            theadsize.innerHTML = `<tr><td><span>${key}</span></td></tr>`;
            document.querySelector('.table-size').appendChild(theadsize);
        }
        };
}


function oneColumnRow(valuesNumberItem){
let arrayValues = valuesNumberItem;
            let tbodyNumber = document.createElement('tbody');
            tbodyNumber.innerHTML = `<tr><td><span>${arrayValues[0]}</span></td></tr>`;
            document.querySelector('.table-number').appendChild(tbodyNumber);

            let tbodyOwn = document.createElement('tbody');
            tbodyOwn.innerHTML = `<tr><td><span>${arrayValues[1]}</span></td></tr>`;
            document.querySelector('.table-own').appendChild(tbodyOwn);

            let tbodyroom = document.createElement('tbody');
            tbodyroom.innerHTML = `<tr><td><span>${arrayValues[2]}</span></td></tr>`;
            document.querySelector('.table-room').appendChild(tbodyroom);

            let tbodyarea = document.createElement('tbody');
            tbodyarea.innerHTML = `<tr><td><span>${arrayValues[3]}</span></td></tr>`;
            document.querySelector('.table-area').appendChild(tbodyarea);

            let tbodysize = document.createElement('tbody');
            tbodysize.innerHTML = `<tr><td><span>${arrayValues[4]}</span></td></tr>`;
            document.querySelector('.table-size').appendChild(tbodysize);
};
let unloadFile = [];
function unloadData(dataFile){
    return unloadFile.push(dataFile);
}

let btnUnload = document.querySelector('.btn-unload');
btnUnload.addEventListener('click', function(){
    console.log(unloadFile)
})

//что бы сделать объект нужно попробовать получить ключ с данных полученных с сервара и данные которые приходят массивом соединить это key value