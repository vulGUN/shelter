const popup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelector('.popup_btn'),
    popupBg = document.querySelector('.popup-bg');

  popupBtn.addEventListener('click', () => {
    popup.classList.add('popup_close');
    popupBg.classList.add('popupBg_close');
    popup.addEventListener('animationend', () => {
      popup.style.display = 'none';
    });
    popupBg.addEventListener('animationend', () => {
      popupBg.style.display = 'none';
    });
  });
};

export default popup;
