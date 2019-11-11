        var code_html2 = '<div class=\"col-md-12\"><div class=\"post post-thumb\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3</div></div</div>'

        var code_html3 = '<div class=\"col-md-6\"><div class=\"post\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"category.html\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div></div>'

        var flag = true;

        var code_htmlmostread = '<div class=\"post post-widget\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3></div></div>'

        var code_htmlpostlist = '<div class=\"col-md-12\"><div class=\"post post-row\"><a class=\"post-img\" href=\"blog-post.html?id={id}\"><img src=\"{link_thumbnail}\"></a><div class=\"post-body\"><div class=\"post-meta\"><a class=\"post-category {style}\" href=\"#\">{0}</a><span class=\"post-date\">{date}</span></div><h3 class=\"post-title\"><a href=\"blog-post.html?id={id}\">{1}</a></h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p></div></div></div>'

        var baseUrl = 'https://ducquang.heliohost.org/hdhquangnam-v1/';

        $(document).ready(function() {
            if (category == "tvts") {
                $("#categoryPath").append("Tư Vấn Tuyển Sinh")
                $("#categoryTitle").append("Tư Vấn Tuyển Sinh")
                $("#pageTitle").append("Tư Vấn Tuyển Sinh")
            }
            if (category == "hoitrai") {
                $("#categoryPath").append("Hội Trại")
                $("#categoryTitle").append("Hội Trại")
                $("#pageTitle").append("Hội Trại")
            }
            if (category == "giaoluu") {
                $("#categoryPath").append("Giao Lưu")
                $("#categoryTitle").append("Giao Lưu")
                $("#pageTitle").append("Giao Lưu")
            }
            if (category == "cdtsv") {
                $("#categoryPath").append("Chào Đón Tân Sinh Viên")
                $("#categoryTitle").append("Chào Đón Tân Sinh Viên")
                $("#pageTitle").append("Chào Đón Tân Sinh Viên")
            }
        })

        var req = $.ajax({
            type: 'GET',
            url: baseUrl + 'api/posts/list',
            contentType: '',
            success: function(data) {
                $(document).ready(function() {
                    var dem_temp = 0;
                    for (dt of data) {
                        if (flag) {
                            if (category == "tvts") {
                                if (dt.category == "Tư Vấn Tuyển Sinh") {
                                    $("#posts").append(code_html2.replace(/{id}/g, dt.id).replace("{style}", "cat-1").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                }
                            } else if (category == "hoitrai") {
                                if (dt.category == "Hội Trại") {
                                    $("#posts").append(code_html2.replace(/{id}/g, dt.id).replace("{style}", "cat-3").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                }
                            } else if (category == "giaoluu") {
                                if (dt.category == "Giao Lưu") {
                                    $("#posts").append(code_html2.replace(/{id}/g, dt.id).replace("{style}", "cat-4").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                }
                            } else if (category == "cdtsv") {
                                if (dt.category == "Chào Đón Tân Sinh Viên") {
                                    $("#posts").append(code_html2.replace(/{id}/g, dt.id).replace("{style}", "cat-2").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                }
                            }
                        } else {
                            dem_temp++;
                            if (category == "tvts") {
                                if (dt.category == "Tư Vấn Tuyển Sinh") {
                                    $("#posts").append(code_html3.replace(/{id}/g, dt.id).replace("{style}", "cat-1").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                    //Thêm clearfix 2 post chèn 1 clearfix
                                    if (dem_temp == 2) {
                                        $("#posts").append('<div class="clearfix visible-md visible-lg"></div>')
                                        dem_temp = 0;
                                    }
                                }
                            } else if (category == "hoitrai") {
                                if (dt.category == "Hội Trại") {
                                    $("#posts").append(code_html3.replace(/{id}/g, dt.id).replace("{style}", "cat-3").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                    //Thêm clearfix 2 post chèn 1 clearfix
                                    if (dem_temp == 2) {
                                        $("#posts").append('<div class="clearfix visible-md visible-lg"></div>')
                                        dem_temp = 0;
                                    }
                                }
                            } else if (category == "giaoluu") {
                                if (dt.category == "Giao Lưu") {
                                    $("#posts").append(code_html3.replace(/{id}/g, dt.id).replace("{style}", "cat-4").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                    //Thêm clearfix 2 post chèn 1 clearfix
                                    if (dem_temp == 2) {
                                        $("#posts").append('<div class="clearfix visible-md visible-lg"></div>')
                                        dem_temp = 0;
                                    }
                                }
                            } else if (category == "cdtsv") {
                                if (dt.category == "Chào Đón Tân Sinh Viên") {
                                    $("#posts").append(code_html3.replace(/{id}/g, dt.id).replace("{style}", "cat-2").replace("{0}", dt.category).replace("{1}", dt.title).replace("{link_thumbnail}", dt.thumbnail).replace("{date}", parseDate(dt.createdAt)))
                                    flag = false;
                                    //Thêm clearfix 2 post chèn 1 clearfix
                                    if (dem_temp == 2) {
                                        $("#posts").append('<div class="clearfix visible-md visible-lg"></div>')
                                        dem_temp = 0;
                                    }
                                }
                            }

                        }
                    }
                })
            }
        });

        //start most read    
        var req = $.ajax({
            type: 'GET',
            url: baseUrl + 'api/posts/mostread/4',
            contentType: 'application/json',
            success: function(data2) {
                $(document).ready(function() {
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

        //start count posts    
        var req = $.ajax({
            type: 'GET',
            url: baseUrl + 'api/posts/countposts/',
            contentType: 'application/json',
            success: function(data4) {
                $(document).ready(function() {
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
        //end count posts