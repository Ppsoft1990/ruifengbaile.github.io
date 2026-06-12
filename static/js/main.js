(function ($) {
    "use strict";

    /*-- Menu Sticky --*/
    var $window = $(window);
    $window.on('scroll', function () {
        var scroll = $window.scrollTop();
        if (scroll < 300) {
            $(".sticker").removeClass("stick");
        } else {
            $(".sticker").addClass("stick");
        }
    });
    /*-- Mobile Menu --*/
    $('.main-menu').meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu',
        meanMenuClose: '<i class="pe-7s-close-circle"></i>',
        meanMenuOpen: '<i class="pe-7s-menu"></i>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '30px',
    });

    /*-- WOW --*/
    new WOW().init();

    /*-- Nivo Slider --*/
    $('#home-slider').nivoSlider({
        directionNav: true,
        animSpeed: 1000,
        effect: 'random',
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: true,
        controlNav: false,
        prevText: '<i class="pe-7s-angle-left-circle"></i>',
        nextText: '<i class="pe-7s-angle-right-circle"></i>'
    });

    /*-- Testimonial Slider --*/
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><i class="pe-7s-angle-left-circle"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="pe-7s-angle-right-circle"></i></button>',
        responsive: [{
            breakpoint: 767, settings: {
                arrows: false,
            }
        },]
    });

    /*-- Product Slider 4 Item --*/
    $('.product-slider-4').slick({
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><i class="pe-7s-angle-left-circle"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="pe-7s-angle-right-circle"></i></button>',
        responsive: [{
            breakpoint: 991, settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 767, settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 479, settings: {
                slidesToShow: 1,
            }
        }]
    });

    /*-- Product Slider 2 Item --*/
    $('.product-slider-2').slick({
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><i class="pe-7s-angle-left-circle"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="pe-7s-angle-right-circle"></i></button>',
        responsive: [{
            breakpoint: 991, settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 767, settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 479, settings: {
                slidesToShow: 1,
            }
        }]
    });

    /*-- Product Details Thumbnail Slider --*/
    $('.pro-thumb-img-slider').slick({
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 991, settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 767, settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 479, settings: {
                slidesToShow: 2,
            }
        }]
    })

    /*-- Price Range --*/
    $('#price-range').slider({
        range: true, min: 0, max: 300, values: [40, 250], slide: function (event, ui) {

            $('.ui-slider-handle:eq(0)').html('<span>' + '$' + ui.values[0] + '</span>');
            $('.ui-slider-handle:eq(1)').html('<span>' + '$' + ui.values[1] + '</span>');

        }
    });
    $('.ui-slider-handle:eq(0)').html('<span>' + '$' + $("#price-range").slider("values", 0) + '</span>');
    $('.ui-slider-handle:eq(1)').html('<span>' + '$' + $("#price-range").slider("values", 1) + '</span>');

    /*-- Product Quantity --*/
    $('.product-quantity').append('<span class="dec qtybtn"><i class="fa fa-angle-left"></i></span><span class="inc qtybtn"><i class="fa fa-angle-right"></i></span>');
    $('.qtybtn').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*-- Checkout Form Collapse on Checkbox --*/
    $('.checkout-form input[type="checkbox"]').on('click', function () {
        var $collapse = $(this).data('target');
        if ($(this).is(':checked')) {
            $('.collapse[data-collapse="' + $collapse + '"]').slideDown();
        } else {
            $('.collapse[data-collapse="' + $collapse + '"]').slideUp();
        }
    })

    /*-- Youtube Background Video --*/
    $(".youtube-bg").YTPlayer();

    /*-- Text Animation --*/
    $('.tlt').textillate({
        loop: true, in: {
            effect: 'fadeInRight',
        }, out: {
            effect: 'fadeOutLeft',
        },
    });

    /*-- ScrollUp --*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>', easingType: 'linear', scrollSpeed: 900, animation: 'fade'
    });


})(jQuery);


/*-- search --*/

(function () {
    if ($('.search-by-keywords').length > 0) {
        $($('.search-by-keywords')[0]).click(function () {
            var value = $('#keyword-for-search').val();
            value = value.trim();
            if (value.length > 0) {
                location.href = 'products.html?keyword=' + encodeURIComponent(value);
            }
        });
    }
})();


/*-- subscribe newsletters --*/
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email ? emailRegex.test(email) : false;
}

(function () {
    var btn = $('#subscribe-newsletters');
    if (btn) {
        btn.click(function () {
            var email = $('#mce-EMAIL').val();
            if (isValidEmail(email)) {
                // subscribe
                $.ajax({
                    url: '/api/user/subscribe', method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    }, data: JSON.stringify({
                        'email': email.toLocaleLowerCase().trim(),
                    }), success: function (data) {
                        var status = data['status'];
                        if (status === 200) {
                            alert("Thank you for your subscribing !");
                        }
                    }
                });
            } else {
                alert("Email address error, please check");
            }
        });
    }
})();

(function () {
    var btn = $('#leave-message');
    if (btn) {
        btn.click(function () {
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            if (isValidEmail(email)) {
                if (!subject || !message) {
                    alert("Please fill the subject and message.")
                } else {
                    $.ajax({
                        url: '/api/user/message', method: 'POST', headers: {
                            'Content-Type': 'application/json'
                        }, data: JSON.stringify({
                            'email': email.toLocaleLowerCase().trim(),
                            'name': name.trim(),
                            'subject': subject.trim(),
                            'message': message.trim(),
                        }), success: function (data) {
                            var status = data['status'];
                            if (status === 200) {
                                alert("Thank you for your submit, we'll contact with you soon!");
                            }
                        }
                    });
                }
            } else {
                alert("Email address error, please check");
            }
        });

    }
})();


$(function () {
    var order = $('#order-product');
    if (order) {

        order.click(function () {
            // 获取产品信息
            var productTitle = document.querySelector("h2.title").textContent.trim();
            var descriptionElement = document.querySelector('div.short-desc');
            var productDescription = descriptionElement ?
                descriptionElement.textContent.trim()
                    .split('\n')
                    .map(function (line) {
                        return line.trim();
                    })
                    .filter(Boolean)
                    .join('\n') : '';

            var quantityInput = document.querySelector(".product-quantity input");
            var quantity = quantityInput ? quantityInput.value : '1';
            var pageUrl = window.location.href;
            // 构建邮件内容 (ES5字符串拼接)
            var emailSubject = 'Inquiry About ' + productTitle;

            // 邮件正文生成部分优化
            var emailBody = [
                "✨ PURCHASE INQUIRY ✨",
                "",
                "🛒 Product: " + productTitle,
                "🔢 Quantity: " + quantity,
                "🌐 URL: " + pageUrl,
                "",
                "",
                "📝 Product Description:",
                "──────────────────────",
                productDescription.replace(/^/gm, "• ").replace(/\n+/g, "\n"),
                "",
                "",
                "🔍 Requested Information:",
                "──────────────────────",
                "✓ Availability & Bulk Pricing",
                "✓ Shipping Options to [Country]",
                "✓ Accepted Payment Methods",
                "✓ Customization (OEM/ODM)",
                "✓ Sample Availability",
                "✓ Warranty Terms",
                "",
                "",
                "📮 Contact Details:",
                "──────────────────────",
                "👤 Name:    [Your Name]",
                "🏢 Company: [Your Company]",
                "✉️ Email:   [your@email.com]",
                "📞 Phone:   [+Country Code]",
                "",
                "",
                "Looking forward to your reply.",
                "",
                "Best regards,",
                "[Your Name]"
            ].join("\n");


            // 构建邮件链接
            var mailtoLink = 'mailto:pan_song_bo@hotmail.com?' +
                'subject=' + encodeURIComponent(emailSubject) + '&' +
                'body=' + encodeURIComponent(emailBody);
            window.open(mailtoLink, "_blank");

        });
    }

});
