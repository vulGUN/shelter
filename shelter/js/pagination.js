import pets from './pets.js';
import popup from './popup.js';

const pagination = function () {
  const pagItems = document.querySelector('.our-friends_items'),
    nextBtn = document.querySelector('.pagination_next'),
    prevBtn = document.querySelector('.pagination_prev'),
    pagNow = document.querySelector('.pagination_now'),
    lastBtn = document.querySelector('.pagination_last'),
    firstBtn = document.querySelector('.pagination_first');

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

  let petsArr = [];

  function generatePetsArr() {
    for (let i = 0; i < 48; i += 8) {
      const arr = [];
      for (let x = 0; x < 8; x++) {
        const randomNum = getRandom();
        if (!arr.includes(pets[randomNum])) {
          arr.push(pets[randomNum]);
        } else {
          --x;
        }
      }
      petsArr.push([...arr]);
    }
  }

  generatePetsArr();

  function setItemsWrap() {
    for (let i = 0; i < petsArr.length; i++) {
      pagItems.innerHTML += `<div class="our-friends_itemWrap"></div>`;
    }
  }

  setItemsWrap();

  let pagItem = document.querySelectorAll('.our-friends_itemWrap');

  function setItem() {
    let x = 0;
    while (x < petsArr.length) {
      for (let i = 0; i < 8; i++) {
        const html = `
        <div id="${petsArr[x][i].btnId}" class="our-friends_item">
          <img src="${petsArr[x][i].img}" alt="pet" class="pet_img">
          <div class="pets-card-title">${petsArr[x][i].name}</div>
          <button class="pet-info_btn btns">Learn more</button>
        </div>
        `;
        pagItem[x].insertAdjacentHTML('afterbegin', html);
      }
      x++;
    }
  }

  setItem();

  // отслеживаем разрешения экрана для подстройки слайдера

  let desctop = false,
    tablet = false,
    mobile = false;

  window.addEventListener('resize', () => {
    if (!desctop && window.innerWidth >= 1280) {
      desctop = true;
      tablet = false;
      mobile = false;
      console.log('desc');
    } else if (!tablet && window.innerWidth < 1280 && window.innerWidth >= 768) {
      tablet = true;
      desctop = false;
      mobile = false;
      console.log('tab');
    } else if (!mobile && window.innerWidth < 768) {
      mobile = true;
      desctop = false;
      tablet = false;
      console.log('mob');
    }
  });

  // функционал для кнопок влево и вправо

  nextBtn.addEventListener('click', moveRight);
  prevBtn.addEventListener('click', moveLeft);
  lastBtn.addEventListener('click', moveLast);
  firstBtn.addEventListener('click', moveFirst);

  let pagNum = 1;

  function checkActiveBtns() {
    if (pagNum === 1) {
      prevBtn.classList.add('inactive');
      firstBtn.classList.add('inactive');
      nextBtn.classList.remove('inactive');
      lastBtn.classList.remove('inactive');
    } else if (pagNum === 6) {
      nextBtn.classList.add('inactive');
      lastBtn.classList.add('inactive');
      prevBtn.classList.remove('inactive');
      firstBtn.classList.remove('inactive');
    } else {
      nextBtn.classList.remove('inactive');
      lastBtn.classList.remove('inactive');
      prevBtn.classList.remove('inactive');
      firstBtn.classList.remove('inactive');
    }
  }
  checkActiveBtns();

  function moveRight() {
    if (pagItems.style.right <= '5160px') {
      pagItems.style.right = 1290 * pagNum + 'px';
      pagNum++;
      pagNow.innerHTML = `${pagNum}`;
      checkActiveBtns();
    }
  }

  function moveLeft() {
    if (pagItems.style.right > '0px') {
      --pagNum;
      pagItems.style.right = 1290 * (pagNum - 1) + 'px';
      pagNow.innerHTML = `${pagNum}`;
      checkActiveBtns();
    }
  }

  function moveLast() {
    pagItems.style.right = 1290 * (petsArr.length - 1) + 'px';
    pagNum = petsArr.length;
    pagNow.innerHTML = `${pagNum}`;
    checkActiveBtns();
  }

  function moveFirst() {
    pagItems.style.right = 0 + 'px';
    pagNum = 1;
    pagNow.innerHTML = `${pagNum}`;
    checkActiveBtns();
  }

  // Создание общей функции Init, которая формирует изначальный контент карточек слайдера на странице

  // Функции, которые непосредственно формируют элементы для каждого массива

  function setLeftItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!leftArr.includes(pets[randomNum]) && !centerArr.includes(pets[randomNum])) {
        leftArr.push(pets[randomNum]);
      } else --i;
    }
  }

  // Генерируем контент на странице

  // Вешаем слушатели на кнопки влево и вправо

  // sliderBtnLeft.addEventListener('click', moveLeft);
  // sliderBtnRight.addEventListener('click', moveRight);

  // удаление класса, чтобы слайдер крутился бесконечно

  // sliderItems.addEventListener('animationend', (e) => {
  //   if (e.animationName === 'slider-move-right') {
  //     sliderItems.classList.remove('move_right');
  //   } else {
  //     sliderItems.classList.remove('move_left');
  //   }
  // });

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
};

pagination();
popup();

export default pagination;
