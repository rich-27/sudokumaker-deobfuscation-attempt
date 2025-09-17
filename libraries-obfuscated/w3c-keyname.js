var qi = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: decodeURIComponent("%60"),
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  },
  Ns = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
  },
  gy = typeof navigator < "u" && /Mac/.test(navigator.platform),
  my =
    typeof navigator < "u" &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var qe = 0; qe < 10; qe++) qi[48 + qe] = qi[96 + qe] = String(qe);
for (var qe = 1; qe <= 24; qe++) qi[qe + 111] = "F" + qe;
for (var qe = 65; qe <= 90; qe++)
  (qi[qe] = String.fromCharCode(qe + 32)), (Ns[qe] = String.fromCharCode(qe));
for (var Gl in qi) Ns.hasOwnProperty(Gl) || (Ns[Gl] = qi[Gl]);
function by(i) {
  var e =
      (gy && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey) ||
      (my && i.shiftKey && i.key && i.key.length == 1) ||
      i.key == "Unidentified",
    t =
      (!e && i.key) ||
      (i.shiftKey ? Ns : qi)[i.keyCode] ||
      i.key ||
      "Unidentified";
  return (
    t == "Esc" && (t = "Escape"),
    t == "Del" && (t = "Delete"),
    t == "Left" && (t = "ArrowLeft"),
    t == "Up" && (t = "ArrowUp"),
    t == "Right" && (t = "ArrowRight"),
    t == "Down" && (t = "ArrowDown"),
    t
  );
}