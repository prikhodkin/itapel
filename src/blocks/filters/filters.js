import JQ from "jquery";
import {ion} from "ion-rangeslider";

var $range = JQ(".js-range-slider"),
    $inputFrom = JQ(".js-input-from"),
    $inputTo = JQ(".js-input-to"),
    instance,
    min = 0,
    max = 26000,
    from = 6000,
    to = 20000;

$range.ionRangeSlider({
	skin: "square",
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
    var val = JQ(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = JQ(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});

const init = () => {
  JQ(".js-range-slider").ionRangeSlider();
}

export default init;
