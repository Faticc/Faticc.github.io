let people = [
  { name: "Абзарова Тельмана", birthday: new Date("08/03/2008"), gender: "male" },
  { name: "Абрамову Марию", birthday: new Date("01/27/2009"), gender: "female" },
  { name: "Амирова Эмиля", birthday: new Date("02/11/2009"), gender: "male" },
  { name: "Бабаева Бориса", birthday: new Date("09/29/2008"), gender: "male" },
  { name: "Бадалян Шушанну", birthday: new Date("05/21/2008"), gender: "female" },
  { name: "Гаврилова Виктора", birthday: new Date("01/01/2006"), gender: "male" },
  { name: "Голик Алёну", birthday: new Date("03/08/2008"), gender: "female" },
  { name: "Голикова Тимура", birthday: new Date("05/dd/2008"), gender: "male" },
  { name: "Голоева Милана", birthday: new Date("01/22/2008"), gender: "male" },
  { name: "Горбенко Викторию", birthday: new Date("05/11/2008"), gender: "female" },
  { name: "Гурову Полину", birthday: new Date("02/03/2008"), gender: "female" },
  { name: "Джалалова Барыша", birthday: new Date("07/23/2008"), gender: "male" },
  { name: "Джалалова Кадыра", birthday: new Date("09/24/2008"), gender: "male" },
  { name: "Исламову Айлин", birthday: new Date("07/19/2008"), gender: "female" },
  { name: "Комеристого Александра", birthday: new Date("07/10/2008"), gender: "male" },
  { name: "Кондратьева Александра", birthday: new Date("07/17/2008"), gender: "male" },
  { name: "Магомедова Артёма", birthday: new Date("05/19/2008"), gender: "male" },
  { name: "Мевлютову Залину", birthday: new Date("01/01/2008"), gender: "female" },
  { name: "Меретину Милану", birthday: new Date("12/27/2007"), gender: "female" },
  { name: "Немогучеву Юлию", birthday: new Date("05/26/2009"), gender: "female" },
  { name: "Пасова Никиту", birthday: new Date("09/26/2008"), gender: "male" },
  { name: "Сафарян Максима", birthday: new Date("09/22/2008"), gender: "male" },
  { name: "Соколова Данила", birthday: new Date("09/24/2008"), gender: "male" },
  { name: "Чехизе Малак", birthday: new Date("01/30/2009"), gender: "female" },
  { name: "Шарлай Алёну", birthday: new Date("09/27/2008"), gender: "female" }
];

window.onload = () => {
  const today = new Date();
  const personToday = people.find(person => today.getMonth() === person.birthday.getMonth() && today.getDate() === person.birthday.getDate());
  
  if (personToday) { 
    const gen = personToday.gender === 'female' ? 'она' : 'он';
    const sch = personToday.gender === 'female' ? 'здоровой' : 'здоровым'; 
    const uch = personToday.gender === 'female' ? 'ученицу' : 'ученика';
    const ei = personToday.gender === 'female' ? 'Ей' : 'Ему';
    const age = today.getFullYear() - personToday.birthday.getFullYear();
    
    const nameElement = document.getElementById("name");
    const genElement = document.getElementById("gen");
    const schElement = document.getElementById("sch");
    const uchElement = document.getElementById("uch");
    const eiElement = document.getElementById("ei");
    const ageElement = document.getElementById("age");
    const modalElement = document.getElementById("exampleModal");

    nameElement.innerHTML = `${personToday.name}`;
    genElement.innerHTML = `${gen}`;
    schElement.innerHTML = `${sch}`;
    uchElement.innerHTML = `${uch}`;
    eiElement.innerHTML = `${ei}`;
    ageElement.innerHTML = `${age}`;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  } else {
    console.log("Сегодня никто не празднует день рождения.");
  }

};

document.write('\
<div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">\
<div class="modal-dialog">\
 <div class="modal-content">\
   <div class="modal-header">\
     <h5 class="modal-title text-dark" id="exampleModalLabel">С днем рождения!</h5>\
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
   </div>\
     <div class="modal-body">\
       Поздравляем <span id="uch"></span> 8В класса <span id="name"></span> 🎂<br>\
       C днём рождения! Надеемся, <span id="gen"></span> будет <span id="sch"></span>!🥳<br>\
       И проведёт этот день весело и съест много вкусностей.✨<br>\
       Пожалуйста, продолжайте быть счастливыми!✨<br>\
       <span id="ei"></span> исполняется <span id="age"></span> лет. \
     </div>\
   <div class="modal-footer">\
     <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Закрыть</button>\
   </div>\
 </div>\
</div>\
</div>\
')
