export const openHeaderItem = () => {
  const header = document.querySelector(`.header`);
  const menu = header.querySelector(`.header__sections--menu`);
  const input = header.querySelector(`.header__search-input`);
  const overlay = document.querySelector(`.overlay`);

  header.addEventListener(`click`, (event) => {
    event.preventDefault();
    const target = event.target;

    if (!target) {
      return;
    }

    if (target.getAttribute('data-click') === `header-search`) {
      if (menu.classList.contains('header__sections--open')) {
        menu.classList.remove(`header__sections--open`);
      } else {
        overlay.classList.toggle(`overlay--open`)
      }
      input.classList.toggle(`header__search-input--open`);
    }

    if (target.getAttribute('data-click') === `header-menu`){
      if (input.classList.contains('header__search-input--open')) {
        input.classList.remove(`header__search-input--open`);
      } else {
        overlay.classList.toggle(`overlay--open`)
      }
      menu.classList.toggle(`header__sections--open`);
    }
  })
}
