document.addEventListener('DOMContentLoaded', function(){
    const date = new Date();
    document.querySelector('#age').innerHTML = date.getFullYear() - 2000;
}, false);