(() => {
  "use strict";
  var n = {
      402: (n, e, r) => {
        r.d(e, { Z: () => m });
        var o = r(81),
          t = r.n(o),
          i = r(645),
          a = r.n(i),
          d = r(667),
          s = r.n(d),
          c = new URL(r(170), r.b),
          l = a()(t());
        l.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap);",
        ]);
        var p = s()(c);
        l.push([
          n.id,
          ":root {\n   --red: #ff3838 \n}\n\n* {\n    font-family: 'Nunito', sans-serif;\n    margin: 0; padding: 0;\n    box-sizing: border-box;\n    outline: none; border: none;\n    text-decoration: none;\n    text-transform: capitalize;\n    transition: all .2s linear;\n}\n\n/* The ::selection CSS pseudo-element applies styles to the part of a document that has been highlighted by the user */\n*::selection {\n    background: var(--red);\n    color: #fff;\n}\n\nhtml {\n    font-size: 62.5%;\n    /* Helps us take care of the content which is overflowing from the page horizontally  */\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n    scroll-padding-top: 6rem;\n}\n\nbody {\n    background: #f7f7f7;\n}   \n\nsection {\n    padding: 2rem 9%; \n}\n\n.heading {\n    text-align: center;\n    font-size: 3.5rem;\n    padding: 1rem;\n    color: #666;\n}\n\n.heading span {\n    color: var(--red);\n}\n\n.btn {\n    display: inline-block;\n    padding: .8rem 3rem;\n    border: .2rem solid var(--red);\n    color: var(--red);\n    cursor: pointer;\n    font-size: 1.7rem;\n    border-radius: .5rem;\n    position: relative;\n    overflow: hidden;\n    z-index: 0;\n    margin-top: 1rem;\n}\n\n.btn::before {  \n    content: '';\n    position: absolute;\n    top: 0; right: 0;\n    width: 0%;\n    height: 100%;\n    background: var(--red);\n    transition: .3s linear;\n    z-index: -1;    \n}\n\n.btn:hover::before {\n    width: 100%;\n    left: 0;\n}\n\n.btn:hover {\n    color: #fff;\n}\n\nheader {\n    position: fixed;\n    top: 0; left: 0; right: 0;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: #fff;\n    padding: 2rem 9%;\n    box-shadow: 0 .5rem 1rem rgb(0, 0, 0, 0.1);\n}\n\nheader .logo {\n    font-size: 2.5rem;\n    font-weight: bolder;\n    color: #666;\n}\n\nheader .logo i {\n    padding-right: .5rem;\n    color: var(--red);\n}\n\nheader .navbar a {\n        font-size: 2rem;\n        margin-left: 2rem;\n        color: #666;\n}\n\nheader .navbar a:hover {\n    color: var(--red);\n}\n\n#menu-bar {\n    font-size: 3rem;\n    cursor: pointer;\n    color: #666;\n    border: .1rem solid #666;\n    border-radius: .3rem;\n    padding: .5rem 1.5rem;\n    display: none;\n}\n\n.home {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n    min-height: 100vh;\n    align-items: center;\n    background: url(" +
            p +
            ") no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n.home .content {\n    flex: 1 1 40rem;\n    padding-top: 6.5rem;\n}\n\n.home .image {\n    flex: 1 1 40rem;\n}\n\n.home .image img {\n    width: 100%;\n    padding: 1rem;\n    animation: float 3s linear infinite;\n}\n\n@keyframes float {\n    0%, 100% {\n        transform: translateY(0rem);\n    }\n    50% {\n        transform: translateY(3rem);\n    }\n}\n\n.home .content h3 {\n    font-size: 5rem;\n    color: #333;\n}\n\n\n.home .content p {\n    font-size: 1.7rem;\n    color: #666;\n    padding: 1rem 0;\n}  \n\n.specialities .box-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n}\n\n.specialities .box-container .box {\n    flex: 1 1 30rem;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);\n    border: .1rem solid rgba(0, 0, 0, .3);\n    cursor: pointer;\n    border-radius: .5rem\n}\n\n.specialities .box-container .box .image {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: -100%; left: 0;\n}\n\n.specialities .box-container .box .content {\n    text-align: center;\n    background: #fff;\n    padding: 2rem;\n}\n\n.specialities .box-container .box .content img {\n    margin: 1.5rem 0;\n}\n\n.specialities .box-container .box .content h3 {\n    font-size: 2.5rem;\n    color: #333;\n}\n\n.specialities .box-container .box .content p {\n    margin: 1.6rem 0;\n    color: #666;\n    padding: 1rem 0;\n    font-size: 1.5rem;\n}\n\n.specialities .box-container .box:hover .image {\n    top: 0; \n}\n\n.specialities .box-container .box:hover .content {\n    transform: translateY(100%);\n}\n\n.popular .box-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n}\n\n.popular .box-container .box {\n    position: relative;\n    padding: 2rem;\n    background: #fff;\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);\n    border-radius: .5rem;\n    text-align: center;\n    flex: 1 1 30rem;\n}\n\n.popular .box-container .box img {\n    height: 25rem;\n    object-fit: cover;\n    width: 100%;\n    border-radius: .5rem;\n\n}\n\n.popular .box-container .box .price {\n    position: absolute;\n    top: 3rem; left: 3rem;\n    background: var(--red);\n    color: #fff;\n    font-size: 2rem;\n    padding: .5rem 1rem;\n    border-radius: .5rem;\n}\n\n.popular .box-container .box h3 {\n    color: #333;\n    font-size: 2.5rem;\n    padding-top: 1rem;\n    \n}\n\npopular .box-container .box .stars i {\n    color: gold;\n    font-size: 1.5rem;\n    padding: 1rem .1rem;\n}\n\n.steps {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n    padding: 1rem;\n}\n\n.steps .box {\n    flex: 1 1 25rem;\n    padding: 1rem;\n    text-align: center;\n    \n}\n\n.steps .box img {\n    border-radius: 50%;\n    border: 1rem solid #fff;\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);\n}\n\n.steps .box h3 {\n    font-size: 2.6rem;\n    color: #333;\n    padding: 1rem 0;\n}\n\n.gallery .box-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n}\n\n.gallery .box-container .box {\n    height: 25rem; \n    flex: 1 1 30rem;\n    border: 1rem solid #fff;\n    box-shadow: 0 ,5rem 1rem rgba(0, 0, 0, 0.1);\n    border-radius: .5rem;\n    position: relative;\n    overflow: hidden;\n}\n\n.gallery .box-container .box img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.gallery .box-container .box .content {\n    position: relative;\n    top: -100%; left: 0;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, .9);\n    padding: 2rem;\n    padding-top: 5rem;\n    text-align: center; \n}\n\n.gallery .box-container .box .content h3 {\n    font-size: 2.5rem;\n    color: #333;\n}\n\n.gallery .box-container .box .content p {\n    font-size: 1.5rem;\n    color: #666;\n    padding: 1rem 0;\n}\n\n.gallery .box-container .box:hover .content {\n    top: 0;\n}\n\n.review .box-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n}\n\n.review .box-container .box {\n    text-align: center;\n    padding: 2rem;\n    border: 1rem solid #fff;\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .3);\n    border-radius: .5rem;\n    flex: 1 1 30rem;\n    background: #333;\n    margin-top: 6rem;\n}\n\n.review .box-container .box img {\n    height: 12rem;\n    width: 12rem;\n    border-radius: 50%;\n    border: 1rem solid #fff;\n    margin-top: -8rem;\n    object-fit: cover;\n}\n\n.review .box-container .box h3 {\n    font-size: 2.5rem;\n    color: #fff;\n    padding: .5rem 0;\n}\n\n.review .box-container .box .stars i {\n    font-size: 2rem;\n    color: var(--red);\n    padding: .5rem 0;\n}\n\n.review .box-container .box p {\n    font-size: 1.5rem;\n    color: #eee;\n     padding: 1rem 9;\n}\n\n.order .row {\n    padding: 2rem;\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1); \n    background: #fff;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n}\n\n.order .row .image {\n    flex: 1 1 30rem;\n}\n\n.order .row form {\n    flex: 1 1 50rem;\n}\n\n.order .row .image img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    border-radius: .5rem;\n}\n\n.order .row form .inputBox {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.order .row form .inputBox input, \n.order .row form textarea {\n    padding: 1rem;\n    margin: 1rem 0;\n    font-size: 1.7rem;\n    color: #333;\n    text-transform: none;\n    border: .1rem solid rgba(0, 0, 0, .3);\n    border-radius: .5rem;\n    width: 49%;\n}\n\n.order .row form textarea {\n    width: 100%;\n    resize: none;\n    height: 15rem;\n}\n\n.order .row form .btn {\n    background: none;\n}\n\n.order .row form .btn {\n    background: var(--red);   \n}\n\n.footer {\n    background: #000;\n    text-align: center;\n}\n\n.footer .share {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1.5rem;\n}\n\n.footer .credit {\n    padding: 2.5rem 1rem;\n    color: #fff; \n    font-weight: normal;\n    font-size: 2rem; \n}\n\n.footer .credit span {\n    color: var(--red);\n}\n\n#scroll-top {\n    position: fixed;\n    top: -120%;\n    right: 2rem;\n    padding: .5rem 1.5rem;\n    font-size: 4rem;\n    background: var(--red);\n    color: #fff;\n    border-radius: .5rem;\n    transition: 1s linear; \n    z-index: 1000;\n}\n\n#scroll-top.active {\n    top: calc(100% - 12rem);\n}\n\n.loader-container {\n    position: fixed;\n    top: 0; left: 0;\n    z-index: 10000;\n    background: #fff;\n    display: flex;   \n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n}\n\n.loader-container.fade-out {\n    top: -120%;\n}\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Media Queries */\n@media(max-width:991px) {\n    html {\n        font-size: 55%;\n    }\n\n    header {\n        padding: 2rem;\n    }\n\n    section {\n        padding: 2rem; \n    }   \n} \n\n@media(max-width:768px) {\n    #menu-bar {\n        display: initial;\n    }\n\n    header .navbar {\n        position: absolute;\n        top: 100%; left: 0; right: 0;\n        background: #f7f7f7;\n        border-top: .1rem solid rgba(0, 0, 0, 0.1);\n        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n    }\n\n    header .navbar.active {\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n    }\n\n    header .navbar a {\n        margin: 1.5rem;\n        padding: 1.5rem;\n        display: block;\n        border: .2rem solid rgba(0, 0, 0, .1);\n        border-left: .5rem solid var(--red);\n        background: #fff\n    }\n\n}\n\n@media(max-width:400px) {\n    html {\n        font-size: 50%;\n    }\n\n    .order .row form .inputBox input {\n        display: block;\n        width: 100%;\n    }\n} ",
          "",
        ]);
        const m = l;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  o &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += n(e)),
                  o && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (n, r, o, t, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var d = 0; d < this.length; d++) {
                  var s = this[d][0];
                  null != s && (a[s] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c]);
                (o && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  t &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = t))
                      : (l[4] = "".concat(t))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function r(n) {
          for (var r = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              r = o;
              break;
            }
          return r;
        }
        function o(n, o) {
          for (var i = {}, a = [], d = 0; d < n.length; d++) {
            var s = n[d],
              c = o.base ? s[0] + o.base : s[0],
              l = i[c] || 0,
              p = "".concat(c, " ").concat(l);
            i[c] = l + 1;
            var m = r(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== m) e[m].references++, e[m].updater(f);
            else {
              var b = t(f, o);
              (o.byIndex = d),
                e.splice(d, 0, { identifier: p, updater: b, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function t(n, e) {
          var r = e.domAPI(e);
          return (
            r.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                r.update((n = e));
              } else r.remove();
            }
          );
        }
        n.exports = function (n, t) {
          var i = o((n = n || []), (t = t || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var d = r(i[a]);
              e[d].references--;
            }
            for (var s = o(n, t), c = 0; c < i.length; c++) {
              var l = r(i[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, r) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var r = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (n) {
                  r = null;
                }
              e[n] = r;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(r);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, r) => {
        n.exports = function (n) {
          var e = r.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (r) {
              !(function (n, e, r) {
                var o = "";
                r.supports && (o += "@supports (".concat(r.supports, ") {")),
                  r.media && (o += "@media ".concat(r.media, " {"));
                var t = void 0 !== r.layer;
                t &&
                  (o += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (o += r.css),
                  t && (o += "}"),
                  r.media && (o += "}"),
                  r.supports && (o += "}");
                var i = r.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, r);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      170: (n, e, r) => {
        n.exports = r.p + "0194505ca36882e84c67.jpg";
      },
    },
    e = {};
  function r(o) {
    var t = e[o];
    if (void 0 !== t) return t.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, r), i.exports;
  }
  (r.m = n),
    (r.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return r.d(e, { a: e }), e;
    }),
    (r.d = (n, e) => {
      for (var o in e)
        r.o(e, o) &&
          !r.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      r.g.importScripts && (n = r.g.location + "");
      var e = r.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var o = e.getElementsByTagName("script");
        o.length && (n = o[o.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = n);
    })(),
    (r.b = document.baseURI || self.location.href),
    (r.nc = void 0),
    (() => {
      var n = r(379),
        e = r.n(n),
        o = r(795),
        t = r.n(o),
        i = r(569),
        a = r.n(i),
        d = r(565),
        s = r.n(d),
        c = r(216),
        l = r.n(c),
        p = r(589),
        m = r.n(p),
        f = r(402),
        b = {};
      (b.styleTagTransform = m()),
        (b.setAttributes = s()),
        (b.insert = a().bind(null, "head")),
        (b.domAPI = t()),
        (b.insertStyleElement = l()),
        e()(f.Z, b),
        f.Z && f.Z.locals && f.Z.locals;
      let u = document.querySelector("#menu-bar"),
        g = document.querySelector(".navbar");
      u.addEventListener("click", () => {
        u.classList.toggle("fa-times"), g.classList.toggle("active");
      }),
        window.addEventListener("scroll", () => {
          u.classList.remove("fa-times"),
            g.classList.remove("active"),
            window.scrollY > 60
              ? document.querySelector("#scroll-top").classList.add("active")
              : document
                  .querySelector("#scroll-top")
                  .classList.remove("active");
        }),
        (window.onload = void setInterval(function () {
          document.querySelector(".loader-container").classList.add("fade-out");
        }, 3e3));
    })();
})();
