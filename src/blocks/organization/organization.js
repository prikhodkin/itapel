const checkbox = document.querySelector(`.organization__checkbox`);

const showInput = () => {
  checkbox.addEventListener(`change`, () => {
    const inputs = document.querySelectorAll(`.organization__input`);
    inputs.forEach((item) => {
      item.classList.toggle(`organization__input--active`);
    })
  })
}

export default showInput;
