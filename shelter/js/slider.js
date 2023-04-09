import pets from './pets.js';

// слайдер

const slider = function () {
  const sliderItem = document.querySelectorAll('.our-friends_item'),
    sliderItems = document.querySelector('.our-friends_items'),
    leftItems = document.querySelector('#left-items'),
    centerItems = document.querySelector('#center-items'),
    rightItems = document.querySelector('#right-items'),
    sliderBtnLeft = document.querySelector('.our-friends_left-arrow'),
    sliderBtnRight = document.querySelector('.our-friends_right-arrow');

  // fetch('./js/pets.json')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  function getRandom() {
    return Math.floor(Math.random() * (9 - 1));
  }

  // async function getPetsInfo() {
  //   const res = await fetch('./js/pets.json');
  //   const data = await res.json();
  //   return data;
  // }

  // getPetsInfo().then((data) => {
  // });

  let leftArr = [],
    centerArr = [],
    rightArr = [],
    itemCounter = 0;

  function init() {
    if (window.innerWidth >= 1200) {
      console.log('Комп');
      itemCounter = 3;
      setLeftItems(3);
      setCenterItems(3);
      setRightItems(3);
    } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
      console.log('Планшет');
      itemCounter = 2;
      setLeftItems(2);
      setCenterItems(2);
      setRightItems(2);
    } else if (window.innerWidth < 768) {
      console.log('Мобайл');
      itemCounter = 1;
      setLeftItems(1);
      setCenterItems(1);
      setRightItems(1);
    }
  }

  init();

  // window.addEventListener('resize', () => {

  // });

  function setLeftItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!leftArr.includes(pets[randomNum]) && !centerArr.includes(pets[randomNum])) {
        leftArr.push(pets[randomNum]);
      } else {
        --i;
      }
    }
  }
  function setCenterItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!centerArr.includes(pets[randomNum]) && !leftArr.includes(pets[randomNum])) {
        centerArr.push(pets[randomNum]);
      } else {
        --i;
      }
    }
  }
  function setRightItems(x) {
    for (let i = 0; i < x; i++) {
      const randomNum = getRandom();
      if (!rightArr.includes(pets[randomNum]) && !centerArr.includes(pets[randomNum])) {
        rightArr.push(pets[randomNum]);
      } else {
        --i;
      }
    }
  }

  function forward() {
    leftArr = centerArr;
    centerArr = rightArr;
    rightArr = [];
    setRightItems(itemCounter);
  }

  // function changeToBackward() {
  //   rightArr = centerArr;
  //   centerArr = leftArr;
  //   leftArr = [];
  //   setLeftItems(itemCounter);
  // }

  function backward() {
    rightArr = centerArr;
    centerArr = leftArr;
    leftArr = [];
    setLeftItems(itemCounter);
  }

  // function changeToForward() {
  //   leftArr = centerArr;
  //   centerArr = rightArr;
  //   rightArr = [];
  //   setRightItems(itemCounter);
  // }

  function generateHtmlItems(leftArr, centerArr, rightArr) {
    for (let i = 0; i < itemCounter; i++) {
      leftItems.innerHTML += `
    <div class="our-friends_item">
      <img src="${leftArr[i].img}" alt="pet" class="pet_img">
      <div class="pets-card-title">${leftArr[i].name}</div>
      <button class="pet-info_btn btns">Learn more</button>
    </div>
    `;
    }
    for (let i = 0; i < itemCounter; i++) {
      centerItems.innerHTML += `
    <div class="our-friends_item">
      <img src="${centerArr[i].img}" alt="pet" class="pet_img">
      <div class="pets-card-title">${centerArr[i].name}</div>
      <button class="pet-info_btn btns">Learn more</button>
    </div>  
    `;
    }
    for (let i = 0; i < itemCounter; i++) {
      rightItems.innerHTML += `
    <div class="our-friends_item">
      <img src="${rightArr[i].img}" alt="pet" class="pet_img">
      <div class="pets-card-title">${rightArr[i].name}</div>
      <button class="pet-info_btn btns">Learn more</button>
    </div>
    `;
    }
  }

  console.log(leftArr);
  console.log(centerArr);
  console.log(rightArr);

  generateHtmlItems(leftArr, centerArr, rightArr);

  sliderBtnLeft.addEventListener('click', () => {
    moveLeft();
    backward();
    sliderItems.addEventListener('animationend', (e) => {
      leftItems.innerHTML = '';
      centerItems.innerHTML = '';
      rightItems.innerHTML = '';
      generateHtmlItems(leftArr, centerArr, rightArr);
    });
  });

  sliderBtnRight.addEventListener('click', () => {
    moveRight();
    forward();
    sliderItems.addEventListener('animationend', (e) => {
      leftItems.innerHTML = '';
      centerItems.innerHTML = '';
      rightItems.innerHTML = '';
      generateHtmlItems(leftArr, centerArr, rightArr);
    });
  });

  sliderItems.addEventListener('animationend', (e) => {
    if (e.animationName === 'slider-move-right') {
      sliderItems.classList.remove('move_right');
    } else {
      sliderItems.classList.remove('move_left');
    }
  });

  function moveLeft() {
    sliderItems.classList.add('move_left');
  }

  function moveRight() {
    sliderItems.classList.add('move_right');
  }
};

export default slider;
