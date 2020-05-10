var baseUrl = 'https://somedays.heliohost.org/hdhquangnam-v1/';
var animating = false;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
if (getCookie("accessToken") != "") {
    window.location.replace("listposts.html");
}

function login() {
    if (animating) return;
    animating = true;
    var that = this;
    $(that).addClass("processing");
    var obj = {
        "username": $("#username").val(),
        "password": $("#password").val()
    }
    var flag = true;
    var req = $.ajax({
        type: 'POST',
        url: baseUrl + 'auth/login/',
        data: JSON.stringify(obj),
        contentType: 'application/json',
        success: function(data) {
            setCookie("accessToken", data.tokenType + " " + data.accessToken, 24.5);
            setCookie("name", data.user.name, 24.5);
            setCookie("role", data.user.role.role, 24.5);
            flag = false;
            window.location.replace("listposts.html");
        }
    });
    setTimeout(function() {
        if (flag) {
            $(that).addClass("success");
            req.abort();
            alert("Đăng nhập thất bại, vui lòng thử lại.");
        }
    }, 10000);
}
$(document).ready(function() {
    $(document).keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            login();
        }
    });

    $(document).on("click", ".login__submit", function(e) {
        login();
    });

});