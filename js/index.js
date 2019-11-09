        var code_html = '<div class=\"post post-thumb\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div>';
        var flag = true;
        var code_html2 = '<div class=\"col-md-12\"><div class=\"post post-thumb\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3</div></div</div>'
        var code_html3 = '<div class=\"col-md-6\"><div class=\"post\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div></div>'
        var code_htmlfirstposts = '<div class=\"col-md-6\"><div class=\"post post-thumb\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div></div>'
        var code_htmlmostread = '<div class=\"post post-widget\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div>'
        var baseUrl = 'https://ducquang.heliohost.org/hdhquangnam-v1/';


        // function getUrlParameter(sParam) {
        //     var sPageURL = window.location.search.substring(1),
        //         sURLVariables = sPageURL.split('&'),
        //         sParameterName,
        //         i;

        //     for (i = 0; i < sURLVariables.length; i++) {
        //         sParameterName = sURLVariables[i].split('=');

        //         if (sParameterName[0] === sParam) {
        //             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        //         }
        //     }
        // };

        
        // var category = getUrlParameter('category');

        // function parseDate(date){
        //     var newYear = date.substr(0,4);
        //     var newMonth = date.substr(5,2);
        //     var newDay = date.substr(8,2);
        //     var newTime = date.substr(11,5)
        //     return result = newDay + '/'+ newMonth +'/'+ newYear +','+ newTime;
        // }

        //ar datetime = parseDate('datetime');
        // $.ajax({
        //     type: 'GET',
        //     url: 'http://ducquang.heliohost.org/hdhquangnam-v1/api/posts',
        //     contentType: '',
        //     success: function(){
        //         $(document).ready(function)
        //     }
        // })

        var req = $.ajax({
            type: 'GET',
            url: baseUrl+'api/posts/list',
            contentType: 'application/json',
            success: function(data2) {
                $(document).ready(function() {
                    var dem_temp = 0;
                    for (dt2 of data2) {

                        if (flag) {
                            if (dt2.category == "Tư Vấn Tuyển Sinh") {
                                $("#posts").append(code_html2.replace(/{id}/g, dt2.id).replace("{style}", "cat-1").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            } else if (dt2.category == "Hội Trại") {
                                $("#posts").append(code_html2.replace(/{id}/g, dt2.id).replace("{style}", "cat-3").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            } else if (dt2.category == "Giao Lưu") {
                                $("#posts").append(code_html2.replace(/{id}/g, dt2.id).replace("{style}", "cat-4").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            } else if (dt2.category == "Chào Đón Tân Sinh Viên") {
                                $("#posts").append(code_html2.replace(/{id}/g, dt2.id).replace("{style}", "cat-2").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            }
                            flag = false;
                        } else {
                            dem_temp++;
                            if (dt2.category == "Tư Vấn Tuyển Sinh") {
                                $("#posts").append(code_html3.replace(/{id}/g, dt2.id).replace("{style}", "cat-1").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            } else if (dt2.category == "Hội Trại") {
                                $("#posts").append(code_html3.replace(/{id}/g, dt2.id).replace("{style}", "cat-3").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            } else if (dt2.category == "Giao Lưu") {
                                $("#posts").append(code_html3.replace(/{id}/g, dt2.id).replace("{style}", "cat-4").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            } else if (dt2.category == "Chào Đón Tân Sinh Viên") {
                                $("#posts").append(code_html3.replace(/{id}/g, dt2.id).replace("{style}", "cat-2").replace("{0}", dt2.category).replace("{1}", dt2.title).replace("{link_thumbnail}", dt2.thumbnail).replace("{date}", parseDate(dt2.createdAt)))
                            }
                            if (dem_temp % 4 == 0) {
                                $("#posts").append('<div class="clearfix visible-md visible-lg"></div>')
                            }
                        }

                    }
                })

            }
        });

        //start featured posts    
        var req = $.ajax({
            type: 'GET',
            url: baseUrl+'api/posts/featured',
            contentType: 'application/json',
            success: function(data) {
                $(document).ready(function() {
                    var amount_post_right = 0;
                    var amount_post_top = 0;
                    //Hien ben phai
                    for (dt of data) {
                        amount_post_right = amount_post_right + 1;
                        if (dt.category == "Tư Vấn Tuyển Sinh") {
                            $("#featured_posts").append(code_html.replace(/{id}/g, dt.id).replace("{style}", "cat-1").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))

                        } else if (dt.category == "Hội Trại") {
                            $("#featured_posts").append(code_html.replace(/{id}/g, dt.id).replace("{style}", "cat-3").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))

                        } else if (dt.category == "Giao Lưu") {
                            $("#featured_posts").append(code_html.replace(/{id}/g, dt.id).replace("{style}", "cat-4").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                        } else if (dt.category == "Chào Đón Tân Sinh Viên") {
                            $("#featured_posts").append(code_html.replace(/{id}/g, dt.id).replace("{style}", "cat-2").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                        }
                        if (amount_post_right == 3) {
                            break;
                        }
                    }

                    //Hien dau trang
                    for (dt3 of data) {
                        amount_post_top = amount_post_top + 1;
                        if (dt3.category == "Tư Vấn Tuyển Sinh") {
                            $("#firstposts").append(code_htmlfirstposts.replace(/{id}/g, dt3.id).replace("{style}", "cat-1").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))

                        } else if (dt3.category == "Hội Trại") {
                            $("#firstposts").append(code_htmlfirstposts.replace(/{id}/g, dt3.id).replace("{style}", "cat-3").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))
                        } else if (dt3.category == "Giao Lưu") {
                            $("#firstposts").append(code_htmlfirstposts.replace(/{id}/g, dt3.id).replace("{style}", "cat-4").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))
                        } else if (dt3.category == "Chào Đón Tân Sinh Viên") {
                            $("#firstposts").append(code_htmlfirstposts.replace(/{id}/g, dt3.id).replace("{style}", "cat-2").replace("{0}", dt3.category).replace("{1}", dt3.title).replace("{link_thumbnail}", dt3.thumbnail).replace("{date}", parseDate(dt3.createdAt)))
                        }
                        if (amount_post_top == 2) {
                            break;
                        }
                    }
                })
            }
        });
        //end featured posts               

        //start most read    
        var req = $.ajax({
            type: 'GET',
            url: baseUrl+'api/posts/mostread/4',
            contentType: 'application/json',
            success: function(data4) {
                $(document).ready(function() {
                    var amount_most_read = 0;
                    for (dt4 of data4) {
                        if (dt4.category == "Tư Vấn Tuyển Sinh") {
                            $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt4.id).replace("{1}", dt4.title).replace("{link_thumbnail}", dt4.thumbnail))
                        } else if (dt4.category == "Hội Trại") {
                            $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt4.id).replace("{1}", dt4.title).replace("{link_thumbnail}", dt4.thumbnail))
                        } else if (dt4.category == "Giao Lưu") {
                            $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt4.id).replace("{1}", dt4.title).replace("{link_thumbnail}", dt4.thumbnail))
                        } else if (dt4.category == "Chào Đón Tân Sinh Viên") {
                            $("#mostread").append(code_htmlmostread.replace(/{id}/g, dt4.id).replace("{1}", dt4.title).replace("{link_thumbnail}", dt4.thumbnail))
                        }
                        if (amount_most_read == 4) {
                            break;
                        }
                    }
                })
            }
        });
        //end most read

        //start count posts    
        var req = $.ajax({
            type: 'GET',
            url: baseUrl+'api/posts/countposts/',
            contentType: 'application/json',
            success: function(data) {
                $(document).ready(function() {
                    for (dt of data) {
                        if (dt.category == "Tư Vấn Tuyển Sinh") {
                            $("#count_tvts").html(dt.count);
                        } else if (dt.category == "Hội Trại") {
                            $("#count_trai").html(dt.count);
                        } else if (dt.category == "Giao Lưu") {
                            $("#count_giaoluu").html(dt.count);
                        } else if (dt.category == "Chào Đón Tân Sinh Viên") {
                            $("#count_chaotsv").html(dt.count);
                        }
                    }
                })
            }
        });
        //end count posts