const burger = function () {
  const burgerBtn = document.querySelector('.burger-menu'),
    popup = document.querySelector('.popup'),
    navigation = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.menu_item'),
    popupBg = document.querySelector('.popup-bg'),
    body = document.body,
    html = document.documentElement;

  document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !burgerBtn.contains(e.target)) {
      navigation.classList.remove('menu_open');
      burgerBtn.classList.remove('menu_rotate');
      popupBg.classList.remove('show');
    }
    if (e.target === popupBg) {
      popup.classList.remove('popup_open');
      popupBg.classList.remove('popupBg_open');
    }
    checkMenuOpen();
  });

  function checkMenuOpen() {
    if (navigation.className.includes('menu_open') || popup.className.includes('popup_open')) {
      body.classList.add('scroll_block');
      html.classList.add('scroll_block');
    } else {
      body.classList.remove('scroll_block');
      html.classList.remove('scroll_block');
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
