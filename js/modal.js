// INFO : for modal
$("body").append("<div class='modal-backdrop'></div>");
$('.btn-modal').on('click', function () {
    $("body").addClass("modal-open");
    $('.modal-backdrop').fadeIn();
    var id = $(this).data('target');
    $('.modal[data-target="' + id + '"]').fadeIn();
    $(".navigation.sticky.fixed").addClass("show-modal");
});

$('.btn-close').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
        $(".navigation.sticky.fixed").removeClass("show-modal");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});

$('.modal-backdrop').on('click', function () {
    setTimeout(() => {
        $("body").removeClass("modal-open");
        $(".navigation.sticky.fixed").removeClass("show-modal");
    }, 400);
    $('.modal-backdrop').fadeOut();
    $('.modal').fadeOut();
});