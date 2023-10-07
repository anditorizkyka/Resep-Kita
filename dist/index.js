const list = document.getElementById('list');
const menu = document.getElementById('menu');
menu.addEventListener('click', ()=> {
    if(list.classList.contains('hidden')) {
        list.classList.add('transition')
        list.classList.remove('hidden');
        list.classList.add('fixed');
    } else {
        list.classList.add('hidden');
        list.classList.remove('fixed');
    }
})
