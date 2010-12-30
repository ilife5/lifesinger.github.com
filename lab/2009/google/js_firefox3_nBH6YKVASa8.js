(function() {
    var f = navigator.userAgent.toLowerCase();
    google.isOpera = f.indexOf("opera") != -1;
    google.isIE = document.all && f.indexOf("msie") != -1 && !google.isOpera;
    google.isSafari = f.indexOf("safari") != -1;
    google.time = function() {
        return(new Date).getTime()
    };
    google.log = function(a, c) {
        (new Image).src = "/gen_204?atyp=i&ct=" + a + "&cad=" + c + "&zx=" + google.time()
    };
    google.xhr = function() {
        var a = null;
        if (window.XMLHttpRequest)try {
            a = new XMLHttpRequest
        } catch(c) {
        } else if (window.ActiveXObject)for (var d = 0,b; b = ["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP","Microsoft.XMLHTTP"][d++];)try {
            a = new ActiveXObject(b);
            break
        } catch(c) {
        }
        return a
    };
    function g(a, c, d) {
        var b = document.defaultView && document.defaultView.getComputedStyle(a, ""),e = b && b.getPropertyValue(c);
        return document.defaultView && b && typeof e == "string" && (d ? e : parseInt(e, 10))
    }

    google.getHeight = function(a) {
        return g(a, "height") || a.offsetHeight
    };
    google.getWidth = function(a) {
        return g(a, "width") || a.offsetWidth
    };
    google.getColor = function(a) {
        return a.currentStyle ? a.currentStyle.color : g(a, "color",
                1)
    };
    google.rhs = function() {
    };
    window.google.bind = function(a, c, d) {
        var b = "on" + c;
        if (a.addEventListener)a.addEventListener(c, d, false); else if (a.attachEvent)a.attachEvent(b, d); else {
            var e = a[b];
            a[b] = function() {
                var h = e.apply(this, arguments),i = d.apply(this, arguments);
                return h == undefined ? i : (i == undefined ? h : i && h)
            }
        }
    };
})();
(function() {
    window.google.stringify = function(a) {
        var c,d,j,b = "",f;
        switch (typeof a) {case "object":if (a)if (a instanceof Array || typeof a.join == "function" && typeof a.reverse == "function") {
            for (d = 0; d < a.length; ++d) {
                f = window.google.stringify(a[d]);
                if (b)b += ",";
                b += f
            }
            return"[" + b + "]"
        } else if (typeof a.toString != "undefined") {
            for (d in a) {
                f = a[d];
                if (typeof f != "undefined" && typeof f != "function") {
                    f = window.google.stringify(f);
                    if (b)b += ",";
                    b += window.google.stringify(d) + ":" + f
                }
            }
            return"{" + b + "}"
        }return"null";case "number":return isFinite(a) ?
                                           String(a) : "null";case "string":j = a.length;b = '"';for (d = 0; d < j; d += 1) {
            c = a.charAt(d);
            if (c >= " ") {
                if (c == "\\" || c == '"')b += "\\";
                b += c
            } else switch (c) {case "\n":b += "\\n";break;case "\r":b += "\\r";break;case "\t":b += "\\t";break;default:c = c.charCodeAt();b += "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16);break}
        }return b + '"';case "boolean":return String(a);default:return"null"}
    };
    google.History = {};
    var e = [],g = "#";
    google.History.client = function(a) {
        e.push(a);
        return e.length - 1
    };
    var h,i;

    function k() {
        var a = h.value;
        i = !(!a) ? eval("(" + a + ")") : {}
    }

    google.History.save = function(a, c) {
        if (h) {
            k();
            if (!i[g])i[g] = {};
            i[g][a] = c;
            h.value = google.stringify(i)
        }
    };
    function l() {
        i = null;
        h = document.getElementById("hcache");
        h && window.setTimeout(function() {
            k();
            for (var a = 0; a < e.length; ++a)if (i && i[g] && i[g][a])e[a].call(null, i[g][a])
        }, 0)
    }

    l();
    google.rein.push(function() {
        g = google.pageState;
        l()
    });
})();
(function() {
    var a,b;
    google.rhs = function() {
        if (!google.drhs)if (document.getElementById("mbEnd") && (a || b)) {
            var c = google.getHeight(document.getElementById("rhsline")),d = a ? google.getHeight(a) : 0;
            if (b)d += google.getHeight(b) + 18;
            document.getElementById("rhspad").style.height = d > c ? Math.min(9999, d - c) + "px" : (google.isIE ? "" : 0)
        }
    };
    function e(c) {
        if (!c) {
            a = document.getElementById("tads");
            b = document.getElementById("3po");
            google.rhs()
        }
    }

    e(1);
    google.bind(window, "resize", google.rhs);
    google.rein.push(e);
})();
(function() {
    var e = false,g = null,i = true,aa = e,k,l,m,n = "",o = g,r = g,s = g,t = -1,u,v,w,x,y,z,A,B,C,D = 0,E = 0,ba = e,F = g,G = 0;
    var ca;
    var I;
    var N,da;

    function ha(a) {
        var b = a[2].match(/\D+$/);
        return b ? b[0] : g
    }

    var O;

    function ja() {
        ka();
        P();
        y.value = z.value = B.value = "";
        window.clearTimeout(o);
        n = C = "";
        o = r = s = g;
        t = -1;
        O = D = E = G = 0;
        I = 0;
        ca = "";
    }

    function la(a, b, c, d, j) {
        u = a;
        v = b;
        l = m = k = v.value;
        if (!b.init) {
            da = document.getElementsByTagName("body")[0];
            google.bind(u, "submit", ma);
            v.setAttribute("autocomplete", "off");
            google.bind(v, "blur", P);
            v.onkeypress = Q;
            google.bind(v, "keyup", R);
            y = S("aq", "f");
            z = S("oq", l);
            B = S("aqi", "");
            w = document.createElement("table");
            w.cellSpacing = w.cellPadding = "0";
            x = w.style;
            w.className = "gac_m";
            u.appendChild(w);
            b.init = i
        }
        P();
        T();
        if (!aa) {
            na();
            aa = i
        }
        O = 0;
        var f = "&client=hp";
        if (d &&
            d != "") {
            O = 1;
            f = "&client=serp"
        } else if (c == "i") {
            O = 2;
            f = "&client=img"
        }
        var q = ["?hl=",google.kHL,f,(c ? "&ds=" + c : ""),(d ? "&pq=" + encodeURIComponent(d) : ""),(j ? "&tok=" + encodeURIComponent(j) : "")].join("");
        C = "/complete/search" + q;
        ca = "/complete/deleteitems" + q;
        I = oa(v);
        google.bind(window, "pageshow", function(h) {
            if (h.persisted) {
                y.value = "f";
                z.value = v.value
            }
        });
        U();
        (new Image).src = "http://clients1.google.com/generate_204";
    }

    function na() {
        var a = document.createElement("style");
        document.getElementsByTagName("head")[0].appendChild(a);
        var b = g;
        b = a.sheet;
        var d = function(f, q) {
            var h = f + " { " + q + " }";
            b.insertRule(h, b.cssRules.length);
        };
        d(".gac_m", "font-size:13px;cursor:default;line-height:17px;border:1px solid #666;z-index:99;background:white;position:absolute;margin:0");
        d(".gac_n", "padding-top:1px;padding-bottom:1px");
        d(".gac_b td.gac_c", "background:#d5e2ff");
        d(".gac_b", "background:#d5e2ff");
        d(".gac_a td.gac_f", "background:#fff8dd");
        d(".gac_p", "padding:1px 4px 2px 3px");
        d(".gac_u", "padding:0 0 1px 0;line-height:117%;text-align:left");
        d(".gac_t", "width:100%;font-size:13px;text-align:left");
        d(".gac_bt", "width:" + (v.offsetWidth - 2) + "px;text-align:center;padding:8px 0 7px");
        d(".gac_sb", "font-size:11px");
        d(".gac_s", "height:3px;font-size:1px");
        var j = "white-space:nowrap;overflow:hidden;text-align:left;padding-left:3px;padding-right:3px";
        d(".gac_c", j);
        d(".gac_d", "text-align:right;font-size:10px;padding:0 3px");
        d(".fl:link,.fl:visited", "color:#77c");
        d(".gac_h", "color:green");
        d(".gac_i", "color:#666");
    }

    function T() {
        if (w) {
            x.left = qa(v, "offsetLeft") + "px";
            x.top = qa(v, "offsetTop") + v.offsetHeight - 1 + "px";
            x.width = v.offsetWidth + "px";
        }
    }

    function S(a, b) {
        var c = document.createElement("input");
        c.type = "hidden";
        c.name = a;
        c.value = b;
        return u.appendChild(c)
    }

    function Q(a) {
        var b = a.keyCode;
        if (b == 27 && ra()) {
            P();
            V(l);
            a.cancelBubble = i;
            return a.returnValue = e
        }
        if (b == 13) {
            sa(e);
            a.cancelBubble = i;
            return a.returnValue = e
        }
        if (b == 38 || b == 40) {
            E++;
            E % 3 == 1 && pa(b);
            return e
        }
    }

    function sa(a) {
        if (!a && A) {
            u.removeChild(A);
            A = g
        }
        if (s && t != -1 && ba && !(a && s.b))s.onclick(); else if (v.value == "")P(); else {
            if (a)A = S("btnI", "1");
            ta()
        }
    }

    function ta() {
        ma();
        u.onsubmit && u.onsubmit() == e || u.submit()
    }

    function R(a) {
        var b = a.keyCode;
        if (E == 0)pa(b);
        E = 0;
    }

    function pa(a) {
        if (v.value != k) {
            l = v.value;
            I = oa(v);
            z.value = l
        }
        if (a == 40 || a == 38) {
            ua(a == 40);
            ba = ra()
        }
        T();
        if (n != l && !F)F = window.setTimeout(P, 500);
        k = v.value;
        k == "" && !o && U()
    }

    function va() {
        ba = e;
        if (!G) {
            if (s)s.className = "gac_a";
            s = this;
            for (var a = 0,b; b = W(a); a++)b == s && (t = a);
            s.className = "gac_b"
        }
    }

    function za(a) {
        return function() {
            Aa(Ba(a));
            return e
        }
    }

    function Ba(a) {
        return[a,"&aq=",s.completeId,"&oq=",z.value,B.value.length > 0 ? "&aqi=" + B.value : ""].join("")
    }

    function Aa(a) {
        var b = window.frames.wgjf;
        b ? b.location.replace(a) : (window.location = a)
    }

    function Ca() {
        V(this.completeString);
        ta();
    }

    function ua(a) {
        if (!n && l) {
            m = "";
            U()
        } else if (!(l != n || !o))if (!(!r || r.length <= 0))if (ra()) {
            if (s)s.className = "gac_a";
            for (var b = r.length,c = (t + 1 + (a ? 1 : b)) % (b + 1) - 1; c != -1 && W(c).a;)c = (c + 1 + (a ? 1 : b)) % (b + 1) - 1;
            t = c;
            if (t == -1)Da(); else {
                s = W(c);
                s.className = "gac_b";
                V(s.completeString);
                y.value = s.completeId
            }
        } else X()
    }

    function Da() {
        v.focus();
        V(l);
        s = g;
        y.value = "f"
    }

    function P() {
        if (F) {
            window.clearTimeout(F);
            F = g
        }
        x && (x.visibility = "hidden");
    }

    function X() {
        x && (x.visibility = "visible");
        T();
        G = 1
    }

    function ra() {
        return!!x && x.visibility == "visible"
    }

    function ka() {
        if (w) {
            w.innerHTML = "";
        }
    }

    function Ea(a, b) {
        a.onclick = b ? za(b) : Ca;
        a.b = !b;
        a.onmousedown = Y;
        a.onmouseover = va;
        a.onmousemove = function() {
            if (G) {
                G = 0;
                va.call(this)
            }
        }
    }

    function Fa(a) {
        for (var b = a.length,c = r.length,d = 0; d < b; ++d)for (var j = 0; j < c; ++j) {
            var f = W(j);
            f.displayRemovalMessage && f.completeString == a[d] && f.displayRemovalMessage()
        }
    }

    function Ga(a) {
        D > 0 && D--;
        if (!(!w || a[0] != l)) {
            function b(Ka, wa) {
                var xa = wa ? ha(wa) : g,ya = Ka + (xa ? ":" + xa : "");
                if (ya != j) {
                    if (f)d += j + f;
                    f = 0;
                    j = ya
                }
                f++;
                c++
            }

            if (F) {
                window.clearTimeout(F);
                F = g
            }
            n = a[0];
            ka();
            for (var c = 0,d = "",j,f = 0,q = a[1],h = 0,p; h < q.length; h++)if (p = q[h])if (p[1] == 5) {
                Ha(p, a);
                b("n", p)
            } else if (p[1] == 8) {
                Ia(p, a, h == 0);
                b("a", p)
            } else if (p[1] == 0) {
                h == 0 && $();
                Ja(p);
                b("g", p)
            }
            if (c > 0) {
                O == 0 ? Ma() : $();
                X()
            } else P();
            b("");
            B.value = d;
            t = -1;
            r = w.rows;
            (r && r.length > 0 ? X : P)()
        }
    }

    function W(a) {
        b = r.item(a);
        return b
    }

    function Ma() {
        var a = w.insertRow(-1);
        a.a = 1;
        a.onmousedown = Y;
        var b = a.insertCell(0);
        b.innerHTML = '<div class=gac_bt><input class=gac_sb type=button value="Google Search" onclick="google.ac.rd(0)"><input class=gac_sb type=button value="I\x26#39;m Feeling Lucky" onclick="google.ac.rd(1)"></div>'
    }

    function Ia(a, b, c) {
        $();
        var d = a[3],j = d[0].replace(/<b>|<\/b>/gi, ""),f = w.insertRow(-1),q = d[1];
        Ea(f, q);
        f.completeId = a[2];
        f.className = "gac_a";
        f.completeString = b[0];
        var h = document.createElement("td");
        h.className = "gac_f gac_p";
        var p = Na("http://" + j, q);
        h.innerHTML = ['<table cellpadding=0 cellspacing=0 border=0 class=gac_t><tr><td><table cellpadding=0 cellspacing=0 border=0 class=gac_t><tr><td style="line-height:117%"><a class=q ',p,">",d[2],'</a><td class="gac_d gac_i">Sponsored Link</table><tr><td class=gac_u><span class=gac_h',">",d[0],"</span>&nbsp; &nbsp;",d[3],d[4] ? " " + d[4] : "","</table>"].join("");
        f.appendChild(h);
        c && $()
    }

    function Ha(a, b) {
        $();
        var c = w.insertRow(-1),d = a[3],j = d[0];
        Ea(c, j);
        c.completeId = a[2];
        c.className = "gac_a";
        c.completeString = b[0];
        var f = document.createElement("td");
        f.className = "gac_c gac_n";
        var q = a[0].replace(/HTTPS?:\/\//gi, ""),h = a[0].replace(/<b>|<\/b>/gi, "");
        /^HTTPS?:\/\//i.test(h) || (h = (j.indexOf("/url?url=https:") > 0 ? "https" : "http") + "://" + h);
        var p = Na(h, j);
        f.style.lineHeight = "117%";
        f.innerHTML = ["<a ",p,">",d[1],'</a><br><span class="gac_h"',">",q,"</span>"].join("");
        c.appendChild(f)
    }

    function Na(a, b) {
        return['href="',a,'" onmousedown="google.ac.r(this, \'',b,'\')" onclick="google.ac.c(event);return true"'].join("")
    }

    function Qa(a, b) {
        a.href = Ba(b)
    }

    function Ra(a) {
        a.stopPropagation();
        a.cancelBubble = a.cancel = a.returnValue = i
    }

    function Ja(a) {
        var b = w.insertRow(-1);
        Ea(b);
        b.completeId = a[2];
        b.className = "gac_a";
        var c = document.createElement("td");
        c.className = "gac_c";
        c.innerHTML = a[0];
        b.completeString = c.textContent;
        if (ha(a) == "p") {
            c.className = "";
            c.innerHTML =
            ["<table cellpadding=0 cellspacing=0 border=0 class=gac_t><tr><td class=gac_c>",a[0],"<td class=gac_d><a href=# class=fl onclick=\"return google.ac.sd(event, '",b.completeString,"')\">Remove</a></table>"].join("");
            b.displayRemovalMessage = function() {
                b.a = 1;
                b.onclick = b.onmouseover = g;
                if (b == s) {
                    b.className = "gac_a";
                    t = -1;
                    Da()
                }
                c.className = "gac_c gac_i";
                c.innerHTML = 'This search was removed from your <a href="/history" class=fl>Web History</a>'
            }
        }
        b.appendChild(c)
    }

    function $() {
        var a = w.insertRow(-1);
        a.a = 1;
        a.onmousedown = Y;
        a.insertCell(0).className = "gac_s"
    }

    function ma() {
        P();
        if (r && W(t) && z.value != v.value)y.value = W(t).completeId; else {
            z.value = "";
            y.value = "f";
            if (D >= 10)y.value = "o"
        }
    }

    function U() {
        if (m != l && l) {
            D++;
            Sa(C, l, Ga);
            v.focus()
        }
        m = l;
        for (var a = 100,b = 1; b <= (D - 2) / 2; ++b)a *= 2;
        a += 50;
        o = window.setTimeout(U, a)
    }

    function Ta(a, b) {
        Sa(ca, b, Fa);
        if (a) {
            a.cancelBubble = i;
            a.returnValue = e;
            Y(a)
        }
        return e
    }

    function Sa(a, b, c) {
        N && da.removeChild(N);
        N = document.createElement("script");
        N.src = ["http://clients1.google.com",a,"&q=",encodeURIComponent(b),"&cp=" + I].join("");
        da.appendChild(N);
    }

    function V(a) {
        if (v)k = v.value = a
    }

    function qa(a, b) {
        for (var c = 0; a;) {
            c += a[b];
            a = a.offsetParent
        }
        return c
    }

    function La(a, b) {
        a.appendChild(document.createTextNode(b))
    }

    function Y(a) {
        a.stopPropagation();
        return e
    }

    function oa(a) {
        var b = 0,c = 0;
        if (Wa(a)) {
            b = a.selectionStart;
            c = a.selectionEnd
        }
        return b && c && b == c ? b : 0
    }

    function Wa(a) {
        try {
            return typeof a.selectionStart == "number"
        } catch(b) {
            return e
        }
    }

    window.google.ac = {i:la,h:Ga,r:Qa,c:Ra,rd:sa};
    window.google.ac.d = Fa;
    window.google.ac.sd = Ta;
    google.bind(window, "resize", T);
    google.dstr && google.dstr.push && google.dstr.push(ja);
})();
(function() {
    window.ManyBox = {};
    var e,g,h = 1,j = google.History.client(i);

    function k(a) {
        for (var b in e)if (e[b].c && a(e[b]))return
    }

    function l(a, b, c, d, f) {
        this.c = a;
        this.i = b;
        this.B = d;
        this.o = f;
        this.q = "/mbd?" + (b ? "docid=" + b : "") + "&resnum=" + a.replace(/[^0-9]/, "") + "&mbtype=" + d + "&usg=" + c + "&hl=" + (google.kHL || "");
        this.e = {};
        this.l = "";
        g[a] = {r:0,D:this.e,i:this.i,h:0};
        this.n = 0
    }

    l.prototype.append = function(a) {
        this.l += "&" + a.join("&")
    };
    function m(a, b) {
        return document.getElementById("mb" + b + a.c)
    }

    function n(a, b) {
        a.g.style.paddingTop = b + "px";
        a.g.style.display = a.g.innerHTML ? "" : "none";
        if (b > a.n)a.n = b
    }

    function o(a) {
        if (!a.A) {
            a.A = 1;
            a.d = m(a, "b");
            a.j = 0;
            a.a = m(a, "l");
            a.m = a.a.getElementsByTagName("DIV")[0];
            a.p = a.a.getElementsByTagName("A")[0];
            a.z = a.p.innerHTML;
            a.o = a.o || a.z;
            a.m.title = "Click for more information";
            a.a.F = function(b, c) {
                var d = r(a.a),f = s(a.a);
                return b > d - 5 && b < d + google.getWidth(a.a) + 5 && c > f - 5 && c < f + google.getHeight(a.a) + 5
            };
            a.g = m(a, "f");
            n(a, 0);
            a.a.onmousedown = t(a);
            a.a.onclick = u(a);
            a.a.go = function() {
                a.a.onmousedown();
                a.a.onclick()
            }
        }
    }

    function t(a) {
        return function() {
            if (g[a.c].h) {
                if (a.I++ < 3)google.log("manybox", [a.j ? "close" : "open","&id=",a.c,"&docid=",a.i,"&mbtype=",a.B,a.l].join(""))
            } else {
                var b = google.xhr();
                if (b) {
                    b.open("GET", a.q + a.l + "&zx=" + google.time());
                    a.t = 0;
                    b.onreadystatechange = function() {
                        if (b.readyState == 4) {
                            var c = 0;
                            if (b.status == 200)try {
                                eval(b.responseText);
                                c = 1
                            } catch(d) {
                            }
                            if (!c && !a.C) {
                                g[a.c].h = 0;
                                a.C = 1;
                                a.q += "&cad=retry";
                                a.a.onmousedown()
                            } else {
                                a.u && v(a);
                                a.t = 0
                            }
                        }
                    };
                    a.t = 1;
                    b.send(null)
                }
                g[a.c].h = (a.I = 1)
            }
        }
    }

    function u(a) {
        return function() {
            g[a.c].h ||
            a.a.onmousedown();
            (a.u = a.t) || v(a)
        }
    }

    function z(a) {
        if (!a.e.k) {
            a.e.k = "\x3cfont color\x3dred\x3eError:\x3c/font\x3e The server could not complete your request.  Try again in 30 seconds.";
            a.G = a.a.onclick;
            a.a.onclick = function() {
                h = 0;
                v(a);
                h = 1;
                a.b.parentNode.removeChild(a.b);
                g[a.c].h = (a.e.k = (a.v = 0));
                a.a.onclick = a.G
            }
        }
        if (!a.v) {
            a.v = 1;
            var b = document.getElementById("res");
            a.H = b && r(a.d) > r(b) + google.getWidth(b);
            a.b = document.createElement("div");
            n(a, 0);
            a.b.style.position = "absolute";
            a.b.style.paddingTop = (a.b.style.paddingBottom = "6px");
            a.b.style.display = "none";
            a.b.className = "med";
            var c = document.createElement("div");
            a.b.appendChild(c);
            c.className = "std";
            c.innerHTML = a.e.k;
            a.g.parentNode.insertBefore(a.b, a.g)
        }
    }

    function i(a) {
        h = 0;
        ManyBox.init();
        k(function(b) {
            if (b.i == a[b.c].i) {
                b.e = a[b.c].D;
                if (a[b.c].r != b.j)v(b)
            } else a[b.c].h = 0
        });
        g = a;
        h = 1;
        google.History.save(j, g)
    }

    ManyBox.create = function(a, b, c, d, f) {
        return new l(a, b, c, d, f)
    };
    ManyBox.register = function(a, b, c, d, f) {
        return e[a] = ManyBox.create(a, b, c, d, f)
    };
    google.bind(document,
            "click", function(a) {
        a = a || window.event;
        var b = a.target || a.srcElement;
        while (b.parentNode) {
            if (b.tagName == "A" || b.onclick)return;
            b = b.parentNode
        }
        k(function(c) {
            if (c.a.F(a.clientX, a.clientY)) {
                c.a.go();
                return 1
            }
        })
    });
    function A() {
        e = {};
        g = {};
        history.navigationMode = history.navigationMode && "fast"
    }

    A();
    ManyBox.init = function() {
        k(o)
    };
    function B(a, b) {
        a.b.style.clip = "rect(0px," + (a.d.width || "34em") + "," + (b || 1) + "px,0px)"
    }

    l.prototype.insert = function(a) {
        this.e.k = a;
        google.History.save(j, g)
    };
    function s(a) {
        return a.offsetTop +
               (a.offsetParent ? s(a.offsetParent) : 0)
    }

    function C(a) {
        return a.offsetLeft + (a.offsetParent ? C(a.offsetParent) : 0)
    }

    function r(a) {
        return C(a)
    }

    function D(a) {
        a.f = m(a, "cb");
        var b = a.f && a.f.getAttribute("mbopen");
        if (b) {
            eval(b);
            a.onopen(a.f)
        }
    }

    function E(a) {
        a.b.style.display = "none";
        a.m.style.backgroundPosition = "-114px -78px";
        a.p.innerHTML = a.z;
        a.j = (g[a.c].r = 0);
        google.History.save(j, g)
    }

    function F(a, b, c, d, f) {
        var w = c > 0 ? 150 : 75,x = google.time() -
                                     f,y = x < w && h ? x / w * c : (d > 1 ? c - 10 : c),p = Math.max(a.s, b + y),q = p - a.s;
        B(a, q);
        a.d.style.height = p < 0 ? 0 : (q ? p + "px" : "");
        n(a, Math.max(0, q - 5));
        google.rhs();
        if (Math.abs(y) < Math.abs(c))window.setTimeout(function() {
            F(a, b, c, d - 1, f)
        }, 30); else window.setTimeout(function() {
            c < 0 ? E(a) : D(a);
            if (!google.isIE && a.H)a.b.style.width = "100px";
            a.b.style.position = (a.d.style.height = "");
            n(a, 0);
            google.rhs();
            a.d.w = 0
        }, 0)
    }

    function v(a) {
        a.u = 0;
        if (!a.d.w) {
            a.d.w = 1;
            var b;
            if (!a.j) {
                a.s = google.getHeight(a.d);
                z(a);
                n(a, 0);
                a.n = 0;
                k(function(d) {
                    d.m.title = ""
                });
                a.m.style.backgroundPosition = "-126px -78px";
                a.p.innerHTML = a.o;
                B(a, 1);
                a.b.style.position = "absolute";
                a.b.style.display = "";
                a.j = (g[a.c].r = 1);
                google.History.save(j, g);
                b = a.b.offsetHeight
            } else {
                var c = a.f && a.f.getAttribute("mbclose");
                if (c) {
                    eval(c);
                    a.onclose(a.f)
                }
                b = a.s - google.getHeight(a.d);
                a.g.style.display = "none";
                n(a, a.n);
                a.b.style.position = "absolute"
            }
            F(a, google.getHeight(a.d), b, google.isSafari ? 2 : 1, google.time())
        }
    }

    google.dstr && google.dstr.push(A);
})();
(function() {
    var e = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(e);
    var g;
    g = e.sheet;
    google.addCSSRule = function(a, d) {
        var f = a + "{" + d + "}";
        g.insertRule(f, g.cssRules.length);
    };
    google.acrs = function(a) {
        for (var d = a.split(/{|}/),c = 1; c < d.length; c += 2)google.addCSSRule(d[c - 1], d[c])
    };
    google.Toolbelt = {};
    var l = null,m = false,n = document.location.href.match("^.*?://[^/]*")[0],o,p;

    function q(a, d) {
        p = document.getElementById("tbd");
        o = p.innerHTML = a;
        d || google.Toolbelt.toggle();
        google.j && google.j.trap && google.j.trap()
    }

    var s = google.History.client(function(a) {
        q(a.content, a.open == google.Toolbelt.isToolbeltOpen())
    }),t = google.History.client(function(a) {
        google.acrs(a)
    });
    google.Toolbelt.ascrs = function(a) {
        google.acrs(a);
        google.History.save(t, a)
    };
    var u = [];
    google.Toolbelt.registerToolbeltCallback = function(a) {
        u.push(a)
    };
    google.Toolbelt.updateTbo = function(a) {
        for (var d = document.getElementsByTagName("A"),c = 0,b; b = d[c++];)if (b.href.match("^(" + n + ")?/(?!url|aclk|[^?]*$)") && b != l) {
            b.href = b.href.replace(/([?&])tbo=1(&|$)/, "$1") + (a ? "&tbo=1" : "");
        }
        for (var c = 0,f; f = document.forms[c++];)if (f.action.match("/search$")) {
            for (var r = 0,w = 0,j; j = f.elements[w++];)if (j.name == "tbo" && !a) {
                j.parentNode.removeChild(j);
                r = 1
            }
            if (!r && a) {
                var k = document.createElement("input");
                k.type = "hidden";
                k.value = "1";
                k.name = "tbo";
                f.appendChild(k)
            }
        }
    };
    function v(a) {
        document.body.className = document.body.className.replace(/\btbo\b/, "") + (a ? " tbo" : "");
        google.Toolbelt.updateTbo(a);
        for (var d = 0,c; c = u[d++];)c()
    }

    google.Toolbelt.isToolbeltOpen = function() {
        return document.body.className.match(/\btbo\b/) != null
    };
    google.Toolbelt.toggle = function(a) {
        if (a)l = a;
        p = document.getElementById("tbd");
        if (!p)return true;
        o = p.innerHTML;
        var d = p.getElementsByTagName("DIV").length > 0,c = google.Toolbelt.isToolbeltOpen();
        if (c) {
            v(false);
            google.log("toolbelt", "0&ei=" + google.kEI);
            m = true
        } else if (d) {
            v(true);
            m && google.log("toolbelt", "1&ei=" + google.kEI)
        } else {
            mbtb1.insert = q;
            var b = google.xhr();
            if (b) {
                b.open("GET", [google.pageState ? google.pageState.replace("#", "/mbd?") : google.base_href.replace(/^\/search\?/, "/mbd?"),"&mbtype=29&resnum=1&tbo=1",
                    mbtb1.tbs ? "&tbs=" + mbtb1.tbs : "","&docid=",mbtb1.docid,"&usg=",mbtb1.usg,"&zx=",google.time()].join(""));
                b.onreadystatechange = function() {
                    if (b.readyState == 4 && b.status == 200)try {
                        eval(b.responseText)
                    } catch(h) {
                        window.location.replace(a.href)
                    }
                };
                b.send(null)
            }
            return false
        }
        google.History.save(s, {content:o,open:!c});
        return false
    };
})();
(function () {
    var g = false;
    try {
    } catch(aa) {
    }
    if (!window.google.j)window.google.j = {};
    var h = window.google.j,j = window.frames.wgjf,k = location,l;
    h.ss = 1;
    h.ssCompleted = 1;
    var n,o = "1",p = "1",t = {c:{1:google.j[1]},s:{}},u,v,w,x,y,A = 0;
    if (!window.onerror)window.onerror = function() {
    };
    var B = !(!document.getElementById("xjsi"));

    function C(a, b, c) {
        b._ls = l;
        b._fr = !(!j);
        b._ph = A;
        if (h.ssCompleted != h.ss)b._ss = h.ss + "," + h.ssCompleted;
        try {
            b._wlt = typeof k.href;
            b._flt = typeof j.location.href;
            b._wl = encodeURIComponent(k.href);
            b._fl = encodeURIComponent(j.location.href)
        } catch(d) {
        }
        var e =
                [a,c && c.message || c || ""];
        for (var f in b)e.push(f + "=" + b[f]);
        window.onerror(e.join(":").substr(0, 1900))
    }

    function E(a, b, c) {
        try {
            c ? a.replace(b) : (a.href = b)
        } catch(d) {
            C("SL", {v:b,r:c}, d)
        }
    }

    var F = false,G = false,H = false,I = false,J;

    function ba(a, b, c) {
        var d = document.getElementsByTagName(a);
        for (var e = 0,f; f = d[e++];)if (f[b].match("(^" + J + "|^)/search(\\?|$)") && !f.className.match(/(\s|^)nj(\s|$)/))K(f, c, a, function(i) {
            return ca(this, i, a == "a")
        })
    }

    function K(a, b, c, d) {
        if (a[b]) {
            if (!a.__handler) {
                a.__handler = a[b];
                a[b] = function(e) {
                    return this.__handler(e) !=
                           false && d.call(this, e)
                }
            }
        } else a.__handler = (a[b] = function(e) {
            return d.call(this, e)
        })
    }

    function da(a, b, c) {
        var d = [];
        try {
            var e = new RegExp("(^|\\s)" + a + "(\\s|$)"),f = b.getElementsByTagName(c);
            for (var i = 0,m; m = f[i++];)e.test(m.className) && d.push(m)
        } catch(r) {
        }
        return d
    }

    function ea() {
        var a = da("l", document.getElementById("res"), "a");
        for (var b = 0,c; c = a[b++];)K(c, "onclick", "a", fa)
    }

    function ga(a) {
        var b = document.getElementById(a);
        if (!b)return;
        var c = b.getElementsByTagName("a");
        for (var d = 0,e; e = c[d++];)if (e.href.match("(^" +
                                                       J + "|^)/aclk?") || e.href.match("(^" + J + "|^)/url?.*&url=/aclk?"))K(e, "onclick", "a", fa)
    }

    function fa(a) {
        a = a || window.event;
        if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)return true;
        try {
            if (this.target)return true;
            if (!/&rct=j/.test(this.href))return true;
            j.location.replace(this.href)
        } catch(b) {
            return true
        }
        return false
    }

    h.trap = function trap() {
        ba("form", "action", "onsubmit");
        ba("a", "href", "onclick");
        ea();
        ga("tads");
        ga("rhscol")
    };
    function L(a, b) {
        if (!a)return true;
        if (a == l) {
            if (!b)return true;
            return b == h.ss && h.ss >
                                h.ssCompleted
        }
        return false
    }

    function ha(a) {
        a.replace(/\x3cscript[\s\S]*?\x3e([\s\S]*?)\x3c\/script/ig, function(b, c) {
            var d = document.createElement("script");
            d.text = c;
            document.body.appendChild(d)
        })
    }

    h.bc = function bc(a) {
        try {
            y = a ? a : "";
            document.body.className = y
        } catch(b) {
            C("BC", {name:a}, b)
        }
    };
    h.p = function p(a, b, c, d) {
        if (M.ie || L(a, d)) {
            try {
                if (b == "sdb" && F) {
                    N(o);
                    window.scroll(0, 0);
                    F = false
                }
                var e = document.getElementById(b),f = e.cloneNode(false);
                f.innerHTML = c;
                e.parentNode.replaceChild(f, e);
                if (M.ie)ha(c);
                if (b == "main") {
                    var i =
                            O("q") || O("as_q");
                    for (var m = 0,r; r = ["gs","bgs","f"][m++];)if (document[r])document[r].q.value = i
                }
                document.getElementById(b).style.visibility = "visible"
            } catch(s) {
                C("P", {id:b}, s)
            }
            A = 21
        }
    };
    h.pa = function pa(a, b, c, d) {
        if (M.ie || L(a, d)) {
            try {
                var e = document.getElementById(b),f = document.createElement("div");
                f.innerHTML = c;
                for (var i; i = f.firstChild;)e.appendChild(i);
                if (M.ie)ha(c)
            } catch(m) {
                C("PA", {id:b}, m)
            }
            A = 22
        }
    };
    var P = 1,M = {},Q = 0,S = 1;

    function ia() {
        if (window.opera)return"opera";
        if (document.all)return"ie";
        if (navigator.userAgent.match("Gecko"))return"gecko";
        return""
    }

    M[ia()] = 1;
    function ja() {
        return T().match("#.+") ? T() : k.href.substr(k.href.indexOf("?")).replace(/#.*/, "")
    }

    function O(a, b) {
        try {
            var c = b || ja(),d = c.match("[?&#]" + a + "=(.*?)([&#]|$)");
            if (d)return decodeURIComponent(d[1].replace(/\+/g, " ").replace(/[\n\r]+/g, " "))
        } catch(e) {
            C("GQC", {c:a}, e)
        }
        return""
    }

    h.ad = function ad(a, b, c, d, e, f) {
        var i = false;
        if (M.ie) {
            l = a;
            ++h.ss;
            E(k, l)
        }
        if (M.ie || L(a, e)) {
            ka();
            la();
            try {
                j.document.title = (document.title = b)
            } catch(m) {
            }
            window.google.kEI = c;
            if (f)window.google.kCSIE = f;
            if (o != d)i =
                       ma(d, a); else i = true;
            n = O("q", a) || n;
            y = "";
            A = 20
        }
        return i
    };
    h.zd = function zd(a, b, c, d, e, f) {
        if (M.ie || L(a, f)) {
            x = b;
            v = c;
            w = d;
            u = e
        }
    };
    h.zz = function zz(a, b) {
        if (M.ie || L(a, b)) {
            google.timers && google.timers.load.t && (google.timers.load.t.prt = (new Date).getTime());
            if (M.gecko)na(a);
            t.c[o].nb && oa();
            pa();
            P = 1;
            B || U();
            if (google.timers && google.timers.load.t) {
                google.timers.load.t.ol = (new Date).getTime();
                google.timers.load.t.jsrt = Q;
                G && google.report && google.report(google.timers.load, {ei:google.kEI,e:google.kCSIE || google.kEXPI,cp:I})
            }
            h.ssCompleted =
            h.ss;
            if (M.gecko)j.src = "about:blank"
        }
        G = false;
        A = 0
    };
    function U() {
        google.pageState = l;
        for (var a = 0,b; b = google.rein[a++];)try {
            b(l == "#", H)
        } catch(c) {
            C("INJS", {i:a}, c)
        }
    }

    function la() {
        if (google.y.x)google.x = google.y.x;
        for (var a = 0,b; b = google.dstr[a++];)try {
            b()
        } catch(c) {
            C("DEJS", {i:a}, c)
        }
    }

    h.l = function l() {
        try {
            var a = j.location.href;
            if (!(/\/blank\.html$/.test(a) || /about:blank$/.test(a)) && !(j.google && j.google.loc))if (a.match("(^" + J + "|^)/search(\\?|$)"))qa(ja()); else E(k, a, 1)
        } catch(b) {
            C("_l", {}, b)
        }
    };
    function qa(a) {
        a =
        "/search?" + a.substr(1).replace(/(^|&)fp\=[^&]*/g, "") + "&emsg=NCSR&ei=" + window.google.kEI;
        try {
            window.onerror(["NCSR:_g",!(!j.google),"_lg",Q ? (new Date).getTime() - Q : "NA","_sl",S,"_fl",j.location.href].join(":"))
        } catch(b) {
        }
        E(k, a, 1)
    }

    h.e = function aa(a) {
        if (!a)a = window.event;
        C("IFE", {}, a)
    };
    function ca(a, b, c) {
        if (!V)return true;
        b = b || window.event;
        var d = "#";
        try {
            if (c) {
                if (!a.href.match(/\/search(\?|$)/) || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)return true;
                d += a.href.match(/\?(.*)/)[1]
            } else {
                var e = [];
                a.q && a.q.blur();
                for (var f = 0,i; i = a.elements[f++];) {
                    if ((i.type == "radio" || i.type == "submit") && !i.checked)continue;
                    if (i.name == "btnI")return true;
                    i.name && e.push(i.name + "=" + encodeURIComponent(i.value))
                }
                d += e.join("&").replace(/\%20/g, "+")
            }
            d = d.replace(/\'/g, "%27");
            var m = O("q", d);
            if (!m)return false;
            if (m.match(/(^| )(r?phonebook|define|cache):/) || d.match(/(\?|&)pb=(r|f)/) || d.match(/(\?|&)swm=2/))return true
        } catch(r) {
            C("HSA", {t:a.tagName}, r);
            return true
        }
        d += "&fp=" + (o == "1" ? p : o);
        if (M.gecko)E(k, d);
        G = true;
        delete t.s[d];
        document.getElementById("csi").value =
        "";
        W(d);
        if (M.ie)E(k, d);
        return false
    }

    function ra(a) {
        var b = T(a);
        if (P && b != l && k.href.match("^" + J)) {
            G = !(b in t.s);
            document.gs && document.gs.q.blur();
            document.bgs && document.bgs.q.blur();
            document.f && document.f.q.blur();
            if (M.gecko || a || b == "#") {
                try {
                    if (a && h.b) {
                        var c = !document.getElementById("csi").value;
                        h.b = 0;
                        if (M.ie && l == "#" || M.gecko && c) {
                            b = Y(b, "fp", "1");
                            if (b.indexOf("&fp=") == -1)b += "&fp=1";
                            if (b.indexOf("&cad=") == -1)b += "&cad=b";
                            delete t.s[b];
                            if (M.gecko)E(k, b)
                        }
                    }
                } catch(d) {
                }
                W(b, a)
            }
            if (M.ie)E(k, b)
        }
        window.setTimeout(ra,
                100)
    }

    function W(a, b) {
        Q = (new Date).getTime();
        F = false;
        I = (H = false);
        google.timers.load.t = null;
        if (a != "#" && a.indexOf("&fp=") == -1) {
            a += "&fp=" + o;
            E(k, a, 1)
        }
        l = a;
        if (!M.ie)++h.ss;
        S = 0;
        try {
            P = 0;
            var c = a.substr(1);
            if (M.ie && a == "#") {
                if (a in t.s) {
                    N(o);
                    sa(a)
                }
            } else if (M.ie && !b) {
                F = true;
                E(j.location, "/search?" + c)
            } else if (M.gecko && a in t.s) {
                N(o);
                sa(a)
            } else if (a != "#") {
                F = true;
                E(j.location, "/search?" + c, true)
            }
        } catch(d) {
            S = 1;
            C("GO", {o:b,s:a}, d)
        }
        window.setTimeout(function() {
            S = 1
        }, 50)
    }

    function N(a) {
        try {
            document.getElementById("resultStats").style.visibility =
            "hidden"
        } catch(b) {
        }
        var c = "";
        try {
            for (var d = 0; c = t.c[a].cc[d++];)document.getElementById(c).style.visibility = "hidden"
        } catch(b) {
            C("C", {fp:a,c:c}, b)
        }
    }

    function Z(a) {
        var b = "",c;
        switch (typeof a) {case "object":if (a instanceof Array) {
            for (c = 0; c < a.length; c++) {
                if (b)b += ",";
                b += Z(a[c])
            }
            return"[" + b + "]"
        } else {
            for (c in a) {
                if (b)b += ",";
                b += Z(c) + ":" + Z(a[c])
            }
            return"{" + b + "}"
        }case "number":return String(a);case "string":b = a.replace(/\\/g, "\\\\").replace(/\'/g, "\\'").replace(/\n/g, "\\n").replace(/\r/g, "\\r");return"'" + b + "'";
            case "boolean":return String(a);default:return"null"}
    }

    function na(a) {
        if (!t.s[a]) {
            var b;
            try {
                var c = {};
                for (var d = 0,e; e = t.c[o].co[d++];) {
                    b = e;
                    c[e] = document.getElementById(e).innerHTML
                }
                c.title = document.title;
                c.kEI = window.google.kEI;
                c.base_href = u;
                c.end = v;
                c.num = w;
                c.start = x;
                c.chrome = o;
                c.bc = y;
                t.s[a] = c
            } catch(f) {
                C("S", {s:a,c:b}, f)
            }
        }
        ta(o, a)
    }

    function ta(a, b) {
        try {
            if (g) {
                if (b) {
                    sessionStorage["s_" + b] = "(" + Z(t.s[b]) + ")";
                    var c = sessionStorage.s_ ? eval(sessionStorage.s_.value) : [];
                    c.push(b);
                    sessionStorage.s_ = Z(c)
                }
                if (a) {
                    sessionStorage["c_" +
                                   a] = "(" + Z(t.c[a]) + ")";
                    var d = sessionStorage.c_ ? eval(sessionStorage.c_.value) : [];
                    d.push(a);
                    sessionStorage.c_ = Z(d)
                }
            } else document.getElementById("wgjc").value = "(" + Z(t) + ")"
        } catch(e) {
            document.getElementById("wgjc").value = "({})";
            C("SE", {s:b,c:a,ss:!(!window.sessionStorage)}, e)
        }
    }

    function ua() {
        try {
            if (g) {
                t = {s:{},c:{1:h[1]}};
                var a = sessionStorage.s_ ? eval(sessionStorage.s_.value) : [],b = sessionStorage.c_ ? eval(sessionStorage.c_.value) : [];
                for (var c = 0,d; d = a[c++];)t.s[d] = eval(sessionStorage["s_" + d].value);
                for (var e =
                        0,f; f = b[e++];)t.c[f] = eval(sessionStorage["c_" + f].value)
            } else t = window.eval(document.getElementById("wgjc").value)
        } catch(i) {
            C("RC", {}, i)
        }
        if (!t)t = {s:{},c:{1:h[1]}}
    }

    function ka() {
        if (google.timers && !google.timers.load.t) {
            google.sn = "web";
            google.timers.load.t = {start:(new Date).getTime()}
        }
    }

    h.ac = function ac(a, b, c, d, e, f) {
        if (M.ie || L(e, f)) {
            if (!d) {
                t.c[b] = {};
                for (var i in a)t.c[b][i] = a[i]
            }
            if (c) {
                I = (H = true);
                ka();
                if (M.ie)document.styleSheets[0].cssText = t.c[b].css; else document.getElementsByTagName("style")[0].innerHTML =
                                                                            t.c[b].css
            }
            A = 10
        }
    };
    h.pc = function pc(a, b, c, d, e, f, i) {
        if (M.ie || L(f, i)) {
            try {
                if (!e)t.c[c][a] = b;
                if (d) {
                    h.p(l, a, b, i);
                    document.body.style.visibility = ""
                }
            } catch(m) {
                C("PC", {c:a,f:c}, m)
            }
            A = 11
        }
    };
    h.zc = function zc(a, b, c, d, e, f) {
        if (M.ie || L(e, f)) {
            if (!d) {
                for (var i in a)t.c[b][i] = a[i];
                if (M.ie)ta(b)
            }
            if (c)o = b; else p = b;
            A = 12
        }
    };
    function ma(a, b) {
        if (t.c[a]) {
            h.ac({}, a, 1, 1, l, 0);
            I = false;
            h.pc("main", t.c[a].main, a, 1, 1, l, 0);
            h.zc({}, a, 1, 1, l, 0)
        } else {
            var c = O("fp", b) || "1";
            C("CM", {fp:c});
            if (c != "1")W(Y(b, "fp", "1")); else qa(b);
            return false
        }
        return true
    }

    function sa(a) {
        try {
            window.google.kEI = t.s[a].kEI;
            try {
                j.document.title = (document.title = t.s[a].title)
            } catch(b) {
            }
            if (t.s[a].chrome != o)if (!ma(t.s[a].chrome, a))return;
            la();
            h.bc(t.s[a].bc);
            for (var c = 0,d; d = t.c[t.s[a].chrome].co[c++];)h.p(a, d, t.s[a][d] || "", 0);
            u = t.s[a].base_href;
            v = t.s[a].end;
            w = t.s[a].num;
            x = t.s[a].start;
            t.c[o].nb && oa();
            pa();
            n = O("q", a) || n;
            B || U();
            A = 0;
            h.ssCompleted = h.ss;
            P = 1
        } catch(b) {
            C("DPFC", {s:a}, b)
        }
    }

    h.xi = function xi() {
        if (google.y.first) {
            for (var a = 0,b; b = google.y.first[a]; ++a)b();
            google.y.first =
            []
        }
        google.x = function(c, d) {
            d && d.apply(c);
            return false
        };
        U()
    };
    function va() {
        try {
            var a = j.location.href,b = a.indexOf("?");
            return b >= 0 ? "#" + a.substr(b + 1) : "#"
        } catch(c) {
            C("FQS", {}, c);
            return l || "#"
        }
    }

    function T(a) {
        if (!a && M.ie)return va(); else return k.hash ? k.href.substr(k.href.indexOf("#")) : "#"
    }

    function wa() {
        var a = 0;
        try {
            var b = document.getElementById("resultStats").innerHTML.replace(/\(\s*<b>[\d\s.,]+<\/b>/i, ""),c = b.match(/<b>[\d\s.,]+<\/b>/ig),d = 0,e;
            for (e = 0; e < c.length; ++e) {
                var f = parseInt(c[e].replace(/(<b>)|(<\/b>)|[\s,.]*/ig,
                        ""));
                if (f > d)d = f
            }
            a = d
        } catch(i) {
        }
        return a
    }

    function Y(a, b, c) {
        var d = new RegExp("([?&]" + b + "=).*?([&#]|$)");
        return a.replace(d, "$1" + encodeURIComponent(c).replace(/\%20/g, "+") + "$2")
    }

    function pa() {
        try {
            var a = O("q") || O("as_q") || n,b = O("restrict"),c = wa(),d = t.c[o].pc;
            for (var e = 0,f; f = ["gs","bgs","f"][e++];)if (document[f])document[f].q.value = a;
            for (var e = 0,i; i = d[e++];) {
                var m = document.getElementById(i) ? document.getElementById(i).getElementsByTagName("a") : [];
                for (var r = 0,s; m && (s = m[r++]);) {
                    s.href = Y(s.href, "q", a);
                    s.href =
                    Y(s.href, "swrnum", c);
                    if (b)s.href = Y(s.href, "restrict", b)
                }
            }
        } catch(D) {
            C("PQ", {}, D)
        }
        h.trap()
    }

    function $(a, b, c, d) {
        var e = {a:a.getElementsByTagName("a")[0],e:a,s:a.getElementsByTagName("span")[0],l:a.getElementsByTagName("span")[1]};
        e.a.href = u.replace(/start=\d*/, "start=" + b);
        e.s.style.backgroundPosition = -[26,0,44,60,76,76][c] + "px 0";
        e.s.style.width = [18,44,16,16,66,42][c] + "px";
        e.s.style.marginLeft = c == 1 ? "auto" : "";
        e.s.style.marginRight = c == 4 ? "34px" : "";
        e.s.className = c == 2 ? "csb" : "csb ch";
        e.l.style.color = c == 2 ? "#a90a08" :
                          "";
        e.l.style.display = d;
        return e
    }

    function oa() {
        try {
            var a = O("start") || 0;
            if (v < a)a = v;
            var b = document.getElementById("nav"),c = document.getElementById("foot"),d = b.getElementsByTagName("td"),e = Math.floor(x / w) + 1,f = Math.floor(a / w) + 1,i = Math.ceil(v / w),m = a < w,r = f >= i;
            if (e < i) {
                b.style.display = "";
                var s = d[1],D = d[d.length - 1];
                $(d[0], Math.max((f - 2) * w, 0), m ? 0 : 1, m ? "none" : "");
                $(D, f * w, r ? 5 : 4, r ? "none" : "");
                for (var z = 1,xa = d.length - 1; z < xa; z++)D.parentNode.removeChild(d[1]);
                for (var z = e; z <= i; z++) {
                    var X = z == f,R = $(s.cloneNode(true),
                            (z - 1) * w, X ? 2 : 3, "");
                    R.e.className = X ? "cur" : "";
                    R.a.style.textDecoration = X ? "none" : "";
                    R.l.innerHTML = z;
                    D.parentNode.insertBefore(R.e, D)
                }
            } else b.style.display = "none";
            c.style.visibility = "visible"
        } catch(ya) {
            C("RNB", {}, ya)
        }
    }

    var V;

    function za() {
        V = h.en && h[1] && encodeURIComponent && j && google.rein && google.dstr && 1;
        if (V) {
            var a = ["wgjc"].concat(t.c[1].co);
            for (var b = 0; b < a.length; b++)V &= !(!document.getElementById(a[b]))
        }
        try {
            if (V) {
                l = M.gecko ? "#" : T();
                J = k.href.match(/.*?:\/\/[^\/]*/)[0];
                h.trap();
                if (k.hash && k.hash != "#")N(o);
                ua();
                na("#");
                window.wgjp && window.wgjp();
                if (!M.gecko || h.b)for (var c = 0,d; d = h.pl[c++];) {
                    var e = h[d[0]].apply(null, d[1]);
                    if (d[0] == "ad" && !e)h.pl = []
                }
                if (M.ie && l == "#")try {
                    j.document.title = document.title
                } catch(f) {
                }
                ra(1)
            } else {
                if (google.j.en != 0)C("INIT1", {});
                window._gjp && window._gjuc && window._gjp()
            }
        } catch(f) {
            C("INIT2", {}, f);
            V = 0;
            window._gjp && window._gjuc && window._gjp()
        }
    }

    za();
    ;
})();
(function() {
    var g,aa = encodeURIComponent,ba = /^(\w+)?(?:\.(.+))?$/;

    function j(a) {
        for (var b = 1; b < arguments.length; b += 2) {
            var c = arguments[b],e = arguments[b + 1],d = a.style;
            if (c in a)a[c] = e; else if (d && c in d) {
                d[c] = e;
            }
        }
        return a
    }

    function k(a, b) {
        var c = a.match(ba),e = document.createElement(c[1]);
        if (c[2])e.className = c[2];
        if (b)e.innerHTML = b;
        return e
    }

    function l(a) {
        var b =
                Array.prototype.slice.call(arguments, 1);
        return function() {
            return a.apply(null, b.concat(Array.prototype.slice.call(arguments)))
        }
    }

    function m(a, b) {
        for (var c in b)a = a.replace(new RegExp("\\{" + c + "\\}", "g"), b[c]);
        return a
    }

    var ca = ["&","&amp;","<","&lt;",">","&gt;",'"',"&quot;","'","&#39;","{","&#123;"];

    function n(a, b) {
        for (var c = b ? 1 : 0,e = b ? 0 : 1; c < ca.length; c += 2,e += 2)a = a.replace(new RegExp(ca[c], "g"), ca[e]);
        return a
    }

    function p(a) {
        return document.getElementById(a)
    }

    function q(a, b, c) {
        var e = a.match(ba),d = e[2] &&
                                new RegExp("\\b" + e[2]),h = (b || document).getElementsByTagName(e[1] || "*");
        if (d)for (var f = 0,i = h,h = [],o; o = i[f++];)d.test(o.className) && h.push(o);
        return h.length > 1 || c ? h : h[0]
    }

    function u(a, b, c) {
        b.parentNode.insertBefore(a, c ? b.nextSibling : b)
    }

    function v(a) {
        return a && a.parentNode && a.parentNode.removeChild(a)
    }

    function w(a, b, c, e) {
        try {
            var d = google.xhr();
            d.onreadystatechange = function() {
                if (d.readyState == 4 && d.status == 200) {
                    c && c(e ? eval("(" + d.responseText + ")") : d.responseText);
                    d = null
                }
            };
            if (a == 0) {
                d.open("GET", b, true);
                d.send(null)
            } else {
                b =
                b.split("?");
                d.open("POST", b[0], true);
                d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                d.send(b[1] || "")
            }
        } catch(h) {
        }
    }

    function x(a) {
        var b = q("button.wpb", a);
        if (b.style.backgroundPosition) {
            b.style.cssText = "";
            return true
        } else {
            b.style.backgroundPosition = "-126px -78px";
            return false
        }
    }

    var y = 0,z = [];

    function da(a) {
        return a
    }

    function ea(a) {
        return(3 - 2 * a) * a * a
    }

    function A(a, b, c) {
        for (var e = 0,d; d = b[e++];) {
            d[5] = d[5] == null ? "px" : d[5];
            d[4] = d[4] || da;
            j(d[0], d[1], d[2] + d[5])
        }
        z.push({J:a,G:c,
            T:google.time(),Q:b});
        y = y || window.setInterval(fa, 15)
    }

    function fa() {
        for (var a = 0,b; b = z[a++];)ga(b) || z.splice(--a, 1);
        if (!z.length) {
            window.clearInterval(y);
            y = 0
        }
    }

    function ga(a) {
        var b = google.time() - a.T;
        if (b >= a.J) {
            for (var c = 0,e; e = a.Q[c++];)j(e[0], e[1], e[3] + e[5]);
            a.G && a.G();
            return 0
        } else {
            for (var c = 0,e; e = a.Q[c++];) {
                var d = e[2] + (e[3] - e[2]) * e[4](b / a.J);
                if (e[5] == "px")d = Math.round(d);
                j(e[0], e[1], d + e[5])
            }
            return 1
        }
    }

    var B,ha = [];

    function C(a, b, c) {
        var e = {applicationId:19},d = "/reviews/json/";
        if (!B) {
            if (ha.push([a,b,c]) ==
                1) {
                e.queries = [g.q];
                ia(d + "sw?req=" + aa(google.stringify(e)))
            }
            return
        }
        var o = b && {swUrl:b.e,groups:["W"],encrypted:b.t || b.D == null && b.u != 1 ? g.qt : g.at[b.k]};
        if (a == "write") {
            var t = {},r = {attributes:t};
            r[b.t ? "annotation" : "entity"] = o;
            if (g.ex)t.exp = g.ex;
            if (b.D != null) {
                if (b.t) {
                    o.author = b.t;
                    delete r.attributes;
                    r = {entity:r,attributes:t}
                } else {
                    t.rquery = b.k;
                    if (b.z != null)t.pa = b.z;
                    if (b.N) {
                        t.nomination = true;
                        t.ourl = b.O
                    }
                }
                r.starRating = b.D
            } else {
                r.comment = b.i;
                r.labels = [b.k]
            }
            r.language = google.kHL;
            r.country = "";
            e.annotations = [r]
        } else if (a == "delete")e.entities = [o];
        if (a == "sw") {
            e.entity = o;
            e.requestType = b.u;
            e.language = google.kHL;
        }
        d += a + "?req=" + aa(google.stringify(e));
        if (a == "write" || a == "delete")d += "&token=" + B;
        ia(d, c)
    }

    function E(a, b, c) {
        c = c || {};
        c.e = a.e;
        c.k = a.k || g.q;
        if (b != -1)c.D = b == 0 ? 5 : (b == 2 ? 1 : 0);
        C("write", c)
    }

    function ja(a, b) {
        if (!b.z && !a.l)C("sw", {e:a.e,k:g.q,u:1}, function(c) {
            var e = k("div", c.html);
            e.style.display = "none";
            a.a.appendChild(e);
            a.l = e;
            E(a, 0, b)
        }); else E(a, 0, b)
    }

    function ia(a, b, c) {
        w(1, a, function(e) {
            if (e.channelHeader.token) {
                B = e.channelHeader.token;
                if (e.swToken) {
                    g.qt = e.swToken;
                    g.at = {};
                    for (var d = 0,h; h = e.queryTokens[d++];)g.at[h.query] = h.token
                }
                while (ha.length)C.apply(null, ha.shift())
            }
            var f = e.channelHeader.errorCode,i = c || 1;
            if (f == 7 && i < 3)ia(a, b, i + 1); else {
                f && google.log("error", "&sa=X&oi=sw_s&cd=" + f);
                b && b(e)
            }
        }, 1)
    }

    var la = google.History.client(ka),F,ma,G = 0,H = {},I = 0;

    function ka(a) {
        if (a && ma) {
            ma = 0;
            if (I == a[0]) {
                F = a[1];
                G = 1;
                for (var b = 0,c; c = F[b++];)if (H[c[0]])H[c[0]].call(null,
                        c[1], c[2]);
                G = 0
            }
        }
    }

    function J(a, b, c) {
        F.push([a,b,c]);
        na()
    }

    function K(a, b, c) {
        for (var e = 0,d; d = F[e++];)if (d[0] == a && d[1] == b) {
            d[2] = c;
            na();
            return
        }
        J(a, b, c)
    }

    function na() {
        google.History.save(la, [I,F])
    }

    var oa,pa,qa = /^([a-zA-Z]+:\/\/)?([\w-]+\.)+([a-zA-Z]+)\S*$/,L,M,ra,N,sa = 0;
    H[1] = function(a, b) {
        var c = k("li.g", b),e = O(c, 1);
        P(e);
        u(c, Q);
    };
    function ua() {
        var a = p("wng");
        if (!a) {
            a = k("div", m('<ol id=wng style="display:none;width:42em;margin:5px auto 0">Add a page that you\x26#39;d like to see the next time you search for \x3cb\x3e{q}\x3c/b\x3e.<br><form style="display:block;margin:5px 0"><input type=text class=f maxlength=512 size=55 value="Enter the web address (URL) here"> <input type=submit value="Preview"></form><div id=wnm style=display:none></div><div id=wnc style=display:none>If this result is correct, click&nbsp;<button><img src=/c.gif alt="Add" class=w11 style=margin:0> Add</button></div></ol>',
            {q:n(g.q)})).firstChild;
            u(a, p("wml"), 1);
            M = p("wnc");
            L = q("input", a)[0];
            L.onclick = va;
            q("form", a).onsubmit = wa;
            q("button", M).onclick = l(xa, ya)
        }
        var b = x(p("wnz"));
        a.style.display = b ? "none" : "block";
        if (++pa < 3)google.log("plus", "&sa=X&oi=sw_a&cd=" + !b)
    }

    function va() {
        if (!oa && L) {
            j(L, "value", "", "color", "#000");
            oa = 1
        }
    }

    function wa() {
        var a = L.value.replace(/^\s+|\s+$/g, "");
        if (a)if (qa.test(a))za(ra = a, l(Aa, ++sa)); else Ba("Invalid URL");
        return false
    }

    function Ca(a) {
        var b = q("button.w", N),c = q("button.wci",
                N).previousSibling || q("cite", N);
        c = c.lastChild || c;
        for (var e = 0,d; d = b[e++];)d.style.display = a;
        c.nodeValue = c.nodeValue.replace(/( - )?$/, a ? "" : " - ")
    }

    function Aa(a, b) {
        if (a != sa)return;
        Da();
        N = b;
        Ca("none");
        u(N, M);
        M.style.display = "block"
    }

    function ya() {
        Ca("");
        var a = O(N, 1);
        if (Ea) {
            M.style.display = "none";
            Fa(a, 1)
        } else Ga(a, 1, function() {
            M.style.display = "none";
            u(a.M, M, 1)
        });
        ja(a, {N:1,O:ra});
        J(1, a.c, N.innerHTML);
        N = null;
        L.value = ""
    }

    function Da() {
        v(N);
        p("wnm").style.display = (M.style.display = "none")
    }

    function Ba(a) {
        Da();
        j(p("wnm"), "opacity", 0, "innerHTML", a, "display", "");
        A(300, [
            [p("wnm"),"opacity",0,1,undefined,""]
        ])
    }

    H[2] = function(a, b) {
        Ma(D[a]);
        D[a].n.value = b;
        T(D[a])
    };
    function Na(a) {
        if (!a.C && !a.i) {
            j(a.n, "value", "", "color", "#000");
            a.v.disabled =
            0;
            a.C = 1
        }
    }

    function Ma(a) {
        if (!a.f) {
            a.f = q(".wce", a.a);
            j(a.f, "display", "none", "margin", "4px 0", "width", "38em", "innerHTML", '<textarea rows=8 style="width:100%;margin-bottom:4px;font-family:arial,sans-serif;font-size:small"></textarea><br><table border=0 cellpadding=0 style="border-collapse:collapse;width:100%"><tr><td><input type=button value="Make a public comment" disabled> <input type=button value="Cancel"><td style=text-align:right><a href=# class=fl>Delete comment</a></table>');
            var b = q("input", a.f);
            (a.v = b[0]).onclick = l(Oa, l(T, a));
            (a.H = q("a", a.f)).onclick = l(Pa, a);
            b[1].onclick = l(Qa, a);
            (a.n = q("textarea", a.f)).onclick = l(Na, a)
        }
        if (!a.j) {
            a.j = k("div.wcd", m('<span style=color:#666>Comment by {name}, <span class=wcu></span></span>&nbsp;- "<span class=wct></span>" <a href=# class="wcl fl">Edit</a>',
            {name:g.nn}));
            a.j.style.display = "none";
            u(a.j, a.f, 1);
            q(".wcl", a.j).onclick = l(Ma, a)
        }
        if (!G)if (a.f.style.display == "block")Qa(a); else window.setTimeout(function() {
            a.C = 0;
            if (!a.i) {
                j(a.n, "value", "Type your comment here", "color", "#666");
                a.v.disabled = 1;
                a.H.style.display = "none"
            } else {
                j(a.n, "value", a.i, "color", "#000");
                a.v.disabled = 0;
                a.H.style.display = ""
            }
            a.j.style.display = "none";
            a.f.style.display = "block"
        }, 0);
        return false
    }

    function T(a) {
        var b = a.n.value.replace(/^\s+|\s+$/g, "");
        if (b) {
            a.P = "";
            v(a.A)
        }
        if (b != a.i) {
            q(".wct",
                    a.a).innerHTML = n(b).replace(/(\S{25}[^&\s]{5})(\S{10})/g, "$1<wbr>$2");
            q(".wcu", a.a).innerHTML = "Today";
            if (!G) {
                b ? E(a, -1, {i:b}) : C("delete", {e:a.e});
                K(2, a.c, b)
            }
            a.i = b
        }
        Qa(a)
    }

    function Ra(a) {
        a.n.value = a.P;
        v(a.A);
        T(a);
        return false
    }

    function Pa(a) {
        a.P = a.i;
        a.A = k("div.wcd", "<span style=color:#666>Comment deleted </span> - <a href=# class=fl>Undo</a>");
        a.n.value = "";
        T(a);
        q("a", a.A).onclick = l(Ra, a);
        u(a.A, a.f, 1);
        return false
    }

    function Qa(a) {
        a.f.style.display =
        "none";
        a.j.style.display = a.i ? "" : "none"
    }

    var U,Sa = 0,Ta,Ua;
    H[6] = function(a, b) {
        Ua = b ? 1 : 2;
        b && Va()
    };
    H[7] = function(a, b) {
        var c = k("li.g", b);
        P(O(c, 4));
        p("wrg").appendChild(c);
        U = 2
    };
    function Wa(a) {
        if (G)b(); else {
            Xa(a, b);
            E(a, 2);
            J(0, a.c, 4)
        }
        function b() {
            if (!Sa && !G) {
                var c = k("li.g", "Results you remove can be viewed at the bottom of the page.");
                u(c, a.a);
                window.setTimeout(function() {
                    A(500, [
                        [V(c),"paddingTop",c.offsetHeight + Ya(c),0]
                    ]);
                    c.style.display = "none"
                }, 5000)
            }
            Sa = 1;
            p("wrg").appendChild(a.a);
            j(a.a, S, "",
                    "visibility", "visible", "display", "");
            p("wrz").style.display = "block";
            P(a);
            if (!a.g)for (var e = a.c + 1,d; (d = D[e++]) && d.g;)if (d.b == 0)d.a.style[S] = "";
        }
    }

    function Va() {
        if (U == 2) {
            var a = x(Ta);
            p("wrg").style.display = a ? "none" : "block";
            q("span", Ta).innerHTML = a ? "Show them" : "Hide them";
            Ua++;
            if (!G) {
                K(6, "", !a);
                if (Ua < 3)google.log("plus", "&sa=X&oi=sw_r&cd=" + !a)
            }
        } else if (U == 0) {
            U = 1;
            p("wrm").style.display =
            "block";
            var b = g.ru.length;
            for (var c = 0,e; e = g.ru[c++];)za(e, function(d) {
                P(O(d, 4));
                p("wrg").appendChild(d);
                J(7, "", d.innerHTML);
                if (--b == 0) {
                    U = 2;
                    p("wrm").style.display = "none";
                    Va()
                }
            })
        }
    }

    var W;

    function Za(a) {
        var b = q("div", a, 1)[0];
        if (x(a))b.style.display = "none"; else {
            b.style.display = "";
            W.select();
            W.focus()
        }
        return false
    }

    function $a() {
        var a = p("wpz");
        a && a.style.display && ab(a)
    }

    var Ea,cb,Q,R,db = /<!--m--\>\s*(.*?)\s*<!--n--\>/,Y;
    H[0] = function(a, b) {
        eb(D[a], b)
    };
    function fb(a, b) {
        if (b == 0)eb(a, 1); else if (b == 1 && a.b != 4)eb(a, a.b != 0 ? 0 : 4); else if (b ==
                                                                                           2)eb(a, 0)
    }

    function eb(a, b) {
        a.r = a.b;
        a.b = b;
        if (b == 1)Ea ? Fa(a) : Ga(a); else if (b == 4)Wa(a); else Fa(a);
    }

    function P(a) {
        a.p.style.cssText = (a.m.style.cssText = "");
        a.p.className = "w1" + a.b;
        a.m.className = "w2" + a.b;
        a.m.title = a.b == 1 ? "Restore" : "Remove";
        if (!a.d && a.b !=
                    0) {
            var b = k("span", "&nbsp;-&nbsp;");
            b.style.display = "none";
            b.appendChild(a.d = j(k("span.link", "Restore"), "color", "#77c", "fontSize", "small"));
            u(b, a.m, 1);
            a.d.onclick = l(fb, a, 2)
        }
        if (a.d)a.d.parentNode.style.display = a.b == 4 ? "inline" : "none";
    }

    function Fa(a,
                b) {
        var c = a.r == 4,e = a.b != 0,d = e && a.r != 0,h = a.a,f = d ? cb : (e ? Q : a.s);
        Ha(a, f, function(i) {
            var o = !e || (!d ? false : null),t = "";
            if (a.g && o)for (var r = a.c - 1,s; s = D[r--];)if (!s.g) {
                if (s.b == 0)t = a.g;
                break
            }
            j(h, "margin", "", S, t);
            if (c && !p("wrg").lastChild)p("wrz").style.display = "none";
            if (!a.g && o != null)for (var r = a.c + 1,s; (s = D[r++]) && s.g;)if (s.b == 0)s.a.style[S] = o ? s.g : "";
            if (e)window.setTimeout(function() {
                if (a.l && a.l.style.display == "none") {
                    ab(a.l, function() {
                    })
                }
                $a()
            }, 300 * (i ? 1 : 2))
        });
        if (!G && (d || !b)) {
            if (c)E(a, 1); else if (e)ja(a, {z:d}); else {
                E(a, 1);
                if (a.l)a.l.style.display = "none"
            }
            J(0, a.c, a.b)
        }
    }

    function ab(a, b) {
        var c = V(a);
        j(a, "position", "absolute", "top", "-1000px", "display", "");
        A(500, [
            [c,"paddingTop",0,a.offsetHeight]
        ], function() {
            c.style.paddingTop = "";
            a.style.position = "";
            b && b()
        })
    }

    function Ga(a, b, c) {
        var e = a.r != 0,d = a.a,h = gb(d),f = k("div", d.innerHTML);
        Z(f, h);
        d.style.visibility = "hidden";
        document.body.appendChild(f);
        function o() {
            v(f);
            d.style.display = "none";
            var t = m('<span><a href="{url}">{title}</a> &nbsp; Promoted to first page</span>', {title:a.R.innerHTML,url:a.e});
            a.M = k("li.g", t);
            u(a.M, a.a, 1);
            c && c();
            if (!a.g)for (var r = a.c + 1,s; (s = D[r++]) && s.g;)if (s.b == 0)s.a.style[S] = ""
        }

        if (G)o(); else {
            A(750, [
                [f,"left",h.x,h.w * -1,ea]
            ], o);
            if (e || !b) {
                E(a, 0, {z:e});
                J(0, a.c, a.b)
            }
        }
    }

    function Ha(a, b, c) {
        P(a);
        var e = a.a;
        if (G) {
            s();
            return
        }
        var d = V(e, b),h = V(b, e);
        if (d ==
            b || h == e)s(); else {
            var f = gb(e),i = gb(h),o = Ya(e),t = i.y - (f.y > i.y ? 0 : f.h + Math.max(o, Ya(h))),r = f.h + o - (f.y < i.y && a.l ? a.l.offsetHeight : 0);
            Z(e, f);
            e.style.opacity = 0.5;
            e.style.margin = 0;
            A(500, [
                [d,"paddingTop",f.h + o,0],
                [h,"paddingTop",0,r],
                [e,"top",f.y,t,ea]
            ], s)
        }
        function s() {
            u(e, b, b != R && a.r != 0);
            window.setTimeout(function() {
                if (f) {
                    h.style.paddingTop = "";
                    e.style.opacity = 1;
                    j(e, "position",
                            "", "width", "", "height", "")
                }
                c(f)
            }, 0)
        }
    }

    function Xa(a, b) {
        var c = a.a,e = gb(c);
        c.style.visibility = "hidden";
        var d = new Image,h = Math.min(1, e.h / 65);
        var f = j(k("div"), "zIndex", 100, "verticalAlign", "middle");
        Z(f, e);
        document.body.appendChild(f);
        j(d, "width", Math.round(120 * h), "height", Math.round(65 * h), "src", "/images/swxa.gif");
        f.appendChild(j(k("div.s"), "textAlign", "center")).appendChild(d);
        window.setTimeout(function() {
            v(f);
            c.style.display = "none";
            b()
        }, 750);
    }

    function xa(a) {
        if (g.ls2 && !G) {
            w(0, "/sw204?cd=2&usg=" + g.ls2);
            delete g.ls2
        }
        a()
    }

    function Oa(a) {
        if (g.lb && !G) {
            if (!Y)Y = j(k("div", m('<div style="background-color:#fff;border:2px solid #73a6ff;padding:15px;width:40em"><h3><b>Please remember comments are public.</b></h3><br>Comments will be visible to others and identified by your Google Account nickname.<br><br><input id=wlac type=button value="Yes, continue."><input id=wlrg type=button value="Cancel"></div>', {lang:google.kHL})),
                    "position", "absolute");
            Y.style.top = "-900px";
            var b = document.body,c = document.documentElement;
            b.appendChild(Y);
            j(Y, "top", Math.round(c.clientHeight / 2 + (b.scrollTop || c.scrollTop) - Y.offsetHeight / 2) + "px", "left", Math.round(c.clientWidth / 2 + (b.scrollLeft || c.scrollLeft) - Y.offsetWidth / 2) + "px");
            p("wlac").onclick = function() {
                v(Y);
                delete g.lb;
                w(0, "/sw204?cd=1&usg=" + g.ls);
                a()
            };
            p("wlrg").onclick = l(v, Y);
            google.log("sw", "&sa=X&oi=sw_l")
        } else a()
    }

    function za(a, b) {
        w(0, "/search?q=info:" + aa(a + " " + g.q) + "&swm=5&hl=" + google.kHL,
                function(c) {
                    var e = c && c.match(db);
                    if (e && /class=wci/.test(e[1]))b(k("div", e[1]).firstChild); else {
                        if (!/^[a-zA-Z]+:\/\//.test(a))a = "http://" + a;
                        b(k("li.g", m('<h3 class=r><a class=l href="{url}">{url}</a></h3><button class=w10 title="Promote"></button><button class=w20 title="Remove"></button><div class=s><cite>{site} - </cite><button class=wci title="Comment"></button></div><div class=wce></div>', {url:n(a),site:n(a.replace("http://", ""))})))
                    }
                })
    }

    function gb(a) {
        var b =
                0,c = 0,e = a.offsetWidth,d = a.offsetHeight;
        do{
            b += a.offsetTop;
            c += a.offsetLeft
        } while (a = a.offsetParent);
        return{x:c,y:b,w:e,h:d}
    }

    function Z(a, b) {
        j(a, "position", "absolute", "top", b.y + "px", "left", b.x + "px", "width", b.w + "px", "height", b.h + "px")
    }

    function Ya(a) {
        var b = parseInt(window.getComputedStyle(a, null).getPropertyValue("margin-bottom"), 10);
        return b
    }

    function V(a, b) {
        var c = a;
        while (c = c.nextSibling)if (c.nodeType == 1 && (c.innerHTML && c.offsetHeight > 0 || c == b))return(!/\bg\b/.test(c.className)) && q(".g\\b", c, 1).pop() || c;
        return a.parentNode ? V(a.parentNode, b) : null
    }

    var S = "marginLeft",
            D,$ = {w10:[152,16],w20:[152,48],w21:[152,80],wci:[97,105]};

    function hb() {
        D = [];
        F = [];
        ma = 1;
        B = "";
        cb = k("div");
        Q = null;
        R = k("div");
        Ea = !/[&?]start=[1-9]/.test(window.location.href);
        var a = q("li.w\\d", document, 1);
        for (var b = 0,c; c = a[b++];)O(c, parseInt(c.className.match(/\bw(\d)/)[1], 10));
        I = 0;
        for (var b = 0,e; e = D[b++];)I = I << 5 ^ I >> 27 ^ e.e.length ^ e.b << 8;
        if (D.length) {
            u(R, D[D.length - 1].a, 1);
            var d = D[0];
            u(cb, d.b == 0 ? d.s : d.a);
            if (!Q) {
                Q = k("div");
                u(Q, R)
            }
        } else {
            var h = k("ol");
            h.appendChild(R);
            u(h, q("div", p("res"), 1)[0], 1);
            Q = k("div");
            u(Q, R);
            u(cb, Q);
        }
        var f = p("wnz");
        if (f) {
            oa = (pa = 0);
            f.onclick = ua
        }
        f = p("wrz");
        if (f) {
            (Ta = q("span", f, 1)[0]).onclick = Va;
            Ua = 0;
            if (g.ru) {
                U = 0;
                Sa = 1
            } else {
                U = 2;
                x(Ta)
            }
        }
        (new Image).src = "/images/swxa.gif";
        f = p("wpz");
        if (f) {
            q("span", f, 1)[0].onclick = l(Za, f);
            W = q("input", f);
            W.onclick = W.select
        }
    }

    function O(a, b) {
        if (!a)return{};
        var c = q("a.l", a) || q("a", a, 1)[0],e = c.href.match(/[\/.]google\.[.\w:]+\/url.*[?&]q=(.*?)(&|$)/),d = {e:e ? decodeURIComponent(e[1]) : c.href,c:D.length,a:a,b:b};
        d.g = a.style[S];
        if (b != 0)d.s = R; else {
            d.s = k("div");
            u(d.s, a);
            if (!Q)Q = d.s
        }
        d.R = c;
        d.r = 0;
        d.p = q("button.w1", a);
        d.m = q("button.w2", a);
        d.p.onclick = l(xa, l(fb, d, 0));
        d.m.onclick = l(xa, l(fb, d, 1));
        d.p.onmouseover = (d.m.onmouseover = (d.p.onmouseout = (d.m.onmouseout = jb)));
        if (d.d = q("span.w3", a))d.d.onclick = l(fb, d, 2);
        var h = q("button.wci", a);
        if (h) {
            d.C = (d.F = 0);
            d.j = q(".wcd", a);
            if (d.j) {
                d.i = n(q(".wct", a).innerHTML.replace(/<wbr>/g, ""), 1);
                q(".wcl", d.j).onclick = l(Ma, d)
            }
            h.onclick = l(Ma, d);
            h.onmouseover = (h.onmouseout = jb);
        }
        D.push(d);
        return d
    }

    function jb(a) {
        if (this.className in $) {
            this.style.backgroundPosition = a.type == "mouseout" ? "" : -$[this.className][0] + "px " + -$[this.className][1] + "px";
        }
    }

    google.sw = function(a) {
        g = a;
        hb()
    };
})();
if (!window.gbar || !gbar.close) {
    window.gbar = {};
    (function() {
        var b = window.gbar,f,h;
        b.qs = function(a) {
            var c = window.encodeURIComponent && (document.forms[0].q || "").value;
            if (c)a.href = a.href.replace(/([?&])q=[^&]*|$/, function(i, g) {
                return(g || "&") + "q=" + encodeURIComponent(c)
            })
        };
        function j(a, c) {
            a.visibility = h ? "hidden" : "visible";
            a.left = c + "px"
        }

        b.tg = function(a) {
            a = a || window.event;
            var c = 0,i,g = window.navExtra,d = document.getElementById("gbi"),e = a.target || a.srcElement;
            a.cancelBubble = true;
            if (!f) {
                f = document.createElement(Array.every || window.createPopup ? "iframe" : "div");
                f.frameBorder = "0";
                f.src = "#";
                d.parentNode.appendChild(f).id = "gbs";
                if (g)for (i in g)d.insertBefore(g[i], d.firstChild).className = "gb2";
                document.onclick = b.close
            }
            if (e.className != "gb3")e = e.parentNode;
            do c += e.offsetLeft; while (e = e.offsetParent);
            j(d.style, c);
            f.style.width = d.offsetWidth + "px";
            f.style.height = d.offsetHeight + "px";
            j(f.style, c);
            h = !h
        };
        b.close = function(a) {
            h && b.tg(a)
        }
    })();
    ;
}
;
(function () {
    var a = "google";
    if (window[a]) {
        window[a].a = {};
        window[a].b = 1;
        window[a].report = function(h, g, i) {
            var d = "";
        {
            if (window[a].pt) {
                d += "&srt=" + window[a].pt;
                delete window[a].pt
            }
            try {
                d += "&tran=" + window.external.tran
            } catch(n) {
            }
        }
        {
            var j = document.getElementById("csi");
            if (j.value)return;
            j.value = 1
        }
            var b = h.t,e = b.start;
            delete b.start;
            var k = [];
            for (var f in b)e && k.push(f + "." + (b[f] > e ? b[f] - e : e - b[f]));
            if (g)for (var l in g)d += "&" + l + "=" + g[l];
            var c = new Image,m = window[a].b++;
            window[a].a[m] = c;
            c.onload = (c.onerror = function() {
                delete window[a].a[m]
            });
            c.src = [i ? i : "/csi","?v=3","&s=" + (window[a].sn ? window[a].sn : "GWS") + "&action=",h.name,d,"&rt=",k.join(",")].join("");
            c = null
        }
    }
    ;
    if (google.timers && google.timers.load.t) {
        google.timers.load.t.xjs = (new Date).getTime();
        google.timers.load.t.ol && google.report(google.timers.load, {ei:google.kEI,e:google.kEXPI})
    }
    ;
})();
window.clk = function(b, c, d, e, f, g) {
    if (document.images) {
        var a = encodeURIComponent || escape;
        (new Image).src = ["/url?sa=T&source=web",c ? "&oi=" + a(c) : "",d ? "&cad=" + a(d) : "","&ct=",a(e),"&cd=",a(f),b ? "&url=" + a(b.replace(/#.*/, "")).replace(/\+/g, "%2B") : "","&ei=",google.kEI,g].join("")
    }
    return true
};
window.rwt = function(b, f, g, j, k, h, l) {
    var a = encodeURIComponent || escape,c = b.href.split("#");
{
    var d = google.j && google.j.en && location.href.split("#"),i = d && d[1] && d[1].match("(^|&)q=(.*?)(&|$)")
}
    var e = ["/url?sa=t&source=web",f ? "&oi=" + a(f) : "",g ? "&cad=" + a(g) : "","&ct=",a(j || "res"),"&cd=",a(k),"&url=",a(c[0]).replace(/\+/g, "%2B"),"&ei=",google.kEI,h ? "&usg=" + h : "",l,c[1] ? "#" + c[1] : ""].join("");
    if (i) {
        var m = ("&rct=j&q=" + i[2]).substring(0, 1948 - e.length);
        b.href = e.replace(/&usg=/, m + "&usg=")
    } else b.href = e;
    b.onmousedown =
    "";
    return true
};
if (google.y.first) {
    for (var a = 0,b; b = google.y.first[a]; ++a)b();
    delete google.y.first
}
for (a in google.y)google.y[a][1] ? google.y[a][1].apply(google.y[a][0]) : google.y[a][0].go();
google.y.x = google.x;
google.x = function(d, c) {
    c && c.apply(d);
    return false
};
google.y.first = [];
