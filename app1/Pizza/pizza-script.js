$(document).ready(function () {

    $('.tab-links').on('click', 'a', function () { //переключение табов
        $('.tab-links').children('a').css('background-position-y', '-2px');
        $(this).css('background-position-y', '-42px');
        var tabTarget = $(this).attr('data-href');
        $('#tabs').children('div').removeClass('active-tab');
        $(tabTarget).addClass('active-tab');
    });

    $('.pizza-type').on('click', function () {//тип теста
        $('.pizza-type').css('opacity', '0.7');
        $(this).css('opacity', '1');
        $('#pizza-type-txt').text($(this).attr('data-pizza-type'));
    });

    $('.pizza-size').on('click', function () { // размер пиццы
        var invertHeight = '-' + $(this).attr('data-height');
        $('.pizza-size').css('background-position-y', '0');
        $(this).css('background-position-y', invertHeight);
        $('#pizza-size-txt').text($(this).attr('data-pizza-size'));
    });

    $('.pizza-sauce').on('click', function () { // основной соус пиццы
        $('.pizza-sauce').children().css('opacity', '0.6');
        $(this).children().css('opacity', '1');
        $('#pizza-sauce-txt').text($(this).attr('data-sauce-name'));
    })
    $('option').on('change', function () {
        alert(12);
    })
});