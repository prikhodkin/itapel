import JQ from "jquery";

export const scrollTop = () => {
  JQ(function(){
    const $btn = JQ(`.products__move-top`);
    const $window = JQ(window);

    const $h = $window.height();

    if(!$btn) {
      return;
    }

    $window.scroll(function(){
      if ($window.scrollTop() > ($h - 200)){
        $btn.addClass('products__move-top--active');
      } else {
        $btn.removeClass('products__move-top--active');
      }
    })

    JQ($btn).click(function(e){
      e.preventDefault();
      JQ('html, body').animate({scrollTop:0}, '300');
      JQ($btn).unbind('mouseenter mouseleave');
    })
  })

}
