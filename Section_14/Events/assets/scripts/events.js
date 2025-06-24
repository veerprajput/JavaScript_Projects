const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

const buttonClickHandler = (event) => {
    const originalText = event.target.textContent;
    event.target.disabled = true;
    event.target.textContent = 'Disabled Now'
    event.target.style = 'background-color: #6495ed;color: black;border-color: #6495ed'
    console.log(event);
    
    setTimeout(() => {
    event.target.disabled = false;
    buttons.forEach(btn => {
        if (btn.id === event.target.id) {
            console.log(btn.textContent)
            event.target.style = btn.style;
            event.target.textContent = originalText;
        }
    })
  }, 4000);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
    console.log(btn.textContent)
    btn.id = Math.random() * 2 * 2 * 2 / 2 * Math.floor(Math.random() * 3 + Math.random())
    const randEvent = ['click', 'dblclick'][Math.floor(Math.random() * ['click', 'dblclick'].length)];
    btn.addEventListener(randEvent, buttonClickHandler);
    btn.textContent = randEvent[0].toUpperCase() + randEvent.slice(1) + ' me'
    console.log(btn.getBoundingClientRect())
});

const listItems = document.querySelectorAll('li');

listItems.forEach(listItem => {
    colorList = ['#00FFD1', '#31E1F7', '#00FFAB', '#FF4949', '#FFAB76', '#FFFDA2', '#B983FF']
    listItem.addEventListener('click', event => {
        const randEvent = colorList[Math.floor(Math.random() * colorList.length)]
        event.target.style = `background-color: ${randEvent}`
    })
    listItem.addEventListener('dblclick', event => {
        const randEvent = colorList[Math.floor(Math.random() * colorList.length)]
        event.target.style = `background-color: #fff`
    })
})


let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
    if (distanceToBottom < document.documentElement.clientHeight) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);