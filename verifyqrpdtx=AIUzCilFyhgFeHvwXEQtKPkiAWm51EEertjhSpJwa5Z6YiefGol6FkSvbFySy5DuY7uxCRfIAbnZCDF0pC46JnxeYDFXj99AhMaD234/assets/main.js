(function ($) {
    $(function () {

        function mobileMenu() {
            var mode = null;

            function checkMode() {
                return window.matchMedia("(max-width: 991px)").matches ? "mobile" : "desktop";
            }

            function applyMode() {
                var newMode = checkMode();
                if (newMode === mode) return;
                mode = newMode;

                if (mode === "mobile") {
                    var nav = $("#mainnav").attr("id", "mainnav-mobi").hide();
                    $("#header").after(nav);

                    var hasChild = $("#mainnav-mobi li:has(ul)");
                    hasChild.children("ul").hide();
                    hasChild.children("a").after('<span class="btn-submenu"></span>');
                } else {
                    var nav = $("#mainnav-mobi").attr("id", "mainnav").removeAttr("style");
                    nav.find("ul").removeAttr("style");
                    $(".nav-wrap").append(nav);
                    $(".btn-submenu").remove();
                }
            }

            applyMode();
            $(window).on("resize", applyMode);

            $(".btn-menu").on("click", function () {
                $("#mainnav-mobi").slideToggle(300);
                $(this).toggleClass("active");
            });

            $(document).on("click", "#mainnav-mobi .btn-submenu", function (e) {
                e.stopPropagation();
                $(this).toggleClass("active").next("ul").slideToggle(300);
            });
        }

        mobileMenu();
    });
})(jQuery);
