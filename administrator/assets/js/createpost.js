var baseUrl = 'https://somedays.heliohost.org/hdhquangnam-v1/';

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
if (getCookie("accessToken") == "") {
    window.location.replace("login.html");
}
$(document).ready(function() {

    var user = {
        "name": getCookie("name"),
        "role": getCookie("role")
    }
    const options = {
        headers: {
            "Authorization": getCookie("accessToken"),
            "Content-Type": 'application/json;charset=UTF-8'
        }
    };
    $("#user-login").append(user.name + '<b class="caret"></b>');
    if (user.role == "ROLE_admin") {
        $("#add_account").show();
    }
    CKEDITOR.replace('editor');
    $("#logout").click(function() {
        setCookie("name", "", 0);
        setCookie("accessToken", "", 0);
        setCookie("role", "", 0);
        window.location.replace("https://vnu.hdhquangnam.com/administrator/login.html");
    });

    $("#save_post").click(function() {
        if ($("#chude").val() != "" && $("#tieude").val() != "" && $("#input_tieude").val() != "" && $("#link_thumbnail").val() != "" && CKEDITOR.instances.editor.getData() != "") {
            var obj = {
                "title": $("#input_tieude").val(),
                "content": CKEDITOR.instances.editor.getData(),
                "category": $("#chude").val(),
                "thumbnail": $("#link_thumbnail").val(),
                "featured": ($("#feature").val() == "true") ? true : false
            }
            var flag = true;
            $("#loading-add").show();
            console.log(JSON.stringify(obj));
            axios.post(baseUrl + 'api/posts/', obj, options)
                .then(function(res) {
                    $("#loading-add").hide();
                    alert('Đã thêm bài viết "{title}" thành công.'.replace("{title}", res.data.title));
                    flag = false;
                })
                .catch(function(error) {
                    console.log(error);
                    $("#loading-add").hide();
                    alert("Thêm bài viết lỗi, vui lòng thử lại sau.");
                });;
        } else {
            alert("Vui lòng nhập đủ trường.");
        }
    });
});