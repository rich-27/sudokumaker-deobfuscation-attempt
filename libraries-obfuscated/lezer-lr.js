var ld = {};
class Io {
  constructor(e, t, n, s, r, o, l, a, h, c = 0, f) {
    (this.p = e),
      (this.stack = t),
      (this.state = n),
      (this.reducePos = s),
      (this.pos = r),
      (this.score = o),
      (this.buffer = l),
      (this.bufferBase = a),
      (this.curContext = h),
      (this.lookAhead = c),
      (this.parent = f);
  }
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${
      this.pos
    }${this.score ? "!" + this.score : ""}`;
  }
  static start(e, t, n = 0) {
    let s = e.parser.context;
    return new Io(
      e,
      [],
      t,
      n,
      n,
      0,
      [],
      0,
      s ? new ad(s, s.start) : null,
      0,
      null
    );
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length),
      (this.state = e);
  }
  reduce(e) {
    var t;
    let n = e >> 19,
      s = e & 65535,
      { parser: r } = this.p;
    this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
    let o = r.dynamicPrecedence(s);
    if ((o && (this.score += o), n == 0)) {
      this.pushState(r.getGoto(this.state, s, !0), this.reducePos),
        s < r.minRepeatTerm &&
          this.storeNode(s, this.reducePos, this.reducePos, 4, !0),
        this.reduceContext(s, this.reducePos);
      return;
    }
    let l = this.stack.length - (n - 1) * 3 - (e & 262144 ? 6 : 0),
      a = l ? this.stack[l - 2] : this.p.ranges[0].from,
      h = this.reducePos - a;
    h >= 2e3 &&
      !(
        !((t = this.p.parser.nodeSet.types[s]) === null || t === void 0) &&
        t.isAnonymous
      ) &&
      (a == this.p.lastBigReductionStart
        ? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = h))
        : this.p.lastBigReductionSize < h &&
          ((this.p.bigReductionCount = 1),
          (this.p.lastBigReductionStart = a),
          (this.p.lastBigReductionSize = h)));
    let c = l ? this.stack[l - 1] : 0,
      f = this.bufferBase + this.buffer.length - c;
    if (s < r.minRepeatTerm || e & 131072) {
      let u = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(s, a, u, f + 4, !0);
    }
    if (e & 262144) this.state = this.stack[l];
    else {
      let u = this.stack[l - 3];
      this.state = r.getGoto(u, s, !0);
    }
    for (; this.stack.length > l; ) this.stack.pop();
    this.reduceContext(s, a);
  }
  storeNode(e, t, n, s = 4, r = !1) {
    if (
      e == 0 &&
      (!this.stack.length ||
        this.stack[this.stack.length - 1] <
          this.buffer.length + this.bufferBase)
    ) {
      let o = this,
        l = this.buffer.length;
      if (
        (l == 0 &&
          o.parent &&
          ((l = o.bufferBase - o.parent.bufferBase), (o = o.parent)),
        l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1)
      ) {
        if (t == n) return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = n;
          return;
        }
      }
    }
    if (!r || this.pos == n) this.buffer.push(e, t, n, s);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0)
        for (; o > 0 && this.buffer[o - 2] > n; )
          (this.buffer[o] = this.buffer[o - 4]),
            (this.buffer[o + 1] = this.buffer[o - 3]),
            (this.buffer[o + 2] = this.buffer[o - 2]),
            (this.buffer[o + 3] = this.buffer[o - 1]),
            (o -= 4),
            s > 4 && (s -= 4);
      (this.buffer[o] = e),
        (this.buffer[o + 1] = t),
        (this.buffer[o + 2] = n),
        (this.buffer[o + 3] = s);
    }
  }
  shift(e, t, n, s) {
    if (e & 131072) this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      (this.pos = s),
        this.shiftContext(t, n),
        t <= this.p.parser.maxNode && this.buffer.push(t, n, s, 4);
    else {
      let r = e,
        { parser: o } = this.p;
      (s > this.pos || t <= o.maxNode) &&
        ((this.pos = s), o.stateFlag(r, 1) || (this.reducePos = s)),
        this.pushState(r, n),
        this.shiftContext(t, n),
        t <= o.maxNode && this.buffer.push(t, n, s, 4);
    }
  }
  apply(e, t, n, s) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n, s);
  }
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let s = this.pos;
    (this.reducePos = this.pos = s + e.length),
      this.pushState(t, s),
      this.buffer.push(n, s, this.reducePos, -1),
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.reuse(
            this.curContext.context,
            e,
            this,
            this.p.stream.reset(this.pos - e.length)
          )
        );
  }
  split() {
    let e = this,
      t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4;
    let n = e.buffer.slice(t),
      s = e.bufferBase + t;
    for (; e && s == e.bufferBase; ) e = e.parent;
    return new Io(
      this.p,
      this.stack.slice(),
      this.state,
      this.reducePos,
      this.pos,
      this.score,
      n,
      s,
      this.curContext,
      this.lookAhead,
      e
    );
  }
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4),
      this.storeNode(0, this.pos, t, n ? 8 : 4),
      (this.pos = this.reducePos = t),
      (this.score -= 190);
  }
  canShift(e) {
    for (let t = new AP(this); ; ) {
      let n =
        this.p.parser.stateSlot(t.state, 4) ||
        this.p.parser.hasAction(t.state, e);
      if (n == 0) return !1;
      if (!(n & 65536)) return !0;
      t.reduce(n);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < t.length; r += 2)
        (o = t[r + 1]) != this.state &&
          this.p.parser.hasAction(o, e) &&
          s.push(t[r], o);
      if (this.stack.length < 120)
        for (let r = 0; s.length < 8 && r < t.length; r += 2) {
          let o = t[r + 1];
          s.some((l, a) => a & 1 && l == o) || s.push(t[r], o);
        }
      t = s;
    }
    let n = [];
    for (let s = 0; s < t.length && n.length < 4; s += 2) {
      let r = t[s + 1];
      if (r == this.state) continue;
      let o = this.split();
      o.pushState(r, this.pos),
        o.storeNode(0, o.pos, o.pos, 4, !0),
        o.shiftContext(t[s], this.pos),
        (o.reducePos = this.pos),
        (o.score -= 200),
        n.push(o);
    }
    return n;
  }
  forceReduce() {
    let { parser: e } = this.p,
      t = e.stateSlot(this.state, 5);
    if (!(t & 65536)) return !1;
    if (!e.validAction(this.state, t)) {
      let n = t >> 19,
        s = t & 65535,
        r = this.stack.length - n * 3;
      if (r < 0 || e.getGoto(this.stack[r], s, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null) return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), (this.score -= 100);
    }
    return (this.reducePos = this.pos), this.reduce(t), !0;
  }
  findForcedReduction() {
    let { parser: e } = this.p,
      t = [],
      n = (s, r) => {
        if (!t.includes(s))
          return (
            t.push(s),
            e.allActions(s, (o) => {
              if (!(o & 393216))
                if (o & 65536) {
                  let l = (o >> 19) - r;
                  if (l > 1) {
                    let a = o & 65535,
                      h = this.stack.length - l * 3;
                    if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                      return (l << 19) | 65536 | a;
                  }
                } else {
                  let l = n(o, r + 1);
                  if (l != null) return l;
                }
            })
          );
      };
    return n(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) return !1;
    let { parser: e } = this.p;
    return (
      e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4)
    );
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0),
      (this.state = this.stack[0]),
      (this.stack.length = 0);
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t]) return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.shift(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(t)
        )
      );
  }
  reduceContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.reduce(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(t)
        )
      );
  }
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) &&
      this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) &&
      this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new ad(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(),
        (this.curContext = t);
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e));
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(),
      this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ad {
  constructor(e, t) {
    (this.tracker = e),
      (this.context = t),
      (this.hash = e.strict ? e.hash(t) : 0);
  }
}
class AP {
  constructor(e) {
    (this.start = e),
      (this.state = e.state),
      (this.stack = e.stack),
      (this.base = this.stack.length);
  }
  reduce(e) {
    let t = e & 65535,
      n = e >> 19;
    n == 0
      ? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
        this.stack.push(this.state, 0, 0),
        (this.base += 3))
      : (this.base -= (n - 1) * 3);
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = s;
  }
}
class No {
  constructor(e, t, n) {
    (this.stack = e),
      (this.pos = t),
      (this.index = n),
      (this.buffer = e.buffer),
      this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new No(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null &&
      ((this.index = this.stack.bufferBase - e.bufferBase),
      (this.stack = e),
      (this.buffer = e.buffer));
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    (this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext();
  }
  fork() {
    return new No(this.stack, this.pos, this.index);
  }
}
function Ss(i, e = Uint16Array) {
  if (typeof i != "string") return i;
  let t = null;
  for (let n = 0, s = 0; n < i.length; ) {
    let r = 0;
    for (;;) {
      let o = i.charCodeAt(n++),
        l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if ((a >= 46 && ((a -= 46), (l = !0)), (r += a), l)) break;
      r *= 46;
    }
    t ? (t[s++] = r) : (t = new e(r));
  }
  return t;
}
class po {
  constructor() {
    (this.start = -1),
      (this.value = -1),
      (this.end = -1),
      (this.extended = -1),
      (this.lookAhead = 0),
      (this.mask = 0),
      (this.context = 0);
  }
}
const hd = new po();
class MP {
  constructor(e, t) {
    (this.input = e),
      (this.ranges = t),
      (this.chunk = ""),
      (this.chunkOff = 0),
      (this.chunk2 = ""),
      (this.chunk2Pos = 0),
      (this.next = -1),
      (this.token = hd),
      (this.rangeIndex = 0),
      (this.pos = this.chunkPos = t[0].from),
      (this.range = t[0]),
      (this.end = t[t.length - 1].to),
      this.readNext();
  }
  resolveOffset(e, t) {
    let n = this.range,
      s = this.rangeIndex,
      r = this.pos + e;
    for (; r < n.from; ) {
      if (!s) return null;
      let o = this.ranges[--s];
      (r -= n.from - o.to), (n = o);
    }
    for (; t < 0 ? r > n.to : r >= n.to; ) {
      if (s == this.ranges.length - 1) return null;
      let o = this.ranges[++s];
      (r += o.from - n.to), (n = o);
    }
    return r;
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to) return e;
    for (let t of this.ranges) if (t.to > e) return Math.max(e, t.from);
    return this.end;
  }
  peek(e) {
    let t = this.chunkOff + e,
      n,
      s;
    if (t >= 0 && t < this.chunk.length)
      (n = this.pos + e), (s = this.chunk.charCodeAt(t));
    else {
      let r = this.resolveOffset(e, 1);
      if (r == null) return -1;
      if (
        ((n = r),
        n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
      )
        s = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex,
          l = this.range;
        for (; l.to <= n; ) l = this.ranges[++o];
        (this.chunk2 = this.input.chunk((this.chunk2Pos = n))),
          n + this.chunk2.length > l.to &&
            (this.chunk2 = this.chunk2.slice(0, l.to - n)),
          (s = this.chunk2.charCodeAt(0));
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), s;
  }
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    (this.token.value = e), (this.token.end = n);
  }
  acceptTokenTo(e, t) {
    (this.token.value = e), (this.token.end = t);
  }
  getChunk() {
    if (
      this.pos >= this.chunk2Pos &&
      this.pos < this.chunk2Pos + this.chunk2.length
    ) {
      let { chunk: e, chunkPos: t } = this;
      (this.chunk = this.chunk2),
        (this.chunkPos = this.chunk2Pos),
        (this.chunk2 = e),
        (this.chunk2Pos = t),
        (this.chunkOff = this.pos - this.chunkPos);
    } else {
      (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
      let e = this.input.chunk(this.pos),
        t = this.pos + e.length;
      (this.chunk =
        t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
        (this.chunkPos = this.pos),
        (this.chunkOff = 0);
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length &&
      (this.getChunk(), this.chunkOff == this.chunk.length)
      ? (this.next = -1)
      : (this.next = this.chunk.charCodeAt(this.chunkOff));
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      (e -= this.range.to - this.pos),
        (this.range = this.ranges[++this.rangeIndex]),
        (this.pos = this.range.from);
    }
    return (
      (this.pos += e),
      this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1),
      this.readNext()
    );
  }
  setDone() {
    return (
      (this.pos = this.chunkPos = this.end),
      (this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
      (this.chunk = ""),
      (this.next = -1)
    );
  }
  reset(e, t) {
    if (
      (t
        ? ((this.token = t),
          (t.start = e),
          (t.lookAhead = e + 1),
          (t.value = t.extended = -1))
        : (this.token = hd),
      this.pos != e)
    ) {
      if (((this.pos = e), e == this.end)) return this.setDone(), this;
      for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length
        ? (this.chunkOff = e - this.chunkPos)
        : ((this.chunk = ""), (this.chunkOff = 0)),
        this.readNext();
    }
    return this;
  }
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = "";
    for (let s of this.ranges) {
      if (s.from >= t) break;
      s.to > e &&
        (n += this.input.read(Math.max(s.from, e), Math.min(s.to, t)));
    }
    return n;
  }
}
class jn {
  constructor(e, t) {
    (this.data = e), (this.id = t);
  }
  token(e, t) {
    let { parser: n } = t.p;
    Mm(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
jn.prototype.contextual = jn.prototype.fallback = jn.prototype.extend = !1;
class Rh {
  constructor(e, t, n) {
    (this.precTable = t),
      (this.elseToken = n),
      (this.data = typeof e == "string" ? Ss(e) : e);
  }
  token(e, t) {
    let n = e.pos,
      s = 0;
    for (;;) {
      let r = e.next < 0,
        o = e.resolveOffset(1, 1);
      if (
        (Mm(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
      )
        break;
      if (this.elseToken == null) return;
      if ((r || s++, o == null)) break;
      e.reset(o, e.token);
    }
    s && (e.reset(n, e.token), e.acceptToken(this.elseToken, s));
  }
}
Rh.prototype.contextual = jn.prototype.fallback = jn.prototype.extend = !1;
class Al {
  constructor(e, t = {}) {
    (this.token = e),
      (this.contextual = !!t.contextual),
      (this.fallback = !!t.fallback),
      (this.extend = !!t.extend);
  }
}
function Mm(i, e, t, n, s, r) {
  let o = 0,
    l = 1 << n,
    { dialect: a } = t.p.parser;
  e: for (; l & i[o]; ) {
    let h = i[o + 1];
    for (let d = o + 3; d < h; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (
          a.allows(p) &&
          (e.token.value == -1 ||
            e.token.value == p ||
            _P(p, e.token.value, s, r))
        ) {
          e.acceptToken(p);
          break;
        }
      }
    let c = e.next,
      f = 0,
      u = i[o + 2];
    if (e.next < 0 && u > f && i[h + u * 3 - 3] == 65535) {
      o = i[h + u * 3 - 1];
      continue e;
    }
    for (; f < u; ) {
      let d = (f + u) >> 1,
        p = h + d + (d << 1),
        O = i[p],
        m = i[p + 1] || 65536;
      if (c < O) u = d;
      else if (c >= m) f = d + 1;
      else {
        (o = i[p + 2]), e.advance();
        continue e;
      }
    }
    break;
  }
}
function cd(i, e, t) {
  for (let n = e, s; (s = i[n]) != 65535; n++) if (s == t) return n - e;
  return -1;
}
function _P(i, e, t, n) {
  let s = cd(t, n, e);
  return s < 0 || cd(t, n, i) < s;
}
const xt = typeof process < "u" && ld && /\bparse\b/.test(ld.LOG);
let Oa = null;
function fd(i, e, t) {
  let n = i.cursor(De.IncludeAnonymous);
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (;;) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0
            ? Math.max(0, Math.min(n.to - 1, e - 25))
            : Math.min(i.length, Math.max(n.from + 1, e + 25));
        if (t < 0 ? n.prevSibling() : n.nextSibling()) break;
        if (!n.parent()) return t < 0 ? 0 : i.length;
      }
}
class EP {
  constructor(e, t) {
    (this.fragments = e),
      (this.nodeSet = t),
      (this.i = 0),
      (this.fragment = null),
      (this.safeFrom = -1),
      (this.safeTo = -1),
      (this.trees = []),
      (this.start = []),
      (this.index = []),
      this.nextFragment();
  }
  nextFragment() {
    let e = (this.fragment =
      this.i == this.fragments.length ? null : this.fragments[this.i++]);
    if (e) {
      for (
        this.safeFrom = e.openStart
          ? fd(e.tree, e.from + e.offset, 1) - e.offset
          : e.from,
          this.safeTo = e.openEnd
            ? fd(e.tree, e.to + e.offset, -1) - e.offset
            : e.to;
        this.trees.length;

      )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree),
        this.start.push(-e.offset),
        this.index.push(0),
        (this.nextStart = this.safeFrom);
    } else this.nextStart = 1e9;
  }
  nodeAt(e) {
    if (e < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e; ) this.nextFragment();
    if (!this.fragment) return null;
    for (;;) {
      let t = this.trees.length - 1;
      if (t < 0) return this.nextFragment(), null;
      let n = this.trees[t],
        s = this.index[t];
      if (s == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = n.children[s],
        o = this.start[t] + n.positions[s];
      if (o > e) return (this.nextStart = o), null;
      if (r instanceof Te) {
        if (o == e) {
          if (o < this.safeFrom) return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(ne.lookAhead);
            if (!a || l + a < this.fragment.to) return r;
          }
        }
        this.index[t]++,
          o + r.length >= Math.max(this.safeFrom, e) &&
            (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else this.index[t]++, (this.nextStart = o + r.length);
    }
  }
}
class WP {
  constructor(e, t) {
    (this.stream = t),
      (this.tokens = []),
      (this.mainToken = null),
      (this.actions = []),
      (this.tokens = e.tokenizers.map((n) => new po()));
  }
  getActions(e) {
    let t = 0,
      n = null,
      { parser: s } = e.p,
      { tokenizers: r } = s,
      o = s.stateSlot(e.state, 3),
      l = e.curContext ? e.curContext.hash : 0,
      a = 0;
    for (let h = 0; h < r.length; h++) {
      if (!((1 << h) & o)) continue;
      let c = r[h],
        f = this.tokens[h];
      if (
        !(n && !c.fallback) &&
        ((c.contextual || f.start != e.pos || f.mask != o || f.context != l) &&
          (this.updateCachedToken(f, c, e), (f.mask = o), (f.context = l)),
        f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)),
        f.value != 0)
      ) {
        let u = t;
        if (
          (f.extended > -1 && (t = this.addActions(e, f.extended, f.end, t)),
          (t = this.addActions(e, f.value, f.end, t)),
          !c.extend && ((n = f), t > u))
        )
          break;
      }
    }
    for (; this.actions.length > t; ) this.actions.pop();
    return (
      a && e.setLookAhead(a),
      !n &&
        e.pos == this.stream.end &&
        ((n = new po()),
        (n.value = e.p.parser.eofTerm),
        (n.start = n.end = e.pos),
        (t = this.addActions(e, n.value, n.end, t))),
      (this.mainToken = n),
      this.actions
    );
  }
  getMainToken(e) {
    if (this.mainToken) return this.mainToken;
    let t = new po(),
      { pos: n, p: s } = e;
    return (
      (t.start = n),
      (t.end = Math.min(n + 1, s.stream.end)),
      (t.value = n == s.stream.end ? s.parser.eofTerm : 0),
      t
    );
  }
  updateCachedToken(e, t, n) {
    let s = this.stream.clipPos(n.pos);
    if ((t.token(this.stream.reset(s, e), n), e.value > -1)) {
      let { parser: r } = n.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? (e.extended = l >> 1) : (e.value = l >> 1);
            break;
          }
        }
    } else (e.value = 0), (e.end = this.stream.clipPos(s + 1));
  }
  putAction(e, t, n, s) {
    for (let r = 0; r < s; r += 3) if (this.actions[r] == e) return s;
    return (
      (this.actions[s++] = e),
      (this.actions[s++] = t),
      (this.actions[s++] = n),
      s
    );
  }
  addActions(e, t, n, s) {
    let { state: r } = e,
      { parser: o } = e.p,
      { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(r, a ? 2 : 1); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1) h = hi(l, h + 2);
          else {
            s == 0 &&
              l[h + 1] == 2 &&
              (s = this.putAction(hi(l, h + 2), t, n, s));
            break;
          }
        l[h] == t && (s = this.putAction(hi(l, h + 1), t, n, s));
      }
    return s;
  }
}
class XP {
  constructor(e, t, n, s) {
    (this.parser = e),
      (this.input = t),
      (this.ranges = s),
      (this.recovering = 0),
      (this.nextStackID = 9812),
      (this.minStackPos = 0),
      (this.reused = []),
      (this.stoppedAt = null),
      (this.lastBigReductionStart = -1),
      (this.lastBigReductionSize = 0),
      (this.bigReductionCount = 0),
      (this.stream = new MP(t, s)),
      (this.tokens = new WP(e, this.stream)),
      (this.topTerm = e.top[1]);
    let { from: r } = s[0];
    (this.stacks = [Io.start(this, e.top[0], r)]),
      (this.fragments =
        n.length && this.stream.end - r > e.bufferLength * 4
          ? new EP(n, e.nodeSet)
          : null);
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e = this.stacks,
      t = this.minStackPos,
      n = (this.stacks = []),
      s,
      r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (
        ;
        o.forceReduce() &&
        o.stack.length &&
        o.stack[o.stack.length - 2] >= this.lastBigReductionStart;

      );
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (;;) {
        if (((this.tokens.mainToken = null), l.pos > t)) n.push(l);
        else {
          if (this.advanceStack(l, n, e)) continue;
          {
            s || ((s = []), (r = [])), s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = s && jP(s);
      if (o)
        return (
          xt && console.log("Finish with " + this.stackID(o)),
          this.stackToTree(o)
        );
      if (this.parser.strict)
        throw (
          (xt &&
            s &&
            console.log(
              "Stuck with token " +
                (this.tokens.mainToken
                  ? this.parser.getName(this.tokens.mainToken.value)
                  : "none")
            ),
          new SyntaxError("No parse at " + t))
        );
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o =
        this.stoppedAt != null && s[0].pos > this.stoppedAt
          ? s[0]
          : this.runRecovery(s, r, n);
      if (o)
        return (
          xt && console.log("Force-finish " + this.stackID(o)),
          this.stackToTree(o.forceAll())
        );
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; ) n.pop();
      n.some((l) => l.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e: for (let o = 0; o < n.length - 1; o++) {
        let l = n[o];
        for (let a = o + 1; a < n.length; a++) {
          let h = n[a];
          if (
            l.sameState(h) ||
            (l.buffer.length > 500 && h.buffer.length > 500)
          )
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              n.splice(a--, 1);
            else {
              n.splice(o--, 1);
              continue e;
            }
        }
      }
      n.length > 12 && n.splice(12, n.length - 12);
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  advanceStack(e, t, n) {
    let s = e.pos,
      { parser: r } = this,
      o = xt ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict,
        c = h ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f; ) {
        let u =
          this.parser.nodeSet.types[f.type.id] == f.type
            ? r.getGoto(e.state, f.type.id)
            : -1;
        if (u > -1 && f.length && (!h || (f.prop(ne.contextHash) || 0) == c))
          return (
            e.useNode(f, u),
            xt &&
              console.log(
                o + this.stackID(e) + ` (via reuse of ${r.getName(f.type.id)})`
              ),
            !0
          );
        if (!(f instanceof Te) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof Te && f.positions[0] == 0) f = d;
        else break;
      }
    }
    let l = r.stateSlot(e.state, 4);
    if (l > 0)
      return (
        e.reduce(l),
        xt &&
          console.log(
            o + this.stackID(e) + ` (via always-reduce ${r.getName(l & 65535)})`
          ),
        !0
      );
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); );
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let c = a[h++],
        f = a[h++],
        u = a[h++],
        d = h == a.length || !n,
        p = d ? e : e.split(),
        O = this.tokens.mainToken;
      if (
        (p.apply(c, f, O ? O.start : p.pos, u),
        xt &&
          console.log(
            o +
              this.stackID(p) +
              ` (via ${
                c & 65536 ? `reduce of ${r.getName(c & 65535)}` : "shift"
              } for ${r.getName(f)} @ ${s}${p == e ? "" : ", split"})`
          ),
        d)
      )
        return !0;
      p.pos > s ? t.push(p) : n.push(p);
    }
    return !1;
  }
  advanceFully(e, t) {
    let n = e.pos;
    for (;;) {
      if (!this.advanceStack(e, null, null)) return !1;
      if (e.pos > n) return ud(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let s = null,
      r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = t[o << 1],
        h = t[(o << 1) + 1],
        c = xt ? this.stackID(l) + " -> " : "";
      if (
        l.deadEnd &&
        (r ||
          ((r = !0),
          l.restart(),
          xt && console.log(c + this.stackID(l) + " (restarted)"),
          this.advanceFully(l, n)))
      )
        continue;
      let f = l.split(),
        u = c;
      for (
        let d = 0;
        f.forceReduce() &&
        d < 10 &&
        (xt && console.log(u + this.stackID(f) + " (via force-reduce)"),
        !this.advanceFully(f, n));
        d++
      )
        xt && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        xt && console.log(c + this.stackID(d) + " (via recover-insert)"),
          this.advanceFully(d, n);
      this.stream.end > l.pos
        ? (h == l.pos && (h++, (a = 0)),
          l.recoverByDelete(a, h),
          xt &&
            console.log(
              c +
                this.stackID(l) +
                ` (via recover-delete ${this.parser.getName(a)})`
            ),
          ud(l, n))
        : (!s || s.score < l.score) && (s = l);
    }
    return s;
  }
  stackToTree(e) {
    return (
      e.close(),
      Te.build({
        buffer: No.create(e),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: e.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm,
      })
    );
  }
  stackID(e) {
    let t = (Oa || (Oa = new WeakMap())).get(e);
    return (
      t || Oa.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e
    );
  }
}
function ud(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class DP {
  constructor(e, t, n) {
    (this.source = e), (this.flags = t), (this.disabled = n);
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const ga = (i) => i;
class YP {
  constructor(e) {
    (this.start = e.start),
      (this.shift = e.shift || ga),
      (this.reduce = e.reduce || ga),
      (this.reuse = e.reuse || ga),
      (this.hash = e.hash || (() => 0)),
      (this.strict = e.strict !== !1);
  }
}
class rr extends Hp {
  constructor(e) {
    if ((super(), (this.wrappers = []), e.version != 14))
      throw new RangeError(
        `Parser version (${e.version}) doesn't match runtime version (14)`
      );
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++) t.push("");
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]),
      s = [];
    for (let l = 0; l < t.length; l++) s.push([]);
    function r(l, a, h) {
      s[l].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = ne[a]);
        for (let h = 1; h < l.length; ) {
          let c = l[h++];
          if (c >= 0) r(c, a, l[h++]);
          else {
            let f = l[h + -c];
            for (let u = -c; u > 0; u--) r(l[h++], a, f);
            h++;
          }
        }
      }
    (this.nodeSet = new sc(
      t.map((l, a) =>
        gt.define({
          name: a >= this.minRepeatTerm ? void 0 : l,
          id: a,
          props: s[a],
          top: n.indexOf(a) > -1,
          error: a == 0,
          skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1,
        })
      )
    )),
      e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)),
      (this.strict = !1),
      (this.bufferLength = Np);
    let o = Ss(e.tokenData);
    (this.context = e.context),
      (this.specializerSpecs = e.specialized || []),
      (this.specialized = new Uint16Array(this.specializerSpecs.length));
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    (this.specializers = this.specializerSpecs.map(dd)),
      (this.states = Ss(e.states, Uint32Array)),
      (this.data = Ss(e.stateData)),
      (this.goto = Ss(e.goto)),
      (this.maxTerm = e.maxTerm),
      (this.tokenizers = e.tokenizers.map((l) =>
        typeof l == "number" ? new jn(o, l) : l
      )),
      (this.topRules = e.topRules),
      (this.dialects = e.dialects || {}),
      (this.dynamicPrecedences = e.dynamicPrecedences || null),
      (this.tokenPrecTable = e.tokenPrec),
      (this.termNames = e.termNames || null),
      (this.maxNode = this.nodeSet.types.length - 1),
      (this.dialect = this.parseDialect()),
      (this.top = this.topRules[Object.keys(this.topRules)[0]]);
  }
  createParse(e, t, n) {
    let s = new XP(this, e, t, n);
    for (let r of this.wrappers) s = r(s, e, t, n);
    return s;
  }
  getGoto(e, t, n = !1) {
    let s = this.goto;
    if (t >= s[0]) return -1;
    for (let r = s[t + 1]; ; ) {
      let o = s[r++],
        l = o & 1,
        a = s[r++];
      if (l && n) return a;
      for (let h = r + (o >> 1); r < h; r++) if (s[r] == e) return a;
      if (l) return -1;
    }
  }
  hasAction(e, t) {
    let n = this.data;
    for (let s = 0; s < 2; s++)
      for (let r = this.stateSlot(e, s ? 2 : 1), o; ; r += 3) {
        if ((o = n[r]) == 65535)
          if (n[r + 1] == 1) o = n[(r = hi(n, r + 2))];
          else {
            if (n[r + 1] == 2) return hi(n, r + 2);
            break;
          }
        if (o == t || o == 0) return hi(n, r + 1);
      }
    return 0;
  }
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  stateFlag(e, t) {
    return (this.stateSlot(e, 0) & t) > 0;
  }
  validAction(e, t) {
    return !!this.allActions(e, (n) => (n == t ? !0 : null));
  }
  allActions(e, t) {
    let n = this.stateSlot(e, 4),
      s = n ? t(n) : void 0;
    for (let r = this.stateSlot(e, 1); s == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1) r = hi(this.data, r + 2);
        else break;
      s = t(hi(this.data, r + 1));
    }
    return s;
  }
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(e, 1); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1) n = hi(this.data, n + 2);
        else break;
      if (!(this.data[n + 2] & 1)) {
        let s = this.data[n + 1];
        t.some((r, o) => o & 1 && r == s) || t.push(this.data[n], s);
      }
    }
    return t;
  }
  configure(e) {
    let t = Object.assign(Object.create(rr.prototype), this);
    if ((e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
      let n = this.topRules[e.top];
      if (!n) throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return (
      e.tokenizers &&
        (t.tokenizers = this.tokenizers.map((n) => {
          let s = e.tokenizers.find((r) => r.from == n);
          return s ? s.to : n;
        })),
      e.specializers &&
        ((t.specializers = this.specializers.slice()),
        (t.specializerSpecs = this.specializerSpecs.map((n, s) => {
          let r = e.specializers.find((l) => l.from == n.external);
          if (!r) return n;
          let o = Object.assign(Object.assign({}, n), { external: r.to });
          return (t.specializers[s] = dd(o)), o;
        }))),
      e.contextTracker && (t.context = e.contextTracker),
      e.dialect && (t.dialect = this.parseDialect(e.dialect)),
      e.strict != null && (t.strict = e.strict),
      e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
      e.bufferLength != null && (t.bufferLength = e.bufferLength),
      t
    );
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e) {
    return this.termNames
      ? this.termNames[e]
      : String((e <= this.maxNode && this.nodeSet.types[e].name) || e);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  parseDialect(e) {
    let t = Object.keys(this.dialects),
      n = t.map(() => !1);
    if (e)
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        o >= 0 && (n[o] = !0);
      }
    let s = null;
    for (let r = 0; r < t.length; r++)
      if (!n[r])
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new DP(e, n, s);
  }
  static deserialize(e) {
    return new rr(e);
  }
}
function hi(i, e) {
  return i[e] | (i[e + 1] << 16);
}
function jP(i) {
  let e = null;
  for (let t of i) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || (n != null && t.pos > n)) &&
      t.p.parser.stateFlag(t.state, 2) &&
      (!e || e.score < t.score) &&
      (e = t);
  }
  return e;
}
function dd(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => (i.external(t, n) << 1) | e;
  }
  return i.get;
}