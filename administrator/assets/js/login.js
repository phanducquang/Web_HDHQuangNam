$(document).ready(function() {

    var animating = false,
        submitPhase1 = 1100,
        $login = $(".login");

    $(document).on("click", ".login__submit", function(e) {
        if (animating) return;
        animating = true;
        var that = this;
        // ripple($(that), e);
        $(that).addClass("processing");
        setTimeout(function() {
            $(that).addClass("success");
        }, submitPhase1);
    });

});