import {tns} from "tiny-slider/src/tiny-slider";

const initSlider = () => {
  tns({
    container: `.promo__list`,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    lazyload: true,
    navPosition: "bottom",
    autoplayButtonOutput: false
  });
}

export default initSlider;
