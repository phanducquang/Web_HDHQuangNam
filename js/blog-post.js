var baseUrl = 'https://somedays.heliohost.org/hdhquangnam-v1/'
var id = getUrlParameter('id');
var flag_loading = [];
var req = $.ajax({
    type: 'GET',
    url: baseUrl + 'api/posts/one/' + id,
    contentType: 'application/json',
    success: function(data) {
        $(document).ready(function() {
            flag_loading.push("done");
            if (flag_loading.length == 4) {
                $('#spinner_loading').hide();
            }
            $(".background-img").attr("style", "background-image: url('{link_thumbnail}');".replace("{link_thumbnail}", data.thumbnail));
            $("#blogpostcategory").append(data.category);
            $("#blogposttitle").append(data.title);
            $("#blogpostcontent").append(data.content);
            $("#post-time").append(parseDate(data.createdAt));
            if (data.category == "Tư Vấn Tuyển Sinh") {
                $("#pageTitle").append("Tư Vấn Tuyển Sinh");
                $("#blogpostcategory").addClass("cat-1");
            }
            if (data.category == "Hội Trại") {
                $("#pageTitle").append("Hội Trại");
                $("#blogpostcategory").addClass("cat-3");
            }
            if (data.category == "Giao Lưu") {
                $("#pageTitle").append("Giao Lưu");
                $("#blogpostcategory").addClass("cat-4");
            }
            if (data.category == "Chào Đón Tân Sinh Viên") {
                $("#pageTitle").append("Chào Đón Tân Sinh Viên");
                $("#blogpostcategory").addClass("cat-2");
            }
            $("img").addClass("img-responsive");
        })
    }
});


var code_htmlmostread = '<div class=\"post post-widget\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div>'

//start most read    
var req = $.ajax({
    type: 'GET',
    url: baseUrl + 'api/posts/mostread/4',
    contentType: 'application/json',
    success: function(data2) {
        $(document).ready(function() {
            flag_loading.push("done");
            if (flag_loading.length == 4) {
                $('#spinner_loading').hide();
            }
            var amount_most_read = 0;
            for (dt2 of data2) {
                if (dt2.category == "Tư Vấn Tuyển Sinh") {
                    $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt2.id).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail))
                } else if (dt2.category == "Hội Trại") {
                    $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt2.id).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail))
                } else if (dt2.category == "Giao Lưu") {
                    $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt2.id).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail))
                } else if (dt2.category == "Chào Đón Tân Sinh Viên") {
                    $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt2.id).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail))
                }
                if (amount_most_read == 4) {
                    break;
                }
            }
        })
    }
});
//end most read

var code_html = '<div class=\"post post-thumb\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div>';

//start featured posts    
var req = $.ajax({
    type: 'GET',
    url: baseUrl + 'api/posts/featured',
    contentType: 'application/json',
    success: function(data3) {
        $(document).ready(function() {
            flag_loading.push("done");
            if (flag_loading.length == 4) {
                $('#spinner_loading').hide();
            }
            var amount_post_right = 0;
            //Hien ben phai
            for (dt3 of data3) {
                amount_post_right = amount_post_right + 1;
                if (dt3.category == "Tư Vấn Tuyển Sinh") {
                    $("#featured_posts").append(code_html.replace(/{id}/g, dt3.id).replace("{style}", "cat-1").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))

                } else if (dt3.category == "Hội Trại") {
                    $("#featured_posts").append(code_html.replace(/{id}/g, dt3.id).replace("{style}", "cat-3").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))

                } else if (dt3.category == "Giao Lưu") {
                    $("#featured_posts").append(code_html.replace(/{id}/g, dt3.id).replace("{style}", "cat-4").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))
                } else if (dt3.category == "Chào Đón Tân Sinh Viên") {
                    $("#featured_posts").append(code_html.replace(/{id}/g, dt3.id).replace("{style}", "cat-2").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))
                }
                if (amount_post_right == 3) {
                    break;
                }
            }
        })
    }
});
//end featured posts 


//start count posts    
var req = $.ajax({
    type: 'GET',
    url: baseUrl + 'api/posts/countposts/',
    contentType: 'application/json',
    success: function(data4) {
        $(document).ready(function() {
            flag_loading.push("done");
            if (flag_loading.length == 4) {
                $('#spinner_loading').hide();
            }
            for (dt4 of data4) {
                if (dt4.category == "Tư Vấn Tuyển Sinh") {
                    $("#count_tvts").html(dt4.count);
                } else if (dt4.category == "Hội Trại") {
                    $("#count_trai").html(dt4.count);
                } else if (dt4.category == "Giao Lưu") {
                    $("#count_giaoluu").html(dt4.count);
                } else if (dt4.category == "Chào Đón Tân Sinh Viên") {
                    $("#count_chaotsv").html(dt4.count);
                }
            }
        })
    }
});