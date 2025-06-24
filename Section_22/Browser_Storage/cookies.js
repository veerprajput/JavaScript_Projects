const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Veer', age: 30};
  document.cookie = '';
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]);
});
