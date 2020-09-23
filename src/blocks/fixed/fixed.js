import JQ from "jquery";
import hcSticky from 'hc-sticky';

export const fixedMenu = () => {

JQ(function(){
  const $fixedBox = JQ('.fixed-box');
  var $nav = JQ('.fixed-div');

  if(!$nav.length){
    return;
  }

  $fixedBox.height($nav.innerHeight());

  var $window = JQ(window);

  var $h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > ($h - 90)){
			$nav.addClass('fixed');
		} else {
			$nav.removeClass('fixed');
		}
	});
});
}

export const fixedsearch = () => {

  JQ(function(){
    const $fixedBox = JQ('.header');
    const $breadcrumbs = JQ('.breadcrumbs--fixed');
    const $input = JQ('.header__search-input');
    const $filterBox = JQ('.filter__fixed-box');
    const $sortBox = JQ('.sort__list-wrap');
    const overlay = JQ('.overlay');

    var $window = JQ(window);
    $window.scroll(function(){
      if ($window.scrollTop() > $fixedBox.height()){

        $fixedBox.addClass('fixed-header');
        $breadcrumbs.addClass('breadcrumbs--fix');
        $filterBox.addClass('filter__fixed-box--fixed');
        $sortBox.addClass('sort__list-wrap--fixed');
      } else {
        $fixedBox.removeClass('fixed-header');
        $input.removeClass('header__search-input--open');
        $breadcrumbs.removeClass('breadcrumbs--fix');
        $filterBox.removeClass('filter__fixed-box--fixed');
        $sortBox.removeClass('sort__list-wrap--fixed');
      }
    });
  });
  }

  export const openDesctopSearch = () => {
    const btn = document.querySelector('.header__search-button');
    const overlay = document.querySelector('.overlay');
    const input = document.querySelector('.header__search-input');

    btn.addEventListener(`click`, ()=> {
      const fixedHeader = document.querySelector('.fixed-header');

      if (!fixedHeader) {
        return;
      }

      input.classList.toggle('header__search-input--open');
    })
  }

  document.addEventListener('DOMContentLoaded', function() {
    if(window.matchMedia("(min-width: 1280px)").matches) {
      var Sticky = new hcSticky('.filter__fixed-box', {
        stickTo: 'main',
        // top: 100
      });
    }

  });
