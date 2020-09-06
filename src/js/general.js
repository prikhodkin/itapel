import Turbolinks from "turbolinks";
import {listen} from "./util";
import Tabs from "%modules%/tabs/tabs";
import promoSlider from "%modules%/promo/promo";
import cardSlider from "%modules%/card/card"
import addFavorite from "%modules%/add-fav/add-fav";
import openDropdown from "%modules%/dropdown/dropdown";

const promoList = document.querySelector(`.promo__list`);
const cards = document.querySelectorAll(`.card__inner`);
const tab = document.querySelectorAll(`.tabs`);

console.log(tab);

if(tab) {
  tab.forEach((item) => {
    new Tabs(item);
  })
}
if(cards) {
  cards.forEach((item) => {
    cardSlider(item);
  })
}


if(promoList) {
  promoSlider();
}

Turbolinks.start();
listen(`click`, `.add-fav`, addFavorite)


if(window.matchMedia("(max-width: 767px)").matches) {
  listen(`click`, `[data-dropdown]`, openDropdown);
  listen(`click`, `[menu-main__item]`, openDropdown);
}
