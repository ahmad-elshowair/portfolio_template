$(document).ready(function () {

    "use strict";

    $("body").niceScroll();

    $(".carousel").carousel({
        interval: 2500
    });
    
});


// this to show color box!
$(".color-tool").click(function(){
        $(".color-option").slideToggle(500);
    });

// this to cash li element and scrolle button
var ColorItem = $(".color-option ul li"),
scrolleBtn = $(".scrolle-btn");

// this to give each li different color
ColorItem.eq(0).css("backgroundColor", "#CC5500").end()
.eq(1).css("backgroundColor","#007FFF").end()
.eq(2).css("backgroundColor","#BB3385").end()
.eq(3).css("backgroundColor","#A4C639");


// this to change colors of the spacifc element!
ColorItem.click(function(){
        $("link[href*='Them']").attr("href", $(this).attr("data-value"));
    });

// to hide spinner when page loaded
$(window).load(function () {
    "use strict";
    $("body").css("overflow", "auto");
    $(".loading-spinner, .loading-spinner .contain").fadeOut(2000,
        function () {
            $(this).remove();
        });
});


$(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() >= 600) {
        scrolleBtn.show(500);
    } else {
        scrolleBtn.hide(500);
    }
    
    //console.log($(this).scrollTop());
});

scrolleBtn.click(function () {
    "use strict";
    $("html,body").animate({
        scrollTop: 0
    }, 500);
});

