import $ from "jquery";
import suggestions from "suggestions-jquery";

const init = () => {
  $(".adress").suggestions({
    token: "0a19f17e8571c604cdad7731e00bbad7bc7e1760",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
      console.log(suggestion);
    }
  });
}

const removeItem = (event, target) => {
  event.preventDefault();
  target.parentNode.remove();
}

export {init, removeItem };

