const task3Element = document.getElementById('task-3');

function hit() {
    alert('Hello There');
}

function take_name(name) {
    alert(`${name}`);
}

function dog(a, b, c) {
    alert(`${a} ${b} ${c}`);
}

hit()
take_name('Jacob')
task3Element.addEventListener('click', hit)
dog('Veer', 'IS', 'Cool')

