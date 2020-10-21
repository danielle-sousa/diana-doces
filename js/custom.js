/*global $, window, WOW*/

$(function () {
    
    "use strict";
    
    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
    
    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {
        
        if (win.scrollTop() > 100) {
            navBar.addClass("active-nav fadeInDown animated");
        } else {
            navBar.removeClass("active-nav fadeInDown animated");
        }
        
    }
    
    activeNavbar();
    
    win.on("scroll", function () {
        activeNavbar();
    });
    
    /*========== Mobile Menu  ==========*/
    $(".navbar .menu-toggle").on("click", function () {
        navBar.toggleClass("menu-active");
    });
    
    /*========== Start Scroll For Link To Go Section  ==========*/
    $(".navbar .contact, .home .contact, .home .scroll-down").on("click", function (e) {
        e.preventDefault();
        var selector = $(this);
        htmlBody.animate({
            scrollTop: $(selector.attr("href")).offset().top - 70
        }, 800);
    });
    
    /*========== Smooth Scroll  ==========*/
    $(".navbar .navbar-nav > li > .nav-link").on("click", function (e) {
        e.preventDefault();
		var selector = $(this);
		htmlBody.animate({
			scrollTop: $(selector.attr('href')).offset().top - 70
		}, 600);
    });
    
    /*========== Add Class Active to Menu Links on Scrolling  ==========*/
    win.on("scroll", function () {
        $("div").each(function () {
            if (win.scrollTop() >= $(this).offset().top - 71) {
                $(".navbar .navbar-nav > li > .nav-link[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });
	
	win.on("scroll", function () {
        $("div").each(function () {
            if (win.scrollTop() >= $(this).offset().top - 250) {
				$("#" + $(this).attr("id") + " .number").addClass("show");
            }
        });
    });
    
    /*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1200) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }
    
    scrollUp();
    
    win.on("scroll", function () {
        scrollUp();
    });
    
    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });
    
    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();
    
});