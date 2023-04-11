import pets from './pets.js';

const popup = () => {
  const popup = document.querySelector('.popup'),
    popupWrapper = document.querySelector('.popup_wrapper'),
    popupOpen = document.querySelectorAll('.pet-info_btn'),
    itemCard = document.querySelectorAll('.our-friends_item'),
    popupBg = document.querySelector('.popup-bg'),
    popupClose = document.querySelector('.popup_btn');

  function setPopup(id) {
    for (let i = 0; i < pets.length; i++) {
      if (id === pets[i].btnId) {
        popupWrapper.innerHTML = '';
        const html = `
        <img class="popup-img" src="${pets[i].img}" alt="pet">
        <div class="popup-right">
          <div class="popup-name">${pets[i].name}</div>
          <div class="popup-dog-breed">${pets[i].breed}</div>
          <div class="popup-descr">${pets[i].description}</div>
          <ul class="caracter">
            <li class="age"><b>Age:</b> ${pets[i].age}</li>
            <li class="inoculation"><b>Inoculations:</b> ${pets[i].inoculations}</li>
            <li class="diseases"><b>Diseases:</b> ${pets[i].diseases}</li>
            <li class="parasites"><b>Parasites:</b> ${pets[i].parasites}</li>
          </ul>
        </div>
        `;
        popupWrapper.insertAdjacentHTML('afterbegin', html);
        break;
      }
    }
  }

  itemCard.forEach((i) => {
    i.addEventListener('click', () => {
      setPopup(i.id);
      popup.classList.add('popup_open');
      popupBg.classList.add('popupBg_open');
    });
  });

  popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_open');
    popupBg.classList.remove('popupBg_open');
  });
};

export default popup;
