// console.log(`
// верстка страницы валидная +4
// логотип в хедере состоит из текстовых элементов +1
// страница содержит ровно один элемент <h1> +1
// добавлен favicon +1

// блок <header> +5
// блок Not only +5
// блок About +5
// блок Our Friends +5
// блок Help +5
// блок In addition +5
// блок <footer> +5

// для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid) +2
// при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2
// фоновый цвет тянется на всю ширину страницы +2

// элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2
// каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2
// плавная прокрутка по якорям +2
// выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main +2
// выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2
// обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы +2

// верстка страницы валидная +4
// логотип в хедере состоит из текстовых элементов +1
// страница содержит ровно один элемент <h1> +1
// добавлен favicon +1

// блок <header> +5
// блок Our Friends +5
// блок <footer> +5

// при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2
// фоновый цвет тянется на всю ширину страницы +2

// Итого: 100 баллов`);

// Бургер меню

const burgerBtn = document.querySelector('.burger-menu'),
  navigation = document.querySelector('.navigation'),
  menuItem = document.querySelectorAll('.menu_item');
const body = document.body;
const html = document.documentElement;

document.addEventListener('click', (e) => {
  if (!navigation.contains(e.target) && !burgerBtn.contains(e.target)) {
    navigation.classList.remove('menu_open');
    burgerBtn.classList.remove('menu_rotate');
  }
  checkMenuOpen();
});

function checkMenuOpen() {
  if (navigation.className.includes('menu_open')) {
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
  } else {
    html.style.overflow = 'visible';
    body.style.overflow = 'visible';
  }
}

burgerBtn.addEventListener('click', () => {
  navigation.classList.toggle('menu_open');
  burgerBtn.classList.toggle('menu_rotate');
  checkMenuOpen();
});
menuItem.forEach((i) => {
  i.addEventListener('click', () => {
    navigation.classList.remove('menu_open');
    burgerBtn.classList.remove('menu_rotate');
    checkMenuOpen();
  });
});

// удлаить
