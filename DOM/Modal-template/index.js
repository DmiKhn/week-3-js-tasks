const openBtn = document.querySelector('#openOverlay');
const succsessModal = createModal('The message has been sent!');
const body = document.body;

openBtn.addEventListener('click', e => {
  body.appendChild(succsessModal);
})

function createModal(content) {
  const overlayElem = document.createElement('div');
  overlayElem.classList.add('overlay');

  const template = document.querySelector('#overlayTemplate');

  overlayElem.innerHTML = template.innerHTML;
  overlayElem.addEventListener('click', e => {
    if (e.target === overlayElem) {
      closeElem.click();
    }
  });

  const closeElem = overlayElem.querySelector('.close');
  closeElem.addEventListener('click', e => {
    e.preventDefault();
    body.removeChild(overlayElem);
  });

  const contentElem = overlayElem.querySelector('.content');
  contentElem.innerHTML = content;

  return overlayElem;
};
