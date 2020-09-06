import JQ from "jquery";
import {ion} from "ion-rangeslider";

const init = () => {
  JQ(".js-range-slider").ionRangeSlider();
  console.log('hello');
}

export default init;
