import {$, fadeIn, fadeOut, listen} from "../../js/util";

const openDropdown = (event, item) => {
    // event.preventDefault();
    const target = event.target.closest(`[data-dropdown-trigger]`);
    const list = $(`[data-dropdown-list]`, item);
    console.log(item)

    if(!target) {
      return;
    }

    target.classList.toggle(`dropdown__target--active`);

    if(list.classList.contains(`hidden`)) {
      fadeOut(list);
      list.classList.remove(`hidden`);
    } else {
      fadeIn(list);
      list.classList.add(`hidden`);
    }
}

export default openDropdown;
