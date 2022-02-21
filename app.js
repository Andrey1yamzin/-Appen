// let select = document.querySelector('.content--option');

// select.addEventListener('change', function () {
//     let key = this.value;
//     console.log(key);
// });

//кнопка сброса
let btnReload = document.querySelector('.btn-reload');
//кнопка поиска
let btnSearch = document.querySelector('.btn-search');
// ключенвые слова по которым должен осуществляться поисквк
let listOwnership = document.querySelector('.content--ownership');
let listRoom = document.querySelector('.content--room');
let listArea = document.querySelector('.content--area');
let listSquare = document.querySelector('.content--square');

let visibleBtnLoadFile = document.querySelector('.visible-btn__load--file');
let btnLoadFile = document.querySelector('.btn-load__file');

let fileUploader = document.getElementById('fileUploader');



visibleBtnLoadFile.addEventListener('click', function(){
    btnLoadFile.classList.toggle('btn-load__file--visible');
    visibleBtnLoadFile.classList.toggle('visible-btn__load--file_close');
    
});



btnSearch.addEventListener('click',function(){
console.log(listOwnership.value);
console.log(listRoom.value);
console.log(listArea.value);
console.log(listSquare.value);
});


btnReload.addEventListener('click',function(){
    pageReload();
})




function pageReload(){
    window.location.reload();
}