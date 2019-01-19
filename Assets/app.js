$( document ).ready(function() {
    // About button scrolling
    $("#nav-button2").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-box").offset().top
        }, 1000);
    });
    //Portfolio scrolling
    $("#nav-button3").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#port-box").offset().top
        }, 1500);
    });
    //Contact scrolling
    $("#nav-button4").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-box").offset().top
        }, 2000);
    });
    //Back to top button
    $("#back-top").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nav").offset().top
        }, 1500);
    });

    
});
