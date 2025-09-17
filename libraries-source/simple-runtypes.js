function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/// infrastructure
// context variables:
// the current processed key in object to provide better error messages
var _currentKey; // required when processing records that are part of an intersection


var _skipUnknownKeyCheck; // current key accessor


function currentKey() {
  if (!_currentKey) {
    return '';
  }

  return " (key: " + _currentKey + ")";
}

function debugValue(v, maxLength) {
  if (maxLength === void 0) {
    maxLength = 128;
  }

  var s;

  if (v === undefined) {
    return 'undefined';
  }

  try {
    s = JSON.stringify(v);
  } catch (_unused) {
    s = "" + v;
  }

  if (s.length > maxLength) {
    return s.slice(maxLength - 1) + "\u2026";
  } else {
    return s;
  }
}

var RuntypeError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(RuntypeError, _Error);

  function RuntypeError() {
    return _Error.apply(this, arguments) || this;
  }

  return RuntypeError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

function createError(msg, value) {
  return new RuntypeError(msg + ", value: " + debugValue(value) + currentKey());
} /// basic types

/**
 * A number.
 *
 * Explicitly pass true for allowNaN to not fail on NaNs
 */


function number(allowNaN) {
  if (allowNaN === void 0) {
    allowNaN = false;
  }

  return function (v) {
    if (typeof v === 'number') {
      if (!allowNaN && isNaN(v)) {
        throw createError('expected a number and not NaN', v);
      }

      return v;
    }

    throw createError('expected a number', v);
  };
}
/**
 * A number without decimals and within +-MAX_SAFE_INTEGER.
 */

function integer() {
  return function (v) {
    if (typeof v === 'number' && Number.isInteger(v) && -Number.MAX_SAFE_INTEGER <= v && v <= Number.MAX_SAFE_INTEGER) {
      return v;
    }

    throw createError('expected an integer', v);
  };
}
/**
 * A boolean.
 */

function _boolean() {
  return function (v) {
    if (v === true || v === false) {
      return v;
    }

    throw createError('expected a boolean', v);
  };
}
function string() {
  return function (v) {
    if (typeof v === 'string') {
      return v;
    }

    throw createError('expected a string', v);
  };
}
function literal(literal) {
  return Object.assign(function (v) {
    if (v === literal) {
      return literal;
    }

    throw createError("expected a literal: " + debugValue(literal), v);
  }, {
    literal: literal
  });
}
/**
 * A value to check later.
 */

function unknown() {
  return function (v) {
    return v;
  };
}
/**
 * A value to check later.
 */

function any() {
  return function (v) {
    return v;
  };
}
/**
 * A value to ignore (typed as unknown and always set to undefined).
 */

function ignore() {
  return function (_v) {
    return undefined;
  };
}
/**
 * Any value defined in the enumObject.
 */

function enumValue(enumObject) {
  return function (v) {
    // use the fast reverse lookup of number enums to check whether v is a
    // value of the enum
    if (typeof v === 'number' && enumObject[v] !== undefined) {
      return v;
    }

    if (Object.values(enumObject).indexOf(v) !== -1) {
      return v;
    }

    throw createError("expected a value that belongs to the enum " + debugValue(enumObject), v);
  };
} /// containers

function arrayRuntype(v) {
  if (Array.isArray(v)) {
    return v;
  }

  throw createError("expected an Array", v);
}
/**
 * An array.
 */

function array() {
  return arrayRuntype;
}
function tuple() {
  for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  return function (v) {
    var a = arrayRuntype(v);
    return types.map(function (t, i) {
      return t(a[i]);
    });
  };
} // cached object runtype

function objectRuntype(v) {
  if (typeof v === 'object' && !Array.isArray(v) && v !== null) {
    return v;
  }

  throw createError('expected an object', v);
}
/**
 * An object that is not an array.
 */

function object() {
  return objectRuntype;
}
/**
 * An index with string keys.
 */

function stringIndex(t) {
  return function (v) {
    var o = objectRuntype(v);
    var res = {};

    for (var k in o) {
      res[k] = t(o[k]);
    }

    return res;
  };
}
/**
 * An index with number keys.
 */

function numberIndex(t) {
  return function (v) {
    var o = objectRuntype(v);
    var res = {};

    for (var k in o) {
      if (isNaN(k)) {
        throw createError('expected a number key', k);
      }

      res[k] = t(o[k]);
    }

    return res;
  };
}
/**
 * An object with defined keys and values.
 */

function record(typemap) {
  var rt = Object.assign(function (v) {
    var o = objectRuntype(v); // TODO: optimize allocations: only create a copy if any of the key
    // runtypes return a different object - otherwise return value as is

    var res = {}; // context vars

    var currentKey = _currentKey;
    var skipUnknownKeyCheck = _skipUnknownKeyCheck; // this context var is only valid for the record contained in intersection

    _skipUnknownKeyCheck = undefined;

    for (var k in typemap) {
      _currentKey = k;
      res[k] = typemap[k](o[k]);
    }

    _currentKey = currentKey;
    _skipUnknownKeyCheck = skipUnknownKeyCheck;

    if (!_skipUnknownKeyCheck) {
      var unknownKeys = Object.keys(o).filter(function (k) {
        return !res.hasOwnProperty(k);
      });

      if (unknownKeys.length) {
        throw createError('invalid keys in record', unknownKeys);
      }
    }

    return res;
  }, {
    constants: {}
  });

  for (var k in typemap) {
    var tagLiteral = typemap[k].literal;

    if (tagLiteral !== undefined) {
      rt.constants[k] = tagLiteral;
    }
  }

  return rt;
}
/**
 * Optional (?)
 */

function optional(t) {
  return function (v) {
    if (v === undefined) {
      return undefined;
    }

    return t(v);
  };
}
/**
 * A type or null.
 */

function nullable(t) {
  return function (v) {
    if (v === null) {
      return null;
    }

    return t(v);
  };
}
function discriminatedUnion() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var key = args[0];
  var runtypes = args.slice(1);
  var typeMap = {};
  runtypes.forEach(function (t) {
    var tagValue = t.constants[key];

    if (!(typeof tagValue === 'string' || typeof tagValue === 'number')) {
      throw new Error("broken record type definition, " + t + "[" + key + "] must be a string or number, not " + debugValue(tagValue));
    } // use `object` to also allow enums but they can't be used in types
    // for keys of indexes so we need any


    typeMap[tagValue] = t;
  });
  return function (v) {
    var o = objectRuntype(v);
    var tagValue = o[key];
    var rt = typeMap[tagValue];

    if (rt === undefined) {
      throw createError("no Runtype found for discriminated union tag " + key + ": " + debugValue(tagValue), v);
    }

    return rt(v);
  };
}
/**
 * An intersection of two records.
 */

function intersection(recordA, recordB) {
  return function (v) {
    var o = objectRuntype(v);
    var skipUnknownKeyCheck = _skipUnknownKeyCheck;
    _skipUnknownKeyCheck = true;
    var res = Object.assign(recordA(o), recordB(o));
    _skipUnknownKeyCheck = skipUnknownKeyCheck;

    if (!_skipUnknownKeyCheck) {
      var unknownKeys = Object.keys(o).filter(function (k) {
        return typeof res === 'object' && !res.hasOwnProperty(k);
      });

      if (unknownKeys.length) {
        throw createError('invalid keys in record', unknownKeys);
      }
    }

    return res;
  };
}

export { RuntypeError, any, array, arrayRuntype, _boolean as boolean, discriminatedUnion, enumValue, ignore, integer, intersection, literal, nullable, number, numberIndex, object, objectRuntype, optional, record, string, stringIndex, tuple, unknown };
//# sourceMappingURL=simple-runtypes.esm.js.map
