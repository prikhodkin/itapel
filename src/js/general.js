import Turbolinks from "turbolinks";
import Tabs from "%modules%/tabs/tabs"
import {$, $$, listen} from "./util";
import promoSlider from "%modules%/promo/promo";
import addFavorite from "%modules%/add-fav/add-fav";

Turbolinks.start();
promoSlider();
addFavorite();
