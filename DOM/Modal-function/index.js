const openBtn = document.querySelector('#openOverlay');
const body = document.body;
const succsessModal = createModal('The message has been sent!');


openBtn.addEventListener('click', e => {
  body.appendChild(succsessModal);
})

function createModal(content) {
  const overlayElem = document.createElement('div');
  overlayElem.classList.add('overlay');

  overlayElem.addEventListener('click', e => {
    if (e.target === overlayElem) {
      closeElem.click();
    }
  });

  const containerElem = document.createElement('div');
  containerElem.classList.add('modal-container');

  const contentElem = document.createElement('div');
  contentElem.classList.add('content');

  contentElem.innerHTML = content;

  const closeElem = document.createElement("a");
  closeElem.classList.add("close");
  closeElem.textContent = "x";
  closeElem.href = "#";

  closeElem.addEventListener("click", (e) => {
    e.preventDefault();
    body.removeChild(overlayElem);
  });

  overlayElem.appendChild(containerElem);
  containerElem.appendChild(closeElem);
  containerElem.appendChild(contentElem);

  return overlayElem;
};
