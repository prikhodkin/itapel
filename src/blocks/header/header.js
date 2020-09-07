export const openSearch = () => {
  const togglebtn = document.querySelector('.header__search-button');
  const input = document.querySelector(`.header__search-input`);
  const overlay = document.querySelector(`.overlay`);


  togglebtn.addEventListener(`click`, (e) => {
    e.preventDefault;
    input.classList.toggle(`header__search-input--open`);
    overlay.classList.toggle(`overlay--open`)
  })
}
