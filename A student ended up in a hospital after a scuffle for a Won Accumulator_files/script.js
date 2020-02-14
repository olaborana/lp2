//slidebar
(function () {
    function k() {
        var e = d.getBoundingClientRect(), f = document.querySelector(".article").getBoundingClientRect().bottom;
        if (e.bottom < f) {
            if (null == a) {
                for (var c = getComputedStyle(d, ""), g = "", b = 0; b < c.length; b++)if (0 == c[b].indexOf("overflow") || 0 == c[b].indexOf("padding") || 0 == c[b].indexOf("border") || 0 == c[b].indexOf("outline") || 0 == c[b].indexOf("box-shadow") || 0 == c[b].indexOf("background"))g += c[b] + ": " + c.getPropertyValue(c[b]) + "; ";
                a = document.createElement("div");
                a.className = "stop";
                a.style.cssText = g + " box-sizing: border-box; width: " +
                d.offsetWidth + "px;";
                d.insertBefore(a, d.firstChild);
                c = d.childNodes.length;
                for (b = 1; b < c; b++)a.appendChild(d.childNodes[1]);
                d.style.height = a.getBoundingClientRect().height + "px";
                d.style.padding = "0";
                d.style.border = "0"
            }
            b = a.getBoundingClientRect();
            g = e.top + b.height;
            c = document.documentElement.clientHeight;
            f = Math.round(g - f);
            g = Math.round(g - c);
            b.height > c ? (e.top < l ? g + 0 > f ? 0 >= b.bottom - c + 0 ? (a.className = "sticky", a.style.top = c - b.height - 0 + "px", h = 0 + e.top + b.height - c) : (a.className = "stop", a.style.top = -h + "px") : (a.className =
                "stop", a.style.top = -f + "px", h = f) : 0 > e.top - 0 ? 0 <= b.top - 0 ? (a.className = "sticky", a.style.top = "0px", h = e.top - 0) : (a.className = "stop", a.style.top = -h + "px") : (a.className = "", a.style.top = "", h = 0), l = e.top) : 0 >= e.top - 0 ? e.top - 0 <= f ? (a.className = "stop", a.style.top = -f + "px") : (a.className = "sticky", a.style.top = "0px") : (a.className = "", a.style.top = "");
            window.addEventListener("resize", function () {
                d.children[0].style.width = getComputedStyle(d, "").width
            }, !1)
        }
    }

    var d = document.querySelector(".aside"), a = null, l = null, h = 0;
    window.addEventListener("scroll", k, !1);
    document.body.addEventListener("scroll", k, !1)
})();
