const Ha = "ͼ",
  Uf = typeof Symbol > "u" ? "__" + Ha : Symbol.for(Ha),
  Ka =
    typeof Symbol > "u"
      ? "__styleSet" + Math.floor(Math.random() * 1e8)
      : Symbol("styleSet"),
  Vf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Vi {
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [],
        f = /^@(\w+)\b/.exec(o[0]),
        u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d
              .split(/,\s*/)
              .map((O) => o.map((m) => O.replace(/&/, m)))
              .reduce((O, m) => O.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f)
            throw new RangeError(
              "The value of a property (" + d + ") should be a primitive value."
            );
          r(s(d), p, c, u);
        } else
          p != null &&
            c.push(
              d
                .replace(/_.*/, "")
                .replace(/[A-Z]/g, (O) => "-" + O.toLowerCase()) +
                ": " +
                p +
                ";"
            );
      }
      (c.length || u) &&
        a.push(
          (n && !f && !h ? o.map(n) : o).join(", ") + " {" + c.join(" ") + "}"
        );
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join("\n");
  }
  static newName() {
    let e = Vf[Uf] || 1;
    return (Vf[Uf] = e + 1), Ha + e.toString(36);
  }
  static mount(e, t, n) {
    let s = e[Ka],
      r = n && n.nonce;
    s ? r && s.setNonce(r) : (s = new Oy(e, r)),
      s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let qf = new Map();
class Oy {
  constructor(e, t) {
    let n = e.ownerDocument || e,
      s = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = qf.get(n);
      if (r) return (e[Ka] = r);
      (this.sheet = new s.CSSStyleSheet()), qf.set(n, this);
    } else
      (this.styleTag = n.createElement("style")),
        t && this.styleTag.setAttribute("nonce", t);
    (this.modules = []), (e[Ka] = this);
  }
  mount(e, t) {
    let n = this.sheet,
      s = 0,
      r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = this.modules.indexOf(l);
      if (
        (a < r && a > -1 && (this.modules.splice(a, 1), r--, (a = -1)), a == -1)
      ) {
        if ((this.modules.splice(r++, 0, l), n))
          for (let h = 0; h < l.rules.length; h++)
            n.insertRule(l.rules[h], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        (s += l.rules.length), r++;
      }
    }
    if (n)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 &&
        (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + "\n";
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l &&
        l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag &&
      this.styleTag.getAttribute("nonce") != e &&
      this.styleTag.setAttribute("nonce", e);
  }
}