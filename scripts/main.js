// smooth scroll to sections
$(".nav-link").click(function() {
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 50
    });
});