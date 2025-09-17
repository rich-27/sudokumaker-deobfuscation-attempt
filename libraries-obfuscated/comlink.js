/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const n0 = Symbol("Comlink.proxy"),
  vv = Symbol("Comlink.endpoint"),
  $v = Symbol("Comlink.releaseProxy"),
  Sa = Symbol("Comlink.finalizer"),
  go = Symbol("Comlink.thrown"),
  s0 = (i) => (typeof i == "object" && i !== null) || typeof i == "function",
  Cv = {
    canHandle: (i) => s0(i) && i[n0],
    serialize(i) {
      const { port1: e, port2: t } = new MessageChannel();
      return o0(i, e), [t, [t]];
    },
    deserialize(i) {
      return i.start(), Av(i);
    },
  },
  Zv = {
    canHandle: (i) => s0(i) && go in i,
    serialize({ value: i }) {
      let e;
      return (
        i instanceof Error
          ? (e = {
              isError: !0,
              value: { message: i.message, name: i.name, stack: i.stack },
            })
          : (e = { isError: !1, value: i }),
        [e, []]
      );
    },
    deserialize(i) {
      throw i.isError
        ? Object.assign(new Error(i.value.message), i.value)
        : i.value;
    },
  },
  r0 = new Map([
    ["proxy", Cv],
    ["throw", Zv],
  ]);
function Rv(i, e) {
  for (const t of i)
    if (e === t || t === "*" || (t instanceof RegExp && t.test(e))) return !0;
  return !1;
}
function o0(i, e = globalThis, t = ["*"]) {
  e.addEventListener("message", function n(s) {
    if (!s || !s.data) return;
    if (!Rv(t, s.origin)) {
      console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: o, path: l } = Object.assign({ path: [] }, s.data),
      a = (s.data.argumentList || []).map(ln);
    let h;
    try {
      const c = l.slice(0, -1).reduce((u, d) => u[d], i),
        f = l.reduce((u, d) => u[d], i);
      switch (o) {
        case "GET":
          h = f;
          break;
        case "SET":
          (c[l.slice(-1)[0]] = ln(s.data.value)), (h = !0);
          break;
        case "APPLY":
          h = f.apply(c, a);
          break;
        case "CONSTRUCT":
          {
            const u = new f(...a);
            h = Xv(u);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: u, port2: d } = new MessageChannel();
            o0(i, d), (h = Wv(u, [u]));
          }
          break;
        case "RELEASE":
          h = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      h = { value: c, [go]: 0 };
    }
    Promise.resolve(h)
      .catch((c) => ({ value: c, [go]: 0 }))
      .then((c) => {
        const [f, u] = sl(c);
        e.postMessage(Object.assign(Object.assign({}, f), { id: r }), u),
          o === "RELEASE" &&
            (e.removeEventListener("message", n),
            l0(e),
            Sa in i && typeof i[Sa] == "function" && i[Sa]());
      })
      .catch((c) => {
        const [f, u] = sl({
          value: new TypeError("Unserializable return value"),
          [go]: 0,
        });
        e.postMessage(Object.assign(Object.assign({}, f), { id: r }), u);
      });
  }),
    e.start && e.start();
}
function Tv(i) {
  return i.constructor.name === "MessagePort";
}
function l0(i) {
  Tv(i) && i.close();
}
function Av(i, e) {
  return Wh(i, [], e);
}
function Jr(i) {
  if (i) throw new Error("Proxy has been released and is not useable");
}
function a0(i) {
  return vn(i, { type: "RELEASE" }).then(() => {
    l0(i);
  });
}
const il = new WeakMap(),
  nl =
    "FinalizationRegistry" in globalThis &&
    new FinalizationRegistry((i) => {
      const e = (il.get(i) || 0) - 1;
      il.set(i, e), e === 0 && a0(i);
    });
function Mv(i, e) {
  const t = (il.get(e) || 0) + 1;
  il.set(e, t), nl && nl.register(i, e, i);
}
function _v(i) {
  nl && nl.unregister(i);
}
function Wh(i, e = [], t = function () {}) {
  let n = !1;
  const s = new Proxy(t, {
    get(r, o) {
      if ((Jr(n), o === $v))
        return () => {
          _v(s), a0(i), (n = !0);
        };
      if (o === "then") {
        if (e.length === 0) return { then: () => s };
        const l = vn(i, { type: "GET", path: e.map((a) => a.toString()) }).then(
          ln
        );
        return l.then.bind(l);
      }
      return Wh(i, [...e, o]);
    },
    set(r, o, l) {
      Jr(n);
      const [a, h] = sl(l);
      return vn(
        i,
        { type: "SET", path: [...e, o].map((c) => c.toString()), value: a },
        h
      ).then(ln);
    },
    apply(r, o, l) {
      Jr(n);
      const a = e[e.length - 1];
      if (a === vv) return vn(i, { type: "ENDPOINT" }).then(ln);
      if (a === "bind") return Wh(i, e.slice(0, -1));
      const [h, c] = Qd(l);
      return vn(
        i,
        { type: "APPLY", path: e.map((f) => f.toString()), argumentList: h },
        c
      ).then(ln);
    },
    construct(r, o) {
      Jr(n);
      const [l, a] = Qd(o);
      return vn(
        i,
        {
          type: "CONSTRUCT",
          path: e.map((h) => h.toString()),
          argumentList: l,
        },
        a
      ).then(ln);
    },
  });
  return Mv(s, i), s;
}
function Ev(i) {
  return Array.prototype.concat.apply([], i);
}
function Qd(i) {
  const e = i.map(sl);
  return [e.map((t) => t[0]), Ev(e.map((t) => t[1]))];
}
const h0 = new WeakMap();
function Wv(i, e) {
  return h0.set(i, e), i;
}
function Xv(i) {
  return Object.assign(i, { [n0]: !0 });
}
function sl(i) {
  for (const [e, t] of r0)
    if (t.canHandle(i)) {
      const [n, s] = t.serialize(i);
      return [{ type: "HANDLER", name: e, value: n }, s];
    }
  return [{ type: "RAW", value: i }, h0.get(i) || []];
}
function ln(i) {
  switch (i.type) {
    case "HANDLER":
      return r0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function vn(i, e, t) {
  return new Promise((n) => {
    const s = Dv();
    i.addEventListener("message", function r(o) {
      !o.data ||
        !o.data.id ||
        o.data.id !== s ||
        (i.removeEventListener("message", r), n(o.data));
    }),
      i.start && i.start(),
      i.postMessage(Object.assign({ id: s }, e), t);
  });
}
function Dv() {
  return new Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
    .join("-");
}