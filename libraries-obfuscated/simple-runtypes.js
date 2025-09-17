function hr(i, e) {
  e === void 0 && (e = 512);
  var t;
  if (i === void 0) return "undefined";
  if (typeof i == "function") return i.toString();
  try {
    t = JSON.stringify(i);
  } catch {
    t = "" + i;
  }
  return t.length > e ? t.slice(0, e - 1) + "…" : t;
}
function t0(i, e) {
  (i.prototype = Object.create(e.prototype)),
    (i.prototype.constructor = i),
    cr(i, e);
}
function Eh(i) {
  return (
    (Eh = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Eh(i)
  );
}
function cr(i, e) {
  return (
    (cr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, s) {
          return (n.__proto__ = s), n;
        }),
    cr(i, e)
  );
}
function Ov() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Oo(i, e, t) {
  return (
    Ov()
      ? (Oo = Reflect.construct.bind())
      : (Oo = function (s, r, o) {
          var l = [null];
          l.push.apply(l, r);
          var a = Function.bind.apply(s, l),
            h = new a();
          return o && cr(h, o.prototype), h;
        }),
    Oo.apply(null, arguments)
  );
}
function gv(i) {
  return Function.toString.call(i).indexOf("[native code]") !== -1;
}
function tl(i) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (tl = function (n) {
      if (n === null || !gv(n)) return n;
      if (typeof n != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(n)) return e.get(n);
        e.set(n, s);
      }
      function s() {
        return Oo(n, arguments, Eh(this).constructor);
      }
      return (
        (s.prototype = Object.create(n.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        cr(s, n)
      );
    }),
    tl(i)
  );
}
var i0 = (function (i) {
    t0(e, i);
    function e(t, n, s) {
      var r;
      return (
        (r = i.call(this, t) || this),
        (r.name = "RuntypeError"),
        (r.reason = t),
        (r.path = s),
        (r.value = n),
        r
      );
    }
    return e;
  })(tl(Error)),
  Fn = (function (i) {
    t0(e, i);
    function e() {
      return i.apply(this, arguments) || this;
    }
    return e;
  })(tl(Error)),
  Ni = Symbol("SimpleRuntypesFail");
function si(i, e, t) {
  if (i === void 0) throw new i0(e, t, []);
  if (i === Ni) {
    var n;
    return (
      (n = {}),
      (n[Ni] = !0),
      (n.reason = e),
      (n.path = []),
      (n.value = void 0),
      n
    );
  } else
    throw new Fn(
      "failOrThrow must be undefined or the failSymbol, not " +
        JSON.stringify(i)
    );
}
function fr(i, e, t, n) {
  if ((n !== void 0 && e.path.push(n), i === void 0))
    throw new i0(e.reason, t, e.path);
  if (i === Ni) return e;
  throw new Fn(
    "failOrThrow must be undefined or the failSymbol, not " + JSON.stringify(i)
  );
}
var mv = Symbol("isPure");
function Si(i, e) {
  if (e === !0) return Object.assign(i, { isPure: mv });
  if (e === void 0 || e === !1) return i;
  throw new Fn('expected "isPure" or undefined as the second argument');
}
function Qr(i) {
  return !!i.isPure;
}
function Hn(i) {
  return typeof i != "object" || !i ? !1 : i[Ni];
}
function V$(i, e) {
  var t = i(e, Ni);
  return Hn(t) ? ((t.value = e), { ok: !1, error: t }) : { ok: !0, result: t };
}
var bv = Si(function (i, e) {
    return typeof i == "object" && !Array.isArray(i) && i !== null
      ? i
      : si(e, "expected an object", i);
  }, !0),
  yv = Si(function (i, e) {
    return typeof i == "string" ? i : si(e, "expected a string", i);
  }, !0);
function q$(i) {
  return yv;
}
function z$(i) {
  var e = Si(function (t, n) {
    return t === i ? i : si(n, "expected a literal: " + hr(i), t);
  }, !0);
  return (e.literal = i), e;
}
function I$(i) {
  var e = Qr(i),
    t = Si(function (n, s) {
      if (n !== void 0) return i(n, s);
    }, e);
  return t;
}
var xv = Si(function (i, e) {
  return Array.isArray(i) ? i : si(e, "expected an Array", i);
}, !0);
function N$(i, e) {
  var t = {},
    n = t.maxLength,
    s = t.minLength,
    r = Qr(i);
  return Si(function (o, l) {
    var a = xv(o, l);
    if (Hn(a)) return fr(l, a, o);
    if (n !== void 0 && a.length > n)
      return si(
        l,
        "expected the array to contain at most " + n + " elements",
        o
      );
    if (s !== void 0 && a.length < s)
      return si(
        l,
        "expected the array to contain at least " + s + " elements",
        o
      );
    for (var h = r ? a : new Array(a.length), c = 0; c < a.length; c++) {
      var f = i(a[c], Ni);
      if (Hn(f)) return fr(l, f, o, c);
      r || (h[c] = f);
    }
    return h;
  }, r);
}
function Sv(i) {
  for (var e in i)
    if (Object.prototype.hasOwnProperty.call(i, e) && !Qr(i[e])) return !1;
  return !0;
}
function wv(i, e) {
  var t = Sv(i),
    n = [].concat(Object.keys(i)),
    s = [].concat(Object.values(i)),
    r = Si(function (a, h) {
      if (typeof a != "object" || Array.isArray(a) || a === null)
        return si(h, "expected an object", a);
      for (var c = a, f = t ? c : {}, u = 0; u < n.length; u++) {
        var d = n[u],
          p = s[u],
          O = p(c[d], Ni);
        if (Hn(O))
          return d in c
            ? fr(h, O, a, d)
            : si(h, "missing key in record: " + hr(d));
        t || (f[d] = O);
      }
      {
        var m = [];
        for (var b in c)
          Object.prototype.hasOwnProperty.call(i, b) || m.push(b);
        if (m.length) return si(h, "invalid keys in record: " + hr(m), a);
      }
      return f;
    }, t),
    o = {};
  for (var l in i) o[l] = i[l];
  return (r.fields = o), r;
}
function Qv(i) {
  var e = i;
  if (e.fields) return e.fields;
}
function B$(i) {
  return wv(i);
}
function Pv(i, e) {
  var t = new Map();
  e.forEach(function (r) {
    var o = r.fields[i],
      l = o.literal;
    if (l === void 0)
      throw new Fn(
        "broken record type definition, " + r + "[" + i + "] is not a literal"
      );
    if (!(typeof l == "string" || typeof l == "number"))
      throw new Fn(
        "broken record type definition, " +
          r +
          "[" +
          i +
          "] must be a string or number, not " +
          hr(l)
      );
    t.set(l, r);
  });
  var n = e.every(function (r) {
      return Qr(r);
    }),
    s = Si(function (r, o) {
      var l = bv(r, o);
      if (Hn(l)) return fr(o, l, r);
      var a = l[i],
        h = t.get(a);
      return h === void 0
        ? si(
            o,
            "no Runtype found for discriminated union tag " + i + ": " + hr(a),
            r
          )
        : h(r, o);
    }, n);
  return (s.unions = e), s;
}
function kv(i) {
  for (var e = new Map(), t = 0; t < i.length; t++) {
    var n = i[t],
      s = Qv(n);
    if (!s) return;
    for (var r in s) {
      var o = s[r],
        l = o.literal;
      if (l !== void 0) {
        var a;
        e.has(r) || e.set(r, new Set()),
          (a = e.get(r)) === null || a === void 0 || a.add(l);
      }
    }
  }
  var h = [];
  if (
    (e.forEach(function (c, f) {
      c.size === i.length && h.push(f);
    }),
    !!h.length)
  )
    return h[0];
}
function G$() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  if (!e.length) throw new Fn("no runtypes given to union");
  var n = kv(e);
  if (n !== void 0) return Pv(n, e);
  var s = e.every(function (r) {
    return Qr(r);
  });
  return Si(function (r, o) {
    for (var l, a = 0; a < e.length; a++) {
      var h = e[a](r, Ni);
      if (Hn(h)) l = h;
      else return h;
    }
    return fr(o, l, r);
  }, s);
}