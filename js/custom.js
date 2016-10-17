$(document).ready(function() {
    $(function() {
        $("#accordion1").accordion();
    });



    $('.header-slider').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:10,
        nav: false,
        navText : ['',''],
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'intro'
    });
    $(".slider").owlCarousel({
        items: 1,
        navText : ["<div class='left-arrow' alt='left arrow'>","<div class='right-arrow' alt='right arrow'>"],
    });
    $(".slider2").owlCarousel({
        items: 1,
        navText : ["<div class='left-arrow' alt='left arrow'>","<div class='right-arrow' alt='right arrow'>"],
    });

    $('#showNav').click(function(){
        $("#mainnav").slideToggle();
    });
    $('#closeNav').click(function(){
        $("#mainnav").slideToggle();
    });

    $(".slider-control ul li a").click(function() {
        var addressValue = $(this).attr("href");
        console.log(addressValue);
        location.href=addressValue;
    });

    $(".slider-control ul li").click(function() {

        // remove classes from all
        $(".slider-control ul li").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
        // stop the page from jumping to the top
        return false;
    });
});
