import {listen} from "../../js/util";

const addFavorite =  () => {
  listen(`click`, `.add-fav`, (event, target) => {
    event.preventDefault();
    target.classList.toggle(`add-fav--active`);
  });
}

export default addFavorite;

