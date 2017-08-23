$(document).on('ready', function () {

    $("#id-form-feedback").change(function () {
        if ($("#id-check-feedback").prop('checked')) {
            $('#id-submit-feedback').removeAttr('disabled');
        } else {
            $('#id-submit-feedback').attr('disabled', 'disabled');
        }
    });
    $("#id-feedback-email").on('blur', function () {
        var reg = /.+@.+\..+/i;
        var mailVal = $(this).val();
        console.log(!reg.test(mailVal));
        if (!reg.test(mailVal)) {
            $("#id-feedback-email").css("borderColor", "red");
            $('.err-mail').show();
            $('#id-submit-feedback').attr('disabled', 'disabled');
        } else {
            $("#id-feedback-email").css("borderColor", "#9e9e9e");
            $('.err-mail').hide();
            $('#id-submit-feedback').removeAttr('disabled');
        }
    });

    $('.carousel-inner').slick({
        prevArrow: '.left.carousel-control',
        nextArrow: '.right.carousel-control',
        dots: true
    });

    $('.dropdown-submenu>.dropdown-toggle').on('click', function (e) {
        e.stopPropagation();
    });

});
