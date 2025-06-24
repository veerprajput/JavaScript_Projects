const ul = document.body.firstElementChild.nextElementSibling;
const li = ul.firstElementChild.firstElementChild;

console.log(li)
const section = document.querySelector('div')
const button = document.getElementById('V')
const otherbutton = document.getElementById('I')


button.addEventListener('click', () => {
    section.className = 'visible'
});
otherbutton.addEventListener('click', () => {
    section.className = 'invisible'
});