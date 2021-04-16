$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false
})

$('.about-slider').slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.616 1.613a.384.384 0 000 .55l4.937 4.832-4.937 4.842a.384.384 0 000 .55.402.402 0 00.56 0l5.208-5.108a.376.376 0 00.116-.275.392.392 0 00-.116-.275L2.176 1.622a.394.394 0 00-.56-.01z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.616 1.613a.384.384 0 000 .55l4.937 4.832-4.937 4.842a.384.384 0 000 .55.402.402 0 00.56 0l5.208-5.108a.376.376 0 00.116-.275.392.392 0 00-.116-.275L2.176 1.622a.394.394 0 00-.56-.01z"></path></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.accommodation-slider').slick({
    slidesToShow: 3,infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.616 1.613a.384.384 0 000 .55l4.937 4.832-4.937 4.842a.384.384 0 000 .55.402.402 0 00.56 0l5.208-5.108a.376.376 0 00.116-.275.392.392 0 00-.116-.275L2.176 1.622a.394.394 0 00-.56-.01z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.616 1.613a.384.384 0 000 .55l4.937 4.832-4.937 4.842a.384.384 0 000 .55.402.402 0 00.56 0l5.208-5.108a.376.376 0 00.116-.275.392.392 0 00-.116-.275L2.176 1.622a.394.394 0 00-.56-.01z"></path></svg></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.services-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.616 1.613a.384.384 0 000 .55l4.937 4.832-4.937 4.842a.384.384 0 000 .55.402.402 0 00.56 0l5.208-5.108a.376.376 0 00.116-.275.392.392 0 00-.116-.275L2.176 1.622a.394.394 0 00-.56-.01z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.616 1.613a.384.384 0 000 .55l4.937 4.832-4.937 4.842a.384.384 0 000 .55.402.402 0 00.56 0l5.208-5.108a.376.376 0 00.116-.275.392.392 0 00-.116-.275L2.176 1.622a.394.394 0 00-.56-.01z"></path></svg></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.btn-add').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.select-add').fadeIn();
});

$('.dropdown-wrapper').on('click',function () {
   $(this).find('.dropdown-menu').fadeIn();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".dropdown-wrapper"); // тут указываем ID элемента
    var btn = $('.dropdown-menu');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        btn.fadeOut(); // скрываем его
    }
});

$('.btn-menu').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

function initDatepicker() {

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $('.date-input').datepicker($.extend({
            inline: true,
            changeYear: true,
            changeMonth: true,
        },
        $.datepicker.regional['ru']
    ));
}

initDatepicker();

$( function() {
    var dateFormat = "mm/dd/yy",
        from = $( ".from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( ".to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );