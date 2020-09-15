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


/* const modal = document.querySelector(".popup");
const btnClose = document.querySelector(".popup__close");

btnClose.addEventListener("click", function (){
    modal.classList.add("popup");
}); */

//маска на input type='tel'
$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-99-99");

  // Открытие popup при клике на "заказать звонок"
  $('.header__row-toform').click(function () {
    $('.popup').fadeIn();
  });

  // Закрытие popup при клике на крестик
  $('.popup__close').click(function () {
    $('.popup').fadeOut();
  });

  // Открытие popup "заявка принята" при клике на кнопки "перезвоните мне"
  $('input[value*="перезвоните"]').click(function () {
    var errors = 0;
    var fields = $('input[type=text], input[type=tel]')
    fields.each(function () {
      var value = $(this).val();
      if (value.length < 3 || value == 'имя' || value == 'телефон') {
        $(this).css('background', '#f4e2e2');
        errors++;
      } else {
        $(this).css('background', 'none');
      }
    });
    if (!errors) {
      $('.popup-taken').fadeIn();
    }
  });

  // Закрытие popup "заявка принята" при клике на крестик
  $('.popup-taken__close').click(function () {
    $('.popup-taken').fadeOut();
  });
  $('.programs__buttons-wrapper-btn:nth-of-type(1)').addClass('active');
  
  $('.programs__buttons-wrapper-btn:nth-of-type(1)').click(function () {
    $('.block').css('display', 'none');
    $('.block:nth-of-type(2)').css('display', 'block');
    $('.programs__buttons-wrapper-btn').removeClass('active');
    $(this).addClass('active');
  });
  $('.programs__buttons-wrapper-btn:nth-of-type(2)').click(function () {
    $('.block').css('display', 'none');
    $('.block:nth-of-type(3)').css('display', 'block');
    $('.programs__buttons-wrapper-btn').removeClass('active');
    $(this).addClass('active');
  });
  $('.programs__buttons-wrapper-btn:nth-of-type(3)').click(function () {
    $('.block').css('display', 'none');
    $('.block:nth-of-type(4)').css('display', 'block');
    $('.programs__buttons-wrapper-btn').removeClass('active');
    $(this).addClass('active');
  });
  $('.programs__buttons-wrapper-btn:nth-of-type(4)').click(function () {
    $('.block').css('display', 'none');
    $('.block:nth-of-type(5)').css('display', 'block');
    $('.programs__buttons-wrapper-btn').removeClass('active');
    $(this).addClass('active');
  });
  $('.programs__buttons-wrapper-btn:nth-of-type(5)').click(function () {
    $('.block').css('display', 'none');
    $('.block:nth-of-type(6)').css('display', 'block');
    $('.programs__buttons-wrapper-btn').removeClass('active');
    $(this).addClass('active');
  });
});
