let people = [
    { name: "Абзарова Тельмана", birthday: new Date("08/03/2008") },
    { name: "Абрамову Марию", birthday: new Date("01/27/2009"), },
    { name: "Амирова Эмиля", birthday: new Date("02/11/2009") },
    { name: "Бабаева Бориса", birthday: new Date("09/29/2008") },
    { name: "Бадалян Шушанну", birthday: new Date("05/21/2008"), },
    { name: "Гаврилова Виктора", birthday: new Date("MM/dd/2006") },
    { name: "Голик Алёну", birthday: new Date("03/08/2008"), },
    { name: "Голикова Тимура", birthday: new Date("05/dd/2008") },
    { name: "Голоева Милана", birthday: new Date("01/22/2008") },
    { name: "Горбенко Викторию", birthday: new Date("05/11/2009"), },
    { name: "Гурову Полину", birthday: new Date("02/03/2008"), },
    { name: "Джалалова Барыша", birthday: new Date("07/23/2008") },
    { name: "Джалалова Кадыра", birthday: new Date("09/24/2008") },
    { name: "Исламову Айлин", birthday: new Date("07/19/2008"), },
    { name: "Комеристого Александра", birthday: new Date("08/10/2008") },
    { name: "Кондратьева Александра", birthday: new Date("07/17/2008") },
    { name: "Магомедова Артёма", birthday: new Date("05/19/2008") },
    { name: "Мевлютову Залину", birthday: new Date("MM/dd/2008"), },
    { name: "Меретину Милану", birthday: new Date("12/27/2007"), },
    { name: "Немогучеву Юлию", birthday: new Date("05/26/2009"), },
    { name: "Пасова Никиту", birthday: new Date("09/26/2008") },
    { name: "Сафарян Максима", birthday: new Date("09/22/2008") },
    { name: "Соколова Данила", birthday: new Date("09/24/2008") },
    { name: "Чехизе Малак", birthday: new Date("01/30/2009"), },
    { name: "Шарлай Алёну", birthday: new Date("09/27/2008"), }
  ];
  window.onload = function greetOnBirthday() {
    const today = new Date();
  
    // Перебираем массив людей и проверяем, кто из них имеет сегодня день рождения
    const personToday = people.find(
      (person) =>
        today.getMonth() === person.birthday.getMonth() &&
        today.getDate() === person.birthday.getDate()
    );
  
    // Если есть человек из массива, у которого сегодня день рождения, вызываем модалку
    if (personToday) {
      const nameElement = document.getElementById("name");
      nameElement.innerHTML = `${personToday.name}`;
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
         с днём рождения Надеемся, он будет здоровым!🥳<br>\
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