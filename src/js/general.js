import Turbolinks from "turbolinks";
import {listen} from "./util";
import Tabs from "%modules%/tabs/tabs";
import promoSlider from "%modules%/promo/promo";
import cardSlider from "%modules%/card/card"
import addFavorite from "%modules%/add-fav/add-fav";
import openDropdown from "%modules%/dropdown/dropdown";
import {Popup, PopupThanks } from "%modules%/popup/popup";
import showInput from "%modules%/organization/organization";
import range from "%modules%/filters/filters";
const promoList = document.querySelector(`.promo__list`);
const cards = document.querySelectorAll(`.card__inner`);
const tab = document.querySelectorAll(`.tabs`);
const popups = document.querySelectorAll('.popup');
// Turbolinks.start();
if(popups) {
  popups.forEach(function (popup) {
    new Popup(popup);
  });
}

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
range();
showInput();

if(promoList) {
  promoSlider();
}


listen(`click`, `.add-fav`, addFavorite)
listen(`click`, `[filter-dropdown]`, openDropdown);

if(window.matchMedia("(max-width: 767px)").matches) {
  listen(`click`, `[data-dropdown]`, openDropdown);
}
