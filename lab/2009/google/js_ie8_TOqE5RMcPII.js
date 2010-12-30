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
    var a = document.getElementById("tads"),b = document.getElementById("3po");
    google.rhs = function() {
        if (!google.drhs)if (document.getElementById("mbEnd") && (a || b)) {
            var d = google.getHeight(document.getElementById("rhsline")),c = a ? google.getHeight(a) : 0;
            if (b)c += google.getHeight(b) + 18;
            document.getElementById("rhspad").style.height = c > d ? Math.min(9999, c - d) + "px" : (google.isIE ? "" : 0)
        }
    };
    google.rhs();
    google.bind(window, "resize", google.rhs);
})();
(function() {
    var e = false,g = null,i = true,aa = e,k,l,m,n = "",o = g,r = g,s = g,t = -1,u,v,w,x,y,z,A,B,C,D = 0,E = 0,ba = e,F = g,G = 0;
    var ca;
    var H = 0;
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
        H = 0;
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
            google.bind(v, "beforedeactivate", function() {
                if (H) {
                    window.event.cancelBubble =
                    i;
                    window.event.returnValue = e
                }
                H = 0
            });
            google.bind(v, "keydown", Q);
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
        U();
        (new Image).src = "http://clients1.google.com/generate_204";
    }

    function na() {
        var a = document.createElement("style");
        document.getElementsByTagName("head")[0].appendChild(a);
        var b = g;
        b = a.styleSheet;
        var d = function(f, q) {
            b.addRule(f, q);
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
        d(".gac_s", "height:3px;font-size:1px" +
                    ";row-height:1px");
        var j = "white-space:nowrap;overflow:hidden;text-align:left;padding-left:3px;padding-right:3px" + ";padding-bottom:1px";
        d(".gac_c", j);
        d(".gac_d", "text-align:right;font-size:10px;padding:0 3px");
        d(".fl:link", "color:#77c");
        d(".fl:visited", "color:#77c");
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
            for (; w.rows.length;)w.deleteRow(-1);
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
        var b = r[a];
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
        a = window.event;
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
        b.completeString = c.innerText;
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
        a = window.event;
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
        H = 1;
        return e
    }

    function oa(a) {
        var b = 0,c = 0;
        var d = a.createTextRange(),j = document.selection.createRange();
        if (d.inRange(j)) {
            d.setEndPoint("EndToStart", j);
            b = d.text.length;
            d.setEndPoint("EndToEnd", j);
            c = d.text.length
        }
        return b && c && b == c ? b : 0
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
    g = e.styleSheet;
    google.addCSSRule = function(a, d) {
        for (var c = a.split(","),b = 0,h; h = c[b++];)g.addRule(h, d);
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
            var h = b.innerHTML;
            b.href = b.href.replace(/([?&])tbo=1(&|$)/, "$1") + (a ? "&tbo=1" : "");
            b.innerHTML = h;
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
