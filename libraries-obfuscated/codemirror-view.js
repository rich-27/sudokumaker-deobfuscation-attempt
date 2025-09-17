function Bs(i) {
  let e;
  return (
    i.nodeType == 11 ? (e = i.getSelection ? i : i.ownerDocument) : (e = i),
    e.getSelection()
  );
}
function Ja(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function yy(i) {
  let e = i.activeElement;
  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
  return e;
}
function lo(i, e) {
  if (!e.anchorNode) return !1;
  try {
    return Ja(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function Gs(i) {
  return i.nodeType == 3
    ? mn(i, 0, i.nodeValue.length).getClientRects()
    : i.nodeType == 1
    ? i.getClientRects()
    : [];
}
function Ms(i, e, t, n) {
  return t ? zf(i, e, t, n, -1) || zf(i, e, t, n, 1) : !1;
}
function gn(i) {
  for (var e = 0; ; e++) if (((i = i.previousSibling), !i)) return e;
}
function Ao(i) {
  return (
    i.nodeType == 1 &&
    /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName)
  );
}
function zf(i, e, t, n, s) {
  for (;;) {
    if (i == t && e == n) return !0;
    if (e == (s < 0 ? 0 : pi(i))) {
      if (i.nodeName == "DIV") return !1;
      let r = i.parentNode;
      if (!r || r.nodeType != 1) return !1;
      (e = gn(i) + (s < 0 ? 0 : 1)), (i = r);
    } else if (i.nodeType == 1) {
      if (
        ((i = i.childNodes[e + (s < 0 ? -1 : 0)]),
        i.nodeType == 1 && i.contentEditable == "false")
      )
        return !1;
      e = s < 0 ? pi(i) : 0;
    } else return !1;
  }
}
function pi(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function uc(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function xy(i) {
  let e = i.visualViewport;
  return e
    ? { left: 0, right: e.width, top: 0, bottom: e.height }
    : { left: 0, right: i.innerWidth, top: 0, bottom: i.innerHeight };
}
function OO(i, e) {
  let t = e.width / i.offsetWidth,
    n = e.height / i.offsetHeight;
  return (
    ((t > 0.995 && t < 1.005) ||
      !isFinite(t) ||
      Math.abs(e.width - i.offsetWidth) < 1) &&
      (t = 1),
    ((n > 0.995 && n < 1.005) ||
      !isFinite(n) ||
      Math.abs(e.height - i.offsetHeight) < 1) &&
      (n = 1),
    { scaleX: t, scaleY: n }
  );
}
function Sy(i, e, t, n, s, r, o, l) {
  let a = i.ownerDocument,
    h = a.defaultView || window;
  for (let c = i, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u,
        d = c == a.body,
        p = 1,
        O = 1;
      if (d) u = xy(h);
      else {
        if (
          (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0),
          c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth)
        ) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let S = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: O } = OO(c, S)),
          (u = {
            left: S.left,
            right: S.left + c.clientWidth * p,
            top: S.top,
            bottom: S.top + c.clientHeight * O,
          });
      }
      let m = 0,
        b = 0;
      if (s == "nearest")
        e.top < u.top
          ? ((b = -(u.top - e.top + o)),
            t > 0 &&
              e.bottom > u.bottom + b &&
              (b = e.bottom - u.bottom + b + o))
          : e.bottom > u.bottom &&
            ((b = e.bottom - u.bottom + o),
            t < 0 && e.top - b < u.top && (b = -(u.top + b - e.top + o)));
      else {
        let S = e.bottom - e.top,
          P = u.bottom - u.top;
        b =
          (s == "center" && S <= P
            ? e.top + S / 2 - P / 2
            : s == "start" || (s == "center" && t < 0)
            ? e.top - o
            : e.bottom - P + o) - u.top;
      }
      if (
        (n == "nearest"
          ? e.left < u.left
            ? ((m = -(u.left - e.left + r)),
              t > 0 && e.right > u.right + m && (m = e.right - u.right + m + r))
            : e.right > u.right &&
              ((m = e.right - u.right + r),
              t < 0 && e.left < u.left + m && (m = -(u.left + m - e.left + r)))
          : (m =
              (n == "center"
                ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2
                : (n == "start") == l
                ? e.left - r
                : e.right - (u.right - u.left) + r) - u.left),
        m || b)
      )
        if (d) h.scrollBy(m, b);
        else {
          let S = 0,
            P = 0;
          if (b) {
            let x = c.scrollTop;
            (c.scrollTop += b / O), (P = (c.scrollTop - x) * O);
          }
          if (m) {
            let x = c.scrollLeft;
            (c.scrollLeft += m / p), (S = (c.scrollLeft - x) * p);
          }
          (e = {
            left: e.left - S,
            top: e.top - P,
            right: e.right - S,
            bottom: e.bottom - P,
          }),
            S && Math.abs(S - m) < 1 && (n = "nearest"),
            P && Math.abs(P - b) < 1 && (s = "nearest");
        }
      if (d) break;
      c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11) c = c.host;
    else break;
}
function wy(i) {
  let e = i.ownerDocument;
  for (let t = i.parentNode; t && t != e.body; )
    if (t.nodeType == 1) {
      if (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth)
        return t;
      t = t.assignedSlot || t.parentNode;
    } else if (t.nodeType == 11) t = t.host;
    else break;
  return null;
}
class Qy {
  constructor() {
    (this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0);
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    );
  }
  setRange(e) {
    let { anchorNode: t, focusNode: n } = e;
    this.set(
      t,
      Math.min(e.anchorOffset, t ? pi(t) : 0),
      n,
      Math.min(e.focusOffset, n ? pi(n) : 0)
    );
  }
  set(e, t, n, s) {
    (this.anchorNode = e),
      (this.anchorOffset = t),
      (this.focusNode = n),
      (this.focusOffset = s);
  }
}
let wn = null;
function gO(i) {
  if (i.setActive) return i.setActive();
  if (wn) return i.focus(wn);
  let e = [];
  for (
    let t = i;
    t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
    t = t.parentNode
  );
  if (
    (i.focus(
      wn == null
        ? {
            get preventScroll() {
              return (wn = { preventScroll: !0 }), !0;
            },
          }
        : void 0
    ),
    !wn)
  ) {
    wn = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++],
        s = e[t++],
        r = e[t++];
      n.scrollTop != s && (n.scrollTop = s),
        n.scrollLeft != r && (n.scrollLeft = r);
    }
  }
}
let If;
function mn(i, e, t = e) {
  let n = If || (If = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function Xn(i, e, t, n) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  n &&
    ({
      altKey: s.altKey,
      ctrlKey: s.ctrlKey,
      shiftKey: s.shiftKey,
      metaKey: s.metaKey,
    } = n);
  let r = new KeyboardEvent("keydown", s);
  (r.synthetic = !0), i.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return (
    (o.synthetic = !0),
    i.dispatchEvent(o),
    r.defaultPrevented || o.defaultPrevented
  );
}
function Py(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || (i.nodeType == 11 && i.host))) return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function mO(i) {
  for (; i.attributes.length; ) i.removeAttributeNode(i.attributes[0]);
}
function ky(i, e) {
  let t = e.focusNode,
    n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n) return !1;
  for (n = Math.min(n, pi(t)); ; )
    if (n) {
      if (t.nodeType != 1) return !1;
      let s = t.childNodes[n - 1];
      s.contentEditable == "false" ? n-- : ((t = s), (n = pi(t)));
    } else {
      if (t == i) return !0;
      (n = gn(t)), (t = t.parentNode);
    }
}
function bO(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function yO(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0) return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false") return null;
      (t = t.childNodes[n - 1]), (n = pi(t));
    } else if (t.parentNode && !Ao(t)) (n = gn(t)), (t = t.parentNode);
    else return null;
  }
}
function xO(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n < t.nodeValue.length)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n < t.childNodes.length) {
      if (t.contentEditable == "false") return null;
      (t = t.childNodes[n]), (n = 0);
    } else if (t.parentNode && !Ao(t)) (n = gn(t) + 1), (t = t.parentNode);
    else return null;
  }
}
class et {
  constructor(e, t, n = !0) {
    (this.node = e), (this.offset = t), (this.precise = n);
  }
  static before(e, t) {
    return new et(e.parentNode, gn(e), t);
  }
  static after(e, t) {
    return new et(e.parentNode, gn(e) + 1, t);
  }
}
const dc = [];
class Oe {
  constructor() {
    (this.parent = null), (this.dom = null), (this.flags = 2);
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let n of this.children) {
      if (n == e) return t;
      t += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let n = this.dom,
        s = null,
        r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : n.firstChild)) {
            let l = Oe.get(r);
            (!l || (!l.parent && l.canReuseDOM(o))) && o.reuseDOM(r);
          }
          o.sync(e, t), (o.flags &= -8);
        }
        if (
          ((r = s ? s.nextSibling : n.firstChild),
          t && !t.written && t.node == n && r != o.dom && (t.written = !0),
          o.dom.parentNode == n)
        )
          for (; r && r != o.dom; ) r = Nf(r);
        else n.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (
        r = s ? s.nextSibling : n.firstChild,
          r && t && t.node == n && (t.written = !0);
        r;

      )
        r = Nf(r);
    } else if (this.flags & 1)
      for (let n of this.children)
        n.flags & 7 && (n.sync(e, t), (n.flags &= -8));
  }
  reuseDOM(e) {}
  localPosFromDOM(e, t) {
    let n;
    if (e == this.dom) n = this.dom.childNodes[t];
    else {
      let s = pi(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (;;) {
        let r = e.parentNode;
        if (r == this.dom) break;
        s == 0 &&
          r.firstChild != r.lastChild &&
          (e == r.firstChild ? (s = -1) : (s = 1)),
          (e = r);
      }
      s < 0 ? (n = e) : (n = e.nextSibling);
    }
    if (n == this.dom.firstChild) return 0;
    for (; n && !Oe.get(n); ) n = n.nextSibling;
    if (!n) return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == n) return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, n = 0) {
    let s = -1,
      r = -1,
      o = -1,
      l = -1;
    for (let a = 0, h = n, c = n; a < this.children.length; a++) {
      let f = this.children[a],
        u = h + f.length;
      if (h < e && u > t) return f.domBoundsAround(e, t, h);
      if (
        (u >= e && s == -1 && ((s = a), (r = h)),
        h > t && f.dom.parentNode == this.dom)
      ) {
        (o = a), (l = c);
        break;
      }
      (c = u), (h = u + f.breakAfter);
    }
    return {
      from: r,
      to: l < 0 ? n + this.length : l,
      startDOM:
        (s ? this.children[s - 1].dom.nextSibling : null) ||
        this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null,
    };
  }
  markDirty(e = !1) {
    (this.flags |= 2), this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if ((e && (t.flags |= 2), t.flags & 1)) return;
      (t.flags |= 1), (e = !1);
    }
  }
  setParent(e) {
    this.parent != e &&
      ((this.parent = e), this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e &&
      (this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this));
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t) return e;
      e = t;
    }
  }
  replaceChildren(e, t, n = dc) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let r = this.children[s];
      r.parent == this && n.indexOf(r) < 0 && r.destroy();
    }
    this.children.splice(e, t - e, ...n);
    for (let s = 0; s < n.length; s++) n[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new SO(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return (
      e +
      (this.children.length
        ? "(" + this.children.join() + ")"
        : this.length
        ? "[" + (e == "Text" ? this.text : this.length) + "]"
        : "") +
      (this.breakAfter ? "#" : "")
    );
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, n, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children) e.parent == this && e.destroy();
    this.parent = null;
  }
}
Oe.prototype.breakAfter = 0;
function Nf(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class SO {
  constructor(e, t, n) {
    (this.children = e), (this.pos = t), (this.i = n), (this.off = 0);
  }
  findPos(e, t = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos &&
          (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function wO(i, e, t, n, s, r, o, l, a) {
  let { children: h } = i,
    c = h.length ? h[e] : null,
    f = r.length ? r[r.length - 1] : null,
    u = f ? f.breakAfter : o;
  if (
    !(
      e == n &&
      c &&
      !o &&
      !u &&
      r.length < 2 &&
      c.merge(t, s, r.length ? f : null, t == 0, l, a)
    )
  ) {
    if (n < h.length) {
      let d = h[n];
      d && (s < d.length || (d.breakAfter && f != null && f.breakAfter))
        ? (e == n && ((d = d.split(s)), (s = 0)),
          !u && f && d.merge(0, s, f, !0, 0, a)
            ? (r[r.length - 1] = d)
            : ((s || (d.children.length && !d.children[0].length)) &&
                d.merge(0, s, null, !1, 0, a),
              r.push(d)))
        : d != null && d.breakAfter && (f ? (f.breakAfter = 1) : (o = 1)),
        n++;
    }
    for (
      c &&
      ((c.breakAfter = o),
      t > 0 &&
        (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0)
          ? (c.breakAfter = r.shift().breakAfter)
          : (t < c.length ||
              (c.children.length &&
                c.children[c.children.length - 1].length == 0)) &&
            c.merge(t, c.length, null, !1, l, 0),
        e++));
      e < n && r.length;

    )
      if (h[n - 1].become(r[r.length - 1]))
        n--, r.pop(), (a = r.length ? 0 : l);
      else if (h[e].become(r[0])) e++, r.shift(), (l = r.length ? 0 : a);
      else break;
    !r.length &&
      e &&
      n < h.length &&
      !h[e - 1].breakAfter &&
      h[n].merge(0, 0, h[e - 1], !1, l, a) &&
      e--,
      (e < n || r.length) && i.replaceChildren(e, n, r);
  }
}
function QO(i, e, t, n, s, r) {
  let o = i.childCursor(),
    { i: l, off: a } = o.findPos(t, 1),
    { i: h, off: c } = o.findPos(e, -1),
    f = e - t;
  for (let u of n) f += u.length;
  (i.length += f), wO(i, h, c, l, a, n, 0, s, r);
}
let ft =
    typeof navigator < "u"
      ? navigator
      : { userAgent: "", vendor: "", platform: "" },
  eh = typeof document < "u" ? document : { documentElement: { style: {} } };
const th = /Edge\/(\d+)/.exec(ft.userAgent),
  PO = /MSIE \d/.test(ft.userAgent),
  ih = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ft.userAgent),
  Sl = !!(PO || ih || th),
  Bf = !Sl && /gecko\/(\d+)/i.test(ft.userAgent),
  Fl = !Sl && /Chrome\/(\d+)/.exec(ft.userAgent),
  Gf = "webkitFontSmoothing" in eh.documentElement.style,
  kO = !Sl && /Apple Computer/.test(ft.vendor),
  Ff = kO && (/Mobile\/\w+/.test(ft.userAgent) || ft.maxTouchPoints > 2);
var V = {
  mac: Ff || /Mac/.test(ft.platform),
  windows: /Win/.test(ft.platform),
  linux: /Linux|X11/.test(ft.platform),
  ie: Sl,
  ie_version: PO ? eh.documentMode || 6 : ih ? +ih[1] : th ? +th[1] : 0,
  gecko: Bf,
  gecko_version: Bf ? +(/Firefox\/(\d+)/.exec(ft.userAgent) || [0, 0])[1] : 0,
  chrome: !!Fl,
  chrome_version: Fl ? +Fl[1] : 0,
  ios: Ff,
  android: /Android\b/.test(ft.userAgent),
  webkit: Gf,
  safari: kO,
  webkit_version: Gf
    ? +(/\bAppleWebKit\/(\d+)/.exec(ft.userAgent) || [0, 0])[1]
    : 0,
  tabSize:
    eh.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size",
};
const vy = 256;
class Yt extends Oe {
  constructor(e) {
    super(), (this.text = e);
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (t && t.node == this.dom && (t.written = !0),
        (this.dom.nodeValue = this.text));
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, n) {
    return this.flags & 8 ||
      (n &&
        (!(n instanceof Yt) ||
          this.length - (t - e) + n.length > vy ||
          n.flags & 8))
      ? !1
      : ((this.text =
          this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(t)),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = new Yt(this.text.slice(e));
    return (
      (this.text = this.text.slice(0, e)),
      this.markDirty(),
      (t.flags |= this.flags & 8),
      t
    );
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new et(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return {
      from: n,
      to: n + this.length,
      startDOM: this.dom,
      endDOM: this.dom.nextSibling,
    };
  }
  coordsAt(e, t) {
    return $y(this.dom, e, t);
  }
}
class Oi extends Oe {
  constructor(e, t = [], n = 0) {
    super(), (this.mark = e), (this.children = t), (this.length = n);
    for (let s of t) s.setParent(this);
  }
  setAttrs(e) {
    if (
      (mO(e),
      this.mark.class && (e.className = this.mark.class),
      this.mark.attrs)
    )
      for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() &&
      (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    this.dom
      ? this.flags & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e, t);
  }
  merge(e, t, n, s, r, o) {
    return n &&
      (!(n instanceof Oi && n.mark.eq(this.mark)) ||
        (e && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : (QO(this, e, t, n ? n.children.slice() : [], r - 1, o - 1),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = [],
      n = 0,
      s = -1,
      r = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > e && t.push(n < e ? l.split(e - n) : l),
        s < 0 && n >= e && (s = r),
        (n = a),
        r++;
    }
    let o = this.length - e;
    return (
      (this.length = e),
      s > -1 && ((this.children.length = s), this.markDirty()),
      new Oi(this.mark, t, o)
    );
  }
  domAtPos(e) {
    return vO(this, e);
  }
  coordsAt(e, t) {
    return CO(this, e, t);
  }
}
function $y(i, e, t) {
  let n = i.nodeValue.length;
  e > n && (e = n);
  let s = e,
    r = e,
    o = 0;
  (e == 0 && t < 0) || (e == n && t >= 0)
    ? V.chrome || V.gecko || (e ? (s--, (o = 1)) : r < n && (r++, (o = -1)))
    : t < 0
    ? s--
    : r < n && r++;
  let l = mn(i, s, r).getClientRects();
  if (!l.length) return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return (
    V.safari &&
      !o &&
      a.width == 0 &&
      (a = Array.prototype.find.call(l, (h) => h.width) || a),
    o ? uc(a, o < 0) : a || null
  );
}
class Ei extends Oe {
  static create(e, t, n) {
    return new Ei(e, t, n);
  }
  constructor(e, t, n) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.side = n),
      (this.prevWidget = null);
  }
  split(e) {
    let t = Ei.create(this.widget, this.length - e, this.side);
    return (this.length -= e), t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, n, s, r, o) {
    return n &&
      (!(n instanceof Ei) ||
        !this.widget.compare(n.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (n ? n.length : 0) + (this.length - t)), !0);
  }
  become(e) {
    return e instanceof Ei &&
      e.side == this.side &&
      this.widget.constructor == e.widget.constructor
      ? (this.widget.compare(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0) return he.empty;
    let e = this;
    for (; e.parent; ) e = e.parent;
    let { view: t } = e,
      n = t && t.state.doc,
      s = this.posAtStart;
    return n ? n.slice(s, s + this.length) : he.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0)
      ? et.before(this.dom)
      : et.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n) return n;
    let s = this.dom.getClientRects(),
      r = null;
    if (!s.length) return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (
      let l = o ? s.length - 1 : 0;
      (r = s[l]), !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom);
      l += o ? -1 : 1
    );
    return uc(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class zn extends Oe {
  constructor(e) {
    super(), (this.side = e);
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof zn && e.side == this.side;
  }
  split() {
    return new zn(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      (e.className = "cm-widgetBuffer"),
        e.setAttribute("aria-hidden", "true"),
        this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? et.before(this.dom) : et.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return he.empty;
  }
  get isHidden() {
    return !0;
  }
}
Yt.prototype.children = Ei.prototype.children = zn.prototype.children = dc;
function vO(i, e) {
  let t = i.dom,
    { children: n } = i,
    s = 0;
  for (let r = 0; s < n.length; s++) {
    let o = n[s],
      l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t) return o.domAtPos(e - r);
      if (e <= r) break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = n[r - 1];
    if (o.dom.parentNode == t) return o.domAtPos(o.length);
  }
  for (let r = s; r < n.length; r++) {
    let o = n[r];
    if (o.dom.parentNode == t) return o.domAtPos(0);
  }
  return new et(t, 0);
}
function $O(i, e, t) {
  let n,
    { children: s } = i;
  t > 0 &&
  e instanceof Oi &&
  s.length &&
  (n = s[s.length - 1]) instanceof Oi &&
  n.mark.eq(e.mark)
    ? $O(n, e.children[0], t - 1)
    : (s.push(e), e.setParent(i)),
    (i.length += e.length);
}
function CO(i, e, t) {
  let n = null,
    s = -1,
    r = null,
    o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f],
        p = u + d.length;
      p >= c &&
        (d.children.length
          ? l(d, c - u)
          : (!r || (r.isHidden && t > 0)) &&
            (p > c || (u == p && d.getSide() > 0))
          ? ((r = d), (o = c - u))
          : (u < c || (u == p && d.getSide() < 0 && !d.isHidden)) &&
            ((n = d), (s = c - u))),
        (u = p);
    }
  }
  l(i, e);
  let a = (t < 0 ? n : r) || n || r;
  return a ? a.coordsAt(Math.max(0, a == n ? s : o), t) : Cy(i);
}
function Cy(i) {
  let e = i.dom.lastChild;
  if (!e) return i.dom.getBoundingClientRect();
  let t = Gs(e);
  return t[t.length - 1] || null;
}
function nh(i, e) {
  for (let t in i)
    t == "class" && e.class
      ? (e.class += " " + i.class)
      : t == "style" && e.style
      ? (e.style += ";" + i.style)
      : (e[t] = i[t]);
  return e;
}
const Hf = Object.create(null);
function Mo(i, e, t) {
  if (i == e) return !0;
  i || (i = Hf), e || (e = Hf);
  let n = Object.keys(i),
    s = Object.keys(e);
  if (
    n.length - (t && n.indexOf(t) > -1 ? 1 : 0) !=
    s.length - (t && s.indexOf(t) > -1 ? 1 : 0)
  )
    return !1;
  for (let r of n)
    if (r != t && (s.indexOf(r) == -1 || i[r] !== e[r])) return !1;
  return !0;
}
function sh(i, e, t) {
  let n = !1;
  if (e)
    for (let s in e)
      (t && s in t) ||
        ((n = !0),
        s == "style" ? (i.style.cssText = "") : i.removeAttribute(s));
  if (t)
    for (let s in t)
      (e && e[s] == t[s]) ||
        ((n = !0),
        s == "style" ? (i.style.cssText = t[s]) : i.setAttribute(s, t[s]));
  return n;
}
function Zy(i) {
  let e = Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let n = i.attributes[t];
    e[n.name] = n.value;
  }
  return e;
}
class Re extends Oe {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0);
  }
  merge(e, t, n, s, r, o) {
    if (n) {
      if (!(n instanceof Re)) return !1;
      this.dom || n.transferDOM(this);
    }
    return (
      s && this.setDeco(n ? n.attrs : null),
      QO(this, e, t, n ? n.children.slice() : [], r, o),
      !0
    );
  }
  split(e) {
    let t = new Re();
    if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
    let { i: n, off: s } = this.childPos(e);
    s &&
      (t.append(this.children[n].split(s), 0),
      this.children[n].merge(s, this.children[n].length, null, !1, 0, 0),
      n++);
    for (let r = n; r < this.children.length; r++)
      t.append(this.children[r], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return (this.children.length = n), this.markDirty(), (this.length = e), t;
  }
  transferDOM(e) {
    this.dom &&
      (this.markDirty(),
      e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null));
  }
  setDeco(e) {
    Mo(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
      (this.attrs = e));
  }
  append(e, t) {
    $O(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes,
      n = e.spec.class;
    t && (this.attrs = nh(t, this.attrs || {})),
      n && (this.attrs = nh({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return vO(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    var n;
    this.dom
      ? this.flags & 4 &&
        (mO(this.dom),
        (this.dom.className = "cm-line"),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement("div")),
        (this.dom.className = "cm-line"),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        (sh(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add("cm-line"),
        (this.prevAttrs = void 0)),
      super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && Oe.get(s) instanceof Oi; ) s = s.lastChild;
    if (
      !s ||
      !this.length ||
      (s.nodeName != "BR" &&
        ((n = Oe.get(s)) === null || n === void 0 ? void 0 : n.isEditable) ==
          !1 &&
        (!V.ios || !this.children.some((r) => r instanceof Yt)))
    ) {
      let r = document.createElement("BR");
      (r.cmIgnore = !0), this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let e = 0,
      t;
    for (let n of this.children) {
      if (!(n instanceof Yt) || /[^ -~]/.test(n.text)) return null;
      let s = Gs(n.dom);
      if (s.length != 1) return null;
      (e += s[0].width), (t = s[0].height);
    }
    return e
      ? {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: e / this.length,
          textHeight: t,
        }
      : null;
  }
  coordsAt(e, t) {
    let n = CO(this, e, t);
    if (!this.children.length && n && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState,
        r = n.bottom - n.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return {
          top: n.top + o,
          bottom: n.bottom - o,
          left: n.left,
          right: n.left,
        };
      }
    }
    return n;
  }
  become(e) {
    return (
      e instanceof Re &&
      this.children.length == 0 &&
      e.children.length == 0 &&
      Mo(this.attrs, e.attrs) &&
      this.breakAfter == e.breakAfter
    );
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let n = 0, s = 0; n < e.children.length; n++) {
      let r = e.children[n],
        o = s + r.length;
      if (o >= t) {
        if (r instanceof Re) return r;
        if (o > t) break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class ui extends Oe {
  constructor(e, t, n) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.deco = n),
      (this.breakAfter = 0),
      (this.prevWidget = null);
  }
  merge(e, t, n, s, r, o) {
    return n &&
      (!(n instanceof ui) ||
        !this.widget.compare(n.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (n ? n.length : 0) + (this.length - t)), !0);
  }
  domAtPos(e) {
    return e == 0 ? et.before(this.dom) : et.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new ui(this.widget, t, this.deco);
    return (n.breakAfter = this.breakAfter), n;
  }
  get children() {
    return dc;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent
      ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
      : he.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof ui && e.widget.constructor == this.widget.constructor
      ? (e.widget.compare(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.deco = e.deco),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    return this.widget.coordsAt(this.dom, e, t);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: n } = this.deco;
    return t == n ? !1 : e < 0 ? t < 0 : n > 0;
  }
}
class xi {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
    return !1;
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, t, n) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {}
}
var at = (function (i) {
  return (
    (i[(i.Text = 0)] = "Text"),
    (i[(i.WidgetBefore = 1)] = "WidgetBefore"),
    (i[(i.WidgetAfter = 2)] = "WidgetAfter"),
    (i[(i.WidgetRange = 3)] = "WidgetRange"),
    i
  );
})(at || (at = {}));
class N extends On {
  constructor(e, t, n, s) {
    super(),
      (this.startSide = e),
      (this.endSide = t),
      (this.widget = n),
      (this.spec = s);
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new gr(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
      n = !!e.block;
    return (
      (t += n && !e.inlineOrder ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
      new zi(e, t, t, n, e.widget || null, !1)
    );
  }
  static replace(e) {
    let t = !!e.block,
      n,
      s;
    if (e.isBlockGap) (n = -5e8), (s = 4e8);
    else {
      let { start: r, end: o } = ZO(e, t);
      (n = (r ? (t ? -3e8 : -1) : 5e8) - 1),
        (s = (o ? (t ? 2e8 : 1) : -6e8) + 1);
    }
    return new zi(e, n, s, t, e.widget || null, !0);
  }
  static line(e) {
    return new mr(e);
  }
  static set(e, t = !1) {
    return ae.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
N.none = ae.empty;
class gr extends N {
  constructor(e) {
    let { start: t, end: n } = ZO(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || "span"),
      (this.class = e.class || ""),
      (this.attrs = e.attributes || null);
  }
  eq(e) {
    var t, n;
    return (
      this == e ||
      (e instanceof gr &&
        this.tagName == e.tagName &&
        (this.class ||
          ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) ==
          (e.class ||
            ((n = e.attrs) === null || n === void 0 ? void 0 : n.class)) &&
        Mo(this.attrs, e.attrs, "class"))
    );
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
gr.prototype.point = !1;
class mr extends N {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return (
      e instanceof mr &&
      this.spec.class == e.spec.class &&
      Mo(this.spec.attributes, e.spec.attributes)
    );
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
mr.prototype.mapMode = Ie.TrackBefore;
mr.prototype.point = !0;
class zi extends N {
  constructor(e, t, n, s, r, o) {
    super(t, n, r, e),
      (this.block = s),
      (this.isReplace = o),
      (this.mapMode = s
        ? t <= 0
          ? Ie.TrackBefore
          : Ie.TrackAfter
        : Ie.TrackDel);
  }
  get type() {
    return this.startSide != this.endSide
      ? at.WidgetRange
      : this.startSide <= 0
      ? at.WidgetBefore
      : at.WidgetAfter;
  }
  get heightRelevant() {
    return (
      this.block ||
      (!!this.widget &&
        (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
    );
  }
  eq(e) {
    return (
      e instanceof zi &&
      Ry(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    );
  }
  range(e, t = e) {
    if (
      this.isReplace &&
      (e > t || (e == t && this.startSide > 0 && this.endSide <= 0))
    )
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError(
        "Widget decorations can only have zero-length ranges"
      );
    return super.range(e, t);
  }
}
zi.prototype.point = !0;
function ZO(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return (
    t == null && (t = i.inclusive),
    n == null && (n = i.inclusive),
    { start: eval('t ?? e'), end: eval('n ?? e') }
  );
}
function Ry(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function rh(i, e, t, n = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + n >= i ? (t[s] = Math.max(t[s], e)) : t.push(i, e);
}
class _s {
  constructor(e, t, n, s) {
    (this.doc = e),
      (this.pos = t),
      (this.end = n),
      (this.disallowBlockEffectsFor = s),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.bufferMarks = []),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ""),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = t);
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || (e instanceof ui && e.deco.endSide < 0));
  }
  getLine() {
    return (
      this.curLine ||
        (this.content.push((this.curLine = new Re())), (this.atCursorPos = !0)),
      this.curLine
    );
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer &&
      (this.curLine.append(_r(new zn(-1), e), e.length),
      (this.pendingBuffer = 0));
  }
  addBlockWidget(e) {
    this.flushBuffer(), (this.curLine = null), this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length
      ? this.flushBuffer()
      : (this.pendingBuffer = 0),
      !this.posCovered() &&
        !(
          e &&
          this.content.length &&
          this.content[this.content.length - 1] instanceof ui
        ) &&
        this.getLine();
  }
  buildText(e, t, n) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (((this.skip = 0), l))
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer(),
            (this.curLine = null),
            (this.atCursorPos = !0),
            e--;
          continue;
        } else (this.text = r), (this.textOff = 0);
      }
      let s = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - n)),
        this.getLine().append(
          _r(new Yt(this.text.slice(this.textOff, this.textOff + s)), t),
          n
        ),
        (this.atCursorPos = !0),
        (this.textOff += s),
        (e -= s),
        (n = 0);
    }
  }
  span(e, t, n, s) {
    this.buildText(t - e, n, s),
      (this.pos = t),
      this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, n, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof zi) {
      if (n.block)
        throw new RangeError(
          "Block decorations may not be specified via plugins"
        );
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          "Decorations that replace line breaks may not be specified via plugins"
        );
    }
    let l = t - e;
    if (n instanceof zi)
      if (n.block)
        n.startSide > 0 && !this.posCovered() && this.getLine(),
          this.addBlockWidget(new ui(n.widget || In.block, l, n));
      else {
        let a = Ei.create(n.widget || In.inline, l, l ? 0 : n.startSide),
          h =
            this.atCursorPos &&
            !a.isEditable &&
            r <= s.length &&
            (e < t || n.startSide > 0),
          c = !a.isEditable && (e < t || r > s.length || n.startSide <= 0),
          f = this.getLine();
        this.pendingBuffer == 2 &&
          !h &&
          !a.isEditable &&
          (this.pendingBuffer = 0),
          this.flushBuffer(s),
          h &&
            (f.append(_r(new zn(1), s), r),
            (r = s.length + Math.max(0, r - s.length))),
          f.append(_r(a, s), r),
          (this.atCursorPos = c),
          (this.pendingBuffer = c ? (e < t || r > s.length ? 1 : 2) : 0),
          this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos &&
        this.getLine().addLineDeco(n);
    l &&
      (this.textOff + l <= this.text.length
        ? (this.textOff += l)
        : ((this.skip += l - (this.text.length - this.textOff)),
          (this.text = ""),
          (this.textOff = 0)),
      (this.pos = t)),
      this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, n, s, r) {
    let o = new _s(e, t, n, r);
    return (
      (o.openEnd = ae.spans(s, t, n, o)),
      o.openStart < 0 && (o.openStart = o.openEnd),
      o.finish(o.openEnd),
      o
    );
  }
}
function _r(i, e) {
  for (let t of e) i = new Oi(t, [i], i.length);
  return i;
}
class In extends xi {
  constructor(e) {
    super(), (this.tag = e);
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
In.inline = new In("span");
In.block = new In("div");
var Se = (function (i) {
  return (i[(i.LTR = 0)] = "LTR"), (i[(i.RTL = 1)] = "RTL"), i;
})(Se || (Se = {}));
const bn = Se.LTR,
  pc = Se.RTL;
function RO(i) {
  let e = [];
  for (let t = 0; t < i.length; t++) e.push(1 << +i[t]);
  return e;
}
const Ty = RO(
    "88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"
  ),
  Ay = RO(
    "4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"
  ),
  oh = Object.create(null),
  qt = [];
for (let i of ["()", "[]", "{}"]) {
  let e = i.charCodeAt(0),
    t = i.charCodeAt(1);
  (oh[e] = t), (oh[t] = -e);
}
function TO(i) {
  return i <= 247
    ? Ty[i]
    : 1424 <= i && i <= 1524
    ? 2
    : 1536 <= i && i <= 1785
    ? Ay[i - 1536]
    : 1774 <= i && i <= 2220
    ? 4
    : 8192 <= i && i <= 8204
    ? 256
    : 64336 <= i && i <= 65023
    ? 4
    : 1;
}
const My = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Wi {
  get dir() {
    return this.level % 2 ? pc : bn;
  }
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.level = n);
  }
  side(e, t) {
    return (this.dir == t) == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, n, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n) return o;
        (r < 0 ||
          (s != 0 ? (s < 0 ? l.from < t : l.to > t) : e[r].level > l.level)) &&
          (r = o);
      }
    }
    if (r < 0) throw new RangeError("Index out of range");
    return r;
  }
}
function AO(i, e) {
  if (i.length != e.length) return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t],
      s = e[t];
    if (
      n.from != s.from ||
      n.to != s.to ||
      n.direction != s.direction ||
      !AO(n.inner, s.inner)
    )
      return !1;
  }
  return !0;
}
const de = [];
function _y(i, e, t, n, s) {
  for (let r = 0; r <= n.length; r++) {
    let o = r ? n[r - 1].to : e,
      l = r < n.length ? n[r].from : t,
      a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = TO(i.charCodeAt(h));
      u == 512 ? (u = c) : u == 8 && f == 4 && (u = 16),
        (de[h] = u == 4 ? 2 : u),
        u & 7 && (f = u),
        (c = u);
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = de[h];
      if (u == 128)
        h < l - 1 && c == de[h + 1] && c & 24 ? (u = de[h] = c) : (de[h] = 256);
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && de[d] == 64; ) d++;
        let p = (h && c == 8) || (d < t && de[d] == 8) ? (f == 1 ? 1 : 8) : 256;
        for (let O = h; O < d; O++) de[O] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (de[h] = 1);
      (c = u), u & 7 && (f = u);
    }
  }
}
function Ey(i, e, t, n, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let h = o ? n[o - 1].to : e,
      c = o < n.length ? n[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if ((d = oh[(u = i.charCodeAt(f))]))
        if (d < 0) {
          for (let O = l - 3; O >= 0; O -= 3)
            if (qt[O + 1] == -d) {
              let m = qt[O + 2],
                b = m & 2 ? s : m & 4 ? (m & 1 ? r : s) : 0;
              b && (de[f] = de[qt[O]] = b), (l = O);
              break;
            }
        } else {
          if (qt.length == 189) break;
          (qt[l++] = f), (qt[l++] = u), (qt[l++] = a);
        }
      else if ((p = de[f]) == 2 || p == 1) {
        let O = p == s;
        a = O ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let b = qt[m + 2];
          if (b & 2) break;
          if (O) qt[m + 2] |= 2;
          else {
            if (b & 4) break;
            qt[m + 2] |= 4;
          }
        }
      }
  }
}
function Wy(i, e, t, n) {
  for (let s = 0, r = n; s <= t.length; s++) {
    let o = s ? t[s - 1].to : i,
      l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let h = de[a];
      if (h == 256) {
        let c = a + 1;
        for (;;)
          if (c == l) {
            if (s == t.length) break;
            (c = t[s++].to), (l = s < t.length ? t[s].from : e);
          } else if (de[c] == 256) c++;
          else break;
        let f = r == 1,
          u = (c < e ? de[c] : n) == 1,
          d = f == u ? (f ? 1 : 2) : n;
        for (let p = c, O = s, m = O ? t[O - 1].to : i; p > a; )
          p == m && ((p = t[--O].from), (m = O ? t[O - 1].to : i)),
            (de[--p] = d);
        a = c;
      } else (r = h), a++;
    }
  }
}
function lh(i, e, t, n, s, r, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0,
        f = !1;
      if (h == r.length || a < r[h].from) {
        let O = de[a];
        O != l && ((c = !1), (f = O == 16));
      }
      let u = !c && l == 1 ? [] : null,
        d = c ? n : n + 1,
        p = a;
      e: for (;;)
        if (h < r.length && p == r[h].from) {
          if (f) break e;
          let O = r[h];
          if (!c)
            for (let m = O.to, b = h + 1; ; ) {
              if (m == t) break e;
              if (b < r.length && r[b].from == m) m = r[b++].to;
              else {
                if (de[m] == l) break e;
                break;
              }
            }
          if ((h++, u)) u.push(O);
          else {
            O.from > a && o.push(new Wi(a, O.from, d));
            let m = (O.direction == bn) != !(d % 2);
            ah(i, m ? n + 1 : n, s, O.inner, O.from, O.to, o), (a = O.to);
          }
          p = O.to;
        } else {
          if (p == t || (c ? de[p] != l : de[p] == l)) break;
          p++;
        }
      u ? lh(i, a, p, n + 1, s, u, o) : a < p && o.push(new Wi(a, p, d)),
        (a = p);
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0,
        f = !1;
      if (!h || a > r[h - 1].to) {
        let O = de[a - 1];
        O != l && ((c = !1), (f = O == 16));
      }
      let u = !c && l == 1 ? [] : null,
        d = c ? n : n + 1,
        p = a;
      e: for (;;)
        if (h && p == r[h - 1].to) {
          if (f) break e;
          let O = r[--h];
          if (!c)
            for (let m = O.from, b = h; ; ) {
              if (m == e) break e;
              if (b && r[b - 1].to == m) m = r[--b].from;
              else {
                if (de[m - 1] == l) break e;
                break;
              }
            }
          if (u) u.push(O);
          else {
            O.to < a && o.push(new Wi(O.to, a, d));
            let m = (O.direction == bn) != !(d % 2);
            ah(i, m ? n + 1 : n, s, O.inner, O.from, O.to, o), (a = O.from);
          }
          p = O.from;
        } else {
          if (p == e || (c ? de[p - 1] != l : de[p - 1] == l)) break;
          p--;
        }
      u ? lh(i, p, a, n + 1, s, u, o) : p < a && o.push(new Wi(p, a, d)),
        (a = p);
    }
}
function ah(i, e, t, n, s, r, o) {
  let l = e % 2 ? 2 : 1;
  _y(i, s, r, n, l), Ey(i, s, r, n, l), Wy(s, r, n, l), lh(i, s, r, e, t, n, o);
}
function Xy(i, e, t) {
  if (!i) return [new Wi(0, 0, e == pc ? 1 : 0)];
  if (e == bn && !t.length && !My.test(i)) return MO(i.length);
  if (t.length) for (; i.length > de.length; ) de[de.length] = 256;
  let n = [],
    s = e == bn ? 0 : 1;
  return ah(i, s, s, t, 0, i.length, n), n;
}
function MO(i) {
  return [new Wi(0, i, 0)];
}
let _O = "";
function Dy(i, e, t, n, s) {
  var r;
  let o = n.head - i.from,
    l = Wi.find(
      e,
      o,
      (r = n.bidiLevel) !== null && r !== void 0 ? r : -1,
      n.assoc
    ),
    a = e[l],
    h = a.side(s, t);
  if (o == h) {
    let u = (l += s ? 1 : -1);
    if (u < 0 || u >= e.length) return null;
    (a = e[(l = u)]), (o = a.side(!s, t)), (h = a.side(s, t));
  }
  let c = Be(i.text, o, a.forward(s, t));
  (c < a.from || c > a.to) && (c = h),
    (_O = i.text.slice(Math.min(o, c), Math.max(o, c)));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level
    ? v.cursor(f.side(!s, t) + i.from, f.forward(s, t) ? 1 : -1, f.level)
    : v.cursor(c + i.from, a.forward(s, t) ? -1 : 1, a.level);
}
function Yy(i, e, t) {
  for (let n = e; n < t; n++) {
    let s = TO(i.charCodeAt(n));
    if (s == 1) return bn;
    if (s == 2 || s == 4) return pc;
  }
  return bn;
}
const EO = z.define(),
  WO = z.define(),
  XO = z.define(),
  DO = z.define(),
  hh = z.define(),
  YO = z.define(),
  jO = z.define(),
  LO = z.define({ combine: (i) => i.some((e) => e) }),
  UO = z.define({ combine: (i) => i.some((e) => e) }),
  VO = z.define();
class Dn {
  constructor(e, t = "nearest", n = "nearest", s = 5, r = 5, o = !1) {
    (this.range = e),
      (this.y = t),
      (this.x = n),
      (this.yMargin = s),
      (this.xMargin = r),
      (this.isSnapshot = o);
  }
  map(e) {
    return e.empty
      ? this
      : new Dn(
          this.range.map(e),
          this.y,
          this.x,
          this.yMargin,
          this.xMargin,
          this.isSnapshot
        );
  }
  clip(e) {
    return this.range.to <= e.doc.length
      ? this
      : new Dn(
          v.cursor(e.doc.length),
          this.y,
          this.x,
          this.yMargin,
          this.xMargin,
          this.isSnapshot
        );
  }
}
const Er = ee.define({ map: (i, e) => i.map(e) }),
  qO = ee.define();
function dt(i, e, t) {
  let n = i.facet(DO);
  n.length
    ? n[0](e)
    : window.onerror
    ? window.onerror(String(e), t, void 0, void 0, e)
    : t
    ? console.error(t + ":", e)
    : console.error(e);
}
const Ai = z.define({ combine: (i) => (i.length ? i[0] : !0) });
let jy = 0;
const gs = z.define();
class Me {
  constructor(e, t, n, s, r) {
    (this.id = e),
      (this.create = t),
      (this.domEventHandlers = n),
      (this.domEventObservers = s),
      (this.extension = r(this));
  }
  static define(e, t) {
    const {
      eventHandlers: n,
      eventObservers: s,
      provide: r,
      decorations: o,
    } = t || {};
    return new Me(jy++, e, n, s, (l) => {
      let a = [gs.of(l)];
      return (
        o &&
          a.push(
            Fs.of((h) => {
              let c = h.plugin(l);
              return c ? o(c) : N.none;
            })
          ),
        r && a.push(r(l)),
        a
      );
    });
  }
  static fromClass(e, t) {
    return Me.define((n) => new e(n), t);
  }
}
class Hl {
  constructor(e) {
    (this.spec = e), (this.mustUpdate = null), (this.value = null);
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(t);
          } catch (n) {
            if (
              (dt(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
            )
              try {
                this.value.destroy();
              } catch {}
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        dt(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        dt(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const zO = z.define(),
  Oc = z.define(),
  Fs = z.define(),
  IO = z.define(),
  gc = z.define(),
  NO = z.define();
function Kf(i, e) {
  let t = i.state.facet(NO);
  if (!t.length) return t;
  let n = t.map((r) => (r instanceof Function ? r(i) : r)),
    s = [];
  return (
    ae.spans(n, e.from, e.to, {
      point() {},
      span(r, o, l, a) {
        let h = r - e.from,
          c = o - e.from,
          f = s;
        for (let u = l.length - 1; u >= 0; u--, a--) {
          let d = l[u].spec.bidiIsolate,
            p;
          if (
            (d == null && (d = Yy(e.text, h, c)),
            a > 0 &&
              f.length &&
              (p = f[f.length - 1]).to == h &&
              p.direction == d)
          )
            (p.to = c), (f = p.inner);
          else {
            let O = { from: h, to: c, direction: d, inner: [] };
            f.push(O), (f = O.inner);
          }
        }
      },
    }),
    s
  );
}
const BO = z.define();
function GO(i) {
  let e = 0,
    t = 0,
    n = 0,
    s = 0;
  for (let r of i.state.facet(BO)) {
    let o = r(i);
    o &&
      (o.left != null && (e = Math.max(e, o.left)),
      o.right != null && (t = Math.max(t, o.right)),
      o.top != null && (n = Math.max(n, o.top)),
      o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: s };
}
const ms = z.define();
class Rt {
  constructor(e, t, n, s) {
    (this.fromA = e), (this.toA = t), (this.fromB = n), (this.toB = s);
  }
  join(e) {
    return new Rt(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB)
    );
  }
  addToSet(e) {
    let t = e.length,
      n = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > n.toA)) {
        if (s.toA < n.fromA) break;
        (n = n.join(s)), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let n = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s],
        h = o - l,
        c = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < c; ) {
        let f = t[r],
          u = t[r + 1],
          d = Math.max(l, f),
          p = Math.min(c, u);
        if ((d <= p && new Rt(d + h, p + h, d, p).addToSet(n), u > c)) break;
        r += 2;
      }
      if (!a) return n;
      new Rt(a.fromA, a.toA, a.fromB, a.toB).addToSet(n),
        (o = a.toA),
        (l = a.toB);
    }
  }
}
class _o {
  constructor(e, t, n) {
    (this.view = e),
      (this.state = t),
      (this.transactions = n),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = Xe.empty(this.startState.doc.length));
    for (let r of n) this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Rt(r, o, l, a))),
      (this.changedRanges = s);
  }
  static create(e, t, n) {
    return new _o(e, t, n);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Jf extends Oe {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(),
      (this.view = e),
      (this.decorations = []),
      (this.dynamicDecorationMap = [!1]),
      (this.domChanged = null),
      (this.hasComposition = null),
      (this.markedForComposition = new Set()),
      (this.editContextFormatting = N.none),
      (this.lastCompositionAfterCursor = !1),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new Re()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new Rt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 &&
      n.length &&
      (n.every(
        ({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo
      )
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
      this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 &&
      !this.view.observer.editContext &&
      (!((t = this.domChanged) === null || t === void 0) && t.newSel
        ? (s = this.domChanged.newSel.head)
        : !Ny(e.changes, this.hasComposition) &&
          !e.selectionSet &&
          (s = e.state.selection.main.head));
    let r = s > -1 ? Uy(this.view, e.changes, s) : null;
    if (((this.domChanged = null), this.hasComposition)) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      n = new Rt(
        h,
        c,
        e.changes.mapPos(h, -1),
        e.changes.mapPos(c, 1)
      ).addToSet(n.slice());
    }
    (this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null),
      (V.ie || V.chrome) &&
        !r &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0);
    let o = this.decorations,
      l = this.updateDeco(),
      a = zy(o, l, e.changes);
    return (
      (n = Rt.extendWithRanges(n, a)),
      !(this.flags & 7) && n.length == 0
        ? !1
        : (this.updateInner(n, e.startState.doc.length, r),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    );
  }
  updateInner(e, t, n) {
    (this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t, n);
    let { observer: s } = this.view;
    s.ignore(() => {
      (this.dom.style.height =
        this.view.viewState.contentHeight / this.view.scaleY + "px"),
        (this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "");
      let o =
        V.chrome || V.ios
          ? { node: s.selectionRange.focusNode, written: !1 }
          : void 0;
      this.sync(this.view, o),
        (this.flags &= -8),
        o &&
          (o.written || s.selectionRange.focusNode != o.node) &&
          (this.forceSelection = !0),
        (this.dom.style.height = "");
    }),
      this.markedForComposition.forEach((o) => (o.flags &= -9));
    let r = [];
    if (
      this.view.viewport.from ||
      this.view.viewport.to < this.view.state.doc.length
    )
      for (let o of this.children)
        o instanceof ui && o.widget instanceof eu && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, n) {
    let s = n ? n.range.addToSet(e.slice()) : e,
      r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l) break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l,
        u,
        d,
        p,
        O;
      if (n && n.range.fromB < f && n.range.toB > c) {
        let x = _s.build(
            this.view.state.doc,
            c,
            n.range.fromB,
            this.decorations,
            this.dynamicDecorationMap
          ),
          Q = _s.build(
            this.view.state.doc,
            n.range.toB,
            f,
            this.decorations,
            this.dynamicDecorationMap
          );
        (d = x.breakAtStart), (p = x.openStart), (O = Q.openEnd);
        let $ = this.compositionView(n);
        Q.breakAtStart
          ? ($.breakAfter = 1)
          : Q.content.length &&
            $.merge($.length, $.length, Q.content[0], !1, Q.openStart, 0) &&
            (($.breakAfter = Q.content[0].breakAfter), Q.content.shift()),
          x.content.length &&
            $.merge(0, 0, x.content[x.content.length - 1], !0, 0, x.openEnd) &&
            x.content.pop(),
          (u = x.content.concat($).concat(Q.content));
      } else
        ({
          content: u,
          breakAtStart: d,
          openStart: p,
          openEnd: O,
        } = _s.build(
          this.view.state.doc,
          c,
          f,
          this.decorations,
          this.dynamicDecorationMap
        ));
      let { i: m, off: b } = r.findPos(h, 1),
        { i: S, off: P } = r.findPos(a, -1);
      wO(this, S, P, m, b, u, d, p, O);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(qO) && (this.editContextFormatting = n.value);
  }
  compositionView(e) {
    let t = new Yt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks) t = new Oi(s, [t], t.length);
    let n = new Re();
    return n.append(t, 0), n;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
        (o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0)),
          this.markedForComposition.add(o);
        let l = Oe.get(r);
        l && l != o && (l.dom = null), o.setDOM(r);
      },
      n = this.childPos(e.range.fromB, 1),
      s = this.children[n.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      (n = s.childPos(n.off, 1)),
        (s = s.children[n.i]),
        t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) &&
      this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement,
      s = n == this.dom,
      r =
        !s &&
        lo(this.dom, this.view.observer.selectionRange) &&
        !(n && this.dom.contains(n));
    if (!(s || t || r)) return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main,
      a = this.moveToLine(this.domAtPos(l.anchor)),
      h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (V.gecko && l.empty && !this.hasComposition && Ly(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() =>
        a.node.insertBefore(f, a.node.childNodes[a.offset] || null)
      ),
        (a = h = new et(f, 0)),
        (o = !0);
    }
    let c = this.view.observer.selectionRange;
    (o ||
      !c.focusNode ||
      ((!Ms(a.node, a.offset, c.anchorNode, c.anchorOffset) ||
        !Ms(h.node, h.offset, c.focusNode, c.focusOffset)) &&
        !this.suppressWidgetCursorChange(c, l))) &&
      (this.view.observer.ignore(() => {
        V.android &&
          V.chrome &&
          this.dom.contains(c.focusNode) &&
          Iy(c.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
        let f = Bs(this.view.root);
        if (f)
          if (l.empty) {
            if (V.gecko) {
              let u = Vy(a.node, a.offset);
              if (u && u != 3) {
                let d = (u == 1 ? yO : xO)(a.node, a.offset);
                d && (a = new et(d.node, d.offset));
              }
            }
            f.collapse(a.node, a.offset),
              l.bidiLevel != null &&
                f.caretBidiLevel !== void 0 &&
                (f.caretBidiLevel = l.bidiLevel);
          } else if (f.extend) {
            f.collapse(a.node, a.offset);
            try {
              f.extend(h.node, h.offset);
            } catch {}
          } else {
            let u = document.createRange();
            l.anchor > l.head && ([a, h] = [h, a]),
              u.setEnd(h.node, h.offset),
              u.setStart(a.node, a.offset),
              f.removeAllRanges(),
              f.addRange(u);
          }
        r &&
          this.view.root.activeElement == this.dom &&
          (this.dom.blur(), n && n.focus());
      }),
      this.view.observer.setSelectionRange(a, h)),
      (this.impreciseAnchor = a.precise
        ? null
        : new et(c.anchorNode, c.anchorOffset)),
      (this.impreciseHead = h.precise
        ? null
        : new et(c.focusNode, c.focusOffset));
  }
  suppressWidgetCursorChange(e, t) {
    return (
      this.hasComposition &&
      t.empty &&
      Ms(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) &&
      this.posFromDOM(e.focusNode, e.focusOffset) == t.head
    );
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this,
      t = e.state.selection.main,
      n = Bs(e.root),
      { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify) return;
    let o = Re.find(this, t.head);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1),
      h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top) return;
    let c = this.domAtPos(t.head + t.assoc);
    n.collapse(c.node, c.offset),
      n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"),
      e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from &&
      n.collapse(s, r);
  }
  moveToLine(e) {
    let t = this.dom,
      n;
    if (e.node != t) return e;
    for (let s = e.offset; !n && s < t.childNodes.length; s++) {
      let r = Oe.get(t.childNodes[s]);
      r instanceof Re && (n = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !n && s >= 0; s--) {
      let r = Oe.get(t.childNodes[s]);
      r instanceof Re && (n = r.domAtPos(r.length));
    }
    return n ? new et(n.node, n.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = Oe.get(t);
      if (n && n.rootView == this) return n;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let n = this.nearest(e);
    if (!n)
      throw new RangeError(
        "Trying to find position for a DOM position outside of the document"
      );
    return n.localPosFromDOM(e, t) + n.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: n } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (n < s.length || s instanceof Re) break;
      t++, (n = 0);
    }
    return this.children[t].domAtPos(n);
  }
  coordsAt(e, t) {
    let n = null,
      s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o],
        a = r - l.breakAfter,
        h = a - l.length;
      if (a < e) break;
      if (
        h <= e &&
        (h < e || l.covers(-1)) &&
        (a > e || l.covers(1)) &&
        (!n || (l instanceof Re && !(n instanceof Re && t >= 0)))
      )
        (n = l), (s = h);
      else if (n && h == e && a == e && l instanceof ui && Math.abs(t) < 2) {
        if (l.deco.startSide < 0) break;
        o && (n = null);
      }
      r = h;
    }
    return n ? n.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: n } = this.childPos(e, 1),
      s = this.children[t];
    if (!(s instanceof Re)) return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(n, 1);
      for (; ; l++) {
        if (l == s.children.length) return null;
        if ((s = s.children[l]).length) break;
      }
      n = a;
    }
    if (!(s instanceof Yt)) return null;
    let r = Be(s.text, n);
    if (r == n) return null;
    let o = mn(s.dom, n, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || (a.top < a.bottom && a.left < a.right)) return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [],
      { from: n, to: s } = e,
      r = this.view.contentDOM.clientWidth,
      o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      l = -1,
      a = this.view.textDirection == Se.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c],
        u = h + f.length;
      if (u > s) break;
      if (h >= n) {
        let d = f.dom.getBoundingClientRect();
        if ((t.push(d.height), o)) {
          let p = f.dom.lastChild,
            O = p ? Gs(p) : [];
          if (O.length) {
            let m = O[O.length - 1],
              b = a ? m.right - d.left : d.right - m.left;
            b > l &&
              ((l = b),
              (this.minWidth = r),
              (this.minWidthFrom = h),
              (this.minWidthTo = u));
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl"
      ? Se.RTL
      : Se.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof Re) {
        let o = r.measureTextSize();
        if (o) return o;
      }
    let e = document.createElement("div"),
      t,
      n,
      s;
    return (
      (e.className = "cm-line"),
      (e.style.width = "99999px"),
      (e.style.position = "absolute"),
      (e.textContent = "abc def ghi jkl mno pqr stu"),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e);
        let r = Gs(e.firstChild)[0];
        (t = e.getBoundingClientRect().height),
          (n = r ? r.width / 27 : 7),
          (s = r ? r.height : t),
          e.remove();
      }),
      { lineHeight: t, charWidth: n, textHeight: s }
    );
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new SO(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [],
      t = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s],
        o = r ? r.from - 1 : this.length;
      if (o > n) {
        let l =
          (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(
          N.replace({
            widget: new eu(l),
            block: !0,
            inclusive: !0,
            isBlockGap: !0,
          }).range(n, o)
        );
      }
      if (!r) break;
      n = r.to + 1;
    }
    return N.set(e);
  }
  updateDeco() {
    let e = 1,
      t = this.view.state
        .facet(Fs)
        .map((r) =>
          (this.dynamicDecorationMap[e++] = typeof r == "function")
            ? r(this.view)
            : r
        ),
      n = !1,
      s = this.view.state.facet(IO).map((r, o) => {
        let l = typeof r == "function";
        return l && (n = !0), l ? r(this.view) : r;
      });
    for (
      s.length && ((this.dynamicDecorationMap[e++] = n), t.push(ae.join(s))),
        this.decorations = [
          this.editContextFormatting,
          ...t,
          this.computeBlockGapDeco(),
          this.view.viewState.lineGapDeco,
        ];
      e < this.decorations.length;

    )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      (this.view.scrollDOM.scrollTop = h.top - e.yMargin),
        (this.view.scrollDOM.scrollLeft = e.xMargin);
      return;
    }
    for (let h of this.view.state.facet(VO))
      try {
        if (h(this.view, e.range, e)) return !0;
      } catch (c) {
        dt(this.view.state, c, "scroll handler");
      }
    let { range: t } = e,
      n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
      s;
    if (!n) return;
    !t.empty &&
      (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
      (n = {
        left: Math.min(n.left, s.left),
        top: Math.min(n.top, s.top),
        right: Math.max(n.right, s.right),
        bottom: Math.max(n.bottom, s.bottom),
      });
    let r = GO(this.view),
      o = {
        left: n.left - r.left,
        top: n.top - r.top,
        right: n.right + r.right,
        bottom: n.bottom + r.bottom,
      },
      { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Sy(
      this.view.scrollDOM,
      o,
      t.head < t.anchor ? -1 : 1,
      e.x,
      e.y,
      Math.max(Math.min(e.xMargin, l), -l),
      Math.max(Math.min(e.yMargin, a), -a),
      this.view.textDirection == Se.LTR
    );
  }
}
function Ly(i) {
  return (
    i.node.nodeType == 1 &&
    i.node.firstChild &&
    (i.offset == 0 ||
      i.node.childNodes[i.offset - 1].contentEditable == "false") &&
    (i.offset == i.node.childNodes.length ||
      i.node.childNodes[i.offset].contentEditable == "false")
  );
}
class eu extends xi {
  constructor(e) {
    super(), (this.height = e);
  }
  toDOM() {
    let e = document.createElement("div");
    return (e.className = "cm-gap"), this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return (e.style.height = this.height + "px"), !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function FO(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode) return null;
  let n = yO(t.focusNode, t.focusOffset),
    s = xO(t.focusNode, t.focusOffset),
    r = n || s;
  if (s && n && s.node != n.node) {
    let l = Oe.get(s.node);
    if (!l || (l instanceof Yt && l.text != s.node.nodeValue)) r = s;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = Oe.get(n.node);
      !a || (a instanceof Yt && a.text != n.node.nodeValue) || (r = s);
    }
  }
  if (((i.docView.lastCompositionAfterCursor = r != n), !r)) return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Uy(i, e, t) {
  let n = FO(i, t);
  if (!n) return null;
  let { node: s, from: r, to: o } = n,
    l = s.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = e.invertedDesc,
    h = new Rt(a.mapPos(r), a.mapPos(o), r, o),
    c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = Oe.get(f);
    if (u instanceof Oi) c.push({ node: f, deco: u.mark });
    else {
      if (
        u instanceof Re ||
        (f.nodeName == "DIV" && f.parentNode == i.contentDOM)
      )
        return { range: h, text: s, marks: c, line: f };
      if (f != i.contentDOM)
        c.push({
          node: f,
          deco: new gr({
            inclusive: !0,
            attributes: Zy(f),
            tagName: f.tagName.toLowerCase(),
          }),
        });
      else return null;
    }
  }
}
function Vy(i, e) {
  return i.nodeType != 1
    ? 0
    : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) |
        (e < i.childNodes.length && i.childNodes[e].contentEditable == "false"
          ? 2
          : 0);
}
let qy = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    rh(e, t, this.changes);
  }
  comparePoint(e, t) {
    rh(e, t, this.changes);
  }
};
function zy(i, e, t) {
  let n = new qy();
  return ae.compare(i, e, t, n), n.changes;
}
function Iy(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false") return !0;
  return !1;
}
function Ny(i, e) {
  let t = !1;
  return (
    e &&
      i.iterChangedRanges((n, s) => {
        n < e.to && s > e.from && (t = !0);
      }),
    t
  );
}
function By(i, e, t = 1) {
  let n = i.charCategorizer(e),
    s = i.doc.lineAt(e),
    r = e - s.from;
  if (s.length == 0) return v.cursor(e);
  r == 0 ? (t = 1) : r == s.length && (t = -1);
  let o = r,
    l = r;
  t < 0 ? (o = Be(s.text, r, !1)) : (l = Be(s.text, r));
  let a = n(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = Be(s.text, o, !1);
    if (n(s.text.slice(h, o)) != a) break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = Be(s.text, l);
    if (n(s.text.slice(l, h)) != a) break;
    l = h;
  }
  return v.range(o + s.from, l + s.from);
}
function Gy(i, e) {
  return e.left > i ? e.left - i : Math.max(0, i - e.right);
}
function Fy(i, e) {
  return e.top > i ? e.top - i : Math.max(0, i - e.bottom);
}
function Kl(i, e) {
  return i.top < e.bottom - 1 && i.bottom > e.top + 1;
}
function tu(i, e) {
  return e < i.top
    ? { top: e, left: i.left, right: i.right, bottom: i.bottom }
    : i;
}
function iu(i, e) {
  return e > i.bottom
    ? { top: i.top, left: i.left, right: i.right, bottom: e }
    : i;
}
function ch(i, e, t) {
  let n,
    s,
    r,
    o,
    l = !1,
    a,
    h,
    c,
    f;
  for (let p = i.firstChild; p; p = p.nextSibling) {
    let O = Gs(p);
    for (let m = 0; m < O.length; m++) {
      let b = O[m];
      s && Kl(s, b) && (b = tu(iu(b, s.bottom), s.top));
      let S = Gy(e, b),
        P = Fy(t, b);
      if (S == 0 && P == 0) return p.nodeType == 3 ? nu(p, e, t) : ch(p, e, t);
      if (!n || o > P || (o == P && r > S)) {
        (n = p), (s = b), (r = S), (o = P);
        let x = P ? (t < b.top ? -1 : 1) : S ? (e < b.left ? -1 : 1) : 0;
        l = !x || (x > 0 ? m < O.length - 1 : m > 0);
      }
      S == 0
        ? t > b.bottom && (!c || c.bottom < b.bottom)
          ? ((a = p), (c = b))
          : t < b.top && (!f || f.top > b.top) && ((h = p), (f = b))
        : c && Kl(c, b)
        ? (c = iu(c, b.bottom))
        : f && Kl(f, b) && (f = tu(f, b.top));
    }
  }
  if (
    (c && c.bottom >= t
      ? ((n = a), (s = c))
      : f && f.top <= t && ((n = h), (s = f)),
    !n)
  )
    return { node: i, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (n.nodeType == 3) return nu(n, u, t);
  if (l && n.contentEditable != "false") return ch(n, u, t);
  let d =
    Array.prototype.indexOf.call(i.childNodes, n) +
    (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function nu(i, e, t) {
  let n = i.nodeValue.length,
    s = -1,
    r = 1e9,
    o = 0;
  for (let l = 0; l < n; l++) {
    let a = mn(i, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom) continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2,
          d = u;
        if (
          ((V.chrome || V.gecko) &&
            mn(i, l).getBoundingClientRect().left == c.right &&
            (d = !u),
          f <= 0)
        )
          return { node: i, offset: l + (d ? 1 : 0) };
        (s = l + (d ? 1 : 0)), (r = f);
      }
    }
  }
  return { node: i, offset: s > -1 ? s : o > 0 ? i.nodeValue.length : 0 };
}
function HO(i, e, t, n = -1) {
  var s, r;
  let o = i.contentDOM.getBoundingClientRect(),
    l = o.top + i.viewState.paddingTop,
    a,
    { docHeight: h } = i.viewState,
    { x: c, y: f } = e,
    u = f - l;
  if (u < 0) return 0;
  if (u > h) return i.state.doc.length;
  for (
    let x = i.viewState.heightOracle.textHeight / 2, Q = !1;
    (a = i.elementAtHeight(u)), a.type != at.Text;

  )
    for (; (u = n > 0 ? a.bottom + x : a.top - x), !(u >= 0 && u <= h); ) {
      if (Q) return t ? null : 0;
      (Q = !0), (n = -n);
    }
  f = l + u;
  let d = a.from;
  if (d < i.viewport.from)
    return i.viewport.from == 0 ? 0 : t ? null : su(i, o, a, c, f);
  if (d > i.viewport.to)
    return i.viewport.to == i.state.doc.length
      ? i.state.doc.length
      : t
      ? null
      : su(i, o, a, c, f);
  let p = i.dom.ownerDocument,
    O = i.root.elementFromPoint ? i.root : p,
    m = O.elementFromPoint(c, f);
  m && !i.contentDOM.contains(m) && (m = null),
    m ||
      ((c = Math.max(o.left + 1, Math.min(o.right - 1, c))),
      (m = O.elementFromPoint(c, f)),
      m && !i.contentDOM.contains(m) && (m = null));
  let b,
    S = -1;
  if (
    m &&
    ((s = i.docView.nearest(m)) === null || s === void 0
      ? void 0
      : s.isEditable) != !1
  ) {
    if (p.caretPositionFromPoint) {
      let x = p.caretPositionFromPoint(c, f);
      x && ({ offsetNode: b, offset: S } = x);
    } else if (p.caretRangeFromPoint) {
      let x = p.caretRangeFromPoint(c, f);
      x &&
        (({ startContainer: b, startOffset: S } = x),
        (!i.contentDOM.contains(b) ||
          (V.safari && Hy(b, S, c)) ||
          (V.chrome && Ky(b, S, c))) &&
          (b = void 0));
    }
  }
  if (!b || !i.docView.dom.contains(b)) {
    let x = Re.find(i.docView, d);
    if (!x) return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: b, offset: S } = ch(x.dom, c, f));
  }
  let P = i.docView.nearest(b);
  if (!P) return null;
  if (
    P.isWidget &&
    ((r = P.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1
  ) {
    let x = P.dom.getBoundingClientRect();
    return e.y < x.top || (e.y <= x.bottom && e.x <= (x.left + x.right) / 2)
      ? P.posAtStart
      : P.posAtEnd;
  } else return P.localPosFromDOM(b, S) + P.posAtStart;
}
function su(i, e, t, n, s) {
  let r = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight,
      a = Math.floor((s - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    r += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + Fa(o, r, i.state.tabSize);
}
function Hy(i, e, t) {
  let n;
  if (i.nodeType != 3 || e != (n = i.nodeValue.length)) return !1;
  for (let s = i.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR") return !1;
  return mn(i, n - 1, n).getBoundingClientRect().left > t;
}
function Ky(i, e, t) {
  if (e != 0) return !1;
  for (let s = i; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s) return !1;
    if (r.classList.contains("cm-line")) break;
    s = r;
  }
  let n =
    i.nodeType == 1
      ? i.getBoundingClientRect()
      : mn(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return t - n.left > 5;
}
function fh(i, e) {
  let t = i.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let n of t.type)
      if (n.to > e || (n.to == e && (n.to == t.to || n.type == at.Text)))
        return n;
  }
  return t;
}
function Jy(i, e, t, n) {
  let s = fh(i, e.head),
    r =
      !n || s.type != at.Text || !(i.lineWrapping || s.widgetLineBreaks)
        ? null
        : i.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = i.dom.getBoundingClientRect(),
      l = i.textDirectionAt(s.from),
      a = i.posAtCoords({
        x: t == (l == Se.LTR) ? o.right - 1 : o.left + 1,
        y: (r.top + r.bottom) / 2,
      });
    if (a != null) return v.cursor(a, t ? -1 : 1);
  }
  return v.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function ru(i, e, t, n) {
  let s = i.state.doc.lineAt(e.head),
    r = i.bidiSpans(s),
    o = i.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = Dy(s, r, o, l, t),
      c = _O;
    if (!h) {
      if (s.number == (t ? i.state.doc.lines : 1)) return l;
      (c = "\n"),
        (s = i.state.doc.line(s.number + (t ? 1 : -1))),
        (r = i.bidiSpans(s)),
        (h = i.visualLineSide(s, !t));
    }
    if (a) {
      if (!a(c)) return l;
    } else {
      if (!n) return h;
      a = n(c);
    }
    l = h;
  }
}
function ex(i, e, t) {
  let n = i.state.charCategorizer(e),
    s = n(t);
  return (r) => {
    let o = n(r);
    return s == Pe.Space && (s = o), s == o;
  };
}
function tx(i, e, t, n) {
  let s = e.head,
    r = t ? 1 : -1;
  if (s == (t ? i.state.doc.length : 0)) return v.cursor(s, e.assoc);
  let o = e.goalColumn,
    l,
    a = i.contentDOM.getBoundingClientRect(),
    h = i.coordsAtPos(s, e.assoc || -1),
    c = i.documentTop;
  if (h) o == null && (o = h.left - a.left), (l = r < 0 ? h.top : h.bottom);
  else {
    let d = i.viewState.lineBlockAt(s);
    o == null &&
      (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (s - d.from))),
      (l = (r < 0 ? d.top : d.bottom) + c);
  }
  let f = a.left + o,
    u = eval('n ?? i.viewState.heightOracle.textHeight >> 1');
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r,
      O = HO(i, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? O < s : O > s)) {
      let m = i.docView.coordsForChar(O),
        b = !m || p < m.top ? -1 : 1;
      return v.cursor(O, b, void 0, o);
    }
  }
}
function ao(i, e, t) {
  for (;;) {
    let n = 0;
    for (let s of i)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = n || t || (e - r < o - e ? -1 : 1);
          (e = a < 0 ? r : o), (n = a);
        }
      });
    if (!n) return e;
  }
}
function Jl(i, e, t) {
  let n = ao(
    i.state.facet(gc).map((s) => s(i)),
    t.from,
    e.head > t.from ? -1 : 1
  );
  return n == t.from ? t : v.cursor(n, n < t.from ? 1 : -1);
}
class ix {
  setSelectionOrigin(e) {
    (this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
  }
  constructor(e) {
    (this.view = e),
      (this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.lastTouchTime = 0),
      (this.lastFocusTime = 0),
      (this.lastScrollTop = 0),
      (this.lastScrollLeft = 0),
      (this.pendingIOSKey = void 0),
      (this.tabFocusMode = -1),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.handlers = Object.create(null)),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.compositionPendingKey = !1),
      (this.compositionPendingChange = !1),
      (this.mouseSelection = null),
      (this.draggedContent = null),
      (this.handleEvent = this.handleEvent.bind(this)),
      (this.notifiedFocused = e.hasFocus),
      V.safari && e.contentDOM.addEventListener("input", () => null),
      V.gecko && bx(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !cx(this.view, e) ||
      this.ignoreDuringComposition(e) ||
      (e.type == "keydown" && this.keydown(e)) ||
      this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let s of n.observers) s(this.view, t);
      for (let s of n.handlers) {
        if (t.defaultPrevented) break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = nx(e),
      n = this.handlers,
      s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length,
          l = n[r];
        l &&
          o != !l.handlers.length &&
          (s.removeEventListener(r, this.handleEvent), (l = null)),
          l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in n)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (
      ((this.lastKeyCode = e.keyCode),
      (this.lastKeyTime = Date.now()),
      e.keyCode == 9 &&
        this.tabFocusMode > -1 &&
        (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
    )
      return !0;
    if (
      (this.tabFocusMode > 0 &&
        e.keyCode != 27 &&
        JO.indexOf(e.keyCode) < 0 &&
        (this.tabFocusMode = -1),
      V.android &&
        V.chrome &&
        !e.synthetic &&
        (e.keyCode == 13 || e.keyCode == 8))
    )
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return V.ios &&
      !e.synthetic &&
      !e.altKey &&
      !e.metaKey &&
      (((t = KO.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey) ||
        (sx.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
      ? ((this.pendingIOSKey = t || e),
        setTimeout(() => this.flushIOSKey(), 250),
        !0)
      : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t ||
      (t.key == "Enter" &&
        e &&
        e.from < e.to &&
        /^\S+$/.test(e.insert.toString()))
      ? !1
      : ((this.pendingIOSKey = void 0),
        Xn(
          this.view.contentDOM,
          t.key,
          t.keyCode,
          t instanceof KeyboardEvent ? t : void 0
        ));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : V.safari &&
          !V.ios &&
          this.compositionPendingKey &&
          Date.now() - this.compositionEndedAt < 100
        ? ((this.compositionPendingKey = !1), !0)
        : !1
      : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(),
      (this.mouseSelection = e);
  }
  update(e) {
    this.view.observer.update(e),
      this.mouseSelection && this.mouseSelection.update(e),
      this.draggedContent &&
        e.docChanged &&
        (this.draggedContent = this.draggedContent.map(e.changes)),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function ou(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (s) {
      dt(t.state, s);
    }
  };
}
function nx(i) {
  let e = Object.create(null);
  function t(n) {
    return e[n] || (e[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let s = n.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && t(r).handlers.push(ou(n.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(ou(n.value, o));
      }
  }
  for (let n in jt) t(n).handlers.push(jt[n]);
  for (let n in At) t(n).observers.push(At[n]);
  return e;
}
const KO = [
    { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
    { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
    { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
    { key: "Delete", keyCode: 46, inputType: "deleteContentForward" },
  ],
  sx = "dthko",
  JO = [16, 17, 18, 20, 91, 92, 224, 225],
  Wr = 6;
function Xr(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function rx(i, e) {
  return Math.max(
    Math.abs(i.clientX - e.clientX),
    Math.abs(i.clientY - e.clientY)
  );
}
class ox {
  constructor(e, t, n, s) {
    (this.view = e),
      (this.startEvent = t),
      (this.style = n),
      (this.mustSelect = s),
      (this.scrollSpeed = { x: 0, y: 0 }),
      (this.scrolling = -1),
      (this.lastEvent = t),
      (this.scrollParent = wy(e.contentDOM)),
      (this.atoms = e.state.facet(gc).map((o) => o(e)));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", (this.move = this.move.bind(this))),
      r.addEventListener("mouseup", (this.up = this.up.bind(this))),
      (this.extend = t.shiftKey),
      (this.multiple = e.state.facet(ce.allowMultipleSelections) && lx(e, t)),
      (this.dragging = hx(e, t) && ng(t) == 1 ? null : !1);
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    var t;
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || (this.dragging == null && rx(this.startEvent, e) < 10))
      return;
    this.select((this.lastEvent = e));
    let n = 0,
      s = 0,
      r = ((t = this.scrollParent) === null || t === void 0
        ? void 0
        : t.getBoundingClientRect()) || {
        left: 0,
        top: 0,
        right: this.view.win.innerWidth,
        bottom: this.view.win.innerHeight,
      },
      o = GO(this.view);
    e.clientX - o.left <= r.left + Wr
      ? (n = -Xr(r.left - e.clientX))
      : e.clientX + o.right >= r.right - Wr && (n = Xr(e.clientX - r.right)),
      e.clientY - o.top <= r.top + Wr
        ? (s = -Xr(r.top - e.clientY))
        : e.clientY + o.bottom >= r.bottom - Wr &&
          (s = Xr(e.clientY - r.bottom)),
      this.setScrollSpeed(n, s);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move),
      e.removeEventListener("mouseup", this.up),
      (this.view.inputState.mouseSelection =
        this.view.inputState.draggedContent =
          null);
  }
  setScrollSpeed(e, t) {
    (this.scrollSpeed = { x: e, y: t }),
      e || t
        ? this.scrolling < 0 &&
          (this.scrolling = setInterval(() => this.scroll(), 50))
        : this.scrolling > -1 &&
          (clearInterval(this.scrolling), (this.scrolling = -1));
  }
  scroll() {
    this.scrollParent
      ? ((this.scrollParent.scrollLeft += this.scrollSpeed.x),
        (this.scrollParent.scrollTop += this.scrollSpeed.y))
      : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y),
      this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let n = 0; n < e.ranges.length; n++) {
      let s = e.ranges[n],
        r = null;
      if (s.empty) {
        let o = ao(this.atoms, s.from, 0);
        o != s.from && (r = v.cursor(o, -1));
      } else {
        let o = ao(this.atoms, s.from, -1),
          l = ao(this.atoms, s.to, 1);
        (o != s.from || l != s.to) &&
          (r = v.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), (t[n] = r));
    }
    return t ? v.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this,
      n = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) &&
      this.view.dispatch({ selection: n, userEvent: "select.pointer" }),
      (this.mustSelect = !1);
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type"))
      ? this.destroy()
      : this.style.update(e) &&
        setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function lx(i, e) {
  let t = i.state.facet(EO);
  return t.length ? t[0](e) : V.mac ? e.metaKey : e.ctrlKey;
}
function ax(i, e) {
  let t = i.state.facet(WO);
  return t.length ? t[0](e) : V.mac ? !e.altKey : !e.ctrlKey;
}
function hx(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty) return !1;
  let n = Bs(i.root);
  if (!n || n.rangeCount == 0) return !0;
  let s = n.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (
      o.left <= e.clientX &&
      o.right >= e.clientX &&
      o.top <= e.clientY &&
      o.bottom >= e.clientY
    )
      return !0;
  }
  return !1;
}
function cx(i, e) {
  if (!e.bubbles) return !0;
  if (e.defaultPrevented) return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || ((n = Oe.get(t)) && n.ignoreEvent(e)))
      return !1;
  return !0;
}
const jt = Object.create(null),
  At = Object.create(null),
  eg = (V.ie && V.ie_version < 15) || (V.ios && V.webkit_version < 604);
function fx(i) {
  let e = i.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement("textarea"));
  (t.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    t.focus(),
    setTimeout(() => {
      i.focus(), t.remove(), tg(i, t.value);
    }, 50);
}
function tg(i, e) {
  let { state: t } = i,
    n,
    s = 1,
    r = t.toText(e),
    o = r.lines == t.selection.ranges.length;
  if (
    uh != null &&
    t.selection.ranges.every((a) => a.empty) &&
    uh == r.toString()
  ) {
    let a = -1;
    n = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a) return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: v.cursor(h.from + f.length),
      };
    });
  } else
    o
      ? (n = t.changeByRange((a) => {
          let h = r.line(s++);
          return {
            changes: { from: a.from, to: a.to, insert: h.text },
            range: v.cursor(a.from + h.length),
          };
        }))
      : (n = t.replaceSelection(r));
  i.dispatch(n, { userEvent: "input.paste", scrollIntoView: !0 });
}
At.scroll = (i) => {
  (i.inputState.lastScrollTop = i.scrollDOM.scrollTop),
    (i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft);
};
jt.keydown = (i, e) => (
  i.inputState.setSelectionOrigin("select"),
  e.keyCode == 27 &&
    i.inputState.tabFocusMode != 0 &&
    (i.inputState.tabFocusMode = Date.now() + 2e3),
  !1
);
At.touchstart = (i, e) => {
  (i.inputState.lastTouchTime = Date.now()),
    i.inputState.setSelectionOrigin("select.pointer");
};
At.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
jt.mousedown = (i, e) => {
  if ((i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3))
    return !1;
  let t = null;
  for (let n of i.state.facet(XO)) if (((t = n(i, e)), t)) break;
  if ((!t && e.button == 0 && (t = px(i, e)), t)) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new ox(i, e, t, n)),
      n &&
        i.observer.ignore(() => {
          gO(i.contentDOM);
          let r = i.root.activeElement;
          r && !r.contains(i.contentDOM) && r.blur();
        });
    let s = i.inputState.mouseSelection;
    if (s) return s.start(e), s.dragging === !1;
  }
  return !1;
};
function lu(i, e, t, n) {
  if (n == 1) return v.cursor(e, t);
  if (n == 2) return By(i.state, e, t);
  {
    let s = Re.find(i.docView, e),
      r = i.state.doc.lineAt(s ? s.posAtEnd : e),
      o = s ? s.posAtStart : r.from,
      l = s ? s.posAtEnd : r.to;
    return l < i.state.doc.length && l == r.to && l++, v.range(o, l);
  }
}
let ig = (i, e) => i >= e.top && i <= e.bottom,
  au = (i, e, t) => ig(e, t) && i >= t.left && i <= t.right;
function ux(i, e, t, n) {
  let s = Re.find(i.docView, e);
  if (!s) return 1;
  let r = e - s.posAtStart;
  if (r == 0) return 1;
  if (r == s.length) return -1;
  let o = s.coordsAt(r, -1);
  if (o && au(t, n, o)) return -1;
  let l = s.coordsAt(r, 1);
  return l && au(t, n, l) ? 1 : o && ig(n, o) ? -1 : 1;
}
function hu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: ux(i, t, e.clientX, e.clientY) };
}
const dx = V.ie && V.ie_version <= 11;
let cu = null,
  fu = 0,
  uu = 0;
function ng(i) {
  if (!dx) return i.detail;
  let e = cu,
    t = uu;
  return (
    (cu = i),
    (uu = Date.now()),
    (fu =
      !e ||
      (t > Date.now() - 400 &&
        Math.abs(e.clientX - i.clientX) < 2 &&
        Math.abs(e.clientY - i.clientY) < 2)
        ? (fu + 1) % 3
        : 1)
  );
}
function px(i, e) {
  let t = hu(i, e),
    n = ng(e),
    s = i.state.selection;
  return {
    update(r) {
      r.docChanged &&
        ((t.pos = r.changes.mapPos(t.pos)), (s = s.map(r.changes)));
    },
    get(r, o, l) {
      let a = hu(i, r),
        h,
        c = lu(i, a.pos, a.bias, n);
      if (t.pos != a.pos && !o) {
        let f = lu(i, t.pos, t.bias, n),
          u = Math.min(f.from, c.from),
          d = Math.max(f.to, c.to);
        c = u < c.from ? v.range(u, d) : v.range(d, u);
      }
      return o
        ? s.replaceRange(s.main.extend(c.from, c.to))
        : l && n == 1 && s.ranges.length > 1 && (h = Ox(s, a.pos))
        ? h
        : l
        ? s.addRange(c)
        : v.create([c]);
    },
  };
}
function Ox(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: s } = i.ranges[t];
    if (n <= e && s >= e)
      return v.create(
        i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)),
        i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0)
      );
  }
  return null;
}
jt.dragstart = (i, e) => {
  let {
    selection: { main: t },
  } = i.state;
  if (e.target.draggable) {
    let s = i.docView.nearest(e.target);
    if (s && s.isWidget) {
      let r = s.posAtStart,
        o = r + s.length;
      (r >= t.to || o <= t.from) && (t = v.range(r, o));
    }
  }
  let { inputState: n } = i;
  return (
    n.mouseSelection && (n.mouseSelection.dragging = !0),
    (n.draggedContent = t),
    e.dataTransfer &&
      (e.dataTransfer.setData("Text", i.state.sliceDoc(t.from, t.to)),
      (e.dataTransfer.effectAllowed = "copyMove")),
    !1
  );
};
jt.dragend = (i) => ((i.inputState.draggedContent = null), !1);
function du(i, e, t, n) {
  if (!t) return;
  let s = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    { draggedContent: r } = i.inputState,
    o = n && r && ax(i, e) ? { from: r.from, to: r.to } : null,
    l = { from: s, insert: t },
    a = i.state.changes(o ? [o, l] : l);
  i.focus(),
    i.dispatch({
      changes: a,
      selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
      userEvent: o ? "move.drop" : "input.drop",
    }),
    (i.inputState.draggedContent = null);
}
jt.drop = (i, e) => {
  if (!e.dataTransfer) return !1;
  if (i.state.readOnly) return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length),
      s = 0,
      r = () => {
        ++s == t.length &&
          du(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
      };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      (l.onerror = r),
        (l.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), r();
        }),
        l.readAsText(t[o]);
    }
    return !0;
  } else {
    let n = e.dataTransfer.getData("Text");
    if (n) return du(i, e, n, !0), !0;
  }
  return !1;
};
jt.paste = (i, e) => {
  if (i.state.readOnly) return !0;
  i.observer.flush();
  let t = eg ? null : e.clipboardData;
  return t
    ? (tg(i, t.getData("text/plain") || t.getData("text/uri-list")), !0)
    : (fx(i), !1);
};
function gx(i, e) {
  let t = i.dom.parentNode;
  if (!t) return;
  let n = t.appendChild(document.createElement("textarea"));
  (n.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    (n.value = e),
    n.focus(),
    (n.selectionEnd = e.length),
    (n.selectionStart = 0),
    setTimeout(() => {
      n.remove(), i.focus();
    }, 50);
}
function mx(i) {
  let e = [],
    t = [],
    n = !1;
  for (let s of i.selection.ranges)
    s.empty || (e.push(i.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of i.selection.ranges) {
      let o = i.doc.lineAt(r);
      o.number > s &&
        (e.push(o.text),
        t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })),
        (s = o.number);
    }
    n = !0;
  }
  return { text: e.join(i.lineBreak), ranges: t, linewise: n };
}
let uh = null;
jt.copy = jt.cut = (i, e) => {
  let { text: t, ranges: n, linewise: s } = mx(i.state);
  if (!t && !s) return !1;
  (uh = s ? t : null),
    e.type == "cut" &&
      !i.state.readOnly &&
      i.dispatch({ changes: n, scrollIntoView: !0, userEvent: "delete.cut" });
  let r = eg ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (gx(i, t), !1);
};
const sg = yi.define();
function rg(i, e) {
  let t = [];
  for (let n of i.facet(jO)) {
    let s = n(i, e);
    s && t.push(s);
  }
  return t ? i.update({ effects: t, annotations: sg.of(!0) }) : null;
}
function og(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = rg(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
At.focus = (i) => {
  (i.inputState.lastFocusTime = Date.now()),
    !i.scrollDOM.scrollTop &&
      (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) &&
      ((i.scrollDOM.scrollTop = i.inputState.lastScrollTop),
      (i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft)),
    og(i);
};
At.blur = (i) => {
  i.observer.clearSelectionRange(), og(i);
};
At.compositionstart = At.compositionupdate = (i) => {
  i.observer.editContext ||
    (i.inputState.compositionFirstChange == null &&
      (i.inputState.compositionFirstChange = !0),
    i.inputState.composing < 0 && (i.inputState.composing = 0));
};
At.compositionend = (i) => {
  i.observer.editContext ||
    ((i.inputState.composing = -1),
    (i.inputState.compositionEndedAt = Date.now()),
    (i.inputState.compositionPendingKey = !0),
    (i.inputState.compositionPendingChange =
      i.observer.pendingRecords().length > 0),
    (i.inputState.compositionFirstChange = null),
    V.chrome && V.android
      ? i.observer.flushSoon()
      : i.inputState.compositionPendingChange
      ? Promise.resolve().then(() => i.observer.flush())
      : setTimeout(() => {
          i.inputState.composing < 0 &&
            i.docView.hasComposition &&
            i.update([]);
        }, 50));
};
At.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
jt.beforeinput = (i, e) => {
  var t;
  let n;
  if (
    V.chrome &&
    V.android &&
    (n = KO.find((s) => s.inputType == e.inputType)) &&
    (i.observer.delayAndroidKey(n.key, n.keyCode),
    n.key == "Backspace" || n.key == "Delete")
  ) {
    let s =
      ((t = window.visualViewport) === null || t === void 0
        ? void 0
        : t.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0
        ? void 0
        : r.height) || 0) >
        s + 10 &&
        i.hasFocus &&
        (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return (
    V.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(),
    V.safari &&
      e.inputType == "insertText" &&
      i.inputState.composing >= 0 &&
      setTimeout(() => At.compositionend(i, e), 20),
    !1
  );
};
const pu = new Set();
function bx(i) {
  pu.has(i) ||
    (pu.add(i),
    i.addEventListener("copy", () => {}),
    i.addEventListener("cut", () => {}));
}
const Ou = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class yx {
  constructor(e) {
    (this.lineWrapping = e),
      (this.doc = he.empty),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.textHeight = 14),
      (this.lineLength = 30),
      (this.heightChanged = !1);
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return (
      this.lineWrapping &&
        (n += Math.max(
          0,
          Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength)
        )),
      this.lineHeight * n
    );
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 +
          Math.max(
            0,
            Math.ceil((e - this.lineLength) / (this.lineLength - 5))
          )) *
          this.lineHeight
      : this.lineHeight;
  }
  setDoc(e) {
    return (this.doc = e), this;
  }
  mustRefreshForWrapping(e) {
    return Ou.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      s < 0
        ? n++
        : this.heightSamples[Math.floor(s * 10)] ||
          ((t = !0), (this.heightSamples[Math.floor(s * 10)] = !0));
    }
    return t;
  }
  refresh(e, t, n, s, r, o) {
    let l = Ou.indexOf(e) > -1,
      a =
        Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (
      ((this.lineWrapping = l),
      (this.lineHeight = t),
      (this.charWidth = n),
      (this.textHeight = s),
      (this.lineLength = r),
      a)
    ) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : (this.heightSamples[Math.floor(c * 10)] = !0);
      }
    }
    return a;
  }
}
class xx {
  constructor(e, t) {
    (this.from = e), (this.heights = t), (this.index = 0);
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Jt {
  constructor(e, t, n, s, r) {
    (this.from = e),
      (this.length = t),
      (this.top = n),
      (this.height = s),
      (this._content = r);
  }
  get type() {
    return typeof this._content == "number"
      ? at.Text
      : Array.isArray(this._content)
      ? this._content
      : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof zi ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(
      Array.isArray(e._content) ? e._content : [e]
    );
    return new Jt(
      this.from,
      this.length + e.length,
      this.top,
      this.height + e.height,
      t
    );
  }
}
var xe = (function (i) {
  return (
    (i[(i.ByPos = 0)] = "ByPos"),
    (i[(i.ByHeight = 1)] = "ByHeight"),
    (i[(i.ByPosNoHeight = 2)] = "ByPosNoHeight"),
    i
  );
})(xe || (xe = {}));
const ho = 0.001;
class ht {
  constructor(e, t, n = 2) {
    (this.length = e), (this.height = t), (this.flags = n);
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3);
  }
  setHeight(e, t) {
    this.height != t &&
      (Math.abs(this.height - t) > ho && (e.heightChanged = !0),
      (this.height = t));
  }
  replace(e, t, n) {
    return ht.of(n);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, s) {
    let r = this,
      o = n.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l],
        u = r.lineAt(a, xe.ByPosNoHeight, n.setDoc(t), 0, 0),
        d = u.to >= h ? u : r.lineAt(h, xe.ByPosNoHeight, n, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        (a = s[l - 1].fromA),
          (c = s[l - 1].fromB),
          l--,
          a < u.from && (u = r.lineAt(a, xe.ByPosNoHeight, n, 0, 0));
      (c += u.from - a), (a = u.from);
      let p = mc.build(n.setDoc(o), e, c, f);
      r = r.replace(a, h, p);
    }
    return r.updateHeight(n, 0);
  }
  static empty() {
    return new wt(0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0,
      n = e.length,
      s = 0,
      r = 0;
    for (;;)
      if (t == n)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break
            ? e.splice(--t, 1, l.left, null, l.right)
            : e.splice(--t, 1, l.left, l.right),
            (n += 1 + l.break),
            (s -= l.size);
        } else if (r > s * 2) {
          let l = e[n];
          l.break
            ? e.splice(n, 1, l.left, null, l.right)
            : e.splice(n, 1, l.left, l.right),
            (n += 2 + l.break),
            (r -= l.size);
        } else break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--n];
        l && (r += l.size);
      }
    let o = 0;
    return (
      e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), n++),
      new Sx(ht.of(e.slice(0, t)), o, ht.of(e.slice(n)))
    );
  }
}
ht.prototype.size = 1;
class lg extends ht {
  constructor(e, t, n) {
    super(e, t), (this.deco = n);
  }
  blockAt(e, t, n, s) {
    return new Jt(s, this.length, n, this.height, this.deco || 0);
  }
  lineAt(e, t, n, s, r) {
    return this.blockAt(0, n, s, r);
  }
  forEachLine(e, t, n, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, n, s, r));
  }
  updateHeight(e, t = 0, n = !1, s) {
    return (
      s && s.from <= t && s.more && this.setHeight(e, s.heights[s.index++]),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `block(${this.length})`;
  }
}
class wt extends lg {
  constructor(e, t) {
    super(e, t, null),
      (this.collapsed = 0),
      (this.widgetHeight = 0),
      (this.breaks = 0);
  }
  blockAt(e, t, n, s) {
    return new Jt(s, this.length, n, this.height, this.breaks);
  }
  replace(e, t, n) {
    let s = n[0];
    return n.length == 1 &&
      (s instanceof wt || (s instanceof Ue && s.flags & 4)) &&
      Math.abs(this.length - s.length) < 10
      ? (s instanceof Ue
          ? (s = new wt(s.length, this.height))
          : (s.height = this.height),
        this.outdated || (s.outdated = !1),
        s)
      : ht.of(n);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return (
      s && s.from <= t && s.more
        ? this.setHeight(e, s.heights[s.index++])
        : (n || this.outdated) &&
          this.setHeight(
            e,
            Math.max(
              this.widgetHeight,
              e.heightForLine(this.length - this.collapsed)
            ) +
              this.breaks * e.lineHeight
          ),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${
      this.widgetHeight ? ":" + this.widgetHeight : ""
    })`;
  }
}
class Ue extends ht {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let n = e.doc.lineAt(t).number,
      s = e.doc.lineAt(t + this.length).number,
      r = s - n + 1,
      o,
      l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      (o = a / r),
        this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else o = this.height / r;
    return { firstLine: n, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, n, s) {
    let {
      firstLine: r,
      lastLine: o,
      perLine: l,
      perChar: a,
    } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h =
          s +
          (e < t.lineHeight
            ? 0
            : Math.round(
                Math.max(0, Math.min(1, (e - n) / this.height)) * this.length
              )),
        c = t.doc.lineAt(h),
        f = l + c.length * a,
        u = Math.max(n, e - f / 2);
      return new Jt(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - n) / l))),
        { from: c, length: f } = t.doc.line(r + h);
      return new Jt(c, f, n + l * h, l, 0);
    }
  }
  lineAt(e, t, n, s, r) {
    if (t == xe.ByHeight) return this.blockAt(e, n, s, r);
    if (t == xe.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(e);
      return new Jt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r),
      h = n.doc.lineAt(e),
      c = l + h.length * a,
      f = h.number - o,
      u = s + l * f + a * (h.from - r - f);
    return new Jt(
      h.from,
      h.length,
      Math.max(s, Math.min(u, s + this.height - c)),
      c,
      0
    );
  }
  forEachLine(e, t, n, s, r, o) {
    (e = Math.max(e, r)), (t = Math.min(t, r + this.length));
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(n, r);
    for (let c = e, f = s; c <= t; ) {
      let u = n.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Jt(u.from, u.length, f, d, 0)), (f += d), (c = u.to + 1);
    }
  }
  replace(e, t, n) {
    let s = this.length - t;
    if (s > 0) {
      let r = n[n.length - 1];
      r instanceof Ue
        ? (n[n.length - 1] = new Ue(r.length + s))
        : n.push(null, new Ue(s - 1));
    }
    if (e > 0) {
      let r = n[0];
      r instanceof Ue
        ? (n[0] = new Ue(e + r.length))
        : n.unshift(new Ue(e - 1), null);
    }
    return ht.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Ue(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Ue(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [],
        l = Math.max(t, s.from),
        a = -1;
      for (
        s.from > t && o.push(new Ue(s.from - t - 1).updateHeight(e, t));
        l <= r && s.more;

      ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? (a = f) : Math.abs(f - a) >= ho && (a = -2);
        let u = new wt(c, f);
        (u.outdated = !1), o.push(u), (l += c + 1);
      }
      l <= r && o.push(null, new Ue(r - l).updateHeight(e, l));
      let h = ht.of(o);
      return (
        (a < 0 ||
          Math.abs(h.height - this.height) >= ho ||
          Math.abs(a - this.heightMetrics(e, t).perLine) >= ho) &&
          (e.heightChanged = !0),
        h
      );
    } else
      (n || this.outdated) &&
        (this.setHeight(e, e.heightForGap(t, t + this.length)),
        (this.outdated = !1));
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Sx extends ht {
  constructor(e, t, n) {
    super(
      e.length + t + n.length,
      e.height + n.height,
      t | (e.outdated || n.outdated ? 2 : 0)
    ),
      (this.left = e),
      (this.right = n),
      (this.size = e.size + n.size);
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, s) {
    let r = n + this.left.height;
    return e < r
      ? this.left.blockAt(e, t, n, s)
      : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, n, s, r) {
    let o = s + this.left.height,
      l = r + this.left.length + this.break,
      a = t == xe.ByHeight ? e < o : e < l,
      h = a
        ? this.left.lineAt(e, t, n, s, r)
        : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? h.to < l : h.from > l)) return h;
    let c = t == xe.ByPosNoHeight ? xe.ByPosNoHeight : xe.ByPos;
    return a
      ? h.join(this.right.lineAt(l, c, n, o, l))
      : this.left.lineAt(l, c, n, s, r).join(h);
  }
  forEachLine(e, t, n, s, r, o) {
    let l = s + this.left.height,
      a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, s, r, o),
        t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let h = this.lineAt(a, xe.ByPos, n, s, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, n, s, r, o),
        h.to >= e && h.from <= t && o(h),
        t > h.to && this.right.forEachLine(h.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let s = this.left.length + this.break;
    if (t < s) return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, n));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of n) r.push(l);
    if ((e > 0 && gu(r, o - 1), t < this.length)) {
      let l = r.length;
      this.decomposeRight(t, r), gu(r, l);
    }
    return ht.of(r);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n) return this.left.decomposeLeft(e, t);
    t.push(this.left),
      this.break && (n++, e >= n && t.push(null)),
      e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length,
      s = n + this.break;
    if (e >= s) return this.right.decomposeRight(e - s, t);
    e < n && this.left.decomposeRight(e, t),
      this.break && e < s && t.push(null),
      t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size
      ? ht.of(this.break ? [e, null, t] : [e, t])
      : ((this.left = e),
        (this.right = t),
        (this.height = e.height + t.height),
        (this.outdated = e.outdated || t.outdated),
        (this.size = e.size + t.size),
        (this.length = e.length + this.break + t.length),
        this);
  }
  updateHeight(e, t = 0, n = !1, s) {
    let { left: r, right: o } = this,
      l = t + r.length + this.break,
      a = null;
    return (
      s && s.from <= t + r.length && s.more
        ? (a = r = r.updateHeight(e, t, n, s))
        : r.updateHeight(e, t, n),
      s && s.from <= l + o.length && s.more
        ? (a = o = o.updateHeight(e, l, n, s))
        : o.updateHeight(e, l, n),
      a
        ? this.balanced(r, o)
        : ((this.height = this.left.height + this.right.height),
          (this.outdated = !1),
          this)
    );
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function gu(i, e) {
  let t, n;
  i[e] == null &&
    (t = i[e - 1]) instanceof Ue &&
    (n = i[e + 1]) instanceof Ue &&
    i.splice(e - 1, 3, new Ue(t.length + 1 + n.length));
}
const wx = 5;
class mc {
  constructor(e, t) {
    (this.pos = e),
      (this.oracle = t),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e);
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd),
        s = this.nodes[this.nodes.length - 1];
      s instanceof wt
        ? (s.length += n - this.pos)
        : (n > this.pos || !this.isCovered) &&
          this.nodes.push(new wt(n - this.pos, -1)),
        (this.writtenTo = n),
        t > n &&
          (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0,
        r = n.widget ? n.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      n.block
        ? this.addBlock(new lg(o, s, n))
        : (o || r || s >= wx) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    (this.lineStart = e),
      (this.lineEnd = t),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 ||
          this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new wt(this.pos - e, -1)),
      (this.writtenTo = this.pos);
  }
  blankContent(e, t) {
    let n = new Ue(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof wt) return e;
    let t = new wt(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, n) {
    let s = this.ensureLine();
    (s.length += n),
      (s.collapsed += n),
      (s.widgetHeight = Math.max(s.widgetHeight, e)),
      (s.breaks += t),
      (this.writtenTo = this.pos = this.pos + n);
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof wt) && !this.isCovered
      ? this.nodes.push(new wt(0, -1))
      : (this.writtenTo < this.pos || t == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let s of this.nodes)
      s instanceof wt && s.updateHeight(this.oracle, n),
        (n += s ? s.length : 1);
    return this.nodes;
  }
  static build(e, t, n, s) {
    let r = new mc(n, e);
    return ae.spans(t, n, s, r, 0), r.finish(n);
  }
}
function Qx(i, e, t) {
  let n = new Px();
  return ae.compare(i, e, t, n, 0), n.changes;
}
class Px {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, n, s) {
    (e < t || (n && n.heightRelevant) || (s && s.heightRelevant)) &&
      rh(e, t, this.changes, 5);
  }
}
function kx(i, e) {
  let t = i.getBoundingClientRect(),
    n = i.ownerDocument,
    s = n.defaultView || window,
    r = Math.max(0, t.left),
    o = Math.min(s.innerWidth, t.right),
    l = Math.max(0, t.top),
    a = Math.min(s.innerHeight, t.bottom);
  for (let h = i.parentNode; h && h != n.body; )
    if (h.nodeType == 1) {
      let c = h,
        f = window.getComputedStyle(c);
      if (
        (c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) &&
        f.overflow != "visible"
      ) {
        let u = c.getBoundingClientRect();
        (r = Math.max(r, u.left)),
          (o = Math.min(o, u.right)),
          (l = Math.max(l, u.top)),
          (a = h == i.parentNode ? u.bottom : Math.min(a, u.bottom));
      }
      h =
        f.position == "absolute" || f.position == "fixed"
          ? c.offsetParent
          : c.parentNode;
    } else if (h.nodeType == 11) h = h.host;
    else break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e),
  };
}
function vx(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e),
  };
}
class ea {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.size = n);
  }
  static same(e, t) {
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n],
        r = t[n];
      if (s.from != r.from || s.to != r.to || s.size != r.size) return !1;
    }
    return !0;
  }
  draw(e, t) {
    return N.replace({
      widget: new $x(this.size * (t ? e.scaleY : e.scaleX), t),
    }).range(this.from, this.to);
  }
}
class $x extends xi {
  constructor(e, t) {
    super(), (this.size = e), (this.vertical = t);
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return (
      this.vertical
        ? (e.style.height = this.size + "px")
        : ((e.style.width = this.size + "px"),
          (e.style.height = "2px"),
          (e.style.display = "inline-block")),
      e
    );
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class mu {
  constructor(e) {
    (this.state = e),
      (this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0,
      }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.scrollTop = 0),
      (this.scrolledToBottom = !1),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.scrollAnchorPos = 0),
      (this.scrollAnchorHeight = -1),
      (this.scaler = bu),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.defaultTextDirection = Se.LTR),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1);
    let t = e
      .facet(Oc)
      .some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    (this.heightOracle = new yx(t)),
      (this.stateDeco = e.facet(Fs).filter((n) => typeof n != "function")),
      (this.heightMap = ht
        .empty()
        .applyChanges(
          this.stateDeco,
          he.empty,
          this.heightOracle.setDoc(e.doc),
          [new Rt(0, 0, 0, e.doc.length)]
        ));
    for (
      let n = 0;
      n < 2 &&
      ((this.viewport = this.getViewport(0, null)), !!this.updateForViewport());
      n++
    );
    this.updateViewportLines(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = N.set(this.lineGaps.map((n) => n.draw(this, !1)))),
      this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new Dr(r, o));
      }
    }
    return (
      (this.viewports = e.sort((n, s) => n.from - s.from)), this.updateScaler()
    );
  }
  updateScaler() {
    let e = this.scaler;
    return (
      (this.scaler =
        this.heightMap.height <= 7e6
          ? bu
          : new bc(this.heightOracle, this.heightMap, this.viewports)),
      e.eq(this.scaler) ? 0 : 2
    );
  }
  updateViewportLines() {
    (this.viewportLines = []),
      this.heightMap.forEachLine(
        this.viewport.from,
        this.viewport.to,
        this.heightOracle.setDoc(this.state.doc),
        0,
        0,
        (e) => {
          this.viewportLines.push(bs(e, this.scaler));
        }
      );
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(Fs).filter((c) => typeof c != "function");
    let s = e.changedRanges,
      r = Rt.extendWithRanges(
        s,
        Qx(n, this.stateDeco, e ? e.changes : Xe.empty(this.state.doc.length))
      ),
      o = this.heightMap.height,
      l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    (this.heightMap = this.heightMap.applyChanges(
      this.stateDeco,
      e.startState.doc,
      this.heightOracle.setDoc(this.state.doc),
      r
    )),
      this.heightMap.height != o && (e.flags |= 2),
      l
        ? ((this.scrollAnchorPos = e.changes.mapPos(l.from, -1)),
          (this.scrollAnchorHeight = l.top))
        : ((this.scrollAnchorPos = -1),
          (this.scrollAnchorHeight = this.heightMap.height));
    let a = r.length
      ? this.mapViewport(this.viewport, e.changes)
      : this.viewport;
    ((t && (t.range.head < a.from || t.range.head > a.to)) ||
      !this.viewportIsAppropriate(a)) &&
      (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    (this.viewport = a),
      (e.flags |= this.updateForViewport()),
      (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(
          this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))
        ),
      (e.flags |= this.computeVisibleRanges()),
      t && (this.scrollTarget = t),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        !e.state.facet(UO) &&
        (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM,
      n = window.getComputedStyle(t),
      s = this.heightOracle,
      r = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? Se.RTL : Se.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r),
      l = t.getBoundingClientRect(),
      a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    (this.contentDOMHeight = l.height), (this.mustMeasureContent = !1);
    let h = 0,
      c = 0;
    if (l.width && l.height) {
      let { scaleX: x, scaleY: Q } = OO(t, l);
      ((x > 0.005 && Math.abs(this.scaleX - x) > 0.005) ||
        (Q > 0.005 && Math.abs(this.scaleY - Q) > 0.005)) &&
        ((this.scaleX = x), (this.scaleY = Q), (h |= 8), (o = a = !0));
    }
    let f = (parseInt(n.paddingTop) || 0) * this.scaleY,
      u = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) &&
      ((this.paddingTop = f), (this.paddingBottom = u), (h |= 10)),
      this.editorWidth != e.scrollDOM.clientWidth &&
        (s.lineWrapping && (a = !0),
        (this.editorWidth = e.scrollDOM.clientWidth),
        (h |= 8));
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d &&
      ((this.scrollAnchorHeight = -1), (this.scrollTop = d)),
      (this.scrolledToBottom = bO(e.scrollDOM));
    let p = (this.printing ? vx : kx)(t, this.paddingTop),
      O = p.top - this.pixelViewport.top,
      m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let b =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left;
    if (
      (b != this.inView && ((this.inView = b), b && (a = !0)),
      !this.inView && !this.scrollTarget)
    )
      return 0;
    let S = l.width;
    if (
      ((this.contentDOMWidth != S ||
        this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = l.width),
        (this.editorHeight = e.scrollDOM.clientHeight),
        (h |= 8)),
      a)
    ) {
      let x = e.docView.measureVisibleLineHeights(this.viewport);
      if (
        (s.mustRefreshForHeights(x) && (o = !0),
        o ||
          (s.lineWrapping && Math.abs(S - this.contentDOMWidth) > s.charWidth))
      ) {
        let {
          lineHeight: Q,
          charWidth: $,
          textHeight: C,
        } = e.docView.measureTextSize();
        (o = Q > 0 && s.refresh(r, Q, $, C, S / $, x)),
          o && ((e.docView.minWidth = 0), (h |= 8));
      }
      O > 0 && m > 0
        ? (c = Math.max(O, m))
        : O < 0 && m < 0 && (c = Math.min(O, m)),
        (s.heightChanged = !1);
      for (let Q of this.viewports) {
        let $ =
          Q.from == this.viewport.from
            ? x
            : e.docView.measureVisibleLineHeights(Q);
        this.heightMap = (
          o
            ? ht
                .empty()
                .applyChanges(this.stateDeco, he.empty, this.heightOracle, [
                  new Rt(0, 0, 0, e.state.doc.length),
                ])
            : this.heightMap
        ).updateHeight(s, 0, o, new xx(Q.from, $));
      }
      s.heightChanged && (h |= 2);
    }
    let P =
      !this.viewportIsAppropriate(this.viewport, c) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to));
    return (
      P &&
        (h & 2 && (h |= this.updateScaler()),
        (this.viewport = this.getViewport(c, this.scrollTarget)),
        (h |= this.updateForViewport())),
      (h & 2 || P) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
      (h |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      h
    );
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      s = this.heightMap,
      r = this.heightOracle,
      { visibleTop: o, visibleBottom: l } = this,
      a = new Dr(
        s.lineAt(o - n * 1e3, xe.ByHeight, r, 0, 0).from,
        s.lineAt(l + (1 - n) * 1e3, xe.ByHeight, r, 0, 0).to
      );
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(
            this.editorHeight,
            this.pixelViewport.bottom - this.pixelViewport.top
          ),
          f = s.lineAt(h, xe.ByPos, r, 0, 0),
          u;
        t.y == "center"
          ? (u = (f.top + f.bottom) / 2 - c / 2)
          : t.y == "start" || (t.y == "nearest" && h < a.from)
          ? (u = f.top)
          : (u = f.bottom - c),
          (a = new Dr(
            s.lineAt(u - 1e3 / 2, xe.ByHeight, r, 0, 0).from,
            s.lineAt(u + c + 1e3 / 2, xe.ByHeight, r, 0, 0).to
          ));
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1),
      s = t.mapPos(e.to, 1);
    return new Dr(
      this.heightMap.lineAt(n, xe.ByPos, this.heightOracle, 0, 0).from,
      this.heightMap.lineAt(s, xe.ByPos, this.heightOracle, 0, 0).to
    );
  }
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView) return !0;
    let { top: s } = this.heightMap.lineAt(
        e,
        xe.ByPos,
        this.heightOracle,
        0,
        0
      ),
      { bottom: r } = this.heightMap.lineAt(
        t,
        xe.ByPos,
        this.heightOracle,
        0,
        0
      ),
      { visibleTop: o, visibleBottom: l } = this;
    return (
      (e == 0 || s <= o - Math.max(10, Math.min(-n, 250))) &&
      (t == this.state.doc.length || r >= l + Math.max(10, Math.min(n, 250))) &&
      s > o - 2 * 1e3 &&
      r < l + 2 * 1e3
    );
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let n = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) ||
        n.push(new ea(t.mapPos(s.from), t.mapPos(s.to), s.size));
    return n;
  }
  ensureLineGaps(e, t) {
    let n = this.heightOracle.lineWrapping,
      s = n ? 1e4 : 2e3,
      r = s >> 1,
      o = s << 1;
    if (this.defaultTextDirection != Se.LTR && !n) return [];
    let l = [],
      a = (c, f, u, d) => {
        if (f - c < r) return;
        let p = this.state.selection.main,
          O = [p.from];
        p.empty || O.push(p.to);
        for (let b of O)
          if (b > c && b < f) {
            a(c, b - 10, u, d), a(b + 10, f, u, d);
            return;
          }
        let m = Zx(
          e,
          (b) =>
            b.from >= u.from &&
            b.to <= u.to &&
            Math.abs(b.from - c) < r &&
            Math.abs(b.to - f) < r &&
            !O.some((S) => b.from < S && b.to > S)
        );
        if (!m) {
          if (
            f < u.to &&
            t &&
            n &&
            t.visibleRanges.some((b) => b.from <= f && b.to >= f)
          ) {
            let b = t.moveToLineBoundary(v.cursor(f), !1, !0).head;
            b > c && (f = b);
          }
          m = new ea(c, f, this.gapSize(u, c, f, d));
        }
        l.push(m);
      },
      h = (c) => {
        if (c.length < o || c.type != at.Text) return;
        let f = Cx(c.from, c.to, this.stateDeco);
        if (f.total < o) return;
        let u = this.scrollTarget ? this.scrollTarget.range.head : null,
          d,
          p;
        if (n) {
          let O =
              (s / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
            m,
            b;
          if (u != null) {
            let S = jr(f, u),
              P = ((this.visibleBottom - this.visibleTop) / 2 + O) / c.height;
            (m = S - P), (b = S + P);
          } else
            (m = (this.visibleTop - c.top - O) / c.height),
              (b = (this.visibleBottom - c.top + O) / c.height);
          (d = Yr(f, m)), (p = Yr(f, b));
        } else {
          let O = f.total * this.heightOracle.charWidth,
            m = s * this.heightOracle.charWidth,
            b,
            S;
          if (u != null) {
            let P = jr(f, u),
              x =
                ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) /
                O;
            (b = P - x), (S = P + x);
          } else
            (b = (this.pixelViewport.left - m) / O),
              (S = (this.pixelViewport.right + m) / O);
          (d = Yr(f, b)), (p = Yr(f, S));
        }
        d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
      };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, n, s) {
    let r = jr(s, n) - jr(s, t);
    return this.heightOracle.lineWrapping
      ? e.height * r
      : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    ea.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = N.set(
        e.map((t) => t.draw(this, this.heightOracle.lineWrapping))
      )));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    ae.spans(
      e,
      this.viewport.from,
      this.viewport.to,
      {
        span(s, r) {
          t.push({ from: s, to: r });
        },
        point() {},
      },
      20
    );
    let n =
      t.length != this.visibleRanges.length ||
      this.visibleRanges.some((s, r) => s.from != t[r].from || s.to != t[r].to);
    return (this.visibleRanges = t), n ? 4 : 0;
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
      bs(
        this.heightMap.lineAt(e, xe.ByPos, this.heightOracle, 0, 0),
        this.scaler
      )
    );
  }
  lineBlockAtHeight(e) {
    return (
      (e >= this.viewportLines[0].top &&
        e <= this.viewportLines[this.viewportLines.length - 1].bottom &&
        this.viewportLines.find((t) => t.top <= e && t.bottom >= e)) ||
      bs(
        this.heightMap.lineAt(
          this.scaler.fromDOM(e),
          xe.ByHeight,
          this.heightOracle,
          0,
          0
        ),
        this.scaler
      )
    );
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200
      ? t
      : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return bs(
      this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0),
      this.scaler
    );
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Dr {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
function Cx(i, e, t) {
  let n = [],
    s = i,
    r = 0;
  return (
    ae.spans(
      t,
      i,
      e,
      {
        span() {},
        point(o, l) {
          o > s && (n.push({ from: s, to: o }), (r += o - s)), (s = l);
        },
      },
      20
    ),
    s < e && (n.push({ from: s, to: e }), (r += e - s)),
    { total: r, ranges: n }
  );
}
function Yr({ total: i, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s],
      l = o - r;
    if (n <= l) return r + n;
    n -= l;
  }
}
function jr(i, e) {
  let t = 0;
  for (let { from: n, to: s } of i.ranges) {
    if (e <= s) {
      t += e - n;
      break;
    }
    t += s - n;
  }
  return t / i.total;
}
function Zx(i, e) {
  for (let t of i) if (e(t)) return t;
}
const bu = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1,
  eq(i) {
    return i == this;
  },
};
class bc {
  constructor(e, t, n) {
    let s = 0,
      r = 0,
      o = 0;
    (this.viewports = n.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, xe.ByPos, e, 0, 0).top,
        c = t.lineAt(a, xe.ByPos, e, 0, 0).bottom;
      return (
        (s += c - h),
        { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 }
      );
    })),
      (this.scale = (7e6 - s) / (t.height - s));
    for (let l of this.viewports)
      (l.domTop = o + (l.top - r) * this.scale),
        (o = l.domBottom = l.domTop + (l.bottom - l.top)),
        (r = l.bottom);
  }
  toDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top) return s + (e - n) * this.scale;
      if (e <= r.bottom) return r.domTop + (e - r.top);
      (n = r.bottom), (s = r.domBottom);
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop) return n + (e - s) / this.scale;
      if (e <= r.domBottom) return r.top + (e - r.domTop);
      (n = r.bottom), (s = r.domBottom);
    }
  }
  eq(e) {
    return e instanceof bc
      ? this.scale == e.scale &&
          this.viewports.length == e.viewports.length &&
          this.viewports.every(
            (t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to
          )
      : !1;
  }
}
function bs(i, e) {
  if (e.scale == 1) return i;
  let t = e.toDOM(i.top),
    n = e.toDOM(i.bottom);
  return new Jt(
    i.from,
    i.length,
    t,
    n - t,
    Array.isArray(i._content) ? i._content.map((s) => bs(s, e)) : i._content
  );
}
const Lr = z.define({ combine: (i) => i.join(" ") }),
  dh = z.define({ combine: (i) => i.indexOf(!0) > -1 }),
  ph = Vi.newName(),
  ag = Vi.newName(),
  hg = Vi.newName(),
  cg = { "&light": "." + ag, "&dark": "." + hg };
function Oh(i, e, t) {
  return new Vi(e, {
    finish(n) {
      return /&/.test(n)
        ? n.replace(/&\w*/, (s) => {
            if (s == "&") return i;
            if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`);
            return t[s];
          })
        : i + " " + n;
    },
  });
}
const Rx = Oh(
    "." + ph,
    {
      "&": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": { outline: "1px dotted #212121" },
        display: "flex !important",
        flexDirection: "column",
      },
      ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0,
      },
      ".cm-content": {
        margin: 0,
        flexGrow: 2,
        flexShrink: 0,
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        minHeight: "100%",
        padding: "4px 0",
        outline: "none",
        "&[contenteditable=true]": {
          WebkitUserModify: "read-write-plaintext-only",
        },
      },
      ".cm-lineWrapping": {
        whiteSpace_fallback: "pre-wrap",
        whiteSpace: "break-spaces",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
        flexShrink: 1,
      },
      "&light .cm-content": { caretColor: "black" },
      "&dark .cm-content": { caretColor: "white" },
      ".cm-line": { display: "block", padding: "0 2px 0 6px" },
      ".cm-layer": {
        position: "absolute",
        left: 0,
        top: 0,
        contain: "size style",
        "& > *": { position: "absolute" },
      },
      "&light .cm-selectionBackground": { background: "#d9d9d9" },
      "&dark .cm-selectionBackground": { background: "#222" },
      "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":
        { background: "#d7d4f0" },
      "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":
        { background: "#233" },
      ".cm-cursorLayer": { pointerEvents: "none" },
      "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite",
      },
      "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
      "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
      ".cm-cursor, .cm-dropCursor": {
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none",
      },
      ".cm-cursor": { display: "none" },
      "&dark .cm-cursor": { borderLeftColor: "#444" },
      ".cm-dropCursor": { position: "absolute" },
      "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
        display: "block",
      },
      ".cm-iso": { unicodeBidi: "isolate" },
      ".cm-announced": { position: "fixed", top: "-10000px" },
      "@media print": { ".cm-announced": { display: "none" } },
      "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
      "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
      "&light .cm-specialChar": { color: "red" },
      "&dark .cm-specialChar": { color: "#f78" },
      ".cm-gutters": {
        flexShrink: 0,
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        insetInlineStart: 0,
        zIndex: 200,
      },
      "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#6c6c6c",
        borderRight: "1px solid #ddd",
      },
      "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" },
      ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: "100%",
        overflow: "hidden",
      },
      ".cm-gutterElement": { boxSizing: "border-box" },
      ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap",
      },
      "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
      "&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
      ".cm-panels": {
        boxSizing: "border-box",
        position: "sticky",
        left: 0,
        right: 0,
      },
      "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" },
      "&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
      "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
      "&dark .cm-panels": { backgroundColor: "#333338", color: "white" },
      ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
      },
      ".cm-widgetBuffer": {
        verticalAlign: "text-top",
        height: "1em",
        width: 0,
        display: "inline",
      },
      ".cm-placeholder": {
        color: "#888",
        display: "inline-block",
        verticalAlign: "top",
      },
      ".cm-highlightSpace:before": {
        content: "attr(data-display)",
        position: "absolute",
        pointerEvents: "none",
        color: "#888",
      },
      ".cm-highlightTab": {
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
        backgroundSize: "auto 100%",
        backgroundPosition: "right 90%",
        backgroundRepeat: "no-repeat",
      },
      ".cm-trailingSpace": { backgroundColor: "#ff332255" },
      ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "1px",
      },
      "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" },
      },
      "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": { backgroundImage: "linear-gradient(#111, #333)" },
      },
      ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em",
      },
      "&light .cm-textfield": { backgroundColor: "white" },
      "&dark .cm-textfield": {
        border: "1px solid #555",
        backgroundColor: "inherit",
      },
    },
    cg
  ),
  ys = "￿";
class Tx {
  constructor(e, t) {
    (this.points = e),
      (this.text = ""),
      (this.lineSeparator = t.facet(ce.lineSeparator));
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += ys;
  }
  readRange(e, t) {
    if (!e) return this;
    let n = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(n, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == t) break;
      let l = Oe.get(s),
        a = Oe.get(o);
      (l && a
        ? l.breakAfter
        : (l ? l.breakAfter : Ao(s)) ||
          (Ao(o) &&
            (s.nodeName != "BR" || s.cmIgnore) &&
            this.text.length > r)) && this.lineBreak(),
        (s = o);
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1,
        o = 1,
        l;
      if (
        (this.lineSeparator
          ? ((r = t.indexOf(this.lineSeparator, n)),
            (o = this.lineSeparator.length))
          : (l = s.exec(t)) && ((r = l.index), (o = l[0].length)),
        this.append(t.slice(n, r < 0 ? t.length : r)),
        r < 0)
      )
        break;
      if ((this.lineBreak(), o > 1))
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore) return;
    let t = Oe.get(e),
      n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let s = n.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == "BR"
        ? e.nextSibling && this.lineBreak()
        : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) &&
        (n.pos = this.text.length + (Ax(e, n.node, n.offset) ? t : 0));
  }
}
function Ax(i, e, t) {
  for (;;) {
    if (!e || t < pi(e)) return !1;
    if (e == i) return !0;
    (t = gn(e) + 1), (e = e.parentNode);
  }
}
class yu {
  constructor(e, t) {
    (this.node = e), (this.offset = t), (this.pos = -1);
  }
}
class Mx {
  constructor(e, t, n, s) {
    (this.typeOver = s),
      (this.bounds = null),
      (this.text = ""),
      (this.domChanged = t > -1);
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, n, 0))) {
      let l = r || o ? [] : Wx(e),
        a = new Tx(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM),
        (this.text = a.text),
        (this.newSel = Xx(l, this.bounds.from));
    } else {
      let l = e.observer.selectionRange,
        a =
          (r && r.node == l.focusNode && r.offset == l.focusOffset) ||
          !Ja(e.contentDOM, l.focusNode)
            ? e.state.selection.main.head
            : e.docView.posFromDOM(l.focusNode, l.focusOffset),
        h =
          (o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
          !Ja(e.contentDOM, l.anchorNode)
            ? e.state.selection.main.anchor
            : e.docView.posFromDOM(l.anchorNode, l.anchorOffset),
        c = e.viewport;
      if (
        (V.ios || V.chrome) &&
        e.state.selection.main.empty &&
        a != h &&
        (c.from > 0 || c.to < e.state.doc.length)
      ) {
        let f = Math.min(a, h),
          u = Math.max(a, h),
          d = c.from - f,
          p = c.to - u;
        (d == 0 || d == 1 || f == 0) &&
          (p == 0 || p == -1 || u == e.state.doc.length) &&
          ((a = 0), (h = e.state.doc.length));
      }
      this.newSel = v.single(h, a);
    }
  }
}
function fg(i, e) {
  let t,
    { newSel: n } = e,
    s = i.state.selection.main,
    r =
      i.inputState.lastKeyTime > Date.now() - 100
        ? i.inputState.lastKeyCode
        : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds,
      a = s.from,
      h = null;
    (r === 8 || (V.android && e.text.length < l - o)) &&
      ((a = s.to), (h = "end"));
    let c = Ex(i.state.doc.sliceString(o, l, ys), e.text, a - o, h);
    c &&
      (V.chrome &&
        r == 13 &&
        c.toB == c.from + 2 &&
        e.text.slice(c.from, c.toB) == ys + ys &&
        c.toB--,
      (t = {
        from: o + c.from,
        to: o + c.toA,
        insert: he.of(e.text.slice(c.from, c.toB).split(ys)),
      }));
  } else
    n && ((!i.hasFocus && i.state.facet(Ai)) || n.main.eq(s)) && (n = null);
  if (!t && !n) return !1;
  if (
    (!t && e.typeOver && !s.empty && n && n.main.empty
      ? (t = {
          from: s.from,
          to: s.to,
          insert: i.state.doc.slice(s.from, s.to),
        })
      : t &&
        t.from >= s.from &&
        t.to <= s.to &&
        (t.from != s.from || t.to != s.to) &&
        s.to - s.from - (t.to - t.from) <= 4
      ? (t = {
          from: s.from,
          to: s.to,
          insert: i.state.doc
            .slice(s.from, t.from)
            .append(t.insert)
            .append(i.state.doc.slice(t.to, s.to)),
        })
      : (V.mac || V.android) &&
        t &&
        t.from == t.to &&
        t.from == s.head - 1 &&
        /^\. ?$/.test(t.insert.toString()) &&
        i.contentDOM.getAttribute("autocorrect") == "off"
      ? (n &&
          t.insert.length == 2 &&
          (n = v.single(n.main.anchor - 1, n.main.head - 1)),
        (t = { from: s.from, to: s.to, insert: he.of([" "]) }))
      : V.chrome &&
        t &&
        t.from == t.to &&
        t.from == s.head &&
        t.insert.toString() == "\n".join([``, ` `]) &&
        i.lineWrapping &&
        (n && (n = v.single(n.main.anchor - 1, n.main.head - 1)),
        (t = { from: s.from, to: s.to, insert: he.of([" "]) })),
    t)
  )
    return ug(i, t, n, r);
  if (n && !n.main.eq(s)) {
    let o = !1,
      l = "select";
    return (
      i.inputState.lastSelectionTime > Date.now() - 50 &&
        (i.inputState.lastSelectionOrigin == "select" && (o = !0),
        (l = i.inputState.lastSelectionOrigin)),
      i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }),
      !0
    );
  } else return !1;
}
function ug(i, e, t, n = -1) {
  if (V.ios && i.inputState.flushIOSKey(e)) return !0;
  let s = i.state.selection.main;
  if (
    V.android &&
    ((e.to == s.to &&
      (e.from == s.from ||
        (e.from == s.from - 1 && i.state.sliceDoc(e.from, s.from) == " ")) &&
      e.insert.length == 1 &&
      e.insert.lines == 2 &&
      Xn(i.contentDOM, "Enter", 13)) ||
      (((e.from == s.from - 1 && e.to == s.to && e.insert.length == 0) ||
        (n == 8 && e.insert.length < e.to - e.from && e.to > s.head)) &&
        Xn(i.contentDOM, "Backspace", 8)) ||
      (e.from == s.from &&
        e.to == s.to + 1 &&
        e.insert.length == 0 &&
        Xn(i.contentDOM, "Delete", 46)))
  )
    return !0;
  let r = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o,
    l = () => o || (o = _x(i, e, t));
  return (
    i.state.facet(YO).some((a) => a(i, e.from, e.to, r, l)) || i.dispatch(l()),
    !0
  );
}
function _x(i, e, t) {
  let n,
    s = i.state,
    r = s.selection.main;
  if (
    e.from >= r.from &&
    e.to <= r.to &&
    e.to - e.from >= (r.to - r.from) / 3 &&
    (!t || (t.main.empty && t.main.from == e.from + e.insert.length)) &&
    i.inputState.composing < 0
  ) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "",
      a = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    n = s.replaceSelection(
      i.state.toText(l + e.insert.sliceString(0, void 0, i.state.lineBreak) + a)
    );
  } else {
    let l = s.changes(e),
      a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (
      s.selection.ranges.length > 1 &&
      i.inputState.composing >= 0 &&
      e.to <= r.to &&
      e.to >= r.to - 10
    ) {
      let h = i.state.sliceDoc(e.from, e.to),
        c,
        f = t && FO(i, t.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - p };
      } else c = i.state.doc.lineAt(r.head);
      let u = r.to - e.to,
        d = r.to - r.from;
      n = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let O = p.to - u,
          m = O - h.length;
        if (
          p.to - p.from != d ||
          i.state.sliceDoc(m, O) != h ||
          (p.to >= c.from && p.from <= c.to)
        )
          return { range: p };
        let b = s.changes({ from: m, to: O, insert: e.insert }),
          S = p.to - r.to;
        return {
          changes: b,
          range: a
            ? v.range(Math.max(0, a.anchor + S), Math.max(0, a.head + S))
            : p.map(b),
        };
      });
    } else n = { changes: l, selection: a && s.selection.replaceRange(a) };
  }
  let o = "input.type";
  return (
    (i.composing ||
      (i.inputState.compositionPendingChange &&
        i.inputState.compositionEndedAt > Date.now() - 50)) &&
      ((i.inputState.compositionPendingChange = !1),
      (o += ".compose"),
      i.inputState.compositionFirstChange &&
        ((o += ".start"), (i.inputState.compositionFirstChange = !1))),
    s.update(n, { userEvent: o, scrollIntoView: !0 })
  );
}
function Ex(i, e, t, n) {
  let s = Math.min(i.length, e.length),
    r = 0;
  for (; r < s && i.charCodeAt(r) == e.charCodeAt(r); ) r++;
  if (r == s && i.length == e.length) return null;
  let o = i.length,
    l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && i.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    (r -= a), (l = r + (l - o)), (o = r);
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    (r -= a), (o = r + (o - l)), (l = r);
  }
  return { from: r, toA: o, toB: l };
}
function Wx(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM) return e;
  let {
    anchorNode: t,
    anchorOffset: n,
    focusNode: s,
    focusOffset: r,
  } = i.observer.selectionRange;
  return (
    t && (e.push(new yu(t, n)), (s != t || r != n) && e.push(new yu(s, r))), e
  );
}
function Xx(i, e) {
  if (i.length == 0) return null;
  let t = i[0].pos,
    n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? v.single(t + e, n + e) : null;
}
const Dx = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0,
  },
  ta = V.ie && V.ie_version <= 11;
class Yx {
  constructor(e) {
    (this.view = e),
      (this.active = !1),
      (this.editContext = null),
      (this.selectionRange = new Qy()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1),
      (this.lastChange = 0),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resizeScroll = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.printQuery = null),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver((t) => {
        for (let n of t) this.queue.push(n);
        ((V.ie && V.ie_version <= 11) || (V.ios && e.composing)) &&
        t.some(
          (n) =>
            (n.type == "childList" && n.removedNodes.length) ||
            (n.type == "characterData" &&
              n.oldValue.length > n.target.nodeValue.length)
        )
          ? this.flushSoon()
          : this.flush();
      })),
      window.EditContext &&
        e.constructor.EDIT_CONTEXT !== !1 &&
        !(V.chrome && V.chrome_version < 126) &&
        ((this.editContext = new Lx(e)),
        e.state.facet(Ai) &&
          (e.contentDOM.editContext = this.editContext.editContext)),
      ta &&
        (this.onCharData = (t) => {
          this.queue.push({
            target: t.target,
            type: "characterData",
            oldValue: t.prevValue,
          }),
            this.flushSoon();
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      (this.onResize = this.onResize.bind(this)),
      (this.onPrint = this.onPrint.bind(this)),
      (this.onScroll = this.onScroll.bind(this)),
      window.matchMedia && (this.printQuery = window.matchMedia("print")),
      typeof ResizeObserver == "function" &&
        ((this.resizeScroll = new ResizeObserver(() => {
          var t;
          ((t = this.view.docView) === null || t === void 0
            ? void 0
            : t.lastUpdate) <
            Date.now() - 75 && this.onResize();
        })),
        this.resizeScroll.observe(e.scrollDOM)),
      this.addWindowListeners((this.win = e.win)),
      this.start(),
      typeof IntersectionObserver == "function" &&
        ((this.intersection = new IntersectionObserver(
          (t) => {
            this.parentCheck < 0 &&
              (this.parentCheck = setTimeout(
                this.listenForScroll.bind(this),
                1e3
              )),
              t.length > 0 &&
                t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
                ((this.intersecting = !this.intersecting),
                this.intersecting != this.view.inView &&
                  this.onScrollChanged(document.createEvent("Event")));
          },
          { threshold: [0, 0.001] }
        )),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver((t) => {
          t.length > 0 &&
            t[t.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent("Event"));
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e),
      this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1),
      this.editContext && this.view.requestMeasure(this.editContext.measureReq),
      this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        (this.resizeTimeout = -1), this.view.requestMeasure();
      }, 50));
  }
  onPrint(e) {
    (e.type == "change" && !e.matches) ||
      ((this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        (this.view.viewState.printing = !1), this.view.requestMeasure();
      }, 500));
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))
    ) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: n } = this,
      s = this.selectionRange;
    if (n.state.facet(Ai) ? n.root.activeElement != this.dom : !lo(n.dom, s))
      return;
    let r = s.anchorNode && n.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    ((V.ie && V.ie_version <= 11) || (V.android && V.chrome)) &&
    !n.state.selection.main.empty &&
    s.focusNode &&
    Ms(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
      ? this.flushSoon()
      : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this,
      t = Bs(e.root);
    if (!t) return !1;
    let n =
      (V.safari &&
        e.root.nodeType == 11 &&
        yy(this.dom.ownerDocument) == this.dom &&
        jx(this.view, t)) ||
      t;
    if (!n || this.selectionRange.eq(n)) return !1;
    let s = lo(this.dom, n);
    return s &&
      !this.selectionChanged &&
      e.inputState.lastFocusTime > Date.now() - 200 &&
      e.inputState.lastTouchTime < Date.now() - 300 &&
      ky(this.dom, n)
      ? ((this.view.inputState.lastFocusTime = 0),
        e.docView.updateSelection(),
        !1)
      : (this.selectionRange.setRange(n),
        s && (this.selectionChanged = !0),
        !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset),
      (this.selectionChanged = !1);
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0,
      t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n
          ? e++
          : t || (t = this.scrollTargets.slice(0, e)),
          t && t.push(n),
          (n = n.assignedSlot || n.parentNode);
      else if (n.nodeType == 11) n = n.host;
      else break;
    if (
      (e < this.scrollTargets.length &&
        !t &&
        (t = this.scrollTargets.slice(0, e)),
      t)
    ) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of (this.scrollTargets = t))
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, Dx),
      ta &&
        this.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
      (this.active = !0));
  }
  stop() {
    this.active &&
      ((this.active = !1),
      this.observer.disconnect(),
      ta &&
        this.dom.removeEventListener(
          "DOMCharacterDataModified",
          this.onCharData
        ));
  }
  clear() {
    this.processRecords(),
      (this.queue.length = 0),
      (this.selectionChanged = !1);
  }
  delayAndroidKey(e, t) {
    var n;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r &&
          (this.clearDelayedAndroidKey(),
          (this.view.inputState.lastKeyCode = r.keyCode),
          (this.view.inputState.lastKeyTime = Date.now()),
          !this.flush() && r.force && Xn(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") &&
      (this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force:
          this.lastChange < Date.now() - 50 ||
          !!(
            !((n = this.delayedAndroidKey) === null || n === void 0) && n.force
          ),
      });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1);
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        (this.delayedFlush = -1), this.flush();
      }));
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (this.view.win.cancelAnimationFrame(this.delayedFlush),
      (this.delayedFlush = -1)),
      this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1,
      n = -1,
      s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o &&
        (o.typeOver && (s = !0),
        t == -1
          ? ({ from: t, to: n } = o)
          : ((t = Math.min(o.from, t)), (n = Math.max(o.to, n))));
    }
    return { from: t, to: n, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(),
      s = this.selectionChanged && lo(this.dom, this.selectionRange);
    if (e < 0 && !s) return null;
    e > -1 && (this.lastChange = Date.now()),
      (this.view.inputState.lastFocusTime = 0),
      (this.selectionChanged = !1);
    let r = new Mx(this.view, e, t, n);
    return (
      (this.view.docView.domChanged = {
        newSel: r.newSel ? r.newSel.main : null,
      }),
      r
    );
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), !1;
    let n = this.view.state,
      s = fg(this.view, t);
    return (
      this.view.state == n &&
        (t.domChanged ||
          (t.newSel && !t.newSel.main.eq(this.view.state.selection.main))) &&
        this.view.update([]),
      s
    );
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e)) return null;
    if (
      (t.markDirty(e.type == "attributes"),
      e.type == "attributes" && (t.flags |= 4),
      e.type == "childList")
    ) {
      let n = xu(t, e.previousSibling || e.target.previousSibling, -1),
        s = xu(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1,
      };
    } else
      return e.type == "characterData"
        ? {
            from: t.posAtStart,
            to: t.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue,
          }
        : null;
  }
  setWindow(e) {
    e != this.win &&
      (this.removeWindowListeners(this.win),
      (this.win = e),
      this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize),
      this.printQuery
        ? this.printQuery.addEventListener("change", this.onPrint)
        : e.addEventListener("beforeprint", this.onPrint),
      e.addEventListener("scroll", this.onScroll),
      e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll),
      e.removeEventListener("resize", this.onResize),
      this.printQuery
        ? this.printQuery.removeEventListener("change", this.onPrint)
        : e.removeEventListener("beforeprint", this.onPrint),
      e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext &&
      (this.editContext.update(e),
      e.startState.facet(Ai) != e.state.facet(Ai) &&
        (e.view.contentDOM.editContext = e.state.facet(Ai)
          ? this.editContext.editContext
          : null));
  }
  destroy() {
    var e, t, n;
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
      (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout),
      this.win.cancelAnimationFrame(this.delayedFlush),
      this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function xu(i, e, t) {
  for (; e; ) {
    let n = Oe.get(e);
    if (n && n.parent == i) return n;
    let s = e.parentNode;
    e = s != i.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Su(i, e) {
  let t = e.startContainer,
    n = e.startOffset,
    s = e.endContainer,
    r = e.endOffset,
    o = i.docView.domAtPos(i.state.selection.main.anchor);
  return (
    Ms(o.node, o.offset, s, r) && ([t, n, s, r] = [s, r, t, n]),
    { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r }
  );
}
function jx(i, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(i.root)[0];
    if (s) return Su(i, s);
  }
  let t = null;
  function n(s) {
    s.preventDefault(),
      s.stopImmediatePropagation(),
      (t = s.getTargetRanges()[0]);
  }
  return (
    i.contentDOM.addEventListener("beforeinput", n, !0),
    i.dom.ownerDocument.execCommand("indent"),
    i.contentDOM.removeEventListener("beforeinput", n, !0),
    t ? Su(i, t) : null
  );
}
class Lx {
  constructor(e) {
    (this.from = 0),
      (this.to = 0),
      (this.pendingContextChange = null),
      this.resetRange(e.state);
    let t = (this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(
        Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))
      ),
      selectionEnd: this.toContextPos(e.state.selection.main.head),
    }));
    t.addEventListener("textupdate", (n) => {
      let { anchor: s } = e.state.selection.main,
        r = {
          from: this.toEditorPos(n.updateRangeStart),
          to: this.toEditorPos(n.updateRangeEnd),
          insert: he.of(n.text.split("\n")),
        };
      r.from == this.from && s < this.from
        ? (r.from = s)
        : r.to == this.to && s > this.to && (r.to = s),
        !(r.from == r.to && !r.insert.length) &&
          ((this.pendingContextChange = r),
          ug(
            e,
            r,
            v.single(
              this.toEditorPos(n.selectionStart),
              this.toEditorPos(n.selectionEnd)
            )
          ),
          this.pendingContextChange && this.revertPending(e.state));
    }),
      t.addEventListener("characterboundsupdate", (n) => {
        let s = [],
          r = null;
        for (
          let o = this.toEditorPos(n.rangeStart),
            l = this.toEditorPos(n.rangeEnd);
          o < l;
          o++
        ) {
          let a = e.coordsForChar(o);
          (r =
            (a &&
              new DOMRect(
                a.left,
                a.right,
                a.right - a.left,
                a.bottom - a.top
              )) ||
            r ||
            new DOMRect()),
            s.push(r);
        }
        t.updateCharacterBounds(n.rangeStart, s);
      }),
      t.addEventListener("textformatupdate", (n) => {
        let s = [];
        for (let r of n.getTextFormats()) {
          let o = r.underlineStyle,
            l = r.underlineThickness;
          if (o != "None" && l != "None") {
            let a = `text-decoration: underline ${
              o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""
            }${l == "Thin" ? 1 : 2}px`;
            s.push(
              N.mark({ attributes: { style: a } }).range(
                this.toEditorPos(r.rangeStart),
                this.toEditorPos(r.rangeEnd)
              )
            );
          }
        }
        e.dispatch({ effects: qO.of(N.set(s)) });
      }),
      t.addEventListener("compositionstart", () => {
        e.inputState.composing < 0 &&
          ((e.inputState.composing = 0),
          (e.inputState.compositionFirstChange = !0));
      }),
      t.addEventListener("compositionend", () => {
        (e.inputState.composing = -1),
          (e.inputState.compositionFirstChange = null);
      }),
      (this.measureReq = {
        read: (n) => {
          this.editContext.updateControlBounds(
            n.contentDOM.getBoundingClientRect()
          );
          let s = Bs(n.root);
          s &&
            s.rangeCount &&
            this.editContext.updateSelectionBounds(
              s.getRangeAt(0).getBoundingClientRect()
            );
        },
      });
  }
  applyEdits(e) {
    let t = 0,
      n = !1,
      s = this.pendingContextChange;
    return (
      e.changes.iterChanges((r, o, l, a, h) => {
        if (n) return;
        let c = h.length - (o - r);
        if (s && o >= s.to)
          if (s.from == r && s.to == o && s.insert.eq(h)) {
            (s = this.pendingContextChange = null), (t += c);
            return;
          } else (s = null), this.revertPending(e.state);
        if (((r += t), (o += t), o <= this.from))
          (this.from += c), (this.to += c);
        else if (r < this.to) {
          if (
            r < this.from ||
            o > this.to ||
            this.to - this.from + h.length > 3e4
          ) {
            n = !0;
            return;
          }
          this.editContext.updateText(
            this.toContextPos(r),
            this.toContextPos(o),
            h.toString()
          ),
            (this.to += c);
        }
        t += c;
      }),
      s && !n && this.revertPending(e.state),
      !n
    );
  }
  update(e) {
    !this.applyEdits(e) || !this.rangeIsValid(e.state)
      ? ((this.pendingContextChange = null),
        this.resetRange(e.state),
        this.editContext.updateText(
          0,
          this.editContext.text.length,
          e.state.doc.sliceString(this.from, this.to)
        ),
        this.setSelection(e.state))
      : (e.docChanged || e.selectionSet) && this.setSelection(e.state),
      (e.geometryChanged || e.docChanged || e.selectionSet) &&
        e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    (this.from = Math.max(0, t - 1e4)),
      (this.to = Math.min(e.doc.length, t + 1e4));
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    (this.pendingContextChange = null),
      this.editContext.updateText(
        this.toContextPos(t.from),
        this.toContextPos(t.to + t.insert.length),
        e.doc.sliceString(t.from, t.to)
      );
  }
  setSelection(e) {
    let { main: t } = e.selection,
      n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))),
      s = this.toContextPos(t.head);
    (this.editContext.selectionStart != n ||
      this.editContext.selectionEnd != s) &&
      this.editContext.updateSelection(n, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(
      (this.from > 0 && t - this.from < 500) ||
      (this.to < e.doc.length && this.to - t < 500) ||
      this.to - this.from > 1e4 * 3
    );
  }
  toEditorPos(e) {
    return e + this.from;
  }
  toContextPos(e) {
    return e - this.from;
  }
}
class q {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    (this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement("div")),
      (this.scrollDOM = document.createElement("div")),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = "cm-scroller"),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement("div")),
      (this.announceDOM.className = "cm-announced"),
      this.announceDOM.setAttribute("aria-live", "polite"),
      (this.dom = document.createElement("div")),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM),
      e.parent && e.parent.appendChild(this.dom);
    let { dispatch: t } = e;
    (this.dispatchTransactions =
      e.dispatchTransactions ||
      (t && ((n) => n.forEach((s) => t(s, this)))) ||
      ((n) => this.update(n))),
      (this.dispatch = this.dispatch.bind(this)),
      (this._root = e.root || Py(e.parent) || document),
      (this.viewState = new mu(e.state || ce.create(e))),
      e.scrollTo &&
        e.scrollTo.is(Er) &&
        (this.viewState.scrollTarget = e.scrollTo.value.clip(
          this.viewState.state
        )),
      (this.plugins = this.state.facet(gs).map((n) => new Hl(n)));
    for (let n of this.plugins) n.update(this);
    (this.observer = new Yx(this)),
      (this.inputState = new ix(this)),
      this.inputState.ensureHandlers(this.plugins),
      (this.docView = new Jf(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure();
  }
  dispatch(...e) {
    let t =
      e.length == 1 && e[0] instanceof Ae
        ? e
        : e.length == 1 && Array.isArray(e[0])
        ? e[0]
        : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error(
        "Calls to EditorView.update are not allowed while an update is in progress"
      );
    let t = !1,
      n = !1,
      s,
      r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state."
        );
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus,
      l = 0,
      a = null;
    e.some((u) => u.annotation(sg))
      ? ((this.inputState.notifiedFocused = o), (l = 1))
      : o != this.inputState.notifiedFocused &&
        ((this.inputState.notifiedFocused = o), (a = rg(r, o)), a || (l = 1));
    let h = this.observer.delayedAndroidKey,
      c = null;
    if (
      (h
        ? (this.observer.clearDelayedAndroidKey(),
          (c = this.observer.readChange()),
          ((c && !this.state.doc.eq(r.doc)) ||
            !this.state.selection.eq(r.selection)) &&
            (c = null))
        : this.observer.clear(),
      r.facet(ce.phrases) != this.state.facet(ce.phrases))
    )
      return this.setState(r);
    (s = _o.create(this, r, e)), (s.flags |= l);
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if ((f && (f = f.map(u.changes)), u.scrollIntoView)) {
          let { main: d } = u.state.selection;
          f = new Dn(
            d.empty ? d : v.cursor(d.head, d.head > d.anchor ? -1 : 1)
          );
        }
        for (let d of u.effects) d.is(Er) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f),
        (this.bidiCache = Eo.update(this.bidiCache, s.changes)),
        s.empty || (this.updatePlugins(s), this.inputState.update(s)),
        (t = this.docView.update(s)),
        this.state.facet(ms) != this.styleModules && this.mountStyles(),
        (n = this.updateAttrs()),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          t,
          e.some((u) => u.isUserEvent("select.pointer"))
        );
    } finally {
      this.updateState = 0;
    }
    if (
      (s.startState.facet(Lr) != s.state.facet(Lr) &&
        (this.viewState.mustMeasureContent = !0),
      (t ||
        n ||
        f ||
        this.viewState.mustEnforceCursorAssoc ||
        this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      t && this.docViewUpdate(),
      !s.empty)
    )
      for (let u of this.state.facet(hh))
        try {
          u(s);
        } catch (d) {
          dt(this.state, d, "update listener");
        }
    (a || c) &&
      Promise.resolve().then(() => {
        a && this.state == a.startState && this.dispatch(a),
          c && !fg(this, c) && h.force && Xn(this.contentDOM, h.key, h.keyCode);
      });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error(
        "Calls to EditorView.setState are not allowed while an update is in progress"
      );
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins) n.destroy(this);
      (this.viewState = new mu(e)),
        (this.plugins = e.facet(gs).map((n) => new Hl(n))),
        this.pluginMap.clear();
      for (let n of this.plugins) n.update(this);
      this.docView.destroy(),
        (this.docView = new Jf(this)),
        this.inputState.ensureHandlers(this.plugins),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = []);
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(gs),
      n = e.state.facet(gs);
    if (t != n) {
      let s = [];
      for (let r of n) {
        let o = t.indexOf(r);
        if (o < 0) s.push(new Hl(r));
        else {
          let l = this.plugins[o];
          (l.mustUpdate = e), s.push(l);
        }
      }
      for (let r of this.plugins) r.mustUpdate != e && r.destroy(this);
      (this.plugins = s), this.pluginMap.clear();
    } else for (let s of this.plugins) s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
    t != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (n) {
          dt(this.state, n, "doc view update listener");
        }
    }
  }
  measure(e = !0) {
    if (this.destroyed) return;
    if (
      (this.measureScheduled > -1 &&
        this.win.cancelAnimationFrame(this.measureScheduled),
      this.observer.delayedAndroidKey)
    ) {
      (this.measureScheduled = -1), this.requestMeasure();
      return;
    }
    (this.measureScheduled = 0), e && this.observer.forceFlush();
    let t = null,
      n = this.scrollDOM,
      s = n.scrollTop * this.scaleY,
      { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1),
      (this.viewState.scrollAnchorHeight = -1);
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (bO(n)) (r = -1), (o = this.viewState.heightMap.height);
          else {
            let d = this.viewState.scrollAnchorAt(s);
            (r = d.from), (o = d.top);
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (
          !a &&
          !this.measureRequests.length &&
          this.viewState.scrollTarget == null
        )
          break;
        if (l > 5) {
          console.warn(
            this.measureRequests.length
              ? "Measure loop restarted more than 5 times"
              : "Viewport failed to stabilize"
          );
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
            try {
              return d.read(this);
            } catch (p) {
              return dt(this.state, p), wu;
            }
          }),
          f = _o.create(this, this.state, []),
          u = !1;
        (f.flags |= a),
          t ? (t.flags |= a) : (t = f),
          (this.updateState = 2),
          f.empty ||
            (this.updatePlugins(f),
            this.inputState.update(f),
            this.updateAttrs(),
            (u = this.docView.update(f)),
            u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != wu)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              dt(this.state, p);
            }
        if (
          (u && this.docView.updateSelection(!0),
          !f.viewportChanged && this.measureRequests.length == 0)
        ) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget),
                (this.viewState.scrollTarget = null),
                (o = -1);
              continue;
            } else {
              let p =
                (r < 0
                  ? this.viewState.heightMap.height
                  : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                (s = s + p), (n.scrollTop = s / this.scaleY), (o = -1);
                continue;
              }
            }
          break;
        }
      }
    } finally {
      (this.updateState = 0), (this.measureScheduled = -1);
    }
    if (t && !t.empty) for (let l of this.state.facet(hh)) l(t);
  }
  get themeClasses() {
    return (
      ph + " " + (this.state.facet(dh) ? hg : ag) + " " + this.state.facet(Lr)
    );
  }
  updateAttrs() {
    let e = Qu(this, zO, {
        class:
          "cm-editor" +
          (this.hasFocus ? " cm-focused " : " ") +
          this.themeClasses,
      }),
      t = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        translate: "no",
        contenteditable: this.state.facet(Ai) ? "true" : "false",
        class: "cm-content",
        style: `${V.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true",
      };
    this.state.readOnly && (t["aria-readonly"] = "true"), Qu(this, Oc, t);
    let n = this.observer.ignore(() => {
      let s = sh(this.contentDOM, this.contentAttrs, t),
        r = sh(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return (this.editorAttrs = e), (this.contentAttrs = t), n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let s of n.effects)
        if (s.is(q.announce)) {
          t && (this.announceDOM.textContent = ""), (t = !1);
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(ms);
    let e = this.state.facet(q.cspNonce);
    Vi.mount(
      this.root,
      this.styleModules.concat(Rx).reverse(),
      e ? { nonce: e } : void 0
    );
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error(
        "Reading the editor layout isn't allowed during an update"
      );
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = this.win.requestAnimationFrame(() =>
          this.measure()
        )),
      e)
    ) {
      if (this.measureRequests.indexOf(e) > -1) return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (
      (t === void 0 || (t && t.spec != e)) &&
        this.pluginMap.set(
          e,
          (t = this.plugins.find((n) => n.spec == e) || null)
        ),
      t && t.update(this).value
    );
  }
  get documentTop() {
    return (
      this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
    );
  }
  get documentPadding() {
    return {
      top: this.viewState.paddingTop,
      bottom: this.viewState.paddingBottom,
    };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, n) {
    return Jl(this, e, ru(this, e, t, n));
  }
  moveByGroup(e, t) {
    return Jl(
      this,
      e,
      ru(this, e, t, (n) => ex(this, e.head, n))
    );
  }
  visualLineSide(e, t) {
    let n = this.bidiSpans(e),
      s = this.textDirectionAt(e.from),
      r = n[t ? n.length - 1 : 0];
    return v.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  moveToLineBoundary(e, t, n = !0) {
    return Jy(this, e, t, n);
  }
  moveVertically(e, t, n) {
    return Jl(this, e, tx(this, e, t, n));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), HO(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right) return n;
    let s = this.state.doc.lineAt(e),
      r = this.bidiSpans(s),
      o = r[Wi.find(r, e - s.from, -1, t)];
    return uc(n, (o.dir == Se.LTR) == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(LO) ||
      e < this.viewport.from ||
      e > this.viewport.to
      ? this.textDirection
      : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Ux) return MO(e.length);
    let t = this.textDirectionAt(e.from),
      n;
    for (let r of this.bidiCache)
      if (
        r.from == e.from &&
        r.dir == t &&
        (r.fresh || AO(r.isolates, (n = Kf(this, e))))
      )
        return r.order;
    n || (n = Kf(this, e));
    let s = Xy(e.text, t, n);
    return this.bidiCache.push(new Eo(e.from, e.to, t, n, !0, s)), s;
  }
  get hasFocus() {
    var e;
    return (
      (this.dom.ownerDocument.hasFocus() ||
        (V.safari &&
          ((e = this.inputState) === null || e === void 0
            ? void 0
            : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    );
  }
  focus() {
    this.observer.ignore(() => {
      gO(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e &&
      ((this._root = e),
      this.observer.setWindow(
        (e.nodeType == 9 ? e : e.ownerDocument).defaultView || window
      ),
      this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins) e.destroy(this);
    (this.plugins = []),
      this.inputState.destroy(),
      this.docView.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 &&
        this.win.cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0);
  }
  static scrollIntoView(e, t = {}) {
    return Er.of(
      new Dn(
        typeof e == "number" ? v.cursor(e) : e,
        t.y,
        t.x,
        t.yMargin,
        t.xMargin
      )
    );
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM,
      n = this.viewState.scrollAnchorAt(e);
    return Er.of(new Dn(v.cursor(n.from), "start", "start", n.top - e, t, !0));
  }
  setTabFocusMode(e) {
    e == null
      ? (this.inputState.tabFocusMode =
          this.inputState.tabFocusMode < 0 ? 0 : -1)
      : typeof e == "boolean"
      ? (this.inputState.tabFocusMode = e ? 0 : -1)
      : this.inputState.tabFocusMode != 0 &&
        (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return Me.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return Me.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let n = Vi.newName(),
      s = [Lr.of(n), ms.of(Oh(`.${n}`, e))];
    return t && t.dark && s.push(dh.of(!0)), s;
  }
  static baseTheme(e) {
    return Hi.lowest(ms.of(Oh("." + ph, e, cg)));
  }
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"),
      s = (n && Oe.get(n)) || Oe.get(e);
    return (
      ((t = s == null ? void 0 : s.rootView) === null || t === void 0
        ? void 0
        : t.view) || null
    );
  }
}
q.styleModule = ms;
q.inputHandler = YO;
q.scrollHandler = VO;
q.focusChangeEffect = jO;
q.perLineTextDirection = LO;
q.exceptionSink = DO;
q.updateListener = hh;
q.editable = Ai;
q.mouseSelectionStyle = XO;
q.dragMovesSelection = WO;
q.clickAddsSelectionRange = EO;
q.decorations = Fs;
q.outerDecorations = IO;
q.atomicRanges = gc;
q.bidiIsolatedRanges = NO;
q.scrollMargins = BO;
q.darkTheme = dh;
q.cspNonce = z.define({ combine: (i) => (i.length ? i[0] : "") });
q.contentAttributes = Oc;
q.editorAttributes = zO;
q.lineWrapping = q.contentAttributes.of({ class: "cm-lineWrapping" });
q.announce = ee.define();
const Ux = 4096,
  wu = {};
class Eo {
  constructor(e, t, n, s, r, o) {
    (this.from = e),
      (this.to = t),
      (this.dir = n),
      (this.isolates = s),
      (this.fresh = r),
      (this.order = o);
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh)) return e;
    let n = [],
      s = e.length ? e[e.length - 1].dir : Se.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s &&
        !t.touchesRange(o.from, o.to) &&
        n.push(
          new Eo(
            t.mapPos(o.from, 1),
            t.mapPos(o.to, -1),
            o.dir,
            o.isolates,
            !1,
            o.order
          )
        );
    }
    return n;
  }
}
function Qu(i, e, t) {
  for (let n = i.state.facet(e), s = n.length - 1; s >= 0; s--) {
    let r = n[s],
      o = typeof r == "function" ? r(i) : r;
    o && nh(o, t);
  }
  return t;
}
const Vx = V.mac ? "mac" : V.windows ? "win" : V.linux ? "linux" : "key";
function qx(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h)) l = !0;
    else if (/^a(lt)?$/i.test(h)) s = !0;
    else if (/^(c|ctrl|control)$/i.test(h)) r = !0;
    else if (/^s(hift)?$/i.test(h)) o = !0;
    else if (/^mod$/i.test(h)) e == "mac" ? (l = !0) : (r = !0);
    else throw new Error("Unrecognized modifier name: " + h);
  }
  return (
    s && (n = "Alt-" + n),
    r && (n = "Ctrl-" + n),
    l && (n = "Meta-" + n),
    o && (n = "Shift-" + n),
    n
  );
}
function Ur(i, e, t) {
  return (
    e.altKey && (i = "Alt-" + i),
    e.ctrlKey && (i = "Ctrl-" + i),
    e.metaKey && (i = "Meta-" + i),
    t !== !1 && e.shiftKey && (i = "Shift-" + i),
    i
  );
}
const zx = Hi.default(
    q.domEventHandlers({
      keydown(i, e) {
        return pg(dg(e.state), i, e, "editor");
      },
    })
  ),
  yc = z.define({ enables: zx }),
  Pu = new WeakMap();
function dg(i) {
  let e = i.facet(yc),
    t = Pu.get(e);
  return t || Pu.set(e, (t = Bx(e.reduce((n, s) => n.concat(s), [])))), t;
}
function Ix(i, e, t) {
  return pg(dg(i.state), e, i, t);
}
let Mi = null;
const Nx = 4e3;
function Bx(i, e = Vx) {
  let t = Object.create(null),
    n = Object.create(null),
    s = (o, l) => {
      let a = n[o];
      if (a == null) n[o] = l;
      else if (a != l)
        throw new Error(
          "Key binding " +
            o +
            " is used both as a regular binding and as a multi-stroke prefix"
        );
    },
    r = (o, l, a, h, c) => {
      var f, u;
      let d = t[o] || (t[o] = Object.create(null)),
        p = l.split(/ (?!$)/).map((b) => qx(b, e));
      for (let b = 1; b < p.length; b++) {
        let S = p.slice(0, b).join(" ");
        s(S, !0),
          d[S] ||
            (d[S] = {
              preventDefault: !0,
              stopPropagation: !1,
              run: [
                (P) => {
                  let x = (Mi = { view: P, prefix: S, scope: o });
                  return (
                    setTimeout(() => {
                      Mi == x && (Mi = null);
                    }, Nx),
                    !0
                  );
                },
              ],
            });
      }
      let O = p.join(" ");
      s(O, !1);
      let m =
        d[O] ||
        (d[O] = {
          preventDefault: !1,
          stopPropagation: !1,
          run:
            ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) ===
              null || u === void 0
              ? void 0
              : u.slice()) || [],
        });
      a && m.run.push(a),
        h && (m.preventDefault = !0),
        c && (m.stopPropagation = !0);
    };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = Object.create(null));
        c._any ||
          (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c) c[u].run.push((d) => f(d, gh));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation),
          o.shift &&
            r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let gh = null;
function pg(i, e, t, n) {
  gh = e;
  let s = by(e),
    r = Ve(s, 0),
    o = $t(r) == s.length && s != " ",
    l = "",
    a = !1,
    h = !1,
    c = !1;
  Mi &&
    Mi.view == t &&
    Mi.scope == n &&
    ((l = Mi.prefix + " "),
    JO.indexOf(e.keyCode) < 0 && ((h = !0), (Mi = null)));
  let f = new Set(),
    u = (m) => {
      if (m) {
        for (let b of m.run)
          if (!f.has(b) && (f.add(b), b(t)))
            return m.stopPropagation && (c = !0), !0;
        m.preventDefault && (m.stopPropagation && (c = !0), (h = !0));
      }
      return !1;
    },
    d = i[n],
    p,
    O;
  return (
    d &&
      (u(d[l + Ur(s, e, !o)])
        ? (a = !0)
        : o &&
          (e.altKey || e.metaKey || e.ctrlKey) &&
          !(V.windows && e.ctrlKey && e.altKey) &&
          (p = qi[e.keyCode]) &&
          p != s
        ? (u(d[l + Ur(p, e, !0)]) ||
            (e.shiftKey &&
              (O = Ns[e.keyCode]) != s &&
              O != p &&
              u(d[l + Ur(O, e, !1)]))) &&
          (a = !0)
        : o && e.shiftKey && u(d[l + Ur(s, e, !0)]) && (a = !0),
      !a && u(d._any) && (a = !0)),
    h && (a = !0),
    a && c && e.stopPropagation(),
    (gh = null),
    a
  );
}
class br {
  constructor(e, t, n, s, r) {
    (this.className = e),
      (this.left = t),
      (this.top = n),
      (this.width = s),
      (this.height = r);
  }
  draw() {
    let e = document.createElement("div");
    return (e.className = this.className), this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    (e.style.left = this.left + "px"),
      (e.style.top = this.top + "px"),
      this.width != null && (e.style.width = this.width + "px"),
      (e.style.height = this.height + "px");
  }
  eq(e) {
    return (
      this.left == e.left &&
      this.top == e.top &&
      this.width == e.width &&
      this.height == e.height &&
      this.className == e.className
    );
  }
  static forRange(e, t, n) {
    if (n.empty) {
      let s = e.coordsAtPos(n.head, n.assoc || 1);
      if (!s) return [];
      let r = Og(e);
      return [
        new br(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top),
      ];
    } else return Gx(e, t, n);
  }
}
function Og(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return {
    left:
      (i.textDirection == Se.LTR
        ? e.left
        : e.right - i.scrollDOM.clientWidth * i.scaleX) -
      i.scrollDOM.scrollLeft * i.scaleX,
    top: e.top - i.scrollDOM.scrollTop * i.scaleY,
  };
}
function ku(i, e, t, n) {
  let s = i.coordsAtPos(e, t * 2);
  if (!s) return n;
  let r = i.dom.getBoundingClientRect(),
    o = (s.top + s.bottom) / 2,
    l = i.posAtCoords({ x: r.left + 1, y: o }),
    a = i.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null
    ? n
    : {
        from: Math.max(n.from, Math.min(l, a)),
        to: Math.min(n.to, Math.max(l, a)),
      };
}
function Gx(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to) return [];
  let n = Math.max(t.from, i.viewport.from),
    s = Math.min(t.to, i.viewport.to),
    r = i.textDirection == Se.LTR,
    o = i.contentDOM,
    l = o.getBoundingClientRect(),
    a = Og(i),
    h = o.querySelector(".cm-line"),
    c = h && window.getComputedStyle(h),
    f =
      l.left +
      (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0),
    u = l.right - (c ? parseInt(c.paddingRight) : 0),
    d = fh(i, n),
    p = fh(i, s),
    O = d.type == at.Text ? d : null,
    m = p.type == at.Text ? p : null;
  if (
    (O && (i.lineWrapping || d.widgetLineBreaks) && (O = ku(i, n, 1, O)),
    m && (i.lineWrapping || p.widgetLineBreaks) && (m = ku(i, s, -1, m)),
    O && m && O.from == m.from && O.to == m.to)
  )
    return S(P(t.from, t.to, O));
  {
    let Q = O ? P(t.from, null, O) : x(d, !1),
      $ = m ? P(null, t.to, m) : x(p, !0),
      C = [];
    return (
      (O || d).to < (m || p).from - (O && m ? 1 : 0) ||
      (d.widgetLineBreaks > 1 && Q.bottom + i.defaultLineHeight / 2 < $.top)
        ? C.push(b(f, Q.bottom, u, $.top))
        : Q.bottom < $.top &&
          i.elementAtHeight((Q.bottom + $.top) / 2).type == at.Text &&
          (Q.bottom = $.top = (Q.bottom + $.top) / 2),
      S(Q).concat(C).concat(S($))
    );
  }
  function b(Q, $, C, j) {
    return new br(e, Q - a.left, $ - a.top - 0.01, C - Q, j - $ + 0.01);
  }
  function S({ top: Q, bottom: $, horizontal: C }) {
    let j = [];
    for (let _ = 0; _ < C.length; _ += 2) j.push(b(C[_], Q, C[_ + 1], $));
    return j;
  }
  function P(Q, $, C) {
    let j = 1e9,
      _ = -1e9,
      D = [];
    function U(H, re, oe, ie, te) {
      let Ce = i.coordsAtPos(H, H == C.to ? -2 : 2),
        Qe = i.coordsAtPos(oe, oe == C.from ? 2 : -2);
      !Ce ||
        !Qe ||
        ((j = Math.min(Ce.top, Qe.top, j)),
        (_ = Math.max(Ce.bottom, Qe.bottom, _)),
        te == Se.LTR
          ? D.push(r && re ? f : Ce.left, r && ie ? u : Qe.right)
          : D.push(!r && ie ? f : Qe.left, !r && re ? u : Ce.right));
    }
    let R = eval('Q ?? C.from'),
      B = eval('$ ?? C.to');
    for (let H of i.visibleRanges)
      if (H.to > R && H.from < B)
        for (let re = Math.max(H.from, R), oe = Math.min(H.to, B); ; ) {
          let ie = i.state.doc.lineAt(re);
          for (let te of i.bidiSpans(ie)) {
            let Ce = te.from + ie.from,
              Qe = te.to + ie.from;
            if (Ce >= oe) break;
            Qe > re &&
              U(
                Math.max(Ce, re),
                Q == null && Ce <= R,
                Math.min(Qe, oe),
                $ == null && Qe >= B,
                te.dir
              );
          }
          if (((re = ie.to + 1), re >= oe)) break;
        }
    return (
      D.length == 0 && U(R, Q == null, B, $ == null, i.textDirection),
      { top: j, bottom: _, horizontal: D }
    );
  }
  function x(Q, $) {
    let C = l.top + ($ ? Q.top : Q.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function Fx(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class Hx {
  constructor(e, t) {
    (this.view = e),
      (this.layer = t),
      (this.drawn = []),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this),
      }),
      (this.dom = e.scrollDOM.appendChild(document.createElement("div"))),
      this.dom.classList.add("cm-layer"),
      t.above && this.dom.classList.add("cm-layer-above"),
      t.class && this.dom.classList.add(t.class),
      this.scale(),
      this.dom.setAttribute("aria-hidden", "true"),
      this.setOrder(e.state),
      e.requestMeasure(this.measureReq),
      t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(co) != e.state.facet(co) && this.setOrder(e.state),
      (this.layer.update(e, this.dom) || e.geometryChanged) &&
        (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 &&
      e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0,
      n = e.facet(co);
    for (; t < n.length && n[t] != this.layer; ) t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) &&
      ((this.scaleX = e),
      (this.scaleY = t),
      (this.dom.style.transform = `scale(${1 / e}, ${1 / t})`));
  }
  draw(e) {
    if (
      e.length != this.drawn.length ||
      e.some((t, n) => !Fx(t, this.drawn[n]))
    ) {
      let t = this.dom.firstChild,
        n = 0;
      for (let s of e)
        s.update &&
        t &&
        s.constructor &&
        this.drawn[n].constructor &&
        s.update(t, this.drawn[n])
          ? ((t = t.nextSibling), n++)
          : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), (t = s);
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view),
      this.dom.remove();
  }
}
const co = z.define();
function gg(i) {
  return [Me.define((e) => new Hx(e, i)), co.of(i)];
}
const mg = !V.ios,
  Hs = z.define({
    combine(i) {
      return ri(
        i,
        { cursorBlinkRate: 1200, drawRangeCursor: !0 },
        {
          cursorBlinkRate: (e, t) => Math.min(e, t),
          drawRangeCursor: (e, t) => e || t,
        }
      );
    },
  });
function O$(i = {}) {
  return [Hs.of(i), Kx, Jx, eS, UO.of(!0)];
}
function bg(i) {
  return i.startState.facet(Hs) != i.state.facet(Hs);
}
const Kx = gg({
  above: !0,
  markers(i) {
    let { state: e } = i,
      t = e.facet(Hs),
      n = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty ? !r || mg : t.drawRangeCursor) {
        let o = r
            ? "cm-cursor cm-cursor-primary"
            : "cm-cursor cm-cursor-secondary",
          l = s.empty ? s : v.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of br.forRange(i, o, l)) n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) &&
      (e.style.animationName =
        e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = bg(i);
    return t && vu(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    vu(e.state, i);
  },
  class: "cm-cursorLayer",
});
function vu(i, e) {
  e.style.animationDuration = i.facet(Hs).cursorBlinkRate + "ms";
}
const Jx = gg({
    above: !1,
    markers(i) {
      return i.state.selection.ranges
        .map((e) =>
          e.empty ? [] : br.forRange(i, "cm-selectionBackground", e)
        )
        .reduce((e, t) => e.concat(t));
    },
    update(i, e) {
      return i.docChanged || i.selectionSet || i.viewportChanged || bg(i);
    },
    class: "cm-selectionLayer",
  }),
  mh = {
    ".cm-line": {
      "& ::selection, &::selection": {
        backgroundColor: "transparent !important",
      },
    },
    ".cm-content": {
      "& :focus": {
        caretColor: "initial !important",
        "&::selection, & ::selection": {
          backgroundColor: "Highlight !important",
        },
      },
    },
  };
mg &&
  (mh[".cm-line"].caretColor = mh[".cm-content"].caretColor =
    "transparent !important");
const eS = Hi.highest(q.theme(mh)),
  yg = ee.define({
    map(i, e) {
      return i == null ? null : e.mapPos(i);
    },
  }),
  xs = Le.define({
    create() {
      return null;
    },
    update(i, e) {
      return (
        i != null && (i = e.changes.mapPos(i)),
        e.effects.reduce((t, n) => (n.is(yg) ? n.value : t), i)
      );
    },
  }),
  tS = Me.fromClass(
    class {
      constructor(i) {
        (this.view = i),
          (this.cursor = null),
          (this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this),
          });
      }
      update(i) {
        var e;
        let t = i.state.field(xs);
        t == null
          ? this.cursor != null &&
            ((e = this.cursor) === null || e === void 0 || e.remove(),
            (this.cursor = null))
          : (this.cursor ||
              ((this.cursor = this.view.scrollDOM.appendChild(
                document.createElement("div")
              )),
              (this.cursor.className = "cm-dropCursor")),
            (i.startState.field(xs) != t ||
              i.docChanged ||
              i.geometryChanged) &&
              this.view.requestMeasure(this.measureReq));
      }
      readPos() {
        let { view: i } = this,
          e = i.state.field(xs),
          t = e != null && i.coordsAtPos(e);
        if (!t) return null;
        let n = i.scrollDOM.getBoundingClientRect();
        return {
          left: t.left - n.left + i.scrollDOM.scrollLeft * i.scaleX,
          top: t.top - n.top + i.scrollDOM.scrollTop * i.scaleY,
          height: t.bottom - t.top,
        };
      }
      drawCursor(i) {
        if (this.cursor) {
          let { scaleX: e, scaleY: t } = this.view;
          i
            ? ((this.cursor.style.left = i.left / e + "px"),
              (this.cursor.style.top = i.top / t + "px"),
              (this.cursor.style.height = i.height / t + "px"))
            : (this.cursor.style.left = "-100000px");
        }
      }
      destroy() {
        this.cursor && this.cursor.remove();
      }
      setDropPos(i) {
        this.view.state.field(xs) != i &&
          this.view.dispatch({ effects: yg.of(i) });
      }
    },
    {
      eventObservers: {
        dragover(i) {
          this.setDropPos(
            this.view.posAtCoords({ x: i.clientX, y: i.clientY })
          );
        },
        dragleave(i) {
          (i.target == this.view.contentDOM ||
            !this.view.contentDOM.contains(i.relatedTarget)) &&
            this.setDropPos(null);
        },
        dragend() {
          this.setDropPos(null);
        },
        drop() {
          this.setDropPos(null);
        },
      },
    }
  );
function g$() {
  return [xs, tS];
}
function $u(i, e, t, n, s) {
  e.lastIndex = 0;
  for (let r = i.iterRange(t, n), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak) for (; (l = e.exec(r.value)); ) s(o + l.index, l);
}
function iS(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: s, to: r } of t)
    (s = Math.max(i.state.doc.lineAt(s).from, s - e)),
      (r = Math.min(i.state.doc.lineAt(r).to, r + e)),
      n.length && n[n.length - 1].to >= s
        ? (n[n.length - 1].to = r)
        : n.push({ from: s, to: r });
  return n;
}
class nS {
  constructor(e) {
    const {
      regexp: t,
      decoration: n,
      decorate: s,
      boundary: r,
      maxLength: o = 1e3,
    } = e;
    if (!t.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set"
      );
    if (((this.regexp = t), s))
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, h, c) => {
        let f = n(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (n) this.addMatch = (l, a, h, c) => c(h, h + l[0].length, n);
    else
      throw new RangeError(
        "Either 'decorate' or 'decoration' should be provided to MatchDecorator"
      );
    (this.boundary = r), (this.maxLength = o);
  }
  createDeco(e) {
    let t = new Ui(),
      n = t.add.bind(t);
    for (let { from: s, to: r } of iS(e, this.maxLength))
      $u(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, n));
    return t.finish();
  }
  updateDeco(e, t) {
    let n = 1e9,
      s = -1;
    return (
      e.docChanged &&
        e.changes.iterChanges((r, o, l, a) => {
          a > e.view.viewport.from &&
            l < e.view.viewport.to &&
            ((n = Math.min(l, n)), (s = Math.max(a, s)));
        }),
      e.viewportChanged || s - n > 1e3
        ? this.createDeco(e.view)
        : s > -1
        ? this.updateRange(e.view, t.map(e.changes), n, s)
        : t
    );
  }
  updateRange(e, t, n, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, n),
        l = Math.min(r.to, s);
      if (l > o) {
        let a = e.state.doc.lineAt(o),
          h = a.to < l ? e.state.doc.lineAt(l) : a,
          c = Math.max(r.from, a.from),
          f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [],
          d,
          p = (O, m, b) => u.push(b.range(O, m));
        if (a == h)
          for (
            this.regexp.lastIndex = c - a.from;
            (d = this.regexp.exec(a.text)) && d.index < f - a.from;

          )
            this.addMatch(d, e, d.index + a.from, p);
        else
          $u(e.state.doc, this.regexp, c, f, (O, m) =>
            this.addMatch(m, e, O, p)
          );
        t = t.update({
          filterFrom: c,
          filterTo: f,
          filter: (O, m) => O < c || m > f,
          add: u,
        });
      }
    }
    return t;
  }
}
const bh = /x/.unicode != null ? "gu" : "g",
  sS = new RegExp(
    "\n".join([`[\0-\b`, `--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`]),
    bh
  ),
  rS = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8294: "left-to-right isolate",
    8295: "right-to-left isolate",
    8297: "pop directional isolate",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement",
  };
let ia = null;
function oS() {
  var i;
  if (ia == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    ia = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return ia || !1;
}
const fo = z.define({
  combine(i) {
    let e = ri(i, { render: null, specialChars: sS, addSpecialChars: null });
    return (
      (e.replaceTabs = !oS()) &&
        (e.specialChars = new RegExp("	|" + e.specialChars.source, bh)),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(
          e.specialChars.source + "|" + e.addSpecialChars.source,
          bh
        )),
      e
    );
  },
});
function m$(i = {}) {
  return [fo.of(i), lS()];
}
let Cu = null;
function lS() {
  return (
    Cu ||
    (Cu = Me.fromClass(
      class {
        constructor(i) {
          (this.view = i),
            (this.decorations = N.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(i.state.facet(fo))),
            (this.decorations = this.decorator.createDeco(i));
        }
        makeDecorator(i) {
          return new nS({
            regexp: i.specialChars,
            decoration: (e, t, n) => {
              let { doc: s } = t.state,
                r = Ve(e[0], 0);
              if (r == 9) {
                let o = s.lineAt(n),
                  l = t.state.tabSize,
                  a = Kn(o.text, l, n - o.from);
                return N.replace({
                  widget: new fS(
                    ((l - (a % l)) * this.view.defaultCharacterWidth) /
                      this.view.scaleX
                  ),
                });
              }
              return (
                this.decorationCache[r] ||
                (this.decorationCache[r] = N.replace({ widget: new cS(i, r) }))
              );
            },
            boundary: i.replaceTabs ? void 0 : /[^]/,
          });
        }
        update(i) {
          let e = i.state.facet(fo);
          i.startState.facet(fo) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(i.view)))
            : (this.decorations = this.decorator.updateDeco(
                i,
                this.decorations
              ));
        }
      },
      { decorations: (i) => i.decorations }
    ))
  );
}
const aS = "•";
function hS(i) {
  return i >= 32 ? aS : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class cS extends xi {
  constructor(e, t) {
    super(), (this.options = e), (this.code = t);
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = hS(this.code),
      n =
        e.state.phrase("Control character") +
        " " +
        (rS[this.code] || "0x" + this.code.toString(16)),
      s = this.options.render && this.options.render(this.code, n, t);
    if (s) return s;
    let r = document.createElement("span");
    return (
      (r.textContent = t),
      (r.title = n),
      r.setAttribute("aria-label", n),
      (r.className = "cm-specialChar"),
      r
    );
  }
  ignoreEvent() {
    return !1;
  }
}
class fS extends xi {
  constructor(e) {
    super(), (this.width = e);
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return (
      (e.textContent = "	"),
      (e.className = "cm-tab"),
      (e.style.width = this.width + "px"),
      e
    );
  }
  ignoreEvent() {
    return !1;
  }
}
function b$() {
  return dS;
}
const uS = N.line({ class: "cm-activeLine" }),
  dS = Me.fromClass(
    class {
      constructor(i) {
        this.decorations = this.getDeco(i);
      }
      update(i) {
        (i.docChanged || i.selectionSet) &&
          (this.decorations = this.getDeco(i.view));
      }
      getDeco(i) {
        let e = -1,
          t = [];
        for (let n of i.state.selection.ranges) {
          let s = i.lineBlockAt(n.head);
          s.from > e && (t.push(uS.range(s.from)), (e = s.from));
        }
        return N.set(t);
      }
    },
    { decorations: (i) => i.decorations }
  ),
  yh = 2e3;
function pS(i, e, t) {
  let n = Math.min(e.line, t.line),
    s = Math.max(e.line, t.line),
    r = [];
  if (e.off > yh || t.off > yh || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off),
      l = Math.max(e.off, t.off);
    for (let a = n; a <= s; a++) {
      let h = i.doc.line(a);
      h.length <= l && r.push(v.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col),
      l = Math.max(e.col, t.col);
    for (let a = n; a <= s; a++) {
      let h = i.doc.line(a),
        c = Fa(h.text, o, i.tabSize, !0);
      if (c < 0) r.push(v.cursor(h.to));
      else {
        let f = Fa(h.text, l, i.tabSize);
        r.push(v.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function OS(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function Zu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    n = i.state.doc.lineAt(t),
    s = t - n.from,
    r =
      s > yh
        ? -1
        : s == n.length
        ? OS(i, e.clientX)
        : Kn(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: r, off: s };
}
function gS(i, e) {
  let t = Zu(i, e),
    n = i.state.selection;
  return t
    ? {
        update(s) {
          if (s.docChanged) {
            let r = s.changes.mapPos(s.startState.doc.line(t.line).from),
              o = s.state.doc.lineAt(r);
            (t = {
              line: o.number,
              col: t.col,
              off: Math.min(t.off, o.length),
            }),
              (n = n.map(s.changes));
          }
        },
        get(s, r, o) {
          let l = Zu(i, s);
          if (!l) return n;
          let a = pS(i.state, t, l);
          return a.length
            ? o
              ? v.create(a.concat(n.ranges))
              : v.create(a)
            : n;
        },
      }
    : null;
}
function y$(i) {
  let e = (t) => t.altKey && t.button == 0;
  return q.mouseSelectionStyle.of((t, n) => (e(n) ? gS(t, n) : null));
}
const mS = {
    Alt: [18, (i) => !!i.altKey],
    Control: [17, (i) => !!i.ctrlKey],
    Shift: [16, (i) => !!i.shiftKey],
    Meta: [91, (i) => !!i.metaKey],
  },
  bS = { style: "cursor: crosshair" };
function x$(i = {}) {
  let [e, t] = mS[i.key || "Alt"],
    n = Me.fromClass(
      class {
        constructor(s) {
          (this.view = s), (this.isDown = !1);
        }
        set(s) {
          this.isDown != s && ((this.isDown = s), this.view.update([]));
        }
      },
      {
        eventObservers: {
          keydown(s) {
            this.set(s.keyCode == e || t(s));
          },
          keyup(s) {
            (s.keyCode == e || !t(s)) && this.set(!1);
          },
          mousemove(s) {
            this.set(t(s));
          },
        },
      }
    );
  return [
    n,
    q.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(n)) === null || r === void 0) && r.isDown
        ? bS
        : null;
    }),
  ];
}
const hs = "-10000px";
class xg {
  constructor(e, t, n, s) {
    (this.facet = t),
      (this.createTooltipView = n),
      (this.removeTooltipView = s),
      (this.input = e.state.facet(t)),
      (this.tooltips = this.input.filter((o) => o));
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => (r = n(o, r)));
  }
  update(e, t) {
    var n;
    let s = e.state.facet(this.facet),
      r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews) a.update && a.update(e);
      return !1;
    }
    let o = [],
      l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a],
        c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          (o[a] = this.createTooltipView(h, a ? o[a - 1] : null)),
            l && (l[a] = !!h.above);
        else {
          let f = (o[a] = this.tooltipViews[c]);
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 &&
        (this.removeTooltipView(a),
        (n = a.destroy) === null || n === void 0 || n.call(a));
    return (
      t && (l.forEach((a, h) => (t[h] = a)), (t.length = l.length)),
      (this.input = s),
      (this.tooltips = r),
      (this.tooltipViews = o),
      !0
    );
  }
}
function yS(i) {
  let { win: e } = i;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const na = z.define({
    combine: (i) => {
      var e, t, n;
      return {
        position: V.ios
          ? "absolute"
          : ((e = i.find((s) => s.position)) === null || e === void 0
              ? void 0
              : e.position) || "fixed",
        parent:
          ((t = i.find((s) => s.parent)) === null || t === void 0
            ? void 0
            : t.parent) || null,
        tooltipSpace:
          ((n = i.find((s) => s.tooltipSpace)) === null || n === void 0
            ? void 0
            : n.tooltipSpace) || yS,
      };
    },
  }),
  Ru = new WeakMap(),
  xc = Me.fromClass(
    class {
      constructor(i) {
        (this.view = i),
          (this.above = []),
          (this.inView = !0),
          (this.madeAbsolute = !1),
          (this.lastTransaction = 0),
          (this.measureTimeout = -1);
        let e = i.state.facet(na);
        (this.position = e.position),
          (this.parent = e.parent),
          (this.classes = i.themeClasses),
          this.createContainer(),
          (this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this,
          }),
          (this.resizeObserver =
            typeof ResizeObserver == "function"
              ? new ResizeObserver(() => this.measureSoon())
              : null),
          (this.manager = new xg(
            i,
            Sc,
            (t, n) => this.createTooltip(t, n),
            (t) => {
              this.resizeObserver && this.resizeObserver.unobserve(t.dom),
                t.dom.remove();
            }
          )),
          (this.above = this.manager.tooltips.map((t) => !!t.above)),
          (this.intersectionObserver =
            typeof IntersectionObserver == "function"
              ? new IntersectionObserver(
                  (t) => {
                    Date.now() > this.lastTransaction - 50 &&
                      t.length > 0 &&
                      t[t.length - 1].intersectionRatio < 1 &&
                      this.measureSoon();
                  },
                  { threshold: [1] }
                )
              : null),
          this.observeIntersection(),
          i.win.addEventListener(
            "resize",
            (this.measureSoon = this.measureSoon.bind(this))
          ),
          this.maybeMeasure();
      }
      createContainer() {
        this.parent
          ? ((this.container = document.createElement("div")),
            (this.container.style.position = "relative"),
            (this.container.className = this.view.themeClasses),
            this.parent.appendChild(this.container))
          : (this.container = this.view.dom);
      }
      observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          for (let i of this.manager.tooltipViews)
            this.intersectionObserver.observe(i.dom);
        }
      }
      measureSoon() {
        this.measureTimeout < 0 &&
          (this.measureTimeout = setTimeout(() => {
            (this.measureTimeout = -1), this.maybeMeasure();
          }, 50));
      }
      update(i) {
        i.transactions.length && (this.lastTransaction = Date.now());
        let e = this.manager.update(i, this.above);
        e && this.observeIntersection();
        let t = e || i.geometryChanged,
          n = i.state.facet(na);
        if (n.position != this.position && !this.madeAbsolute) {
          this.position = n.position;
          for (let s of this.manager.tooltipViews)
            s.dom.style.position = this.position;
          t = !0;
        }
        if (n.parent != this.parent) {
          this.parent && this.container.remove(),
            (this.parent = n.parent),
            this.createContainer();
          for (let s of this.manager.tooltipViews)
            this.container.appendChild(s.dom);
          t = !0;
        } else
          this.parent &&
            this.view.themeClasses != this.classes &&
            (this.classes = this.container.className = this.view.themeClasses);
        t && this.maybeMeasure();
      }
      createTooltip(i, e) {
        let t = i.create(this.view),
          n = e ? e.dom : null;
        if (
          (t.dom.classList.add("cm-tooltip"),
          i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow"))
        ) {
          let s = document.createElement("div");
          (s.className = "cm-tooltip-arrow"), t.dom.appendChild(s);
        }
        return (
          (t.dom.style.position = this.position),
          (t.dom.style.top = hs),
          (t.dom.style.left = "0px"),
          this.container.insertBefore(t.dom, n),
          t.mount && t.mount(this.view),
          this.resizeObserver && this.resizeObserver.observe(t.dom),
          t
        );
      }
      destroy() {
        var i, e, t;
        this.view.win.removeEventListener("resize", this.measureSoon);
        for (let n of this.manager.tooltipViews)
          n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
        this.parent && this.container.remove(),
          (e = this.resizeObserver) === null || e === void 0 || e.disconnect(),
          (t = this.intersectionObserver) === null ||
            t === void 0 ||
            t.disconnect(),
          clearTimeout(this.measureTimeout);
      }
      readMeasure() {
        let i = this.view.dom.getBoundingClientRect(),
          e = 1,
          t = 1,
          n = !1;
        if (this.position == "fixed" && this.manager.tooltipViews.length) {
          let { dom: s } = this.manager.tooltipViews[0];
          if (V.gecko) n = s.offsetParent != this.container.ownerDocument.body;
          else if (s.style.top == hs && s.style.left == "0px") {
            let r = s.getBoundingClientRect();
            n = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
          }
        }
        if (n || this.position == "absolute")
          if (this.parent) {
            let s = this.parent.getBoundingClientRect();
            s.width &&
              s.height &&
              ((e = s.width / this.parent.offsetWidth),
              (t = s.height / this.parent.offsetHeight));
          } else ({ scaleX: e, scaleY: t } = this.view.viewState);
        return {
          editor: i,
          parent: this.parent ? this.container.getBoundingClientRect() : i,
          pos: this.manager.tooltips.map((s, r) => {
            let o = this.manager.tooltipViews[r];
            return o.getCoords
              ? o.getCoords(s.pos)
              : this.view.coordsAtPos(s.pos);
          }),
          size: this.manager.tooltipViews.map(({ dom: s }) =>
            s.getBoundingClientRect()
          ),
          space: this.view.state.facet(na).tooltipSpace(this.view),
          scaleX: e,
          scaleY: t,
          makeAbsolute: n,
        };
      }
      writeMeasure(i) {
        var e;
        if (i.makeAbsolute) {
          (this.madeAbsolute = !0), (this.position = "absolute");
          for (let l of this.manager.tooltipViews)
            l.dom.style.position = "absolute";
        }
        let { editor: t, space: n, scaleX: s, scaleY: r } = i,
          o = [];
        for (let l = 0; l < this.manager.tooltips.length; l++) {
          let a = this.manager.tooltips[l],
            h = this.manager.tooltipViews[l],
            { dom: c } = h,
            f = i.pos[l],
            u = i.size[l];
          if (
            !f ||
            f.bottom <= Math.max(t.top, n.top) ||
            f.top >= Math.min(t.bottom, n.bottom) ||
            f.right < Math.max(t.left, n.left) - 0.1 ||
            f.left > Math.min(t.right, n.right) + 0.1
          ) {
            c.style.top = hs;
            continue;
          }
          let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null,
            p = d ? 7 : 0,
            O = u.right - u.left,
            m = (e = Ru.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top,
            b = h.offset || SS,
            S = this.view.textDirection == Se.LTR,
            P =
              u.width > n.right - n.left
                ? S
                  ? n.left
                  : n.right - u.width
                : S
                ? Math.min(f.left - (d ? 14 : 0) + b.x, n.right - O)
                : Math.max(n.left, f.left - O + (d ? 14 : 0) - b.x),
            x = this.above[l];
          !a.strictSide &&
            (x
              ? f.top - (u.bottom - u.top) - b.y < n.top
              : f.bottom + (u.bottom - u.top) + b.y > n.bottom) &&
            x == n.bottom - f.bottom > f.top - n.top &&
            (x = this.above[l] = !x);
          let Q = (x ? f.top - n.top : n.bottom - f.bottom) - p;
          if (Q < m && h.resize !== !1) {
            if (Q < this.view.defaultLineHeight) {
              c.style.top = hs;
              continue;
            }
            Ru.set(h, m), (c.style.height = (m = Q) / r + "px");
          } else c.style.height && (c.style.height = "");
          let $ = x ? f.top - m - p - b.y : f.bottom + p + b.y,
            C = P + O;
          if (h.overlap !== !0)
            for (let j of o)
              j.left < C &&
                j.right > P &&
                j.top < $ + m &&
                j.bottom > $ &&
                ($ = x ? j.top - m - 2 - p : j.bottom + p + 2);
          if (
            (this.position == "absolute"
              ? ((c.style.top = ($ - i.parent.top) / r + "px"),
                (c.style.left = (P - i.parent.left) / s + "px"))
              : ((c.style.top = $ / r + "px"), (c.style.left = P / s + "px")),
            d)
          ) {
            let j = f.left + (S ? b.x : -b.x) - (P + 14 - 7);
            d.style.left = j / s + "px";
          }
          h.overlap !== !0 &&
            o.push({ left: P, top: $, right: C, bottom: $ + m }),
            c.classList.toggle("cm-tooltip-above", x),
            c.classList.toggle("cm-tooltip-below", !x),
            h.positioned && h.positioned(i.space);
        }
      }
      maybeMeasure() {
        if (
          this.manager.tooltips.length &&
          (this.view.inView && this.view.requestMeasure(this.measureReq),
          this.inView != this.view.inView &&
            ((this.inView = this.view.inView), !this.inView))
        )
          for (let i of this.manager.tooltipViews) i.dom.style.top = hs;
      }
    },
    {
      eventObservers: {
        scroll() {
          this.maybeMeasure();
        },
      },
    }
  ),
  xS = q.baseTheme({
    ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" },
    "&light .cm-tooltip": {
      border: "1px solid #bbb",
      backgroundColor: "#f5f5f5",
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: "1px solid #bbb",
    },
    "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" },
    ".cm-tooltip-arrow": {
      height: "7px",
      width: `${7 * 2}px`,
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
      },
      ".cm-tooltip-above &": {
        bottom: "-7px",
        "&:before": { borderTop: "7px solid #bbb" },
        "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" },
      },
      ".cm-tooltip-below &": {
        top: "-7px",
        "&:before": { borderBottom: "7px solid #bbb" },
        "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" },
      },
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" },
      "&:after": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
      },
    },
  }),
  SS = { x: 0, y: 0 },
  Sc = z.define({ enables: [xc, xS] }),
  Wo = z.define({ combine: (i) => i.reduce((e, t) => e.concat(t), []) });
class wl {
  static create(e) {
    return new wl(e);
  }
  constructor(e) {
    (this.view = e),
      (this.mounted = !1),
      (this.dom = document.createElement("div")),
      this.dom.classList.add("cm-tooltip-hover"),
      (this.manager = new xg(
        e,
        Wo,
        (t, n) => this.createHostedView(t, n),
        (t) => t.dom.remove()
      ));
  }
  createHostedView(e, t) {
    let n = e.create(this.view);
    return (
      n.dom.classList.add("cm-tooltip-section"),
      this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild),
      this.mounted && n.mount && n.mount(this.view),
      n
    );
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let n of this.manager.tooltipViews) {
      let s = n[e];
      if (s !== void 0) {
        if (t === void 0) t = s;
        else if (t !== s) return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const wS = Sc.compute([Wo], (i) => {
  let e = i.facet(Wo);
  return e.length === 0
    ? null
    : {
        pos: Math.min(...e.map((t) => t.pos)),
        end: Math.max(
          ...e.map((t) => {
            var n;
            return (n = t.end) !== null && n !== void 0 ? n : t.pos;
          })
        ),
        create: wl.create,
        above: e[0].above,
        arrow: e.some((t) => t.arrow),
      };
});
class QS {
  constructor(e, t, n, s, r) {
    (this.view = e),
      (this.source = t),
      (this.field = n),
      (this.setHover = s),
      (this.hoverTime = r),
      (this.hoverTimeout = -1),
      (this.restartTimeout = -1),
      (this.pending = null),
      (this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
      (this.checkHover = this.checkHover.bind(this)),
      e.dom.addEventListener(
        "mouseleave",
        (this.mouseleave = this.mouseleave.bind(this))
      ),
      e.dom.addEventListener(
        "mousemove",
        (this.mousemove = this.mousemove.bind(this))
      );
  }
  update() {
    this.pending &&
      ((this.pending = null),
      clearTimeout(this.restartTimeout),
      (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (((this.hoverTimeout = -1), this.active.length)) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime
      ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
      : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this,
      n = e.docView.nearest(t.target);
    if (!n) return;
    let s,
      r = 1;
    if (n instanceof Ei) s = n.posAtStart;
    else {
      if (((s = e.posAtCoords(t)), s == null)) return;
      let l = e.coordsAtPos(s);
      if (
        !l ||
        t.y < l.top ||
        t.y > l.bottom ||
        t.x < l.left - e.defaultCharacterWidth ||
        t.x > l.right + e.defaultCharacterWidth
      )
        return;
      let a = e
          .bidiSpans(e.state.doc.lineAt(s))
          .find((c) => c.from <= s && c.to >= s),
        h = a && a.dir == Se.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = (this.pending = { pos: s });
      o.then(
        (a) => {
          this.pending == l &&
            ((this.pending = null),
            a &&
              !(Array.isArray(a) && !a.length) &&
              e.dispatch({
                effects: this.setHover.of(Array.isArray(a) ? a : [a]),
              }));
        },
        (a) => dt(e.state, a, "hover tooltip")
      );
    } else
      o &&
        !(Array.isArray(o) && !o.length) &&
        e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(xc),
      t = e ? e.manager.tooltips.findIndex((n) => n.create == wl.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, n;
    (this.lastMove = {
      x: e.clientX,
      y: e.clientY,
      target: e.target,
      time: Date.now(),
    }),
      this.hoverTimeout < 0 &&
        (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if ((s.length && r && !PS(r.dom, e)) || this.pending) {
      let { pos: o } = s[0] || this.pending,
        l =
          (n = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null &&
          n !== void 0
            ? n
            : o;
      (o == l
        ? this.view.posAtCoords(this.lastMove) != o
        : !kS(this.view, o, l, e.clientX, e.clientY)) &&
        (this.view.dispatch({ effects: this.setHover.of([]) }),
        (this.pending = null));
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), (this.hoverTimeout = -1);
    let { active: t } = this;
    if (t.length) {
      let { tooltip: n } = this;
      n && n.dom.contains(e.relatedTarget)
        ? this.watchTooltipLeave(n.dom)
        : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (n) => {
      e.removeEventListener("mouseleave", t),
        this.active.length &&
          !this.view.dom.contains(n.relatedTarget) &&
          this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout),
      this.view.dom.removeEventListener("mouseleave", this.mouseleave),
      this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Vr = 4;
function PS(i, e) {
  let t = i.getBoundingClientRect();
  return (
    e.clientX >= t.left - Vr &&
    e.clientX <= t.right + Vr &&
    e.clientY >= t.top - Vr &&
    e.clientY <= t.bottom + Vr
  );
}
function kS(i, e, t, n, s, r) {
  let o = i.scrollDOM.getBoundingClientRect(),
    l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = i.posAtCoords({ x: n, y: s }, !1);
  return a >= e && a <= t;
}
function vS(i, e = {}) {
  let t = ee.define(),
    n = Le.define({
      create() {
        return [];
      },
      update(s, r) {
        if (
          s.length &&
          (e.hideOnChange && (r.docChanged || r.selection)
            ? (s = [])
            : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))),
          r.docChanged)
        ) {
          let o = [];
          for (let l of s) {
            let a = r.changes.mapPos(l.pos, -1, Ie.TrackDel);
            if (a != null) {
              let h = Object.assign(Object.create(null), l);
              (h.pos = a),
                h.end != null && (h.end = r.changes.mapPos(h.end)),
                o.push(h);
            }
          }
          s = o;
        }
        for (let o of r.effects) o.is(t) && (s = o.value), o.is($S) && (s = []);
        return s;
      },
      provide: (s) => Wo.from(s),
    });
  return [n, Me.define((s) => new QS(s, i, n, t, e.hoverTime || 300)), wS];
}
function Sg(i, e) {
  let t = i.plugin(xc);
  if (!t) return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const $S = ee.define(),
  Tu = z.define({
    combine(i) {
      let e, t;
      for (let n of i) (e = e || n.topContainer), (t = t || n.bottomContainer);
      return { topContainer: e, bottomContainer: t };
    },
  });
function Ks(i, e) {
  let t = i.plugin(wg),
    n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const wg = Me.fromClass(
  class {
    constructor(i) {
      (this.input = i.state.facet(Js)),
        (this.specs = this.input.filter((t) => t)),
        (this.panels = this.specs.map((t) => t(i)));
      let e = i.state.facet(Tu);
      (this.top = new qr(i, !0, e.topContainer)),
        (this.bottom = new qr(i, !1, e.bottomContainer)),
        this.top.sync(this.panels.filter((t) => t.top)),
        this.bottom.sync(this.panels.filter((t) => !t.top));
      for (let t of this.panels)
        t.dom.classList.add("cm-panel"), t.mount && t.mount();
    }
    update(i) {
      let e = i.state.facet(Tu);
      this.top.container != e.topContainer &&
        (this.top.sync([]), (this.top = new qr(i.view, !0, e.topContainer))),
        this.bottom.container != e.bottomContainer &&
          (this.bottom.sync([]),
          (this.bottom = new qr(i.view, !1, e.bottomContainer))),
        this.top.syncClasses(),
        this.bottom.syncClasses();
      let t = i.state.facet(Js);
      if (t != this.input) {
        let n = t.filter((a) => a),
          s = [],
          r = [],
          o = [],
          l = [];
        for (let a of n) {
          let h = this.specs.indexOf(a),
            c;
          h < 0
            ? ((c = a(i.view)), l.push(c))
            : ((c = this.panels[h]), c.update && c.update(i)),
            s.push(c),
            (c.top ? r : o).push(c);
        }
        (this.specs = n),
          (this.panels = s),
          this.top.sync(r),
          this.bottom.sync(o);
        for (let a of l) a.dom.classList.add("cm-panel"), a.mount && a.mount();
      } else for (let n of this.panels) n.update && n.update(i);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  },
  {
    provide: (i) =>
      q.scrollMargins.of((e) => {
        let t = e.plugin(i);
        return (
          t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() }
        );
      }),
  }
);
class qr {
  constructor(e, t, n) {
    (this.view = e),
      (this.top = t),
      (this.container = n),
      (this.dom = void 0),
      (this.classes = ""),
      (this.panels = []),
      this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
    (this.panels = e), this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), (this.dom = void 0));
      return;
    }
    if (!this.dom) {
      (this.dom = document.createElement("div")),
        (this.dom.className = this.top
          ? "cm-panels cm-panels-top"
          : "cm-panels cm-panels-bottom"),
        (this.dom.style[this.top ? "top" : "bottom"] = "0");
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; ) e = Au(e);
        e = e.nextSibling;
      } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = Au(e);
  }
  scrollMargin() {
    return !this.dom || this.container
      ? 0
      : Math.max(
          0,
          this.top
            ? this.dom.getBoundingClientRect().bottom -
                Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
            : Math.min(
                innerHeight,
                this.view.scrollDOM.getBoundingClientRect().bottom
              ) - this.dom.getBoundingClientRect().top
        );
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function Au(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const Js = z.define({ enables: wg });
class gi extends On {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
}
gi.prototype.elementClass = "";
gi.prototype.toDOM = void 0;
gi.prototype.mapMode = Ie.TrackBefore;
gi.prototype.startSide = gi.prototype.endSide = -1;
gi.prototype.point = !0;
const uo = z.define(),
  CS = {
    class: "",
    renderEmptyElements: !1,
    elementStyle: "",
    markers: () => ae.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
  },
  Es = z.define();
function ZS(i) {
  return [Qg(), Es.of(Object.assign(Object.assign({}, CS), i))];
}
const Mu = z.define({ combine: (i) => i.some((e) => e) });
function Qg(i) {
  return [RS];
}
const RS = Me.fromClass(
  class {
    constructor(i) {
      (this.view = i),
        (this.prevViewport = i.viewport),
        (this.dom = document.createElement("div")),
        (this.dom.className = "cm-gutters"),
        this.dom.setAttribute("aria-hidden", "true"),
        (this.dom.style.minHeight =
          this.view.contentHeight / this.view.scaleY + "px"),
        (this.gutters = i.state.facet(Es).map((e) => new Eu(i, e)));
      for (let e of this.gutters) this.dom.appendChild(e.dom);
      (this.fixed = !i.state.facet(Mu)),
        this.fixed && (this.dom.style.position = "sticky"),
        this.syncGutters(!1),
        i.scrollDOM.insertBefore(this.dom, i.contentDOM);
    }
    update(i) {
      if (this.updateGutters(i)) {
        let e = this.prevViewport,
          t = i.view.viewport,
          n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
        this.syncGutters(n < (t.to - t.from) * 0.8);
      }
      i.geometryChanged &&
        (this.dom.style.minHeight =
          this.view.contentHeight / this.view.scaleY + "px"),
        this.view.state.facet(Mu) != !this.fixed &&
          ((this.fixed = !this.fixed),
          (this.dom.style.position = this.fixed ? "sticky" : "")),
        (this.prevViewport = i.view.viewport);
    }
    syncGutters(i) {
      let e = this.dom.nextSibling;
      i && this.dom.remove();
      let t = ae.iter(this.view.state.facet(uo), this.view.viewport.from),
        n = [],
        s = this.gutters.map(
          (r) => new TS(r, this.view.viewport, -this.view.documentPadding.top)
        );
      for (let r of this.view.viewportLineBlocks)
        if ((n.length && (n = []), Array.isArray(r.type))) {
          let o = !0;
          for (let l of r.type)
            if (l.type == at.Text && o) {
              xh(t, n, l.from);
              for (let a of s) a.line(this.view, l, n);
              o = !1;
            } else if (l.widget) for (let a of s) a.widget(this.view, l);
        } else if (r.type == at.Text) {
          xh(t, n, r.from);
          for (let o of s) o.line(this.view, r, n);
        } else if (r.widget) for (let o of s) o.widget(this.view, r);
      for (let r of s) r.finish();
      i && this.view.scrollDOM.insertBefore(this.dom, e);
    }
    updateGutters(i) {
      let e = i.startState.facet(Es),
        t = i.state.facet(Es),
        n =
          i.docChanged ||
          i.heightChanged ||
          i.viewportChanged ||
          !ae.eq(
            i.startState.facet(uo),
            i.state.facet(uo),
            i.view.viewport.from,
            i.view.viewport.to
          );
      if (e == t) for (let s of this.gutters) s.update(i) && (n = !0);
      else {
        n = !0;
        let s = [];
        for (let r of t) {
          let o = e.indexOf(r);
          o < 0
            ? s.push(new Eu(this.view, r))
            : (this.gutters[o].update(i), s.push(this.gutters[o]));
        }
        for (let r of this.gutters)
          r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
        for (let r of s) this.dom.appendChild(r.dom);
        this.gutters = s;
      }
      return n;
    }
    destroy() {
      for (let i of this.gutters) i.destroy();
      this.dom.remove();
    }
  },
  {
    provide: (i) =>
      q.scrollMargins.of((e) => {
        let t = e.plugin(i);
        return !t || t.gutters.length == 0 || !t.fixed
          ? null
          : e.textDirection == Se.LTR
          ? { left: t.dom.offsetWidth * e.scaleX }
          : { right: t.dom.offsetWidth * e.scaleX };
      }),
  }
);
function _u(i) {
  return Array.isArray(i) ? i : [i];
}
function xh(i, e, t) {
  for (; i.value && i.from <= t; ) i.from == t && e.push(i.value), i.next();
}
class TS {
  constructor(e, t, n) {
    (this.gutter = e),
      (this.height = n),
      (this.i = 0),
      (this.cursor = ae.iter(e.markers, t.from));
  }
  addElement(e, t, n) {
    let { gutter: s } = this,
      r = (t.top - this.height) / e.scaleY,
      o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Pg(e, o, r, n);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else s.elements[this.i].update(e, o, r, n);
    (this.height = t.bottom), this.i++;
  }
  line(e, t, n) {
    let s = [];
    xh(this.cursor, s, t.from), n.length && (s = s.concat(n));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    (s.length == 0 && !o.config.renderEmptyElements) ||
      this.addElement(e, t, s);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t);
    n && this.addElement(e, t, [n]);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Eu {
  constructor(e, t) {
    (this.view = e),
      (this.config = t),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement("div")),
      (this.dom.className =
        "cm-gutter" + (this.config.class ? " " + this.config.class : ""));
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (s) => {
        let r = s.target,
          o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; ) r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, s) && s.preventDefault();
      });
    (this.markers = _u(t.markers(e))),
      t.initialSpacer &&
        ((this.spacer = new Pg(e, 0, 0, [t.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText +=
          "visibility: hidden; pointer-events: none"));
  }
  update(e) {
    let t = this.markers;
    if (
      ((this.markers = _u(this.config.markers(e.view))),
      this.spacer && this.config.updateSpacer)
    ) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let n = e.view.viewport;
    return (
      !ae.eq(this.markers, t, n.from, n.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    );
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class Pg {
  constructor(e, t, n, s) {
    (this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement("div")),
      (this.dom.className = "cm-gutterElement"),
      this.update(e, t, n, s);
  }
  update(e, t, n, s) {
    this.height != t && ((this.height = t), (this.dom.style.height = t + "px")),
      this.above != n &&
        (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""),
      AS(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement",
      s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o,
        a = r < t.length ? t[r++] : null,
        h = !1;
      if (a) {
        let c = a.elementClass;
        c && (n += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            (l = f), (h = !0);
            break;
          }
      } else l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), (s = f);
        }
      }
      if (!a) break;
      a.toDOM &&
        (h ? (s = s.nextSibling) : this.dom.insertBefore(a.toDOM(e), s)),
        h && o++;
    }
    (this.dom.className = n), (this.markers = t);
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function AS(i, e) {
  if (i.length != e.length) return !1;
  for (let t = 0; t < i.length; t++) if (!i[t].compare(e[t])) return !1;
  return !0;
}
const MS = z.define(),
  $n = z.define({
    combine(i) {
      return ri(
        i,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, t) {
            let n = Object.assign({}, e);
            for (let s in t) {
              let r = n[s],
                o = t[s];
              n[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
            }
            return n;
          },
        }
      );
    },
  });
class sa extends gi {
  constructor(e) {
    super(), (this.number = e);
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ra(i, e) {
  return i.state.facet($n).formatNumber(e, i.state);
}
const _S = Es.compute([$n], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(MS);
  },
  lineMarker(e, t, n) {
    return n.some((s) => s.toDOM)
      ? null
      : new sa(ra(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet($n) != e.state.facet($n),
  initialSpacer(e) {
    return new sa(ra(e, Wu(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = ra(t.view, Wu(t.view.state.doc.lines));
    return n == e.number ? e : new sa(n);
  },
  domEventHandlers: i.facet($n).domEventHandlers,
}));
function S$(i = {}) {
  return [$n.of(i), Qg(), _S];
}
function Wu(i) {
  let e = 9;
  for (; e < i; ) e = e * 10 + 9;
  return e;
}
const ES = new (class extends gi {
    constructor() {
      super(...arguments), (this.elementClass = "cm-activeLineGutter");
    }
  })(),
  WS = uo.compute(["selection"], (i) => {
    let e = [],
      t = -1;
    for (let n of i.selection.ranges) {
      let s = i.doc.lineAt(n.head).from;
      s > t && ((t = s), e.push(ES.range(s)));
    }
    return ae.of(e);
  });
function w$() {
  return WS;
}