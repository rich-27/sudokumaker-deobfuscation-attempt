class We {
  constructor() {
    (this._dataLength = 0),
      (this._bufferLength = 0),
      (this._state = new Int32Array(4)),
      (this._buffer = new ArrayBuffer(68)),
      (this._buffer8 = new Uint8Array(this._buffer, 0, 68)),
      (this._buffer32 = new Uint32Array(this._buffer, 0, 17)),
      this.start();
  }
  static hashStr(e, t = !1) {
    return this.onePassHasher.start().appendStr(e).end(t);
  }
  static hashAsciiStr(e, t = !1) {
    return this.onePassHasher.start().appendAsciiStr(e).end(t);
  }
  static _hex(e) {
    const t = We.hexChars,
      n = We.hexOut;
    let s, r, o, l;
    for (l = 0; l < 4; l += 1)
      for (r = l * 8, s = e[l], o = 0; o < 8; o += 2)
        (n[r + 1 + o] = t.charAt(s & 15)),
          (s >>>= 4),
          (n[r + 0 + o] = t.charAt(s & 15)),
          (s >>>= 4);
    return n.join("");
  }
  static _md5cycle(e, t) {
    let n = e[0],
      s = e[1],
      r = e[2],
      o = e[3];
    (n += (((s & r) | (~s & o)) + t[0] - 680876936) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[1] - 389564586) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[2] + 606105819) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[3] - 1044525330) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & r) | (~s & o)) + t[4] - 176418897) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[5] + 1200080426) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[6] - 1473231341) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[7] - 45705983) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & r) | (~s & o)) + t[8] + 1770035416) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[9] - 1958414417) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[10] - 42063) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[11] - 1990404162) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & r) | (~s & o)) + t[12] + 1804603682) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[13] - 40341101) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[14] - 1502002290) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[15] + 1236535329) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[1] - 165796510) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[6] - 1069501632) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[11] + 643717713) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[0] - 373897302) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[5] - 701558691) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[10] + 38016083) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[15] - 660478335) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[4] - 405537848) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[9] + 568446438) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[14] - 1019803690) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[3] - 187363961) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[8] + 1163531501) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[13] - 1444681467) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[2] - 51403784) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[7] + 1735328473) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[12] - 1926607734) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += ((s ^ r ^ o) + t[5] - 378558) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[8] - 2022574463) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[11] + 1839030562) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[14] - 35309556) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((s ^ r ^ o) + t[1] - 1530992060) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[4] + 1272893353) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[7] - 155497632) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[10] - 1094730640) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((s ^ r ^ o) + t[13] + 681279174) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[0] - 358537222) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[3] - 722521979) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[6] + 76029189) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((s ^ r ^ o) + t[9] - 640364487) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[12] - 421815835) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[15] + 530742520) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[2] - 995338651) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[0] - 198630844) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[7] + 1126891415) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[14] - 1416354905) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[5] - 57434055) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[12] + 1700485571) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[3] - 1894986606) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[10] - 1051523) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[1] - 2054922799) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[8] + 1873313359) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[15] - 30611744) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[6] - 1560198380) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[13] + 1309151649) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[4] - 145523070) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[11] - 1120210379) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[2] + 718787259) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[9] - 343485551) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (e[0] = (n + e[0]) | 0),
      (e[1] = (s + e[1]) | 0),
      (e[2] = (r + e[2]) | 0),
      (e[3] = (o + e[3]) | 0);
  }
  start() {
    return (
      (this._dataLength = 0),
      (this._bufferLength = 0),
      this._state.set(We.stateIdentity),
      this
    );
  }
  appendStr(e) {
    const t = this._buffer8,
      n = this._buffer32;
    let s = this._bufferLength,
      r,
      o;
    for (o = 0; o < e.length; o += 1) {
      if (((r = e.charCodeAt(o)), r < 128)) t[s++] = r;
      else if (r < 2048) (t[s++] = (r >>> 6) + 192), (t[s++] = (r & 63) | 128);
      else if (r < 55296 || r > 56319)
        (t[s++] = (r >>> 12) + 224),
          (t[s++] = ((r >>> 6) & 63) | 128),
          (t[s++] = (r & 63) | 128);
      else {
        if (
          ((r = (r - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536),
          r > 1114111)
        )
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        (t[s++] = (r >>> 18) + 240),
          (t[s++] = ((r >>> 12) & 63) | 128),
          (t[s++] = ((r >>> 6) & 63) | 128),
          (t[s++] = (r & 63) | 128);
      }
      s >= 64 &&
        ((this._dataLength += 64),
        We._md5cycle(this._state, n),
        (s -= 64),
        (n[0] = n[16]));
    }
    return (this._bufferLength = s), this;
  }
  appendAsciiStr(e) {
    const t = this._buffer8,
      n = this._buffer32;
    let s = this._bufferLength,
      r,
      o = 0;
    for (;;) {
      for (r = Math.min(e.length - o, 64 - s); r--; )
        t[s++] = e.charCodeAt(o++);
      if (s < 64) break;
      (this._dataLength += 64), We._md5cycle(this._state, n), (s = 0);
    }
    return (this._bufferLength = s), this;
  }
  appendByteArray(e) {
    const t = this._buffer8,
      n = this._buffer32;
    let s = this._bufferLength,
      r,
      o = 0;
    for (;;) {
      for (r = Math.min(e.length - o, 64 - s); r--; ) t[s++] = e[o++];
      if (s < 64) break;
      (this._dataLength += 64), We._md5cycle(this._state, n), (s = 0);
    }
    return (this._bufferLength = s), this;
  }
  getState() {
    const e = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [e[0], e[1], e[2], e[3]],
    };
  }
  setState(e) {
    const t = e.buffer,
      n = e.state,
      s = this._state;
    let r;
    for (
      this._dataLength = e.length,
        this._bufferLength = e.buflen,
        s[0] = n[0],
        s[1] = n[1],
        s[2] = n[2],
        s[3] = n[3],
        r = 0;
      r < t.length;
      r += 1
    )
      this._buffer8[r] = t.charCodeAt(r);
  }
  end(e = !1) {
    const t = this._bufferLength,
      n = this._buffer8,
      s = this._buffer32,
      r = (t >> 2) + 1;
    this._dataLength += t;
    const o = this._dataLength * 8;
    if (
      ((n[t] = 128),
      (n[t + 1] = n[t + 2] = n[t + 3] = 0),
      s.set(We.buffer32Identity.subarray(r), r),
      t > 55 && (We._md5cycle(this._state, s), s.set(We.buffer32Identity)),
      o <= 4294967295)
    )
      s[14] = o;
    else {
      const l = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (l === null) return;
      const a = parseInt(l[2], 16),
        h = parseInt(l[1], 16) || 0;
      (s[14] = a), (s[15] = h);
    }
    return We._md5cycle(this._state, s), e ? this._state : We._hex(this._state);
  }
}
We.stateIdentity = new Int32Array([
  1732584193, -271733879, -1732584194, 271733878,
]);
We.buffer32Identity = new Int32Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);
We.hexChars = "0123456789abcdef";
We.hexOut = [];
We.onePassHasher = new We();
if (We.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");