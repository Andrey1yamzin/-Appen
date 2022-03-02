// let select = document.querySelector('.content--option');

// select.addEventListener('change', function () {
//     let key = this.value;
//     console.log(key);
// });

let files = [];
//кнопка сброса
let btnReload = document.querySelector('.btn-reload');
//кнопка поиска
let btnSearch = document.querySelector('.btn-search');
// ключенвые слова по которым должен осуществляться поисквк
let listOwnership = document.querySelector('.content--ownership');
let listRoom = document.querySelector('.content--room');
let listArea = document.querySelector('.content--area');
let listSquare = document.querySelector('.content--square');

const preview = document.createElement('div');
preview.classList.add('preview');

let btnshowLoadBody = document.querySelector('.visible-btn__load--file');
let loadBody = document.querySelector('.wrapper__loadfile');
let btnCloseLoadBody = document.querySelector('.loadfile-close');

let fileUploader = document.getElementById('fileUploader');
let btnLoadFile = document.querySelector('.loadfile-loading');
let btnLoadingSave = document.querySelector('.loadfile-save');

fileUploader.insertAdjacentElement('afterend', preview);
//выбор нескольких файлов
let options = {
    multi: true,
    onUpload(files){
    for (let key in files) {
        sessionStorage.setItem(key, files[key].path);
        window.location.reload();
        //доделать получение ссылки на файл чтобы его прочитать и перезаписать на новый файл console.log( sessionStorage.getItem(0));
      }
    }

}
// let onUpload = options.onUpload;
 if(options.multi){
    fileUploader.setAttribute('multiple', true);
 }
// начало кода открытие и закрытие тела загрузки файла
btnshowLoadBody.addEventListener('click', function(){
    showLoadBody(); 
});
btnCloseLoadBody.addEventListener('click', function(){
    hideLoadBody();
});
function showLoadBody(){
    loadBody.classList.remove('load__hide')
    loadBody.classList.add('load__show');
}
function hideLoadBody(){
    loadBody.classList.remove('load__show')
    loadBody.classList.add('load__hide');
    preview.innerHTML = '';
}
// конец кода открытие и закрытие тела загрузки файла

// начало кода  кнопки выбора файла
const triggerInput = () => fileUploader.click();
const changeHandl = (event)=> {
    if(!event.target.files.length){
        return
    }
 

    files= Array.from(event.target.files);
    preview.innerHTML = '';
    btnLoadingSave.style.display = 'inline';
    files.forEach(file => {
        if(!file.type.match('application')){
            return
        }

        const reader = new FileReader()
        reader.onload = ev => {
            console.log(ev);
            preview.insertAdjacentHTML('afterbegin', `
            <div class="preview--excel">
            <div class="preview--remove" data-name="${file.name}">&times;</div>
            <img src="icons/excel.png" alt="${file.name}"/>
            <span>${file.name}</span>
            </div>
            `)

        }
        reader.readAsDataURL(file);
        
    })


};

const saveHundler = () => {
    options.onUpload(files);
   
}




preview.addEventListener('click',(event)=>{
    console.log(event.target.dataset);
    if(!event.target.dataset.name){
        return
    }

        const {name} = event.target.dataset;
        files = files.filter(file => file.name !== name);
        if(!files.length){
            btnLoadingSave.style.display = 'none';
        }
        const block = preview.querySelector(`[data-name= "${name}"]`).closest('.preview--excel');
        block.remove();
    });
btnLoadFile.addEventListener('click', triggerInput);
fileUploader.addEventListener('change', changeHandl);
// конец кода кнопки выбора файла
// сохранение файлов
btnLoadingSave.addEventListener('click', saveHundler);

// сохранение файлов

btnSearch.addEventListener('click',function(){
console.log(listOwnership.value);
console.log(listRoom.value);
console.log(listArea.value);
console.log(listSquare.value);
});
btnReload.addEventListener('click',function(){
    pageReload();
});
function pageReload(){
    window.location.reload();
};

