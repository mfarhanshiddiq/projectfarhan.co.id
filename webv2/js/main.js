/* ===================================================================
 * Main JS
 * ------------------------------------------------------------------- */

// input file 
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
// 

// loadingpage
(function($) {
    $(window).load(function() {
        // Animate loader off screen
        $(".gns-loadingpage").fadeOut("slow");;
    });
})(jQuery);
// 

// aos transition
$(document).on('ready', function() {
  AOS.init();
});
//
