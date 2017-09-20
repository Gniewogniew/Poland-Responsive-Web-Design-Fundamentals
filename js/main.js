function main() {
    $(".menu-icon").click(function() {
        $(".nav,.nav__item").toggleClass("open");
    });
}
$(main);