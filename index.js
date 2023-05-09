// class active pada navbar search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('.search-button ').onclick=()=>{
    searchForm.classList.toggle('active');
    searchBox.focus();
}

// navbar responsif
const navbarResponsif = document.querySelector('.navbar-responsif');
document.querySelector('.bar i').onclick=()=>{
    navbarResponsif.classList.toggle('active');
}
//merubah icon pas di klik
// let bar = document.querySelector('.bar');
// let icon = document.querySelector('.fa-bars');
// bar.onclick = function(){
//     if(icon.classList.contains('fa-bars')){
//         icon.classList.replace('fa-bars','fa-xmark');

//     }else{
//         icon.classList.replace('fa-xmark','fa-bars');
//     }
// }

// klik pada saat di luar sidebar untuk mnghilangkan navbar
const hambuger = document.querySelector('.bar');
const sb = document.querySelector('.search-button');

document.addEventListener('click', function(e){
    if(!hambuger.contains(e.target)&& !navbarResponsif.contains(e.target)){
        navbarResponsif.classList.remove('active');
    }

    if(!sb.contains(e.target)&& !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
})

// const search = document.querySelector('.');
// document.addEventListener('click', function(e){
//     if(search.contains(e.target)&& !searchForm.contains(e.target)){
//         searchForm.classList.remove('active');
//     }
// })




