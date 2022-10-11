/* 처음 문구 */
/* function ready() {
    if (!confirm('본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출저가 따로 있을 밝힙니다.')) {
        window.close();
    } else {
        alert('신입 포론트엔드 개발자 김성진의 포트폴리오를 보러와주셔서 감사합니다!');
    }
}
document.addEventListener('DOMContentLoaded', ready); */

/* 커서 */
$(document).mousemove(function (e) {
    gsap.to('.cursor', { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
});

/* 슬라이드 */
/* $(window).scroll(function () {
    $('.slideanim').each(function () {
        let pos = $(this).offset().top;

        let winTop = $(window).scrollTop();
        if (pos < winTop + 1000) {
            $(this).addClass('slide');
        }
    });
}); */
/* 스킬 원형 그래프 */

$(function () {
    let $ppc = $('.progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = (360 * percent) / 100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
    $('.ppc-percents span').html(percent + '%');
});
