let people = [
    { name: "Абзарова Тельмана", birthday: new Date("08/03/2008"), gender: "male" },
    { name: "Абрамову Марию", birthday: new Date("01/27/2009"), gender: "female" },
    { name: "Амирова Эмиля", birthday: new Date("02/11/2009"), gender: "male" },
    { name: "Бабаева Бориса", birthday: new Date("09/29/2008"), gender: "male" },
    { name: "Бадалян Шушанну", birthday: new Date("05/21/2008"), gender: "female" },
    { name: "Гаврилова Виктора", birthday: new Date("MM/dd/2006"), gender: "female" },
    { name: "Голик Алёну", birthday: new Date("03/08/2008"), gender: "female" },
    { name: "Голикова Тимура", birthday: new Date("05/dd/2008"), gender: "female" },
    { name: "Голоева Милана", birthday: new Date("01/22/2008"), gender: "female" },
    { name: "Горбенко Викторию", birthday: new Date("05/11/2009"), gender: "female" },
    { name: "Гурову Полину", birthday: new Date("02/03/2008"), gender: "female" },
    { name: "Джалалова Барыша", birthday: new Date("07/23/2008"), gender: "male" },
    { name: "Джалалова Кадыра", birthday: new Date("09/24/2008"), gender: "male" },
    { name: "Исламову Айлин", birthday: new Date("07/19/2008"), gender: "female" },
    { name: "Комеристого Александра", birthday: new Date("08/10/2008"), gender: "male" },
    { name: "Кондратьева Александра", birthday: new Date("07/17/2008"), gender: "male" },
    { name: "Магомедова Артёма", birthday: new Date("05/19/2008"), gender: "male" },
    { name: "Мевлютову Залину", birthday: new Date("MM/dd/2008"), gender: "female" },
    { name: "Меретину Милану", birthday: new Date("12/27/2007"), gender: "female" },
    { name: "Немогучеву Юлию", birthday: new Date("05/26/2009"), gender: "female" },
    { name: "Пасова Никиту", birthday: new Date("09/26/2008"), gender: "male" },
    { name: "Сафарян Максима", birthday: new Date("09/22/2008"), gender: "male" },
    { name: "Соколова Данила", birthday: new Date("09/24/2008"), gender: "male" },
    { name: "Чехизе Малак", birthday: new Date("01/30/2009"), gender: "female" },
    { name: "Шарлай Алёну", birthday: new Date("09/27/2008"), gender: "female" }
  ];
  window.onload = function greetOnBirthday() {
    const today = new Date();
  
    // Перебираем массив людей и проверяем, кто из них имеет сегодня день рождения
    const personToday = people.find(
      (person) =>
        today.getMonth() === person.birthday.getMonth() &&
        today.getDate() === person.birthday.getDate()
    );
  
    people.forEach(person => {
      let pronoun;
      if (person.gender === 'male') {
        pronoun = 'он';
      } else if (person.gender === 'female') {
        pronoun = 'она';
      }
    });

    people.forEach(person => {
      let zdr;
      if (person.gender === 'male') {
        zdr = 'здоровым';
      } else if (person.gender === 'female') {
        zdr = 'здоровой';
      }
    });

    // Если есть человек из массива, у которого сегодня день рождения, вызываем модалку
    if (personToday) {
      const nameElement = document.getElementById("name");
      nameElement.innerHTML = `${personToday.name}`;
      const genderElement = document.getElementById("gender");
      genderElement.innerHTML = `${pronoun}`;
      const zdrElement = document.getElementById("zdr");
      zdrElement.innerHTML = `${zdr}`;
      const modalElement = document.getElementById("exampleModal");
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.log("Нет имени для поздравления");
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
         Поздравляем ученика 8В класса <span id="name"></span> 🎂<br>\
         с днём рождения Надеемся, <span id="gender"></span> будет <span id="zdr"></span>!🥳<br>\
         И проведёт этот день весело и съест много вкусностей.✨<br>\
         Пожалуйста, продолжайте быть счастливыми!✨<br>\
       </div>\
     <div class="modal-footer">\
       <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Закрыть</button>\
     </div>\
   </div>\
 </div>\
</div>\
 ')
