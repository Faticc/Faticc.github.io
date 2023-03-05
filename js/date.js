var date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const dateString = date.toLocaleString('ru-RU', options);
document.body.innerHTML += '<h3><p class="text-center">' + dateString + '</p></h3>';