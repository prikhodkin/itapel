export const openHeaderItem = () => {
  const header = document.querySelector(`.header`);
  const menu = header.querySelector(`.header__sections--menu`);
  const input = header.querySelector(`.header__search-input`);
  const headerMenuSvg = header.querySelectorAll('.header__open');
  const overlay = document.querySelector(`.overlay`);

  const headerOverlayHandler = () => {
    overlay.classList.toggle(`overlay--open`);

    const b = () => {
      if (menu.classList.contains('header__sections--open')) {
        headerMenuSvg.forEach(it => {
          it.classList.toggle('header__open--close')
        })
      }

      menu.classList.remove('header__sections--open');
      input.classList.remove('header__search-input--open')
      overlay.classList.remove('overlay--open');

      overlay.removeEventListener(`click`, b)
    }


    overlay.addEventListener(`click`, b)
  }

  header.addEventListener(`click`, (event) => {
    const target = event.target;

    if (!target) {
      return;
    }

    if (target.getAttribute('data-click') === `header-search`) {
      event.preventDefault();

      if (menu.classList.contains('header__sections--open')) {
        menu.classList.remove(`header__sections--open`);
        headerMenuSvg.forEach(it => {
          it.classList.toggle('header__open--close')
        })
      } else {
        headerOverlayHandler()
      }

      input.classList.toggle(`header__search-input--open`);
    }

    if (target.getAttribute('data-click') === `header-menu`){
      event.preventDefault();

      if (input.classList.contains('header__search-input--open')) {
        input.classList.remove(`header__search-input--open`);
      } else {

        headerOverlayHandler()
      }

      menu.classList.toggle(`header__sections--open`);
      headerMenuSvg.forEach(it => {
          it.classList.toggle('header__open--close')
      })
    }
  })
}
