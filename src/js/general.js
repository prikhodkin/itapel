import {listen} from "./util";
import Tabs from "%modules%/tabs/tabs";
import promoSlider from "%modules%/promo/promo";
import cardSlider from "%modules%/card/card"
import {addFavorite} from "%modules%/add-fav/add-fav";
import openDropdown from "%modules%/dropdown/dropdown";
import {Popup} from "%modules%/popup/popup";
import showInput from "%modules%/organization/organization";
import range from "%modules%/filters/filters";
import {fixedMenu, fixedsearch, openDesctopSearch} from "%modules%/fixed/fixed";
import {init as addAdress, removeItem }  from "%modules%/personal/personal";
import {openHeaderItem} from "%modules%/header/header";
import {scrollTop, fillBasketSVG} from "%modules%/products/products";
import {map} from "%modules%/map/map";
import {changeSubmenuImg} from "%modules%/sub-menu/submenu";

const promoList = document.querySelector(`.promo__list`);
const cards = document.querySelectorAll(`.card__inner`);
const tab = document.querySelectorAll(`.tabs`);
const popups = document.querySelectorAll('.popup');

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

if(promoList) {
  promoSlider();
}

range();
showInput();
addAdress();
scrollTop();
map();

listen(`click`, `.add-fav`, addFavorite);
listen(`click`, `[filter-dropdown]`, openDropdown);
listen(`click`, `.personal__del`, removeItem)

if(window.matchMedia("(max-width: 767px)").matches) {
  // listen(`click`, `[data-dropdown]`, openDropdown);
  fixedMenu();
}

if(window.matchMedia("(max-width: 1280px)").matches) {
  openHeaderItem();
  listen(`click`, `[data-dropdown]`, openDropdown);
}
// if(window.matchMedia("(min-width: 767px)").matches) {
//   fixedsearch();
//   listen(`click`, `[data-dropdown]`, openDropdown);
// }

if(window.matchMedia("(min-width: 1280px)").matches) {
  fixedsearch();
  openDesctopSearch();
  changeSubmenuImg();
  fillBasketSVG();
  // listen(`click`, `[data-dropdown]`, openDropdown);
}

