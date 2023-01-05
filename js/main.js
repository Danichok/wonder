$(document).ready(function() {
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});
var pageHeight = $('body').height()

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('navbar_fixed')
    }
});
$(window).on('scroll', function() {
    var distanceScrolled = $(window).scrollTop();
    if (distanceScrolled > 1) {
        distanceScrolled = distanceScrolled + $(window).height()
        var pagePersent = (distanceScrolled * 100) / pageHeight;
        console.log(pageHeight)
        console.log(distanceScrolled)
        $('.navbar_progress_bar').attr('style', 'width:' + pagePersent + '%')
    } else {
        var pagePersent = (distanceScrolled * 100) / pageHeight;
        console.log(pageHeight)
        console.log(distanceScrolled)
        $('.navbar_progress_bar').attr('style', 'width:' + pagePersent + '%')
    }
});