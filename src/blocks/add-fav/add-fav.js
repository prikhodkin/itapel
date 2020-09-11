import {listen} from "../../js/util";

const addFavorite =  (event, target) => {
  event.preventDefault();
  target.classList.toggle(`add-fav--active`);
}

export {addFavorite}
