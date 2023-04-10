const burger = function () {
  const burgerBtn = document.querySelector('.burger-menu'),
    navigation = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.menu_item'),
    popupBg = document.querySelector('.popup-bg');
  const body = document.body;
  const html = document.documentElement;

  document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !burgerBtn.contains(e.target)) {
      navigation.classList.remove('menu_open');
      burgerBtn.classList.remove('menu_rotate');
      popupBg.classList.remove('show');
    }
    checkMenuOpen();
  });

  function checkMenuOpen() {
    if (navigation.className.includes('menu_open')) {
      html.style.overflowY = 'hidden';
      body.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = 'visible';
      body.style.overflowY = 'visible';
    }
  }

  burgerBtn.addEventListener('click', () => {
    navigation.classList.toggle('menu_open');
    burgerBtn.classList.toggle('menu_rotate');
    popupBg.classList.toggle('show');

    checkMenuOpen();
  });
  menuItem.forEach((i) => {
    i.addEventListener('click', () => {
      navigation.classList.remove('menu_open');
      burgerBtn.classList.remove('menu_rotate');
      popupBg.classList.remove('show');
      checkMenuOpen();
    });
  });
};

export default burger;
