/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * lobster:
 *   - http://typekit.com/eulas/000000000000000000012224
 * proxima-nova:
 *   - http://typekit.com/eulas/000000000000000000017827
 *   - http://typekit.com/eulas/000000000000000000017828
 *   - http://typekit.com/eulas/000000000000000000017823
 *   - http://typekit.com/eulas/000000000000000000017824
 *   - http://typekit.com/eulas/000000000000000000017821
 *
 * © 2009-2020 Adobe Systems Incorporated. All Rights Reserved.
 */
if (!window.Typekit) window.Typekit = {};
window.Typekit.config = {
  a: "803144",
  c: [
    ".tk-proxima-nova",
    '"proxima-nova",sans-serif',
    ".tk-lobster",
    '"lobster",serif',
  ],
  fi: [173, 174, 175, 176, 5474, 6132],
  fc: [
    {
      id: 173,
      family: "proxima-nova",
      src:
        "https://use.typekit.net/af/bf5c6c/000000000000000000017827/27/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "600",
        style: "normal",
        display: "auto",
        subset_id: 2,
      },
    },
    {
      id: 174,
      family: "proxima-nova",
      src:
        "https://use.typekit.net/af/8dc819/000000000000000000017828/27/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "600",
        style: "italic",
        display: "auto",
        subset_id: 2,
      },
    },
    {
      id: 175,
      family: "proxima-nova",
      src:
        "https://use.typekit.net/af/3ae8bb/000000000000000000017823/27/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "400",
        style: "normal",
        display: "auto",
        subset_id: 2,
      },
    },
    {
      id: 176,
      family: "proxima-nova",
      src:
        "https://use.typekit.net/af/7dd23f/000000000000000000017824/27/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "400",
        style: "italic",
        display: "auto",
        subset_id: 2,
      },
    },
    {
      id: 5474,
      family: "proxima-nova",
      src:
        "https://use.typekit.net/af/3fc9b5/000000000000000000017821/27/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "300",
        style: "normal",
        display: "auto",
        subset_id: 2,
      },
    },
    {
      id: 6132,
      family: "lobster",
      src:
        "https://use.typekit.net/af/59a07a/000000000000000000012224/27/{format}{?primer,subset_id,fvd,v}",
      descriptors: {
        weight: "400",
        style: "normal",
        display: "auto",
        subset_id: 2,
      },
    },
  ],
  fn: ["lobster", ["n4"], "proxima-nova", ["i4", "i6", "n3", "n4", "n6"]],
  hn: "use.typekit.net",
  ht: "tk",
  js: "1.20.0",
  kt: "uot8zzd",
  l: "typekit",
  ps: 1,
  ping: "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
  pm: true,
  type: "configurable",
  vft: false,
};
/*{"k":"1.20.0","auto_updating":true,"last_published":"2015-08-26 18:50:14 UTC"}*/
(function (window, document, undefined) {
  if (!document.querySelector) {
    document.documentElement.className += " wf-inactive";
    return;
  }
  function aa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ba(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function h(a, b, c) {
    h =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? aa
        : ba;
    return h.apply(null, arguments);
  }
  var l =
    Date.now ||
    function () {
      return +new Date();
    };
  function da(a) {
    this.g = a || "-";
  }
  da.prototype.b = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++)
      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    return b.join(this.g);
  };
  function ea() {
    var a = [{ name: "font-family", value: m.c[n + 1] }];
    this.g = [m.c[n]];
    this.b = a;
  }
  function fa(a) {
    for (var b = a.g.join(","), c = [], d = 0; d < a.b.length; d++) {
      var e = a.b[d];
      c.push(e.name + ":" + e.value + ";");
    }
    return b + "{" + c.join("") + "}";
  }
  function q(a, b) {
    return (a & 65535) * b + ((((a >>> 16) * b) & 65535) << 16);
  }
  function r(a, b) {
    this.b = b || Array(Math.ceil(a / 32));
    if (!b) for (var c = 0; c < this.b.length; c++) this.b[c] = 0;
  }
  r.prototype.set = function (a) {
    if (Math.floor(a / 32 + 1) > this.b.length)
      throw Error("Index is out of bounds.");
    var b = Math.floor(a / 32);
    this.b[b] |= 1 << (a - 32 * b);
  };
  r.prototype.has = function (a) {
    if (Math.floor(a / 32 + 1) > this.b.length)
      throw Error("Index is out of bounds.");
    var b = Math.floor(a / 32);
    return !!(this.b[b] & (1 << (a - 32 * b)));
  };
  function ga(a, b, c) {
    this.b = a;
    this.i = b;
    this.g = new r(a, c);
  }
  var ha = [
    2449897292,
    4218179547,
    2675077685,
    1031960064,
    1478620578,
    1386343184,
    3194259988,
    2656050674,
    3012733295,
    2193273665,
  ];
  ga.prototype.has = function (a) {
    if ("string" !== typeof a && "number" !== typeof a)
      throw Error("Value should be a string or number.");
    for (var b = "number" === typeof a, c = 0; c < this.i; c++) {
      var d;
      if (b)
        (d = q(a & 4294967295, 3432918353)),
          (d = (d << 15) | (d >>> 17)),
          (d = q(d, 461845907)),
          (d ^= ha[c] || 0),
          (d = (d << 13) | (d >>> 19)),
          (d = q(d, 5) + 3864292196),
          (d ^= 4),
          (d ^= d >>> 16),
          (d = q(d, 2246822507)),
          (d ^= d >>> 13),
          (d = q(d, 3266489909)),
          (d ^= d >>> 16),
          (d = (d >>> 0) % this.b);
      else {
        d = ha[c] || 0;
        var e,
          f,
          g = a.length % 4,
          k = a.length - g;
        for (f = 0; f < k; f += 4)
          (e =
            ((a.charCodeAt(f + 0) & 4294967295) << 0) |
            ((a.charCodeAt(f + 1) & 4294967295) << 8) |
            ((a.charCodeAt(f + 2) & 4294967295) << 16) |
            ((a.charCodeAt(f + 3) & 4294967295) << 24)),
            (e = q(e, 3432918353)),
            (e = (e << 15) | (e >>> 17)),
            (e = q(e, 461845907)),
            (d ^= e),
            (d = (d << 13) | (d >>> 19)),
            (d = q(d, 5) + 3864292196);
        e = 0;
        switch (g) {
          case 3:
            e ^= (a.charCodeAt(f + 2) & 4294967295) << 16;
          case 2:
            e ^= (a.charCodeAt(f + 1) & 4294967295) << 8;
          case 1:
            (e ^= (a.charCodeAt(f + 0) & 4294967295) << 0),
              (e = q(e, 3432918353)),
              (e = (e << 15) | (e >>> 17)),
              (e = q(e, 461845907)),
              (d ^= e);
        }
        d ^= a.length;
        d = q(d ^ (d >>> 16), 2246822507);
        d = q(d ^ (d >>> 13), 3266489909);
        d = ((d ^ (d >>> 16)) >>> 0) % this.b;
      }
      if (!this.g.has(d)) return !1;
    }
    return !0;
  };
  function ia(a) {
    a.length % 4 && (a += Array(5 - (a.length % 4)).join("="));
    a = a.replace(/\-/g, "+").replace(/\_/g, "/");
    if (window.atob) a = window.atob(a);
    else {
      a = a.replace(/=+$/, "");
      if (1 == a.length % 4)
        throw Error(
          "'atob' failed: The string to be decoded is not correctly encoded."
        );
      for (
        var b = 0, c, d, e = 0, f = "";
        (d = a.charAt(e++));
        ~d && ((c = b % 4 ? 64 * c + d : d), b++ % 4)
          ? (f += String.fromCharCode(255 & (c >> ((-2 * b) & 6))))
          : 0
      )
        d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
          d
        );
      a = f;
    }
    c = [];
    for (b = 0; b < a.length; b += 4)
      c.push(
        (a.charCodeAt(b) << 24) |
          (a.charCodeAt(b + 1) << 16) |
          (a.charCodeAt(b + 2) << 8) |
          (a.charCodeAt(b + 3) << 0)
      );
    a = c.shift();
    b = c.shift();
    this.b = new ga(a, b, c);
  }
  ia.prototype.has = function (a) {
    if ("" === a) return !0;
    for (a = a.split("."); a.length; ) {
      var b = a.join("."),
        c = "*." + b;
      if (
        this.b.has(b) ||
        this.b.has(c) ||
        this.b.has(encodeURIComponent(b)) ||
        this.b.has(encodeURIComponent(c))
      )
        return !0;
      a.shift();
    }
    return !1;
  };
  function t(a, b, c, d) {
    b = a.b.createElement(b);
    if (c)
      for (var e in c)
        c.hasOwnProperty(e) &&
          ("style" == e ? (b.style.cssText = c[e]) : b.setAttribute(e, c[e]));
    d && b.appendChild(a.b.createTextNode(d));
    return b;
  }
  function u(a, b, c) {
    a = a.b.getElementsByTagName(b)[0];
    a || (a = document.documentElement);
    a.insertBefore(c, a.lastChild);
  }
  function ja(a, b) {
    a.b.body
      ? b()
      : a.b.addEventListener
      ? a.b.addEventListener("DOMContentLoaded", b)
      : a.b.attachEvent("onreadystatechange", function () {
          ("interactive" != a.b.readyState && "complete" != a.b.readyState) ||
            b();
        });
  }
  function v(a) {
    a.parentNode && a.parentNode.removeChild(a);
  }
  function y(a, b, c) {
    var d = b || [];
    c = c || [];
    b = a.className.split(/\s+/);
    for (var e, f = 0; f < d.length; f += 1) {
      e = !1;
      for (var g = 0; g < b.length; g += 1)
        if (d[f] === b[g]) {
          e = !0;
          break;
        }
      e || b.push(d[f]);
    }
    d = [];
    for (f = 0; f < b.length; f += 1) {
      e = !1;
      for (g = 0; g < c.length; g += 1)
        if (b[f] === c[g]) {
          e = !0;
          break;
        }
      e || d.push(b[f]);
    }
    a.className = d
      .join(" ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/, "");
  }
  function ka(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
      if (c[d] == b) return !0;
    return !1;
  }
  function z(a, b) {
    var c = t(a, "style");
    c.setAttribute("type", "text/css");
    c.styleSheet
      ? (u(a, "head", c), (c.styleSheet.cssText = b))
      : (c.appendChild(document.createTextNode(b)), u(a, "head", c));
  }
  function la(a, b, c) {
    var d = a.b.getElementsByTagName("head")[0];
    if (d) {
      var e = t(a, "script", { src: b }),
        f = !1;
      e.onload = e.onreadystatechange = function () {
        f ||
          (this.readyState &&
            "loaded" != this.readyState &&
            "complete" != this.readyState) ||
          ((f = !0),
          c && c(null),
          (e.onload = e.onreadystatechange = null),
          "HEAD" == e.parentNode.tagName && d.removeChild(e));
      };
      d.appendChild(e);
      setTimeout(function () {
        f || ((f = !0), c && c(Error("Script load timeout")));
      }, 5e3);
    }
  }
  function A(a, b, c) {
    this.g = a.g.document.documentElement;
    this.j = b;
    this.m = c;
    this.b = new da("-");
    this.o = !1 !== b.events;
    this.i = !1 !== b.classes;
  }
  function B(a) {
    if (a.i) {
      var b = ka(a.g, a.b.b("wf", "active")),
        c = [],
        d = [a.b.b("wf", "loading")];
      b || c.push(a.b.b("wf", "inactive"));
      y(a.g, c, d);
    }
    C(a, "inactive");
  }
  function C(a, b, c) {
    if (a.o && a.j[b])
      try {
        if (c) a.j[b](c.b, D(c));
        else a.j[b]();
      } catch (d) {
        console.error('Typekit: Error in "' + b + '" callback', d);
      }
    if (a.m[b])
      if (c) a.m[b](c.b, D(c));
      else a.m[b]();
  }
  function ma(a, b, c) {
    c = c || {};
    this.b = a;
    this.g = b;
    this.weight = c.weight || "400";
    this.style = c.style || "normal";
    this.B = c.primer || void 0;
    this.C = c.subset_id || void 0;
    this.display = c.display || "auto";
  }
  function E(a) {
    return ("tk-" + a.b).slice(0, 26) + "-" + D(a);
  }
  function F(a, b) {
    return new ma(b, a.g, {
      weight: a.weight,
      style: a.style,
      B: a.B,
      C: a.C,
      display: a.display,
    });
  }
  function D(a) {
    return a.style.charAt(0) + a.weight.charAt(0);
  }
  function oa() {
    var a = document,
      b = navigator.userAgent;
    if (/MSIE|Trident/.test(b) && (a.documentMode ? 9 > a.documentMode : 1))
      b = "i";
    else {
      a: {
        if (
          /AppleWebKit/.test(b) &&
          /Android/.test(b) &&
          !/OPR|Chrome|CrMo|CriOS/.test(b) &&
          (a = /Android ([^;)]+)/.exec(b)) &&
          a[1]
        ) {
          a = parseFloat(a[1]);
          a = 3.1 <= a && 4.1 > a;
          break a;
        }
        a = !1;
      }
      if (!a)
        a: {
          if (
            /Silk/.test(b) &&
            /Linux|Ubuntu|Android/.test(b) &&
            (b = /Silk\/([\d\._]+)/.exec(b)) &&
            b[1]
          ) {
            a = 2 <= parseFloat(b[1]);
            break a;
          }
          a = !1;
        }
      b = a ? "j" : "k";
    }
    return b;
  }
  function G(a) {
    this.b = a;
  }
  function H(a, b) {
    return a.b.replace(/\{([^\{\}]+)\}/g, function (a, d) {
      if ("?" == d.charAt(0)) {
        for (var e = d.slice(1).split(","), f = [], g = 0; g < e.length; g++)
          b[e[g]] && f.push(e[g] + "=" + encodeURIComponent(b[e[g]]));
        return f.length ? "?" + f.join("&") : "";
      }
      return encodeURIComponent(b[d] || "");
    });
  }
  function I() {
    this.b = [];
  }
  function pa(a, b) {
    for (var c = 0; c < b.length; c++) a.b.push(b[c]);
  }
  function J(a, b) {
    for (var c = 0; c < a.b.length; c++) b(a.b[c], c, a);
  }
  function qa(a, b) {
    if ("i" === b) {
      var c = {},
        d = new I();
      J(a, function (a) {
        c[a.b] || (c[a.b] = {});
        c[a.b][a.weight] || (c[a.b][a.weight] = []);
        c[a.b][a.weight].push(a);
      });
      for (var e in c)
        if (c.hasOwnProperty(e)) {
          for (
            var f = [400, 300, 200, 100, 500, 600, 700, 800, 900],
              g = 400,
              k = 0;
            k < f.length;
            k++
          )
            if (((g = f[k]), c[e][g])) {
              pa(d, c[e][g]);
              break;
            }
          f = [700, 800, 900, 600, 500, 400, 300, 200, 100];
          for (k = 0; k < f.length; k++) {
            var p = f[k];
            if (c[e][p] && g !== p) {
              pa(d, c[e][p]);
              break;
            }
          }
        }
      J(a, function (a) {
        a = F(a, a.b.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + D(a));
        d.b.push(a);
      });
      return d;
    }
    return "x" === b ? new I() : a;
  }
  function ra(a, b, c) {
    for (var d = [], e = 0; e < b.length; e++) {
      var f = b[e],
        g = H(new G(a.g), {
          format: f,
          primer: a.B,
          subset_id: a.C,
          fvd: D(a),
          extension: sa(f),
          token: c,
          v: "3",
        });
      "i" === f
        ? d.push("url(" + g + ")")
        : d.push("url(" + g + ') format("' + ta(f) + '")');
    }
    return d.join(",");
  }
  function ua(a, b, c, d) {
    if ("x" === b) return "";
    var e = [];
    e.push("font-family:" + (d ? E(a) : a.b));
    b = "k" === b ? ra(a, ["l", "d", "a"], c) : ra(a, [b], c);
    e.push("src:" + b);
    e.push("font-weight:" + a.weight);
    e.push("font-style:" + a.style);
    e.push("font-display:" + a.display);
    return "@font-face{" + e.join(";") + ";}";
  }
  function ta(a) {
    switch (a) {
      case "d":
        return "woff";
      case "i":
        return "eot";
      case "l":
        return "woff2";
      default:
        return "opentype";
    }
  }
  function sa(a) {
    switch (a) {
      case "d":
        return "woff";
      case "i":
        return "eot";
      case "l":
        return "woff2";
      default:
        return "otf";
    }
  }
  function K(a, b, c, d) {
    var e = [];
    J(a, function (a) {
      e.push(ua(a, b, c, d));
    });
    return e.join("");
  }
  function L(a, b) {
    this.g = a;
    this.i = b;
    this.b = t(this.g, "span", { "aria-hidden": "true" }, this.i);
  }
  function M(a) {
    u(a.g, "body", a.b);
  }
  function N(a) {
    return (
      "display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:" +
      a.b +
      " !important;font-weight:" +
      a.weight +
      " !important;font-style:" +
      a.style +
      " !important;"
    );
  }
  function wa(a, b, c, d, e, f, g, k) {
    this.D = a;
    this.H = b;
    this.u = c;
    this.b = d;
    this.w = g || "BESbswy";
    this.g = {};
    this.I = e || 3e3;
    this.G = k;
    this.A = f || null;
    this.i = new L(this.u, this.w);
    this.j = new L(this.u, this.w);
    this.m = new L(this.u, this.w);
    this.o = new L(this.u, this.w);
    a = this.G ? E(this.b) : this.b.b;
    this.i.b.style.cssText = N(F(this.b, a + ",serif"));
    this.j.b.style.cssText = N(F(this.b, a + ",sans-serif"));
    this.m.b.style.cssText = N(F(this.b, "serif"));
    this.o.b.style.cssText = N(F(this.b, "sans-serif"));
    M(this.i);
    M(this.j);
    M(this.m);
    M(this.o);
  }
  var O = { K: "serif", J: "sans-serif" },
    P = null;
  function xa() {
    if (null === P) {
      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
        window.navigator.userAgent
      );
      P =
        !!a &&
        (536 > parseInt(a[1], 10) ||
          (536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10)));
    }
    return P;
  }
  wa.prototype.start = function () {
    this.g.serif = this.m.b.offsetWidth;
    this.g["sans-serif"] = this.o.b.offsetWidth;
    this.F = l();
    ya(this);
  };
  function za(a, b, c) {
    for (var d in O)
      if (O.hasOwnProperty(d) && b === a.g[O[d]] && c === a.g[O[d]]) return !0;
    return !1;
  }
  function ya(a) {
    var b = a.i.b.offsetWidth,
      c = a.j.b.offsetWidth,
      d;
    (d = b === a.g.serif && c === a.g["sans-serif"]) ||
      (d = xa() && za(a, b, c));
    d
      ? l() - a.F >= a.I
        ? xa() && za(a, b, c) && (!a.A || a.A.hasOwnProperty(a.b.b))
          ? Q(a, a.D)
          : Q(a, a.H)
        : Aa(a)
      : Q(a, a.D);
  }
  function Aa(a) {
    setTimeout(
      h(function () {
        ya(this);
      }, a),
      50
    );
  }
  function Q(a, b) {
    setTimeout(
      h(function () {
        v(this.i.b);
        v(this.j.b);
        v(this.m.b);
        v(this.o.b);
        b(this.b);
      }, a),
      0
    );
  }
  function Ba(a, b, c, d, e, f, g) {
    this.i = a;
    this.u = b;
    this.b = d;
    this.m = c;
    this.g = e || 3e3;
    this.o = f || void 0;
    this.j = g;
  }
  Ba.prototype.start = function () {
    var a = this.m.g.document,
      b = this,
      c = l(),
      d = new Promise(function (d, e) {
        function k() {
          l() - c >= b.g
            ? e()
            : a.fonts
                .load(
                  b.b.style +
                    " " +
                    b.b.weight +
                    " 300px " +
                    (b.j ? E(b.b) : b.b.b),
                  b.o
                )
                .then(
                  function (a) {
                    1 <= a.length ? d() : setTimeout(k, 25);
                  },
                  function () {
                    e();
                  }
                );
        }
        k();
      }),
      e = new Promise(function (a, c) {
        setTimeout(c, b.g);
      });
    Promise.race([e, d]).then(
      function () {
        b.i(b.b);
      },
      function () {
        b.u(b.b);
      }
    );
  };
  function R(a, b, c, d) {
    this.w = a;
    this.b = b;
    this.g = 0;
    this.o = this.m = !1;
    this.A = c;
    this.u = d;
  }
  var S = null;
  function Ca(a, b, c) {
    var d = {},
      e = b.b.length;
    if (!e && c) B(a.b);
    else {
      a.g += e;
      c && (a.m = c);
      var f = [];
      J(b, function (b) {
        var c = a.b;
        c.i && y(c.g, [c.b.b("wf", b.b, D(b), "loading")]);
        C(c, "fontloading", b);
        c = null;
        if (null === S)
          if (window.FontFace) {
            var e = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
              na = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              );
            S = e
              ? 42 < parseInt(e[1], 10)
              : na && /Apple/.exec(window.navigator.vendor)
              ? 603 <= parseInt(na[1], 10)
              : !0;
          } else S = !1;
        S
          ? (c = new Ba(
              h(a.i, a),
              h(a.j, a),
              a.w,
              b,
              a.A,
              "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006",
              a.u
            ))
          : (c = new wa(
              h(a.i, a),
              h(a.j, a),
              a.w,
              b,
              a.A,
              d,
              "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006",
              a.u
            ));
        f.push(c);
      });
      for (b = 0; b < f.length; b++) f[b].start();
    }
  }
  R.prototype.i = function (a) {
    var b = this.b;
    b.i &&
      y(
        b.g,
        [b.b.b("wf", a.b, D(a), "active")],
        [b.b.b("wf", a.b, D(a), "loading"), b.b.b("wf", a.b, D(a), "inactive")]
      );
    C(b, "fontactive", a);
    this.o = !0;
    Da(this);
  };
  R.prototype.j = function (a) {
    var b = this.b;
    if (b.i) {
      var c = ka(b.g, b.b.b("wf", a.b, D(a), "active")),
        d = [],
        e = [b.b.b("wf", a.b, D(a), "loading")];
      c || d.push(b.b.b("wf", a.b, D(a), "inactive"));
      y(b.g, d, e);
    }
    C(b, "fontinactive", a);
    Da(this);
  };
  function Da(a) {
    !--a.g &&
      a.m &&
      (a.o
        ? ((a = a.b),
          a.i &&
            y(
              a.g,
              [a.b.b("wf", "active")],
              [a.b.b("wf", "loading"), a.b.b("wf", "inactive")]
            ),
          C(a, "active"))
        : B(a.b));
  }
  function T(a) {
    this.b = a;
    this.m = null;
    this.g = [];
    this.j = this.w = null;
    this.u = new I();
    this.o = this.i = null;
  }
  var Ea = null,
    Fa = "00000000000000003b9b12ea 00000000000000003b9b12ed 00000000000000003b9b12ef 00000000000000003b9b12f0 00000000000000003b9b12f2 00000000000000003b9b12f3".split(
      " "
    );
  T.prototype.supportsConfiguredBrowser = function () {
    return !0;
  };
  T.prototype.init = function () {
    if (0 < this.g.length) {
      for (var a = [], b = 0; b < this.g.length; b++) a.push(fa(this.g[b]));
      z(this.b, a.join(""));
    }
  };
  T.prototype.load = function (a, b, c) {
    var d = this;
    c = c || {};
    if (this.j && ((a = location.hostname), !this.j.has(a))) {
      console.error(
        'Typekit: the domain "' +
          a +
          '" isn\'t in the list of published domains for kit "' +
          this.w +
          '".'
      );
      B(new A(this.b, c, {}));
      return;
    }
    a = c.timeout;
    var e = !!c.async,
      f = oa(),
      g = qa(this.u, f);
    c = new A(this.b, c, {
      active: function () {
        if (e) {
          var a = K(g, f, d.i, !1);
          z(d.b, a);
        }
        if (d.m) {
          var a = d.m,
            b = d.b,
            c = a.m,
            k = (window.__adobewebfontsappname__ || a.app || "")
              .toString()
              .substr(0, 20),
            b = b.g.location.hostname || b.i.location.hostname,
            p = [],
            w = [];
          window.Typekit
            ? (window.Typekit.fonts || (window.Typekit.fonts = []),
              (w = window.Typekit.fonts))
            : window.TypekitPreview &&
              (window.TypekitPreview.fonts ||
                (window.TypekitPreview.fonts = []),
              (w = window.TypekitPreview.fonts));
          for (var x = 0; x < a.b.length; x++) {
            for (var va = !1, ca = 0; ca < w.length; ca++)
              if (a.b[x] === w[ca]) {
                va = !0;
                break;
              }
            va || (p.push(a.b[x]), w.push(a.b[x]));
          }
          p.length &&
            Ga(
              H(c, {
                s: a.j,
                k: a.o,
                app: k,
                ht: a.i,
                h: b,
                f: p.join("."),
                a: a.g,
                js: a.version,
                e: "js",
                _: (+new Date()).toString(),
              })
            );
        }
      },
      inactive: function () {
        if (e) {
          var a = K(g, f, d.i, !1);
          z(d.b, a);
        }
      },
    });
    if (g.b.length) {
      var k = K(g, f, this.i, e);
      z(this.b, k);
      var p = new R(this.b, c, a, e);
      ja(d.b, function () {
        Ca(p, g, b);
      });
    } else B(c);
  };
  function Ha(a, b) {
    this.j = a;
    this.g = b;
    this.b = [];
  }
  Ha.prototype.i = function (a) {
    this.b.push(a);
  };
  Ha.prototype.load = function (a, b) {
    var c = a,
      d = b || {};
    "string" == typeof c
      ? (c = [c])
      : (c && c.length) || ((d = c || {}), (c = []));
    if (c.length)
      for (var e = this, f = c.length, g = 0; g < c.length; g++)
        Ia(this, c[g], function () {
          --f || Ja(e, d);
        });
    else Ja(this, d);
  };
  function Ia(a, b, c) {
    b = H(a.j, { id: b });
    la(a.g, b, c);
  }
  function Ja(a, b) {
    if (a.b.length) {
      for (var c = new A(a.g, b, {}), d = 0; d < a.b.length; d++) a.b[d].init();
      c.i && y(c.g, [c.b.b("wf", "loading")]);
      C(c, "loading");
      for (c = 0; c < a.b.length; c++)
        a.b[c].load(null, c == a.b.length - 1, b);
      a.b = [];
    }
  }
  function Ka() {
    var a = m.ps,
      b = m.ht,
      c = La,
      d = m.a,
      e = m.kt,
      f = m.js,
      g = m.l;
    this.m = new G(m.ping);
    this.j = a;
    this.i = b;
    this.b = c || [];
    this.g = d || null;
    this.o = e || null;
    this.version = f || null;
    this.app = g || null;
  }
  function Ga(a) {
    var b = new Image(1, 1),
      c = !1;
    b.src = a;
    b.onload = function () {
      c = !0;
      b.onload = null;
    };
    setTimeout(function () {
      c || ((b.src = "about:blank"), (b.onload = null));
    }, 3e3);
  }
  var Ma = new (function () {
    var a = window;
    this.g = this.i = a;
    this.b = this.g.document;
  })();
  window.Typekit || (window.Typekit = {});
  if (!window.Typekit.load) {
    var U = new Ha(
      new G("//" + (window.Typekit.config || {}).hn + "/{id}.js"),
      Ma
    );
    window.Typekit.load = function () {
      U.load.apply(U, arguments);
    };
    window.Typekit.addKit = function () {
      U.i.apply(U, arguments);
    };
  }
  for (
    var V, m = window.Typekit.config || {}, La = [], Na = m.fc, Oa = 0;
    Oa < Na.length;
    Oa++
  )
    La.push(Na[Oa].id);
  V = new T(Ma);
  m.ping && (V.m = new Ka());
  m.vft && (V.o = m.vft);
  if (m.fc)
    for (var W = m.fc, X = 0; X < W.length; X++) {
      var Y = W[X].src,
        Pa = W[X].descriptors || {},
        Qa;
      if ((Qa = V.o))
        null === Ea &&
          (Ea =
            window.CSS &&
            window.CSS.supports &&
            CSS.supports("font-variation-settings", '"wght" 400')),
          (Qa = Ea);
      if (Qa && 1 === Pa.subset_id)
        for (var Z = 0; Z < Fa.length; Z++)
          if (-1 !== Y.indexOf(Fa[Z])) {
            Y = Y.replace(Fa[Z], "00000000000000003b9b12ef");
            break;
          }
      V.u.b.push(new ma(W[X].family, Y, W[X].descriptors));
    }
  if (m.dl) {
    var Ra = m.dl;
    try {
      V.j = new ia(Ra);
    } catch (a) {}
  }
  m.kt && (V.w = m.kt);
  m.token && (V.i = m.token);
  if (m.c) for (var n = 0; n < m.c.length; n += 2) V.g.push(new ea());
  window.Typekit.addKit(V);
  if (window.WebFont)
    try {
      window.Typekit.load();
    } catch (a) {}
})(this, document);
