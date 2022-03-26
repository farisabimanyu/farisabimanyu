$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('nav').css('background-color', 'white')
            $('nav').addClass('shadow-lg')
        } else {
            $('nav').css('background-color', 'transparent')
            $('nav').removeClass('shadow-lg')
        }
    })

    $('.link').click(function (event) {
        const to = $(this).attr('href')
        const toElement = $(to)

        $('html,body').animate({
            scrollTop: toElement.offset().top - 100
        }, 1000)

        event.preventDefault()
    })
})