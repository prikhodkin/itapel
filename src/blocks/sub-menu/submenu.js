export const openMenu = () => {
  const togglebtn = document.querySelector('.header__hamb');
  const menu = document.querySelector(`.header__sections--menu`);
  const overlay = document.querySelector(`.overlay`);

  togglebtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    menu.classList.toggle(`header__sections--open`);
    overlay.classList.toggle(`overlay--open`)
  })
}
