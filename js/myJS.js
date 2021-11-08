/*global $, jQuery, alert*/
/*  =========== start section loadingOverlay ============== */
$(document).ready(function () {
    "use strict";
    
    $(".loadingOverlay .sk-cube-grid").fadeOut(5000, function () {
        $(this).parent().fadeOut(5000, function () {
            $("body").css("overflow", "auto");
            $(this).remove();
        });
        
    });
});
/*  =========== end section loadingOverlay ============== */
$(function () {
    "use strict";
    $(".home .arrow i").click(function () {
        $("body").animate({
            scrollTop : $(".about").offset().top
        }, 1000);
    });
});

$(function () {
    "use strict";
    $(".btnaboutMe").click(function () {
        $("body").animate({
            scrollTop : $(".about").offset().top
        }, 1000);
    });
});

$(function () {
    "use strict";
    $(".btnPortfolio").click(function () {
        $("body").animate({
            scrollTop : $(".portfolio").offset().top
        }, 1000);
    });
});

$(function () {
    "use strict";
    $(".btnSkills").click(function () {
        $("body").animate({
            scrollTop : $(".Skills").offset().top
        }, 1000);
    });
});

$(function () {
    "use strict";
    $(".btnServices").click(function () {
        $("body").animate({
            scrollTop : $(".Services").offset().top
        }, 1000);
    });
});

$(function () {
    "use strict";
    $(".btnContact").click(function () {
        $("body").animate({
            scrollTop : $(".Contact").offset().top
        }, 1000);
    });
});

/*
$(document).ready(function () {
    "use strict";
    $("body").css("backgroundColor", "#f00");
});
*/
$(function () {
    "use strict";
    $(".portfolio button").click(function () {
        if ($(".portfolio div").hasClass("hidden")) {
            $("portfolio").removeClass("hidden");
            $(".portfolio .hidden").fadeIn(3000);   
        }
    });
});
/*
$(document).ready(function () {
    "use strict";
    if ($(".home h2 :contains('I'm)")) {
        $(".home h2").fadeOut(1000, function () {
            $(this).fadeIn(1000);
        });

    }
});*/


