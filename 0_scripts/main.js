$(function () {
    function isIndexPage() {
        var pathname = location.pathname;
        console.log("DEBUG: " + pathname);
        pathname = "/pages";
        console.log("DEBUG: " + pathname);
        var re1 = new RegExp("/index$");
        var re2 = new RegExp("/(pages|pages.html)$");
        if (pathname.match(re1) || pathname.match(re2)) {
            return true;
        } else {
            return false;
        }
    }

    if (isIndexPage()) {
        var links = $("#main>article>ul>li a");
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            console.log(link.text);
            var url = "/" + link.text;
            link.href = url;
        }
    }
}
);
