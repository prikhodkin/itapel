import {tns} from "tiny-slider/src/tiny-slider";

const initSlider = (target) => {
  const slider = target.querySelector(`.card__list`);
  const nav = target.querySelector(`.card__sub-list`);
  tns(
    {
      "container": slider,
      controls: false,
      slideBy: 'page',
      "navContainer": nav,
      "navAsThumbnails": true,
      "autoplay": false,
    }
  );
}

export default initSlider;
