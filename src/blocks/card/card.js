import {tns} from "tiny-slider/src/tiny-slider";

const initSlider = () => {
  tns(
    {
      "container": ".card__list",
      controls: false,
      slideBy: 'page',
      "navContainer": ".card__sub-list",
      "navAsThumbnails": true,
      "autoplay": false,
    }
  );
}

export default initSlider;
