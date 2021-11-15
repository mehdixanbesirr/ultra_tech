$(document).ready(function () {
    $(".toggle_menu_button").click(function () {
        if ($(".toggle_menu").hasClass("display_flex")) {
            $(".toggle_menu").removeClass("display_flex");
        } else {
            $(".toggle_menu").addClass("display_flex");
        }
    });

    $(".toggle_menu a").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    $(".language_box").click(function () {
        if ($(".lang_section").hasClass("display_flex")) {
            $(".lang_section").removeClass("display_flex");
        } else {
            $(".lang_section").addClass("display_flex");
        }
    });

    $(".lang_section p").click(function (e) {
        $(".selected_lang").html($(this).html());
        $(this).css("display", "none").siblings().css("display", "block");
        $(".lang_section").removeClass("display_flex");
        e.stopPropagation();
    });

    $(".select_items").click(function () {
        $(this).addClass("selected_item").siblings().removeClass("selected_item");

        if ($(this).hasClass("select_news")) {
            $(".news_box").removeClass("display_none").siblings().addClass("display_none");
        } else if ($(this).hasClass("select_event")) {
            $(".event_box").removeClass("display_none").siblings().addClass("display_none");
        } else if ($(this).hasClass("select_about")) {
            $(".about_us").removeClass("display_none").siblings().addClass("display_none");
        } else if ($(this).hasClass("select_certificate")) {
            $(".certificate_box").removeClass("display_none").siblings().addClass("display_none");
        } else if ($(this).hasClass("select_carrier")) {
            $(".carrier_box").removeClass("display_none").siblings().addClass("display_none");
        } else if ($(this).hasClass("select_etichs")) {
            $(".etichs_box").removeClass("display_none").siblings().addClass("display_none");
        }
    });

    $(".infrastructur_item").click(function () {
        $(this).toggleClass("minus");
        $(this).children(".infra_info_box").slideToggle();
        $(this).siblings().children(".infra_info_box").slideUp();
        $(this).siblings().removeClass("minus");
    });

    $(".vacation_name").click(function () {
        $(this).toggleClass("minus").parent().children(".vacation_require_box").slideToggle();
        $(this).parent().siblings().children(".vacation_require_box").slideUp();
        $(this).parent().siblings().children(".vacation_name").removeClass("minus");
    });

    $(".lang_section p:first-child").click();

    $(".carousel").owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    $(".circle_carousel").owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            345: {
                items: 2,
            },
            510: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1024: {
                items: 5,
            },
        },
    });

    $(".news_carousel").owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
})