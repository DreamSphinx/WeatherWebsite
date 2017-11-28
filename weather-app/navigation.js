const $ = require("jquery");

$(function(){
    $("#header-placeholder").load("header.ejs", function () {
        $("#nav-placeholder").load(navProperties.mainNav, function() {   
            $(".nav-link").removeClass("active");
            $(`#${navProperties.currentSection}-link`).addClass("active");
        });        
    });
});
