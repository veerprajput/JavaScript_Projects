const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      console.log(posData)
    },
    error => {
      console.log(error)
    },
  )
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 10; i++) {
//   result += i * Math.random() * 2323;
// }

// console.log(result)