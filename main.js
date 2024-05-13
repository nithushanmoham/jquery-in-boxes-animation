$(document).ready(function () {
    function animateBox(animationType, selectedBox) {
        switch (animationType) {
            case "hide":
                selectedBox.hide();
                break;
            case "show":
                selectedBox.show();
                break;
            case "toggle":
                selectedBox.toggle();
                break;
            case "fadeOut":
                selectedBox.fadeOut();
                break;
            case "fadeIn":
                selectedBox.fadeIn();
                break;
            case "slideDown":
                selectedBox.slideDown();
                break;
            case "slideUp":
                selectedBox.slideUp();
                break;
            case "slideToggle":
                selectedBox.slideToggle();
                break;
            default:
                console.log("Invalid animation selection");
        }
    }

    
    $("#startAnimation").click(function () {
        var selectedBox = $("." + $("#boxSelect").val());
        var selectedAnimation = $("#animationSelect").val();
        animateBox(selectedAnimation, selectedBox);
    });

    // Event listener for box clicks
    $(".box").click(function () {
        var selectedBox = $(this);
        var selectedAnimation = $("#animationSelect").val();
        animateBox(selectedAnimation, selectedBox);
    });
});