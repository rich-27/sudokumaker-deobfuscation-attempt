class he {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(
        `Invalid position ${e} in document of length ${this.length}`
      );
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(
        `Invalid line number ${e} in ${this.lines}-line document`
      );
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, n) {
    [e, t] = qn(this, e, t);
    let s = [];
    return (
      this.decompose(0, e, s, 2),
      n.length && n.decompose(0, n.length, s, 3),
      this.decompose(t, this.length, s, 1),
      Kt.from(s, this.length - (t - e) + n.length)
    );
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = qn(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), Kt.from(n, t - e);
  }
  eq(e) {
    if (e == this) return !0;
    if (e.length != this.length || e.lines != this.lines) return !1;
    let t = this.scanIdentical(e, 1),
      n = this.length - this.scanIdentical(e, -1),
      s = new Ts(this),
      r = new Ts(e);
    for (let o = t, l = t; ; ) {
      if (
        (s.next(o),
        r.next(o),
        (o = 0),
        s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
      )
        return !1;
      if (((l += s.value.length), s.done || l >= n)) return !0;
    }
  }
  iter(e = 1) {
    return new Ts(this, e);
  }
  iterRange(e, t = this.length) {
    return new Kp(this, e, t);
  }
  iterLines(e, t) {
    let n;
    if (e == null) n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      n = this.iterRange(
        s,
        Math.max(
          s,
          t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to
        )
      );
    }
    return new Jp(n);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {}
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0]
      ? he.empty
      : e.length <= 32
      ? new ve(e)
      : Kt.from(ve.split(e, []));
  }
}
class ve extends he {
  constructor(e, t = J1(e)) {
    super(), (this.text = e), (this.length = t);
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r],
        l = s + o.length;
      if ((t ? n : l) >= e) return new ey(s, l, n, o);
      (s = l + 1), n++;
    }
  }
  decompose(e, t, n, s) {
    let r =
      e <= 0 && t >= this.length
        ? this
        : new ve(
            _f(this.text, e, t),
            Math.min(t, this.length) - Math.max(0, e)
          );
    if (s & 1) {
      let o = n.pop(),
        l = ro(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32) n.push(new ve(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        n.push(new ve(l.slice(0, a)), new ve(l.slice(a)));
      }
    } else n.push(r);
  }
  replace(e, t, n) {
    if (!(n instanceof ve)) return super.replace(e, t, n);
    [e, t] = qn(this, e, t);
    let s = ro(this.text, ro(n.text, _f(this.text, 0, e)), t),
      r = this.length + n.length - (t - e);
    return s.length <= 32 ? new ve(s, r) : Kt.from(ve.split(s, []), r);
  }
  sliceString(e, t = this.length, n = "\n") {
    [e, t] = qn(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o],
        a = r + l.length;
      r > e && o && (s += n),
        e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)),
        (r = a + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [],
      s = -1;
    for (let r of e)
      n.push(r),
        (s += r.length + 1),
        n.length == 32 && (t.push(new ve(n, s)), (n = []), (s = -1));
    return s > -1 && t.push(new ve(n, s)), t;
  }
}
class Kt extends he {
  constructor(e, t) {
    super(), (this.children = e), (this.length = t), (this.lines = 0);
    for (let n of e) this.lines += n.lines;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r],
        l = s + o.length,
        a = n + o.lines - 1;
      if ((t ? a : l) >= e) return o.lineInner(e, t, n, s);
      (s = l + 1), (n = a + 1);
    }
  }
  decompose(e, t, n, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r],
        a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? n.push(l) : l.decompose(e - o, t - o, n, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if ((([e, t] = qn(this, e, t)), n.lines < this.lines))
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s],
          l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, n),
            h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return (c[s] = a), new Kt(c, this.length - (t - e) + n.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = "\n") {
    [e, t] = qn(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r],
        a = o + l.length;
      o > e && r && (s += n),
        e < a && t > o && (s += l.sliceString(e - o, t - o, n)),
        (o = a + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Kt)) return 0;
    let n = 0,
      [s, r, o, l] =
        t > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l) return n;
      let a = this.children[s],
        h = e.children[r];
      if (a != h) return n + a.scanIdentical(h, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, s) => n + s.length + 1, -1)) {
    let n = 0;
    for (let d of e) n += d.lines;
    if (n < 32) {
      let d = [];
      for (let p of e) p.flatten(d);
      return new ve(d, t);
    }
    let s = Math.max(32, n >> 5),
      r = s << 1,
      o = s >> 1,
      l = [],
      a = 0,
      h = -1,
      c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof Kt) for (let O of d.children) f(O);
      else
        d.lines > o && (a > o || !a)
          ? (u(), l.push(d))
          : d instanceof ve &&
            a &&
            (p = c[c.length - 1]) instanceof ve &&
            d.lines + p.lines <= 32
          ? ((a += d.lines),
            (h += d.length + 1),
            (c[c.length - 1] = new ve(
              p.text.concat(d.text),
              p.length + 1 + d.length
            )))
          : (a + d.lines > s && u(),
            (a += d.lines),
            (h += d.length + 1),
            c.push(d));
    }
    function u() {
      a != 0 &&
        (l.push(c.length == 1 ? c[0] : Kt.from(c, h)),
        (h = -1),
        (a = c.length = 0));
    }
    for (let d of e) f(d);
    return u(), l.length == 1 ? l[0] : new Kt(l, t);
  }
}
he.empty = new ve([""], 0);
function J1(i) {
  let e = -1;
  for (let t of i) e += t.length + 1;
  return e;
}
function ro(i, e, t = 0, n = 1e9) {
  for (let s = 0, r = 0, o = !0; r < i.length && s <= n; r++) {
    let l = i[r],
      a = s + l.length;
    a >= t &&
      (a > n && (l = l.slice(0, n - s)),
      s < t && (l = l.slice(t - s)),
      o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
      (s = a + 1);
  }
  return e;
}
function _f(i, e, t) {
  return ro(i, [""], e, t);
}
class Ts {
  constructor(e, t = 1) {
    (this.dir = t),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ""),
      (this.nodes = [e]),
      (this.offsets = [
        t > 0 ? 1 : (e instanceof ve ? e.text.length : e.children.length) << 1,
      ]);
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1,
        s = this.nodes[n],
        r = this.offsets[n],
        o = r >> 1,
        l = s instanceof ve ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0) return (this.done = !0), (this.value = ""), this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (((this.offsets[n] += t), e == 0))
          return (this.lineBreak = !0), (this.value = "\n"), this;
        e--;
      } else if (s instanceof ve) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (((this.offsets[n] += t), a.length > Math.max(0, e)))
          return (
            (this.value =
              e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)),
            this
          );
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length
          ? ((e -= a.length), (this.offsets[n] += t))
          : (t < 0 && this.offsets[n]--,
            this.nodes.push(a),
            this.offsets.push(
              t > 0
                ? 1
                : (a instanceof ve ? a.text.length : a.children.length) << 1
            ));
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
      this.nextInner(e, this.dir)
    );
  }
}
class Kp {
  constructor(e, t, n) {
    (this.value = ""),
      (this.done = !1),
      (this.cursor = new Ts(e, t > n ? -1 : 1)),
      (this.pos = t > n ? e.length : 0),
      (this.from = Math.min(t, n)),
      (this.to = Math.max(t, n));
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ""), (this.done = !0), this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), (n -= e);
    let { value: s } = this.cursor.next(e);
    return (
      (this.pos += (s.length + e) * t),
      (this.value =
        s.length <= n ? s : t < 0 ? s.slice(s.length - n) : s.slice(0, n)),
      (this.done = !this.value),
      this
    );
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    );
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Jp {
  constructor(e) {
    (this.inner = e),
      (this.afterBreak = !0),
      (this.value = ""),
      (this.done = !1);
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: s } = this.inner.next(e);
    return (
      t && this.afterBreak
        ? ((this.value = ""), (this.afterBreak = !1))
        : t
        ? ((this.done = !0), (this.value = ""))
        : n
        ? this.afterBreak
          ? (this.value = "")
          : ((this.afterBreak = !0), this.next())
        : ((this.value = s), (this.afterBreak = !1)),
      this
    );
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" &&
  ((he.prototype[Symbol.iterator] = function () {
    return this.iter();
  }),
  (Ts.prototype[Symbol.iterator] =
    Kp.prototype[Symbol.iterator] =
    Jp.prototype[Symbol.iterator] =
      function () {
        return this;
      }));
class ey {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.number = n), (this.text = s);
  }
  get length() {
    return this.to - this.from;
  }
}
function qn(i, e, t) {
  return (
    (e = Math.max(0, Math.min(i.length, e))),
    [e, Math.max(e, Math.min(i.length, t))]
  );
}
let En =
  "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o"
    .split(",")
    .map((i) => (i ? parseInt(i, 36) : 1));
for (let i = 1; i < En.length; i++) En[i] += En[i - 1];
function ty(i) {
  for (let e = 1; e < En.length; e += 2) if (En[e] > i) return En[e - 1] <= i;
  return !1;
}
function Ef(i) {
  return i >= 127462 && i <= 127487;
}
const Wf = 8205;
function Be(i, e, t = !0, n = !0) {
  return (t ? eO : iy)(i, e, n);
}
function eO(i, e, t) {
  if (e == i.length) return e;
  e && tO(i.charCodeAt(e)) && iO(i.charCodeAt(e - 1)) && e--;
  let n = Ve(i, e);
  for (e += $t(n); e < i.length; ) {
    let s = Ve(i, e);
    if (n == Wf || s == Wf || (t && ty(s))) (e += $t(s)), (n = s);
    else if (Ef(s)) {
      let r = 0,
        o = e - 2;
      for (; o >= 0 && Ef(Ve(i, o)); ) r++, (o -= 2);
      if (r % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function iy(i, e, t) {
  for (; e > 0; ) {
    let n = eO(i, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function tO(i) {
  return i >= 56320 && i < 57344;
}
function iO(i) {
  return i >= 55296 && i < 56320;
}
function Ve(i, e) {
  let t = i.charCodeAt(e);
  if (!iO(t) || e + 1 == i.length) return t;
  let n = i.charCodeAt(e + 1);
  return tO(n) ? ((t - 55296) << 10) + (n - 56320) + 65536 : t;
}
function ac(i) {
  return i <= 65535
    ? String.fromCharCode(i)
    : ((i -= 65536),
      String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function $t(i) {
  return i < 65536 ? 1 : 2;
}
const ja = /\r\n?|\n/;
var Ie = (function (i) {
  return (
    (i[(i.Simple = 0)] = "Simple"),
    (i[(i.TrackDel = 1)] = "TrackDel"),
    (i[(i.TrackBefore = 2)] = "TrackBefore"),
    (i[(i.TrackAfter = 3)] = "TrackAfter"),
    i
  );
})(Ie || (Ie = {}));
class ni {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  get empty() {
    return (
      this.sections.length == 0 ||
      (this.sections.length == 2 && this.sections[1] < 0)
    );
  }
  iterGaps(e) {
    for (let t = 0, n = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++],
        o = this.sections[t++];
      o < 0 ? (e(n, s, r), (s += r)) : (s += o), (n += r);
    }
  }
  iterChangedRanges(e, t = !1) {
    La(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++],
        s = this.sections[t++];
      s < 0 ? e.push(n, s) : e.push(s, n);
    }
    return new ni(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : nO(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : Ua(this, e, t);
  }
  mapPos(e, t = -1, n = Ie.Simple) {
    let s = 0,
      r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++],
        a = this.sections[o++],
        h = s + l;
      if (a < 0) {
        if (h > e) return r + (e - s);
        r += l;
      } else {
        if (
          n != Ie.Simple &&
          h >= e &&
          ((n == Ie.TrackDel && s < e && h > e) ||
            (n == Ie.TrackBefore && s < e) ||
            (n == Ie.TrackAfter && h > e))
        )
          return null;
        if (h > e || (h == e && t < 0 && !l))
          return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (e > s)
      throw new RangeError(
        `Position ${e} is out of range for changeset of length ${s}`
      );
    return r;
  }
  touchesRange(e, t = e) {
    for (let n = 0, s = 0; n < this.sections.length && s <= t; ) {
      let r = this.sections[n++],
        o = this.sections[n++],
        l = s + r;
      if (o >= 0 && s <= t && l >= e) return s < e && l > t ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++],
        s = this.sections[t++];
      e += (e ? " " : "") + n + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (
      !Array.isArray(e) ||
      e.length % 2 ||
      e.some((t) => typeof t != "number")
    )
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ni(e);
  }
  static create(e) {
    return new ni(e);
  }
}
class Xe extends ni {
  constructor(e, t) {
    super(e), (this.inserted = t);
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError(
        "Applying change set to a document with the wrong length"
      );
    return (
      La(this, (t, n, s, r, o) => (e = e.replace(s, s + (n - t), o)), !1), e
    );
  }
  mapDesc(e, t = !1) {
    return Ua(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(),
      n = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s],
        l = t[s + 1];
      if (l >= 0) {
        (t[s] = l), (t[s + 1] = o);
        let a = s >> 1;
        for (; n.length < a; ) n.push(he.empty);
        n.push(o ? e.slice(r, r + o) : he.empty);
      }
      r += o;
    }
    return new Xe(t, n);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : nO(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : Ua(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    La(this, e, t);
  }
  get desc() {
    return ni.create(this.sections);
  }
  filter(e) {
    let t = [],
      n = [],
      s = [],
      r = new qs(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || (l == a && r.len == 0); ) {
        if (r.done) break e;
        let c = Math.min(r.len, a - l);
        Fe(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        Fe(t, c, f), f > 0 && _i(n, t, r.text), r.forward(c), (l += c);
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done) break e;
        let c = Math.min(r.len, h - l);
        Fe(t, c, -1),
          Fe(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0),
          r.forward(c),
          (l += c);
      }
    }
    return { changes: new Xe(t, n), filtered: ni.create(s) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t],
        s = this.sections[t + 1];
      s < 0
        ? e.push(n)
        : s == 0
        ? e.push([n])
        : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, n) {
    let s = [],
      r = [],
      o = 0,
      l = null;
    function a(c = !1) {
      if (!c && !s.length) return;
      o < t && Fe(s, t - o, -1);
      let f = new Xe(s, r);
      (l = l ? l.compose(f.map(l)) : f), (s = []), (r = []), (o = 0);
    }
    function h(c) {
      if (Array.isArray(c)) for (let f of c) h(f);
      else if (c instanceof Xe) {
        if (c.length != t)
          throw new RangeError(
            `Mismatched change set length (got ${c.length}, expected ${t})`
          );
        a(), (l = l ? l.compose(c.map(l)) : c);
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(
            `Invalid change range ${f} to ${u} (in doc of length ${t})`
          );
        let p = d
            ? typeof d == "string"
              ? he.of(d.split(n || ja))
              : d
            : he.empty,
          O = p.length;
        if (f == u && O == 0) return;
        f < o && a(),
          f > o && Fe(s, f - o, -1),
          Fe(s, u - f, O),
          _i(r, s, p),
          (o = u);
      }
    }
    return h(e), a(!l), l;
  }
  static empty(e) {
    return new Xe(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [],
      n = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number") t.push(r, -1);
      else {
        if (
          !Array.isArray(r) ||
          typeof r[0] != "number" ||
          r.some((o, l) => l && typeof o != "string")
        )
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1) t.push(r[0], 0);
        else {
          for (; n.length < s; ) n.push(he.empty);
          (n[s] = he.of(r.slice(1))), t.push(r[0], n[s].length);
        }
      }
    }
    return new Xe(t, n);
  }
  static createSet(e, t) {
    return new Xe(e, t);
  }
}
function Fe(i, e, t, n = !1) {
  if (e == 0 && t <= 0) return;
  let s = i.length - 2;
  s >= 0 && t <= 0 && t == i[s + 1]
    ? (i[s] += e)
    : e == 0 && i[s] == 0
    ? (i[s + 1] += t)
    : n
    ? ((i[s] += e), (i[s + 1] += t))
    : i.push(e, t);
}
function _i(i, e, t) {
  if (t.length == 0) return;
  let n = (e.length - 2) >> 1;
  if (n < i.length) i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; ) i.push(he.empty);
    i.push(t);
  }
}
function La(i, e, t) {
  let n = i.inserted;
  for (let s = 0, r = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++],
      a = i.sections[o++];
    if (a < 0) (s += l), (r += l);
    else {
      let h = s,
        c = r,
        f = he.empty;
      for (
        ;
        (h += l),
          (c += a),
          a && n && (f = f.append(n[(o - 2) >> 1])),
          !(t || o == i.sections.length || i.sections[o + 1] < 0);

      )
        (l = i.sections[o++]), (a = i.sections[o++]);
      e(s, h, r, c, f), (s = h), (r = c);
    }
  }
}
function Ua(i, e, t, n = !1) {
  let s = [],
    r = n ? [] : null,
    o = new qs(i),
    l = new qs(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      Fe(s, h, -1), o.forward(h), l.forward(h);
    } else if (
      l.ins >= 0 &&
      (o.ins < 0 ||
        a == o.i ||
        (o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
    ) {
      let h = l.len;
      for (Fe(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 &&
          a < o.i &&
          o.len <= c &&
          (Fe(s, 0, o.ins), r && _i(r, s, o.text), (a = o.i)),
          o.forward(c),
          (h -= c);
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0,
        c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          (h += f), (c -= f), l.forward(f);
        } else if (l.ins == 0 && l.len < c) (c -= l.len), l.next();
        else break;
      Fe(s, h, a < o.i ? o.ins : 0),
        r && a < o.i && _i(r, s, o.text),
        (a = o.i),
        o.forward(o.len - c);
    } else {
      if (o.done && l.done) return r ? Xe.createSet(s, r) : ni.create(s);
      throw new Error("Mismatched change set lengths");
    }
}
function nO(i, e, t = !1) {
  let n = [],
    s = t ? [] : null,
    r = new qs(i),
    o = new qs(e);
  for (let l = !1; ; ) {
    if (r.done && o.done) return s ? Xe.createSet(n, s) : ni.create(n);
    if (r.ins == 0) Fe(n, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Fe(n, 0, o.ins, l), s && _i(s, n, o.text), o.next();
    else {
      if (r.done || o.done) throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len),
          h = n.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Fe(n, a, c, l), s && c && _i(s, n, o.text);
        } else
          o.ins == -1
            ? (Fe(n, r.off ? 0 : r.len, a, l), s && _i(s, n, r.textBit(a)))
            : (Fe(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, l),
              s && !o.off && _i(s, n, o.text));
        (l = (r.ins > a || (o.ins >= 0 && o.len > a)) && (l || n.length > h)),
          r.forward2(a),
          o.forward(a);
      }
    }
  }
}
class qs {
  constructor(e) {
    (this.set = e), (this.i = 0), this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0);
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set,
      t = (this.i - 2) >> 1;
    return t >= e.length ? he.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set,
      n = (this.i - 2) >> 1;
    return n >= t.length && !e
      ? he.empty
      : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e));
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
      ? this.next()
      : ((this.ins -= e), (this.off += e));
  }
}
class an {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.flags = n);
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let n, s;
    return (
      this.empty
        ? (n = s = e.mapPos(this.from, t))
        : ((n = e.mapPos(this.from, 1)), (s = e.mapPos(this.to, -1))),
      n == this.from && s == this.to ? this : new an(n, s, this.flags)
    );
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return v.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return v.range(this.anchor, n);
  }
  eq(e, t = !1) {
    return (
      this.anchor == e.anchor &&
      this.head == e.head &&
      (!t || !this.empty || this.assoc == e.assoc)
    );
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return v.range(e.anchor, e.head);
  }
  static create(e, t, n) {
    return new an(e, t, n);
  }
}
class v {
  constructor(e, t) {
    (this.ranges = e), (this.mainIndex = t);
  }
  map(e, t = -1) {
    return e.empty
      ? this
      : v.create(
          this.ranges.map((n) => n.map(e, t)),
          this.mainIndex
        );
  }
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n], t)) return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new v([this.main], 0);
  }
  addRange(e, t = !0) {
    return v.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return (n[t] = e), v.create(n, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (
      !e ||
      !Array.isArray(e.ranges) ||
      typeof e.main != "number" ||
      e.main >= e.ranges.length
    )
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new v(
      e.ranges.map((t) => an.fromJSON(t)),
      e.main
    );
  }
  static single(e, t = e) {
    return new v([v.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= n : r.from < n) return v.normalized(e.slice(), t);
      n = r.to;
    }
    return new v(e, t);
  }
  static cursor(e, t = 0, n, s) {
    return an.create(
      e,
      e,
      (t == 0 ? 0 : t < 0 ? 8 : 16) |
        (n == null ? 7 : Math.min(6, n)) |
        ((eval('s ?? 16777215')) << 6)
    );
  }
  static range(e, t, n, s) {
    let r = ((eval('n ?? 16777215')) << 6) | (s == null ? 7 : Math.min(6, s));
    return t < e
      ? an.create(t, e, 48 | r)
      : an.create(e, t, (t > e ? 8 : 0) | r);
  }
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((s, r) => s.from - r.from), (t = e.indexOf(n));
    for (let s = 1; s < e.length; s++) {
      let r = e[s],
        o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from,
          a = Math.max(r.to, o.to);
        s <= t && t--,
          e.splice(--s, 2, r.anchor > r.head ? v.range(a, l) : v.range(l, a));
      }
    }
    return new v(e, t);
  }
}
function sO(i, e) {
  for (let t of i.ranges)
    if (t.to > e) throw new RangeError("Selection points outside of document");
}
let hc = 0;
class z {
  constructor(e, t, n, s, r) {
    (this.combine = e),
      (this.compareInput = t),
      (this.compare = n),
      (this.isStatic = s),
      (this.id = hc++),
      (this.default = e([])),
      (this.extensions = typeof r == "function" ? r(this) : r);
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new z(
      e.combine || ((t) => t),
      e.compareInput || ((t, n) => t === n),
      e.compare || (e.combine ? (t, n) => t === n : cc),
      !!e.static,
      e.enables
    );
  }
  of(e) {
    return new oo([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new oo(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new oo(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function cc(i, e) {
  return i == e || (i.length == e.length && i.every((t, n) => t === e[n]));
}
class oo {
  constructor(e, t, n, s) {
    (this.dependencies = e),
      (this.facet = t),
      (this.type = n),
      (this.value = s),
      (this.id = hc++);
  }
  dynamicSlot(e) {
    var t;
    let n = this.value,
      s = this.facet.compareInput,
      r = this.id,
      o = e[r] >> 1,
      l = this.type == 2,
      a = !1,
      h = !1,
      c = [];
    for (let f of this.dependencies)
      f == "doc"
        ? (a = !0)
        : f == "selection"
        ? (h = !0)
        : ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 ||
          c.push(e[f.id]);
    return {
      create(f) {
        return (f.values[o] = n(f)), 1;
      },
      update(f, u) {
        if (
          (a && u.docChanged) ||
          (h && (u.docChanged || u.selection)) ||
          Va(f, c)
        ) {
          let d = n(f);
          if (l ? !Xf(d, f.values[o], s) : !s(d, f.values[o]))
            return (f.values[o] = d), 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d,
          p = u.config.address[r];
        if (p != null) {
          let O = To(u, p);
          if (
            this.dependencies.every((m) =>
              m instanceof z
                ? u.facet(m) === f.facet(m)
                : m instanceof Le
                ? u.field(m, !1) == f.field(m, !1)
                : !0
            ) ||
            (l ? Xf((d = n(f)), O, s) : s((d = n(f)), O))
          )
            return (f.values[o] = O), 0;
        } else d = n(f);
        return (f.values[o] = d), 1;
      },
    };
  }
}
function Xf(i, e, t) {
  if (i.length != e.length) return !1;
  for (let n = 0; n < i.length; n++) if (!t(i[n], e[n])) return !1;
  return !0;
}
function Va(i, e) {
  let t = !1;
  for (let n of e) As(i, n) & 1 && (t = !0);
  return t;
}
function ny(i, e, t) {
  let n = t.map((a) => i[a.id]),
    s = t.map((a) => a.type),
    r = n.filter((a) => !(a & 1)),
    o = i[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < n.length; c++) {
      let f = To(a, n[c]);
      if (s[c] == 2) for (let u of f) h.push(u);
      else h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of n) As(a, h);
      return (a.values[o] = l(a)), 1;
    },
    update(a, h) {
      if (!Va(a, r)) return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : ((a.values[o] = c), 1);
    },
    reconfigure(a, h) {
      let c = Va(a, n),
        f = h.config.facets[e.id],
        u = h.facet(e);
      if (f && !c && cc(t, f)) return (a.values[o] = u), 0;
      let d = l(a);
      return e.compare(d, u) ? ((a.values[o] = u), 0) : ((a.values[o] = d), 1);
    },
  };
}
const Df = z.define({ static: !0 });
class Le {
  constructor(e, t, n, s, r) {
    (this.id = e),
      (this.createF = t),
      (this.updateF = n),
      (this.compareF = s),
      (this.spec = r),
      (this.provides = void 0);
  }
  static define(e) {
    let t = new Le(
      hc++,
      e.create,
      e.update,
      e.compare || ((n, s) => n === s),
      e
    );
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Df).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => ((n.values[t] = this.create(n)), 1),
      update: (n, s) => {
        let r = n.values[t],
          o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : ((n.values[t] = o), 1);
      },
      reconfigure: (n, s) =>
        s.config.address[this.id] != null
          ? ((n.values[t] = s.field(this)), 0)
          : ((n.values[t] = this.create(n)), 1),
    };
  }
  init(e) {
    return [this, Df.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const rn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function ls(i) {
  return (e) => new rO(e, i);
}
const Hi = {
  highest: ls(rn.highest),
  high: ls(rn.high),
  default: ls(rn.default),
  low: ls(rn.low),
  lowest: ls(rn.lowest),
};
class rO {
  constructor(e, t) {
    (this.inner = e), (this.prec = t);
  }
}
class xl {
  of(e) {
    return new qa(this, e);
  }
  reconfigure(e) {
    return xl.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class qa {
  constructor(e, t) {
    (this.compartment = e), (this.inner = t);
  }
}
class Ro {
  constructor(e, t, n, s, r, o) {
    for (
      this.base = e,
        this.compartments = t,
        this.dynamicSlots = n,
        this.address = s,
        this.staticValues = r,
        this.facets = o,
        this.statusTemplate = [];
      this.statusTemplate.length < n.length;

    )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let s = [],
      r = Object.create(null),
      o = new Map();
    for (let u of sy(e, t, o))
      u instanceof Le
        ? s.push(u)
        : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = Object.create(null),
      a = [],
      h = [];
    for (let u of s) (l[u.id] = h.length << 1), h.push((d) => u.slot(d));
    let c = n == null ? void 0 : n.config.facets;
    for (let u in r) {
      let d = r[u],
        p = d[0].facet,
        O = (c && c[u]) || [];
      if (d.every((m) => m.type == 0))
        if (((l[p.id] = (a.length << 1) | 1), cc(O, d))) a.push(n.facet(p));
        else {
          let m = p.combine(d.map((b) => b.value));
          a.push(n && p.compare(m, n.facet(p)) ? n.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0
            ? ((l[m.id] = (a.length << 1) | 1), a.push(m.value))
            : ((l[m.id] = h.length << 1), h.push((b) => m.dynamicSlot(b)));
        (l[p.id] = h.length << 1), h.push((m) => ny(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Ro(e, o, f, l, a, r);
  }
}
function sy(i, e, t) {
  let n = [[], [], [], [], []],
    s = new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l) return;
      let h = n[a].indexOf(o);
      h > -1 && n[a].splice(h, 1), o instanceof qa && t.delete(o.compartment);
    }
    if ((s.set(o, l), Array.isArray(o))) for (let h of o) r(h, l);
    else if (o instanceof qa) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof rO) r(o.inner, o.prec);
    else if (o instanceof Le) n[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof oo)
      n[l].push(o), o.facet.extensions && r(o.facet.extensions, rn.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(
          `Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
        );
      r(h, l);
    }
  }
  return r(i, rn.default), n.reduce((o, l) => o.concat(l));
}
function As(i, e) {
  if (e & 1) return 2;
  let t = e >> 1,
    n = i.status[t];
  if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2) return n;
  i.status[t] = 4;
  let s = i.computeSlot(i, i.config.dynamicSlots[t]);
  return (i.status[t] = 2 | s);
}
function To(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const oO = z.define(),
  za = z.define({ combine: (i) => i.some((e) => e), static: !0 }),
  lO = z.define({ combine: (i) => (i.length ? i[0] : void 0), static: !0 }),
  aO = z.define(),
  hO = z.define(),
  cO = z.define(),
  fO = z.define({ combine: (i) => (i.length ? i[0] : !1) });
class yi {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  static define() {
    return new ry();
  }
}
class ry {
  of(e) {
    return new yi(this, e);
  }
}
class oy {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new ee(this, e);
  }
}
class ee {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0
      ? void 0
      : t == this.value
      ? this
      : new ee(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new oy(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let n = [];
    for (let s of e) {
      let r = s.map(t);
      r && n.push(r);
    }
    return n;
  }
}
ee.reconfigure = ee.define();
ee.appendConfig = ee.define();
class Ae {
  constructor(e, t, n, s, r, o) {
    (this.startState = e),
      (this.changes = t),
      (this.selection = n),
      (this.effects = s),
      (this.annotations = r),
      (this.scrollIntoView = o),
      (this._doc = null),
      (this._state = null),
      n && sO(n, t.newLength),
      r.some((l) => l.type == Ae.time) ||
        (this.annotations = r.concat(Ae.time.of(Date.now())));
  }
  static create(e, t, n, s, r, o) {
    return new Ae(e, t, n, s, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(Ae.userEvent);
    return !!(
      t &&
      (t == e ||
        (t.length > e.length &&
          t.slice(0, e.length) == e &&
          t[e.length] == "."))
    );
  }
}
Ae.time = yi.define();
Ae.userEvent = yi.define();
Ae.addToHistory = yi.define();
Ae.remote = yi.define();
function ly(i, e) {
  let t = [];
  for (let n = 0, s = 0; ; ) {
    let r, o;
    if (n < i.length && (s == e.length || e[s] >= i[n]))
      (r = i[n++]), (o = i[n++]);
    else if (s < e.length) (r = e[s++]), (o = e[s++]);
    else return t;
    !t.length || t[t.length - 1] < r
      ? t.push(r, o)
      : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function uO(i, e, t) {
  var n;
  let s, r, o;
  return (
    t
      ? ((s = e.changes),
        (r = Xe.empty(e.changes.length)),
        (o = i.changes.compose(e.changes)))
      : ((s = e.changes.map(i.changes)),
        (r = i.changes.mapDesc(e.changes, !0)),
        (o = i.changes.compose(s))),
    {
      changes: o,
      selection: e.selection
        ? e.selection.map(r)
        : (n = i.selection) === null || n === void 0
        ? void 0
        : n.map(s),
      effects: ee.mapEffects(i.effects, s).concat(ee.mapEffects(e.effects, r)),
      annotations: i.annotations.length
        ? i.annotations.concat(e.annotations)
        : e.annotations,
      scrollIntoView: i.scrollIntoView || e.scrollIntoView,
    }
  );
}
function Ia(i, e, t) {
  let n = e.selection,
    s = Wn(e.annotations);
  return (
    e.userEvent && (s = s.concat(Ae.userEvent.of(e.userEvent))),
    {
      changes:
        e.changes instanceof Xe
          ? e.changes
          : Xe.of(e.changes || [], t, i.facet(lO)),
      selection: n && (n instanceof v ? n : v.single(n.anchor, n.head)),
      effects: Wn(e.effects),
      annotations: s,
      scrollIntoView: !!e.scrollIntoView,
    }
  );
}
function dO(i, e, t) {
  let n = Ia(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    n = uO(n, Ia(i, e[r], o ? n.changes.newLength : i.doc.length), o);
  }
  let s = Ae.create(
    i,
    n.changes,
    n.selection,
    n.effects,
    n.annotations,
    n.scrollIntoView
  );
  return hy(t ? ay(s) : s);
}
function ay(i) {
  let e = i.startState,
    t = !0;
  for (let s of e.facet(aO)) {
    let r = s(i);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : ly(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1) (r = i.changes.invertedDesc), (s = Xe.empty(e.doc.length));
    else {
      let o = i.changes.filter(t);
      (s = o.changes), (r = o.filtered.mapDesc(o.changes).invertedDesc);
    }
    i = Ae.create(
      e,
      s,
      i.selection && i.selection.map(r),
      ee.mapEffects(i.effects, r),
      i.annotations,
      i.scrollIntoView
    );
  }
  let n = e.facet(hO);
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](i);
    r instanceof Ae
      ? (i = r)
      : Array.isArray(r) && r.length == 1 && r[0] instanceof Ae
      ? (i = r[0])
      : (i = dO(e, Wn(r), !1));
  }
  return i;
}
function hy(i) {
  let e = i.startState,
    t = e.facet(cO),
    n = i;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](i);
    r &&
      Object.keys(r).length &&
      (n = uO(n, Ia(e, r, i.changes.newLength), !0));
  }
  return n == i
    ? i
    : Ae.create(
        e,
        i.changes,
        i.selection,
        n.effects,
        n.annotations,
        n.scrollIntoView
      );
}
const cy = [];
function Wn(i) {
  return i == null ? cy : Array.isArray(i) ? i : [i];
}
var Pe = (function (i) {
  return (
    (i[(i.Word = 0)] = "Word"),
    (i[(i.Space = 1)] = "Space"),
    (i[(i.Other = 2)] = "Other"),
    i
  );
})(Pe || (Pe = {}));
const fy =
  /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Na;
try {
  Na = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function uy(i) {
  if (Na) return Na.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (
      /\w/.test(t) ||
      (t > "" && (t.toUpperCase() != t.toLowerCase() || fy.test(t)))
    )
      return !0;
  }
  return !1;
}
function dy(i) {
  return (e) => {
    if (!/\S/.test(e)) return Pe.Space;
    if (uy(e)) return Pe.Word;
    for (let t = 0; t < i.length; t++) if (e.indexOf(i[t]) > -1) return Pe.Word;
    return Pe.Other;
  };
}
class ce {
  constructor(e, t, n, s, r, o) {
    (this.config = e),
      (this.doc = t),
      (this.selection = n),
      (this.values = s),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = r),
      o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) As(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t) throw new RangeError("Field is not present in this state");
      return;
    }
    return As(this, n), To(this, n);
  }
  update(...e) {
    return dO(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config,
      { base: n, compartments: s } = t;
    for (let l of e.effects)
      l.is(xl.reconfigure)
        ? (t &&
            ((s = new Map()),
            t.compartments.forEach((a, h) => s.set(h, a)),
            (t = null)),
          s.set(l.value.compartment, l.value.extension))
        : l.is(ee.reconfigure)
        ? ((t = null), (n = l.value))
        : l.is(ee.appendConfig) && ((t = null), (n = Wn(n).concat(l.value)));
    let r;
    t
      ? (r = e.startState.values.slice())
      : ((t = Ro.resolve(n, s, this)),
        (r = new ce(
          t,
          this.doc,
          this.selection,
          t.dynamicSlots.map(() => null),
          (a, h) => h.reconfigure(a, this),
          null
        ).values));
    let o = e.startState.facet(za) ? e.newSelection : e.newSelection.asSingle();
    new ce(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return (
      typeof e == "string" && (e = this.toText(e)),
      this.changeByRange((t) => ({
        changes: { from: t.from, to: t.to, insert: e },
        range: v.cursor(t.from + e.length),
      }))
    );
  }
  changeByRange(e) {
    let t = this.selection,
      n = e(t.ranges[0]),
      s = this.changes(n.changes),
      r = [n.range],
      o = Wn(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]),
        h = this.changes(a.changes),
        c = h.map(s);
      for (let u = 0; u < l; u++) r[u] = r[u].map(c);
      let f = s.mapDesc(h, !0);
      r.push(a.range.map(f)),
        (s = s.compose(c)),
        (o = ee.mapEffects(o, c).concat(ee.mapEffects(Wn(a.effects), f)));
    }
    return { changes: s, selection: v.create(r, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof Xe
      ? e
      : Xe.of(e, this.doc.length, this.facet(ce.lineSeparator));
  }
  toText(e) {
    return he.of(e.split(this.facet(ce.lineSeparator) || ja));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (As(this, t), To(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let n in e) {
        let s = e[n];
        s instanceof Le &&
          this.config.address[s.id] != null &&
          (t[n] = s.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (n) {
      for (let r in n)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = n[r],
            l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return ce.create({
      doc: e.doc,
      selection: v.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s,
    });
  }
  static create(e = {}) {
    let t = Ro.resolve(e.extensions || [], new Map()),
      n =
        e.doc instanceof he
          ? e.doc
          : he.of((e.doc || "").split(t.staticFacet(ce.lineSeparator) || ja)),
      s = e.selection
        ? e.selection instanceof v
          ? e.selection
          : v.single(e.selection.anchor, e.selection.head)
        : v.single(0);
    return (
      sO(s, n.length),
      t.staticFacet(za) || (s = s.asSingle()),
      new ce(
        t,
        n,
        s,
        t.dynamicSlots.map(() => null),
        (r, o) => o.create(r),
        null
      )
    );
  }
  get tabSize() {
    return this.facet(ce.tabSize);
  }
  get lineBreak() {
    return this.facet(ce.lineSeparator) || "\n";
  }
  get readOnly() {
    return this.facet(fO);
  }
  phrase(e, ...t) {
    for (let n of this.facet(ce.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return (
      t.length &&
        (e = e.replace(/\$(\$|\d*)/g, (n, s) => {
          if (s == "$") return "$";
          let r = +(s || 1);
          return !r || r > t.length ? n : t[r - 1];
        })),
      e
    );
  }
  languageDataAt(e, t, n = -1) {
    let s = [];
    for (let r of this.facet(oO))
      for (let o of r(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  charCategorizer(e) {
    return dy(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: n, length: s } = this.doc.lineAt(e),
      r = this.charCategorizer(e),
      o = e - n,
      l = e - n;
    for (; o > 0; ) {
      let a = Be(t, o, !1);
      if (r(t.slice(a, o)) != Pe.Word) break;
      o = a;
    }
    for (; l < s; ) {
      let a = Be(t, l);
      if (r(t.slice(l, a)) != Pe.Word) break;
      l = a;
    }
    return o == l ? null : v.range(o + n, l + n);
  }
}
ce.allowMultipleSelections = za;
ce.tabSize = z.define({ combine: (i) => (i.length ? i[0] : 4) });
ce.lineSeparator = lO;
ce.readOnly = fO;
ce.phrases = z.define({
  compare(i, e) {
    let t = Object.keys(i),
      n = Object.keys(e);
    return t.length == n.length && t.every((s) => i[s] == e[s]);
  },
});
ce.languageData = oO;
ce.changeFilter = aO;
ce.transactionFilter = hO;
ce.transactionExtender = cO;
xl.reconfigure = ee.define();
function ri(i, e, t = {}) {
  let n = {};
  for (let s of i)
    for (let r of Object.keys(s)) {
      let o = s[r],
        l = n[r];
      if (l === void 0) n[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, r)) n[r] = t[r](l, o);
        else throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e) n[s] === void 0 && (n[s] = e[s]);
  return n;
}
class On {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return zs.create(e, t, this);
  }
}
On.prototype.startSide = On.prototype.endSide = 0;
On.prototype.point = !1;
On.prototype.mapMode = Ie.TrackDel;
class zs {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.value = n);
  }
  static create(e, t, n) {
    return new zs(e, t, n);
  }
}
function Ba(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class fc {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.value = n), (this.maxPoint = s);
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, n, s = 0) {
    let r = n ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l) return o;
      let a = (o + l) >> 1,
        h =
          r[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) return h >= 0 ? o : l;
      h >= 0 ? (l = a) : (o = a + 1);
    }
  }
  between(e, t, n, s) {
    for (
      let r = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, r);
      r < o;
      r++
    )
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1) return !1;
  }
  map(e, t) {
    let n = [],
      s = [],
      r = [],
      o = -1,
      l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a],
        c = this.from[a] + e,
        f = this.to[a] + e,
        u,
        d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (
          p == null ||
          ((u = d = p),
          h.startSide != h.endSide && ((d = t.mapPos(c, h.endSide)), d < u))
        )
          continue;
      } else if (
        ((u = t.mapPos(c, h.startSide)),
        (d = t.mapPos(f, h.endSide)),
        u > d || (u == d && h.startSide > 0 && h.endSide <= 0))
      )
        continue;
      (d - u || h.endSide - h.startSide) < 0 ||
        (o < 0 && (o = u),
        h.point && (l = Math.max(l, d - u)),
        n.push(h),
        s.push(u - o),
        r.push(d - o));
    }
    return { mapped: n.length ? new fc(s, r, n, l) : null, pos: o };
  }
}
class ae {
  constructor(e, t, n, s) {
    (this.chunkPos = e),
      (this.chunk = t),
      (this.nextLayer = n),
      (this.maxPoint = s);
  }
  static create(e, t, n, s) {
    return new ae(e, t, n, s);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let {
        add: t = [],
        sort: n = !1,
        filterFrom: s = 0,
        filterTo: r = this.length,
      } = e,
      o = e.filter;
    if (t.length == 0 && !o) return this;
    if ((n && (t = t.slice().sort(Ba)), this.isEmpty))
      return t.length ? ae.of(t) : this;
    let l = new pO(this, null, -1).goto(0),
      a = 0,
      h = [],
      c = new Ui();
    for (; l.value || a < t.length; )
      if (
        a < t.length &&
        (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0
      ) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 &&
        l.chunkIndex < this.chunk.length &&
        (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
        (!o ||
          s > this.chunkEnd(l.chunkIndex) ||
          r < this.chunkPos[l.chunkIndex]) &&
        c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
          ? l.nextChunk()
          : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) &&
              (c.addInner(l.from, l.to, l.value) ||
                h.push(zs.create(l.from, l.to, l.value))),
            l.next());
    return c.finishInner(
      this.nextLayer.isEmpty && !h.length
        ? ae.empty
        : this.nextLayer.update({
            add: h,
            filter: o,
            filterFrom: s,
            filterTo: r,
          })
    );
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [],
      n = [],
      s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o],
        a = this.chunk[o],
        h = e.touchesRange(l, l + a.length);
      if (h === !1)
        (s = Math.max(s, a.maxPoint)), t.push(a), n.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && ((s = Math.max(s, c.maxPoint)), t.push(c), n.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new ae(n, t, r || ae.empty, s);
  }
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s],
          o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  iter(e = 0) {
    return Is.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Is.from(e).goto(t);
  }
  static compare(e, t, n, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      l = t.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      a = Yf(o, l, n),
      h = new as(o, a, r),
      c = new as(l, a, r);
    n.iterGaps((f, u, d) => jf(h, f, c, u, d, s)),
      n.empty && n.length == 0 && jf(h, 0, c, 0, 0, s);
  }
  static eq(e, t, n = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0),
      o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length) return !1;
    if (!r.length) return !0;
    let l = Yf(r, o),
      a = new as(r, l, 0).goto(n),
      h = new as(o, l, 0).goto(n);
    for (;;) {
      if (
        a.to != h.to ||
        !Ga(a.active, h.active) ||
        (a.point && (!h.point || !a.point.eq(h.point)))
      )
        return !1;
      if (a.to > s) return !0;
      a.next(), h.next();
    }
  }
  static spans(e, t, n, s, r = -1) {
    let o = new as(e, null, r).goto(t),
      l = t,
      a = o.openStart;
    for (;;) {
      let h = Math.min(o.to, n);
      if (o.point) {
        let c = o.activeForPoint(o.to),
          f =
            o.pointFrom < t
              ? c.length + 1
              : o.point.startSide < 0
              ? c.length
              : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank),
          (a = Math.min(o.openEnd(h), c.length));
      } else h > l && (s.span(l, h, o.active, a), (a = o.openEnd(h)));
      if (o.to > n) return a + (o.point && o.to > n ? 1 : 0);
      (l = o.to), o.next();
    }
  }
  static of(e, t = !1) {
    let n = new Ui();
    for (let s of e instanceof zs ? [e] : t ? py(e) : e)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
  static join(e) {
    if (!e.length) return ae.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let s = e[n]; s != ae.empty; s = s.nextLayer)
        t = new ae(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
ae.empty = new ae([], [], null, -1);
function py(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (Ba(e, n) > 0) return i.slice().sort(Ba);
      e = n;
    }
  return i;
}
ae.empty.nextLayer = ae.empty;
class Ui {
  finishChunk(e) {
    this.chunks.push(new fc(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []));
  }
  constructor() {
    (this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null);
  }
  add(e, t, n) {
    this.addInner(e, t, n) ||
      (this.nextLayer || (this.nextLayer = new Ui())).add(e, t, n);
  }
  addInner(e, t, n) {
    let s = e - this.lastTo || n.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error(
        "Ranges must be added sorted by `from` position and `startSide`"
      );
    return s < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(t - this.chunkStart),
        (this.last = n),
        (this.lastFrom = e),
        (this.lastTo = t),
        this.value.push(n),
        n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
        !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
      this.chunks.push(t),
      this.chunkPos.push(e);
    let n = t.value.length - 1;
    return (
      (this.last = t.value[n]),
      (this.lastFrom = t.from[n] + e),
      (this.lastTo = t.to[n] + e),
      !0
    );
  }
  finish() {
    return this.finishInner(ae.empty);
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0))
      return e;
    let t = ae.create(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint
    );
    return (this.from = null), t;
  }
}
function Yf(i, e, t) {
  let n = new Map();
  for (let r of i)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && n.set(r.chunk[o], r.chunkPos[o]);
  let s = new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = n.get(r.chunk[o]);
      l != null &&
        (t ? t.mapPos(l) : l) == r.chunkPos[o] &&
        !(t != null && t.touchesRange(l, l + r.chunk[o].length)) &&
        s.add(r.chunk[o]);
    }
  return s;
}
class pO {
  constructor(e, t, n, s = 0) {
    (this.layer = e), (this.skip = t), (this.minPoint = n), (this.rank = s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return (
      (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
    );
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (
        !(
          (this.skip && this.skip.has(s)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          s.maxPoint < this.minPoint
        )
      )
        break;
      this.chunkIndex++, (n = !1);
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        t,
        !0
      );
      (!n || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        (this.from = this.to = 1e9), (this.value = null);
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          n = e + t.from[this.rangeIndex];
        if (
          ((this.from = n),
          (this.to = e + t.to[this.rangeIndex]),
          (this.value = t.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 ||
            (this.value.point && this.to - this.from >= this.minPoint))
        )
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next();
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    );
  }
}
class Is {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && s.push(new pO(o, t, n, r));
    return s.length == 1 ? s[0] : new Is(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap) n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--) Bl(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap) n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--) Bl(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
    else {
      let e = this.heap[0];
      (this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        Bl(this.heap, 0);
    }
  }
}
function Bl(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length) break;
    let s = i[n];
    if (
      (n + 1 < i.length && s.compare(i[n + 1]) >= 0 && ((s = i[n + 1]), n++),
      t.compare(s) < 0)
    )
      break;
    (i[n] = t), (i[e] = s), (e = n);
  }
}
class as {
  constructor(e, t, n) {
    (this.minPoint = n),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = Is.from(e, t, n));
  }
  goto(e, t = -1e9) {
    return (
      this.cursor.goto(e, t),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = t),
      (this.openStart = -1),
      this.next(),
      this
    );
  }
  forward(e, t) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e ||
        this.active[this.minActive].endSide - t) < 0;

    )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Ar(this.active, e),
      Ar(this.activeTo, e),
      Ar(this.activeRank, e),
      (this.minActive = Lf(this.active, this.activeTo));
  }
  addActive(e) {
    let t = 0,
      { value: n, to: s, rank: r } = this.cursor;
    for (
      ;
      t < this.activeRank.length &&
      (r - this.activeRank[t] || s - this.activeTo[t]) > 0;

    )
      t++;
    Mr(this.active, t, n),
      Mr(this.activeTo, t, s),
      Mr(this.activeRank, t, r),
      e && Mr(e, t, this.cursor.from),
      (this.minActive = Lf(this.active, this.activeTo));
  }
  next() {
    let e = this.to,
      t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (;;) {
      let s = this.minActive;
      if (
        s > -1 &&
        (this.activeTo[s] - this.cursor.from ||
          this.active[s].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[s] > e) {
          (this.to = this.activeTo[s]), (this.endSide = this.active[s].endSide);
          break;
        }
        this.removeActive(s), n && Ar(n, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          (this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point) this.addActive(n), this.cursor.next();
          else if (
            t &&
            this.cursor.to == this.to &&
            this.cursor.from < this.cursor.to
          )
            this.cursor.next();
          else {
            (this.point = r),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = r.endSide),
              this.cursor.next(),
              this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let s = n.length - 1; s >= 0 && n[s] < e; s--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (
      let n = this.active.length - 1;
      n >= 0 && !(this.activeRank[n] < this.pointRank);
      n--
    )
      (this.activeTo[n] > e ||
        (this.activeTo[n] == e &&
          this.active[n].endSide >= this.point.endSide)) &&
        t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function jf(i, e, t, n, s, r) {
  i.goto(e), t.goto(n);
  let o = n + s,
    l = n,
    a = n - e;
  for (;;) {
    let h = i.to + a - t.to || i.endSide - t.endSide,
      c = h < 0 ? i.to + a : t.to,
      f = Math.min(c, o);
    if (
      (i.point || t.point
        ? (i.point &&
            t.point &&
            (i.point == t.point || i.point.eq(t.point)) &&
            Ga(i.activeForPoint(i.to), t.activeForPoint(t.to))) ||
          r.comparePoint(l, f, i.point, t.point)
        : f > l &&
          !Ga(i.active, t.active) &&
          r.compareRange(l, f, i.active, t.active),
      c > o)
    )
      break;
    (l = c), h <= 0 && i.next(), h >= 0 && t.next();
  }
}
function Ga(i, e) {
  if (i.length != e.length) return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t])) return !1;
  return !0;
}
function Ar(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++) i[t] = i[t + 1];
  i.pop();
}
function Mr(i, e, t) {
  for (let n = i.length - 1; n >= e; n--) i[n + 1] = i[n];
  i[e] = t;
}
function Lf(i, e) {
  let t = -1,
    n = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - n || i[s].endSide - i[t].endSide) < 0 && ((t = s), (n = e[s]));
  return t;
}
function Kn(i, e, t = i.length) {
  let n = 0;
  for (let s = 0; s < t; )
    i.charCodeAt(s) == 9 ? ((n += e - (n % e)), s++) : (n++, (s = Be(i, s)));
  return n;
}
function Fa(i, e, t, n) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e) return s;
    if (s == i.length) break;
    (r += i.charCodeAt(s) == 9 ? t - (r % t) : 1), (s = Be(i, s));
  }
  return n === !0 ? -1 : i.length;
}