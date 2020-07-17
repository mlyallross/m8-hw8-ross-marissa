$(document).ready(function() {

    $('svg').click(function() {
        $('svg').animate({left:'50%'}),
        $('svg').animate({bottom:'0%'}),
        $('svg').animate({left:'0%'});
    })
});
