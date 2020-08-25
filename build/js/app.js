'use strict';

/* var details = document.querySelector('details');

details.open = true;  // Отобразить содержимое
details.open = false; // Скрыть содержимое
// Наблюдатель, который будет следить за изменением атрибута open
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

    // Елемент у которого измелился атрибут
    var details = mutation.target

    // Если елемент был закрыт — ничего не делаем
    if (!details.open) {
      return
    }


    // Иначе, находим все открытые елементы details и перебираем их
    document.querySelectorAll('details[open]').forEach(el => {

      // Исключаем из перебора елемент который мы только что открыли
      if (el === details) {
        return
      }

      // Закрываем все остальные елемент details
      el.open = false
    })

  });
});

// Наблюдаем за изменением только одного атрибута
const config = {
  attributeFilter: ['open']
}


// Вешаем наблюдатель на все елементы details внутри акордиона
document.querySelectorAll('details').forEach(el => observer.observe(el, config)) */


const modal = document.querySelector(".popup");
const btnClose = document.querySelector(".popup__close");

btnClose.addEventListener("click", function (){
    modal.classList.add("popup");
});