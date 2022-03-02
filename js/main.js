// ============= bootstrap multiple level dropdown menu =============





$(function() {











    // FAQ Section According ======================
    let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", (e) => {
            let clickedLi;
            if (e.target.classList.contains("question-arrow")) {
                clickedLi = e.target.parentElement;
            } else {
                clickedLi = e.target.parentElement.parentElement;
            }
            clickedLi.classList.toggle("showAnswer");
        });
    }

    
    $(window).scroll(function() {
        var st = $(window).scrollTop();

        // =========== Nav Fixed ===========
        if (st > 70) {
            $(".navbar").addClass("position-fixed w-100 top-0 start-0 ");
        } else {

            $(".navbar").removeClass("position-fixed");
        }
        // //  =========== Sidebar Fixed ===========
        // if(st>402.91){
        //     $(".sidebar-content").addClass("position-fixed w-100 top-0 start-0 mt-5");
        // }
        // else {

        //     $(".sidebar-content").removeClass("position-fixed w-100 top-0 start-0 mt-5 bg-light");
        // }

    })


    // ======================== Qucik slider of service ========================
    //    software mouseover
    $(".ser").eq(0).mouseover(function() {
        $(this).find("img").attr("src", "img/soft-white.png");
    })
    $(".ser").eq(0).mouseout(function() {
            $(this).find("img").attr("src", "img/soft-black.png");
        })
        //    Web mouseover
    $(".ser").eq(1).mouseover(function() {
        $(this).find("img").attr("src", "img/web-white.png");
    })
    $(".ser").eq(1).mouseout(function() {
            $(this).find("img").attr("src", "img/web-black.png");
        })
        //    software mouseover
    $(".ser").eq(2).mouseover(function() {
        $(this).find("img").attr("src", "img/host-white.png");
    })
    $(".ser").eq(2).mouseout(function() {
            $(this).find("img").attr("src", "img/host-black.png");
        })
        //    software mouseover
    $(".ser").eq(3).mouseover(function() {
        $(this).find("img").attr("src", "img/ecomm-white.png");
    })
    $(".ser").eq(3).mouseout(function() {
            $(this).find("img").attr("src", "img/ecomm-black.png");
        })
        //    software mouseover
    $(".ser").eq(4).mouseover(function() {
        $(this).find("img").attr("src", "img/elearn-white.png");
    })
    $(".ser").eq(4).mouseout(function() {
            $(this).find("img").attr("src", "img/elearn-black.png");
        })
        //    software mouseover
    $(".ser").eq(5).mouseover(function() {
        $(this).find("img").attr("src", "img/proj-white.png");
    })
    $(".ser").eq(5).mouseout(function() {
            $(this).find("img").attr("src", "img/proj-black.png");
        })
        //    software mouseover
    $(".ser").eq(6).mouseover(function() {
        $(this).find("img").attr("src", "img/sms-white.png");
    })
    $(".ser").eq(6).mouseout(function() {
            $(this).find("img").attr("src", "img/sms-black.png");
        })
        //    software mouseover
    $(".ser").eq(7).mouseover(function() {
        $(this).find("img").attr("src", "img/seo-white.png");
    })
    $(".ser").eq(7).mouseout(function() {
        $(this).find("img").attr("src", "img/seo-black.png");
    })

    $('.service-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        // infinite: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // ============== counter Animation ==============

    $('.countfect').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-target');
        delayTo = $this.attr('delay');
        if (!delayTo) {
            delayTo = 8000
        }
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: delayTo,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });

    // Counter of about
    // $(".counter-con h3").click(function() {
    // $(this).html($(this).attr("data-target"));

    // })
    // var cot = $(".counter").offset().top - 100;
    // $(window).scroll(function() {
    //     var st = $(window).scrollTop();
    //     if (st > cot) {

    //     }
    // })

    // Main Tab ======================
    $("#tabs").tabs();
    $(".portfolio ul.d-flex li a").eq(0).parent().addClass("black");
    $(".portfolio ul.d-flex li a").click(function() {
        $(".portfolio ul.d-flex li a").parent().removeClass("black");
        $(this).parent().addClass("black");
    })






})
