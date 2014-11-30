$(document).ready(function() {
    // get jQuery object for the div
    var $randomp = $('#randomp');
    // determine whether to show top or bottom, left or right
    var top = Math.round(Math.random()); // generate 0 or 1 value
    if (top === 1) {
        $randomp.css('top', '3px');
    } else {
        $randomp.css('bottom', '3px');
    }       
    var left = Math.round(Math.random());
    if (left === 1) {
        $randomp.css('left', '3px');
    } else {
        $randomp.css('right', '3px');
    }
    // show the div
    $randomp.show();
});
