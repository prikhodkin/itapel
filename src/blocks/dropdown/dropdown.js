import {$, fadeIn, fadeOut, listen} from "../../js/util";

const openDropdown = (event, item) => {
    const target = event.target.closest(`[data-dropdown-trigger]`);
    const list = $(`[data-dropdown-list]`, item);
    const overlay = document.querySelector(`.overlay`);

    if(!target) {
      return;
    }

    if (target.tagName === 'A') {
      event.preventDefault();
    }

    target.classList.toggle(`dropdown__target--active`);

    if(list.classList.contains(`hidden`)) {
      fadeOut(list);
      list.classList.remove(`hidden`);
    } else {
      fadeIn(list);
      list.classList.add(`hidden`);
    }

    if (target.classList.contains(`filters__main-title`) && list.classList.contains(`filters__list`)) {
      overlay.classList.toggle(`overlay--open`)
    }

    if (target.classList.contains(`sort__main-title`) && list.classList.contains(`sort__list-wrap`)) {
      overlay.classList.toggle(`overlay--open`)
    }
}

export default openDropdown;
