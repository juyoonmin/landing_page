$(document).ready(function () {
    //스크롤 위치를 기반으로 활성 메뉴 항목을 업데이트하는 기능
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop() + 150; // 현재 스크롤 위치를 구하고 150픽셀 추가
        // 각 섹션의 위치를 가져옴
        var block1Position = $('#block1').offset().top;
        var block2Position = $('#block2').offset().top;
        var block3Position = $('#block3').offset().top;
        //섹션 위치에 대해 스크롤 위치를 확인하고 그에 따라 활성 클래스를 업데이트
        if (scrollPosition >= block3Position) {
            $('.quick a').removeClass('active');
            $('.quick a[href="#block3"]').addClass('active');
        } else if (scrollPosition >= block2Position) {
            $('.quick a').removeClass('active');
            $('.quick a[href="#block2"]').addClass('active');
        } else if (scrollPosition >= block1Position) {
            $('.quick a').removeClass('active');
            $('.quick a[href="#block1"]').addClass('active');
        } else {
            $('.quick a').removeClass('active');
            $('.quick a[href="#"]').addClass('active');
        }
    });

    //퀵메뉴 항목을 클릭할 때 스크롤
    $('.quick a').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        // 클릭한 메뉴 항목이 start인 경우 페이지 맨 위로 스크롤
        if (target === "#") {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        } else {
            // 오프셋이 50픽셀인 대상 섹션으로 스크롤
            var targetPosition = $(target).offset().top;
            $('html, body').animate({
                scrollTop: targetPosition - 50
            }, 800);
        }
    });
});

// AOS.init();

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});
