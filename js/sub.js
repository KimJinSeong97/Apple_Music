// 버튼바 클릭시 화면 변환 스크립트

$(function () {
    $('#detail button:nth-of-type(1)').click(function () {
        $('#detail button').removeClass('active');
        $(this).addClass('active');
        $('.info_1').fadeIn();
        $('.info_2').hide();
        $('.info_3').hide();
        $('.info_4').hide();
        $('.info_5').hide();
        $('#detail').css({ height: 5500 });
    });

    $('#detail button:nth-of-type(2)').click(function () {
        $('#detail button').removeClass('active');
        $(this).addClass('active');
        $('.info_2').fadeIn();
        $('.info_1').hide();
        $('.info_3').hide();
        $('.info_4').hide();
        $('.info_5').hide();
        $('#detail').css({ height: 420 });
    });

    $('#detail button:nth-of-type(3)').click(function () {
        $('#detail button').removeClass('active');
        $(this).addClass('active');
        $('.info_3').fadeIn();
        $('.info_1').hide();
        $('.info_2').hide();
        $('.info_4').hide();
        $('.info_5').hide();
        $('#detail').css({ height: 850 });
    });

    $('#detail button:nth-of-type(4)').click(function () {
        $('#detail button').removeClass('active');
        $(this).addClass('active');
        $('.info_4').fadeIn();
        $('.info_1').hide();
        $('.info_2').hide();
        $('.info_3').hide();
        $('.info_5').hide();
        $('#detail').css({ height: 850 });
    });

    $('#detail button:nth-of-type(5)').click(function () {
        $('#detail button').removeClass('active');
        $(this).addClass('active');
        $('.info_5').fadeIn();
        $('.info_1').hide();
        $('.info_2').hide();
        $('.info_3').hide();
        $('.info_4').hide();
        $('#detail').css({ height: 1400 });
    });
});

//가격 수량 계산 스크립트

var sell_price = 25200;
var amount = document.form.amount.value;
document.form.sum.value = sell_price;

function add() {
    hm = document.form.amount;
    sum = document.form.sum;
    hm.value++;
    sum.value = parseInt(hm.value) * sell_price;
}

function del() {
    hm = document.form.amount;
    sum = document.form.sum;
    if (hm.value > 1) {
        hm.value--;
        sum.value = parseInt(hm.value) * sell_price;
    }
}

function change() {
    hm = document.form.amount;
    sum = document.form.sum;

    if (hm.value < 0) {
        hm.value = 0;
    }
    sum.value = parseInt(hm.value) * sell_price;
}