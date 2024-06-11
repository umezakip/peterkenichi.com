// mode.js
(function($) { 
    "use strict";

// Function to apply mode from localStorage
function applyMode() {
    if (localStorage.getItem('mode') === 'dark') {
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
        $(".day-logo").show();
        $(".night-logo").hide();
    } else {
        $("body").addClass("light");
        $(".switch").addClass("switched");
        $(".day-logo").hide();
        $(".night-logo").show();
    }
}

// Apply the mode on page load
$(document).ready(function() {
    applyMode();

    // Switch light/dark
    $(".switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $(".switch").removeClass("switched");
            $(".day-logo").show(); // Show day logo
            $(".night-logo").hide(); // Hide night logo
            localStorage.setItem('mode', 'dark');
        } else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
            $(".day-logo").hide(); // Hide day logo
            $(".night-logo").show(); // Show night logo
            localStorage.setItem('mode', 'light');
        }
    });
    });
})(jQuery);