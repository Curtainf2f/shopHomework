$(document).ready(function() {
    $("aside ul li #searchBox").hover(
        function() {
            $(this)
                .animate({ width: "555px" }, 100)
                .css({
                    opacity: "1",
                    filter: "Alpha(opacity=100)",
                    background: "#ae1c1c"
                });
        },
        function() {
            $(this)
                .animate({ width: "54px" }, 100)
                .css({
                    opacity: "0.8",
                    filter: "Alpha(opacity=80)",
                    background: "#000"
                });
        }
    );
    $("aside ul li #sideNormal").hover(
        function() {
            $(this)
                .animate({ width: "124px" }, 200)
                .css({
                    opacity: "1",
                    filter: "Alpha(opacity=100)",
                    background: "#ae1c1c"
                });
        },
        function() {
            $(this)
                .animate({ width: "54px" }, 200)
                .css({
                    opacity: "0.8",
                    filter: "Alpha(opacity=80)",
                    background: "#000"
                });
        }
    );
});

function goTop() {
    $("html,body").animate({ scrollTop: 0 }, 600);
}
