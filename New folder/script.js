const bar = document.getElementById('bar');
const nav = document.getElementById('title-link')

if(bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}