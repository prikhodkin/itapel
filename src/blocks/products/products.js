import JQ from "jquery";

export const scrollTop = () => {
  JQ(function(){
    const $btn = JQ(`.products__move-top`);

    if(!$btn) {
      return;
    }

  JQ($btn).click(function(e){
    e.preventDefault();
     JQ('html, body').animate({scrollTop:0}, '300');
     JQ($btn).unbind('mouseenter mouseleave');
  })
  })

}
