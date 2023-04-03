console.log(`
Вёрстка страницы Main соответствует макету при ширине экрана 1280px:
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2

Вёрстка страницы Main соответствует макету при ширине экрана 768px:
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2

Вёрстка страницы Main соответствует макету при ширине экрана 320px:
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2

Вёрстка страницы Pets соответствует макету при ширине экрана 1280px:
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2

Вёрстка страницы Pets соответствует макету при ширине экрана 768px:
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2

Вёрстка страницы Pets соответствует макету при ширине экрана 320px:
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2

Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20

нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5
нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5

Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции:
на странице Main: +4
на странице Pets: +4

При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4

Верстка обеих страниц валидная: +8

Итого: 100 баллов`);

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
