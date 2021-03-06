/*! For license information please see macaw-tabs.js.LICENSE.txt */ ! function () {
    var t = {
            40: function () {
                ! function (t) {
                    "use strict";
                    t.fn.macawTabs = function (a) {
                        const s = {
                                tabPanelAutoActivation: !1,
                                tabPanelTransitionLogic: !0,
                                tabPanelTransitionClass: "active",
                                tabPanelTransitionTimeout: 0,
                                tabPanelTransitionTimeoutDuration: 50,
                                autoVerticalOrientation: !0,
                                autoVerticalOrientationMaxWidth: "575px",
                                onTabActivation() {}
                            },
                            n = t.extend({}, s, a);
                        return this.each((function () {
                            const a = {
                                parentThis: t(this),
                                settings: n
                            };
                            e(a), c(a)
                        }))
                    };
                    const e = t => {
                            const {
                                settings: e
                            } = t;
                            !0 === e.autoVerticalOrientation && a(t), s(t), l(t), u(t)
                        },
                        a = t => {
                            const {
                                parentThis: e,
                                settings: a
                            } = t, s = e.find("> [role=tablist]");
                            e.removeClass("vertical"), s.removeAttr("aria-orientation"), window.matchMedia(`(max-width: ${a.autoVerticalOrientationMaxWidth})`).matches && (e.addClass("vertical"), s.attr("aria-orientation", "vertical"))
                        },
                        s = e => {
                            const {
                                parentThis: a,
                                settings: s
                            } = e, n = a.find("> [role=tablist] > [role=tab][aria-selected=true]"), i = t(`#${n.attr("aria-controls")}`);
                            !0 === s.tabPanelTransitionLogic && (s.tabPanelTransitionTimeout = setTimeout((() => {
                                i.addClass(s.tabPanelTransitionClass)
                            }), s.tabPanelTransitionTimeoutDuration))
                        },
                        n = (e, a) => {
                            const {
                                parentThis: n,
                                settings: i
                            } = e;
                            "true" !== a.attr("aria-selected") && ((t => {
                                const {
                                    parentThis: e,
                                    settings: a
                                } = t, s = e.find("> [role=tablist] > [role=tab]"), n = e.find("> [role=tabpanel]");
                                s.attr("tabindex", "-1"), s.attr("aria-selected", "false"), !0 === a.tabPanelTransitionLogic && n.removeClass(a.tabPanelTransitionClass), n.attr("hidden", "hidden")
                            })(e), a.removeAttr("tabindex"), a.attr("aria-selected", "true"), t(`#${a.attr("aria-controls")}`).removeAttr("hidden"), s(e), i.onTabActivation.call({
                                parentThis: n,
                                tab: a
                            }))
                        },
                        i = (e, a, s) => {
                            const {
                                settings: i
                            } = e;
                            if ("prev" === s)
                                if (-1 !== a.prev().index()) {
                                    const s = a.prev().focus();
                                    !0 === i.tabPanelAutoActivation && n(e, t(s))
                                } else o(e);
                            else if ("next" === s)
                                if (-1 !== a.next().index()) {
                                    const s = a.next().focus();
                                    !0 === i.tabPanelAutoActivation && n(e, t(s))
                                } else r(e)
                        },
                        r = e => {
                            const {
                                parentThis: a,
                                settings: s
                            } = e, i = a.find("> [role=tablist] > [role=tab]")[0];
                            i.focus(), !0 === s.tabPanelAutoActivation && n(e, t(i))
                        },
                        o = e => {
                            const {
                                parentThis: a,
                                settings: s
                            } = e, i = a.find("> [role=tablist] > [role=tab]"), r = i[i.length - 1];
                            r.focus(), !0 === s.tabPanelAutoActivation && n(e, t(r))
                        },
                        c = a => {
                            const {
                                settings: s
                            } = a;
                            !0 === s.autoVerticalOrientation && t(window).resize((function () {
                                e(a)
                            }))
                        },
                        l = e => {
                            const {
                                parentThis: a
                            } = e;
                            a.find("> [role=tablist] > [role=tab]").off("click").on("click", (function (a) {
                                a.preventDefault(), a.stopPropagation(), n(e, t(this))
                            }))
                        },
                        u = e => {
                            const {
                                parentThis: a
                            } = e, s = a.find("> [role=tablist] > [role=tab]"), c = a.find("> [role=tablist]").attr("aria-orientation");
                            s.off("keydown").on("keydown", (function (a) {
                                switch (a.which) {
                                    case 35:
                                        a.preventDefault(), a.stopPropagation(), o(e);
                                        break;
                                    case 36:
                                        a.preventDefault(), a.stopPropagation(), r(e);
                                        break;
                                    case 38:
                                        "vertical" === c && (a.preventDefault(), a.stopPropagation(), i(e, t(this), "prev"));
                                        break;
                                    case 40:
                                        "vertical" === c && (a.preventDefault(), a.stopPropagation(), i(e, t(this), "next"))
                                }
                            })), s.off("keyup").on("keyup", (function (a) {
                                switch (a.preventDefault(), a.stopPropagation(), a.which) {
                                    case 37:
                                        "vertical" !== c && i(e, t(this), "prev");
                                        break;
                                    case 39:
                                        "vertical" !== c && i(e, t(this), "next");
                                        break;
                                    case 13:
                                    case 32:
                                        n(e, t(this))
                                }
                            }))
                        }
                }(jQuery)
            },
            867: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-aurora-tabs-reset.css"
            },
            729: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-aurora-tabs.css"
            },
            235: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-elegant-tabs-reset.css"
            },
            869: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-elegant-tabs.css"
            },
            702: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-fresh-tabs-reset.css"
            },
            734: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-fresh-tabs.css"
            },
            717: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-power-tabs-reset.css"
            },
            398: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-power-tabs.css"
            },
            20: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-silk-tabs-reset.css"
            },
            203: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-silk-tabs.css"
            },
            973: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-simple-tabs-reset.css"
            },
            348: function (t, e, a) {
                "use strict";
                t.exports = a.p + "css/macaw-simple-tabs.css"
            }
        },
        e = {};

    function a(s) {
        var n = e[s];
        if (void 0 !== n) return n.exports;
        var i = e[s] = {
            exports: {}
        };
        return t[s](i, i.exports, a), i.exports
    }
    a.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return a.d(e, {
                a: e
            }), e
        }, a.d = function (t, e) {
            for (var s in e) a.o(e, s) && !a.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: e[s]
            })
        }, a.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function () {
            var t;
            a.g.importScripts && (t = a.g.location + "");
            var e = a.g.document;
            if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
                var s = e.getElementsByTagName("script");
                s.length && (t = s[s.length - 1].src)
            }
            if (!t) throw new Error("Automatic publicPath is not supported in this browser");
            t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = t + "../"
        }(),
        function () {
            "use strict";
            a(867), a(729), a(235), a(869), a(702), a(734), a(717), a(398), a(20), a(203), a(973), a(348), a(40)
        }()
}();