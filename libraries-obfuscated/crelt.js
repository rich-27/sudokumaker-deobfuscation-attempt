function be() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var e = 1,
    t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var s = t[n];
        typeof s == "string" ? i.setAttribute(n, s) : s != null && (i[n] = s);
      }
    e++;
  }
  for (; e < arguments.length; e++) Lm(i, arguments[e]);
  return i;
}
function Lm(i, e) {
  if (typeof e == "string") i.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null) i.appendChild(e);
    else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Lm(i, e[t]);
    else throw new RangeError("Unsupported child node: " + e);
}