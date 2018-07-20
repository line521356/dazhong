webpackJsonp([1], [function(t, e, i) {
    t.exports = i(2)
},
,
function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    var r = i(1),
    s = n(r),
    o = i(3),
    a = n(o);
    i(23),
    (0, s.
default)(document).ready(function() { (0, a.
    default)(document.getElementById("J_login_container"), {
            platform: "pc",
            wide: !1,
            redir: window.PC_INITIAL_DATA.redirUrl || window.location.origin
        })
    })
},
function(t, e, i) {
    i(4);
    var n = i(5),
    r = i(13),
    s = i(17),
    o = i(11),
    a = function(t, e, i, r) {
        for (var s = [], o = 0; o < e.length; o++) s.push(n.create(t + ":" + e[o], i, r));
        return s
    },
    h = function(t) {
        return "string" == typeof t ? t.split(",") : t
    },
    u = function(t, e, i, n) {
        n.types.length && (t.active = i[0].loginer, e.appendChild(i[0].container))
    },
    c = function(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i].loginer; ["login", "logining", "error", "info"].forEach(function(e) {
                n.on(e,
                function() {
                    var i = Array.prototype.slice.call(arguments, 0);
                    i.unshift(e),
                    t.emit.apply(t, i)
                })
            })
        }
    },
    l = function(t, e) {
        var i = {
            platform: "mobile",
            types: "phone",
            channel: "",
            defaultMobile: "",
            showCountryCode: !0,
            autoSend: !1,
            messageType: 304,
            wide: !0,
            redir: "",
            mobileAutoLogin: !1,
            env: "",
            formData: {}
        },
        n = r({
            active: null,
            login: function() {
                this.active.login()
            }
        },
        s),
        o = r(i, e || {}),
        l = o.types = h(o.types),
        p = a(o.platform, l, o.channel, o);
        return u(n, t, p, o),
        c(n, p),
        n
    };
    window.EasyLogin = l,
    t.exports = l,
    l.CapPop = o
},
function(t, e) {
    Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
        var i;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        arguments.length > 1 && (i = e);
        for (var n = 0; n < this.length; n++) t.call(i, this[n], n, this)
    })
},
function(t, e, i) {
    e.create = function(t, e, n) {
        n = n || {};
        var r, s = document.createElement("div");
        switch (t) {
        case "mobile:phone":
            r = i(6).create(s, e, n);
            break;
        case "mobile:account":
            r = i(20).create(s, e, n);
            break;
        case "pc:phone":
        case "pc:account":
            r = i(22).create(s, e, n);
            break;
        case "pc:reg":
            r = i(22).create(s, e, n, !0)
        }
        return {
            loginer: r,
            container: s
        }
    }
},
function(t, e, i) {
    var n = i(7),
    r = i(8),
    s = i(10),
    o = i(11),
    a = i(15);
    e.create = function(t, e, h) {
        r = r["mobile" + (h.env ? "_" + h.env: "")];
        var u, c, l, p, f, d, g = h.messageType || 304,
        m = h.capEnvData || {},
        v = i(16)();
        h.loginCallback && (v.loginCallback = h.loginCallback),
        v.getUrl = function() {
            return r.login
        },
        v.getFlag = function() {
            return r.flag
        };
        var y = function() {
            var t = d ? d.getAttribute("data-code") : "86",
            e = c.value.trim();
            return "86" == t ? e: t + "_" + e
        },
        b = function(t, e) {
            var i = 60;
            t.className = t.className + " sending";
            var n = setInterval(function() {
                i > 1 ? (t.innerHTML = "重新发送(" + i + ")", i--) : (clearInterval(n), t.innerHTML = "发送验证码", t.className = t.className.replace("sending", ""), e())
            },
            1e3)
        };
        return function() {
            var i = '<div class="EasyLogin_row"><div class="EasyLogin_Mobile_tit EasyLogin_Mobile_Country"><span class="EasyLogin-country-code" data-code="86">86</span><div class="EasyLogin_Mobile_Arrow"></div></div><input type="number" name="mobile" placeholder="请输入手机号" /><a class="J_send EasyLogin_send" href="javascript:;">发送验证码</a></div><div class="EasyLogin_row"><div class="EasyLogin_Mobile_tit">验证码</div><input type="number" name="vcode" placeholder="请输入验证码" /><input type="hidden" value="' + e + '" name="channel" /><input type="hidden" value="' + g + '" name="type" /></div>';
            u = document.createElement("div"),
            u.className = "EasyLogin_Mobile_Mobile",
            u.innerHTML = i,
            t.appendChild(u);
            var r = u.getElementsByTagName("input");
            if (c = r[0], l = r[1], p = r[2], f = r[3], d = u.getElementsByClassName("EasyLogin-country-code")[0], h.showCountryCode || (d.parentNode.className = "EasyLogin_Mobile_tit", d.parentNode.innerHTML = "手机号", d = null), h && h.defaultMobile && (c.value = h.defaultMobile), h && h.mobileAutoLogin) {
                var s = null;
                n(l, "input",
                function() {
                    var t = l.value;
                    t && 6 == t.length && t != s && v.login(),
                    s = t
                })
            }
        } (),
        v.init(r.login.indexOf("ppe") > -1 ? {}: {
            ajaxType: "post"
        }),
        v.setForm([{
            input: c,
            validator: /^(\d+_\d+)|(1\d{10})$/,
            msg: "请输入正确的手机号",
            getValue: y,
            condition: function() {
                return y().length <= 16
            }
        },
        {
            input: l,
            validator: /^\d+$/,
            msg: "请输入正确的验证码"
        },
        {
            input: p,
            validator: /^[\w\W]+$/,
            msg: "无效的渠道号"
        },
        {
            input: f,
            validator: /\d+/,
            msg: "无效的短信类型"
        }], h.formData),
        function() {
            var t = !1,
            e = u.getElementsByTagName("a")[0];
            d && a.create(d);
            var i = function() {
                if (!t) {
                    var i = v.fields[0].check();
                    if (!i.pass) return void v.emit("error", i.msg);
                    t = !0,
                    o({
                        capEnvData: m,
                        mobile: y(),
                        captchaChannel: 102,
                        source: 3
                    },
                    function(i) {
                        s({
                            url: r.send,
                            data: {
                                mobileNo: y(),
                                mobile: y(),
                                uuid: i,
                                type: g
                            },
                            onSuc: function(i) {
                                200 === i.code ? (b(e,
                                function() {
                                    t = !1
                                }), v.emit("info", i.msg.info)) : (t = !1, v.emit("error", i.msg.err))
                            }
                        })
                    },
                    function() {
                        t = !1
                    })
                }
            };
            n(e, "click", i),
            h.autoSend && i()
        } (),
        v
    }
},
function(t, e) {
    t.exports = function(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
    }
},
function(t, e, i) {
    var n = i(9),
    r = "undefined" != typeof location ? location.hostname: "",
    s = n.requestHost(r),
    o = n.requestHost(r, !0);
    t.exports = {
        mobile: {
            send: s + "/account/ajax/mobileVerifySend",
            login: s + "/account/ajax/mfastlogin",
            flag: 100046
        },
        mobile_wx: {
            send: s + "/account/ajax/mobileVerifySend",
            login: s + "/ajax/json/account/mobiledynamiclogin/98",
            flag: 100050
        },
        mobile_qq: {
            send: s + "/account/ajax/mobileVerifySend",
            login: s + "/ajax/json/account/mobiledynamiclogin/98",
            flag: 100050
        },
        mobile_thirdUnion: {
            send: s + "/account/ajax/mobileVerifySend",
            login: s + "/account/ajax/thirdUnionBindMobile"
        },
        account: {
            login: s + "/account/ajax/passwordLogin",
            flag: 100047
        },
        cap: {
            load: s + "/account/ajax/captchaAuth",
            check: s + "/account/ajax/captchaCheck",
            appear: s + "/account/ajax/captchaShow"
        },
        countrycode: {
            url: s + "/login/choosecountry?redirect="
        },
        frame: {
            url: o + "/account/iframeLogin",
            regUrl: o + "/account/iframeRegister"
        }
    }
},
function(t, e) {
    var i = function(t) {
        return~t.indexOf("alpha.dp") ? "alpha": ~t.indexOf("51ping.com") ? "beta": 0 == t.indexOf("ppe.") ? "ppe": ~t.indexOf("dianping.com") || "i.meituan.com" === t || "g.meituan.com" === t ? "online": "beta"
    };
    e.rootDomain = function(t) {
        return {
            alpha: "alpha.dp",
            beta: "51ping.com",
            ppe: "dianping.com",
            online: "dianping.com"
        } [i(t)]
    },
    e.requestHost = function(t, e) {
        var n = {
            m: {
                alpha: "m.alpha.dp",
                beta: "m.51ping.com",
                ppe: "ppe.m.dianping.com",
                online: "maccount.dianping.com"
            },
            pc: {
                alpha: "w.alpha.dp",
                beta: "w.51ping.com",
                ppe: "ppe.www.dianping.com",
                online: "account.dianping.com"
            }
        };
        return e ? "https://" + n.pc[i(t)] : "//" + n.m[i(t)]
    }
},
function(t, e) {
    var i = 0,
    n = function(t, e) {
        if (!e) return t;
        var i = [];
        for (var n in e) e.hasOwnProperty(n) && i.push(n + "=" + e[n]);
        return~t.indexOf("?") ? t + i.join("&") : t + "?" + i.join("&")
    };
    t.exports = function(t) {
        if (!t.url) throw new Error("url request!");
        var e = t.data || {},
        r = t.onSuc ||
        function() {},
        s = t.onError ||
        function() {},
        o = e.callback = "EasyLoginCallBack" + ++i,
        a = document.createElement("script");
        a.src = n(t.url, e),
        a.onerror = s,
        window[o] = function(t) {
            delete window[o],
            a.parentNode.removeChild(a),
            r(t)
        },
        document.getElementsByTagName("head")[0].appendChild(a)
    }
},
function(t, e, i) {
    var n = i(12),
    r = i(7),
    s = i(8),
    o = i(13),
    a = i(14);
    t.exports = function(t, e, i, c) {
        var l, p, f, d = {
            captchaChannel: 0
        },
        g = "";
        "function" == typeof t ? (l = t, f = e, p = i ||
        function() {}) : (o(d, t.capEnvData || {}), delete t.capEnvData, o(d, t), l = e, f = i, p = c ||
        function() {});
        var m = document.createElement("div");
        m.className = "EasyLogin_Mobile_Overlay";
        var v = document.createElement("div");
        v.className = "EasyLogin_Mobile_ImgPop",
        v.innerHTML = '<div class="EasyLogin_Title">请输入验证码</div><div class="EasyLogin_Cap"><input type="text"  /><img  /></div><div class="EasyLogin_Mobile_Msg" style="display: none;"></div><a class="EasyLogin_Mobile_Btn" href="javascript:void(0);">确定</a>';
        var y, b = document.body,
        T = v.getElementsByTagName("input")[0],
        E = v.getElementsByTagName("img")[0],
        w = v.getElementsByClassName("EasyLogin_Mobile_Msg")[0],
        S = !1,
        R = function() {
            b.appendChild(m),
            b.appendChild(v),
            S = !0
        },
        D = function() {
            S && (b.removeChild(m), b.removeChild(v))
        },
        x = function(t) {
            w.innerHTML = t,
            w.style.display = "block"
        },
        A = function(t) {
            D(),
            l(t, g)
        },
        B = function(e) {
            var i = a("https:" + s.cap.load, {
                source: t.source || 0
            });
            n({
                url: s.cap.load,
                data: i,
                onSuc: function(t) {
                    200 == t.code ? (E.src = t.msg.picUrl, y = t.msg.requestCode, e && "function" == typeof e && e()) : t.msg && t.msg.uuid ? A(t.msg.uuid) : t.msg && t.msg.err && alert(t.msg.err)
                }
            })
        },
        O = function(e, i) {
            r(i, "click",
            function(t) {
                setTimeout(function() {
                    D(),
                    f && f()
                },
                300)
            }),
            r(E, "click", B),
            r(e.getElementsByTagName("a")[0], "click",
            function() {
                x("正在提交验证...");
                var e = T.value.trim();
                e ? h({
                    vcode: e,
                    requestCode: y,
                    source: t.source || 0
                },
                function(t, e) {
                    t ? (D(), l(e, g)) : x(e)
                }) : x("请输入验证码")
            })
        };
        u(d,
        function(t, e, i) {
            t ? (g = e, O(v, m), B(R)) : (g = i, l(e, g))
        },
        p)
    };
    var h = function(t, e) {
        var i = a("https:" + s.cap.check, t);
        n({
            url: s.cap.check,
            data: i,
            onSuc: function(t) {
                200 == t.code ? e(!0, t.msg.uuid) : e(!1, t.msg.err)
            }
        })
    },
    u = function(t, e, i) {
        var r = t.captchaChannel;
        delete t.captchaChannel;
        var o = a("https:" + s.cap.appear, {
            captchaChannel: r,
            params: encodeURIComponent(JSON.stringify(t))
        });
        n({
            url: s.cap.appear,
            data: o,
            onSuc: function(t) {
                var i = "";
                t.msg && t.msg.publicKey && (i = t.msg.publicKey),
                t && 200 == t.code && t.msg && 0 == t.msg.isShow && t.msg.uuid ? e(!1, t.msg.uuid, i) : e(!0, i)
            },
            onErr: function() {
                if ("function" == typeof i) try {
                    i()
                } catch(t) {
                    console.log(t)
                }
            }
        })
    }
},
function(t, e) {
    function i() {
        return new XMLHttpRequest
    }
    var n = window.ActiveXObject ?
    function() {
        if (window.XMLHttpRequest) try {
            return i()
        } catch(t) {}
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }: i;
    t.exports = function(t) {
        if (!t.url) throw new Error("url request!");
        var e = n(),
        i = [];
        for (var r in t.data) t.data.hasOwnProperty(r) && i.push(r + "=" + t.data[r]);
        var s = i.join("&");
        e.open("POST", "https:" + t.url, !0),
        e.withCredentials = !0,
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        e.send(s),
        e.onreadystatechange = function(i) {
            4 == e.readyState && (e.status >= 200 && e.status < 300 || 304 == e.status ? t.onSuc(JSON.parse(e.responseText)) : (console.log("request failed!" + e.status), 301 != e.status && 302 != e.status && t.onErr && t.onErr()))
        }
    }
},
function(t, e) {
    t.exports = function(t, e) {
        if (e) for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }
},
function(t, e) {
    function i(t, e) {
        if (!window.Rohr_Opt) return console.log("缺少 rohr.min.js 文件!"),
        e;
        try {
            var i = [];
            for (var n in e) i.push(n + "=" + e[n]);
            var r = "?" + i.join("&"),
            s = Rohr_Opt.reload(t + r);
            return e._token = s,
            e
        } catch(t) {
            console.log("security error info:  " + t)
        }
    }
    t.exports = i
},
function(t, e, i) {
    var n = i(8),
    r = i(7);
    e.create = function(t) {
        var e, i, s = location.href.match(/countrycode=([^&$]+)/);
        s && (e = s[1]);
        try {
            i = localStorage.getItem("country-code")
        } catch(t) {
            console.log("读取 localStorage country-code 异常!")
        }
        var o = e || i;
        o && (o.length >= 5 && (t.style.fontSize = "12px"), t.innerHTML = o, t.setAttribute("data-code", o)),
        r(t.parentNode, "click",
        function() {
            location.href = n.countrycode.url + encodeURIComponent(location.href)
        })
    }
},
function(t, e, i) {
    var n = i(17),
    r = i(13),
    s = i(10),
    o = i(18),
    a = {
        init: function(t) {
            this.fields = [],
            this.request = t && "post" === t.ajaxType ? i(12) : s
        },
        setForm: function(t, e) {
            var i = this;
            if ("[object Array]" !== Object.prototype.toString.call(t)) throw new Error("fields should be an array");
            t.forEach(function(t) {
                i.fields.push(o.create(t))
            }),
            this.formData = e
        },
        check: function(t) {
            for (var e = 0,
            i = this.fields.length; e < i; e++) {
                var n = this.fields[e].check();
                if (!n.pass) return void this.emit("error", n.msg)
            }
            t()
        },
        beforeLogin: function(t) {
            t()
        },
        login: function() {
            var t = this;
            t.check(function() {
                t.beforeLogin(function() {
                    if (!t.isSubmitting) {
                        t.isSubmitting = !0;
                        var e = setTimeout(function() {
                            t.isSubmitting = !1
                        },
                        3e3);
                        t.emit("logining");
                        var i = t.getUrl(),
                        n = t.getData();
                        if (window.Rohr_Opt) try {
                            var r = "https:" + i;
                            window.Rohr_Opt.Flag = t.getFlag();
                            var s = [];
                            for (var o in n) s.push(o + "=" + n[o]);
                            var a = "?" + s.join("&"),
                            h = Rohr_Opt.reload(r + a);
                            n._token = h
                        } catch(t) {
                            console.log("security error info:  " + t)
                        }
                        t.request({
                            url: i,
                            data: n,
                            onSuc: function(i) {
                                t.isSubmitting = !1,
                                clearTimeout(e),
                                t.loginCallback ? t.loginCallback(i, {
                                    token: n._token
                                }) : 200 === i.code ? t.emit("login") : t.emit("error", i.msg.err, i)
                            }
                        })
                    }
                })
            })
        },
        getUrl: function() {},
        getFlag: function() {},
        getData: function() {
            var t = {};
            return this.fields.forEach(function(e) {
                t[e.input.getAttribute("name") || e.input.getAttribute("data-name")] = e.valueGetter()
            }),
            r(t, this.formData)
        },
        isSubmitting: !1
    };
    r(a, n),
    t.exports = function() {
        return r({},
        a)
    }
},
function(t, e) {
    var i = {
        on: function(t, e) {
            if (t) {
                this._events_ || (this._events_ = {});
                var i = this._events_;
                i[t] || (i[t] = []),
                i[t].push(e)
            }
        },
        emit: function(t) {
            var e = this._events_;
            if (t && e && e[t]) for (var i = e[t], n = i.length, r = Array.prototype.slice.call(arguments, 1), s = 0; s < n; s++) i[s].apply(this, r)
        }
    };
    t.exports = i
},
function(t, e, i) {
    var n = i(19);
    e.create = function(t) {
        var e = {
            input: t.input,
            validator: new n(t.validator, t.msg),
            valueGetter: t.getValue ||
            function() {
                var e = t.input.value;
                return t.encode ? encodeURIComponent(e) : e
            },
            check: function() {
                return this.validator.setValue(this.valueGetter()),
                {
                    pass: this.validator.match(),
                    msg: this.validator.msg
                }
            }
        };
        return t.condition && (e.validator.preMatch = t.condition),
        e
    }
},
function(t, e, i) {
    var n = i(17),
    r = i(13),
    s = function(t, e) {
        void 0 !== t && this.setMatcher(t),
        void 0 !== e && this.setMsg(e)
    };
    s.prototype = {
        constructor: s,
        setMatcher: function(t) {
            if ("[object RegExp]" !== Object.prototype.toString.call(t)) throw new Error("matcher must be regexp");
            this.matcher = t
        },
        setValue: function(t) {
            this.value = t
        },
        setMsg: function(t) {
            this.msg = t
        },
        match: function() {
            return !! this.preMatch() && (!this.matcher || this.matcher.test(this.value))
        },
        preMatch: function() {
            return ! 0
        }
    },
    r(s.prototype, n),
    t.exports = s
},
function(t, e, i) {
    var n = i(8),
    r = i(11),
    s = i(21).JSEncrypt,
    o = i(15);
    e.create = function(t, e, a) {
        var h, u, c, l, p, f = "",
        d = i(16)();
        d.getUrl = function() {
            return n.account.login
        },
        d.getFlag = function() {
            return n.account.flag
        },
        function() {
            h = document.createElement("div"),
            h.className = "EasyLogin_Mobile_Account",
            h.innerHTML = '<div class="EasyLogin_row"><div class="EasyLogin_Mobile_tit EasyLogin_Mobile_Country"><span class="EasyLogin-country-code" data-code="86">86</span><div class="EasyLogin_Mobile_Arrow"></div></div><input type="text" data-name="username" placeholder="手机号" /></div><div class="EasyLogin_row"><div class="EasyLogin_Mobile_tit">密码</div><input type="password" data-name="password" placeholder="密码" /></div>',
            t.appendChild(h),
            l = h.getElementsByClassName("EasyLogin-country-code")[0]
        } (),
        function() {
            var t = h.getElementsByTagName("input");
            u = t[0],
            c = t[1]
        } (),
        l && o.create(l),
        d.init(n.account.login.indexOf("ppe") > -1 ? {}: {
            ajaxType: "post"
        }),
        d.setForm([{
            input: u,
            validator: /^[\w\W]{1,}$/,
            msg: "请输入手机号",
            encode: !0
        },
        {
            input: c,
            validator: /^[\w\W]{1,}$/,
            msg: "请输入密码",
            encode: !0
        }], a.formData),
        d.beforeLogin = function(t) {
            r({
                captchaChannel: 101,
                username: u.value,
                source: 2
            },
            function(e, i) {
                p = e,
                f = i,
                t()
            })
        };
        var g = d.getData;
        return d.getData = function() {
            var t = g.call(d);
            if (t.countrycode = l.getAttribute("data-code"), t.uuid = p, f && t.password) {
                var e = new s;
                e.setPublicKey(f),
                t.password = decodeURIComponent(t.password),
                t.encryptedPassword = e.encrypt(JSON.stringify([t.password, p])),
                t.encryptedPassword = encodeURIComponent(t.encryptedPassword),
                delete t.password,
                delete t.uuid
            }
            return t
        },
        d
    }
},
function(t, e, i) {
    var n, r, s; !
    function(i, o) {
        r = [e],
        n = o,
        void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s)
    } (0,
    function(t) {
        function e(t, e, i) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }
        function i() {
            return new e(null)
        }
        function n(t, e, i, n, r, s) {
            for (; --s >= 0;) {
                var o = e * this[t++] + i[n] + r;
                r = Math.floor(o / 67108864),
                i[n++] = 67108863 & o
            }
            return r
        }
        function r(t, e, i, n, r, s) {
            for (var o = 32767 & e,
            a = e >> 15; --s >= 0;) {
                var h = 32767 & this[t],
                u = this[t++] >> 15,
                c = a * h + u * o;
                h = o * h + ((32767 & c) << 15) + i[n] + (1073741823 & r),
                r = (h >>> 30) + (c >>> 15) + a * u + (r >>> 30),
                i[n++] = 1073741823 & h
            }
            return r
        }
        function s(t, e, i, n, r, s) {
            for (var o = 16383 & e,
            a = e >> 14; --s >= 0;) {
                var h = 16383 & this[t],
                u = this[t++] >> 14,
                c = a * h + u * o;
                h = o * h + ((16383 & c) << 14) + i[n] + r,
                r = (h >> 28) + (c >> 14) + a * u,
                i[n++] = 268435455 & h
            }
            return r
        }
        function o(t) {
            return Re.charAt(t)
        }
        function a(t, e) {
            var i = De[t.charCodeAt(e)];
            return null == i ? -1 : i
        }
        function h(t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t,
            t.s = this.s
        }
        function u(t) {
            this.t = 1,
            this.s = t < 0 ? -1 : 0,
            t > 0 ? this[0] = t: t < -1 ? this[0] = t + this.DV: this.t = 0
        }
        function c(t) {
            var e = i();
            return e.fromInt(t),
            e
        }
        function l(t, i) {
            var n;
            if (16 == i) n = 4;
            else if (8 == i) n = 3;
            else if (256 == i) n = 8;
            else if (2 == i) n = 1;
            else if (32 == i) n = 5;
            else {
                if (4 != i) return void this.fromRadix(t, i);
                n = 2
            }
            this.t = 0,
            this.s = 0;
            for (var r = t.length,
            s = !1,
            o = 0; --r >= 0;) {
                var h = 8 == n ? 255 & t[r] : a(t, r);
                h < 0 ? "-" == t.charAt(r) && (s = !0) : (s = !1, 0 == o ? this[this.t++] = h: o + n > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - o) - 1) << o, this[this.t++] = h >> this.DB - o) : this[this.t - 1] |= h << o, (o += n) >= this.DB && (o -= this.DB))
            }
            8 == n && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
            this.clamp(),
            s && e.ZERO.subTo(this, this)
        }
        function p() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)--this.t
        }
        function f(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var e;
            if (16 == t) e = 4;
            else if (8 == t) e = 3;
            else if (2 == t) e = 1;
            else if (32 == t) e = 5;
            else {
                if (4 != t) return this.toRadix(t);
                e = 2
            }
            var i, n = (1 << e) - 1,
            r = !1,
            s = "",
            a = this.t,
            h = this.DB - a * this.DB % e;
            if (a-->0) for (h < this.DB && (i = this[a] >> h) > 0 && (r = !0, s = o(i)); a >= 0;) h < e ? (i = (this[a] & (1 << h) - 1) << e - h, i |= this[--a] >> (h += this.DB - e)) : (i = this[a] >> (h -= e) & n, h <= 0 && (h += this.DB, --a)),
            i > 0 && (r = !0),
            r && (s += o(i));
            return r ? s: "0"
        }
        function d() {
            var t = i();
            return e.ZERO.subTo(this, t),
            t
        }
        function g() {
            return this.s < 0 ? this.negate() : this
        }
        function m(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var i = this.t;
            if (0 != (e = i - t.t)) return this.s < 0 ? -e: e;
            for (; --i >= 0;) if (0 != (e = this[i] - t[i])) return e;
            return 0
        }
        function y(t) {
            var e, i = 1;
            return 0 != (e = t >>> 16) && (t = e, i += 16),
            0 != (e = t >> 8) && (t = e, i += 8),
            0 != (e = t >> 4) && (t = e, i += 4),
            0 != (e = t >> 2) && (t = e, i += 2),
            0 != (e = t >> 1) && (t = e, i += 1),
            i
        }
        function b() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
        }
        function T(t, e) {
            var i;
            for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
            for (i = t - 1; i >= 0; --i) e[i] = 0;
            e.t = this.t + t,
            e.s = this.s
        }
        function E(t, e) {
            for (var i = t; i < this.t; ++i) e[i - t] = this[i];
            e.t = Math.max(this.t - t, 0),
            e.s = this.s
        }
        function w(t, e) {
            var i, n = t % this.DB,
            r = this.DB - n,
            s = (1 << r) - 1,
            o = Math.floor(t / this.DB),
            a = this.s << n & this.DM;
            for (i = this.t - 1; i >= 0; --i) e[i + o + 1] = this[i] >> r | a,
            a = (this[i] & s) << n;
            for (i = o - 1; i >= 0; --i) e[i] = 0;
            e[o] = a,
            e.t = this.t + o + 1,
            e.s = this.s,
            e.clamp()
        }
        function S(t, e) {
            e.s = this.s;
            var i = Math.floor(t / this.DB);
            if (i >= this.t) return void(e.t = 0);
            var n = t % this.DB,
            r = this.DB - n,
            s = (1 << n) - 1;
            e[0] = this[i] >> n;
            for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << r,
            e[o - i] = this[o] >> n;
            n > 0 && (e[this.t - i - 1] |= (this.s & s) << r),
            e.t = this.t - i,
            e.clamp()
        }
        function R(t, e) {
            for (var i = 0,
            n = 0,
            r = Math.min(t.t, this.t); i < r;) n += this[i] - t[i],
            e[i++] = n & this.DM,
            n >>= this.DB;
            if (t.t < this.t) {
                for (n -= t.s; i < this.t;) n += this[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; i < t.t;) n -= t[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
                n -= t.s
            }
            e.s = n < 0 ? -1 : 0,
            n < -1 ? e[i++] = this.DV + n: n > 0 && (e[i++] = n),
            e.t = i,
            e.clamp()
        }
        function D(t, i) {
            var n = this.abs(),
            r = t.abs(),
            s = n.t;
            for (i.t = s + r.t; --s >= 0;) i[s] = 0;
            for (s = 0; s < r.t; ++s) i[s + n.t] = n.am(0, r[s], i, s, 0, n.t);
            i.s = 0,
            i.clamp(),
            this.s != t.s && e.ZERO.subTo(i, i)
        }
        function x(t) {
            for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;) t[i] = 0;
            for (i = 0; i < e.t - 1; ++i) {
                var n = e.am(i, e[i], t, 2 * i, 0, 1); (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
            t.s = 0,
            t.clamp()
        }
        function A(t, n, r) {
            var s = t.abs();
            if (! (s.t <= 0)) {
                var o = this.abs();
                if (o.t < s.t) return null != n && n.fromInt(0),
                void(null != r && this.copyTo(r));
                null == r && (r = i());
                var a = i(),
                h = this.s,
                u = t.s,
                c = this.DB - y(s[s.t - 1]);
                c > 0 ? (s.lShiftTo(c, a), o.lShiftTo(c, r)) : (s.copyTo(a), o.copyTo(r));
                var l = a.t,
                p = a[l - 1];
                if (0 != p) {
                    var f = p * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2: 0),
                    d = this.FV / f,
                    g = (1 << this.F1) / f,
                    m = 1 << this.F2,
                    v = r.t,
                    b = v - l,
                    T = null == n ? i() : n;
                    for (a.dlShiftTo(b, T), r.compareTo(T) >= 0 && (r[r.t++] = 1, r.subTo(T, r)), e.ONE.dlShiftTo(l, T), T.subTo(a, a); a.t < l;) a[a.t++] = 0;
                    for (; --b >= 0;) {
                        var E = r[--v] == p ? this.DM: Math.floor(r[v] * d + (r[v - 1] + m) * g);
                        if ((r[v] += a.am(0, E, r, b, 0, l)) < E) for (a.dlShiftTo(b, T), r.subTo(T, r); r[v] < --E;) r.subTo(T, r)
                    }
                    null != n && (r.drShiftTo(l, n), h != u && e.ZERO.subTo(n, n)),
                    r.t = l,
                    r.clamp(),
                    c > 0 && r.rShiftTo(c, r),
                    h < 0 && e.ZERO.subTo(r, r)
                }
            }
        }
        function B(t) {
            var n = i();
            return this.abs().divRemTo(t, null, n),
            this.s < 0 && n.compareTo(e.ZERO) > 0 && t.subTo(n, n),
            n
        }
        function O(t) {
            this.m = t
        }
        function U(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }
        function K(t) {
            return t
        }
        function N(t) {
            t.divRemTo(this.m, null, t)
        }
        function M(t, e, i) {
            t.multiplyTo(e, i),
            this.reduce(i)
        }
        function L(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function V() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return e = e * (2 - (15 & t) * e) & 15,
            e = e * (2 - (255 & t) * e) & 255,
            e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
            e = e * (2 - t * e % this.DV) % this.DV,
            e > 0 ? this.DV - e: -e
        }
        function C(t) {
            this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
        }
        function I(t) {
            var n = i();
            return t.abs().dlShiftTo(this.m.t, n),
            n.divRemTo(this.m, null, n),
            t.s < 0 && n.compareTo(e.ZERO) > 0 && this.m.subTo(n, n),
            n
        }
        function J(t) {
            var e = i();
            return t.copyTo(e),
            this.reduce(e),
            e
        }
        function P(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var i = 32767 & t[e],
                n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (i = e + this.m.t, t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV,
                t[++i]++
            }
            t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }
        function _(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function q(t, e, i) {
            t.multiplyTo(e, i),
            this.reduce(i)
        }
        function H() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        function j(t, n) {
            if (t > 4294967295 || t < 1) return e.ONE;
            var r = i(),
            s = i(),
            o = n.convert(this),
            a = y(t) - 1;
            for (o.copyTo(r); --a >= 0;) if (n.sqrTo(r, s), (t & 1 << a) > 0) n.mulTo(s, o, r);
            else {
                var h = r;
                r = s,
                s = h
            }
            return n.revert(r)
        }
        function k(t, e) {
            var i;
            return i = t < 256 || e.isEven() ? new O(e) : new C(e),
            this.exp(t, i)
        }
        function F() {
            var t = i();
            return this.copyTo(t),
            t
        }
        function z() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return - 1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        function G() {
            return 0 == this.t ? this.s: this[0] << 24 >> 24
        }
        function Z() {
            return 0 == this.t ? this.s: this[0] << 16 >> 16
        }
        function $(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }
        function W() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        function X(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var e = this.chunkSize(t),
            n = Math.pow(t, e),
            r = c(n),
            s = i(),
            o = i(),
            a = "";
            for (this.divRemTo(r, s, o); s.signum() > 0;) a = (n + o.intValue()).toString(t).substr(1) + a,
            s.divRemTo(r, s, o);
            return o.intValue().toString(t) + a
        }
        function Y(t, i) {
            this.fromInt(0),
            null == i && (i = 10);
            for (var n = this.chunkSize(i), r = Math.pow(i, n), s = !1, o = 0, h = 0, u = 0; u < t.length; ++u) {
                var c = a(t, u);
                c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (s = !0) : (h = i * h + c, ++o >= n && (this.dMultiply(r), this.dAddOffset(h, 0), o = 0, h = 0))
            }
            o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(h, 0)),
            s && e.ZERO.subTo(this, this)
        }
        function Q(t, i, n) {
            if ("number" == typeof i) if (t < 2) this.fromInt(1);
            else for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this), this.isEven() && this.dAddOffset(1, 0); ! this.isProbablePrime(i);) this.dAddOffset(2, 0),
            this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
            else {
                var r = new Array,
                s = 7 & t;
                r.length = 1 + (t >> 3),
                i.nextBytes(r),
                s > 0 ? r[0] &= (1 << s) - 1 : r[0] = 0,
                this.fromString(r, 256)
            }
        }
        function tt() {
            var t = this.t,
            e = new Array;
            e[0] = this.s;
            var i, n = this.DB - t * this.DB % 8,
            r = 0;
            if (t-->0) for (n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[r++] = i | this.s << this.DB - n); t >= 0;) n < 8 ? (i = (this[t] & (1 << n) - 1) << 8 - n, i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)),
            0 != (128 & i) && (i |= -256),
            0 == r && (128 & this.s) != (128 & i) && ++r,
            (r > 0 || i != this.s) && (e[r++] = i);
            return e
        }
        function et(t) {
            return 0 == this.compareTo(t)
        }
        function it(t) {
            return this.compareTo(t) < 0 ? this: t
        }
        function nt(t) {
            return this.compareTo(t) > 0 ? this: t
        }
        function rt(t, e, i) {
            var n, r, s = Math.min(t.t, this.t);
            for (n = 0; n < s; ++n) i[n] = e(this[n], t[n]);
            if (t.t < this.t) {
                for (r = t.s & this.DM, n = s; n < this.t; ++n) i[n] = e(this[n], r);
                i.t = this.t
            } else {
                for (r = this.s & this.DM, n = s; n < t.t; ++n) i[n] = e(r, t[n]);
                i.t = t.t
            }
            i.s = e(this.s, t.s),
            i.clamp()
        }
        function st(t, e) {
            return t & e
        }
        function ot(t) {
            var e = i();
            return this.bitwiseTo(t, st, e),
            e
        }
        function at(t, e) {
            return t | e
        }
        function ht(t) {
            var e = i();
            return this.bitwiseTo(t, at, e),
            e
        }
        function ut(t, e) {
            return t ^ e
        }
        function ct(t) {
            var e = i();
            return this.bitwiseTo(t, ut, e),
            e
        }
        function lt(t, e) {
            return t & ~e
        }
        function pt(t) {
            var e = i();
            return this.bitwiseTo(t, lt, e),
            e
        }
        function ft() {
            for (var t = i(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
            return t.t = this.t,
            t.s = ~this.s,
            t
        }
        function dt(t) {
            var e = i();
            return t < 0 ? this.rShiftTo( - t, e) : this.lShiftTo(t, e),
            e
        }
        function gt(t) {
            var e = i();
            return t < 0 ? this.lShiftTo( - t, e) : this.rShiftTo(t, e),
            e
        }
        function mt(t) {
            if (0 == t) return - 1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16, e += 16),
            0 == (255 & t) && (t >>= 8, e += 8),
            0 == (15 & t) && (t >>= 4, e += 4),
            0 == (3 & t) && (t >>= 2, e += 2),
            0 == (1 & t) && ++e,
            e
        }
        function vt() {
            for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + mt(this[t]);
            return this.s < 0 ? this.t * this.DB: -1
        }
        function yt(t) {
            for (var e = 0; 0 != t;) t &= t - 1,
            ++e;
            return e
        }
        function bt() {
            for (var t = 0,
            e = this.s & this.DM,
            i = 0; i < this.t; ++i) t += yt(this[i] ^ e);
            return t
        }
        function Tt(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s: 0 != (this[e] & 1 << t % this.DB)
        }
        function Et(t, i) {
            var n = e.ONE.shiftLeft(t);
            return this.bitwiseTo(n, i, n),
            n
        }
        function wt(t) {
            return this.changeBit(t, at)
        }
        function St(t) {
            return this.changeBit(t, lt)
        }
        function Rt(t) {
            return this.changeBit(t, ut)
        }
        function Dt(t, e) {
            for (var i = 0,
            n = 0,
            r = Math.min(t.t, this.t); i < r;) n += this[i] + t[i],
            e[i++] = n & this.DM,
            n >>= this.DB;
            if (t.t < this.t) {
                for (n += t.s; i < this.t;) n += this[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; i < t.t;) n += t[i],
                e[i++] = n & this.DM,
                n >>= this.DB;
                n += t.s
            }
            e.s = n < 0 ? -1 : 0,
            n > 0 ? e[i++] = n: n < -1 && (e[i++] = this.DV + n),
            e.t = i,
            e.clamp()
        }
        function xt(t) {
            var e = i();
            return this.addTo(t, e),
            e
        }
        function At(t) {
            var e = i();
            return this.subTo(t, e),
            e
        }
        function Bt(t) {
            var e = i();
            return this.multiplyTo(t, e),
            e
        }
        function Ot() {
            var t = i();
            return this.squareTo(t),
            t
        }
        function Ut(t) {
            var e = i();
            return this.divRemTo(t, e, null),
            e
        }
        function Kt(t) {
            var e = i();
            return this.divRemTo(t, null, e),
            e
        }
        function Nt(t) {
            var e = i(),
            n = i();
            return this.divRemTo(t, e, n),
            new Array(e, n)
        }
        function Mt(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        function Lt(t, e) {
            if (0 != t) {
                for (; this.t <= e;) this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV,
                ++e >= this.t && (this[this.t++] = 0),
                ++this[e]
            }
        }
        function Vt() {}
        function Ct(t) {
            return t
        }
        function It(t, e, i) {
            t.multiplyTo(e, i)
        }
        function Jt(t, e) {
            t.squareTo(e)
        }
        function Pt(t) {
            return this.exp(t, new Vt)
        }
        function _t(t, e, i) {
            var n = Math.min(this.t + t.t, e);
            for (i.s = 0, i.t = n; n > 0;) i[--n] = 0;
            var r;
            for (r = i.t - this.t; n < r; ++n) i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
            for (r = Math.min(t.t, e); n < r; ++n) this.am(0, t[n], i, n, 0, e - n);
            i.clamp()
        }
        function qt(t, e, i) {--e;
            var n = i.t = this.t + t.t - e;
            for (i.s = 0; --n >= 0;) i[n] = 0;
            for (n = Math.max(e - this.t, 0); n < t.t; ++n) i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
            i.clamp(),
            i.drShiftTo(1, i)
        }
        function Ht(t) {
            this.r2 = i(),
            this.q3 = i(),
            e.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t
        }
        function jt(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var e = i();
            return t.copyTo(e),
            this.reduce(e),
            e
        }
        function kt(t) {
            return t
        }
        function Ft(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
        }
        function zt(t, e) {
            t.squareTo(e),
            this.reduce(e)
        }
        function Gt(t, e, i) {
            t.multiplyTo(e, i),
            this.reduce(i)
        }
        function Zt(t, e) {
            var n, r, s = t.bitLength(),
            o = c(1);
            if (s <= 0) return o;
            n = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6,
            r = s < 8 ? new O(e) : e.isEven() ? new Ht(e) : new C(e);
            var a = new Array,
            h = 3,
            u = n - 1,
            l = (1 << n) - 1;
            if (a[1] = r.convert(this), n > 1) {
                var p = i();
                for (r.sqrTo(a[1], p); h <= l;) a[h] = i(),
                r.mulTo(p, a[h - 2], a[h]),
                h += 2
            }
            var f, d, g = t.t - 1,
            m = !0,
            v = i();
            for (s = y(t[g]) - 1; g >= 0;) {
                for (s >= u ? f = t[g] >> s - u & l: (f = (t[g] & (1 << s + 1) - 1) << u - s, g > 0 && (f |= t[g - 1] >> this.DB + s - u)), h = n; 0 == (1 & f);) f >>= 1,
                --h;
                if ((s -= h) < 0 && (s += this.DB, --g), m) a[f].copyTo(o),
                m = !1;
                else {
                    for (; h > 1;) r.sqrTo(o, v),
                    r.sqrTo(v, o),
                    h -= 2;
                    h > 0 ? r.sqrTo(o, v) : (d = o, o = v, v = d),
                    r.mulTo(v, a[f], o)
                }
                for (; g >= 0 && 0 == (t[g] & 1 << s);) r.sqrTo(o, v),
                d = o,
                o = v,
                v = d,
                --s < 0 && (s = this.DB - 1, --g)
            }
            return r.revert(o)
        }
        function $t(t) {
            var e = this.s < 0 ? this.negate() : this.clone(),
            i = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(i) < 0) {
                var n = e;
                e = i,
                i = n
            }
            var r = e.getLowestSetBit(),
            s = i.getLowestSetBit();
            if (s < 0) return e;
            for (r < s && (s = r), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i)); e.signum() > 0;)(r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
            (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
            e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
            return s > 0 && i.lShiftTo(s, i),
            i
        }
        function Wt(t) {
            if (t <= 0) return 0;
            var e = this.DV % t,
            i = this.s < 0 ? t - 1 : 0;
            if (this.t > 0) if (0 == e) i = this[0] % t;
            else for (var n = this.t - 1; n >= 0; --n) i = (e * i + this[n]) % t;
            return i
        }
        function Xt(t) {
            var i = t.isEven();
            if (this.isEven() && i || 0 == t.signum()) return e.ZERO;
            for (var n = t.clone(), r = this.clone(), s = c(1), o = c(0), a = c(0), h = c(1); 0 != n.signum();) {
                for (; n.isEven();) n.rShiftTo(1, n),
                i ? (s.isEven() && o.isEven() || (s.addTo(this, s), o.subTo(t, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(t, o),
                o.rShiftTo(1, o);
                for (; r.isEven();) r.rShiftTo(1, r),
                i ? (a.isEven() && h.isEven() || (a.addTo(this, a), h.subTo(t, h)), a.rShiftTo(1, a)) : h.isEven() || h.subTo(t, h),
                h.rShiftTo(1, h);
                n.compareTo(r) >= 0 ? (n.subTo(r, n), i && s.subTo(a, s), o.subTo(h, o)) : (r.subTo(n, r), i && a.subTo(s, a), h.subTo(o, h))
            }
            return 0 != r.compareTo(e.ONE) ? e.ZERO: h.compareTo(t) >= 0 ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h), h.signum() < 0 ? h.add(t) : h) : h
        }
        function Yt(t) {
            var e, i = this.abs();
            if (1 == i.t && i[0] <= xe[xe.length - 1]) {
                for (e = 0; e < xe.length; ++e) if (i[0] == xe[e]) return ! 0;
                return ! 1
            }
            if (i.isEven()) return ! 1;
            for (e = 1; e < xe.length;) {
                for (var n = xe[e], r = e + 1; r < xe.length && n < Ae;) n *= xe[r++];
                for (n = i.modInt(n); e < r;) if (n % xe[e++] == 0) return ! 1
            }
            return i.millerRabin(t)
        }
        function Qt(t) {
            var n = this.subtract(e.ONE),
            r = n.getLowestSetBit();
            if (r <= 0) return ! 1;
            var s = n.shiftRight(r); (t = t + 1 >> 1) > xe.length && (t = xe.length);
            for (var o = i(), a = 0; a < t; ++a) {
                o.fromInt(xe[Math.floor(Math.random() * xe.length)]);
                var h = o.modPow(s, this);
                if (0 != h.compareTo(e.ONE) && 0 != h.compareTo(n)) {
                    for (var u = 1; u++<r && 0 != h.compareTo(n);) if (h = h.modPowInt(2, this), 0 == h.compareTo(e.ONE)) return ! 1;
                    if (0 != h.compareTo(n)) return ! 1
                }
            }
            return ! 0
        }
        function te() {
            this.i = 0,
            this.j = 0,
            this.S = new Array
        }
        function ee(t) {
            var e, i, n;
            for (e = 0; e < 256; ++e) this.S[e] = e;
            for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255,
            n = this.S[e],
            this.S[e] = this.S[i],
            this.S[i] = n;
            this.i = 0,
            this.j = 0
        }
        function ie() {
            var t;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            t = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = t,
            this.S[t + this.S[this.i] & 255]
        }
        function ne() {
            return new te
        }
        function re() {
            if (null == Be) {
                for (Be = ne(); Ue < Ke;) {
                    var t = Math.floor(65536 * Math.random());
                    Oe[Ue++] = 255 & t
                }
                for (Be.init(Oe), Ue = 0; Ue < Oe.length; ++Ue) Oe[Ue] = 0;
                Ue = 0
            }
            return Be.next()
        }
        function se(t) {
            var e;
            for (e = 0; e < t.length; ++e) t[e] = re()
        }
        function oe() {}
        function ae(t, i) {
            return new e(t, i)
        }
        function he(t, i) {
            if (i < t.length + 11) return console.error("Message too long for RSA"),
            null;
            for (var n = new Array,
            r = t.length - 1; r >= 0 && i > 0;) {
                var s = t.charCodeAt(r--);
                s < 128 ? n[--i] = s: s > 127 && s < 2048 ? (n[--i] = 63 & s | 128, n[--i] = s >> 6 | 192) : (n[--i] = 63 & s | 128, n[--i] = s >> 6 & 63 | 128, n[--i] = s >> 12 | 224)
            }
            n[--i] = 0;
            for (var o = new oe,
            a = new Array; i > 2;) {
                for (a[0] = 0; 0 == a[0];) o.nextBytes(a);
                n[--i] = a[0]
            }
            return n[--i] = 2,
            n[--i] = 0,
            new e(n)
        }
        function ue() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
        function ce(t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
        }
        function le(t) {
            return t.modPowInt(this.e, this.n)
        }
        function pe(t) {
            var e = he(t, this.n.bitLength() + 7 >> 3);
            if (null == e) return null;
            var i = this.doPublic(e);
            if (null == i) return null;
            var n = i.toString(16);
            return 0 == (1 & n.length) ? n: "0" + n
        }
        function fe(t, e) {
            for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n];)++n;
            if (i.length - n != e - 1 || 2 != i[n]) return null;
            for (++n; 0 != i[n];) if (++n >= i.length) return null;
            for (var r = ""; ++n < i.length;) {
                var s = 255 & i[n];
                s < 128 ? r += String.fromCharCode(s) : s > 191 && s < 224 ? (r += String.fromCharCode((31 & s) << 6 | 63 & i[n + 1]), ++n) : (r += String.fromCharCode((15 & s) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]), n += 2)
            }
            return r
        }
        function de(t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16), this.e = parseInt(e, 16), this.d = ae(i, 16)) : console.error("Invalid RSA private key")
        }
        function ge(t, e, i, n, r, s, o, a) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16), this.e = parseInt(e, 16), this.d = ae(i, 16), this.p = ae(n, 16), this.q = ae(r, 16), this.dmp1 = ae(s, 16), this.dmq1 = ae(o, 16), this.coeff = ae(a, 16)) : console.error("Invalid RSA private key")
        }
        function me(t, i) {
            var n = new oe,
            r = t >> 1;
            this.e = parseInt(i, 16);
            for (var s = new e(i, 16);;) {
                for (; this.p = new e(t - r, 1, n), 0 != this.p.subtract(e.ONE).gcd(s).compareTo(e.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new e(r, 1, n), 0 != this.q.subtract(e.ONE).gcd(s).compareTo(e.ONE) || !this.q.isProbablePrime(10););
                if (this.p.compareTo(this.q) <= 0) {
                    var o = this.p;
                    this.p = this.q,
                    this.q = o
                }
                var a = this.p.subtract(e.ONE),
                h = this.q.subtract(e.ONE),
                u = a.multiply(h);
                if (0 == u.gcd(s).compareTo(e.ONE)) {
                    this.n = this.p.multiply(this.q),
                    this.d = s.modInverse(u),
                    this.dmp1 = this.d.mod(a),
                    this.dmq1 = this.d.mod(h),
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        function ve(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;) e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
        }
        function ye(t) {
            var e = ae(t, 16),
            i = this.doPrivate(e);
            return null == i ? null: fe(i, this.n.bitLength() + 7 >> 3)
        }
        function be(t) {
            var e, i, n = "";
            for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16),
            n += Ve.charAt(i >> 6) + Ve.charAt(63 & i);
            for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), n += Ve.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), n += Ve.charAt(i >> 2) + Ve.charAt((3 & i) << 4)); (3 & n.length) > 0;) n += Ce;
            return n
        }
        function Te(t) {
            var e, i, n = "",
            r = 0;
            for (e = 0; e < t.length && t.charAt(e) != Ce; ++e) v = Ve.indexOf(t.charAt(e)),
            v < 0 || (0 == r ? (n += o(v >> 2), i = 3 & v, r = 1) : 1 == r ? (n += o(i << 2 | v >> 4), i = 15 & v, r = 2) : 2 == r ? (n += o(i), n += o(v >> 2), i = 3 & v, r = 3) : (n += o(i << 2 | v >> 4), n += o(15 & v), r = 0));
            return 1 == r && (n += o(i << 2)),
            n
        }
        var Ee;
        "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = r, Ee = 30) : "Netscape" != navigator.appName ? (e.prototype.am = n, Ee = 26) : (e.prototype.am = s, Ee = 28),
        e.prototype.DB = Ee,
        e.prototype.DM = (1 << Ee) - 1,
        e.prototype.DV = 1 << Ee;
        e.prototype.FV = Math.pow(2, 52),
        e.prototype.F1 = 52 - Ee,
        e.prototype.F2 = 2 * Ee - 52;
        var we, Se, Re = "0123456789abcdefghijklmnopqrstuvwxyz",
        De = new Array;
        for (we = "0".charCodeAt(0), Se = 0; Se <= 9; ++Se) De[we++] = Se;
        for (we = "a".charCodeAt(0), Se = 10; Se < 36; ++Se) De[we++] = Se;
        for (we = "A".charCodeAt(0), Se = 10; Se < 36; ++Se) De[we++] = Se;
        O.prototype.convert = U,
        O.prototype.revert = K,
        O.prototype.reduce = N,
        O.prototype.mulTo = M,
        O.prototype.sqrTo = L,
        C.prototype.convert = I,
        C.prototype.revert = J,
        C.prototype.reduce = P,
        C.prototype.mulTo = q,
        C.prototype.sqrTo = _,
        e.prototype.copyTo = h,
        e.prototype.fromInt = u,
        e.prototype.fromString = l,
        e.prototype.clamp = p,
        e.prototype.dlShiftTo = T,
        e.prototype.drShiftTo = E,
        e.prototype.lShiftTo = w,
        e.prototype.rShiftTo = S,
        e.prototype.subTo = R,
        e.prototype.multiplyTo = D,
        e.prototype.squareTo = x,
        e.prototype.divRemTo = A,
        e.prototype.invDigit = V,
        e.prototype.isEven = H,
        e.prototype.exp = j,
        e.prototype.toString = f,
        e.prototype.negate = d,
        e.prototype.abs = g,
        e.prototype.compareTo = m,
        e.prototype.bitLength = b,
        e.prototype.mod = B,
        e.prototype.modPowInt = k,
        e.ZERO = c(0),
        e.ONE = c(1),
        Vt.prototype.convert = Ct,
        Vt.prototype.revert = Ct,
        Vt.prototype.mulTo = It,
        Vt.prototype.sqrTo = Jt,
        Ht.prototype.convert = jt,
        Ht.prototype.revert = kt,
        Ht.prototype.reduce = Ft,
        Ht.prototype.mulTo = Gt,
        Ht.prototype.sqrTo = zt;
        var xe = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        Ae = (1 << 26) / xe[xe.length - 1];
        e.prototype.chunkSize = $,
        e.prototype.toRadix = X,
        e.prototype.fromRadix = Y,
        e.prototype.fromNumber = Q,
        e.prototype.bitwiseTo = rt,
        e.prototype.changeBit = Et,
        e.prototype.addTo = Dt,
        e.prototype.dMultiply = Mt,
        e.prototype.dAddOffset = Lt,
        e.prototype.multiplyLowerTo = _t,
        e.prototype.multiplyUpperTo = qt,
        e.prototype.modInt = Wt,
        e.prototype.millerRabin = Qt,
        e.prototype.clone = F,
        e.prototype.intValue = z,
        e.prototype.byteValue = G,
        e.prototype.shortValue = Z,
        e.prototype.signum = W,
        e.prototype.toByteArray = tt,
        e.prototype.equals = et,
        e.prototype.min = it,
        e.prototype.max = nt,
        e.prototype.and = ot,
        e.prototype.or = ht,
        e.prototype.xor = ct,
        e.prototype.andNot = pt,
        e.prototype.not = ft,
        e.prototype.shiftLeft = dt,
        e.prototype.shiftRight = gt,
        e.prototype.getLowestSetBit = vt,
        e.prototype.bitCount = bt,
        e.prototype.testBit = Tt,
        e.prototype.setBit = wt,
        e.prototype.clearBit = St,
        e.prototype.flipBit = Rt,
        e.prototype.add = xt,
        e.prototype.subtract = At,
        e.prototype.multiply = Bt,
        e.prototype.divide = Ut,
        e.prototype.remainder = Kt,
        e.prototype.divideAndRemainder = Nt,
        e.prototype.modPow = Zt,
        e.prototype.modInverse = Xt,
        e.prototype.pow = Pt,
        e.prototype.gcd = $t,
        e.prototype.isProbablePrime = Yt,
        e.prototype.square = Ot,
        te.prototype.init = ee,
        te.prototype.next = ie;
        var Be, Oe, Ue, Ke = 256;
        if (null == Oe) {
            Oe = new Array,
            Ue = 0;
            var Ne;
            if (window.crypto && window.crypto.getRandomValues) {
                var Me = new Uint32Array(256);
                for (window.crypto.getRandomValues(Me), Ne = 0; Ne < Me.length; ++Ne) Oe[Ue++] = 255 & Me[Ne]
            }
            var Le = function(t) {
                if (this.count = this.count || 0, this.count >= 256 || Ue >= Ke) return void(window.removeEventListener ? window.removeEventListener("mousemove", Le, !1) : window.detachEvent && window.detachEvent("onmousemove", Le));
                try {
                    var e = t.x + t.y;
                    Oe[Ue++] = 255 & e,
                    this.count += 1
                } catch(t) {}
            };
            window.addEventListener ? window.addEventListener("mousemove", Le, !1) : window.attachEvent && window.attachEvent("onmousemove", Le)
        }
        oe.prototype.nextBytes = se,
        ue.prototype.doPublic = le,
        ue.prototype.setPublic = ce,
        ue.prototype.encrypt = pe,
        ue.prototype.doPrivate = ve,
        ue.prototype.setPrivate = de,
        ue.prototype.setPrivateEx = ge,
        ue.prototype.generate = me,
        ue.prototype.decrypt = ye,
        function() {
            var t = function(t, n, r) {
                var s = new oe,
                o = t >> 1;
                this.e = parseInt(n, 16);
                var a = new e(n, 16),
                h = this,
                u = function() {
                    var n = function() {
                        if (h.p.compareTo(h.q) <= 0) {
                            var t = h.p;
                            h.p = h.q,
                            h.q = t
                        }
                        var i = h.p.subtract(e.ONE),
                        n = h.q.subtract(e.ONE),
                        s = i.multiply(n);
                        0 == s.gcd(a).compareTo(e.ONE) ? (h.n = h.p.multiply(h.q), h.d = a.modInverse(s), h.dmp1 = h.d.mod(i), h.dmq1 = h.d.mod(n), h.coeff = h.q.modInverse(h.p), setTimeout(function() {
                            r()
                        },
                        0)) : setTimeout(u, 0)
                    },
                    c = function() {
                        h.q = i(),
                        h.q.fromNumberAsync(o, 1, s,
                        function() {
                            h.q.subtract(e.ONE).gcda(a,
                            function(t) {
                                0 == t.compareTo(e.ONE) && h.q.isProbablePrime(10) ? setTimeout(n, 0) : setTimeout(c, 0)
                            })
                        })
                    },
                    l = function() {
                        h.p = i(),
                        h.p.fromNumberAsync(t - o, 1, s,
                        function() {
                            h.p.subtract(e.ONE).gcda(a,
                            function(t) {
                                0 == t.compareTo(e.ONE) && h.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(l, 0)
                            })
                        })
                    };
                    setTimeout(l, 0)
                };
                setTimeout(u, 0)
            };
            ue.prototype.generateAsync = t;
            var n = function(t, e) {
                var i = this.s < 0 ? this.negate() : this.clone(),
                n = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(n) < 0) {
                    var r = i;
                    i = n,
                    n = r
                }
                var s = i.getLowestSetBit(),
                o = n.getLowestSetBit();
                if (o < 0) return void e(i);
                s < o && (o = s),
                o > 0 && (i.rShiftTo(o, i), n.rShiftTo(o, n));
                var a = function() { (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i),
                    (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n),
                    i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)),
                    i.signum() > 0 ? setTimeout(a, 0) : (o > 0 && n.lShiftTo(o, n), setTimeout(function() {
                        e(n)
                    },
                    0))
                };
                setTimeout(a, 10)
            };
            e.prototype.gcda = n;
            var r = function(t, i, n, r) {
                if ("number" == typeof i) if (t < 2) this.fromInt(1);
                else {
                    this.fromNumber(t, n),
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this),
                    this.isEven() && this.dAddOffset(1, 0);
                    var s = this,
                    o = function() {
                        s.dAddOffset(2, 0),
                        s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s),
                        s.isProbablePrime(i) ? setTimeout(function() {
                            r()
                        },
                        0) : setTimeout(o, 0)
                    };
                    setTimeout(o, 0)
                } else {
                    var a = new Array,
                    h = 7 & t;
                    a.length = 1 + (t >> 3),
                    i.nextBytes(a),
                    h > 0 ? a[0] &= (1 << h) - 1 : a[0] = 0,
                    this.fromString(a, 256)
                }
            };
            e.prototype.fromNumberAsync = r
        } ();
        var Ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Ce = "=",
        Ie = Ie || {};
        Ie.env = Ie.env || {};
        var Je = Ie,
        Pe = Object.prototype,
        _e = ["toString", "valueOf"];
        Ie.env.parseUA = function(t) {
            var e, i = function(t) {
                var e = 0;
                return parseFloat(t.replace(/\./g,
                function() {
                    return 1 == e++?"": "."
                }))
            },
            n = navigator,
            r = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: n && n.cajaVersion,
                secure: !1,
                os: null
            },
            s = t || navigator && navigator.userAgent,
            o = window && window.location,
            a = o && o.href;
            return r.secure = a && 0 === a.toLowerCase().indexOf("https"),
            s && (/windows|win32/i.test(s) ? r.os = "windows": /macintosh/i.test(s) ? r.os = "macintosh": /rhino/i.test(s) && (r.os = "rhino"), /KHTML/.test(s) && (r.webkit = 1), e = s.match(/AppleWebKit\/([^\s]*)/), e && e[1] && (r.webkit = i(e[1]), / Mobile\//.test(s) ? (r.mobile = "Apple", e = s.match(/OS ([^\s]*)/), e && e[1] && (e = i(e[1].replace("_", "."))), r.ios = e, r.ipad = r.ipod = r.iphone = 0, (e = s.match(/iPad|iPod|iPhone/)) && e[0] && (r[e[0].toLowerCase()] = r.ios)) : (e = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), e && (r.mobile = e[0]), /webOS/.test(s) && (r.mobile = "WebOS", (e = s.match(/webOS\/([^\s]*);/)) && e[1] && (r.webos = i(e[1]))), / Android/.test(s) && (r.mobile = "Android", (e = s.match(/Android ([^\s]*);/)) && e[1] && (r.android = i(e[1])))), e = s.match(/Chrome\/([^\s]*)/), e && e[1] ? r.chrome = i(e[1]) : (e = s.match(/AdobeAIR\/([^\s]*)/)) && (r.air = e[0])), r.webkit || (e = s.match(/Opera[\s\/]([^\s]*)/), e && e[1] ? (r.opera = i(e[1]), e = s.match(/Version\/([^\s]*)/), e && e[1] && (r.opera = i(e[1])), (e = s.match(/Opera Mini[^;]*/)) && (r.mobile = e[0])) : (e = s.match(/MSIE\s([^;]*)/), e && e[1] ? r.ie = i(e[1]) : (e = s.match(/Gecko\/([^\s]*)/)) && (r.gecko = 1, (e = s.match(/rv:([^\s\)]*)/)) && e[1] && (r.gecko = i(e[1])))))),
            r
        },
        Ie.env.ua = Ie.env.parseUA(),
        Ie.isFunction = function(t) {
            return "function" == typeof t || "[object Function]" === Pe.toString.apply(t)
        },
        Ie._IEEnumFix = Ie.env.ua.ie ?
        function(t, e) {
            var i, n, r;
            for (i = 0; i < _e.length; i += 1) n = _e[i],
            r = e[n],
            Je.isFunction(r) && r != Pe[n] && (t[n] = r)
        }: function() {},
        Ie.extend = function(t, e, i) {
            if (!e || !t) throw new Error("extend failed, please check that all dependencies are included.");
            var n, r = function() {};
            if (r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Pe.constructor && (e.prototype.constructor = e), i) {
                for (n in i) Je.hasOwnProperty(i, n) && (t.prototype[n] = i[n]);
                Je._IEEnumFix(t.prototype, i)
            }
        },
        "undefined" != typeof KJUR && KJUR || (KJUR = {}),
        void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
        KJUR.asn1.ASN1Util = new
        function() {
            this.integerToByteHex = function(t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                e
            },
            this.bigIntToMinTwosComplementsHex = function(t) {
                var i = t.toString(16);
                if ("-" != i.substr(0, 1)) i.length % 2 == 1 ? i = "0" + i: i.match(/^[0-7]/) || (i = "00" + i);
                else {
                    var n = i.substr(1),
                    r = n.length;
                    r % 2 == 1 ? r += 1 : i.match(/^[0-7]/) || (r += 2);
                    for (var s = "",
                    o = 0; o < r; o++) s += "f";
                    i = new e(s, 16).xor(t).add(e.ONE).toString(16).replace(/^-/, "")
                }
                return i
            },
            this.getPEMStringFromHex = function(t, e) {
                var i = CryptoJS.enc.Hex.parse(t),
                n = CryptoJS.enc.Base64.stringify(i),
                r = n.replace(/(.{64})/g, "$1\r\n");
                return r = r.replace(/\r\n$/, ""),
                "-----BEGIN " + e + "-----\r\n" + r + "\r\n-----END " + e + "-----\r\n"
            }
        },
        KJUR.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
                if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var t = this.hV.length / 2,
                e = t.toString(16);
                if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                var i = e.length / 2;
                if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                return (128 + i).toString(16) + e
            },
            this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
                this.hTLV
            },
            this.getValueHex = function() {
                return this.getEncodedHex(),
                this.hV
            },
            this.getFreshValueHex = function() {
                return ""
            }
        },
        KJUR.asn1.DERAbstractString = function(t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
            this.getString = function() {
                return this.s
            },
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            },
            this.setStringHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
        },
        Ie.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractTime = function(t) {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this),
            this.localDateToUTC = function(t) {
                return utc = t.getTime() + 6e4 * t.getTimezoneOffset(),
                new Date(utc)
            },
            this.formatDate = function(t, e) {
                var i = this.zeroPadding,
                n = this.localDateToUTC(t),
                r = String(n.getFullYear());
                return "utc" == e && (r = r.substr(2, 2)),
                r + i(String(n.getMonth() + 1), 2) + i(String(n.getDate()), 2) + i(String(n.getHours()), 2) + i(String(n.getMinutes()), 2) + i(String(n.getSeconds()), 2) + "Z"
            },
            this.zeroPadding = function(t, e) {
                return t.length >= e ? t: new Array(e - t.length + 1).join("0") + t
            },
            this.getString = function() {
                return this.s
            },
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            },
            this.setByDateValue = function(t, e, i, n, r, s) {
                var o = new Date(Date.UTC(t, e - 1, i, n, r, s, 0));
                this.setByDate(o)
            },
            this.getFreshValueHex = function() {
                return this.hV
            }
        },
        Ie.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractStructured = function(t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
            this.setByASN1ObjectArray = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = t
            },
            this.appendASN1Object = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array.push(t)
            },
            this.asn1Array = new Array,
            void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
        },
        Ie.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBoolean = function() {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
        },
        Ie.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERInteger = function(t) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            },
            this.setByInteger = function(t) {
                var i = new e(String(t), 10);
                this.setByBigInteger(i)
            },
            this.setValueHex = function(t) {
                this.hV = t
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : void 0 !== t.hex && this.setValueHex(t.hex))
        },
        Ie.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBitString = function(t) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = t
            },
            this.setUnusedBitsAndHexValue = function(t, e) {
                if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                var i = "0" + t;
                this.hTLV = null,
                this.isModified = !0,
                this.hV = i + e
            },
            this.setByBinaryString = function(t) {
                t = t.replace(/0+$/, "");
                var e = 8 - t.length % 8;
                8 == e && (e = 0);
                for (var i = 0; i <= e; i++) t += "0";
                for (var n = "",
                i = 0; i < t.length - 1; i += 8) {
                    var r = t.substr(i, 8),
                    s = parseInt(r, 2).toString(16);
                    1 == s.length && (s = "0" + s),
                    n += s
                }
                this.hTLV = null,
                this.isModified = !0,
                this.hV = "0" + e + n
            },
            this.setByBooleanArray = function(t) {
                for (var e = "",
                i = 0; i < t.length; i++) e += 1 == t[i] ? "1": "0";
                this.setByBinaryString(e)
            },
            this.newFalseArray = function(t) {
                for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
                return e
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            void 0 !== t && (void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
        },
        Ie.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DEROctetString = function(t) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
            this.hT = "04"
        },
        Ie.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNull = function() {
            KJUR.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
        },
        Ie.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERObjectIdentifier = function(t) {
            var i = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            },
            n = function(t) {
                var n = "",
                r = new e(t, 10),
                s = r.toString(2),
                o = 7 - s.length % 7;
                7 == o && (o = 0);
                for (var a = "",
                h = 0; h < o; h++) a += "0";
                s = a + s;
                for (var h = 0; h < s.length - 1; h += 7) {
                    var u = s.substr(h, 7);
                    h != s.length - 7 && (u = "1" + u),
                    n += i(parseInt(u, 2))
                }
                return n
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            },
            this.setValueOidString = function(t) {
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var e = "",
                r = t.split("."),
                s = 40 * parseInt(r[0]) + parseInt(r[1]);
                e += i(s),
                r.splice(0, 2);
                for (var o = 0; o < r.length; o++) e += n(r[o]);
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = e
            },
            this.setValueName = function(t) {
                if (void 0 === KJUR.asn1.x509.OID.name2oidList[t]) throw "DERObjectIdentifier oidName undefined: " + t;
                var e = KJUR.asn1.x509.OID.name2oidList[t];
                this.setValueOidString(e)
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            void 0 !== t && (void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
        },
        Ie.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERUTF8String = function(t) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
            this.hT = "0c"
        },
        Ie.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNumericString = function(t) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
            this.hT = "12"
        },
        Ie.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERPrintableString = function(t) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
            this.hT = "13"
        },
        Ie.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERTeletexString = function(t) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
            this.hT = "14"
        },
        Ie.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERIA5String = function(t) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
            this.hT = "16"
        },
        Ie.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERUTCTime = function(t) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
            this.hT = "17",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)
            },
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        },
        Ie.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERGeneralizedTime = function(t) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            this.hT = "18",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "gen"),
                this.hV = stohex(this.s)
            },
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        },
        Ie.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERSequence = function(t) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
            this.hT = "30",
            this.getFreshValueHex = function() {
                for (var t = "",
                e = 0; e < this.asn1Array.length; e++) {
                    t += this.asn1Array[e].getEncodedHex()
                }
                return this.hV = t,
                this.hV
            }
        },
        Ie.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERSet = function(t) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, t),
            this.hT = "31",
            this.getFreshValueHex = function() {
                for (var t = new Array,
                e = 0; e < this.asn1Array.length; e++) {
                    var i = this.asn1Array[e];
                    t.push(i.getEncodedHex())
                }
                return t.sort(),
                this.hV = t.join(""),
                this.hV
            }
        },
        Ie.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERTaggedObject = function(t) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function(t, e, i) {
                this.hT = e,
                this.isExplicit = t,
                this.asn1Object = i,
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
            },
            this.getFreshValueHex = function() {
                return this.hV
            },
            void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        },
        Ie.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
        function(t) {
            "use strict";
            var e, i = {};
            i.decode = function(i) {
                var n;
                if (e === t) {
                    var r = "0123456789ABCDEF",
                    s = " \f\n\r\t \u2028\u2029";
                    for (e = [], n = 0; n < 16; ++n) e[r.charAt(n)] = n;
                    for (r = r.toLowerCase(), n = 10; n < 16; ++n) e[r.charAt(n)] = n;
                    for (n = 0; n < s.length; ++n) e[s.charAt(n)] = -1
                }
                var o = [],
                a = 0,
                h = 0;
                for (n = 0; n < i.length; ++n) {
                    var u = i.charAt(n);
                    if ("=" == u) break;
                    if ( - 1 != (u = e[u])) {
                        if (u === t) throw "Illegal character at offset " + n;
                        a |= u,
                        ++h >= 2 ? (o[o.length] = a, a = 0, h = 0) : a <<= 4
                    }
                }
                if (h) throw "Hex encoding incomplete: 4 bits missing";
                return o
            },
            window.Hex = i
        } (),
        function(t) {
            "use strict";
            var e, i = {};
            i.decode = function(i) {
                var n;
                if (e === t) {
                    var r = "= \f\n\r\t \u2028\u2029";
                    for (e = [], n = 0; n < 64; ++n) e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n)] = n;
                    for (n = 0; n < r.length; ++n) e[r.charAt(n)] = -1
                }
                var s = [],
                o = 0,
                a = 0;
                for (n = 0; n < i.length; ++n) {
                    var h = i.charAt(n);
                    if ("=" == h) break;
                    if ( - 1 != (h = e[h])) {
                        if (h === t) throw "Illegal character at offset " + n;
                        o |= h,
                        ++a >= 4 ? (s[s.length] = o >> 16, s[s.length] = o >> 8 & 255, s[s.length] = 255 & o, o = 0, a = 0) : o <<= 6
                    }
                }
                switch (a) {
                case 1:
                    throw "Base64 encoding incomplete: at least 2 bits missing";
                case 2:
                    s[s.length] = o >> 10;
                    break;
                case 3:
                    s[s.length] = o >> 16,
                    s[s.length] = o >> 8 & 255
                }
                return s
            },
            i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            i.unarmor = function(t) {
                var e = i.re.exec(t);
                if (e) if (e[1]) t = e[1];
                else {
                    if (!e[2]) throw "RegExp out of sync";
                    t = e[2]
                }
                return i.decode(t)
            },
            window.Base64 = i
        } (),
        function(t) {
            "use strict";
            function e(t, i) {
                t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = i)
            }
            function i(t, e, i, n, r) {
                this.stream = t,
                this.header = e,
                this.length = i,
                this.tag = n,
                this.sub = r
            }
            var n = 100,
            r = {
                tag: function(t, e) {
                    var i = document.createElement(t);
                    return i.className = e,
                    i
                },
                text: function(t) {
                    return document.createTextNode(t)
                }
            };
            e.prototype.get = function(e) {
                if (e === t && (e = this.pos++), e >= this.enc.length) throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
                return this.enc[e]
            },
            e.prototype.hexDigits = "0123456789ABCDEF",
            e.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            },
            e.prototype.hexDump = function(t, e, i) {
                for (var n = "",
                r = t; r < e; ++r) if (n += this.hexByte(this.get(r)), !0 !== i) switch (15 & r) {
                case 7:
                    n += "  ";
                    break;
                case 15:
                    n += "\n";
                    break;
                default:
                    n += " "
                }
                return n
            },
            e.prototype.parseStringISO = function(t, e) {
                for (var i = "",
                n = t; n < e; ++n) i += String.fromCharCode(this.get(n));
                return i
            },
            e.prototype.parseStringUTF = function(t, e) {
                for (var i = "",
                n = t; n < e;) {
                    var r = this.get(n++);
                    i += r < 128 ? String.fromCharCode(r) : r > 191 && r < 224 ? String.fromCharCode((31 & r) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & r) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                }
                return i
            },
            e.prototype.parseStringBMP = function(t, e) {
                for (var i = "",
                n = t; n < e; n += 2) {
                    var r = this.get(n),
                    s = this.get(n + 1);
                    i += String.fromCharCode((r << 8) + s)
                }
                return i
            },
            e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
            e.prototype.parseTime = function(t, e) {
                var i = this.parseStringISO(t, e),
                n = this.reTime.exec(i);
                return n ? (i = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], n[5] && (i += ":" + n[5], n[6] && (i += ":" + n[6], n[7] && (i += "." + n[7]))), n[8] && (i += " UTC", "Z" != n[8] && (i += n[8], n[9] && (i += ":" + n[9]))), i) : "Unrecognized time: " + i
            },
            e.prototype.parseInteger = function(t, e) {
                var i = e - t;
                if (i > 4) {
                    i <<= 3;
                    var n = this.get(t);
                    if (0 === n) i -= 8;
                    else for (; n < 128;) n <<= 1,
                    --i;
                    return "(" + i + " bit)"
                }
                for (var r = 0,
                s = t; s < e; ++s) r = r << 8 | this.get(s);
                return r
            },
            e.prototype.parseBitString = function(t, e) {
                var i = this.get(t),
                n = (e - t - 1 << 3) - i,
                r = "(" + n + " bit)";
                if (n <= 20) {
                    var s = i;
                    r += " ";
                    for (var o = e - 1; o > t; --o) {
                        for (var a = this.get(o), h = s; h < 8; ++h) r += a >> h & 1 ? "1": "0";
                        s = 0
                    }
                }
                return r
            },
            e.prototype.parseOctetString = function(t, e) {
                var i = e - t,
                r = "(" + i + " byte) ";
                i > n && (e = t + n);
                for (var s = t; s < e; ++s) r += this.hexByte(this.get(s));
                return i > n && (r += "…"),
                r
            },
            e.prototype.parseOID = function(t, e) {
                for (var i = "",
                n = 0,
                r = 0,
                s = t; s < e; ++s) {
                    var o = this.get(s);
                    if (n = n << 7 | 127 & o, r += 7, !(128 & o)) {
                        if ("" === i) {
                            var a = n < 80 ? n < 40 ? 0 : 1 : 2;
                            i = a + "." + (n - 40 * a)
                        } else i += "." + (r >= 31 ? "bigint": n);
                        n = r = 0
                    }
                }
                return i
            },
            i.prototype.typeName = function() {
                if (this.tag === t) return "unknown";
                var e = this.tag >> 6,
                i = (this.tag, 31 & this.tag);
                switch (e) {
                case 0:
                    switch (i) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString";
                    default:
                        return "Universal_" + i.toString(16)
                    }
                case 1:
                    return "Application_" + i.toString(16);
                case 2:
                    return "[" + i + "]";
                case 3:
                    return "Private_" + i.toString(16)
                }
            },
            i.prototype.reSeemsASCII = /^[ -~]+$/,
            i.prototype.content = function() {
                if (this.tag === t) return null;
                var e = this.tag >> 6,
                i = 31 & this.tag,
                r = this.posContent(),
                s = Math.abs(this.length);
                if (0 !== e) {
                    if (null !== this.sub) return "(" + this.sub.length + " elem)";
                    var o = this.stream.parseStringISO(r, r + Math.min(s, n));
                    return this.reSeemsASCII.test(o) ? o.substring(0, 200) + (o.length > 200 ? "…": "") : this.stream.parseOctetString(r, r + s)
                }
                switch (i) {
                case 1:
                    return 0 === this.stream.get(r) ? "false": "true";
                case 2:
                    return this.stream.parseInteger(r, r + s);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseBitString(r, r + s);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseOctetString(r, r + s);
                case 6:
                    return this.stream.parseOID(r, r + s);
                case 16:
                case 17:
                    return "(" + this.sub.length + " elem)";
                case 12:
                    return this.stream.parseStringUTF(r, r + s);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(r, r + s);
                case 30:
                    return this.stream.parseStringBMP(r, r + s);
                case 23:
                case 24:
                    return this.stream.parseTime(r, r + s)
                }
                return null
            },
            i.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null": this.sub.length) + "]"
            },
            i.prototype.print = function(e) {
                if (e === t && (e = ""), document.writeln(e + this), null !== this.sub) {
                    e += "  ";
                    for (var i = 0,
                    n = this.sub.length; i < n; ++i) this.sub[i].print(e)
                }
            },
            i.prototype.toPrettyString = function(e) {
                e === t && (e = "");
                var i = e + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (i += "+"), i += this.length, 32 & this.tag ? i += " (constructed)": 3 != this.tag && 4 != this.tag || null === this.sub || (i += " (encapsulates)"), i += "\n", null !== this.sub) {
                    e += "  ";
                    for (var n = 0,
                    r = this.sub.length; n < r; ++n) i += this.sub[n].toPrettyString(e)
                }
                return i
            },
            i.prototype.toDOM = function() {
                var t = r.tag("div", "node");
                t.asn1 = this;
                var e = r.tag("div", "head"),
                i = this.typeName().replace(/_/g, " ");
                e.innerHTML = i;
                var n = this.content();
                if (null !== n) {
                    n = String(n).replace(/</g, "&lt;");
                    var s = r.tag("span", "preview");
                    s.appendChild(r.text(n)),
                    e.appendChild(s)
                }
                t.appendChild(e),
                this.node = t,
                this.head = e;
                var o = r.tag("div", "value");
                if (i = "Offset: " + this.stream.pos + "<br/>", i += "Length: " + this.header + "+", i += this.length >= 0 ? this.length: -this.length + " (undefined)", 32 & this.tag ? i += "<br/>(constructed)": 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"), null !== n && (i += "<br/>Value:<br/><b>" + n + "</b>", "object" == typeof oids && 6 == this.tag)) {
                    var a = oids[n];
                    a && (a.d && (i += "<br/>" + a.d), a.c && (i += "<br/>" + a.c), a.w && (i += "<br/>(warning!)"))
                }
                o.innerHTML = i,
                t.appendChild(o);
                var h = r.tag("div", "sub");
                if (null !== this.sub) for (var u = 0,
                c = this.sub.length; u < c; ++u) h.appendChild(this.sub[u].toDOM());
                return t.appendChild(h),
                e.onclick = function() {
                    t.className = "node collapsed" == t.className ? "node": "node collapsed"
                },
                t
            },
            i.prototype.posStart = function() {
                return this.stream.pos
            },
            i.prototype.posContent = function() {
                return this.stream.pos + this.header
            },
            i.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            },
            i.prototype.fakeHover = function(t) {
                this.node.className += " hover",
                t && (this.head.className += " hover")
            },
            i.prototype.fakeOut = function(t) {
                var e = / ?hover/;
                this.node.className = this.node.className.replace(e, ""),
                t && (this.head.className = this.head.className.replace(e, ""))
            },
            i.prototype.toHexDOM_sub = function(t, e, i, n, s) {
                if (! (n >= s)) {
                    var o = r.tag("span", e);
                    o.appendChild(r.text(i.hexDump(n, s))),
                    t.appendChild(o)
                }
            },
            i.prototype.toHexDOM = function(e) {
                var i = r.tag("span", "hex");
                if (e === t && (e = i), this.head.hexNode = i, this.head.onmouseover = function() {
                    this.hexNode.className = "hexCurrent"
                },
                this.head.onmouseout = function() {
                    this.hexNode.className = "hex"
                },
                i.asn1 = this, i.onmouseover = function() {
                    var t = !e.selected;
                    t && (e.selected = this.asn1, this.className = "hexCurrent"),
                    this.asn1.fakeHover(t)
                },
                i.onmouseout = function() {
                    var t = e.selected == this.asn1;
                    this.asn1.fakeOut(t),
                    t && (e.selected = null, this.className = "hex")
                },
                this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(i, this.length >= 0 ? "dlen": "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) i.appendChild(r.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (this.sub.length > 0) {
                    var n = this.sub[0],
                    s = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), n.posStart());
                    for (var o = 0,
                    a = this.sub.length; o < a; ++o) i.appendChild(this.sub[o].toHexDOM(e));
                    this.toHexDOM_sub(i, "outro", this.stream, s.posEnd(), this.posEnd())
                }
                return i
            },
            i.prototype.toHexString = function(t) {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            },
            i.decodeLength = function(t) {
                var e = t.get(),
                i = 127 & e;
                if (i == e) return i;
                if (i > 3) throw "Length over 24 bits not supported at position " + (t.pos - 1);
                if (0 === i) return - 1;
                e = 0;
                for (var n = 0; n < i; ++n) e = e << 8 | t.get();
                return e
            },
            i.hasContent = function(t, n, r) {
                if (32 & t) return ! 0;
                if (t < 3 || t > 4) return ! 1;
                var s = new e(r);
                if (3 == t && s.get(), s.get() >> 6 & 1) return ! 1;
                try {
                    var o = i.decodeLength(s);
                    return s.pos - r.pos + o == n
                } catch(t) {
                    return ! 1
                }
            },
            i.decode = function(t) {
                t instanceof e || (t = new e(t, 0));
                var n = new e(t),
                r = t.get(),
                s = i.decodeLength(t),
                o = t.pos - n.pos,
                a = null;
                if (i.hasContent(r, s, t)) {
                    var h = t.pos;
                    if (3 == r && t.get(), a = [], s >= 0) {
                        for (var u = h + s; t.pos < u;) a[a.length] = i.decode(t);
                        if (t.pos != u) throw "Content size is not correct for container starting at offset " + h
                    } else try {
                        for (;;) {
                            var c = i.decode(t);
                            if (0 === c.tag) break;
                            a[a.length] = c
                        }
                        s = h - t.pos
                    } catch(t) {
                        throw "Exception while decoding undefined length content: " + t
                    }
                } else t.pos += s;
                return new i(n, o, s, r, a)
            },
            i.test = function() {
                for (var t = [{
                    value: [39],
                    expected: 39
                },
                {
                    value: [129, 201],
                    expected: 201
                },
                {
                    value: [131, 254, 220, 186],
                    expected: 16702650
                }], n = 0, r = t.length; n < r; ++n) {
                    var s = new e(t[n].value, 0),
                    o = i.decodeLength(s);
                    o != t[n].expected && document.write("In test[" + n + "] expected " + t[n].expected + " got " + o + "\n")
                }
            },
            window.ASN1 = i
        } (),
        ASN1.prototype.getHexStringValue = function() {
            var t = this.toHexString(),
            e = 2 * this.header,
            i = 2 * this.length;
            return t.substr(e, i)
        },
        ue.prototype.parseKey = function(t) {
            try {
                var e = 0,
                i = 0,
                n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
                r = n.test(t) ? Hex.decode(t) : Base64.unarmor(t),
                s = ASN1.decode(r);
                if (3 === s.sub.length && (s = s.sub[2].sub[0]), 9 === s.sub.length) {
                    e = s.sub[1].getHexStringValue(),
                    this.n = ae(e, 16),
                    i = s.sub[2].getHexStringValue(),
                    this.e = parseInt(i, 16);
                    var o = s.sub[3].getHexStringValue();
                    this.d = ae(o, 16);
                    var a = s.sub[4].getHexStringValue();
                    this.p = ae(a, 16);
                    var h = s.sub[5].getHexStringValue();
                    this.q = ae(h, 16);
                    var u = s.sub[6].getHexStringValue();
                    this.dmp1 = ae(u, 16);
                    var c = s.sub[7].getHexStringValue();
                    this.dmq1 = ae(c, 16);
                    var l = s.sub[8].getHexStringValue();
                    this.coeff = ae(l, 16)
                } else {
                    if (2 !== s.sub.length) return ! 1;
                    var p = s.sub[1],
                    f = p.sub[0];
                    e = f.sub[0].getHexStringValue(),
                    this.n = ae(e, 16),
                    i = f.sub[1].getHexStringValue(),
                    this.e = parseInt(i, 16)
                }
                return ! 0
            } catch(t) {
                return ! 1
            }
        },
        ue.prototype.getPrivateBaseKey = function() {
            var t = {
                array: [new KJUR.asn1.DERInteger({
                    int: 0
                }), new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    int: this.e
                }), new KJUR.asn1.DERInteger({
                    bigint: this.d
                }), new KJUR.asn1.DERInteger({
                    bigint: this.p
                }), new KJUR.asn1.DERInteger({
                    bigint: this.q
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })]
            };
            return new KJUR.asn1.DERSequence(t).getEncodedHex()
        },
        ue.prototype.getPrivateBaseKeyB64 = function() {
            return be(this.getPrivateBaseKey())
        },
        ue.prototype.getPublicBaseKey = function() {
            var t = {
                array: [new KJUR.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new KJUR.asn1.DERNull]
            },
            e = new KJUR.asn1.DERSequence(t);
            return t = {
                array: [new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    int: this.e
                })]
            },
            t = {
                hex: "00" + new KJUR.asn1.DERSequence(t).getEncodedHex()
            },
            t = {
                array: [e, new KJUR.asn1.DERBitString(t)]
            },
            new KJUR.asn1.DERSequence(t).getEncodedHex()
        },
        ue.prototype.getPublicBaseKeyB64 = function() {
            return be(this.getPublicBaseKey())
        },
        ue.prototype.wordwrap = function(t, e) {
            if (e = e || 64, !t) return t;
            var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(i, "g")).join("\n")
        },
        ue.prototype.getPrivateKey = function() {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
            t += "-----END RSA PRIVATE KEY-----"
        },
        ue.prototype.getPublicKey = function() {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
            t += "-----END PUBLIC KEY-----"
        },
        ue.prototype.hasPublicKeyProperty = function(t) {
            return t = t || {},
            t.hasOwnProperty("n") && t.hasOwnProperty("e")
        },
        ue.prototype.hasPrivateKeyProperty = function(t) {
            return t = t || {},
            t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
        },
        ue.prototype.parsePropertiesFrom = function(t) {
            this.n = t.n,
            this.e = t.e,
            t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
        };
        var qe = function(t) {
            ue.call(this),
            t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
        };
        qe.prototype = new ue,
        qe.prototype.constructor = qe;
        var He = function(t) {
            t = t || {},
            this.default_key_size = parseInt(t.default_key_size) || 1024,
            this.default_public_exponent = t.default_public_exponent || "010001",
            this.log = t.log || !1,
            this.key = null
        };
        He.prototype.setKey = function(t) {
            this.log && this.key && console.warn("A key was already set, overriding existing."),
            this.key = new qe(t)
        },
        He.prototype.setPrivateKey = function(t) {
            this.setKey(t)
        },
        He.prototype.setPublicKey = function(t) {
            this.setKey(t)
        },
        He.prototype.decrypt = function(t) {
            try {
                return this.getKey().decrypt(Te(t))
            } catch(t) {
                return ! 1
            }
        },
        He.prototype.encrypt = function(t) {
            try {
                return be(this.getKey().encrypt(t))
            } catch(t) {
                return ! 1
            }
        },
        He.prototype.getKey = function(t) {
            if (!this.key) {
                if (this.key = new qe, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        },
        He.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey()
        },
        He.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64()
        },
        He.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey()
        },
        He.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64()
        },
        He.version = "2.3.1",
        t.JSEncrypt = He
    })
},
function(t, e, i) {
    var n = i(8),
    r = 0,
    s = i(9);
    e.create = function(t, e, o, a) {
        function h() {
            if (window.postMessage) g.contentWindow.postMessage("closeEasyLoginCountryCode", g.src);
            else try {
                var t = g.contentWindow;
                t && t.closeEasyLoginCountryCode ? t.closeEasyLoginCountryCode() : console.log("不存在关闭国家code窗口")
            } catch(t) {
                console.log("登录跨域failure")
            }
        }
        function u(t, e, i, n) {
            n = n || !1,
            t.addEventListener ? t.addEventListener(e, i, n) : t.detachEvent(e, "on" + i, n)
        }
        function c(t, e, i, n) {
            n = n || !1,
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent(e, "on" + i, n)
        }
        var l = i(16)();
        l.login = function() {};
        var p = 540,
        f = 375;
        o.wide || (p = 290, f = 375);
        var d = "EasyLogin_frame_callback" + r++;
        try {
            document.domain = s.rootDomain(location.hostname)
        } catch(t) {}
        var g = document.createElement("iframe"),
        m = a ? n.frame.regUrl: n.frame.url;
        g.src = m + "?callback=" + d + "&wide=" + !!o.wide + "&protocol=" + location.protocol + "&redir=" + encodeURIComponent(o.redir || ""),
        g.width = p,
        g.height = f,
        g.frameBorder = "0",
        g.scrolling = "no",
        t.appendChild(g);
        var v = function(t) {
            window[d].apply(window, JSON.parse(t.data || {}))
        },
        y = function() {
            c(window, "message", v),
            u(window, "message", v),
            g.contentWindow.postMessage("easylogin", g.src)
        };
        window.postMessage && (c(g, "load", y, !1), u(g, "load", y, !1)),
        c(document.body, "click", h, !1),
        u(document.body, "click", h, !1);
        var b = {
            frameHeight: function(t) {
                g.height = t
            },
            login: function() {
                l.emit("login"),
                o.redir && (location.href = o.redir)
            }
        };
        return window[d] = function(t) {
            b[t] && b[t].apply(b, Array.prototype.slice.call(arguments, 1))
        },
        l
    }
},
function(t, e) {}]);
//# sourceMappingURL=login.min.js.235122a3d9dbdc4edf52cc4b0e2194c8.map
