import pets from './pets.js';
import popup from './popup.js';

// слайдер

const slider = function () {
  const sliderItems = document.querySelector('.our-friends_items'),
    leftItems = document.querySelector('#left-items'),
    centerItems = document.querySelector('#center-items'),
    rightItems = document.querySelector('#right-items'),
    sliderBtnLeft = document.querySelector('.our-friends_left-arrow'),
    sliderBtnRight = document.querySelector('.our-friends_right-arrow');

  // fetch('./js/pets.json')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  // async function getPetsInfo() {
  //   const res = await fetch('./js/pets.json');
  //   const data = await res.json();
  //   return data;
  // }

  // getPetsInfo().then((data) => {
  // });

  function getRandom() {
    return Math.floor(Math.random() * (9 - 1));
  }

  // Создание общей функции Init, которая формирует изначальный контент карточек слайдера на странице

  let leftArr = [],
    centerArr = [],
    rightArr = [],
    itemCounter = 0;

  function init() {
    if (window.innerWidth >= 1200) {
      itemCounter = 3;
      setLeftItems(3);
      setCenterItems(3);
      setRightItems(3);
    } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
      itemCounter = 2;
      setLeftItems(2);
      setCenterItems(2);
      setRightItems(2);
    } else if (window.innerWidth < 768) {
      itemCounter = 1;
      setLeftItems(1);
      setCenterItems(1);
      setRightItems(1);
    }
  }

  init();

  let desctop = false,
    tablet = false,
    mobile = false;

  window.addEventListener('resize', () => {
    if (!desctop && window.innerWidth >= 1200) {
      desctop = true;
      tablet = false;
      mobile = false;
      // init();
    } else if (!tablet && window.innerWidth < 1200 && window.innerWidth >= 768) {
      desctop = false;
      tablet = true;
      mobile = false;
      // init();
    } else if (!mobile && window.innerWidth < 768) {
      desctop = false;
      tablet = false;
      mobile = true;
      // init();
    }
  });

  // Функции, которые непосредственно формируют элементы для каждого массива

  function setLeftItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!leftArr.includes(pets[randomNum]) && !centerArr.includes(pets[randomNum])) {
        leftArr.push(pets[randomNum]);
      } else --i;
    }
  }
  function setCenterItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!centerArr.includes(pets[randomNum]) && !leftArr.includes(pets[randomNum])) {
        centerArr.push(pets[randomNum]);
      } else --i;
    }
  }
  function setRightItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!rightArr.includes(pets[randomNum]) && !centerArr.includes(pets[randomNum])) {
        rightArr.push(pets[randomNum]);
      } else --i;
    }
  }

  // Функции переформирования массивов при нажатии кнопки влево и вправо

  function forward() {
    leftArr = centerArr;
    centerArr = rightArr;
    rightArr = [];
    setRightItems(itemCounter);
  }

  function backward() {
    rightArr = centerArr;
    centerArr = leftArr;
    leftArr = [];
    setLeftItems(itemCounter);
  }

  // Генерируем контент на странице

  function generateHtmlItems(leftArr, centerArr, rightArr) {
    for (let i = 0; i < itemCounter; i++) {
      const html = `
    <div class="our-friends_item">
      <img src="${leftArr[i].img}" alt="pet" class="pet_img">
      <div class="pets-card-title">${leftArr[i].name}</div>
      <button id="${leftArr[i].btnId}" class="pet-info_btn btns">Learn more</button>
    </div>
    `;
      leftItems.insertAdjacentHTML('afterbegin', html);
    }
    for (let i = 0; i < itemCounter; i++) {
      const html = `
     <div class="our-friends_item">
       <img src="${centerArr[i].img}" alt="pet" class="pet_img">
       <div class="pets-card-title">${centerArr[i].name}</div>
       <button id="${centerArr[i].btnId}" class="pet-info_btn btns">Learn more</button>
     </div>  
    `;
      centerItems.insertAdjacentHTML('afterbegin', html);
    }
    for (let i = 0; i < itemCounter; i++) {
      const html = `
      <div class="our-friends_item">
      <img src="${rightArr[i].img}" alt="pet" class="pet_img">
      <div class="pets-card-title">${rightArr[i].name}</div>
      <button id="${rightArr[i].btnId}" class="pet-info_btn btns">Learn more</button>
    </div>
      `;
      rightItems.insertAdjacentHTML('afterbegin', html);
    }
    popup();
  }

  generateHtmlItems(leftArr, centerArr, rightArr);

  // Вешаем слушатели на кнопки влево и вправо

  sliderBtnLeft.addEventListener('click', moveLeft);
  sliderBtnRight.addEventListener('click', moveRight);

  // удаление класса, чтобы слайдер крутился бесконечно

  sliderItems.addEventListener('animationend', (e) => {
    if (e.animationName === 'slider-move-right') {
      sliderItems.classList.remove('move_right');
    } else {
      sliderItems.classList.remove('move_left');
    }
  });

  // функционал для кнопок влево и вправо

  function moveLeft() {
    backward();
    sliderItems.classList.add('move_left');
    sliderBtnLeft.removeEventListener('click', moveLeft);
    sliderItems.addEventListener('animationend', (e) => {
      leftItems.innerHTML = '';
      centerItems.innerHTML = '';
      rightItems.innerHTML = '';
      generateHtmlItems(leftArr, centerArr, rightArr);
      sliderBtnLeft.addEventListener('click', moveLeft);
    });
  }

  function moveRight() {
    forward();
    sliderItems.classList.add('move_right');
    sliderBtnRight.removeEventListener('click', moveRight);
    sliderItems.addEventListener('animationend', (e) => {
      leftItems.innerHTML = '';
      centerItems.innerHTML = '';
      rightItems.innerHTML = '';
      generateHtmlItems(leftArr, centerArr, rightArr);
      sliderBtnRight.addEventListener('click', moveRight);
    });
  }
};

export default slider;
