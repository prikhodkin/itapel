import JQ from "jquery";

export const fixedMenu = () => {

JQ(function(){
  const $fixedBox = JQ('.fixed-box');
  var $nav = JQ('.fixed-div');
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
    const $fixedBox = JQ('.fixed-search');
    const $btn = JQ(`.header__search-button`);
    var $nav = JQ('.fixed-search-input');

    var $window = JQ(window);
    var $h = $fixedBox.offset().top;
    console.log($h)
    $window.scroll(function(){
      if ($window.scrollTop() > ($h)){
        $nav.addClass('fixed-opacity');
        JQ($btn).click(function(e){
          e.preventDefault();
          $nav.removeClass('fixed-opacity');
        })
      } else {
        $nav.removeClass('fixed-opacity');
      }
    });
  });
  }
