import Turbolinks from "turbolinks";
import {listen} from "./util";
import promoSlider from "%modules%/promo/promo";
import addFavorite from "%modules%/add-fav/add-fav";
import openDropdown from "%modules%/dropdown/dropdown";


Turbolinks.start();
promoSlider();
listen(`click`, `.add-fav`, addFavorite)


if(window.matchMedia("(max-width: 767px)").matches) {
  listen(`click`, `[data-dropdown]`, openDropdown);
  listen(`click`, `[menu-main__item]`, openDropdown);

}
