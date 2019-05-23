$(function() {
    var $c = $("#slidingGoods");
    $c.carouFredSel({
        align: false,
        items: 5,
        scroll: {
            items: 1,
            duration: 2000,
            timeoutDuration: 0,
            easing: "linear",
            pauseOnHover: "immediate"
        }
    });
});
