var POST_IN_PAGE = 10;
var data_temp = "";
var row_table = '<tr id="id_{id}"><td>{id}</td><td>{title}</td><td>{category}</td><td>{featured}</td><td>{views}</td></tr>';
var paging = '{"pagination":[]}';
//tạo biến dem để xác định danh sách data chia thành bao nhiêu page
var dem = 0;
var id_update = '';
var obj_update = '';
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
    var header = {
        "Authorization": getCookie("accessToken")
    }
    const options = {
        headers: {
            "Authorization": getCookie("accessToken"),
            "Content-Type": 'application/json;charset=UTF-8'
        }
    };
    CKEDITOR.replace('editor');
    $("#user-login").append(user.name + '<b class="caret"></b>');
    if (user.role == "ROLE_admin") {
        $("#add_account").show();
    }
    $("#logout").click(function() {
        setCookie("name", "", 0);
        setCookie("accessToken", "", 0);
        setCookie("role", "", 0);
        window.location.replace("login.html");
    });

    //Hàm xác định dòng vừa click
    $('#list_posts').click(function(event) {
        id_update = $(event.target).closest("tr")[0].id.replace("id_", "");
        for (let index = 0; index < data_temp.length; index++) {
            if (data_temp[index] != null && data_temp[index] != undefined) {
                if (data_temp[index].id == id_update) {
                    obj_update = data_temp[index];
                    break;
                }
            }
        }
        console.log(id_update);
        $('.header-dsbv').hide();
        $('.header-csbv').show();
        $('.view-data').hide();
        $('.update-data').show();
        CKEDITOR.instances.editor.setData(obj_update.content);
        $('#input_tieude').val(obj_update.title);
        $('#link_thumbnail').val(obj_update.thumbnail);
        if (obj_update.featured) {
            $('#featured').prop('checked', true);
        } else {
            $('#featured').prop('checked', false);
        }
        $("div.select-option select").val(obj_update.category);
    });

    $('.header-back').click(function() {
        pagination(data_temp);
        loadPage(1);
        $('.header-csbv').hide();
        $('.header-dsbv').show();
        $('.view-data').show();
        $('.update-data').hide();
    });

    //Lấy danh sách bài viết
    $.ajax({
        type: 'GET',
        url: baseUrl + 'api/posts/list',
        contentType: 'application/json',
        success: function(data) {
            data_temp = data;
            pagination(data);
            var obj = JSON.parse(paging);
            obj.pagination[0].forEach(row => {
                $("#list_posts").append(row_table.replace(/{id}/g, row.id).replace("{title}", row.title).replace("{category}", row.category).replace("{featured}", (row.featured == true) ? "Có" : "Không").replace("{views}", row.views));
            });
            for (let index = 0; index < dem; index++) {
                $("#pagination").append('<li id="page_{page}" onclick="loadPage({page})"><a>{page}</a></li>'.replace(/{page}/g, index + 1));
                $("#page_1").addClass("active");
            }
        }
    });

    //Cập nhật bài viết
    $("#update_post").click(function() {
        if ($("#chude").val() != "" && $("#tieude").val() != "" && $("#input_tieude").val() != "" && $("#link_thumbnail").val() != "" && CKEDITOR.instances.editor.getData() != "") {
            obj_update.title = $("#input_tieude").val();
            obj_update.content = CKEDITOR.instances.editor.getData();
            obj_update.category = $("#chude").val();
            obj_update.thumbnail = $("#link_thumbnail").val();
            obj_update.featured = ($("#feature").val() == "true") ? true : false
            var flag = true;
            $("#loading-add").show();
            axios.put(baseUrl + 'api/posts/', obj_update, options)
                .then(function(res) {
                    $("#loading-add").hide();
                    alert('Đã cập nhật bài viết "{title}" thành công.'.replace("{title}", res.data.title));
                    flag = false;
                })
                .catch(function(error) {
                    console.log(error);
                    $("#loading-add").hide();
                    alert("Cập nhật bài viết lỗi, vui lòng thử lại sau.");
                });;
        }
    });

    //Xoá bài viết
    $("#delete_post").click(function() {
        var r = confirm("Bạn chắc chắn muốn xoá bài viết!");
        if (r == true) {
            $("#loading-add").show();
            axios.delete(baseUrl + 'api/posts/' + obj_update.id, options)
                .then(function(res) {
                    $("#loading-add").hide();
                    for (let index = 0; index < data_temp.length; index++) {
                        if (data_temp[index] != null && data_temp[index] != undefined) {
                            if (data_temp[index].id == id_update) {
                                data_temp.splice(index, 1);
                                pagination(data_temp);
                                break;
                            }
                        }
                    }
                    alert("Đã xoá thành công.");
                    flag = false;
                    $('.header-csbv').hide();
                    $('.header-dsbv').show();
                    $('.view-data').show();
                    $('.update-data').hide();
                    loadPage(1);
                })
                .catch(function(error) {
                    console.log(error);
                    $("#loading-add").hide();
                    alert("Xoá bài viết lỗi, vui lòng thử lại sau.");
                });;
        } else {
            //
        }
    });
});

function loadPage(pageNumber) {
    var obj = JSON.parse(paging);
    //Xoá nội dung trong tag có id list_posts
    $("#list_posts").empty();
    $('.pagination').empty();
    for (let index = 0; index < dem; index++) {
        $("#pagination").append('<li id="page_{page}" onclick="loadPage({page})"><a>{page}</a></li>'.replace(/{page}/g, index + 1));
    }
    //Thêm class vào li hiện tại
    $('#page_{0}'.replace("{0}", pageNumber)).addClass('active');
    obj.pagination[pageNumber - 1].forEach(row => {
        if (row != null && row != undefined) {
            $("#list_posts").append(row_table.replace(/{id}/g, row.id).replace("{title}", row.title).replace("{category}", row.category).replace("{featured}", (row.featured == true) ? "Có" : "Không").replace("{views}", row.views));
        }
    });
};

function pagination(data) {
    paging = '{"pagination":[]}';
    dem = 0;
    var temp = [];
    //Biến xác định số bài trong 1 page
    var amount_post = 0;
    for (let i = 0; i < data.length; i++) {
        //thêm dữ liệu vào mảng tạm
        temp.push(data[i]);
        amount_post++;
        //Kiểm tra xem số bài nếu bằng 5 thì thêm mảng tạm vào biến paging
        //Hoặc chiều dài mảng data đã bằng i+1 hay chưa (nếu bằng có nghĩa là mảng đã hết phần tử mới, Thêm mảng tạm vào biến paging)
        if ((amount_post == POST_IN_PAGE) || (data.length == (i + 1))) {
            //chuyển sang JSON
            var obj = JSON.parse(paging);
            obj["pagination"].push(temp);
            dem++;
            //khởi tạo lại biếm temp mới
            var temp = [];
            //Chuyển sang String
            paging = JSON.stringify(obj);
            amount_post = 0;
        }
    }
};