import JQ from "jquery";

const fixedMenu = () => {

JQ(function(){
  const $fixedBox = JQ('.fixed-box');
  var $nav = JQ('.fixed-div');
  $fixedBox.height($nav.innerHeight());

  var $window = JQ(window);

  $window.resize(function(){
    console.log($window.width())
    // $nav.css('width', $nav.outerWidth());
  })
  var $h = $nav.offset().top;
  console.log($h)
	$window.scroll(function(){
		if ($window.scrollTop() > ($h - 90)){
			$nav.addClass('fixed');
		} else {
			$nav.removeClass('fixed');
		}
	});
});
}

export default fixedMenu;
