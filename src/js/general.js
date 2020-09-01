import Turbolinks from "turbolinks";
import {listen} from "./util";
import promoSlider from "%modules%/promo/promo";
import addFavorite from "%modules%/add-fav/add-fav";
import openDropdown from "%modules%/dropdown/dropdown";


Turbolinks.start();
promoSlider();
listen(`click`, `.add-fav`, addFavorite)
listen(`click`, `[data-dropdown]`, openDropdown);
