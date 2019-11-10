// <!-- pageload -->

// $(window).load(function () {
//     $('.loadingbg').fadeOut(1000);
    
    
// });


new Vivus('line_logo', {
    // type: 'scenario-sync',
    type: 'delayed',
    duration: 100,
    start: 'autostart',
    dashGap: 100,
    forceRender: false
},

    //當以上結束後show原本隱藏的圖

    function () {
        $('#line_logo').delay(800).fadeOut();
        $('#block_logo').delay(500).fadeIn();
        

        AOS.init({
            duration: 1000
        });
    }
);
$('.active_slick').slick({
    dots: false,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
})    


// gotop 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 950) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 950);
        return false;
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 950) {
        $('.myResume').fadeIn();
    } else {
        $('.myResume').fadeOut();
    }
});


