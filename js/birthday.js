let people = [
  { name: "мен", birthday: new Date("08/03/2008"), gender: "male" }
];

window.onload = () => {
  const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
  const sortedPeople = people
    .map(person => {
      const birthday = new Date(today.getFullYear(), person.birthday.getMonth(), person.birthday.getDate(), 0, 0, 0);
      const diffTime = Math.abs(birthday.getTime() - today.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return { ...person, daysUntilBirthday: diffDays };
    })
    .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday);

  const nextBirthdayPerson = sortedPeople.find(person => person.daysUntilBirthday === 0) || sortedPeople[0];

  if (nextBirthdayPerson.daysUntilBirthday === 0) {
    const gen = nextBirthdayPerson.gender === 'female' ? 'она' : 'он';
    const sch = nextBirthdayPerson.gender === 'female' ? 'здоровой' : 'здоровым'; 
    const uch = nextBirthdayPerson.gender === 'female' ? 'ученицу' : 'ученика';
    const ei = nextBirthdayPerson.gender === 'female' ? 'Ей' : 'Ему';
    const age = today.getFullYear() - nextBirthdayPerson.birthday.getFullYear();
    
    const nameElement = document.getElementById("name");
    const genElement = document.getElementById("gen");
    const schElement = document.getElementById("sch");
    const uchElement = document.getElementById("uch");
    const eiElement = document.getElementById("ei");
    const ageElement = document.getElementById("age");
    const modalElement = document.getElementById("exampleModal");

    nameElement.innerHTML = `${nextBirthdayPerson.name}`;
    genElement.innerHTML = `${gen}`;
    schElement.innerHTML = `${sch}`;
    uchElement.innerHTML = `${uch}`;
    eiElement.innerHTML = `${ei}`;
    ageElement.innerHTML = `${age}`;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  } else {
    const daysUntilNextBirthday = nextBirthdayPerson.daysUntilBirthday;
    console.log(`Мы поздравим ${nextBirthdayPerson.name} через ${daysUntilNextBirthday} дней.`);
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
');
