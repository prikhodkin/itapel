import Turbolinks from "turbolinks";
import Tabs from "%modules%/tabs/tabs"
import {$, $$, listen} from "./util";
import addFavorite from "%modules%/add-fav/add-fav";

addFavorite();

Turbolinks.start();
