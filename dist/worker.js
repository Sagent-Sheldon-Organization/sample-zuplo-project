'use strict';

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/debug/dist/colors.js
  var require_colors = __commonJS({
    "packages/debug/dist/colors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateColor = exports.colorFunctions = exports.stripColor = exports.bgRgb24 = exports.rgb24 = exports.bgRgb8 = exports.rgb8 = exports.bgBrightWhite = exports.bgBrightCyan = exports.bgBrightMagenta = exports.bgBrightBlue = exports.bgBrightYellow = exports.bgBrightGreen = exports.bgBrightRed = exports.bgBrightBlack = exports.bgWhite = exports.bgCyan = exports.bgMagenta = exports.bgBlue = exports.bgYellow = exports.bgGreen = exports.bgRed = exports.bgBlack = exports.brightWhite = exports.brightCyan = exports.brightMagenta = exports.brightBlue = exports.brightYellow = exports.brightGreen = exports.brightRed = exports.brightBlack = exports.gray = exports.white = exports.cyan = exports.magenta = exports.blue = exports.yellow = exports.green = exports.red = exports.black = exports.strikethrough = exports.hidden = exports.inverse = exports.underline = exports.italic = exports.dim = exports.bold = exports.reset = exports.getColorEnabled = exports.setColorEnabled = void 0;
      var noColor = true;
      var enabled = !noColor;
      function setColorEnabled(value) {
        if (noColor) {
          return;
        }
        enabled = value;
      }
      __name(setColorEnabled, "setColorEnabled");
      exports.setColorEnabled = setColorEnabled;
      function getColorEnabled() {
        return enabled;
      }
      __name(getColorEnabled, "getColorEnabled");
      exports.getColorEnabled = getColorEnabled;
      function code(open, close) {
        return {
          open: `\x1B[${open.join(";")}m`,
          close: `\x1B[${close}m`,
          regexp: new RegExp(`\\x1b\\[${close}m`, "g")
        };
      }
      __name(code, "code");
      function run(str, code2) {
        return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
      }
      __name(run, "run");
      function reset(str) {
        return run(str, code([0], 0));
      }
      __name(reset, "reset");
      exports.reset = reset;
      function bold(str) {
        return run(str, code([1], 22));
      }
      __name(bold, "bold");
      exports.bold = bold;
      function dim(str) {
        return run(str, code([2], 22));
      }
      __name(dim, "dim");
      exports.dim = dim;
      function italic(str) {
        return run(str, code([3], 23));
      }
      __name(italic, "italic");
      exports.italic = italic;
      function underline(str) {
        return run(str, code([4], 24));
      }
      __name(underline, "underline");
      exports.underline = underline;
      function inverse(str) {
        return run(str, code([7], 27));
      }
      __name(inverse, "inverse");
      exports.inverse = inverse;
      function hidden(str) {
        return run(str, code([8], 28));
      }
      __name(hidden, "hidden");
      exports.hidden = hidden;
      function strikethrough(str) {
        return run(str, code([9], 29));
      }
      __name(strikethrough, "strikethrough");
      exports.strikethrough = strikethrough;
      function black(str) {
        return run(str, code([30], 39));
      }
      __name(black, "black");
      exports.black = black;
      function red(str) {
        return run(str, code([31], 39));
      }
      __name(red, "red");
      exports.red = red;
      function green(str) {
        return run(str, code([32], 39));
      }
      __name(green, "green");
      exports.green = green;
      function yellow(str) {
        return run(str, code([33], 39));
      }
      __name(yellow, "yellow");
      exports.yellow = yellow;
      function blue(str) {
        return run(str, code([34], 39));
      }
      __name(blue, "blue");
      exports.blue = blue;
      function magenta(str) {
        return run(str, code([35], 39));
      }
      __name(magenta, "magenta");
      exports.magenta = magenta;
      function cyan(str) {
        return run(str, code([36], 39));
      }
      __name(cyan, "cyan");
      exports.cyan = cyan;
      function white(str) {
        return run(str, code([37], 39));
      }
      __name(white, "white");
      exports.white = white;
      function gray(str) {
        return brightBlack(str);
      }
      __name(gray, "gray");
      exports.gray = gray;
      function brightBlack(str) {
        return run(str, code([90], 39));
      }
      __name(brightBlack, "brightBlack");
      exports.brightBlack = brightBlack;
      function brightRed(str) {
        return run(str, code([91], 39));
      }
      __name(brightRed, "brightRed");
      exports.brightRed = brightRed;
      function brightGreen(str) {
        return run(str, code([92], 39));
      }
      __name(brightGreen, "brightGreen");
      exports.brightGreen = brightGreen;
      function brightYellow(str) {
        return run(str, code([93], 39));
      }
      __name(brightYellow, "brightYellow");
      exports.brightYellow = brightYellow;
      function brightBlue(str) {
        return run(str, code([94], 39));
      }
      __name(brightBlue, "brightBlue");
      exports.brightBlue = brightBlue;
      function brightMagenta(str) {
        return run(str, code([95], 39));
      }
      __name(brightMagenta, "brightMagenta");
      exports.brightMagenta = brightMagenta;
      function brightCyan(str) {
        return run(str, code([96], 39));
      }
      __name(brightCyan, "brightCyan");
      exports.brightCyan = brightCyan;
      function brightWhite(str) {
        return run(str, code([97], 39));
      }
      __name(brightWhite, "brightWhite");
      exports.brightWhite = brightWhite;
      function bgBlack(str) {
        return run(str, code([40], 49));
      }
      __name(bgBlack, "bgBlack");
      exports.bgBlack = bgBlack;
      function bgRed(str) {
        return run(str, code([41], 49));
      }
      __name(bgRed, "bgRed");
      exports.bgRed = bgRed;
      function bgGreen(str) {
        return run(str, code([42], 49));
      }
      __name(bgGreen, "bgGreen");
      exports.bgGreen = bgGreen;
      function bgYellow(str) {
        return run(str, code([43], 49));
      }
      __name(bgYellow, "bgYellow");
      exports.bgYellow = bgYellow;
      function bgBlue(str) {
        return run(str, code([44], 49));
      }
      __name(bgBlue, "bgBlue");
      exports.bgBlue = bgBlue;
      function bgMagenta(str) {
        return run(str, code([45], 49));
      }
      __name(bgMagenta, "bgMagenta");
      exports.bgMagenta = bgMagenta;
      function bgCyan(str) {
        return run(str, code([46], 49));
      }
      __name(bgCyan, "bgCyan");
      exports.bgCyan = bgCyan;
      function bgWhite(str) {
        return run(str, code([47], 49));
      }
      __name(bgWhite, "bgWhite");
      exports.bgWhite = bgWhite;
      function bgBrightBlack(str) {
        return run(str, code([100], 49));
      }
      __name(bgBrightBlack, "bgBrightBlack");
      exports.bgBrightBlack = bgBrightBlack;
      function bgBrightRed(str) {
        return run(str, code([101], 49));
      }
      __name(bgBrightRed, "bgBrightRed");
      exports.bgBrightRed = bgBrightRed;
      function bgBrightGreen(str) {
        return run(str, code([102], 49));
      }
      __name(bgBrightGreen, "bgBrightGreen");
      exports.bgBrightGreen = bgBrightGreen;
      function bgBrightYellow(str) {
        return run(str, code([103], 49));
      }
      __name(bgBrightYellow, "bgBrightYellow");
      exports.bgBrightYellow = bgBrightYellow;
      function bgBrightBlue(str) {
        return run(str, code([104], 49));
      }
      __name(bgBrightBlue, "bgBrightBlue");
      exports.bgBrightBlue = bgBrightBlue;
      function bgBrightMagenta(str) {
        return run(str, code([105], 49));
      }
      __name(bgBrightMagenta, "bgBrightMagenta");
      exports.bgBrightMagenta = bgBrightMagenta;
      function bgBrightCyan(str) {
        return run(str, code([106], 49));
      }
      __name(bgBrightCyan, "bgBrightCyan");
      exports.bgBrightCyan = bgBrightCyan;
      function bgBrightWhite(str) {
        return run(str, code([107], 49));
      }
      __name(bgBrightWhite, "bgBrightWhite");
      exports.bgBrightWhite = bgBrightWhite;
      function clampAndTruncate(n, max = 255, min = 0) {
        return Math.trunc(Math.max(Math.min(n, max), min));
      }
      __name(clampAndTruncate, "clampAndTruncate");
      function rgb8(str, color) {
        return run(str, code([38, 5, clampAndTruncate(color)], 39));
      }
      __name(rgb8, "rgb8");
      exports.rgb8 = rgb8;
      function bgRgb8(str, color) {
        return run(str, code([48, 5, clampAndTruncate(color)], 49));
      }
      __name(bgRgb8, "bgRgb8");
      exports.bgRgb8 = bgRgb8;
      function rgb24(str, color) {
        if (typeof color === "number") {
          return run(str, code([38, 2, color >> 16 & 255, color >> 8 & 255, color & 255], 39));
        }
        return run(str, code([
          38,
          2,
          clampAndTruncate(color.r),
          clampAndTruncate(color.g),
          clampAndTruncate(color.b)
        ], 39));
      }
      __name(rgb24, "rgb24");
      exports.rgb24 = rgb24;
      function bgRgb24(str, color) {
        if (typeof color === "number") {
          return run(str, code([48, 2, color >> 16 & 255, color >> 8 & 255, color & 255], 49));
        }
        return run(str, code([
          48,
          2,
          clampAndTruncate(color.r),
          clampAndTruncate(color.g),
          clampAndTruncate(color.b)
        ], 49));
      }
      __name(bgRgb24, "bgRgb24");
      exports.bgRgb24 = bgRgb24;
      var ANSI_PATTERN = new RegExp([
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|"), "g");
      function stripColor(string) {
        return string.replace(ANSI_PATTERN, "");
      }
      __name(stripColor, "stripColor");
      exports.stripColor = stripColor;
      exports.colorFunctions = [
        red,
        green,
        yellow,
        blue,
        magenta,
        cyan
      ];
      function hashCode(s) {
        let h = 0;
        const l = s.length;
        let i = 0;
        if (l > 0)
          while (i < l)
            h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
      }
      __name(hashCode, "hashCode");
      function generateColor(message2) {
        const hash2 = Math.abs(hashCode(message2));
        return exports.colorFunctions[hash2 % exports.colorFunctions.length];
      }
      __name(generateColor, "generateColor");
      exports.generateColor = generateColor;
    }
  });

  // packages/debug/dist/format.js
  var require_format = __commonJS({
    "packages/debug/dist/format.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.format = void 0;
      function format(inspect, f, ...args) {
        let i = 0;
        const len = args.length;
        let str = String(f).replace(/%[sdjoO%]/g, (x) => {
          if (x === "%%")
            return "%";
          if (i >= len)
            return x;
          switch (x) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]).toString();
            case "%o":
              return inspect(args[i++]).split("\n").map((_) => _.trim()).join(" ");
            case "%O":
              return inspect(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch {
                return "[Circular]";
              }
            default:
              return x;
          }
        });
        for (const x of args.splice(i)) {
          if (x === null || !(typeof x === "object" && x !== null)) {
            str += " " + x;
          } else {
            str += " " + inspect(x);
          }
        }
        return str;
      }
      __name(format, "format");
      exports.format = format;
    }
  });

  // packages/debug/dist/worker/inspect.js
  var require_inspect = __commonJS({
    "packages/debug/dist/worker/inspect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.inspect = void 0;
      function inspect(obj, showHidden, depth, color) {
        const ctx = {
          seen: [],
          stylize: stylizeNoColor,
          showHidden: showHidden ?? false,
          depth: depth ?? 2,
          colors: color ?? false,
          customInspect: true
        };
        if (ctx.colors)
          ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      __name(inspect, "inspect");
      exports.inspect = inspect;
      inspect.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      };
      inspect.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        // "name": intentionally not styling
        regexp: "red"
      };
      function stylizeNoColor(str, styleType) {
        return str;
      }
      __name(stylizeNoColor, "stylizeNoColor");
      function isBoolean2(arg) {
        return typeof arg === "boolean";
      }
      __name(isBoolean2, "isBoolean");
      function isUndefined2(arg) {
        return arg === void 0;
      }
      __name(isUndefined2, "isUndefined");
      function stylizeWithColor(str, styleType) {
        const style = inspect.styles[styleType];
        if (style) {
          return "\x1B[" + // @ts-expect-error
          inspect.colors[style][0] + "m" + str + "\x1B[" + // @ts-expect-error
          inspect.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      __name(stylizeWithColor, "stylizeWithColor");
      function isFunction(arg) {
        return typeof arg === "function";
      }
      __name(isFunction, "isFunction");
      function isString2(arg) {
        return typeof arg === "string";
      }
      __name(isString2, "isString");
      function isNumber2(arg) {
        return typeof arg === "number";
      }
      __name(isNumber2, "isNumber");
      function isNull(arg) {
        return arg === null;
      }
      __name(isNull, "isNull");
      function hasOwn(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      __name(hasOwn, "hasOwn");
      function isRegExp(re2) {
        return isObject3(re2) && objectToString(re2) === "[object RegExp]";
      }
      __name(isRegExp, "isRegExp");
      function isObject3(arg) {
        return typeof arg === "object" && arg !== null;
      }
      __name(isObject3, "isObject");
      function isError(e) {
        return isObject3(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      __name(isError, "isError");
      function isDate(d) {
        return isObject3(d) && objectToString(d) === "[object Date]";
      }
      __name(isDate, "isDate");
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      __name(objectToString, "objectToString");
      function arrayToHash(array) {
        const hash2 = {};
        array.forEach(function(val2, idx) {
          hash2[val2] = true;
        });
        return hash2;
      }
      __name(arrayToHash, "arrayToHash");
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        const output = [];
        for (let i = 0, l = value.length; i < l; ++i) {
          if (hasOwn(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
          }
        });
        return output;
      }
      __name(formatArray, "formatArray");
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      __name(formatError, "formatError");
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
        value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
          let ret = value.inspect(recurseTimes, ctx);
          if (!isString2(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        const primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        let keys = Object.keys(value);
        const visibleKeys = arrayToHash(keys);
        try {
          if (ctx.showHidden && Object.getOwnPropertyNames) {
            keys = Object.getOwnPropertyNames(value);
          }
        } catch (e) {
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            const name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        let base = "", array = false, braces = ["{", "}"];
        if (Array.isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          const n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        let output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      __name(formatValue, "formatValue");
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        let name, str, desc;
        desc = { value: void 0 };
        try {
          desc.value = value[key];
        } catch (e) {
        }
        try {
          if (Object.getOwnPropertyDescriptor) {
            desc = Object.getOwnPropertyDescriptor(value, key) || desc;
          }
        } catch (e) {
        }
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwn(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").substr(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined2(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      __name(formatProperty, "formatProperty");
      function formatPrimitive(ctx, value) {
        if (isUndefined2(value))
          return ctx.stylize("undefined", "undefined");
        if (isString2(value)) {
          const simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber2(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean2(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      __name(formatPrimitive, "formatPrimitive");
      function reduceToSingleString(output, base, braces) {
        let numLinesEst = 0;
        const length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0)
            numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      __name(reduceToSingleString, "reduceToSingleString");
    }
  });

  // packages/debug/dist/worker/format.js
  var require_format2 = __commonJS({
    "packages/debug/dist/worker/format.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.format = void 0;
      var format_1 = require_format();
      var inspect_1 = require_inspect();
      var format = /* @__PURE__ */ __name((f, ...args) => (0, format_1.format)(inspect_1.inspect, f, args), "format");
      exports.format = format;
    }
  });

  // packages/debug/dist/worker/debug.js
  var require_debug = __commonJS({
    "packages/debug/dist/worker/debug.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.debug = exports.withoutEnv = exports.Debugger = void 0;
      var colors_1 = require_colors();
      var format_1 = require_format2();
      var Debugger = class {
        static {
          __name(this, "Debugger");
        }
        manager;
        ns;
        color;
        last;
        enabled;
        constructor(manager2, namespace) {
          this.manager = manager2;
          this.ns = namespace;
          this.color = (0, colors_1.generateColor)(namespace);
          this.last = 0;
          this.enabled = manager2.enabled.some((r) => r.test(namespace));
        }
        log(...args) {
          if (!this.enabled)
            return;
          let fmt;
          const firstArg = args[0];
          if (typeof firstArg === "function") {
            fmt = firstArg();
          } else {
            fmt = String(firstArg);
          }
          const diff = Date.now() - (this.last || Date.now());
          fmt = (0, format_1.format)(fmt, ...args);
          const msg = `${this.color(this.ns)} ${fmt} ${this.color(`+${diff}ms`)}`;
          console.log(msg);
          this.last = Date.now();
        }
      };
      exports.Debugger = Debugger;
      var DebugManager = class {
        static {
          __name(this, "DebugManager");
        }
        debuggers;
        enabled;
        constructor(enabled) {
          this.debuggers = /* @__PURE__ */ new Map();
          this.enabled = enabled ?? [];
        }
      };
      function extract(opts) {
        if (!opts || opts.length === 0)
          return [];
        opts = opts.replace(/\s/g, "").replace(/\*/g, ".+");
        return opts.split(",").map((rule) => new RegExp(`^${rule}$`));
      }
      __name(extract, "extract");
      var manager;
      function withoutEnv(enabled) {
        if (!enabled)
          enabled = [];
        if (typeof enabled === "string")
          enabled = extract(enabled);
        manager = new DebugManager(enabled);
      }
      __name(withoutEnv, "withoutEnv");
      exports.withoutEnv = withoutEnv;
      function debug8(namespace) {
        const envVar = globalThis.DEBUG;
        if (!manager)
          manager = new DebugManager(extract(envVar));
        const dbg = new Debugger(manager, namespace);
        manager.debuggers.set(namespace, dbg);
        const de = Object.assign(dbg.log.bind(dbg), {
          self: dbg
        });
        return de;
      }
      __name(debug8, "debug");
      exports.debug = debug8;
    }
  });

  // packages/runtime/dist/errors.js
  var SystemError, RuntimeError, ConfigurationError, FeatureNotEnabledError;
  var init_errors = __esm({
    "packages/runtime/dist/errors.js"() {
      "use strict";
      SystemError = class extends Error {
        static {
          __name(this, "SystemError");
        }
        constructor(message2, options) {
          super(message2, options);
          this.name = "InternalError";
        }
      };
      RuntimeError = class extends Error {
        static {
          __name(this, "RuntimeError");
        }
        extensionMembers;
        constructor(problem, options) {
          if (typeof problem === "string") {
            super(problem, options);
          } else {
            super(problem.message, options);
            this.extensionMembers = problem.extensionMembers;
          }
          this.name = "RuntimeError";
        }
      };
      ConfigurationError = class extends RuntimeError {
        static {
          __name(this, "ConfigurationError");
        }
        constructor(message2, options) {
          super(message2, options);
          this.name = "ConfigurationError";
        }
      };
      FeatureNotEnabledError = class extends RuntimeError {
        static {
          __name(this, "FeatureNotEnabledError");
        }
        constructor(message2, options) {
          super(message2, options);
          this.name = "FeatureNotEnabledError";
        }
      };
    }
  });

  // packages/runtime/dist/compatibility-flags.generated.js
  var DEFAULT_COMPATIBILITY_DATE, COMPATIBILITY_FLAG_MAPPINGS;
  var init_compatibility_flags_generated = __esm({
    "packages/runtime/dist/compatibility-flags.generated.js"() {
      "use strict";
      DEFAULT_COMPATIBILITY_DATE = "2024-03-14";
      COMPATIBILITY_FLAG_MAPPINGS = Object.freeze({
        none: {
          runOutboundPoliciesOnHandlerOnAllStatuses: false,
          doNotRunHooksOnSystemRoutes: false,
          removeAllVendorHeadersExceptListed: false
        },
        "2023-03-14": {
          runOutboundPoliciesOnHandlerOnAllStatuses: false,
          doNotRunHooksOnSystemRoutes: false,
          removeAllVendorHeadersExceptListed: false
        },
        "2024-01-15": {
          runOutboundPoliciesOnHandlerOnAllStatuses: true,
          doNotRunHooksOnSystemRoutes: true,
          removeAllVendorHeadersExceptListed: true
        },
        "2024-03-14": {
          runOutboundPoliciesOnHandlerOnAllStatuses: true,
          doNotRunHooksOnSystemRoutes: true,
          removeAllVendorHeadersExceptListed: true
        }
      });
    }
  });

  // packages/runtime/dist/mocks/environment.js
  function getMockEnvironment() {
    return new Environment({
      build: {
        ACCOUNT_NAME: "mock-account-name",
        PROJECT_NAME: "mock-project-name",
        API_VERSION: "0.0.0",
        BUILD_ID: crypto.randomUUID(),
        TIMESTAMP: (/* @__PURE__ */ new Date()).toISOString(),
        IS_PRODUCTION: false,
        BUILD_ENV: "test",
        ZUPLO_VERSION: "0.0.0",
        COMPATIBILITY_DATE: DEFAULT_COMPATIBILITY_DATE,
        ENVIRONMENT_TYPE: "mock-environment-type",
        GIT_SHA: void 0,
        COMPATIBILITY_FLAGS: COMPATIBILITY_FLAG_MAPPINGS[DEFAULT_COMPATIBILITY_DATE]
      },
      runtime: {
        RUNTIME_ENV: "test",
        RUNTIME_STAGE: "test",
        __ZUPLO_DEPLOYMENT_NAME: "mock-deployment-name",
        __ZUPLO_LOG_LEVEL: "debug",
        __ZUPLO_LOG_FORMAT: "pretty",
        __ZUPLO_MANAGEMENT_API_URL: "",
        __ZUPLO_RUNTIME_TYPE: "deno",
        __ZUPLO_AUTH_API_JWT: ""
      }
    });
  }
  var init_environment = __esm({
    "packages/runtime/dist/mocks/environment.js"() {
      "use strict";
      init_compatibility_flags_generated();
      init_environment2();
      __name(getMockEnvironment, "getMockEnvironment");
    }
  });

  // packages/runtime/dist/utils/environment.js
  var Environment;
  var init_environment2 = __esm({
    "packages/runtime/dist/utils/environment.js"() {
      "use strict";
      init_environment();
      Environment = class _Environment {
        static {
          __name(this, "Environment");
        }
        config;
        static #instance;
        static #initialized = false;
        static initialize(options) {
          if (!this.#instance) {
            this.#instance = new _Environment(options);
            this.#initialized = true;
          }
        }
        static get instance() {
          if (!this.#initialized) {
            console.debug(`Environment has not been initialized. This is okay when running tests, a mock environment will be used.`);
            this.#instance = getMockEnvironment();
          }
          return this.#instance;
        }
        constructor({ build, runtime }) {
          let parsedRes = void 0;
          try {
            if (runtime.__ZUPLO_CONFIG) {
              const base64Decoded = atob(runtime.__ZUPLO_CONFIG);
              parsedRes = JSON.parse(base64Decoded);
            }
          } catch (err) {
            console.warn("Failed to parse runtime configuration");
          }
          this.config = parsedRes ?? {};
          this.build = build;
          this.runtime = runtime;
          this.instanceId = crypto.randomUUID();
        }
        build;
        runtime;
        /**
         * The unique identifier for the instance
         */
        instanceId;
        /**
         * NOTE: - all the getters below first use a `__ZUPLO` env variable, then use
         * the `this.config` aka `__ZUPLO_CONFIG` env variable, then use a hardcoded
         * default if available
         */
        /**
         * Deployment name for the zup
         */
        get deploymentName() {
          return this.runtime.__ZUPLO_DEPLOYMENT_NAME ?? this.config.deployment_name ?? void 0;
        }
        /**
         * Should we use the new sha256 hash routing for services
         */
        get useSha256ServiceRouting() {
          return this.config.use_sha256_service_routing ?? void 0;
        }
        /**
         * Should we proxy fetch calls from zups?
         */
        get useProxyForFetchFromZups() {
          return this.config.use_proxy_for_fetch_from_zups ?? void 0;
        }
        /**
         * Points to where the developer portal is hosted
         */
        get devPortalBaseUrl() {
          return this.runtime.__ZUPLO_DEV_PORTAL_URL ?? this.config.dev_portal_url ?? "https://dev-portal-v4-1.zuplo.com";
        }
        get buildAssetsUrl() {
          return this.runtime.__ZUPLO_BUILD_ASSETS_URL ?? this.config.build_assets_url ?? "https://build-assets.zuplo.com";
        }
        /**
         * Token used to identify zup on the log processing service
         */
        get remoteLogToken() {
          return this.runtime.__ZUPLO_REMOTE_LOG_TOKEN ?? this.config.remote_log_token ?? void 0;
        }
        /**
         * Management API service URL
         */
        get managementApiURL() {
          return this.runtime.__ZUPLO_MANAGEMENT_API_URL ?? this.config.management_api_url ?? "https://api.zuplo.com";
        }
        /**
         * Zuplo resource CDN URL
         */
        get cdnURL() {
          return this.runtime.__ZUPLO_CDN_URL ?? this.config.cdn_url ?? "https://cdn.zuplo.com";
        }
        /**
         * URL for the service that processes logs
         */
        get remoteLogURL() {
          return this.runtime.__ZUPLO_REMOTE_LOG_URL ?? this.config.log_event_api ?? "https://ellie.zuplo.com";
        }
        /**
         * Id used on internal logs
         */
        get loggingId() {
          return this.runtime.__ZUPLO_LOGGING_ID ?? this.config.logging_id ?? void 0;
        }
        /**
         * URL(s) to access Zuplo Redis service
         */
        get redisURL() {
          return this.runtime.__ZUPLO_REDIS_URL ?? this.config.redis_proxy_url ?? "https://redis-proxy.zuplo.com";
        }
        get apiKeyServiceUrl() {
          return this.runtime.__ZUPLO_API_KEY_SERVICE_URL ?? this.config.api_key_service_url ?? "https://apikey.zuplo.com";
        }
        get meteringServiceUrl() {
          return this.config.metering_service_url ?? "https://meters.zuplo.com";
        }
        /**
         * JWT issued for the zup by the Auth API service
         */
        get authApiJWT() {
          return this.runtime.__ZUPLO_AUTH_API_JWT ?? void 0;
        }
        /**
         * The user log level can be overridden with the
         * ZUPLO_LOG_LEVEL env variable, otherwise it defaults
         * to the system log level __ZUPLO_LOG_LEVEL
         */
        get userLogLevel() {
          return this.runtime.ZUPLO_LOG_LEVEL ?? this.runtime.__ZUPLO_LOG_LEVEL ?? this.config.user_log_level ?? "debug";
        }
        /**
         * The system log level can be overridden with the __ZUPLO_LOG_LEVEL env variable
         * otherwise it defaults to 'debug'
         */
        get systemLogLevel() {
          return this.runtime.__ZUPLO_LOG_LEVEL ?? this.config.system_log_level ?? "debug";
        }
        /**
         * Log format for both user & system logs
         */
        get logFormat() {
          return this.runtime.__ZUPLO_LOG_FORMAT ?? this.config.log_format ?? "cloudflare";
        }
        /**
         * Check if runtime is cloudflare
         */
        get isCloudflare() {
          if (this.runtime.__ZUPLO_RUNTIME_TYPE) {
            return this.runtime.__ZUPLO_RUNTIME_TYPE === "cloudflare";
          } else if (this.config.runtime_type) {
            return this.config.runtime_type === "cloudflare";
          } else {
            return typeof WebSocketPair === "function";
          }
        }
        /**
         * Check if runtime is deno
         */
        get isDeno() {
          if (this.runtime.__ZUPLO_RUNTIME_TYPE) {
            return this.runtime.__ZUPLO_RUNTIME_TYPE === "deno";
          } else if (this.config.runtime_type) {
            return this.config.runtime_type === "deno";
          } else {
            return typeof WebSocketPair !== "function";
          }
        }
        /**
         * Check if we are on local development
         */
        get isLocalDevelopment() {
          if (this.build.ENVIRONMENT_TYPE) {
            return this.build.ENVIRONMENT_TYPE === "LOCAL_DEVELOPMENT";
          } else {
            return false;
          }
        }
        get systemUserAgent() {
          return `Zuplo/${this.build.ZUPLO_VERSION}`;
        }
        get loggingEnvironmentType() {
          if (this.isCloudflare) {
            return "edge";
          } else if (this.isLocalDevelopment) {
            return "local";
          } else if (this.isDeno) {
            return "working-copy";
          } else {
            return "unknown";
          }
        }
        get loggingEnvironmentStage() {
          if (this.build.ENVIRONMENT_TYPE === "PRODUCTION") {
            return "production";
          } else if (this.build.ENVIRONMENT_TYPE === "PREVIEW") {
            return "preview";
          } else if (this.isLocalDevelopment) {
            return "local";
          } else if (this.isDeno) {
            return "working-copy";
          } else {
            return "unknown";
          }
        }
        get isWorkingCopy() {
          return this.build.ENVIRONMENT_TYPE === "WORKING_COPY";
        }
      };
    }
  });

  // packages/runtime/dist/external-services.js
  function getServiceAuth() {
    let serviceAuth;
    const { __ZUPLO_EXTERNAL_SERVICE_TOKEN: serviceAuthJson } = Environment.instance.runtime;
    if (serviceAuthJson && serviceAuthJson !== "undefined") {
      try {
        const base64Decoded = atob(serviceAuthJson);
        serviceAuth = JSON.parse(base64Decoded);
      } catch (err) {
      }
    }
    return serviceAuth;
  }
  async function externalServiceTunnelConfig(request) {
    const serviceAuth = getServiceAuth();
    if (!serviceAuth) {
      log(`There is no external service auth configured for this zup.`);
      throw new RuntimeError("There are no external services configured for this zup.");
    }
    if (typeof request !== "string") {
      log(`Cannot call external service with Request object`);
      throw new RuntimeError("Currently, we only support fetch(<some_string>, ...).");
    }
    const url = new URL(request);
    const serviceName = url.hostname;
    const tunnelHeaders = {};
    tunnelHeaders["CF-Access-Client-Id"] = serviceAuth.clientId;
    tunnelHeaders["CF-Access-Client-Secret"] = serviceAuth.clientSecret;
    let serviceBaseUrl;
    if (serviceAuth.customServiceMapping && serviceAuth.customServiceMapping[serviceName]) {
      serviceBaseUrl = `https://${serviceAuth.customServiceMapping[serviceName]}`;
    } else if (Environment.instance.useSha256ServiceRouting) {
      log(`Using sha256 service routing`);
      const rawBuild = Environment.instance.build;
      if (rawBuild.ACCOUNT_NAME && rawBuild.PROJECT_NAME && rawBuild.ENVIRONMENT_TYPE) {
        const fullyHashedSubdomain = await hashServiceName(serviceName, rawBuild.ACCOUNT_NAME, rawBuild.PROJECT_NAME, rawBuild.ENVIRONMENT_TYPE);
        serviceBaseUrl = `https://${fullyHashedSubdomain}.zuptunnel.com`;
      } else {
        log(`Cannot use sha256 service routing, missing build variables`);
        throw new RuntimeError("Failed to generate fully qualified tunnel url.");
      }
    } else {
      serviceBaseUrl = `https://${serviceName}.zuptunnel.com`;
    }
    return {
      serviceBaseUrl,
      tunnelHeaders
    };
  }
  async function externalServiceHandler(request, init) {
    const serviceAuth = getServiceAuth();
    if (serviceAuth) {
      log(`Using external service auth. ClientId: ${serviceAuth.clientId})`);
      if (typeof request === "string") {
        const url = new URL(request);
        const serviceName = url.hostname;
        const decoratedInit = init ?? {};
        const headers = new Headers(decoratedInit.headers || {});
        headers.set("CF-Access-Client-Id", serviceAuth.clientId);
        headers.set("CF-Access-Client-Secret", serviceAuth.clientSecret);
        decoratedInit.headers = headers;
        let serviceBaseUrl;
        if (serviceAuth.customServiceMapping && serviceAuth.customServiceMapping[serviceName]) {
          serviceBaseUrl = `https://${serviceAuth.customServiceMapping[serviceName]}`;
        } else if (Environment.instance.useSha256ServiceRouting) {
          log(`Using sha256 service routing`);
          const rawBuild = Environment.instance.build;
          if (rawBuild.ACCOUNT_NAME && rawBuild.PROJECT_NAME && rawBuild.ENVIRONMENT_TYPE) {
            const fullyHashedSubdomain = await hashServiceName(serviceName, rawBuild.ACCOUNT_NAME, rawBuild.PROJECT_NAME, rawBuild.ENVIRONMENT_TYPE);
            serviceBaseUrl = `https://${fullyHashedSubdomain}.zuptunnel.com`;
          } else {
            log(`Cannot use sha256 service routing, missing build variables`);
            throw new RuntimeError("Failed to generate fully qualified tunnel url.");
          }
        } else {
          serviceBaseUrl = `https://${serviceName}.zuptunnel.com`;
        }
        const serviceUrl = new URL(`${serviceBaseUrl}${url.pathname}${url.search}`);
        log(`Calling external service: ${serviceUrl.toString()}`);
        const response = await internals_default.fetch(serviceUrl.toString(), decoratedInit);
        if (response.status === 403 && response.headers.get("cf-access-domain") !== null) {
          console.error(`403 Forbidden when calling external service.`, {
            clientId: serviceAuth.clientId,
            tunnelHost: serviceBaseUrl
          });
          throw new RuntimeError("Could not connect to secure tunnel.");
        }
        return response;
      } else {
        log(`Cannot call external service with Request object`);
        throw new RuntimeError("Currently, we only support fetch(<some_string>, ...).");
      }
    } else {
      log(`There is no external service auth configured for this zup.`);
      throw new RuntimeError("There are no external services configured for this zup.");
    }
  }
  async function hashServiceName(serviceName, accountName, projectName, environmentType) {
    const service = serviceName.toLowerCase();
    const account = accountName.toLowerCase();
    const project = projectName.toLowerCase();
    const environment2 = sanitizeEnvironmentType(environmentType);
    log(`Hashing service name: ${account}-${service}.${account}-${project}-${environment2}`);
    const hashedService = await hashSegment(`${account}-${service}`);
    const hashedSubdomain = await hashSegment(`${account}-${project}-${environment2}`);
    return `${hashedService}.${hashedSubdomain}`;
  }
  async function hashSegment(segment) {
    const msgUint8 = new TextEncoder().encode(segment);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, -1);
    return hashHex;
  }
  function sanitizeEnvironmentType(environmentType) {
    const lowercased = environmentType.toLowerCase();
    switch (lowercased) {
      case "production":
      case "preview":
        return lowercased;
      default:
        return "working-copy";
    }
  }
  var import_debug, log;
  var init_external_services = __esm({
    "packages/runtime/dist/external-services.js"() {
      "use strict";
      import_debug = __toESM(require_debug());
      init_errors();
      init_internals();
      init_environment2();
      log = (0, import_debug.debug)("zuplo:runtime:external-service");
      __name(getServiceAuth, "getServiceAuth");
      __name(externalServiceTunnelConfig, "externalServiceTunnelConfig");
      __name(externalServiceHandler, "externalServiceHandler");
      __name(hashServiceName, "hashServiceName");
      __name(hashSegment, "hashSegment");
      __name(sanitizeEnvironmentType, "sanitizeEnvironmentType");
    }
  });

  // packages/runtime/dist/fetch-redefinition.js
  function internalFetch(request, init) {
    const transformedInit = transformInit(init);
    if (typeof request === "string") {
      const url = new URL(request);
      const handler2 = protocolHandlers.get(url.protocol);
      if (handler2) {
        return handler2(request, transformedInit);
      } else {
        return originalFetch(request, transformedInit);
      }
    } else {
      return originalFetch(request, transformedInit);
    }
  }
  var protocolHandlers, originalFetch, transformInit;
  var init_fetch_redefinition = __esm({
    "packages/runtime/dist/fetch-redefinition.js"() {
      "use strict";
      init_external_services();
      protocolHandlers = /* @__PURE__ */ new Map();
      protocolHandlers.set("service:", externalServiceHandler);
      originalFetch = globalThis.fetch;
      __name(internalFetch, "internalFetch");
      globalThis.fetch = internalFetch;
      transformInit = /* @__PURE__ */ __name((init) => {
        if (!init || init instanceof Request) {
          return init;
        }
        const zuploInit = init;
        if (!zuploInit.zuplo) {
          return init;
        }
        const cfInitRef = init;
        cfInitRef.cf = {
          cacheEverything: zuploInit.zuplo?.cacheEverything,
          cacheTtl: zuploInit.zuplo?.cacheTtlSeconds
        };
        delete init.zuplo;
        return init;
      }, "transformInit");
    }
  });

  // packages/runtime/dist/internals.js
  var internals, internals_default;
  var init_internals = __esm({
    "packages/runtime/dist/internals.js"() {
      "use strict";
      init_fetch_redefinition();
      internals = {
        fetch: internalFetch
      };
      internals_default = internals;
    }
  });

  // packages/runtime/dist/security.js
  var globalAny, originalCaches;
  var init_security = __esm({
    "packages/runtime/dist/security.js"() {
      "use strict";
      init_environment2();
      Function.prototype.toString = function() {
        return "[native code]";
      };
      globalAny = globalThis;
      originalCaches = globalAny.caches;
      if (originalCaches) {
        const originalCachesOpen = originalCaches.open;
        globalAny.caches.open = function(cacheName) {
          const uniquePrefix = Environment.instance.deploymentName ?? Environment.instance.build.BUILD_ID;
          return originalCachesOpen.call(this, `${uniquePrefix}-${cacheName}`);
        };
        delete globalAny.caches.default;
        Object.freeze(globalAny.caches);
      }
    }
  });

  // packages/runtime/dist/caches/memory-cache.js
  var PURGE_PERIOD_MS, DEFAULT_MAX_SIZE, memoryCaches, InnerCache, MemoryCache;
  var init_memory_cache = __esm({
    "packages/runtime/dist/caches/memory-cache.js"() {
      "use strict";
      PURGE_PERIOD_MS = 1e4;
      DEFAULT_MAX_SIZE = 1e3;
      memoryCaches = /* @__PURE__ */ new Map();
      InnerCache = class {
        static {
          __name(this, "InnerCache");
        }
        constructor(options) {
          this.#maxItems = options.maxSize;
        }
        #maxItems;
        #lastPurged = 0;
        #storage = /* @__PURE__ */ new Map();
        #keyStack = [];
        get(key) {
          const entry = this.#storage.get(key);
          if (!entry) {
            return;
          }
          const now = Date.now();
          if (now > entry.expiresAt) {
            this.#storage.delete(key);
            return;
          }
          entry.lastUsed = now;
          this.#periodicPurge();
          return entry?.data;
        }
        put(key, data, ttlSeconds) {
          if (ttlSeconds <= 0) {
            return;
          }
          if (this.#storage.size >= this.#maxItems) {
            const oldKey = this.#keyStack.shift();
            if (oldKey) {
              this.#storage.delete(oldKey);
            }
          }
          const now = Date.now();
          const entry = {
            created: now,
            lastUsed: now,
            expiresAt: now + ttlSeconds * 1e3,
            data
          };
          this.#keyStack.push(key);
          this.#storage.set(key, entry);
        }
        delete(key) {
          const index = this.#keyStack.indexOf(key);
          if (index >= 0) {
            this.#keyStack.slice(index, 1);
          }
          this.#storage.delete(key);
        }
        get size() {
          return this.#storage.size;
        }
        #periodicPurge() {
          const now = Date.now();
          const purgeDue = this.#lastPurged + PURGE_PERIOD_MS * 1e3 > now;
          if (purgeDue) {
            this.purge();
            this.#lastPurged = now;
          }
        }
        purge() {
          const now = Date.now();
          this.#storage.forEach((entry, key) => {
            if (entry.expiresAt >= now) {
              this.#storage.delete(key);
            }
          });
        }
      };
      MemoryCache = class {
        static {
          __name(this, "MemoryCache");
        }
        constructor(name, options = { maxSize: DEFAULT_MAX_SIZE }) {
          this.name = name;
          let cache = memoryCaches.get(name);
          if (!cache) {
            cache = new InnerCache(options);
            memoryCaches.set(name, cache);
          }
          this.#cache = cache;
        }
        name;
        #cache;
        get(key) {
          return this.#cache.get(key);
        }
        put(key, data, ttlSeconds) {
          return this.#cache.put(key, data, ttlSeconds);
        }
        delete(key) {
          return this.#cache.delete(key);
        }
        get size() {
          return this.#cache.size;
        }
        purge() {
          this.#cache.purge();
        }
      };
    }
  });

  // packages/runtime/dist/caches/zone-cache.js
  var EXPIRY_HEADER, ZoneCache;
  var init_zone_cache = __esm({
    "packages/runtime/dist/caches/zone-cache.js"() {
      "use strict";
      EXPIRY_HEADER = "__zuplo-expiry-header";
      ZoneCache = class {
        static {
          __name(this, "ZoneCache");
        }
        constructor(name, context) {
          this.#name = name;
          this.#context = context;
        }
        #context;
        #name;
        #cache;
        async #getCache() {
          if (!this.#cache) {
            this.#cache = await caches.open(this.#name);
          }
          return this.#cache;
        }
        #getRequest(key) {
          return new Request(`https://zone-cache.zuplo.app/${encodeURIComponent(key)}`);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async get(key) {
          try {
            const cache = await this.#getCache();
            const request = this.#getRequest(key);
            const result = await cache.match(request);
            if (!result) {
              return void 0;
            }
            const expiryHeader = result.headers.get(EXPIRY_HEADER);
            if (!expiryHeader) {
              try {
                await cache.delete(request);
              } catch (err) {
                this.logDebug("Handled failure to delete with CF cache because of missing expiryHeader", err);
                await this.deleteFallback(key);
              }
              return void 0;
            }
            const expiresAt = parseInt(expiryHeader);
            if (Date.now() >= expiresAt) {
              try {
                await cache.delete(request);
              } catch (err) {
                this.logDebug("Handled failure to delete with CF cache because of expiration", err);
                await this.deleteFallback(key);
              }
              return void 0;
            }
            const data = await result.json();
            return data;
          } catch (err) {
            this.logDebug(err);
          }
          return void 0;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async put(key, data, ttlSeconds) {
          const headers = new Headers({
            "cache-control": `s-maxage=${ttlSeconds}, must-revalidate`,
            "content-type": "application/json"
          });
          headers.set(EXPIRY_HEADER, `${Date.now() + ttlSeconds * 1e3}`);
          const cache = await this.#getCache();
          const request = this.#getRequest(key);
          const response = new Response(JSON.stringify(data), {
            headers
          });
          await cache.put(request, response);
        }
        async delete(key) {
          const cache = await this.#getCache();
          const request = this.#getRequest(key);
          try {
            await cache.delete(request);
          } catch (err) {
            this.logDebug("Handled failure to delete with CF cache due to explicit delete call", err);
            await this.deleteFallback(key);
          }
        }
        // Wrap the deletes in try/catch because of https://github.com/cloudflare/workers-sdk/issues/2790
        async deleteFallback(key) {
          const headers = new Headers({
            "Cache-Control": `s-maxage=0, must-revalidate`
          });
          headers.set(EXPIRY_HEADER, `${Date.now()}`);
          const cache = await this.#getCache();
          const request = this.#getRequest(key);
          const response = new Response("", {
            headers
          });
          await cache.put(request, response);
        }
        logDebug(...messages) {
          if ("logger" in this.#context) {
            this.#context.logger?.debug(`Error in ZoneCache: '${this.#name}'`, messages);
          } else if ("log" in this.#context) {
            this.#context.log.debug(`Error in ZoneCache: '${this.#name}'`, messages);
          }
        }
      };
    }
  });

  // packages/runtime/dist/caches/memory-zone-readthrough-cache.js
  var MemoryZoneReadThroughCache;
  var init_memory_zone_readthrough_cache = __esm({
    "packages/runtime/dist/caches/memory-zone-readthrough-cache.js"() {
      "use strict";
      init_memory_cache();
      init_zone_cache();
      MemoryZoneReadThroughCache = class {
        static {
          __name(this, "MemoryZoneReadThroughCache");
        }
        constructor(name, context) {
          const safeName = `f6726488-fd18-4b7f-9c30-6070565e8042-${name}`;
          this.#name = name;
          this.#memory = new MemoryCache(safeName);
          this.#zone = new ZoneCache(safeName, context);
          this.#context = context;
        }
        #name;
        #memory;
        #zone;
        #context;
        async get(key) {
          const memory = this.#memory.get(key);
          if (memory) {
            return memory;
          }
          const zone = await this.#zone.get(key);
          if (zone) {
            const ttlRemaining = Math.floor((zone.expires - Date.now()) / 1e3);
            if (ttlRemaining > 0) {
              this.#memory.put(key, zone.data, ttlRemaining);
              return zone.data;
            }
          }
        }
        put(key, data, ttlSeconds) {
          this.#memory.put(key, data, ttlSeconds);
          const wrapper = {
            data,
            expires: Date.now() + ttlSeconds * 1e3
          };
          const promise = this.#zone.put(key, wrapper, ttlSeconds).catch((err) => {
            this.#context.log.error(`Error in MemoryZoneReadThroughCache: '${this.#name}'`, err);
          });
          this.#context.waitUntil(promise);
        }
      };
    }
  });

  // packages/runtime/dist/constants.js
  var LEGACY_REQUEST_ID_HEADER, REQUEST_ID_HEADER, BODY_REMOVED_HEADER, RAY_ID_HEADER, X_REAL_IP_HEADER, CF_IP_CITY_HEADER, CF_IP_CONTINENT_HEADER, CF_IP_COUNTRY_HEADER, CF_IP_LONGITUDE_HEADER, CF_IP_LATITUDE_HEADER, CF_IP_REGION_HEADER, CF_REGION_CODE_HEADER, CF_METRO_CODE_HEADER, CF_POSTAL_CODE_HEADER, CF_TIMEZONE_HEADER, ZP_IP_CITY_HEADER, ZP_IP_CONTINENT_HEADER, ZP_IP_COUNTRY_HEADER, ZP_IP_LONGITUDE_HEADER, ZP_IP_LATITUDE_HEADER, TRUE_CLIENT_IP, ZP_ASN_HEADER, ZP_AS_ORG_HEADER, ZP_COLO_HEADER, ZP_POSTAL_CODE_HEADER, ZP_METRO_CODE_HEADER, ZP_REGION_HEADER, ZP_REGION_CODE_HEADER, ZP_TIMEZONE_HEADER, DISPATCH_HEADERS_TO_REMOVE, VENDOR_HEADER_PREFIXES, VENDOR_HEADERS_TO_ALLOW, INTERNAL_HEADERS_TO_REMOVE, METERING_SUBSCRIPTION_CONTEXT_DATA, DYNAMIC_METERS_CONTEXT_DATA, SYSTEM_LOGGER;
  var init_constants = __esm({
    "packages/runtime/dist/constants.js"() {
      "use strict";
      LEGACY_REQUEST_ID_HEADER = "zuplo-request-id";
      REQUEST_ID_HEADER = "zp-rid";
      BODY_REMOVED_HEADER = "zp-body-removed";
      RAY_ID_HEADER = "cf-ray";
      X_REAL_IP_HEADER = "x-real-ip";
      CF_IP_CITY_HEADER = "cf-ipcity";
      CF_IP_CONTINENT_HEADER = "cf-ipcontinent";
      CF_IP_COUNTRY_HEADER = "cf-ipcountry";
      CF_IP_LONGITUDE_HEADER = "cf-iplongitude";
      CF_IP_LATITUDE_HEADER = "cf-iplatitude";
      CF_IP_REGION_HEADER = "cf-region";
      CF_REGION_CODE_HEADER = "cf-region-code";
      CF_METRO_CODE_HEADER = "cf-metro-code";
      CF_POSTAL_CODE_HEADER = "cf-postal-code";
      CF_TIMEZONE_HEADER = "cf-timezone";
      ZP_IP_CITY_HEADER = "zp-ipcity";
      ZP_IP_CONTINENT_HEADER = "zp-ipcontinent";
      ZP_IP_COUNTRY_HEADER = "zp-ipcountry";
      ZP_IP_LONGITUDE_HEADER = "zp-iplongitude";
      ZP_IP_LATITUDE_HEADER = "zp-iplatitude";
      TRUE_CLIENT_IP = "true-client-ip";
      ZP_ASN_HEADER = "zp-asn";
      ZP_AS_ORG_HEADER = "zp-asorg";
      ZP_COLO_HEADER = "zp-colo";
      ZP_POSTAL_CODE_HEADER = "zp-postalcode";
      ZP_METRO_CODE_HEADER = "zp-metrocode";
      ZP_REGION_HEADER = "zp-region";
      ZP_REGION_CODE_HEADER = "zp-regioncode";
      ZP_TIMEZONE_HEADER = "zp-timezone";
      DISPATCH_HEADERS_TO_REMOVE = [
        // These managed transform headers are always removed
        CF_IP_CITY_HEADER,
        CF_IP_CONTINENT_HEADER,
        CF_IP_COUNTRY_HEADER,
        CF_IP_LONGITUDE_HEADER,
        CF_IP_LATITUDE_HEADER,
        // Zuplo Headers, for dispatch to worker communication
        ZP_ASN_HEADER,
        ZP_AS_ORG_HEADER,
        ZP_COLO_HEADER,
        ZP_POSTAL_CODE_HEADER,
        ZP_METRO_CODE_HEADER,
        ZP_REGION_HEADER,
        ZP_REGION_CODE_HEADER,
        ZP_TIMEZONE_HEADER
      ];
      VENDOR_HEADER_PREFIXES = ["zp-", "cf-"];
      VENDOR_HEADERS_TO_ALLOW = [
        REQUEST_ID_HEADER,
        RAY_ID_HEADER,
        BODY_REMOVED_HEADER
      ];
      INTERNAL_HEADERS_TO_REMOVE = [
        "x-b3-sampled",
        "x-b3-spanid",
        "x-b3-traceid",
        "x-envoy-attempt-count",
        "x-envoy-decorator-operation",
        "x-envoy-external-address",
        "x-envoy-peer-metadata",
        "x-envoy-peer-metadata-id",
        "k-proxy-request",
        "fly-client-ip",
        "fly-forwarded-port",
        "fly-forwarded-proto",
        "fly-forwarded-ssl",
        "fly-region",
        "fly-request-id",
        "fly-traceparent",
        "fly-tracestate"
      ];
      METERING_SUBSCRIPTION_CONTEXT_DATA = "zuplo_meters_d7831150-6d8a-416d-b920-4a7bec209a49";
      DYNAMIC_METERS_CONTEXT_DATA = "zuplo_dynamic_meters_0c8cdc26-2514-4756-8adb-474a6e103d91";
      SYSTEM_LOGGER = "system-logger";
    }
  });

  // node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js
  var _globalThis;
  var init_globalThis = __esm({
    "node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js"() {
      _globalThis = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
    }
  });

  // node_modules/@opentelemetry/api/build/esm/platform/browser/index.js
  var init_browser = __esm({
    "node_modules/@opentelemetry/api/build/esm/platform/browser/index.js"() {
      init_globalThis();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/version.js
  var VERSION;
  var init_version = __esm({
    "node_modules/@opentelemetry/api/build/esm/version.js"() {
      VERSION = "1.7.0";
    }
  });

  // node_modules/@opentelemetry/api/build/esm/internal/semver.js
  function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
    var rejectedVersions = /* @__PURE__ */ new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
      return function() {
        return false;
      };
    }
    var ownVersionParsed = {
      major: +myVersionMatch[1],
      minor: +myVersionMatch[2],
      patch: +myVersionMatch[3],
      prerelease: myVersionMatch[4]
    };
    if (ownVersionParsed.prerelease != null) {
      return /* @__PURE__ */ __name(function isExactmatch(globalVersion) {
        return globalVersion === ownVersion;
      }, "isExactmatch");
    }
    function _reject(v) {
      rejectedVersions.add(v);
      return false;
    }
    __name(_reject, "_reject");
    function _accept(v) {
      acceptedVersions.add(v);
      return true;
    }
    __name(_accept, "_accept");
    return /* @__PURE__ */ __name(function isCompatible2(globalVersion) {
      if (acceptedVersions.has(globalVersion)) {
        return true;
      }
      if (rejectedVersions.has(globalVersion)) {
        return false;
      }
      var globalVersionMatch = globalVersion.match(re);
      if (!globalVersionMatch) {
        return _reject(globalVersion);
      }
      var globalVersionParsed = {
        major: +globalVersionMatch[1],
        minor: +globalVersionMatch[2],
        patch: +globalVersionMatch[3],
        prerelease: globalVersionMatch[4]
      };
      if (globalVersionParsed.prerelease != null) {
        return _reject(globalVersion);
      }
      if (ownVersionParsed.major !== globalVersionParsed.major) {
        return _reject(globalVersion);
      }
      if (ownVersionParsed.major === 0) {
        if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
          return _accept(globalVersion);
        }
        return _reject(globalVersion);
      }
      if (ownVersionParsed.minor <= globalVersionParsed.minor) {
        return _accept(globalVersion);
      }
      return _reject(globalVersion);
    }, "isCompatible");
  }
  var re, isCompatible;
  var init_semver = __esm({
    "node_modules/@opentelemetry/api/build/esm/internal/semver.js"() {
      init_version();
      re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
      __name(_makeCompatibilityCheck, "_makeCompatibilityCheck");
      isCompatible = _makeCompatibilityCheck(VERSION);
    }
  });

  // node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
  function registerGlobal(type, instance2, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) {
      allowOverride = false;
    }
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
      version: VERSION
    };
    if (!allowOverride && api[type]) {
      var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
      diag.error(err.stack || err.message);
      return false;
    }
    if (api.version !== VERSION) {
      var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION);
      diag.error(err.stack || err.message);
      return false;
    }
    api[type] = instance2;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION + ".");
    return true;
  }
  function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !isCompatible(globalVersion)) {
      return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
  }
  function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
      delete api[type];
    }
  }
  var major, GLOBAL_OPENTELEMETRY_API_KEY, _global;
  var init_global_utils = __esm({
    "node_modules/@opentelemetry/api/build/esm/internal/global-utils.js"() {
      init_browser();
      init_version();
      init_semver();
      major = VERSION.split(".")[0];
      GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
      _global = _globalThis;
      __name(registerGlobal, "registerGlobal");
      __name(getGlobal, "getGlobal");
      __name(unregisterGlobal, "unregisterGlobal");
    }
  });

  // node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
  function logProxy(funcName, namespace, args) {
    var logger = getGlobal("diag");
    if (!logger) {
      return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
  }
  var __read, __spreadArray, DiagComponentLogger;
  var init_ComponentLogger = __esm({
    "node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js"() {
      init_global_utils();
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      DiagComponentLogger = /** @class */
      function() {
        function DiagComponentLogger2(props) {
          this._namespace = props.namespace || "DiagComponentLogger";
        }
        __name(DiagComponentLogger2, "DiagComponentLogger");
        DiagComponentLogger2.prototype.debug = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return logProxy("debug", this._namespace, args);
        };
        DiagComponentLogger2.prototype.error = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return logProxy("error", this._namespace, args);
        };
        DiagComponentLogger2.prototype.info = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return logProxy("info", this._namespace, args);
        };
        DiagComponentLogger2.prototype.warn = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return logProxy("warn", this._namespace, args);
        };
        DiagComponentLogger2.prototype.verbose = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return logProxy("verbose", this._namespace, args);
        };
        return DiagComponentLogger2;
      }();
      __name(logProxy, "logProxy");
    }
  });

  // node_modules/@opentelemetry/api/build/esm/diag/types.js
  var DiagLogLevel;
  var init_types = __esm({
    "node_modules/@opentelemetry/api/build/esm/diag/types.js"() {
      (function(DiagLogLevel2) {
        DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
        DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
        DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
        DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
        DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
        DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
        DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
      })(DiagLogLevel || (DiagLogLevel = {}));
    }
  });

  // node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
  function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < DiagLogLevel.NONE) {
      maxLevel = DiagLogLevel.NONE;
    } else if (maxLevel > DiagLogLevel.ALL) {
      maxLevel = DiagLogLevel.ALL;
    }
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
      var theFunc = logger[funcName];
      if (typeof theFunc === "function" && maxLevel >= theLevel) {
        return theFunc.bind(logger);
      }
      return function() {
      };
    }
    __name(_filterFunc, "_filterFunc");
    return {
      error: _filterFunc("error", DiagLogLevel.ERROR),
      warn: _filterFunc("warn", DiagLogLevel.WARN),
      info: _filterFunc("info", DiagLogLevel.INFO),
      debug: _filterFunc("debug", DiagLogLevel.DEBUG),
      verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
    };
  }
  var init_logLevelLogger = __esm({
    "node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js"() {
      init_types();
      __name(createLogLevelDiagLogger, "createLogLevelDiagLogger");
    }
  });

  // node_modules/@opentelemetry/api/build/esm/api/diag.js
  var __read2, __spreadArray2, API_NAME, DiagAPI;
  var init_diag = __esm({
    "node_modules/@opentelemetry/api/build/esm/api/diag.js"() {
      init_ComponentLogger();
      init_logLevelLogger();
      init_types();
      init_global_utils();
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      API_NAME = "diag";
      DiagAPI = /** @class */
      function() {
        function DiagAPI2() {
          function _logProxy(funcName) {
            return function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var logger = getGlobal("diag");
              if (!logger)
                return;
              return logger[funcName].apply(logger, __spreadArray2([], __read2(args), false));
            };
          }
          __name(_logProxy, "_logProxy");
          var self2 = this;
          var setLogger = /* @__PURE__ */ __name(function(logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) {
              optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
            }
            if (logger === self2) {
              var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
              self2.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
              return false;
            }
            if (typeof optionsOrLogLevel === "number") {
              optionsOrLogLevel = {
                logLevel: optionsOrLogLevel
              };
            }
            var oldLogger = getGlobal("diag");
            var newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
              var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
              oldLogger.warn("Current logger will be overwritten from " + stack);
              newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return registerGlobal("diag", newLogger, self2, true);
          }, "setLogger");
          self2.setLogger = setLogger;
          self2.disable = function() {
            unregisterGlobal(API_NAME, self2);
          };
          self2.createComponentLogger = function(options) {
            return new DiagComponentLogger(options);
          };
          self2.verbose = _logProxy("verbose");
          self2.debug = _logProxy("debug");
          self2.info = _logProxy("info");
          self2.warn = _logProxy("warn");
          self2.error = _logProxy("error");
        }
        __name(DiagAPI2, "DiagAPI");
        DiagAPI2.instance = function() {
          if (!this._instance) {
            this._instance = new DiagAPI2();
          }
          return this._instance;
        };
        return DiagAPI2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/context/context.js
  function createContextKey(description) {
    return Symbol.for(description);
  }
  var BaseContext, ROOT_CONTEXT;
  var init_context = __esm({
    "node_modules/@opentelemetry/api/build/esm/context/context.js"() {
      __name(createContextKey, "createContextKey");
      BaseContext = /** @class */
      function() {
        function BaseContext2(parentContext) {
          var self2 = this;
          self2._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
          self2.getValue = function(key) {
            return self2._currentContext.get(key);
          };
          self2.setValue = function(key, value) {
            var context = new BaseContext2(self2._currentContext);
            context._currentContext.set(key, value);
            return context;
          };
          self2.deleteValue = function(key) {
            var context = new BaseContext2(self2._currentContext);
            context._currentContext.delete(key);
            return context;
          };
        }
        __name(BaseContext2, "BaseContext");
        return BaseContext2;
      }();
      ROOT_CONTEXT = new BaseContext();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
  var __read3, __spreadArray3, NoopContextManager;
  var init_NoopContextManager = __esm({
    "node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js"() {
      init_context();
      __read3 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spreadArray3 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      NoopContextManager = /** @class */
      function() {
        function NoopContextManager2() {
        }
        __name(NoopContextManager2, "NoopContextManager");
        NoopContextManager2.prototype.active = function() {
          return ROOT_CONTEXT;
        };
        NoopContextManager2.prototype.with = function(_context, fn, thisArg) {
          var args = [];
          for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
          }
          return fn.call.apply(fn, __spreadArray3([thisArg], __read3(args), false));
        };
        NoopContextManager2.prototype.bind = function(_context, target) {
          return target;
        };
        NoopContextManager2.prototype.enable = function() {
          return this;
        };
        NoopContextManager2.prototype.disable = function() {
          return this;
        };
        return NoopContextManager2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/api/context.js
  var __read4, __spreadArray4, API_NAME2, NOOP_CONTEXT_MANAGER, ContextAPI;
  var init_context2 = __esm({
    "node_modules/@opentelemetry/api/build/esm/api/context.js"() {
      init_NoopContextManager();
      init_global_utils();
      init_diag();
      __read4 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spreadArray4 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      API_NAME2 = "context";
      NOOP_CONTEXT_MANAGER = new NoopContextManager();
      ContextAPI = /** @class */
      function() {
        function ContextAPI2() {
        }
        __name(ContextAPI2, "ContextAPI");
        ContextAPI2.getInstance = function() {
          if (!this._instance) {
            this._instance = new ContextAPI2();
          }
          return this._instance;
        };
        ContextAPI2.prototype.setGlobalContextManager = function(contextManager) {
          return registerGlobal(API_NAME2, contextManager, DiagAPI.instance());
        };
        ContextAPI2.prototype.active = function() {
          return this._getContextManager().active();
        };
        ContextAPI2.prototype.with = function(context, fn, thisArg) {
          var _a;
          var args = [];
          for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
          }
          return (_a = this._getContextManager()).with.apply(_a, __spreadArray4([context, fn, thisArg], __read4(args), false));
        };
        ContextAPI2.prototype.bind = function(context, target) {
          return this._getContextManager().bind(context, target);
        };
        ContextAPI2.prototype._getContextManager = function() {
          return getGlobal(API_NAME2) || NOOP_CONTEXT_MANAGER;
        };
        ContextAPI2.prototype.disable = function() {
          this._getContextManager().disable();
          unregisterGlobal(API_NAME2, DiagAPI.instance());
        };
        return ContextAPI2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
  var TraceFlags;
  var init_trace_flags = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js"() {
      (function(TraceFlags2) {
        TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
        TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
      })(TraceFlags || (TraceFlags = {}));
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js
  var INVALID_SPANID, INVALID_TRACEID, INVALID_SPAN_CONTEXT;
  var init_invalid_span_constants = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js"() {
      init_trace_flags();
      INVALID_SPANID = "0000000000000000";
      INVALID_TRACEID = "00000000000000000000000000000000";
      INVALID_SPAN_CONTEXT = {
        traceId: INVALID_TRACEID,
        spanId: INVALID_SPANID,
        traceFlags: TraceFlags.NONE
      };
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
  var NonRecordingSpan;
  var init_NonRecordingSpan = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js"() {
      init_invalid_span_constants();
      NonRecordingSpan = /** @class */
      function() {
        function NonRecordingSpan2(_spanContext) {
          if (_spanContext === void 0) {
            _spanContext = INVALID_SPAN_CONTEXT;
          }
          this._spanContext = _spanContext;
        }
        __name(NonRecordingSpan2, "NonRecordingSpan");
        NonRecordingSpan2.prototype.spanContext = function() {
          return this._spanContext;
        };
        NonRecordingSpan2.prototype.setAttribute = function(_key, _value) {
          return this;
        };
        NonRecordingSpan2.prototype.setAttributes = function(_attributes) {
          return this;
        };
        NonRecordingSpan2.prototype.addEvent = function(_name, _attributes) {
          return this;
        };
        NonRecordingSpan2.prototype.setStatus = function(_status) {
          return this;
        };
        NonRecordingSpan2.prototype.updateName = function(_name) {
          return this;
        };
        NonRecordingSpan2.prototype.end = function(_endTime) {
        };
        NonRecordingSpan2.prototype.isRecording = function() {
          return false;
        };
        NonRecordingSpan2.prototype.recordException = function(_exception, _time) {
        };
        return NonRecordingSpan2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
  function getSpan(context) {
    return context.getValue(SPAN_KEY) || void 0;
  }
  function getActiveSpan() {
    return getSpan(ContextAPI.getInstance().active());
  }
  function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
  }
  function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
  }
  function setSpanContext(context, spanContext) {
    return setSpan(context, new NonRecordingSpan(spanContext));
  }
  function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
  }
  var SPAN_KEY;
  var init_context_utils = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/context-utils.js"() {
      init_context();
      init_NonRecordingSpan();
      init_context2();
      SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
      __name(getSpan, "getSpan");
      __name(getActiveSpan, "getActiveSpan");
      __name(setSpan, "setSpan");
      __name(deleteSpan, "deleteSpan");
      __name(setSpanContext, "setSpanContext");
      __name(getSpanContext, "getSpanContext");
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
  function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
  }
  function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
  }
  function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
  }
  function wrapSpanContext(spanContext) {
    return new NonRecordingSpan(spanContext);
  }
  var VALID_TRACEID_REGEX, VALID_SPANID_REGEX;
  var init_spancontext_utils = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js"() {
      init_invalid_span_constants();
      init_NonRecordingSpan();
      VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
      VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
      __name(isValidTraceId, "isValidTraceId");
      __name(isValidSpanId, "isValidSpanId");
      __name(isSpanContextValid, "isSpanContextValid");
      __name(wrapSpanContext, "wrapSpanContext");
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
  function isSpanContext(spanContext) {
    return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
  }
  var contextApi, NoopTracer;
  var init_NoopTracer = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js"() {
      init_context2();
      init_context_utils();
      init_NonRecordingSpan();
      init_spancontext_utils();
      contextApi = ContextAPI.getInstance();
      NoopTracer = /** @class */
      function() {
        function NoopTracer2() {
        }
        __name(NoopTracer2, "NoopTracer");
        NoopTracer2.prototype.startSpan = function(name, options, context) {
          if (context === void 0) {
            context = contextApi.active();
          }
          var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
          if (root) {
            return new NonRecordingSpan();
          }
          var parentFromContext = context && getSpanContext(context);
          if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
            return new NonRecordingSpan(parentFromContext);
          } else {
            return new NonRecordingSpan();
          }
        };
        NoopTracer2.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
          var opts;
          var ctx;
          var fn;
          if (arguments.length < 2) {
            return;
          } else if (arguments.length === 2) {
            fn = arg2;
          } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
          } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
          }
          var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
          var span = this.startSpan(name, opts, parentContext);
          var contextWithSpanSet = setSpan(parentContext, span);
          return contextApi.with(contextWithSpanSet, fn, void 0, span);
        };
        return NoopTracer2;
      }();
      __name(isSpanContext, "isSpanContext");
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
  var NOOP_TRACER, ProxyTracer;
  var init_ProxyTracer = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js"() {
      init_NoopTracer();
      NOOP_TRACER = new NoopTracer();
      ProxyTracer = /** @class */
      function() {
        function ProxyTracer2(_provider, name, version, options) {
          this._provider = _provider;
          this.name = name;
          this.version = version;
          this.options = options;
        }
        __name(ProxyTracer2, "ProxyTracer");
        ProxyTracer2.prototype.startSpan = function(name, options, context) {
          return this._getTracer().startSpan(name, options, context);
        };
        ProxyTracer2.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
          var tracer = this._getTracer();
          return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
        };
        ProxyTracer2.prototype._getTracer = function() {
          if (this._delegate) {
            return this._delegate;
          }
          var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
          if (!tracer) {
            return NOOP_TRACER;
          }
          this._delegate = tracer;
          return this._delegate;
        };
        return ProxyTracer2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
  var NoopTracerProvider;
  var init_NoopTracerProvider = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js"() {
      init_NoopTracer();
      NoopTracerProvider = /** @class */
      function() {
        function NoopTracerProvider2() {
        }
        __name(NoopTracerProvider2, "NoopTracerProvider");
        NoopTracerProvider2.prototype.getTracer = function(_name, _version, _options) {
          return new NoopTracer();
        };
        return NoopTracerProvider2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
  var NOOP_TRACER_PROVIDER, ProxyTracerProvider;
  var init_ProxyTracerProvider = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js"() {
      init_ProxyTracer();
      init_NoopTracerProvider();
      NOOP_TRACER_PROVIDER = new NoopTracerProvider();
      ProxyTracerProvider = /** @class */
      function() {
        function ProxyTracerProvider2() {
        }
        __name(ProxyTracerProvider2, "ProxyTracerProvider");
        ProxyTracerProvider2.prototype.getTracer = function(name, version, options) {
          var _a;
          return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer(this, name, version, options);
        };
        ProxyTracerProvider2.prototype.getDelegate = function() {
          var _a;
          return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
        };
        ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
          this._delegate = delegate;
        };
        ProxyTracerProvider2.prototype.getDelegateTracer = function(name, version, options) {
          var _a;
          return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
        };
        return ProxyTracerProvider2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace/status.js
  var SpanStatusCode;
  var init_status = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace/status.js"() {
      (function(SpanStatusCode2) {
        SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
        SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
        SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
      })(SpanStatusCode || (SpanStatusCode = {}));
    }
  });

  // node_modules/@opentelemetry/api/build/esm/api/trace.js
  var API_NAME3, TraceAPI;
  var init_trace = __esm({
    "node_modules/@opentelemetry/api/build/esm/api/trace.js"() {
      init_global_utils();
      init_ProxyTracerProvider();
      init_spancontext_utils();
      init_context_utils();
      init_diag();
      API_NAME3 = "trace";
      TraceAPI = /** @class */
      function() {
        function TraceAPI2() {
          this._proxyTracerProvider = new ProxyTracerProvider();
          this.wrapSpanContext = wrapSpanContext;
          this.isSpanContextValid = isSpanContextValid;
          this.deleteSpan = deleteSpan;
          this.getSpan = getSpan;
          this.getActiveSpan = getActiveSpan;
          this.getSpanContext = getSpanContext;
          this.setSpan = setSpan;
          this.setSpanContext = setSpanContext;
        }
        __name(TraceAPI2, "TraceAPI");
        TraceAPI2.getInstance = function() {
          if (!this._instance) {
            this._instance = new TraceAPI2();
          }
          return this._instance;
        };
        TraceAPI2.prototype.setGlobalTracerProvider = function(provider) {
          var success = registerGlobal(API_NAME3, this._proxyTracerProvider, DiagAPI.instance());
          if (success) {
            this._proxyTracerProvider.setDelegate(provider);
          }
          return success;
        };
        TraceAPI2.prototype.getTracerProvider = function() {
          return getGlobal(API_NAME3) || this._proxyTracerProvider;
        };
        TraceAPI2.prototype.getTracer = function(name, version) {
          return this.getTracerProvider().getTracer(name, version);
        };
        TraceAPI2.prototype.disable = function() {
          unregisterGlobal(API_NAME3, DiagAPI.instance());
          this._proxyTracerProvider = new ProxyTracerProvider();
        };
        return TraceAPI2;
      }();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/trace-api.js
  var trace;
  var init_trace_api = __esm({
    "node_modules/@opentelemetry/api/build/esm/trace-api.js"() {
      init_trace();
      trace = TraceAPI.getInstance();
    }
  });

  // node_modules/@opentelemetry/api/build/esm/index.js
  var init_esm = __esm({
    "node_modules/@opentelemetry/api/build/esm/index.js"() {
      init_status();
      init_trace_api();
    }
  });

  // packages/runtime/dist/diagnostics/telemetry.js
  function setTelemetryInitFunction(requestHandlerProxy) {
    globalRequestHandlerProxy = requestHandlerProxy;
  }
  var globalRequestHandlerProxy, proxyHandler;
  var init_telemetry = __esm({
    "packages/runtime/dist/diagnostics/telemetry.js"() {
      "use strict";
      globalRequestHandlerProxy = /* @__PURE__ */ __name((inner) => (request, event) => {
        return inner(request, event);
      }, "globalRequestHandlerProxy");
      __name(setTelemetryInitFunction, "setTelemetryInitFunction");
      proxyHandler = /* @__PURE__ */ __name((wrapped) => {
        return globalRequestHandlerProxy(wrapped);
      }, "proxyHandler");
    }
  });

  // packages/runtime/dist/plugins/plugins.js
  var RuntimePlugin, SystemRuntimePlugin, MeteringPlugin, TelemetryPlugin;
  var init_plugins = __esm({
    "packages/runtime/dist/plugins/plugins.js"() {
      "use strict";
      RuntimePlugin = class {
        static {
          __name(this, "RuntimePlugin");
        }
      };
      SystemRuntimePlugin = class extends RuntimePlugin {
        static {
          __name(this, "SystemRuntimePlugin");
        }
        /**
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async initialize(runtimeInit2) {
          return Promise.resolve();
        }
        /**
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        registerRoutes(router, gateway) {
        }
      };
      MeteringPlugin = class extends SystemRuntimePlugin {
        static {
          __name(this, "MeteringPlugin");
        }
      };
      TelemetryPlugin = class extends RuntimePlugin {
        static {
          __name(this, "TelemetryPlugin");
        }
      };
    }
  });

  // packages/runtime/dist/problem-responses/problem-response-formatter.js
  var InternalProblemResponseFormatter, ProblemResponseFormatter;
  var init_problem_response_formatter = __esm({
    "packages/runtime/dist/problem-responses/problem-response-formatter.js"() {
      "use strict";
      init_errors();
      InternalProblemResponseFormatter = class _InternalProblemResponseFormatter {
        static {
          __name(this, "InternalProblemResponseFormatter");
        }
        static problemResponseFormat = async (problemContext) => {
          const data = problemContext.problem;
          const content = JSON.stringify(data, null, 2);
          return new Response(content, {
            status: problemContext.problem.status,
            statusText: problemContext.statusText,
            headers: {
              ...problemContext.additionalHeaders,
              "content-type": "application/problem+json"
            }
          });
        };
        static setProblemResponseFormat(formatter) {
          if (formatter) {
            _InternalProblemResponseFormatter.problemResponseFormat = (problemDetails, request, context) => {
              try {
                return formatter(problemDetails, request, context);
              } catch (err) {
                throw new RuntimeError(`Error in custom 'problemResponseFormat'`, {
                  cause: err
                });
              }
            };
          }
        }
      };
      ProblemResponseFormatter = class {
        static {
          __name(this, "ProblemResponseFormatter");
        }
        static async format(problemDetails, request, context) {
          return await InternalProblemResponseFormatter.problemResponseFormat(problemDetails, request, context);
        }
      };
    }
  });

  // packages/runtime/dist/utils/freeze.js
  function deepFreeze(object) {
    for (const name in object) {
      const value = object[name];
      if (value && typeof value === "object") {
        deepFreeze(value);
      }
    }
    return Object.freeze(object);
  }
  var init_freeze = __esm({
    "packages/runtime/dist/utils/freeze.js"() {
      "use strict";
      __name(deepFreeze, "deepFreeze");
    }
  });

  // packages/runtime/dist/request.js
  var ZuploRequest;
  var init_request = __esm({
    "packages/runtime/dist/request.js"() {
      "use strict";
      init_freeze();
      ZuploRequest = class _ZuploRequest extends Request {
        static {
          __name(this, "ZuploRequest");
        }
        #query = void 0;
        #params;
        constructor(input, init) {
          super(input, init);
          const params = init?.params;
          if (params) {
            this.#params = params;
          } else if (input instanceof _ZuploRequest) {
            this.#params = input.#params;
          } else {
            this.#params = {};
          }
          const user = init?.user;
          if (user) {
            this.user = user;
          } else if (input instanceof _ZuploRequest) {
            this.user = input.user;
          }
        }
        /**
         * A dictionary of query-string values
         *
         * @example
         * The url `https://example.com?foo=bar` would return
         * the following query object:
         *
         * ```
         * const foo = request.query.foo;
         * ```
         *
         * @readonly
         */
        get query() {
          if (this.#query === void 0) {
            const query = {};
            const searchParams = new URL(this.url).searchParams;
            for (const [key, value] of searchParams.entries()) {
              query[key] = value;
            }
            this.#query = query;
          }
          return deepFreeze(this.#query);
        }
        /**
         * If you use tokens in your route’s URL, they are
         * automatically parsed into properties on the params
         * property of your request.
         *
         * @example
         * The route `/products/:productId/vendors/:vendorId`
         * would include two params:
         *
         * ```
         * const productId = request.params.productId;
         * const vendorId = request.params.vendorId;
         * ```
         * @readonly
         */
        get params() {
          return deepFreeze(this.#params);
        }
        /**
         * An optional object identifying a ‘user’.
         *
         * @remarks
         * If undefined this typically means the request is
         * anonymous. If present, the user object will have
         * a sub property that is a unique identifier for
         * that user. There is also an optional data property
         * that is of any type that typically contains other
         * information about the user. When using JWT tokens
         * you’ll usually find all the claims here.
         *
         * @readonly
         */
        user;
      };
    }
  });

  // packages/runtime/dist/extensions.js
  async function initializeRuntime(runtimeInit2 = () => {
    return Promise.resolve();
  }) {
    if (!isInitialized) {
      await runtimeInit2(extensions);
      runtimeExtensions.value = extensions;
      for (const plugin of plugins) {
        if (plugin instanceof TelemetryPlugin) {
          const { requestHandlerProxy } = plugin.instrument({
            accountName: Environment.instance.build.ACCOUNT_NAME,
            projectName: Environment.instance.build.PROJECT_NAME,
            buildId: Environment.instance.build.BUILD_ID,
            zuploVersion: Environment.instance.build.ZUPLO_VERSION,
            compatibilityDate: Environment.instance.build.COMPATIBILITY_DATE,
            instanceId: Environment.instance.instanceId,
            environmentType: Environment.instance.loggingEnvironmentType,
            environmentStage: Environment.instance.loggingEnvironmentStage,
            deploymentName: Environment.instance.deploymentName
          });
          setTelemetryInitFunction(requestHandlerProxy);
        }
      }
      for (const plugin of plugins) {
        if (plugin instanceof SystemRuntimePlugin) {
          await plugin.initialize(extensions);
        }
      }
      InternalProblemResponseFormatter.setProblemResponseFormat(extensions.problemResponseFormat);
      isInitialized = true;
    }
  }
  var runtimeExtensions, plugins, requestHooks, responseSendingHooks, responseSendingFinalHooks, extensions, invokeOnRequestExtensions, invokeOnResponseSendingExtensions, invokeOnResponseSendingFinalExtensions, isInitialized;
  var init_extensions = __esm({
    "packages/runtime/dist/extensions.js"() {
      "use strict";
      init_esm();
      init_telemetry();
      init_errors();
      init_plugins();
      init_problem_response_formatter();
      init_request();
      init_environment2();
      runtimeExtensions = {};
      plugins = [];
      requestHooks = [];
      responseSendingHooks = [];
      responseSendingFinalHooks = [];
      extensions = {
        addPlugin(plugin) {
          plugins.push(plugin);
        },
        addRequestHook(hook) {
          requestHooks.push(hook);
        },
        addResponseSendingHook(hook) {
          responseSendingHooks.push(hook);
        },
        addResponseSendingFinalHook(hook) {
          responseSendingFinalHooks.push(hook);
        }
      };
      invokeOnRequestExtensions = /* @__PURE__ */ __name(async (request, context) => {
        if (requestHooks.length === 0) {
          return request;
        }
        const tracer = trace.getTracer("extension");
        return tracer.startActiveSpan("hook:onRequest", async (span) => {
          try {
            let latestResult = request;
            for (const hook of requestHooks) {
              const localResult = await tracer.startActiveSpan(hook.name, async (localSpan) => {
                const localResult2 = await hook(latestResult, context);
                if (localResult2 instanceof ZuploRequest || localResult2 instanceof Response) {
                  localSpan.end();
                  return localResult2;
                } else {
                  const error = new ConfigurationError(`Invalid state - the OnRequest hook must return a ZuploRequest or Response. Received ${typeof latestResult}.`);
                  localSpan.end();
                  localSpan.recordException(error);
                  localSpan.setStatus({ code: SpanStatusCode.ERROR });
                  throw error;
                }
              });
              if (localResult instanceof ZuploRequest) {
                latestResult = localResult;
              } else {
                return localResult;
              }
            }
            return latestResult;
          } finally {
            span.end();
          }
        });
      }, "invokeOnRequestExtensions");
      invokeOnResponseSendingExtensions = /* @__PURE__ */ __name(async (response, latestRequest, context) => {
        if (responseSendingHooks.length === 0) {
          return response;
        }
        const tracer = trace.getTracer("extension");
        return tracer.startActiveSpan("hook:onResponseSending", async (span) => {
          try {
            let latestResult = response;
            for (const hook of responseSendingHooks) {
              await tracer.startActiveSpan(hook.name, async (localSpan) => {
                const localResult = await hook(response, latestRequest, context);
                if (localResult instanceof Response) {
                  latestResult = localResult;
                  localSpan.end();
                } else {
                  const error = new ConfigurationError(`Invalid state - the OnResponseSending hook must return a Response. Received ${typeof latestResult}.`);
                  localSpan.recordException(error);
                  localSpan.setStatus({ code: SpanStatusCode.ERROR });
                  localSpan.end();
                  throw error;
                }
              });
            }
            return latestResult;
          } finally {
            span.end();
          }
        });
      }, "invokeOnResponseSendingExtensions");
      invokeOnResponseSendingFinalExtensions = /* @__PURE__ */ __name(async (response, latestRequest, context) => {
        if (responseSendingFinalHooks.length === 0) {
          return;
        }
        const tracer = trace.getTracer("extension");
        return tracer.startActiveSpan("hook:onResponseSendingFinal", async (span) => {
          try {
            for (const hook of responseSendingFinalHooks) {
              await tracer.startActiveSpan(hook.name, async (localSpan) => {
                try {
                  await hook(response, latestRequest, context);
                } catch (err) {
                  localSpan.recordException(err);
                  localSpan.setStatus({ code: SpanStatusCode.ERROR });
                  localSpan.end();
                  throw err;
                }
                localSpan.end();
              });
            }
          } finally {
            span.end();
          }
        });
      }, "invokeOnResponseSendingFinalExtensions");
      isInitialized = false;
      __name(initializeRuntime, "initializeRuntime");
    }
  });

  // packages/runtime/dist/serializer.js
  function serialize(payload, contentType) {
    if (payload === null) {
      return void 0;
    }
    if (contentType && typeof payload === "string") {
      return payload;
    }
    if (typeof payload === "object" && contentType?.startsWith(ContentTypes.Form)) {
      const form = new URLSearchParams(payload);
      return form.toString();
    }
    if (typeof payload === "object" && contentType?.startsWith(ContentTypes.Json) || !contentType) {
      const json = JSON.stringify(payload);
      return json;
    }
    return payload;
  }
  var ContentTypes;
  var init_serializer = __esm({
    "packages/runtime/dist/serializer.js"() {
      "use strict";
      ContentTypes = {
        Json: "application/json",
        Form: "application/x-www-form-urlencoded"
      };
      __name(serialize, "serialize");
    }
  });

  // packages/runtime/dist/utils/system-routes.js
  function isSystemRoute(url) {
    const isDevPortalUrl = Gateway.instance.runtimeSettings.developerPortal.enabled && url.pathname.startsWith(Gateway.instance.runtimeSettings.developerPortal.sitePathname);
    return isDevPortalUrl || url.pathname.startsWith("/__zuplo/") || url.pathname.startsWith("/__/zuplo/");
  }
  var init_system_routes = __esm({
    "packages/runtime/dist/utils/system-routes.js"() {
      "use strict";
      init_gateway();
      __name(isSystemRoute, "isSystemRoute");
    }
  });

  // packages/runtime/dist/pipeline.js
  function resultToResponse(result) {
    if (result instanceof Response) {
      return result;
    }
    if (typeof result === "undefined") {
      return new Response();
    }
    return new Response(serialize(result), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  var Pipeline;
  var init_pipeline = __esm({
    "packages/runtime/dist/pipeline.js"() {
      "use strict";
      init_esm();
      init_context3();
      init_extensions();
      init_serializer();
      init_environment2();
      init_system_routes();
      Pipeline = class {
        static {
          __name(this, "Pipeline");
        }
        constructor(options) {
          this.execute = this.#toZuploPipeline(options);
        }
        execute;
        #errorWrappedHandler = (handler2, gateway) => {
          return async (request, context) => {
            const tracer = trace.getTracer("pipeline");
            return tracer.startActiveSpan(`handler:${context.route.handler.export}`, async (span) => {
              try {
                const response = await handler2(request, context);
                return response;
              } catch (err) {
                context.log.error("Error executing request handler.", err);
                const response = gateway.errorHandler(request, context, err);
                span.setStatus({ code: SpanStatusCode.ERROR });
                return response;
              } finally {
                span.end();
              }
            });
          };
        };
        #toZuploPipeline = ({ processors, gateway, handler: handler2 }) => {
          return async (request, context) => {
            const localPipeline = [...processors];
            const nextPipe = /* @__PURE__ */ __name(async (innerRequest) => {
              const next = localPipeline.pop();
              if (!next) {
                const wrapped = this.#errorWrappedHandler(async (req) => {
                  const innerResult = await handler2(req, context);
                  return resultToResponse(innerResult);
                }, gateway);
                const response2 = await wrapped(innerRequest, context);
                return response2;
              }
              return next(request, context, gateway, nextPipe);
            }, "nextPipe");
            const result = await nextPipe(request);
            const response = result;
            const url = new URL(request.url);
            if (isSystemRoute(url) && Environment.instance.build.COMPATIBILITY_FLAGS.doNotRunHooksOnSystemRoutes) {
              return response;
            }
            const responseSending = new ResponseSendingEvent(request, response);
            context.dispatchEvent(responseSending);
            const contextExtension = ZuploContextExtensions.getContextExtensions(context);
            const latestRequest = contextExtension.latestRequest;
            let newResponse;
            try {
              newResponse = await responseSending.mutableResponse;
            } catch (err) {
              context.log.error(err);
              return gateway.errorHandler(request, context, err);
            }
            try {
              newResponse = await contextExtension.onResponseSending(newResponse, latestRequest, context);
            } catch (err) {
              context.log.error(`Error invoking 'context.onResponseSending' hook: '${err.message}'`, err);
              return gateway.errorHandler(request, context, err);
            }
            try {
              newResponse = await invokeOnResponseSendingExtensions(newResponse, latestRequest, context);
            } catch (err) {
              context.log.error(`Error invoking 'context.onResponseSending' hook: '${err.message}'`, err);
              return gateway.errorHandler(request, context, err);
            }
            context.dispatchEvent(new ResponseSentEvent(request, newResponse));
            try {
              await contextExtension.onResponseSendingFinal(response, latestRequest, context);
            } catch (err) {
              context.log.error(`Error invoking 'runtime.onResponseSending' hook: '${err.message}'`, err);
              throw err;
            }
            try {
              await invokeOnResponseSendingFinalExtensions(response, latestRequest, context);
            } catch (err) {
              context.log.error(`Error invoking 'runtime.onResponseSending' hook: '${err.message}'`, err);
              throw err;
            }
            return newResponse;
          };
        };
      };
      __name(resultToResponse, "resultToResponse");
    }
  });

  // packages/runtime/dist/metrics/v1/metrics-plugin.js
  var MetricsPlugin;
  var init_metrics_plugin = __esm({
    "packages/runtime/dist/metrics/v1/metrics-plugin.js"() {
      "use strict";
      init_plugins();
      MetricsPlugin = class extends RuntimePlugin {
        static {
          __name(this, "MetricsPlugin");
        }
      };
    }
  });

  // packages/runtime/dist/system-log-map.js
  var SystemLogMap;
  var init_system_log_map = __esm({
    "packages/runtime/dist/system-log-map.js"() {
      "use strict";
      init_errors();
      SystemLogMap = class _SystemLogMap {
        static {
          __name(this, "SystemLogMap");
        }
        static #map = /* @__PURE__ */ new WeakMap();
        static getLogger(context) {
          const logger = _SystemLogMap.#map.get(context);
          if (!logger) {
            const message2 = `No system logger found for context with requestId '${context.requestId}'`;
            console.error(message2);
            throw new SystemError(message2);
          }
          return logger;
        }
        static addLogger(context, logger) {
          _SystemLogMap.#map.set(context, logger);
        }
      };
    }
  });

  // packages/runtime/dist/utils/batch-dispatch.js
  var BatchDispatch;
  var init_batch_dispatch = __esm({
    "packages/runtime/dist/utils/batch-dispatch.js"() {
      "use strict";
      BatchDispatch = class {
        static {
          __name(this, "BatchDispatch");
        }
        constructor(dispatcherName, msDelay, dispatchFunction3, systemLogger) {
          this.#dispatcherName = dispatcherName;
          this.#msDelay = msDelay;
          this.#dispatchFunction = dispatchFunction3;
          this.#systemLogger = systemLogger ?? console;
        }
        #waitingPromise = void 0;
        #dispatcherName;
        #systemLogger;
        #dispatchFunction;
        #queue = [];
        #msDelay;
        enqueue = (payload) => {
          this.#queue.push(payload);
          if (!this.#waitingPromise) {
            this.#waitingPromise = new Promise((res) => {
              setTimeout(() => {
                if (this.#queue.length > 0) {
                  const entries = [...this.#queue];
                  this.#queue.length = 0;
                  this.#waitingPromise = void 0;
                  this.#dispatchFunction(entries).catch((error) => {
                    this.#systemLogger.error(`Uncaught error in BatchDispatcher named '${this.#dispatcherName}'}`, error.message, error.stack);
                  }).finally(() => {
                    res();
                  });
                }
              }, this.#msDelay);
            });
          }
        };
        waitUntilFlushed = async () => {
          if (this.#waitingPromise) {
            return this.#waitingPromise;
          }
        };
      };
    }
  });

  // packages/runtime/dist/metrics/v1/transports/ellie-metrics.js
  var EllieMetricsTransport;
  var init_ellie_metrics = __esm({
    "packages/runtime/dist/metrics/v1/transports/ellie-metrics.js"() {
      "use strict";
      init_internals();
      init_system_log_map();
      init_batch_dispatch();
      init_environment2();
      EllieMetricsTransport = class {
        static {
          __name(this, "EllieMetricsTransport");
        }
        #context;
        #batcher;
        #loggingId;
        constructor(context) {
          this.#loggingId = Environment.instance.loggingId;
          this.#context = context;
          this.#batcher = new BatchDispatch("ellie-metrics-transport", 10, this.dispatchFunction, SystemLogMap.getLogger(context));
        }
        pushMetrics(entry, context) {
          if (this.#loggingId === void 0) {
            return;
          }
          this.#batcher.enqueue(entry);
          context.waitUntil(this.#batcher.waitUntilFlushed());
        }
        dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          let url;
          const { loggingId, remoteLogURL, deploymentName } = Environment.instance;
          const transformedEntries = entries.map((entry) => {
            const copy = Object.assign({}, entry);
            delete copy.requestContentLength;
            delete copy.responseContentLength;
            return copy;
          });
          if (loggingId && deploymentName) {
            url = `${remoteLogURL}/v1-alpha/metrics?loggingId=${encodeURI(loggingId)}&deploymentName=${encodeURI(deploymentName)}`;
          }
          if (url) {
            const result = await internals_default.fetch(url, {
              method: "POST",
              body: JSON.stringify(transformedEntries),
              headers: {
                "content-type": "application/json",
                "zp-dn": Environment.instance.deploymentName ?? "unknown",
                "user-agent": Environment.instance.systemUserAgent
              }
            });
            if (!result.ok) {
              const body = await result.text();
              SystemLogMap.getLogger(this.#context).error(`Metrics POST responded ${result.status}: ${result.statusText}`, body);
            }
          }
        };
      };
    }
  });

  // packages/runtime/dist/router/system-route-configuration.js
  var SystemRouteConfiguration, systemNoVersion;
  var init_system_route_configuration = __esm({
    "packages/runtime/dist/router/system-route-configuration.js"() {
      "use strict";
      SystemRouteConfiguration = class {
        static {
          __name(this, "SystemRouteConfiguration");
        }
        constructor({ label, path, methods, systemRouteName, corsPolicy = "none" }) {
          this.label = label;
          this.path = path;
          this.methods = methods;
          this.corsPolicy = corsPolicy;
          this.version = systemNoVersion.name;
          this.handler = { export: "SYSTEM_IGNORED", module: "SYSTEM_IGNORED" };
          this.systemRouteName = systemRouteName;
        }
        label;
        path;
        methods;
        handler;
        corsPolicy;
        version;
        policies;
        /**
         * Used to alias the system route's path in logs to something more
         * user-friendly.
         */
        systemRouteName;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        raw() {
          return {};
        }
      };
      systemNoVersion = {
        name: "__system-no-version",
        pathPrefix: ""
      };
    }
  });

  // packages/runtime/dist/processors/metrics-processor.js
  var metricsProcessor;
  var init_metrics_processor = __esm({
    "packages/runtime/dist/processors/metrics-processor.js"() {
      "use strict";
      init_constants();
      init_context3();
      init_extensions();
      init_metrics_plugin();
      init_ellie_metrics();
      init_system_route_configuration();
      init_environment2();
      metricsProcessor = /* @__PURE__ */ __name(async (request, context, gateway, next) => {
        const timestamp2 = /* @__PURE__ */ new Date();
        const start = Date.now();
        const res = await next(request);
        const rayId = request.headers.get(RAY_ID_HEADER) ?? void 0;
        const clientIp = request.headers.get(TRUE_CLIENT_IP) ?? void 0;
        const props = context.incomingRequestProperties;
        let systemRouteName = void 0;
        if (context.route instanceof SystemRouteConfiguration) {
          systemRouteName = context.route.systemRouteName;
        }
        const latestRequest = ZuploContextExtensions.getContextExtensions(context).latestRequest;
        const metricsData = {
          timestamp: timestamp2,
          statusCode: res.status,
          durationMs: Date.now() - start,
          requestContentLength: request.headers.get("content-length") ? Number(request.headers.get("content-length")) : void 0,
          responseContentLength: res.headers.get("content-length") ? Number(res.headers.get("content-length")) : void 0,
          routePath: context.route?.path ?? "SYSTEM_OR_NOT_FOUND",
          systemRouteName,
          requestId: context.requestId,
          // best to use the original method for metrics, as the request may have been modified
          method: request.method,
          asn: props.asn,
          asOrganization: props.asOrganization,
          colo: props.colo,
          continent: props.continent,
          country: props.country,
          city: props.city,
          latitude: props.latitude,
          longitude: props.longitude,
          rayId,
          instanceId: Environment.instance.instanceId,
          // but here, we need the latest to capture the user
          userSub: latestRequest.user?.sub,
          clientIp
        };
        const transports = [];
        transports.push(new EllieMetricsTransport(context));
        plugins.forEach((plugin) => {
          if (plugin instanceof MetricsPlugin) {
            const transport = plugin.getTransport();
            transports.push(transport);
          }
        });
        transports.forEach((transport) => {
          transport.pushMetrics(metricsData, context);
        });
        return res;
      }, "metricsProcessor");
    }
  });

  // packages/runtime/dist/router/interfaces.custom.js
  var SystemRouteName;
  var init_interfaces_custom = __esm({
    "packages/runtime/dist/router/interfaces.custom.js"() {
      "use strict";
      (function(SystemRouteName2) {
        SystemRouteName2["Build"] = "build-data";
        SystemRouteName2["CorsPreflight"] = "cors-preflight";
        SystemRouteName2["DeveloperPortal"] = "developer-portal";
        SystemRouteName2["DeveloperPortalLegacy"] = "developer-portal-legacy";
        SystemRouteName2["StripePlugin"] = "stripe-plugin";
        SystemRouteName2["EmptyGatewayCatchall"] = "empty-gateway-catchall";
        SystemRouteName2["Ping"] = "ping";
        SystemRouteName2["UnmatchedPath"] = "unmatched-path";
      })(SystemRouteName || (SystemRouteName = {}));
    }
  });

  // packages/runtime/dist/router/interfaces.generated.js
  var init_interfaces_generated = __esm({
    "packages/runtime/dist/router/interfaces.generated.js"() {
      "use strict";
    }
  });

  // packages/runtime/dist/router/interfaces.js
  var init_interfaces = __esm({
    "packages/runtime/dist/router/interfaces.js"() {
      "use strict";
      init_interfaces_custom();
      init_interfaces_generated();
    }
  });

  // packages/runtime/dist/built-in-routes/build-route.js
  var registerBuildRoute;
  var init_build_route = __esm({
    "packages/runtime/dist/built-in-routes/build-route.js"() {
      "use strict";
      init_index_worker();
      init_pipeline();
      init_metrics_processor();
      init_interfaces();
      init_system_route_configuration();
      init_system_log_map();
      init_environment2();
      registerBuildRoute = /* @__PURE__ */ __name((router, gateway) => {
        const buildRouteHandler = /* @__PURE__ */ __name(async (request, context) => {
          const url = new URL(request.url);
          const hostname = url.hostname.toLowerCase();
          if (!hostname.endsWith(".zuplo.app") && !hostname.endsWith(".zuplo.dev") && !hostname.endsWith(".fly.dev") && !hostname.endsWith("zuplotest.com") && hostname !== "localhost") {
            return HttpProblems.notFound(request, context);
          }
          const rawBuild = Environment.instance.build;
          const buildData = {
            buildId: rawBuild.BUILD_ID,
            zuploVersion: rawBuild.ZUPLO_VERSION,
            compatibilityDate: rawBuild.COMPATIBILITY_DATE,
            apiVersion: rawBuild.API_VERSION,
            gitSha: rawBuild.GIT_SHA,
            timestamp: rawBuild.TIMESTAMP,
            isProduction: rawBuild.IS_PRODUCTION
          };
          const qs = request.url.toString().split("?");
          if (qs.length > 0) {
            const params = new URLSearchParams(qs[1]);
            if (params.get("system_log") === "true") {
              SystemLogMap.getLogger(context).error("Test System Log", buildData);
            }
          }
          return new Response(JSON.stringify(buildData, null, 2), {
            status: 200,
            headers: { "content-type": "application/json" }
          });
        }, "buildRouteHandler");
        const zPipe = new Pipeline({
          processors: [metricsProcessor],
          handler: buildRouteHandler,
          gateway
        });
        const buildRouteConfiguration = new SystemRouteConfiguration({
          label: "SYSTEM_BUILD_ROUTE",
          methods: ["GET"],
          path: "/__zuplo/build",
          systemRouteName: SystemRouteName.Build
        });
        router.addRoute(buildRouteConfiguration, zPipe.execute);
      }, "registerBuildRoute");
    }
  });

  // packages/runtime/dist/http-status.js
  var HttpStatusCode, HTTP_STATUS_TITLES;
  var init_http_status = __esm({
    "packages/runtime/dist/http-status.js"() {
      "use strict";
      (function(HttpStatusCode2) {
        HttpStatusCode2[HttpStatusCode2["CONTINUE"] = 100] = "CONTINUE";
        HttpStatusCode2[HttpStatusCode2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
        HttpStatusCode2[HttpStatusCode2["PROCESSING"] = 102] = "PROCESSING";
        HttpStatusCode2[HttpStatusCode2["EARLY_HINTS"] = 103] = "EARLY_HINTS";
        HttpStatusCode2[HttpStatusCode2["OK"] = 200] = "OK";
        HttpStatusCode2[HttpStatusCode2["CREATED"] = 201] = "CREATED";
        HttpStatusCode2[HttpStatusCode2["ACCEPTED"] = 202] = "ACCEPTED";
        HttpStatusCode2[HttpStatusCode2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
        HttpStatusCode2[HttpStatusCode2["NO_CONTENT"] = 204] = "NO_CONTENT";
        HttpStatusCode2[HttpStatusCode2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
        HttpStatusCode2[HttpStatusCode2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
        HttpStatusCode2[HttpStatusCode2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
        HttpStatusCode2[HttpStatusCode2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
        HttpStatusCode2[HttpStatusCode2["IM_USED"] = 226] = "IM_USED";
        HttpStatusCode2[HttpStatusCode2["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
        HttpStatusCode2[HttpStatusCode2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
        HttpStatusCode2[HttpStatusCode2["FOUND"] = 302] = "FOUND";
        HttpStatusCode2[HttpStatusCode2["SEE_OTHER"] = 303] = "SEE_OTHER";
        HttpStatusCode2[HttpStatusCode2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
        HttpStatusCode2[HttpStatusCode2["USE_PROXY"] = 305] = "USE_PROXY";
        HttpStatusCode2[HttpStatusCode2["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
        HttpStatusCode2[HttpStatusCode2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
        HttpStatusCode2[HttpStatusCode2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
        HttpStatusCode2[HttpStatusCode2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
        HttpStatusCode2[HttpStatusCode2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
        HttpStatusCode2[HttpStatusCode2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
        HttpStatusCode2[HttpStatusCode2["FORBIDDEN"] = 403] = "FORBIDDEN";
        HttpStatusCode2[HttpStatusCode2["NOT_FOUND"] = 404] = "NOT_FOUND";
        HttpStatusCode2[HttpStatusCode2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
        HttpStatusCode2[HttpStatusCode2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
        HttpStatusCode2[HttpStatusCode2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
        HttpStatusCode2[HttpStatusCode2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
        HttpStatusCode2[HttpStatusCode2["CONFLICT"] = 409] = "CONFLICT";
        HttpStatusCode2[HttpStatusCode2["GONE"] = 410] = "GONE";
        HttpStatusCode2[HttpStatusCode2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
        HttpStatusCode2[HttpStatusCode2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
        HttpStatusCode2[HttpStatusCode2["CONTENT_TOO_LARGE"] = 413] = "CONTENT_TOO_LARGE";
        HttpStatusCode2[HttpStatusCode2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
        HttpStatusCode2[HttpStatusCode2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
        HttpStatusCode2[HttpStatusCode2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
        HttpStatusCode2[HttpStatusCode2["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
        HttpStatusCode2[HttpStatusCode2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
        HttpStatusCode2[HttpStatusCode2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
        HttpStatusCode2[HttpStatusCode2["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
        HttpStatusCode2[HttpStatusCode2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
        HttpStatusCode2[HttpStatusCode2["UNPROCESSABLE_CONTENT"] = 422] = "UNPROCESSABLE_CONTENT";
        HttpStatusCode2[HttpStatusCode2["LOCKED"] = 423] = "LOCKED";
        HttpStatusCode2[HttpStatusCode2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
        HttpStatusCode2[HttpStatusCode2["TOO_EARLY"] = 425] = "TOO_EARLY";
        HttpStatusCode2[HttpStatusCode2["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
        HttpStatusCode2[HttpStatusCode2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
        HttpStatusCode2[HttpStatusCode2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
        HttpStatusCode2[HttpStatusCode2["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
        HttpStatusCode2[HttpStatusCode2["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
        HttpStatusCode2[HttpStatusCode2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
        HttpStatusCode2[HttpStatusCode2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
        HttpStatusCode2[HttpStatusCode2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
        HttpStatusCode2[HttpStatusCode2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
        HttpStatusCode2[HttpStatusCode2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
        HttpStatusCode2[HttpStatusCode2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
        HttpStatusCode2[HttpStatusCode2["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
        HttpStatusCode2[HttpStatusCode2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
        HttpStatusCode2[HttpStatusCode2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
        HttpStatusCode2[HttpStatusCode2["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
        HttpStatusCode2[HttpStatusCode2["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
      })(HttpStatusCode || (HttpStatusCode = {}));
      HTTP_STATUS_TITLES = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        306: "Switch Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Content Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a teapot",
        421: "Misdirected Request",
        422: "Unprocessable Content",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        510: "Not Extended",
        511: "Network Authentication Required"
      };
    }
  });

  // packages/runtime/dist/statuses.js
  var httpStatuses, statuses_default;
  var init_statuses = __esm({
    "packages/runtime/dist/statuses.js"() {
      "use strict";
      httpStatuses = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
      };
      statuses_default = httpStatuses;
    }
  });

  // packages/runtime/dist/problem-responses/http-problems.js
  function instance(request) {
    const url = new URL(request.url);
    return `${url.pathname}`;
  }
  function trace2(request, context) {
    const traceObject = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      requestId: context.requestId,
      buildId: Environment.instance.build.BUILD_ID
    };
    const ray = request.headers.get(RAY_ID_HEADER);
    if (ray) {
      traceObject.rayId = ray;
    }
    return traceObject;
  }
  var merge, HttpProblemsBase, HttpProblems;
  var init_http_problems = __esm({
    "packages/runtime/dist/problem-responses/http-problems.js"() {
      "use strict";
      init_constants();
      init_http_status();
      init_statuses();
      init_environment2();
      init_problem_response_formatter();
      __name(instance, "instance");
      __name(trace2, "trace");
      merge = /* @__PURE__ */ __name((staticDetails, request, context, overrides, additionalHeaders) => ({
        problem: {
          type: staticDetails.type,
          title: staticDetails.title,
          status: staticDetails.status,
          detail: staticDetails.detail,
          instance: instance(request),
          trace: trace2(request, context),
          ...overrides
        },
        additionalHeaders,
        statusText: statuses_default[staticDetails.status]
      }), "merge");
      HttpProblemsBase = class {
        static {
          __name(this, "HttpProblemsBase");
        }
        /**
         * Creates a Response in the standard format from a problem detail
         * @param details - The details of the problem
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @returns A HTTP Response promise
         */
        static format = (details, request, context) => {
          if ("problem" in details) {
            return ProblemResponseFormatter.format(details, request, context);
          } else {
            return ProblemResponseFormatter.format({ problem: details }, request, context);
          }
        };
        /**
         * Creates a problem from the status code
         */
        static getProblemFromStatus(status, problem) {
          return {
            ...{
              type: `https://httpproblems.com/http-status/${status}`,
              status,
              title: HTTP_STATUS_TITLES[status]
            },
            ...problem
          };
        }
      };
      HttpProblems = class extends HttpProblemsBase {
        static {
          __name(this, "HttpProblems");
        }
        static #buildResponse(status, request, context, overrides, additionalHeaders) {
          const prd = merge(this.getProblemFromStatus(status), request, context, overrides, additionalHeaders);
          return ProblemResponseFormatter.format(prd, request, context);
        }
        /**
         * The server has received the request headers and the client should proceed to send the request body
         * (in the case of a request for which a body needs to be sent; for example, a POST request).
         * Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient.
         * To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request
         * and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static continue = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.OK, request, context, overrides, additionalHeaders);
        /**
         * The requester has asked the server to switch protocols and the server has agreed to do so.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static switchingProtocols = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.SWITCHING_PROTOCOLS, request, context, overrides, additionalHeaders);
        /**
         * A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.
         * @deprecated — This status code is deprecated and shouldn't be sent any more. Clients may still accept it, but simply ignore them.
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static processing = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PROCESSING, request, context, overrides, additionalHeaders);
        /**
         * This response may be sent by a server while it is still preparing a
         * response, with hints about the resources that the server is expecting
         * the final response will link. This allows a browser to start preloading
         * resources even before the server has prepared and sent that final response.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static earlyHints = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.EARLY_HINTS, request, context, overrides, additionalHeaders);
        /**
         * Standard response for successful HTTP requests.
         * The actual response will depend on the request method used.
         * In a GET request, the response will contain an entity corresponding to the requested resource.
         * In a POST request, the response will contain an entity describing or containing the result of the action.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static ok = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.OK, request, context, overrides, additionalHeaders);
        /**
         * The request has been fulfilled, resulting in the creation of a new resource.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static created = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.CREATED, request, context, overrides, additionalHeaders);
        /**
         * The request has been accepted for processing, but the processing has not been completed.
         * The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static accepted = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.ACCEPTED, request, context, overrides, additionalHeaders);
        /**
         * SINCE HTTP/1.1
         * The server is a transforming proxy that received a 200 OK from its origin,
         * but is returning a modified version of the origin's response.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static nonAuthoritativeInformation = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NON_AUTHORITATIVE_INFORMATION, request, context, overrides, additionalHeaders);
        /**
         * The server successfully processed the request and is not returning any content.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static noContent = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NO_CONTENT, request, context, overrides, additionalHeaders);
        /**
         * The server successfully processed the request, but is not returning any content.
         * Unlike a 204 response, this response requires that the requester reset the document view.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static resetContent = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.RESET_CONTENT, request, context, overrides, additionalHeaders);
        /**
         * The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
         * The range header is used by HTTP clients to enable resuming of interrupted downloads,
         * or split a download into multiple simultaneous streams.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static partialContent = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PARTIAL_CONTENT, request, context, overrides, additionalHeaders);
        /**
         * The message body that follows is an XML message and can contain a number of separate response codes,
         * depending on how many sub-requests were made.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static multiStatus = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.MULTI_STATUS, request, context, overrides, additionalHeaders);
        /**
         * The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response,
         * and are not being included again.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static alreadyReported = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.ALREADY_REPORTED, request, context, overrides, additionalHeaders);
        /**
         * The server has fulfilled a request for the resource,
         * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static imUsed = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.IM_USED, request, context, overrides, additionalHeaders);
        /**
         * Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).
         * For example, this code could be used to present multiple video format options,
         * to list files with different filename extensions, or to suggest word-sense disambiguation.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static multipleChoices = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.MULTIPLE_CHOICES, request, context, overrides, additionalHeaders);
        /**
         * This and all future requests should be directed to the given URI.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static movedPermanently = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.MOVED_PERMANENTLY, request, context, overrides, additionalHeaders);
        /**
         * This is an example of industry practice contradicting the standard.
         * The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
         * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302
         * with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307
         * to distinguish between the two behaviours. However, some Web applications and frameworks
         * use the 302 status code as if it were the 303.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static found = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.FOUND, request, context, overrides, additionalHeaders);
        /**
         * SINCE HTTP/1.1
         * The response to the request can be found under another URI using a GET method.
         * When received in response to a POST (or PUT/DELETE), the client should presume that
         * the server has received the data and should issue a redirect with a separate GET message.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static seeOther = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.SEE_OTHER, request, context, overrides, additionalHeaders);
        /**
         * Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
         * In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static notModified = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NOT_MODIFIED, request, context, overrides, additionalHeaders);
        /**
         * SINCE HTTP/1.1
         * The requested resource is available only through a proxy, the address for which is provided in the response.
         * Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static useProxy = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.USE_PROXY, request, context, overrides, additionalHeaders);
        /**
         * No longer used. Originally meant "Subsequent requests should use the specified proxy."
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         * @deprecated No longer used
         */
        static switchProxy = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.SWITCH_PROXY, request, context, overrides, additionalHeaders);
        /**
         * SINCE HTTP/1.1
         * In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
         * In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request.
         * For example, a POST request should be repeated using another POST request.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static temporaryRedirect = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.TEMPORARY_REDIRECT, request, context, overrides, additionalHeaders);
        /**
         * The request and all future requests should be repeated using another URI.
         * 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
         * So, for example, submitting a form to a permanently redirected resource may continue smoothly.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static permanentRedirect = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PERMANENT_REDIRECT, request, context, overrides, additionalHeaders);
        /**
         * The server cannot or will not process the request due to an apparent client error
         * (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static badRequest = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.BAD_REQUEST, request, context, overrides, additionalHeaders);
        /**
         * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
         * been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the
         * requested resource. See Basic access authentication and Digest access authentication. 401 semantically means
         * "unauthenticated",i.e. the user does not have the necessary credentials.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static unauthorized = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.UNAUTHORIZED, request, context, overrides, additionalHeaders);
        /**
         * Reserved for future use. The original intention was that this code might be used as part of some form of digital
         * cash or micro payment scheme, but that has not happened, and this code is not usually used.
         * Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static paymentRequired = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PAYMENT_REQUIRED, request, context, overrides, additionalHeaders);
        /**
         * The request was valid, but the server is refusing action.
         * The user might not have the necessary permissions for a resource.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static forbidden = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.FORBIDDEN, request, context, overrides, additionalHeaders);
        /**
         * The requested resource could not be found but may be available in the future.
         * Subsequent requests by the client are permissible.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static notFound = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NOT_FOUND, request, context, overrides, additionalHeaders);
        /**
         * A request method is not supported for the requested resource;
         * for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static methodNotAllowed = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.METHOD_NOT_ALLOWED, request, context, overrides, additionalHeaders);
        /**
         * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static notAcceptable = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NOT_ACCEPTABLE, request, context, overrides, additionalHeaders);
        /**
         * The client must first authenticate itself with the proxy.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static proxyAuthenticationRequired = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED, request, context, overrides, additionalHeaders);
        /**
         * The server timed out waiting for the request.
         * According to HTTP specifications:
         * "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static requestTimeout = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.REQUEST_TIMEOUT, request, context, overrides, additionalHeaders);
        /**
         * Indicates that the request could not be processed because of conflict in the request,
         * such as an edit conflict between multiple simultaneous updates.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static conflict = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.CONFLICT, request, context, overrides, additionalHeaders);
        /**
         * Indicates that the resource requested is no longer available and will not be available again.
         * This should be used when a resource has been intentionally removed and the resource should be purged.
         * Upon receiving a 410 status code, the client should not request the resource in the future.
         * Clients such as search engines should remove the resource from their indices.
         * Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static gone = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.GONE, request, context, overrides, additionalHeaders);
        /**
         * The request did not specify the length of its content, which is required by the requested resource.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static lengthRequired = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.LENGTH_REQUIRED, request, context, overrides, additionalHeaders);
        /**
         * The server does not meet one of the preconditions that the requester put on the request.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static preconditionFailed = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PRECONDITION_FAILED, request, context, overrides, additionalHeaders);
        /**
         * The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static contentTooLarge = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.CONTENT_TOO_LARGE, request, context, overrides, additionalHeaders);
        /**
         * The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request,
         * in which case it should be converted to a POST request.
         * Called "Request-URI Too Long" previously.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static uriTooLong = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.URI_TOO_LONG, request, context, overrides, additionalHeaders);
        /**
         * The request entity has a media type which the server or resource does not support.
         * For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static unsupportedMediaType = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE, request, context, overrides, additionalHeaders);
        /**
         * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
         * For example, if the client asked for a part of the file that lies beyond the end of the file.
         * Called "Requested Range Not Satisfiable" previously.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static rangeNotSatisfiable = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.RANGE_NOT_SATISFIABLE, request, context, overrides, additionalHeaders);
        /**
         * The server cannot meet the requirements of the Expect request-header field.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static expectationFailed = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.EXPECTATION_FAILED, request, context, overrides, additionalHeaders);
        /**
         * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol,
         * and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by
         * teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static imATeapot = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.I_AM_A_TEAPOT, request, context, overrides, additionalHeaders);
        /**
         * The request was directed at a server that is not able to produce a response (for example because a connection reuse).
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static misdirectedRequest = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.MISDIRECTED_REQUEST, request, context, overrides, additionalHeaders);
        /**
         * The request was well-formed but was unable to be followed due to semantic errors.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static unprocessableContent = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.UNPROCESSABLE_CONTENT, request, context, overrides, additionalHeaders);
        /**
         * The resource that is being accessed is locked.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static locked = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.LOCKED, request, context, overrides, additionalHeaders);
        /**
         * The request failed due to failure of a previous request (e.g., a PROPPATCH).
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static failedDependency = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.FAILED_DEPENDENCY, request, context, overrides, additionalHeaders);
        /**
         * The server is unwilling to risk processing a request that might be
         * replayed, which creates the potential for a replay attack.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static tooEarly = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.TOO_EARLY, request, context, overrides, additionalHeaders);
        /**
         * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static upgradeRequired = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.UPGRADE_REQUIRED, request, context, overrides, additionalHeaders);
        /**
         * The origin server requires the request to be conditional.
         * Intended to prevent "the 'lost update' problem, where a client
         * GETs a resource's state, modifies it, and PUTs it back to the server,
         * when meanwhile a third party has modified the state on the server, leading to a conflict."
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static preconditionRequired = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.PRECONDITION_REQUIRED, request, context, overrides, additionalHeaders);
        /**
         * The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static tooManyRequests = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.TOO_MANY_REQUESTS, request, context, overrides, additionalHeaders);
        /**
         * The server is unwilling to process the request because either an individual header field,
         * or all the header fields collectively, are too large.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static requestHeaderFieldsTooLarge = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, request, context, overrides, additionalHeaders);
        /**
         * A server operator has received a legal demand to deny access to a resource or to a set of resources
         * that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static unavailableForLegalReasons = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, request, context, overrides, additionalHeaders);
        /**
         * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static internalServerError = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, request, context, overrides, additionalHeaders);
        /**
         * The server either does not recognize the request method, or it lacks the ability to fulfill the request.
         * Usually this implies future availability (e.g., a new feature of a web-service API).
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static notImplemented = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NOT_IMPLEMENTED, request, context, overrides, additionalHeaders);
        /**
         * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static badGateway = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.BAD_GATEWAY, request, context, overrides, additionalHeaders);
        /**
         * The server is currently unavailable (because it is overloaded or down for maintenance).
         * Generally, this is a temporary state.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static serviceUnavailable = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.SERVICE_UNAVAILABLE, request, context, overrides, additionalHeaders);
        /**
         * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static gatewayTimeout = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.GATEWAY_TIMEOUT, request, context, overrides, additionalHeaders);
        /**
         * The server does not support the HTTP protocol version used in the request
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static httpVersionNotSupported = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED, request, context, overrides, additionalHeaders);
        /**
         * Transparent content negotiation for the request results in a circular reference.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static variantAlsoNegotiates = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.VARIANT_ALSO_NEGOTIATES, request, context, overrides, additionalHeaders);
        /**
         * The server is unable to store the representation needed to complete the request.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static insufficientStorage = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.INSUFFICIENT_STORAGE, request, context, overrides, additionalHeaders);
        /**
         * The server detected an infinite loop while processing the request.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static loopDetected = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.LOOP_DETECTED, request, context, overrides, additionalHeaders);
        /**
         * Further extensions to the request are required for the server to fulfill it.
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static notExtended = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NOT_EXTENDED, request, context, overrides, additionalHeaders);
        /**
         * The client needs to authenticate to gain network access.
         * Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used
         * to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).
         *
         * @param request - The ZuploRequest object
         * @param context - The ZuploContext object
         * @param overrides - Overrides to the problem
         * @param additionalHeaders - Additional headers to send in the outgoing response
         * @returns A HTTP response promise
         */
        static networkAuthenticationRequired = (request, context, overrides, additionalHeaders) => this.#buildResponse(HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED, request, context, overrides, additionalHeaders);
      };
    }
  });

  // packages/runtime/dist/utils/types.js
  function toString(value) {
    return toStringProto.call(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNonEmptyString(value) {
    return isString(value) && value !== "";
  }
  function isRegexp(value) {
    return toString(value) === "[object RegExp]";
  }
  function getOwnEnumerableKeys(object) {
    return [
      ...Object.keys(object),
      ...Object.getOwnPropertySymbols(object).filter((key) => propertyIsEnumerable.call(object, key))
    ];
  }
  function isObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj) && !(obj instanceof RegExp) && !(obj instanceof Date);
  }
  function isNumber(obj) {
    return typeof obj === "number" && !isNaN(obj);
  }
  function isBoolean(obj) {
    return obj === true || obj === false;
  }
  function isUndefined(obj) {
    return typeof obj === "undefined";
  }
  function isUndefinedOrNull(obj) {
    return isUndefined(obj) || obj === null;
  }
  function isErrorLike(value) {
    return !!value && typeof value === "object" && "name" in value && "message" in value && "stack" in value;
  }
  var toStringProto, propertyIsEnumerable;
  var init_types2 = __esm({
    "packages/runtime/dist/utils/types.js"() {
      "use strict";
      ({ toString: toStringProto } = Object.prototype);
      ({ propertyIsEnumerable } = Object.prototype);
      __name(toString, "toString");
      __name(isString, "isString");
      __name(isNonEmptyString, "isNonEmptyString");
      __name(isRegexp, "isRegexp");
      __name(getOwnEnumerableKeys, "getOwnEnumerableKeys");
      __name(isObject, "isObject");
      __name(isNumber, "isNumber");
      __name(isBoolean, "isBoolean");
      __name(isUndefined, "isUndefined");
      __name(isUndefinedOrNull, "isUndefinedOrNull");
      __name(isErrorLike, "isErrorLike");
    }
  });

  // packages/runtime/dist/utils/options-parsing.js
  function statusCodesStringToNumberArray(input) {
    if (Array.isArray(input) && !input.some((v) => typeof v !== "number")) {
      return input;
    }
    if (typeof input !== "string") {
      throw new Error("Input must be a string or an array of numbers");
    }
    if (!/^\d+(?:-\d+)?(?:,\s*\d+(?:-\d+)?)*$/.test(input)) {
      throw new Error("Malformed input string");
    }
    const cached = resultCache.get(input);
    if (cached) {
      return cached;
    }
    const numbers = input.split(",");
    const result = [];
    for (const number of numbers) {
      const range = number.split("-");
      if (range.length === 2) {
        const start = parseInt(range[0], 10);
        const end = parseInt(range[1], 10);
        for (let i = start; i <= end; i++) {
          result.push(i);
        }
      } else {
        result.push(parseInt(number, 10));
      }
    }
    resultCache.set(input, result);
    return result;
  }
  function getValueFromRequestUser(user, path, optionPropertyName) {
    if (!path.startsWith(".")) {
      throw new ConfigurationError(`Invalid ${optionPropertyName} - must start with '.' - '${path}' does not`);
    }
    const props = path.split(".").splice(1);
    let value = user;
    props.forEach((prop) => {
      if (value === void 0) {
        throw new RuntimeError(`Error applying ${optionPropertyName} '${path}', reading '${prop}'`);
      }
      value = value[prop];
    });
    return `${value}`;
  }
  function parseValueToStringArray(val2) {
    if (Array.isArray(val2)) {
      const includesNonString = val2.includes((v) => typeof v !== "string");
      if (includesNonString) {
        throw new ConfigurationError(`Received an array that contains non-string values.`);
      }
      return val2;
    }
    if (isString(val2)) {
      if (val2.includes(",")) {
        const items = val2.split(",").map((v) => v.trim()).filter((v) => v !== "," && v !== "");
        return items;
      }
      return [val2];
    }
    throw new ConfigurationError(`Expected type of string, received type '${typeof val2}'`);
  }
  var resultCache;
  var init_options_parsing = __esm({
    "packages/runtime/dist/utils/options-parsing.js"() {
      "use strict";
      init_errors();
      init_types2();
      resultCache = /* @__PURE__ */ new Map();
      __name(statusCodesStringToNumberArray, "statusCodesStringToNumberArray");
      __name(getValueFromRequestUser, "getValueFromRequestUser");
      __name(parseValueToStringArray, "parseValueToStringArray");
    }
  });

  // packages/runtime/dist/utils/cors.js
  function parseCorsPolicies(rawCustomPolicies) {
    if (rawCustomPolicies === void 0 || rawCustomPolicies === null) {
      return [];
    }
    if (!Array.isArray(rawCustomPolicies)) {
      throw new ConfigurationError(`Invalid corsPolicy configuration. Expected an array of objects, received '${typeof rawCustomPolicies}'`);
    }
    const parsedPolicies = rawCustomPolicies.map((rawPolicy) => {
      if (!isObject(rawPolicy)) {
        throw new ConfigurationError(`Invalid custom cors policy is set. Expected an object, received '${typeof rawPolicy}'`);
      }
      if (!isNonEmptyString(rawPolicy.name)) {
        throw new ConfigurationError(`Value of 'name' on custom cors policies must be a non-empty string.`);
      }
      if (rawPolicy.maxAge !== void 0 && !isNumber(rawPolicy.maxAge)) {
        throw new ConfigurationError(`Value of 'maxAge' on custom cors policies must be a non-empty string. Received type '${typeof rawPolicy.maxAge}'`);
      }
      if (rawPolicy.allowCredentials !== void 0 && !isBoolean(rawPolicy.allowCredentials)) {
        throw new ConfigurationError(`Value of 'allowCredentials' on custom cors policies must be a boolean or not be set. If using an environment variable, check that it is set correctly.`);
      }
      const allowedHeaders = parseOptionalProperty(rawPolicy, "allowedHeaders");
      const allowedMethods = parseOptionalProperty(rawPolicy, "allowedMethods");
      const exposeHeaders = parseOptionalProperty(rawPolicy, "exposeHeaders");
      let allowedOrigins;
      try {
        allowedOrigins = parseValueToStringArray(rawPolicy.allowedOrigins);
      } catch (err) {
        throw new ConfigurationError(`Value of 'allowedOrigins' on custom cors policies is invalid. ${err.message} If using an environment variable, check that it is set correctly.`);
      }
      const parsed = {
        name: rawPolicy.name,
        allowCredentials: typeof rawPolicy.allowCredentials === "boolean" ? String(rawPolicy.allowCredentials) : void 0,
        allowedOrigins,
        allowedHeaders: allowedHeaders ? allowedHeaders.join(", ") : void 0,
        allowedMethods: allowedMethods ? allowedMethods.join(", ") : void 0,
        exposeHeaders: exposeHeaders ? exposeHeaders.join(", ") : void 0,
        maxAge: typeof rawPolicy.maxAge === "number" ? rawPolicy.maxAge.toString() : void 0
      };
      return parsed;
    });
    return parsedPolicies;
  }
  function parseOptionalProperty(rawPolicy, prop) {
    let val2;
    if (rawPolicy[prop] !== void 0) {
      try {
        val2 = parseValueToStringArray(rawPolicy[prop]);
      } catch (err) {
        throw new ConfigurationError(`Value of '${prop}' on custom cors policies is invalid. ${err.message} If using an environment variable, check that it is set correctly.`);
      }
    }
    return val2;
  }
  var findMatchingOrigin, generateCorsHeaders;
  var init_cors = __esm({
    "packages/runtime/dist/utils/cors.js"() {
      "use strict";
      init_errors();
      init_options_parsing();
      init_types2();
      __name(parseCorsPolicies, "parseCorsPolicies");
      __name(parseOptionalProperty, "parseOptionalProperty");
      findMatchingOrigin = /* @__PURE__ */ __name((allowedOrigins, incomingOrigin) => {
        if (incomingOrigin === null) {
          return;
        }
        const hasWildcard = allowedOrigins.find((ao) => ao === "*");
        if (hasWildcard) {
          return incomingOrigin;
        }
        const originLowered = allowedOrigins.map((s) => s.trim().toLowerCase());
        const lowerOrigin = incomingOrigin.toLowerCase();
        const matchingDomain = originLowered.find((s) => s === lowerOrigin);
        return matchingDomain;
      }, "findMatchingOrigin");
      generateCorsHeaders = /* @__PURE__ */ __name((corsPolicy, actualAllowedOrigin) => {
        const headers = {
          "access-control-allow-origin": actualAllowedOrigin
        };
        if (corsPolicy.allowedHeaders) {
          headers["access-control-allow-headers"] = corsPolicy.allowedHeaders;
        }
        if (corsPolicy.allowedMethods) {
          headers["access-control-allow-methods"] = corsPolicy.allowedMethods;
        }
        if (corsPolicy.exposeHeaders) {
          headers["access-control-expose-headers"] = corsPolicy.exposeHeaders;
        }
        const allowCredentials = corsPolicy.allowCredentials;
        if (allowCredentials) {
          headers["access-control-allow-credentials"] = allowCredentials;
        }
        const maxAge = corsPolicy.maxAge?.toString() ?? void 0;
        if (maxAge) {
          headers["access-control-max-age"] = maxAge;
        }
        return headers;
      }, "generateCorsHeaders");
    }
  });

  // packages/runtime/dist/built-in-routes/cors-route.js
  var registerCorsRoute, validateAndBuildResponseHeaders;
  var init_cors_route = __esm({
    "packages/runtime/dist/built-in-routes/cors-route.js"() {
      "use strict";
      init_errors();
      init_pipeline();
      init_http_problems();
      init_metrics_processor();
      init_interfaces();
      init_system_route_configuration();
      init_cors();
      registerCorsRoute = /* @__PURE__ */ __name((router, gateway) => {
        const customPolicies = gateway.routeData.corsPolicies;
        const optionsHandler = /* @__PURE__ */ __name(async (request, context) => {
          const path = new URL(request.url.toString()).pathname;
          const requestedMethod = request.headers.get("access-control-request-method");
          const requestedHeaders = request.headers.get("access-control-request-headers");
          const requestedOrigin = request.headers.get("origin");
          if (requestedOrigin === null || requestedMethod === null) {
            return HttpProblems.badRequest(request, context, {
              detail: `Expect headers origin and access-control-request-method`
            });
          }
          const routeMatch = router.lookup(requestedMethod, path);
          if (!routeMatch) {
            return HttpProblems.notFound(request, context);
          }
          const routeConfig = routeMatch.routeConfiguration;
          const corsResult = validateAndBuildResponseHeaders(requestedMethod, requestedHeaders, requestedOrigin, routeConfig, customPolicies);
          if (corsResult.isValid) {
            const response = new Response(void 0, {
              status: 200,
              statusText: "OK",
              headers: corsResult.headers
            });
            return response;
          }
          if (corsResult.error) {
            context.log.warn(corsResult.error);
          }
          return HttpProblems.notFound(request, context);
        }, "optionsHandler");
        const zPipe = new Pipeline({
          processors: [metricsProcessor],
          handler: optionsHandler,
          gateway
        });
        const corsRouteConfiguration = new SystemRouteConfiguration({
          label: "SYSTEM_CORS_ROUTE",
          methods: ["OPTIONS"],
          path: "/(.*)",
          systemRouteName: SystemRouteName.CorsPreflight
        });
        router.addRoute(corsRouteConfiguration, zPipe.execute);
      }, "registerCorsRoute");
      validateAndBuildResponseHeaders = /* @__PURE__ */ __name((requestedMethod, requestedHeaders, requestedOrigin, route, customPolicies) => {
        const invalidResponse = { isValid: false, headers: {} };
        if (route.corsPolicy === "anything-goes") {
          const anythingGoes = {
            "access-control-allow-origin": requestedOrigin,
            "access-control-allow-methods": requestedMethod,
            "access-control-allow-headers": requestedHeaders ?? "*",
            "access-control-expose-headers": "*",
            "access-control-allow-credentials": "true",
            "access-control-max-age": "600"
          };
          return {
            isValid: true,
            headers: anythingGoes
          };
        }
        if (route.corsPolicy === "none") {
          return {
            ...invalidResponse,
            error: `No CORS policy set for the route '${route.pathPattern}'`
          };
        }
        const matchingPolicy = customPolicies?.find((pol) => pol.name === route.corsPolicy);
        if (!matchingPolicy) {
          throw new ConfigurationError(`Invalid Configuration - corsPolicy '${route.corsPolicy}' not found in *.oas.json 'corsPolicies' section.`);
        }
        const matchingOrigin = findMatchingOrigin(matchingPolicy.allowedOrigins, requestedOrigin);
        if (!matchingOrigin) {
          return {
            ...invalidResponse,
            error: `The CORS policy '${matchingPolicy.name}' does not allow the origin '${requestedOrigin}'`
          };
        }
        const newHeaders = generateCorsHeaders(matchingPolicy, matchingOrigin);
        return {
          isValid: true,
          headers: newHeaders
        };
      }, "validateAndBuildResponseHeaders");
    }
  });

  // packages/runtime/dist/built-in-routes/no-routes.js
  var registerNoRoutes;
  var init_no_routes = __esm({
    "packages/runtime/dist/built-in-routes/no-routes.js"() {
      "use strict";
      init_pipeline();
      init_metrics_processor();
      init_interfaces();
      init_system_route_configuration();
      registerNoRoutes = /* @__PURE__ */ __name((router, gateway) => {
        const noRoutesHandler = /* @__PURE__ */ __name(async () => {
          return new Response("You have no routes. Add a route in routes.oas.json to get started", { status: 200 });
        }, "noRoutesHandler");
        const zPipe = new Pipeline({
          processors: [metricsProcessor],
          handler: noRoutesHandler,
          gateway
        });
        const noRoutesConfiguration = new SystemRouteConfiguration({
          label: "SYSTEM_NO_ROUTES",
          methods: [
            "CONNECT",
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT",
            "TRACE"
          ],
          path: "/(.*)",
          systemRouteName: SystemRouteName.EmptyGatewayCatchall
        });
        router.addRoute(noRoutesConfiguration, zPipe.execute);
      }, "registerNoRoutes");
    }
  });

  // packages/runtime/dist/built-in-routes/not-found-route.js
  var notFoundRouteConfiguration, registerNotMatchedHandler;
  var init_not_found_route = __esm({
    "packages/runtime/dist/built-in-routes/not-found-route.js"() {
      "use strict";
      init_context3();
      init_extensions();
      init_pipeline();
      init_http_problems();
      init_metrics_processor();
      init_interfaces();
      init_system_route_configuration();
      notFoundRouteConfiguration = new SystemRouteConfiguration({
        label: "SYSTEM_NOT_FOUND_ROUTE",
        methods: [
          "CONNECT",
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
          "TRACE"
        ],
        path: "/(.*)",
        systemRouteName: SystemRouteName.UnmatchedPath
      });
      registerNotMatchedHandler = /* @__PURE__ */ __name((router, gateway) => {
        const notFoundHandler = /* @__PURE__ */ __name(async (request, context) => {
          const customNfh = runtimeExtensions.value?.notFoundHandler;
          if (customNfh) {
            const ext = ZuploContextExtensions.getContextExtensions(context);
            return customNfh(request, context, {
              routesMatchedByPathOnly: ext.pathOnlyMatches ?? []
            });
          }
          return HttpProblems.notFound(request, context);
        }, "notFoundHandler");
        const zPipe = new Pipeline({
          processors: [metricsProcessor],
          handler: notFoundHandler,
          gateway
        });
        router.addRoute(notFoundRouteConfiguration, zPipe.execute);
      }, "registerNotMatchedHandler");
    }
  });

  // packages/runtime/dist/processors/cors-processor.js
  var CORS_HEADERS, stripCorsHeaders, corsProcessor, getCorsPolicy, getCorsHeaders;
  var init_cors_processor = __esm({
    "packages/runtime/dist/processors/cors-processor.js"() {
      "use strict";
      init_errors();
      init_cors();
      CORS_HEADERS = [
        "access-control-allow-origin",
        "access-control-allow-headers",
        "access-control-expose-headers",
        "access-control-allow-credentials",
        "access-control-max-age"
      ];
      stripCorsHeaders = /* @__PURE__ */ __name((headers) => {
        CORS_HEADERS.forEach((h) => headers.delete(h));
      }, "stripCorsHeaders");
      corsProcessor = /* @__PURE__ */ __name(async (request, context, gateway, next) => {
        const route = context.route;
        if (!route.corsPolicy || route.corsPolicy === "none") {
          const response2 = await next(request);
          const headers2 = new Headers(response2.headers);
          stripCorsHeaders(headers2);
          return new Response(response2.body, {
            status: response2.status,
            statusText: response2.statusText,
            headers: headers2,
            webSocket: response2.webSocket
          });
        }
        const response = await next(request);
        if (response instanceof Response === false) {
          throw new SystemError(`The CorsProcessor is in the wrong place in the pipeline. It should only receive HttpResponse type but got '${typeof response}'`);
        }
        const corsPolicy = getCorsPolicy(route, gateway.routeData.corsPolicies);
        const corsHeaders = getCorsHeaders(request, corsPolicy);
        const headers = new Headers(response.headers);
        stripCorsHeaders(headers);
        Object.entries(corsHeaders).forEach(([key, value]) => {
          headers.set(key, value);
        });
        const newResponse = new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
          webSocket: response.webSocket
        });
        return newResponse;
      }, "corsProcessor");
      getCorsPolicy = /* @__PURE__ */ __name((route, policies) => {
        if (route.corsPolicy === "anything-goes") {
          const anythingGoes = {
            name: "anything-goes",
            allowedHeaders: "*",
            allowedOrigins: ["*"],
            allowedMethods: route.methods.join(", "),
            exposeHeaders: "*",
            allowCredentials: "true",
            maxAge: "600"
          };
          return anythingGoes;
        }
        const corsPolicy = policies?.find((p) => p.name === route.corsPolicy);
        if (corsPolicy === void 0) {
          throw new ConfigurationError(`Invalid Configuration - no corsPolicy '${route.corsPolicy}' found in *.oas.json`);
        }
        return corsPolicy;
      }, "getCorsPolicy");
      getCorsHeaders = /* @__PURE__ */ __name((request, policy) => {
        const matchingOrigin = findMatchingOrigin(policy.allowedOrigins, request.headers.get("origin"));
        if (!matchingOrigin) {
          return {};
        }
        const newHeaders = generateCorsHeaders(policy, matchingOrigin);
        return newHeaders;
      }, "getCorsHeaders");
    }
  });

  // packages/runtime/dist/built-in-routes/ping-route.js
  var registerPingRoute;
  var init_ping_route = __esm({
    "packages/runtime/dist/built-in-routes/ping-route.js"() {
      "use strict";
      init_pipeline();
      init_cors_processor();
      init_interfaces();
      init_system_route_configuration();
      registerPingRoute = /* @__PURE__ */ __name((router, gateway) => {
        const pingRouteHandler = /* @__PURE__ */ __name(async () => {
          return new Response(null, { status: 200 });
        }, "pingRouteHandler");
        const zPipe = new Pipeline({
          processors: [corsProcessor],
          handler: pingRouteHandler,
          gateway
        });
        const pingRouteConfiguration = new SystemRouteConfiguration({
          corsPolicy: "anything-goes",
          label: "SYSTEM_PING_ROUTE",
          methods: ["GET"],
          path: "/__zuplo/ping",
          systemRouteName: SystemRouteName.Ping
        });
        router.addRoute(pingRouteConfiguration, zPipe.execute);
      }, "registerPingRoute");
    }
  });

  // packages/runtime/dist/diagnostics/attributes.js
  var SemanticAttributes;
  var init_attributes = __esm({
    "packages/runtime/dist/diagnostics/attributes.js"() {
      "use strict";
      SemanticAttributes = {
        RoutePathPattern: "zuplo.route.path_pattern",
        RouteOperationId: "zuplo.route.operation_id",
        RouteTrace: "zuplo.route.trace",
        RouteSystem: "zuplo.route.system",
        SystemTrace: "zuplo.system",
        PolicyName: "zuplo.policy.name",
        PolicyType: "zuplo.policy.type",
        ZuploBuildId: "zuplo.build.id",
        ZuploBuildVersion: "zuplo.build.version",
        ZuploBuildCompatibilityDate: "zuplo.build.compatibility_date",
        ZuploEnvironmentType: "zuplo.environment_type"
      };
    }
  });

  // packages/runtime/dist/policies.js
  var PolicyBase, InboundPolicy, OutboundPolicy;
  var init_policies = __esm({
    "packages/runtime/dist/policies.js"() {
      "use strict";
      init_errors();
      init_types2();
      PolicyBase = class {
        static {
          __name(this, "PolicyBase");
        }
        // TODO: Change this to use NoInfer<TOptions> when we move to use typescript 5.4
        // to improve type checking when using internal policies
        options;
        policyName;
        policyType;
        /**
         * @internal
         * @param options - The configuration options for the policy
         * @param policyName - The name set on the policy in the configuration
         */
        constructor(options, policyName) {
          if (!isString(policyName)) {
            throw new RuntimeError(`The name of a policy must be a string. Received '${policyName}' of type '${typeof policyName}'`);
          }
          this.options = options;
          this.policyName = policyName;
          this.policyType = Object.getPrototypeOf(this).constructor.name;
        }
      };
      InboundPolicy = class extends PolicyBase {
        static {
          __name(this, "InboundPolicy");
        }
      };
      OutboundPolicy = class extends PolicyBase {
        static {
          __name(this, "OutboundPolicy");
        }
      };
    }
  });

  // packages/runtime/dist/processors/policy-processor.js
  function getInboundPolicyInstances(routeOrPolicyNames, policies) {
    let policyNames;
    let routePath;
    if (Array.isArray(routeOrPolicyNames)) {
      policyNames = routeOrPolicyNames;
    } else {
      policyNames = routeOrPolicyNames.policies?.inbound ?? [];
      routePath = routeOrPolicyNames.path;
    }
    const nonCachedPolicies = policyNames.filter((p) => !inboundPolicyInstances.has(p));
    nonCachedPolicies.forEach((name) => {
      const policy = policies?.find((p) => p.name === name);
      if (!policy) {
        throw new ConfigurationError(`Invalid state - no Policy with the name '${name}' ${routePath && `on route '${routePath}'`} was found in the policies configuration (check case).`);
      }
      if (typeof policy.handler?.module !== "object") {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${routePath}' (typeof policy '${typeof policy.handler?.module}')`);
      }
      const policyOrHandler = policy.handler?.module[policy.handler.export];
      if (typeof policyOrHandler !== "function") {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${routePath}' (typeof module '${typeof policyOrHandler}')`);
      }
      let innerPolicy;
      if (typeof policyOrHandler !== "function") {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${routePath}' (typeof module '${typeof policyOrHandler}')`);
      }
      if (policyOrHandler.prototype instanceof InboundPolicy) {
        innerPolicy = new policyOrHandler(policy.handler.options, policy.name);
      } else if (typeof policyOrHandler === "function") {
        innerPolicy = new InboundFunctionOnlyPolicy(policyOrHandler, policy.handler.options, policy.name);
      } else {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${routePath}' (typeof policy '${typeof policyOrHandler}')`);
      }
      if (typeof innerPolicy.handler !== "function") {
        throw new ConfigurationError(`Invalid state - invalid handler on policy '${name}' on route '${routePath}' (typeof handler '${typeof innerPolicy.handler}')`);
      }
      inboundPolicyInstances.set(policy.name, innerPolicy);
    });
    return policyNames.map((p) => {
      const instance2 = inboundPolicyInstances.get(p);
      if (instance2 === void 0) {
        throw new RuntimeError("Internal error. Policy not found in cache.");
      }
      return instance2;
    });
  }
  function getOutboundPolicyInstances(route, policies) {
    const policyNames = route.policies?.outbound ?? [];
    const nonCachedPolicies = policyNames.filter((p) => !outputPolicyInstances.has(p));
    nonCachedPolicies.forEach((name) => {
      const policy = policies?.find((p) => p.name === name);
      if (!policy) {
        throw new ConfigurationError(`Invalid state - no Policy with the name '${name}' on route '${route.path}' was found in the policies configuration (check case).`);
      }
      if (typeof policy.handler?.module !== "object") {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${route.path}' (typeof policy '${typeof policy.handler?.module}')`);
      }
      const policyOrHandler = policy.handler?.module[policy.handler.export];
      let innerPolicy;
      if (typeof policyOrHandler !== "function") {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${route.path}' (typeof module '${typeof policyOrHandler}')`);
      }
      if (policyOrHandler.prototype instanceof OutboundPolicy) {
        innerPolicy = new policyOrHandler(policy.handler.options ?? {}, policy.name);
      } else if (typeof policyOrHandler === "function") {
        innerPolicy = new OutboundFunctionOnlyPolicy(policyOrHandler, policy.handler.options ?? {}, policy.name);
      } else {
        throw new ConfigurationError(`Invalid state - invalid policy '${name}' on route '${route.path}' (typeof policy '${typeof policyOrHandler}')`);
      }
      if (typeof innerPolicy.handler !== "function") {
        throw new ConfigurationError(`Invalid state - invalid handler on policy '${name}' on route '${route.path}'`);
      }
      outputPolicyInstances.set(policy.name, innerPolicy);
    });
    return policyNames.map((p) => {
      const instance2 = outputPolicyInstances.get(p);
      if (instance2 === void 0) {
        throw new RuntimeError("Internal error. Policy not found in cache.");
      }
      return instance2;
    });
  }
  function createInternalPolicyProcessor({ inboundPolicies = [], outboundPolicies = [] }) {
    const policyProcessor2 = /* @__PURE__ */ __name(async (request, context, gateway, next) => executePolicyProcessor({
      request,
      context,
      inboundPolicies,
      outboundPolicies,
      gateway,
      next
    }), "policyProcessor");
    return policyProcessor2;
  }
  async function executePolicyProcessor({ request, context, inboundPolicies, outboundPolicies, gateway, next }) {
    const inboundStackedHandler = toStackedInboundHandler(inboundPolicies);
    try {
      const result = await inboundStackedHandler(request, context);
      if (result instanceof Response) {
        return result;
      }
      const response = await next(result);
      const outboundStackedHandler = toStackedOutboundHandler(outboundPolicies);
      let outboundResponse;
      if (Environment.instance.build.COMPATIBILITY_FLAGS.runOutboundPoliciesOnHandlerOnAllStatuses) {
        outboundResponse = outboundStackedHandler(response, request, context);
      } else {
        outboundResponse = response.ok ? outboundStackedHandler(response, request, context) : response;
      }
      return outboundResponse;
    } catch (err) {
      context.log.error(err);
      return gateway.errorHandler(request, context, err);
    }
  }
  var InboundFunctionOnlyPolicy, OutboundFunctionOnlyPolicy, inboundPolicyInstances, outputPolicyInstances, toStackedInboundHandler, toStackedOutboundHandler, policyProcessor;
  var init_policy_processor = __esm({
    "packages/runtime/dist/processors/policy-processor.js"() {
      "use strict";
      init_esm();
      init_context3();
      init_attributes();
      init_errors();
      init_policies();
      init_request();
      init_environment2();
      InboundFunctionOnlyPolicy = class extends InboundPolicy {
        static {
          __name(this, "InboundFunctionOnlyPolicy");
        }
        #innerHandler;
        constructor(innerHandler, options, policyName) {
          super(options, policyName);
          this.policyType = innerHandler.name;
          this.#innerHandler = innerHandler;
        }
        handler(request, context) {
          return this.#innerHandler(request, context, this.options, this.policyName);
        }
      };
      OutboundFunctionOnlyPolicy = class extends OutboundPolicy {
        static {
          __name(this, "OutboundFunctionOnlyPolicy");
        }
        #innerHandler;
        constructor(innerHandler, options, policyName) {
          super(options, policyName);
          this.policyType = innerHandler.name;
          this.#innerHandler = innerHandler;
        }
        handler(response, request, context) {
          return this.#innerHandler(response, request, context, this.options, this.policyName);
        }
      };
      inboundPolicyInstances = /* @__PURE__ */ new Map();
      __name(getInboundPolicyInstances, "getInboundPolicyInstances");
      outputPolicyInstances = /* @__PURE__ */ new Map();
      __name(getOutboundPolicyInstances, "getOutboundPolicyInstances");
      toStackedInboundHandler = /* @__PURE__ */ __name((policies) => {
        return async (request, context) => {
          const ext = ZuploContextExtensions.getContextExtensions(context);
          const tracer = trace.getTracer("pipeline");
          return await tracer.startActiveSpan("policies:inbound", async (span) => {
            try {
              const localPolicies = [...policies];
              let currentRequest = request;
              while (localPolicies.length > 0) {
                const nextPolicy = localPolicies.shift();
                if (!nextPolicy) {
                  return currentRequest;
                }
                const policyResult = await tracer.startActiveSpan(`policy:${nextPolicy.policyName}`, async (localSpan) => {
                  const policyResult2 = await nextPolicy.handler(currentRequest, context);
                  if (policyResult2 instanceof Request || policyResult2 instanceof ZuploRequest || policyResult2 instanceof Response) {
                    localSpan.end();
                    return policyResult2;
                  } else {
                    const error = new ConfigurationError(`Invalid state - invalid handler on policy '${nextPolicy.policyName}' on route '${context.route.path}. The result of an inbound policy must be a Response or Request.`);
                    localSpan.end();
                    localSpan.setStatus({ code: SpanStatusCode.ERROR });
                    localSpan.recordException(error);
                    throw error;
                  }
                });
                if (policyResult instanceof ZuploRequest) {
                  currentRequest = policyResult;
                } else if (policyResult instanceof Request) {
                  currentRequest = new ZuploRequest(policyResult);
                } else if (policyResult instanceof Response) {
                  return policyResult;
                }
                ext.latestRequest = currentRequest;
              }
              return currentRequest;
            } finally {
              span.end();
            }
          });
        };
      }, "toStackedInboundHandler");
      toStackedOutboundHandler = /* @__PURE__ */ __name((policies) => {
        return async (response, request, context) => {
          const tracer = trace.getTracer("pipeline");
          return await tracer.startActiveSpan("policies:outbound", async (span) => {
            try {
              const localPolicies = [...policies];
              let currentResponse = response;
              while (localPolicies.length > 0) {
                const nextPolicy = localPolicies.shift();
                if (!nextPolicy) {
                  return currentResponse;
                }
                const policyResult = await tracer.startActiveSpan(`policy:${nextPolicy.policyName}`, async (localSpan) => {
                  try {
                    localSpan.setAttribute(SemanticAttributes.PolicyName, nextPolicy.policyName);
                    localSpan.setAttribute(SemanticAttributes.PolicyType, nextPolicy.policyType);
                    const policyResult2 = await nextPolicy.handler(currentResponse, request, context);
                    if (policyResult2 instanceof Response) {
                      return policyResult2;
                    } else {
                      const error = new ConfigurationError(`Invalid state - invalid handler on policy '${nextPolicy.policyName}' on route '${context.route.path}. The result of an outbound policy must be a Response.`);
                      localSpan.setStatus({ code: SpanStatusCode.ERROR });
                      localSpan.recordException(error);
                      throw error;
                    }
                  } finally {
                    localSpan.end();
                  }
                });
                currentResponse = policyResult;
              }
              return currentResponse;
            } finally {
              span.end();
            }
          });
        };
      }, "toStackedOutboundHandler");
      policyProcessor = /* @__PURE__ */ __name(async (request, context, gateway, next) => {
        const inboundPolicies = getInboundPolicyInstances(context.route, gateway.routeData.policies);
        const outboundPolicies = getOutboundPolicyInstances(context.route, gateway.routeData.policies);
        return executePolicyProcessor({
          request,
          context,
          inboundPolicies,
          outboundPolicies,
          gateway,
          next
        });
      }, "policyProcessor");
      __name(createInternalPolicyProcessor, "createInternalPolicyProcessor");
      __name(executePolicyProcessor, "executePolicyProcessor");
    }
  });

  // packages/runtime/dist/utils/cookie.js
  function parse(str, options) {
    if (typeof str !== "string") {
      throw new TypeError("argument str must be a string");
    }
    const obj = {};
    const opt = options || {};
    const dec = opt.decode || decode;
    let index = 0;
    while (index < str.length) {
      const eqIdx = str.indexOf("=", index);
      if (eqIdx === -1) {
        break;
      }
      let endIdx = str.indexOf(";", index);
      if (endIdx === -1) {
        endIdx = str.length;
      } else if (endIdx < eqIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const key = str.slice(index, eqIdx).trim();
      if (void 0 === obj[key]) {
        let val2 = str.slice(eqIdx + 1, endIdx).trim();
        if (val2.charCodeAt(0) === 34) {
          val2 = val2.slice(1, -1);
        }
        obj[key] = tryDecode(val2, dec);
      }
      index = endIdx + 1;
    }
    return obj;
  }
  function decode(str) {
    return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
  }
  function tryDecode(str, decode4) {
    try {
      return decode4(str);
    } catch (e) {
      return str;
    }
  }
  var init_cookie = __esm({
    "packages/runtime/dist/utils/cookie.js"() {
      "use strict";
      __name(parse, "parse");
      __name(decode, "decode");
      __name(tryDecode, "tryDecode");
    }
  });

  // packages/runtime/dist/utils/dev-portal.js
  function devPortalBaseURL(defaultBaseURL, headers) {
    try {
      const validDevPortalVersion = /v\d+(-\d+)?/g;
      const cookie = parse(headers.get("Cookie") || "");
      const cookieValue = cookie["zp-dev-portal"];
      if (cookieValue !== null && cookieValue && validDevPortalVersion.test(cookieValue)) {
        return `https://dev-portal-${cookieValue}.zuplo.com`;
      }
      return defaultBaseURL;
    } catch (e) {
    }
    return defaultBaseURL;
  }
  var init_dev_portal = __esm({
    "packages/runtime/dist/utils/dev-portal.js"() {
      "use strict";
      init_cookie();
      __name(devPortalBaseURL, "devPortalBaseURL");
    }
  });

  // packages/runtime/dist/dev-portal/routes-v3.js
  var DEV_PORTAL_LEGACY_PATHNAME, DEV_PORTAL_ID_HEADER, DEV_PORTAL_ZUPLO_HOST_HEADER, ZUPLO_ACCOUNT_HEADER, ZUPLO_PROJECT_HEADER, DEV_PORTAL_ZUPLO_BUILD_ID_HEADER, localDevelopmentDevPortalBanner, registerDevPortalV3Route, registerDevPortalLegacyRedirectRoute;
  var init_routes_v3 = __esm({
    "packages/runtime/dist/dev-portal/routes-v3.js"() {
      "use strict";
      init_index_worker();
      init_internals();
      init_pipeline();
      init_metrics_processor();
      init_policy_processor();
      init_system_route_configuration();
      init_dev_portal();
      init_environment2();
      DEV_PORTAL_LEGACY_PATHNAME = "/__zuplo/dev-portal";
      DEV_PORTAL_ID_HEADER = "dev-portal-id";
      DEV_PORTAL_ZUPLO_HOST_HEADER = "dev-portal-host";
      ZUPLO_ACCOUNT_HEADER = "zp-account";
      ZUPLO_PROJECT_HEADER = "zp-project";
      DEV_PORTAL_ZUPLO_BUILD_ID_HEADER = "dev-portal-build";
      localDevelopmentDevPortalBanner = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Portal Preview</title>
</head>
<body>
    <p>Previewing your Developer Portal is not supported (yet) in local development.</p>
    <p>For now, create a project on <a href="https://portal.zuplo.com">portal.zuplo.com</a>.</p>
    <p>For more information, see <a href="https://zuplo.com/docs/articles/developer-portal">https://zuplo.com/docs/articles/developer-portal</a>.</p>
</body>
</html>
`;
      registerDevPortalV3Route = /* @__PURE__ */ __name((router, gateway) => {
        const { sitePathname } = gateway.runtimeSettings.developerPortal;
        const devPortalId = Environment.instance.deploymentName;
        const devPortalBaseUrl = Environment.instance.devPortalBaseUrl;
        const devPortalRoute = /* @__PURE__ */ __name(async (request, context) => {
          if (Environment.instance.isLocalDevelopment) {
            return new Response(localDevelopmentDevPortalBanner, {
              headers: { "content-type": "text/html" }
            });
          }
          if (!devPortalId) {
            return HttpProblems.internalServerError(request, context, {
              detail: "Unable to retrieve deployment name. Please contact support for assistance."
            });
          }
          const requestUrl = new URL(request.url);
          const baseUrl = devPortalBaseURL(devPortalBaseUrl, request.headers);
          const url = new URL(`${requestUrl.pathname}${requestUrl.search}`, baseUrl);
          const { headers, method, body } = request;
          if (Environment.instance.build.ACCOUNT_NAME) {
            headers.set(ZUPLO_ACCOUNT_HEADER, Environment.instance.build.ACCOUNT_NAME);
          }
          if (Environment.instance.build.PROJECT_NAME) {
            headers.set(ZUPLO_PROJECT_HEADER, Environment.instance.build.PROJECT_NAME);
          }
          headers.set(DEV_PORTAL_ID_HEADER, devPortalId);
          headers.set(DEV_PORTAL_ZUPLO_HOST_HEADER, requestUrl.host);
          headers.set(DEV_PORTAL_ZUPLO_BUILD_ID_HEADER, Environment.instance.build.BUILD_ID);
          return await internals_default.fetch(url.toString(), {
            headers,
            method,
            body,
            redirect: "manual"
          });
        }, "devPortalRoute");
        const zPipe = new Pipeline({
          processors: [metricsProcessor, policyProcessor],
          handler: devPortalRoute,
          gateway
        });
        const devPortalV3RouteConfiguration = new SystemRouteConfiguration({
          label: "SYSTEM_API_DOCS_V3_ROUTE",
          methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "HEAD"],
          path: `(${sitePathname}|/_next)(.*)`,
          systemRouteName: SystemRouteName.DeveloperPortal
        });
        router.addRoute(devPortalV3RouteConfiguration, zPipe.execute);
      }, "registerDevPortalV3Route");
      registerDevPortalLegacyRedirectRoute = /* @__PURE__ */ __name((router, gateway) => {
        const { sitePathname } = gateway.runtimeSettings.developerPortal;
        const devPortalRedirectRoute = /* @__PURE__ */ __name(async (request) => {
          const url = new URL(request.url);
          url.pathname = `${sitePathname}${url.pathname.substring(DEV_PORTAL_LEGACY_PATHNAME.length)}`;
          return Response.redirect(url.toString(), 302);
        }, "devPortalRedirectRoute");
        const zPipe = new Pipeline({
          processors: [metricsProcessor],
          handler: devPortalRedirectRoute,
          gateway
        });
        const devPortalLegacyRouteConfiguration = new SystemRouteConfiguration({
          label: "SYSTEM_API_DOCS_REDIRECT_ROUTE",
          methods: ["GET"],
          path: `${DEV_PORTAL_LEGACY_PATHNAME}(.*)`,
          systemRouteName: SystemRouteName.DeveloperPortalLegacy
        });
        router.addRoute(devPortalLegacyRouteConfiguration, zPipe.execute);
      }, "registerDevPortalLegacyRedirectRoute");
    }
  });

  // packages/runtime/dist/logging/v1/core-logger.js
  var vectorClock, CoreLogger;
  var init_core_logger = __esm({
    "packages/runtime/dist/logging/v1/core-logger.js"() {
      "use strict";
      vectorClock = 0;
      CoreLogger = class {
        static {
          __name(this, "CoreLogger");
        }
        constructor(level, logOwner, loggingId, buildId, transports) {
          this.#logOwner = logOwner;
          this.#loggingId = loggingId ?? "local";
          this.#buildId = buildId;
          this.#transports = transports;
          this.#setupMethods(level);
        }
        #setupMethods = (logLevel) => {
          const levelsInReverseOrder = ["error", "warn", "info", "debug"];
          let hasHitSetLevel = false;
          const emptyFunction = /* @__PURE__ */ __name(() => {
            return;
          }, "emptyFunction");
          const pushFunction = /* @__PURE__ */ __name((entry, context) => {
            this.#transports.forEach((transport) => {
              transport.log(entry, context);
            });
          }, "pushFunction");
          levelsInReverseOrder.forEach((level) => {
            this.#methods[level] = hasHitSetLevel ? emptyFunction : pushFunction;
            if (level == logLevel) {
              hasHitSetLevel = true;
            }
          });
        };
        #methods = {};
        #logOwner;
        #loggingId;
        #buildId;
        #transports;
        log(level, logSource, requestId, rayId, messages, context) {
          if (vectorClock >= Number.MAX_SAFE_INTEGER) {
            vectorClock = 0;
          }
          const entry = {
            requestId,
            rayId,
            level,
            logSource,
            messages,
            timestamp: /* @__PURE__ */ new Date(),
            logOwner: this.#logOwner,
            loggingId: this.#loggingId,
            buildId: this.#buildId,
            vectorClock: vectorClock++
          };
          this.#methods[level](entry, context);
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/log-plugin.js
  var LogPlugin;
  var init_log_plugin = __esm({
    "packages/runtime/dist/logging/v1/log-plugin.js"() {
      "use strict";
      init_plugins();
      LogPlugin = class extends RuntimePlugin {
        static {
          __name(this, "LogPlugin");
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/logging-context.js
  var LoggingContext;
  var init_logging_context = __esm({
    "packages/runtime/dist/logging/v1/logging-context.js"() {
      "use strict";
      LoggingContext = class {
        static {
          __name(this, "LoggingContext");
        }
        constructor(event, custom, originalRequest) {
          this.#event = event;
          this.custom = custom;
          this.originalRequest = originalRequest;
        }
        #event;
        custom;
        originalRequest;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        waitUntil = (promise) => {
          this.#event.waitUntil(promise);
        };
      };
    }
  });

  // packages/runtime/dist/logging/v1/request-logger.js
  var RequestLogger;
  var init_request_logger = __esm({
    "packages/runtime/dist/logging/v1/request-logger.js"() {
      "use strict";
      RequestLogger = class {
        static {
          __name(this, "RequestLogger");
        }
        constructor(requestId, rayId, coreLogger, context) {
          this.#requestId = requestId;
          this.#rayId = rayId;
          this.#coreLogger = coreLogger;
          this.#context = context;
        }
        #logType = "request";
        #requestId;
        #rayId;
        #coreLogger;
        #context;
        debug = (...messages) => {
          this.#coreLogger.log("debug", this.#logType, this.#requestId, this.#rayId, messages, this.#context);
        };
        info = (...messages) => {
          this.#coreLogger.log("info", this.#logType, this.#requestId, this.#rayId, messages, this.#context);
        };
        log = (...messages) => {
          this.#coreLogger.log("info", this.#logType, this.#requestId, this.#rayId, messages, this.#context);
        };
        warn = (...messages) => {
          this.#coreLogger.log("warn", this.#logType, this.#requestId, this.#rayId, messages, this.#context);
        };
        error = (...messages) => {
          this.#coreLogger.log("error", this.#logType, this.#requestId, this.#rayId, messages, this.#context);
        };
      };
    }
  });

  // packages/runtime/dist/utils/serialize-error.js
  function serializeError(value, options) {
    const maxDepth = options?.maxDepth ?? Number.POSITIVE_INFINITY;
    const useToJSON = options?.useToJSON ?? true;
    if (typeof value === "object" && value !== null) {
      return destroyCircular({
        from: value,
        seen: [],
        forceEnumerable: true,
        maxDepth,
        depth: 0,
        useToJSON,
        serialize: true
      });
    }
    if (typeof value === "function") {
      return `[Function: ${value.name ?? "anonymous"}]`;
    }
    return value;
  }
  function cleanStack(value) {
    if (typeof value !== "string") {
      return value;
    }
    return value.split("\n").filter((line) => !line.trim().startsWith("at async file")).map((line, index) => {
      const value2 = line.replaceAll(filePathRegEx, "").replaceAll(denoSourceEx, "").replaceAll(eventString, "").trim();
      if (index === 0 || value2.length === 0) {
        return value2;
      }
      return `    ${value2}`;
    }).filter((line) => line.length > 0).join("\n");
  }
  var list, errorConstructors, commonProperties, toJsonWasCalled, toJSON, getErrorConstructor, destroyCircular, filePathRegEx, denoSourceEx, eventString;
  var init_serialize_error = __esm({
    "packages/runtime/dist/utils/serialize-error.js"() {
      "use strict";
      init_types2();
      list = [
        // Native ES errors https://262.ecma-international.org/12.0/#sec-well-known-intrinsic-objects
        EvalError,
        RangeError,
        ReferenceError,
        SyntaxError,
        TypeError,
        URIError
      ].filter(Boolean).map((constructor) => [constructor.name, constructor]);
      errorConstructors = new Map(list);
      commonProperties = [
        {
          property: "name",
          enumerable: false
        },
        {
          property: "message",
          enumerable: false
        },
        {
          property: "stack",
          enumerable: false
        },
        {
          property: "code",
          enumerable: true
        },
        {
          property: "cause",
          enumerable: false
        }
      ];
      toJsonWasCalled = Symbol(".toJSON was called");
      toJSON = /* @__PURE__ */ __name((from) => {
        from[toJsonWasCalled] = true;
        const json = from.toJSON();
        delete from[toJsonWasCalled];
        return json;
      }, "toJSON");
      getErrorConstructor = /* @__PURE__ */ __name((name) => errorConstructors.get(name) ?? Error, "getErrorConstructor");
      destroyCircular = /* @__PURE__ */ __name(({ from, seen, to, forceEnumerable, maxDepth, depth, useToJSON, serialize: serialize2 }) => {
        if (!to) {
          if (Array.isArray(from)) {
            to = [];
          } else if (!serialize2 && isErrorLike(from)) {
            const Error2 = getErrorConstructor(from.name);
            to = new Error2();
          } else {
            to = {};
          }
        }
        seen.push(from);
        if (depth >= maxDepth) {
          return to;
        }
        if (useToJSON && typeof from.toJSON === "function" && from[toJsonWasCalled] !== true) {
          return toJSON(from);
        }
        const continueDestroyCircular = /* @__PURE__ */ __name((value) => destroyCircular({
          from: value,
          seen: [...seen],
          forceEnumerable,
          maxDepth,
          depth,
          useToJSON,
          serialize: serialize2
        }), "continueDestroyCircular");
        for (const [key, value] of Object.entries(from)) {
          if (typeof Buffer === "function" && Buffer.isBuffer(value)) {
            to[key] = "[object Buffer]";
            continue;
          }
          if (value !== null && typeof value === "object" && // @ts-ignore
          typeof value.pipe === "function") {
            to[key] = "[object Stream]";
            continue;
          }
          if (typeof value === "function") {
            continue;
          }
          if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
          }
          if (!seen.includes(from[key])) {
            depth++;
            to[key] = continueDestroyCircular(from[key]);
            continue;
          }
          to[key] = "[Circular]";
        }
        for (const { property, enumerable } of commonProperties) {
          if (typeof from[property] !== "undefined" && from[property] !== null) {
            Object.defineProperty(to, property, {
              value: isErrorLike(from[property]) ? continueDestroyCircular(from[property]) : from[property],
              enumerable: forceEnumerable ? true : enumerable,
              configurable: true,
              writable: true
            });
          }
        }
        return to;
      }, "destroyCircular");
      __name(serializeError, "serializeError");
      filePathRegEx = /file:\/\/\/(.*?)\/dist\//g;
      denoSourceEx = /\(https:\/\/raw\.githubusercontent\.com\/.*?\)/g;
      eventString = "at async Event.respondWith";
      __name(cleanStack, "cleanStack");
    }
  });

  // packages/runtime/dist/utils/stringify-object.js
  function stringifyObject(input, options, pad = "") {
    const seen = [];
    const maxDepth = options?.maxDepth ?? 3;
    return (/* @__PURE__ */ __name(function stringify(input2, options2 = {}, pad2, depth) {
      const indent = options2.indent || "  ";
      let tokens;
      if (options2.inlineCharacterLimit === void 0) {
        tokens = {
          newline: "\n",
          newlineOrSpace: "\n",
          pad: pad2,
          indent: pad2 + indent
        };
      } else {
        tokens = {
          newline: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
          newlineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
          pad: "@@__STRINGIFY_OBJECT_PAD__@@",
          indent: "@@__STRINGIFY_OBJECT_INDENT__@@"
        };
      }
      const expandWhiteSpace = /* @__PURE__ */ __name((string) => {
        if (options2.inlineCharacterLimit === void 0) {
          return string;
        }
        const oneLined = string.replace(new RegExp(tokens.newline, "g"), "").replace(new RegExp(tokens.newlineOrSpace, "g"), " ").replace(new RegExp(tokens.pad + "|" + tokens.indent, "g"), "");
        if (oneLined.length <= options2.inlineCharacterLimit) {
          return oneLined;
        }
        return string.replace(new RegExp(tokens.newline + "|" + tokens.newlineOrSpace, "g"), "\n").replace(new RegExp(tokens.pad, "g"), pad2).replace(new RegExp(tokens.indent, "g"), pad2 + indent);
      }, "expandWhiteSpace");
      if (seen.includes(input2)) {
        return '"[Circular]"';
      }
      if (input2 === null || input2 === void 0 || typeof input2 === "number" || typeof input2 === "boolean" || typeof input2 === "function" || typeof input2 === "symbol" || isRegexp(input2)) {
        return String(input2);
      }
      if (input2 instanceof Date) {
        return `new Date('${input2.toISOString()}')`;
      }
      if (depth > maxDepth) {
        return "...";
      }
      if (Array.isArray(input2)) {
        if (input2.length === 0) {
          return "[]";
        }
        seen.push(input2);
        const returnValue = "[" + tokens.newline + input2.map((element, i) => {
          const eol = input2.length - 1 === i ? tokens.newline : "," + tokens.newlineOrSpace;
          let value = stringify(element, options2, pad2 + indent, depth + 1);
          if (options2.transform) {
            value = options2.transform(input2, i, value);
          }
          return tokens.indent + value + eol;
        }).join("") + tokens.pad + "]";
        seen.pop();
        return expandWhiteSpace(returnValue);
      }
      if (isObject(input2)) {
        let objectKeys = getOwnEnumerableKeys(input2);
        if (options2.filter) {
          objectKeys = objectKeys.filter((element) => options2.filter?.(input2, element));
        }
        if (objectKeys.length === 0) {
          return "{}";
        }
        seen.push(input2);
        const returnValue = "{" + tokens.newline + objectKeys.map((element, index) => {
          const eol = objectKeys.length - 1 === index ? tokens.newline : "," + tokens.newlineOrSpace;
          const isSymbol = typeof element === "symbol";
          const isClassic = !isSymbol && /^[a-z$_][$\w]*$/i.test(element);
          const key = isSymbol || isClassic ? element : stringify(element, options2, "", depth + 1);
          let value = stringify(input2[element], options2, pad2 + indent, depth + 1);
          if (options2.transform) {
            value = options2.transform(input2, element, value);
          }
          return tokens.indent + String(key) + ": " + value + eol;
        }).join("") + tokens.pad + "}";
        seen.pop();
        return expandWhiteSpace(returnValue);
      }
      input2 = input2.replace(/\\/g, "\\\\");
      input2 = String(input2).replace(/[\r\n]/g, (x) => x === "\n" ? "\\n" : "\\r");
      if (options2.singleQuotes === false) {
        input2 = input2.replace(/"/g, '\\"');
        return `"${input2}"`;
      }
      input2 = input2.replace(/'/g, "\\'");
      return `'${input2}'`;
    }, "stringify"))(input, options, pad, 0);
  }
  var init_stringify_object = __esm({
    "packages/runtime/dist/utils/stringify-object.js"() {
      "use strict";
      init_types2();
      __name(stringifyObject, "stringifyObject");
    }
  });

  // packages/runtime/dist/logging/v1/log-serializer-utils.js
  function makeErrorsSerializable(messages) {
    return messages.map((m) => serializeError(m));
  }
  function extractBestMessage(messages) {
    if (messages.length === 0) {
      return "<no data provided to log>";
    }
    const first = messages[0];
    if (typeof first === "string") {
      return first;
    }
    if (first instanceof Error) {
      return first.message;
    }
    return stringifyNonString(serializeError(first));
  }
  function messagesToMultilineText(messages) {
    const text = [];
    messages.forEach((message2) => {
      if (typeof message2 === "string") {
        text.push(message2);
      } else if (isErrorLike(message2)) {
        if (message2.stack) {
          text.push(message2.stack);
        } else {
          const serialized = stringifyObject(serializeError(message2));
          text.push(serialized);
        }
      } else if (typeof message2 === "object") {
        const serialized = stringifyObject(message2);
        text.push(serialized);
      } else {
        const serialized = stringifyNonStringToText(message2);
        text.push(serialized);
      }
    });
    return text.join("\n");
  }
  function stringifyNonString(value) {
    if (typeof value === "string") {
      return value;
    }
    return JSON.stringify(value);
  }
  function stringifyNonStringToText(value) {
    if (typeof value === "string") {
      return value;
    }
    if (value === null) {
      return "null";
    }
    if (typeof value === "undefined") {
      return "undefined";
    }
    if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || typeof value === "symbol") {
      return value.toString();
    }
    if (typeof value === "function") {
      return `[function ${value.name}]`;
    }
    if (typeof value === "object" && Array.isArray(value)) {
      return `[array ${value.length}]`;
    }
    if (value instanceof Error) {
      return `${value.name ?? "Error"}: ${value.message ?? "unknown"}`;
    }
    if (typeof value === "object") {
      return toString(value);
    }
    return "unknown";
  }
  var init_log_serializer_utils = __esm({
    "packages/runtime/dist/logging/v1/log-serializer-utils.js"() {
      "use strict";
      init_serialize_error();
      init_stringify_object();
      init_types2();
      __name(makeErrorsSerializable, "makeErrorsSerializable");
      __name(extractBestMessage, "extractBestMessage");
      __name(messagesToMultilineText, "messagesToMultilineText");
      __name(stringifyNonString, "stringifyNonString");
      __name(stringifyNonStringToText, "stringifyNonStringToText");
    }
  });

  // node_modules/jose/dist/browser/runtime/webcrypto.js
  var webcrypto_default, isCryptoKey;
  var init_webcrypto = __esm({
    "node_modules/jose/dist/browser/runtime/webcrypto.js"() {
      webcrypto_default = crypto;
      isCryptoKey = /* @__PURE__ */ __name((key) => key instanceof CryptoKey, "isCryptoKey");
    }
  });

  // node_modules/jose/dist/browser/runtime/digest.js
  var init_digest = __esm({
    "node_modules/jose/dist/browser/runtime/digest.js"() {
      init_webcrypto();
    }
  });

  // node_modules/jose/dist/browser/lib/buffer_utils.js
  function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    buffers.forEach((buffer) => {
      buf.set(buffer, i);
      i += buffer.length;
    });
    return buf;
  }
  var encoder, decoder, MAX_INT32;
  var init_buffer_utils = __esm({
    "node_modules/jose/dist/browser/lib/buffer_utils.js"() {
      init_digest();
      encoder = new TextEncoder();
      decoder = new TextDecoder();
      MAX_INT32 = 2 ** 32;
      __name(concat, "concat");
    }
  });

  // node_modules/jose/dist/browser/runtime/base64url.js
  var encodeBase64, encode, decodeBase64, decode2;
  var init_base64url = __esm({
    "node_modules/jose/dist/browser/runtime/base64url.js"() {
      init_buffer_utils();
      encodeBase64 = /* @__PURE__ */ __name((input) => {
        let unencoded = input;
        if (typeof unencoded === "string") {
          unencoded = encoder.encode(unencoded);
        }
        const CHUNK_SIZE = 32768;
        const arr = [];
        for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
          arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
        }
        return btoa(arr.join(""));
      }, "encodeBase64");
      encode = /* @__PURE__ */ __name((input) => {
        return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }, "encode");
      decodeBase64 = /* @__PURE__ */ __name((encoded) => {
        const binary = atob(encoded);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
      }, "decodeBase64");
      decode2 = /* @__PURE__ */ __name((input) => {
        let encoded = input;
        if (encoded instanceof Uint8Array) {
          encoded = decoder.decode(encoded);
        }
        encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
        try {
          return decodeBase64(encoded);
        } catch (_a) {
          throw new TypeError("The input to be decoded is not correctly encoded.");
        }
      }, "decode");
    }
  });

  // node_modules/jose/dist/browser/util/errors.js
  var JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWSInvalid, JWTInvalid, JWKSInvalid, JWKSNoMatchingKey, JWKSMultipleMatchingKeys, JWKSTimeout, JWSSignatureVerificationFailed;
  var init_errors2 = __esm({
    "node_modules/jose/dist/browser/util/errors.js"() {
      JOSEError = class extends Error {
        static {
          __name(this, "JOSEError");
        }
        static get code() {
          return "ERR_JOSE_GENERIC";
        }
        constructor(message2) {
          var _a;
          super(message2);
          this.code = "ERR_JOSE_GENERIC";
          this.name = this.constructor.name;
          (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, this.constructor);
        }
      };
      JWTClaimValidationFailed = class extends JOSEError {
        static {
          __name(this, "JWTClaimValidationFailed");
        }
        static get code() {
          return "ERR_JWT_CLAIM_VALIDATION_FAILED";
        }
        constructor(message2, claim = "unspecified", reason = "unspecified") {
          super(message2);
          this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
          this.claim = claim;
          this.reason = reason;
        }
      };
      JWTExpired = class extends JOSEError {
        static {
          __name(this, "JWTExpired");
        }
        static get code() {
          return "ERR_JWT_EXPIRED";
        }
        constructor(message2, claim = "unspecified", reason = "unspecified") {
          super(message2);
          this.code = "ERR_JWT_EXPIRED";
          this.claim = claim;
          this.reason = reason;
        }
      };
      JOSEAlgNotAllowed = class extends JOSEError {
        static {
          __name(this, "JOSEAlgNotAllowed");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
        }
        static get code() {
          return "ERR_JOSE_ALG_NOT_ALLOWED";
        }
      };
      JOSENotSupported = class extends JOSEError {
        static {
          __name(this, "JOSENotSupported");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JOSE_NOT_SUPPORTED";
        }
        static get code() {
          return "ERR_JOSE_NOT_SUPPORTED";
        }
      };
      JWSInvalid = class extends JOSEError {
        static {
          __name(this, "JWSInvalid");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWS_INVALID";
        }
        static get code() {
          return "ERR_JWS_INVALID";
        }
      };
      JWTInvalid = class extends JOSEError {
        static {
          __name(this, "JWTInvalid");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWT_INVALID";
        }
        static get code() {
          return "ERR_JWT_INVALID";
        }
      };
      JWKSInvalid = class extends JOSEError {
        static {
          __name(this, "JWKSInvalid");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWKS_INVALID";
        }
        static get code() {
          return "ERR_JWKS_INVALID";
        }
      };
      JWKSNoMatchingKey = class extends JOSEError {
        static {
          __name(this, "JWKSNoMatchingKey");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWKS_NO_MATCHING_KEY";
          this.message = "no applicable key found in the JSON Web Key Set";
        }
        static get code() {
          return "ERR_JWKS_NO_MATCHING_KEY";
        }
      };
      JWKSMultipleMatchingKeys = class extends JOSEError {
        static {
          __name(this, "JWKSMultipleMatchingKeys");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
          this.message = "multiple matching keys found in the JSON Web Key Set";
        }
        static get code() {
          return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
        }
      };
      JWKSTimeout = class extends JOSEError {
        static {
          __name(this, "JWKSTimeout");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWKS_TIMEOUT";
          this.message = "request timed out";
        }
        static get code() {
          return "ERR_JWKS_TIMEOUT";
        }
      };
      JWSSignatureVerificationFailed = class extends JOSEError {
        static {
          __name(this, "JWSSignatureVerificationFailed");
        }
        constructor() {
          super(...arguments);
          this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
          this.message = "signature verification failed";
        }
        static get code() {
          return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
        }
      };
    }
  });

  // node_modules/jose/dist/browser/runtime/random.js
  var random_default;
  var init_random = __esm({
    "node_modules/jose/dist/browser/runtime/random.js"() {
      init_webcrypto();
      random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
    }
  });

  // node_modules/jose/dist/browser/lib/iv.js
  var init_iv = __esm({
    "node_modules/jose/dist/browser/lib/iv.js"() {
      init_errors2();
      init_random();
    }
  });

  // node_modules/jose/dist/browser/lib/check_iv_length.js
  var init_check_iv_length = __esm({
    "node_modules/jose/dist/browser/lib/check_iv_length.js"() {
      init_errors2();
      init_iv();
    }
  });

  // node_modules/jose/dist/browser/runtime/check_cek_length.js
  var init_check_cek_length = __esm({
    "node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/runtime/timing_safe_equal.js
  var init_timing_safe_equal = __esm({
    "node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    }
  });

  // node_modules/jose/dist/browser/lib/crypto_key.js
  function unusable(name, prop = "algorithm.name") {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
  }
  function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
  }
  function getHashLength(hash2) {
    return parseInt(hash2.name.slice(4), 10);
  }
  function getNamedCurve(alg) {
    switch (alg) {
      case "ES256":
        return "P-256";
      case "ES384":
        return "P-384";
      case "ES512":
        return "P-521";
      default:
        throw new Error("unreachable");
    }
  }
  function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
      let msg = "CryptoKey does not support this operation, its usages must include ";
      if (usages.length > 2) {
        const last = usages.pop();
        msg += `one of ${usages.join(", ")}, or ${last}.`;
      } else if (usages.length === 2) {
        msg += `one of ${usages[0]} or ${usages[1]}.`;
      } else {
        msg += `${usages[0]}.`;
      }
      throw new TypeError(msg);
    }
  }
  function checkSigCryptoKey(key, alg, ...usages) {
    switch (alg) {
      case "HS256":
      case "HS384":
      case "HS512": {
        if (!isAlgorithm(key.algorithm, "HMAC"))
          throw unusable("HMAC");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "RS256":
      case "RS384":
      case "RS512": {
        if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
          throw unusable("RSASSA-PKCS1-v1_5");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "PS256":
      case "PS384":
      case "PS512": {
        if (!isAlgorithm(key.algorithm, "RSA-PSS"))
          throw unusable("RSA-PSS");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "EdDSA": {
        if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
          throw unusable("Ed25519 or Ed448");
        }
        break;
      }
      case "ES256":
      case "ES384":
      case "ES512": {
        if (!isAlgorithm(key.algorithm, "ECDSA"))
          throw unusable("ECDSA");
        const expected = getNamedCurve(alg);
        const actual = key.algorithm.namedCurve;
        if (actual !== expected)
          throw unusable(expected, "algorithm.namedCurve");
        break;
      }
      default:
        throw new TypeError("CryptoKey does not support this operation");
    }
    checkUsage(key, usages);
  }
  var init_crypto_key = __esm({
    "node_modules/jose/dist/browser/lib/crypto_key.js"() {
      __name(unusable, "unusable");
      __name(isAlgorithm, "isAlgorithm");
      __name(getHashLength, "getHashLength");
      __name(getNamedCurve, "getNamedCurve");
      __name(checkUsage, "checkUsage");
      __name(checkSigCryptoKey, "checkSigCryptoKey");
    }
  });

  // node_modules/jose/dist/browser/lib/invalid_key_input.js
  function message(msg, actual, ...types2) {
    if (types2.length > 2) {
      const last = types2.pop();
      msg += `one of type ${types2.join(", ")}, or ${last}.`;
    } else if (types2.length === 2) {
      msg += `one of type ${types2[0]} or ${types2[1]}.`;
    } else {
      msg += `of type ${types2[0]}.`;
    }
    if (actual == null) {
      msg += ` Received ${actual}`;
    } else if (typeof actual === "function" && actual.name) {
      msg += ` Received function ${actual.name}`;
    } else if (typeof actual === "object" && actual != null) {
      if (actual.constructor && actual.constructor.name) {
        msg += ` Received an instance of ${actual.constructor.name}`;
      }
    }
    return msg;
  }
  function withAlg(alg, actual, ...types2) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
  }
  var invalid_key_input_default;
  var init_invalid_key_input = __esm({
    "node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
      __name(message, "message");
      invalid_key_input_default = /* @__PURE__ */ __name((actual, ...types2) => {
        return message("Key must be ", actual, ...types2);
      }, "default");
      __name(withAlg, "withAlg");
    }
  });

  // node_modules/jose/dist/browser/runtime/is_key_like.js
  var is_key_like_default, types;
  var init_is_key_like = __esm({
    "node_modules/jose/dist/browser/runtime/is_key_like.js"() {
      init_webcrypto();
      is_key_like_default = /* @__PURE__ */ __name((key) => {
        return isCryptoKey(key);
      }, "default");
      types = ["CryptoKey"];
    }
  });

  // node_modules/jose/dist/browser/runtime/decrypt.js
  var init_decrypt = __esm({
    "node_modules/jose/dist/browser/runtime/decrypt.js"() {
      init_buffer_utils();
      init_check_iv_length();
      init_check_cek_length();
      init_timing_safe_equal();
      init_errors2();
      init_webcrypto();
      init_crypto_key();
      init_invalid_key_input();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/runtime/zlib.js
  var init_zlib = __esm({
    "node_modules/jose/dist/browser/runtime/zlib.js"() {
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/lib/is_disjoint.js
  var isDisjoint, is_disjoint_default;
  var init_is_disjoint = __esm({
    "node_modules/jose/dist/browser/lib/is_disjoint.js"() {
      isDisjoint = /* @__PURE__ */ __name((...headers) => {
        const sources = headers.filter(Boolean);
        if (sources.length === 0 || sources.length === 1) {
          return true;
        }
        let acc;
        for (const header of sources) {
          const parameters = Object.keys(header);
          if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
          }
          for (const parameter of parameters) {
            if (acc.has(parameter)) {
              return false;
            }
            acc.add(parameter);
          }
        }
        return true;
      }, "isDisjoint");
      is_disjoint_default = isDisjoint;
    }
  });

  // node_modules/jose/dist/browser/lib/is_object.js
  function isObjectLike(value) {
    return typeof value === "object" && value !== null;
  }
  function isObject2(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
      return false;
    }
    if (Object.getPrototypeOf(input) === null) {
      return true;
    }
    let proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
  }
  var init_is_object = __esm({
    "node_modules/jose/dist/browser/lib/is_object.js"() {
      __name(isObjectLike, "isObjectLike");
      __name(isObject2, "isObject");
    }
  });

  // node_modules/jose/dist/browser/runtime/bogus.js
  var init_bogus = __esm({
    "node_modules/jose/dist/browser/runtime/bogus.js"() {
    }
  });

  // node_modules/jose/dist/browser/runtime/aeskw.js
  var init_aeskw = __esm({
    "node_modules/jose/dist/browser/runtime/aeskw.js"() {
      init_bogus();
      init_webcrypto();
      init_crypto_key();
      init_invalid_key_input();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/runtime/ecdhes.js
  var init_ecdhes = __esm({
    "node_modules/jose/dist/browser/runtime/ecdhes.js"() {
      init_buffer_utils();
      init_webcrypto();
      init_crypto_key();
      init_invalid_key_input();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/lib/check_p2s.js
  var init_check_p2s = __esm({
    "node_modules/jose/dist/browser/lib/check_p2s.js"() {
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/runtime/pbes2kw.js
  var init_pbes2kw = __esm({
    "node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
      init_random();
      init_buffer_utils();
      init_base64url();
      init_aeskw();
      init_check_p2s();
      init_webcrypto();
      init_crypto_key();
      init_invalid_key_input();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/runtime/subtle_rsaes.js
  var init_subtle_rsaes = __esm({
    "node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/runtime/check_key_length.js
  var check_key_length_default;
  var init_check_key_length = __esm({
    "node_modules/jose/dist/browser/runtime/check_key_length.js"() {
      check_key_length_default = /* @__PURE__ */ __name((alg, key) => {
        if (alg.startsWith("RS") || alg.startsWith("PS")) {
          const { modulusLength } = key.algorithm;
          if (typeof modulusLength !== "number" || modulusLength < 2048) {
            throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
          }
        }
      }, "default");
    }
  });

  // node_modules/jose/dist/browser/runtime/rsaes.js
  var init_rsaes = __esm({
    "node_modules/jose/dist/browser/runtime/rsaes.js"() {
      init_subtle_rsaes();
      init_bogus();
      init_webcrypto();
      init_crypto_key();
      init_check_key_length();
      init_invalid_key_input();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/lib/cek.js
  var init_cek = __esm({
    "node_modules/jose/dist/browser/lib/cek.js"() {
      init_errors2();
      init_random();
    }
  });

  // node_modules/jose/dist/browser/lib/format_pem.js
  var init_format_pem = __esm({
    "node_modules/jose/dist/browser/lib/format_pem.js"() {
    }
  });

  // node_modules/jose/dist/browser/runtime/asn1.js
  var findOid, getNamedCurve2, genericImport, fromPKCS8, fromSPKI;
  var init_asn1 = __esm({
    "node_modules/jose/dist/browser/runtime/asn1.js"() {
      init_webcrypto();
      init_invalid_key_input();
      init_base64url();
      init_format_pem();
      init_errors2();
      init_is_key_like();
      findOid = /* @__PURE__ */ __name((keyData, oid, from = 0) => {
        if (from === 0) {
          oid.unshift(oid.length);
          oid.unshift(6);
        }
        let i = keyData.indexOf(oid[0], from);
        if (i === -1)
          return false;
        const sub = keyData.subarray(i, i + oid.length);
        if (sub.length !== oid.length)
          return false;
        return sub.every((value, index) => value === oid[index]) || findOid(keyData, oid, i + 1);
      }, "findOid");
      getNamedCurve2 = /* @__PURE__ */ __name((keyData) => {
        switch (true) {
          case findOid(keyData, [42, 134, 72, 206, 61, 3, 1, 7]):
            return "P-256";
          case findOid(keyData, [43, 129, 4, 0, 34]):
            return "P-384";
          case findOid(keyData, [43, 129, 4, 0, 35]):
            return "P-521";
          case findOid(keyData, [43, 101, 110]):
            return "X25519";
          case findOid(keyData, [43, 101, 111]):
            return "X448";
          case findOid(keyData, [43, 101, 112]):
            return "Ed25519";
          case findOid(keyData, [43, 101, 113]):
            return "Ed448";
          default:
            throw new JOSENotSupported("Invalid or unsupported EC Key Curve or OKP Key Sub Type");
        }
      }, "getNamedCurve");
      genericImport = /* @__PURE__ */ __name(async (replace, keyFormat, pem, alg, options) => {
        var _a;
        let algorithm;
        let keyUsages;
        const keyData = new Uint8Array(atob(pem.replace(replace, "")).split("").map((c) => c.charCodeAt(0)));
        const isPublic = keyFormat === "spki";
        switch (alg) {
          case "PS256":
          case "PS384":
          case "PS512":
            algorithm = { name: "RSA-PSS", hash: `SHA-${alg.slice(-3)}` };
            keyUsages = isPublic ? ["verify"] : ["sign"];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${alg.slice(-3)}` };
            keyUsages = isPublic ? ["verify"] : ["sign"];
            break;
          case "RSA-OAEP":
          case "RSA-OAEP-256":
          case "RSA-OAEP-384":
          case "RSA-OAEP-512":
            algorithm = {
              name: "RSA-OAEP",
              hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
            };
            keyUsages = isPublic ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
            break;
          case "ES256":
            algorithm = { name: "ECDSA", namedCurve: "P-256" };
            keyUsages = isPublic ? ["verify"] : ["sign"];
            break;
          case "ES384":
            algorithm = { name: "ECDSA", namedCurve: "P-384" };
            keyUsages = isPublic ? ["verify"] : ["sign"];
            break;
          case "ES512":
            algorithm = { name: "ECDSA", namedCurve: "P-521" };
            keyUsages = isPublic ? ["verify"] : ["sign"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW": {
            const namedCurve = getNamedCurve2(keyData);
            algorithm = namedCurve.startsWith("P-") ? { name: "ECDH", namedCurve } : { name: namedCurve };
            keyUsages = isPublic ? [] : ["deriveBits"];
            break;
          }
          case "EdDSA":
            algorithm = { name: getNamedCurve2(keyData) };
            keyUsages = isPublic ? ["verify"] : ["sign"];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported "alg" (Algorithm) value');
        }
        return webcrypto_default.subtle.importKey(keyFormat, keyData, algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
      }, "genericImport");
      fromPKCS8 = /* @__PURE__ */ __name((pem, alg, options) => {
        return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", pem, alg, options);
      }, "fromPKCS8");
      fromSPKI = /* @__PURE__ */ __name((pem, alg, options) => {
        return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", pem, alg, options);
      }, "fromSPKI");
    }
  });

  // node_modules/jose/dist/browser/runtime/jwk_to_key.js
  function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch (jwk.kty) {
      case "oct": {
        switch (jwk.alg) {
          case "HS256":
          case "HS384":
          case "HS512":
            algorithm = { name: "HMAC", hash: `SHA-${jwk.alg.slice(-3)}` };
            keyUsages = ["sign", "verify"];
            break;
          case "A128CBC-HS256":
          case "A192CBC-HS384":
          case "A256CBC-HS512":
            throw new JOSENotSupported(`${jwk.alg} keys cannot be imported as CryptoKey instances`);
          case "A128GCM":
          case "A192GCM":
          case "A256GCM":
          case "A128GCMKW":
          case "A192GCMKW":
          case "A256GCMKW":
            algorithm = { name: "AES-GCM" };
            keyUsages = ["encrypt", "decrypt"];
            break;
          case "A128KW":
          case "A192KW":
          case "A256KW":
            algorithm = { name: "AES-KW" };
            keyUsages = ["wrapKey", "unwrapKey"];
            break;
          case "PBES2-HS256+A128KW":
          case "PBES2-HS384+A192KW":
          case "PBES2-HS512+A256KW":
            algorithm = { name: "PBKDF2" };
            keyUsages = ["deriveBits"];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      case "RSA": {
        switch (jwk.alg) {
          case "PS256":
          case "PS384":
          case "PS512":
            algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "RSA-OAEP":
          case "RSA-OAEP-256":
          case "RSA-OAEP-384":
          case "RSA-OAEP-512":
            algorithm = {
              name: "RSA-OAEP",
              hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
            };
            keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      case "EC": {
        switch (jwk.alg) {
          case "ES256":
            algorithm = { name: "ECDSA", namedCurve: "P-256" };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ES384":
            algorithm = { name: "ECDSA", namedCurve: "P-384" };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ES512":
            algorithm = { name: "ECDSA", namedCurve: "P-521" };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            algorithm = { name: "ECDH", namedCurve: jwk.crv };
            keyUsages = jwk.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      case "OKP": {
        switch (jwk.alg) {
          case "EdDSA":
            algorithm = { name: jwk.crv };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            algorithm = { name: jwk.crv };
            keyUsages = jwk.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      default:
        throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return { algorithm, keyUsages };
  }
  var parse2, jwk_to_key_default;
  var init_jwk_to_key = __esm({
    "node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
      init_webcrypto();
      init_errors2();
      init_base64url();
      __name(subtleMapping, "subtleMapping");
      parse2 = /* @__PURE__ */ __name(async (jwk) => {
        var _a, _b;
        if (!jwk.alg) {
          throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
        }
        const { algorithm, keyUsages } = subtleMapping(jwk);
        const rest = [
          algorithm,
          (_a = jwk.ext) !== null && _a !== void 0 ? _a : false,
          (_b = jwk.key_ops) !== null && _b !== void 0 ? _b : keyUsages
        ];
        if (algorithm.name === "PBKDF2") {
          return webcrypto_default.subtle.importKey("raw", decode2(jwk.k), ...rest);
        }
        const keyData = { ...jwk };
        delete keyData.alg;
        delete keyData.use;
        return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
      }, "parse");
      jwk_to_key_default = parse2;
    }
  });

  // node_modules/jose/dist/browser/key/import.js
  async function importSPKI(spki, alg, options) {
    if (typeof spki !== "string" || spki.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) {
      throw new TypeError('"spki" must be SPKI formatted string');
    }
    return fromSPKI(spki, alg, options);
  }
  async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== "string" || pkcs8.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
      throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return fromPKCS8(pkcs8, alg, options);
  }
  async function importJWK(jwk, alg, octAsKeyObject) {
    var _a;
    if (!isObject2(jwk)) {
      throw new TypeError("JWK must be an object");
    }
    alg || (alg = jwk.alg);
    switch (jwk.kty) {
      case "oct":
        if (typeof jwk.k !== "string" || !jwk.k) {
          throw new TypeError('missing "k" (Key Value) Parameter value');
        }
        octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : octAsKeyObject = jwk.ext !== true;
        if (octAsKeyObject) {
          return jwk_to_key_default({ ...jwk, alg, ext: (_a = jwk.ext) !== null && _a !== void 0 ? _a : false });
        }
        return decode2(jwk.k);
      case "RSA":
        if (jwk.oth !== void 0) {
          throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
        }
      case "EC":
      case "OKP":
        return jwk_to_key_default({ ...jwk, alg });
      default:
        throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
    }
  }
  var init_import = __esm({
    "node_modules/jose/dist/browser/key/import.js"() {
      init_base64url();
      init_asn1();
      init_jwk_to_key();
      init_errors2();
      init_is_object();
      __name(importSPKI, "importSPKI");
      __name(importPKCS8, "importPKCS8");
      __name(importJWK, "importJWK");
    }
  });

  // node_modules/jose/dist/browser/lib/check_key_type.js
  var symmetricTypeCheck, asymmetricTypeCheck, checkKeyType, check_key_type_default;
  var init_check_key_type = __esm({
    "node_modules/jose/dist/browser/lib/check_key_type.js"() {
      init_invalid_key_input();
      init_is_key_like();
      symmetricTypeCheck = /* @__PURE__ */ __name((alg, key) => {
        if (key instanceof Uint8Array)
          return;
        if (!is_key_like_default(key)) {
          throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
        }
        if (key.type !== "secret") {
          throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
        }
      }, "symmetricTypeCheck");
      asymmetricTypeCheck = /* @__PURE__ */ __name((alg, key, usage) => {
        if (!is_key_like_default(key)) {
          throw new TypeError(withAlg(alg, key, ...types));
        }
        if (key.type === "secret") {
          throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
        }
        if (usage === "sign" && key.type === "public") {
          throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
        }
        if (usage === "decrypt" && key.type === "public") {
          throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
        }
        if (key.algorithm && usage === "verify" && key.type === "private") {
          throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
        }
        if (key.algorithm && usage === "encrypt" && key.type === "private") {
          throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
        }
      }, "asymmetricTypeCheck");
      checkKeyType = /* @__PURE__ */ __name((alg, key, usage) => {
        const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
        if (symmetric) {
          symmetricTypeCheck(alg, key);
        } else {
          asymmetricTypeCheck(alg, key, usage);
        }
      }, "checkKeyType");
      check_key_type_default = checkKeyType;
    }
  });

  // node_modules/jose/dist/browser/runtime/encrypt.js
  var init_encrypt = __esm({
    "node_modules/jose/dist/browser/runtime/encrypt.js"() {
      init_buffer_utils();
      init_check_iv_length();
      init_check_cek_length();
      init_webcrypto();
      init_crypto_key();
      init_invalid_key_input();
      init_errors2();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/lib/aesgcmkw.js
  var init_aesgcmkw = __esm({
    "node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
      init_encrypt();
      init_decrypt();
      init_iv();
      init_base64url();
    }
  });

  // node_modules/jose/dist/browser/lib/decrypt_key_management.js
  var init_decrypt_key_management = __esm({
    "node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
      init_aeskw();
      init_ecdhes();
      init_pbes2kw();
      init_rsaes();
      init_base64url();
      init_errors2();
      init_cek();
      init_import();
      init_check_key_type();
      init_is_object();
      init_aesgcmkw();
    }
  });

  // node_modules/jose/dist/browser/lib/validate_crit.js
  function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
      throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === void 0) {
      return /* @__PURE__ */ new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
      throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== void 0) {
      recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    } else {
      recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
      if (!recognized.has(parameter)) {
        throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
      }
      if (joseHeader[parameter] === void 0) {
        throw new Err(`Extension Header Parameter "${parameter}" is missing`);
      } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
        throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
      }
    }
    return new Set(protectedHeader.crit);
  }
  var validate_crit_default;
  var init_validate_crit = __esm({
    "node_modules/jose/dist/browser/lib/validate_crit.js"() {
      init_errors2();
      __name(validateCrit, "validateCrit");
      validate_crit_default = validateCrit;
    }
  });

  // node_modules/jose/dist/browser/lib/validate_algorithms.js
  var validateAlgorithms, validate_algorithms_default;
  var init_validate_algorithms = __esm({
    "node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
      validateAlgorithms = /* @__PURE__ */ __name((option, algorithms) => {
        if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
          throw new TypeError(`"${option}" option must be an array of strings`);
        }
        if (!algorithms) {
          return void 0;
        }
        return new Set(algorithms);
      }, "validateAlgorithms");
      validate_algorithms_default = validateAlgorithms;
    }
  });

  // node_modules/jose/dist/browser/jwe/flattened/decrypt.js
  var init_decrypt2 = __esm({
    "node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
      init_base64url();
      init_decrypt();
      init_zlib();
      init_errors2();
      init_is_disjoint();
      init_is_object();
      init_decrypt_key_management();
      init_buffer_utils();
      init_cek();
      init_validate_crit();
      init_validate_algorithms();
    }
  });

  // node_modules/jose/dist/browser/jwe/compact/decrypt.js
  var init_decrypt3 = __esm({
    "node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
      init_decrypt2();
      init_errors2();
      init_buffer_utils();
    }
  });

  // node_modules/jose/dist/browser/jwe/general/decrypt.js
  var init_decrypt4 = __esm({
    "node_modules/jose/dist/browser/jwe/general/decrypt.js"() {
      init_decrypt2();
      init_errors2();
      init_is_object();
    }
  });

  // node_modules/jose/dist/browser/runtime/key_to_jwk.js
  var init_key_to_jwk = __esm({
    "node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
      init_webcrypto();
      init_invalid_key_input();
      init_base64url();
      init_is_key_like();
    }
  });

  // node_modules/jose/dist/browser/key/export.js
  var init_export = __esm({
    "node_modules/jose/dist/browser/key/export.js"() {
      init_asn1();
      init_asn1();
      init_key_to_jwk();
    }
  });

  // node_modules/jose/dist/browser/lib/encrypt_key_management.js
  var init_encrypt_key_management = __esm({
    "node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
      init_aeskw();
      init_ecdhes();
      init_pbes2kw();
      init_rsaes();
      init_base64url();
      init_cek();
      init_errors2();
      init_export();
      init_check_key_type();
      init_aesgcmkw();
    }
  });

  // node_modules/jose/dist/browser/jwe/flattened/encrypt.js
  var unprotected;
  var init_encrypt2 = __esm({
    "node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
      init_base64url();
      init_encrypt();
      init_zlib();
      init_iv();
      init_encrypt_key_management();
      init_errors2();
      init_is_disjoint();
      init_buffer_utils();
      init_validate_crit();
      unprotected = Symbol();
    }
  });

  // node_modules/jose/dist/browser/jwe/general/encrypt.js
  var init_encrypt3 = __esm({
    "node_modules/jose/dist/browser/jwe/general/encrypt.js"() {
      init_encrypt2();
      init_errors2();
      init_cek();
      init_is_disjoint();
      init_encrypt_key_management();
      init_base64url();
      init_validate_crit();
    }
  });

  // node_modules/jose/dist/browser/runtime/subtle_dsa.js
  function subtleDsa(alg, algorithm) {
    const hash2 = `SHA-${alg.slice(-3)}`;
    switch (alg) {
      case "HS256":
      case "HS384":
      case "HS512":
        return { hash: hash2, name: "HMAC" };
      case "PS256":
      case "PS384":
      case "PS512":
        return { hash: hash2, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
      case "RS256":
      case "RS384":
      case "RS512":
        return { hash: hash2, name: "RSASSA-PKCS1-v1_5" };
      case "ES256":
      case "ES384":
      case "ES512":
        return { hash: hash2, name: "ECDSA", namedCurve: algorithm.namedCurve };
      case "EdDSA":
        return { name: algorithm.name };
      default:
        throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
  }
  var init_subtle_dsa = __esm({
    "node_modules/jose/dist/browser/runtime/subtle_dsa.js"() {
      init_errors2();
      __name(subtleDsa, "subtleDsa");
    }
  });

  // node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
  function getCryptoKey(alg, key, usage) {
    if (isCryptoKey(key)) {
      checkSigCryptoKey(key, alg, usage);
      return key;
    }
    if (key instanceof Uint8Array) {
      if (!alg.startsWith("HS")) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
    }
    throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
  }
  var init_get_sign_verify_key = __esm({
    "node_modules/jose/dist/browser/runtime/get_sign_verify_key.js"() {
      init_webcrypto();
      init_crypto_key();
      init_invalid_key_input();
      init_is_key_like();
      __name(getCryptoKey, "getCryptoKey");
    }
  });

  // node_modules/jose/dist/browser/runtime/verify.js
  var verify, verify_default;
  var init_verify = __esm({
    "node_modules/jose/dist/browser/runtime/verify.js"() {
      init_subtle_dsa();
      init_webcrypto();
      init_check_key_length();
      init_get_sign_verify_key();
      verify = /* @__PURE__ */ __name(async (alg, key, signature, data) => {
        const cryptoKey = await getCryptoKey(alg, key, "verify");
        check_key_length_default(alg, cryptoKey);
        const algorithm = subtleDsa(alg, cryptoKey.algorithm);
        try {
          return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
        } catch (_a) {
          return false;
        }
      }, "verify");
      verify_default = verify;
    }
  });

  // node_modules/jose/dist/browser/jws/flattened/verify.js
  async function flattenedVerify(jws, key, options) {
    var _a;
    if (!isObject2(jws)) {
      throw new JWSInvalid("Flattened JWS must be an object");
    }
    if (jws.protected === void 0 && jws.header === void 0) {
      throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== void 0 && typeof jws.protected !== "string") {
      throw new JWSInvalid("JWS Protected Header incorrect type");
    }
    if (jws.payload === void 0) {
      throw new JWSInvalid("JWS Payload missing");
    }
    if (typeof jws.signature !== "string") {
      throw new JWSInvalid("JWS Signature missing or incorrect type");
    }
    if (jws.header !== void 0 && !isObject2(jws.header)) {
      throw new JWSInvalid("JWS Unprotected Header incorrect type");
    }
    let parsedProt = {};
    if (jws.protected) {
      try {
        const protectedHeader = decode2(jws.protected);
        parsedProt = JSON.parse(decoder.decode(protectedHeader));
      } catch (_b) {
        throw new JWSInvalid("JWS Protected Header is invalid");
      }
    }
    if (!is_disjoint_default(parsedProt, jws.header)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...parsedProt,
      ...jws.header
    };
    const extensions2 = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions2.has("b64")) {
      b64 = parsedProt.b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
      throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (b64) {
      if (typeof jws.payload !== "string") {
        throw new JWSInvalid("JWS Payload must be a string");
      }
    } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
      throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
    }
    let resolvedKey = false;
    if (typeof key === "function") {
      key = await key(parsedProt, jws);
      resolvedKey = true;
    }
    check_key_type_default(alg, key, "verify");
    const data = concat(encoder.encode((_a = jws.protected) !== null && _a !== void 0 ? _a : ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
    const signature = decode2(jws.signature);
    const verified = await verify_default(alg, key, signature, data);
    if (!verified) {
      throw new JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
      payload = decode2(jws.payload);
    } else if (typeof jws.payload === "string") {
      payload = encoder.encode(jws.payload);
    } else {
      payload = jws.payload;
    }
    const result = { payload };
    if (jws.protected !== void 0) {
      result.protectedHeader = parsedProt;
    }
    if (jws.header !== void 0) {
      result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
      return { ...result, key };
    }
    return result;
  }
  var init_verify2 = __esm({
    "node_modules/jose/dist/browser/jws/flattened/verify.js"() {
      init_base64url();
      init_verify();
      init_errors2();
      init_buffer_utils();
      init_is_disjoint();
      init_is_object();
      init_check_key_type();
      init_validate_crit();
      init_validate_algorithms();
      __name(flattenedVerify, "flattenedVerify");
    }
  });

  // node_modules/jose/dist/browser/jws/compact/verify.js
  async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
      jws = decoder.decode(jws);
    }
    if (typeof jws !== "string") {
      throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
    if (length !== 3) {
      throw new JWSInvalid("Invalid Compact JWS");
    }
    const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
    const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
    if (typeof key === "function") {
      return { ...result, key: verified.key };
    }
    return result;
  }
  var init_verify3 = __esm({
    "node_modules/jose/dist/browser/jws/compact/verify.js"() {
      init_verify2();
      init_errors2();
      init_buffer_utils();
      __name(compactVerify, "compactVerify");
    }
  });

  // node_modules/jose/dist/browser/jws/general/verify.js
  var init_verify4 = __esm({
    "node_modules/jose/dist/browser/jws/general/verify.js"() {
      init_verify2();
      init_errors2();
      init_is_object();
    }
  });

  // node_modules/jose/dist/browser/lib/epoch.js
  var epoch_default;
  var init_epoch = __esm({
    "node_modules/jose/dist/browser/lib/epoch.js"() {
      epoch_default = /* @__PURE__ */ __name((date) => Math.floor(date.getTime() / 1e3), "default");
    }
  });

  // node_modules/jose/dist/browser/lib/secs.js
  var minute, hour, day, week, year, REGEX, secs_default;
  var init_secs = __esm({
    "node_modules/jose/dist/browser/lib/secs.js"() {
      minute = 60;
      hour = minute * 60;
      day = hour * 24;
      week = day * 7;
      year = day * 365.25;
      REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
      secs_default = /* @__PURE__ */ __name((str) => {
        const matched = REGEX.exec(str);
        if (!matched) {
          throw new TypeError("Invalid time period format");
        }
        const value = parseFloat(matched[1]);
        const unit = matched[2].toLowerCase();
        switch (unit) {
          case "sec":
          case "secs":
          case "second":
          case "seconds":
          case "s":
            return Math.round(value);
          case "minute":
          case "minutes":
          case "min":
          case "mins":
          case "m":
            return Math.round(value * minute);
          case "hour":
          case "hours":
          case "hr":
          case "hrs":
          case "h":
            return Math.round(value * hour);
          case "day":
          case "days":
          case "d":
            return Math.round(value * day);
          case "week":
          case "weeks":
          case "w":
            return Math.round(value * week);
          default:
            return Math.round(value * year);
        }
      }, "default");
    }
  });

  // node_modules/jose/dist/browser/lib/jwt_claims_set.js
  var normalizeTyp, checkAudiencePresence, jwt_claims_set_default;
  var init_jwt_claims_set = __esm({
    "node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
      init_errors2();
      init_buffer_utils();
      init_epoch();
      init_secs();
      init_is_object();
      normalizeTyp = /* @__PURE__ */ __name((value) => value.toLowerCase().replace(/^application\//, ""), "normalizeTyp");
      checkAudiencePresence = /* @__PURE__ */ __name((audPayload, audOption) => {
        if (typeof audPayload === "string") {
          return audOption.includes(audPayload);
        }
        if (Array.isArray(audPayload)) {
          return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
        }
        return false;
      }, "checkAudiencePresence");
      jwt_claims_set_default = /* @__PURE__ */ __name((protectedHeader, encodedPayload, options = {}) => {
        const { typ } = options;
        if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
          throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
        }
        let payload;
        try {
          payload = JSON.parse(decoder.decode(encodedPayload));
        } catch (_a) {
        }
        if (!isObject2(payload)) {
          throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
        }
        const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
        if (maxTokenAge !== void 0)
          requiredClaims.push("iat");
        if (audience !== void 0)
          requiredClaims.push("aud");
        if (subject !== void 0)
          requiredClaims.push("sub");
        if (issuer !== void 0)
          requiredClaims.push("iss");
        for (const claim of new Set(requiredClaims.reverse())) {
          if (!(claim in payload)) {
            throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, "missing");
          }
        }
        if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
          throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
        }
        if (subject && payload.sub !== subject) {
          throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
        }
        if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
          throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
        }
        let tolerance;
        switch (typeof options.clockTolerance) {
          case "string":
            tolerance = secs_default(options.clockTolerance);
            break;
          case "number":
            tolerance = options.clockTolerance;
            break;
          case "undefined":
            tolerance = 0;
            break;
          default:
            throw new TypeError("Invalid clockTolerance option type");
        }
        const { currentDate } = options;
        const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
        if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
          throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
        }
        if (payload.nbf !== void 0) {
          if (typeof payload.nbf !== "number") {
            throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
          }
          if (payload.nbf > now + tolerance) {
            throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
          }
        }
        if (payload.exp !== void 0) {
          if (typeof payload.exp !== "number") {
            throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
          }
          if (payload.exp <= now - tolerance) {
            throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
          }
        }
        if (maxTokenAge) {
          const age = now - payload.iat;
          const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
          if (age - tolerance > max) {
            throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
          }
          if (age < 0 - tolerance) {
            throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
          }
        }
        return payload;
      }, "default");
    }
  });

  // node_modules/jose/dist/browser/jwt/verify.js
  async function jwtVerify(jwt, key, options) {
    var _a;
    const verified = await compactVerify(jwt, key, options);
    if (((_a = verified.protectedHeader.crit) === null || _a === void 0 ? void 0 : _a.includes("b64")) && verified.protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
    const result = { payload, protectedHeader: verified.protectedHeader };
    if (typeof key === "function") {
      return { ...result, key: verified.key };
    }
    return result;
  }
  var init_verify5 = __esm({
    "node_modules/jose/dist/browser/jwt/verify.js"() {
      init_verify3();
      init_jwt_claims_set();
      init_errors2();
      __name(jwtVerify, "jwtVerify");
    }
  });

  // node_modules/jose/dist/browser/jwt/decrypt.js
  var init_decrypt5 = __esm({
    "node_modules/jose/dist/browser/jwt/decrypt.js"() {
      init_decrypt3();
      init_jwt_claims_set();
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/jwe/compact/encrypt.js
  var init_encrypt4 = __esm({
    "node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
      init_encrypt2();
    }
  });

  // node_modules/jose/dist/browser/runtime/sign.js
  var sign, sign_default;
  var init_sign = __esm({
    "node_modules/jose/dist/browser/runtime/sign.js"() {
      init_subtle_dsa();
      init_webcrypto();
      init_check_key_length();
      init_get_sign_verify_key();
      sign = /* @__PURE__ */ __name(async (alg, key, data) => {
        const cryptoKey = await getCryptoKey(alg, key, "sign");
        check_key_length_default(alg, cryptoKey);
        const signature = await webcrypto_default.subtle.sign(subtleDsa(alg, cryptoKey.algorithm), cryptoKey, data);
        return new Uint8Array(signature);
      }, "sign");
      sign_default = sign;
    }
  });

  // node_modules/jose/dist/browser/jws/flattened/sign.js
  var FlattenedSign;
  var init_sign2 = __esm({
    "node_modules/jose/dist/browser/jws/flattened/sign.js"() {
      init_base64url();
      init_sign();
      init_is_disjoint();
      init_errors2();
      init_buffer_utils();
      init_check_key_type();
      init_validate_crit();
      FlattenedSign = class {
        static {
          __name(this, "FlattenedSign");
        }
        constructor(payload) {
          if (!(payload instanceof Uint8Array)) {
            throw new TypeError("payload must be an instance of Uint8Array");
          }
          this._payload = payload;
        }
        setProtectedHeader(protectedHeader) {
          if (this._protectedHeader) {
            throw new TypeError("setProtectedHeader can only be called once");
          }
          this._protectedHeader = protectedHeader;
          return this;
        }
        setUnprotectedHeader(unprotectedHeader) {
          if (this._unprotectedHeader) {
            throw new TypeError("setUnprotectedHeader can only be called once");
          }
          this._unprotectedHeader = unprotectedHeader;
          return this;
        }
        async sign(key, options) {
          if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
          }
          if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader)) {
            throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
          }
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
          };
          const extensions2 = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
          let b64 = true;
          if (extensions2.has("b64")) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== "boolean") {
              throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
          }
          const { alg } = joseHeader;
          if (typeof alg !== "string" || !alg) {
            throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
          }
          check_key_type_default(alg, key, "sign");
          let payload = this._payload;
          if (b64) {
            payload = encoder.encode(encode(payload));
          }
          let protectedHeader;
          if (this._protectedHeader) {
            protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
          } else {
            protectedHeader = encoder.encode("");
          }
          const data = concat(protectedHeader, encoder.encode("."), payload);
          const signature = await sign_default(alg, key, data);
          const jws = {
            signature: encode(signature),
            payload: ""
          };
          if (b64) {
            jws.payload = decoder.decode(payload);
          }
          if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
          }
          if (this._protectedHeader) {
            jws.protected = decoder.decode(protectedHeader);
          }
          return jws;
        }
      };
    }
  });

  // node_modules/jose/dist/browser/jws/compact/sign.js
  var CompactSign;
  var init_sign3 = __esm({
    "node_modules/jose/dist/browser/jws/compact/sign.js"() {
      init_sign2();
      CompactSign = class {
        static {
          __name(this, "CompactSign");
        }
        constructor(payload) {
          this._flattened = new FlattenedSign(payload);
        }
        setProtectedHeader(protectedHeader) {
          this._flattened.setProtectedHeader(protectedHeader);
          return this;
        }
        async sign(key, options) {
          const jws = await this._flattened.sign(key, options);
          if (jws.payload === void 0) {
            throw new TypeError("use the flattened module for creating JWS with b64: false");
          }
          return `${jws.protected}.${jws.payload}.${jws.signature}`;
        }
      };
    }
  });

  // node_modules/jose/dist/browser/jws/general/sign.js
  var init_sign4 = __esm({
    "node_modules/jose/dist/browser/jws/general/sign.js"() {
      init_sign2();
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/jwt/produce.js
  var ProduceJWT;
  var init_produce = __esm({
    "node_modules/jose/dist/browser/jwt/produce.js"() {
      init_epoch();
      init_is_object();
      init_secs();
      ProduceJWT = class {
        static {
          __name(this, "ProduceJWT");
        }
        constructor(payload) {
          if (!isObject2(payload)) {
            throw new TypeError("JWT Claims Set MUST be an object");
          }
          this._payload = payload;
        }
        setIssuer(issuer) {
          this._payload = { ...this._payload, iss: issuer };
          return this;
        }
        setSubject(subject) {
          this._payload = { ...this._payload, sub: subject };
          return this;
        }
        setAudience(audience) {
          this._payload = { ...this._payload, aud: audience };
          return this;
        }
        setJti(jwtId) {
          this._payload = { ...this._payload, jti: jwtId };
          return this;
        }
        setNotBefore(input) {
          if (typeof input === "number") {
            this._payload = { ...this._payload, nbf: input };
          } else {
            this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
          }
          return this;
        }
        setExpirationTime(input) {
          if (typeof input === "number") {
            this._payload = { ...this._payload, exp: input };
          } else {
            this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
          }
          return this;
        }
        setIssuedAt(input) {
          if (typeof input === "undefined") {
            this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
          } else {
            this._payload = { ...this._payload, iat: input };
          }
          return this;
        }
      };
    }
  });

  // node_modules/jose/dist/browser/jwt/sign.js
  var SignJWT;
  var init_sign5 = __esm({
    "node_modules/jose/dist/browser/jwt/sign.js"() {
      init_sign3();
      init_errors2();
      init_buffer_utils();
      init_produce();
      SignJWT = class extends ProduceJWT {
        static {
          __name(this, "SignJWT");
        }
        setProtectedHeader(protectedHeader) {
          this._protectedHeader = protectedHeader;
          return this;
        }
        async sign(key, options) {
          var _a;
          const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
          sig.setProtectedHeader(this._protectedHeader);
          if (Array.isArray((_a = this._protectedHeader) === null || _a === void 0 ? void 0 : _a.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
            throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
          }
          return sig.sign(key, options);
        }
      };
    }
  });

  // node_modules/jose/dist/browser/jwt/encrypt.js
  var init_encrypt5 = __esm({
    "node_modules/jose/dist/browser/jwt/encrypt.js"() {
      init_encrypt4();
      init_buffer_utils();
      init_produce();
    }
  });

  // node_modules/jose/dist/browser/jwk/thumbprint.js
  var init_thumbprint = __esm({
    "node_modules/jose/dist/browser/jwk/thumbprint.js"() {
      init_digest();
      init_base64url();
      init_errors2();
      init_buffer_utils();
      init_is_object();
    }
  });

  // node_modules/jose/dist/browser/jwk/embedded.js
  var init_embedded = __esm({
    "node_modules/jose/dist/browser/jwk/embedded.js"() {
      init_import();
      init_is_object();
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/jwks/local.js
  function getKtyFromAlg(alg) {
    switch (typeof alg === "string" && alg.slice(0, 2)) {
      case "RS":
      case "PS":
        return "RSA";
      case "ES":
        return "EC";
      case "Ed":
        return "OKP";
      default:
        throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
    }
  }
  function isJWKSLike(jwks) {
    return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
  }
  function isJWKLike(key) {
    return isObject2(key);
  }
  function clone(obj) {
    if (typeof structuredClone === "function") {
      return structuredClone(obj);
    }
    return JSON.parse(JSON.stringify(obj));
  }
  async function importWithAlgCache(cache, jwk, alg) {
    const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
    if (cached[alg] === void 0) {
      const key = await importJWK({ ...jwk, ext: true }, alg);
      if (key instanceof Uint8Array || key.type !== "public") {
        throw new JWKSInvalid("JSON Web Key Set members must be public keys");
      }
      cached[alg] = key;
    }
    return cached[alg];
  }
  function createLocalJWKSet(jwks) {
    const set = new LocalJWKSet(jwks);
    return async function(protectedHeader, token) {
      return set.getKey(protectedHeader, token);
    };
  }
  var LocalJWKSet;
  var init_local = __esm({
    "node_modules/jose/dist/browser/jwks/local.js"() {
      init_import();
      init_errors2();
      init_is_object();
      __name(getKtyFromAlg, "getKtyFromAlg");
      __name(isJWKSLike, "isJWKSLike");
      __name(isJWKLike, "isJWKLike");
      __name(clone, "clone");
      LocalJWKSet = class {
        static {
          __name(this, "LocalJWKSet");
        }
        constructor(jwks) {
          this._cached = /* @__PURE__ */ new WeakMap();
          if (!isJWKSLike(jwks)) {
            throw new JWKSInvalid("JSON Web Key Set malformed");
          }
          this._jwks = clone(jwks);
        }
        async getKey(protectedHeader, token) {
          const { alg, kid } = { ...protectedHeader, ...token === null || token === void 0 ? void 0 : token.header };
          const kty = getKtyFromAlg(alg);
          const candidates = this._jwks.keys.filter((jwk2) => {
            let candidate = kty === jwk2.kty;
            if (candidate && typeof kid === "string") {
              candidate = kid === jwk2.kid;
            }
            if (candidate && typeof jwk2.alg === "string") {
              candidate = alg === jwk2.alg;
            }
            if (candidate && typeof jwk2.use === "string") {
              candidate = jwk2.use === "sig";
            }
            if (candidate && Array.isArray(jwk2.key_ops)) {
              candidate = jwk2.key_ops.includes("verify");
            }
            if (candidate && alg === "EdDSA") {
              candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
            }
            if (candidate) {
              switch (alg) {
                case "ES256":
                  candidate = jwk2.crv === "P-256";
                  break;
                case "ES256K":
                  candidate = jwk2.crv === "secp256k1";
                  break;
                case "ES384":
                  candidate = jwk2.crv === "P-384";
                  break;
                case "ES512":
                  candidate = jwk2.crv === "P-521";
                  break;
              }
            }
            return candidate;
          });
          const { 0: jwk, length } = candidates;
          if (length === 0) {
            throw new JWKSNoMatchingKey();
          } else if (length !== 1) {
            const error = new JWKSMultipleMatchingKeys();
            const { _cached } = this;
            error[Symbol.asyncIterator] = async function* () {
              for (const jwk2 of candidates) {
                try {
                  yield await importWithAlgCache(_cached, jwk2, alg);
                } catch (_a) {
                  continue;
                }
              }
            };
            throw error;
          }
          return importWithAlgCache(this._cached, jwk, alg);
        }
      };
      __name(importWithAlgCache, "importWithAlgCache");
      __name(createLocalJWKSet, "createLocalJWKSet");
    }
  });

  // node_modules/jose/dist/browser/runtime/fetch_jwks.js
  var fetchJwks, fetch_jwks_default;
  var init_fetch_jwks = __esm({
    "node_modules/jose/dist/browser/runtime/fetch_jwks.js"() {
      init_errors2();
      fetchJwks = /* @__PURE__ */ __name(async (url, timeout, options) => {
        let controller;
        let id;
        let timedOut = false;
        if (typeof AbortController === "function") {
          controller = new AbortController();
          id = setTimeout(() => {
            timedOut = true;
            controller.abort();
          }, timeout);
        }
        const response = await fetch(url.href, {
          signal: controller ? controller.signal : void 0,
          redirect: "manual",
          headers: options.headers
        }).catch((err) => {
          if (timedOut)
            throw new JWKSTimeout();
          throw err;
        });
        if (id !== void 0)
          clearTimeout(id);
        if (response.status !== 200) {
          throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
        }
        try {
          return await response.json();
        } catch (_a) {
          throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
        }
      }, "fetchJwks");
      fetch_jwks_default = fetchJwks;
    }
  });

  // node_modules/jose/dist/browser/jwks/remote.js
  function isCloudflareWorkers() {
    return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
  }
  function createRemoteJWKSet(url, options) {
    const set = new RemoteJWKSet(url, options);
    return async function(protectedHeader, token) {
      return set.getKey(protectedHeader, token);
    };
  }
  var RemoteJWKSet;
  var init_remote = __esm({
    "node_modules/jose/dist/browser/jwks/remote.js"() {
      init_fetch_jwks();
      init_errors2();
      init_local();
      __name(isCloudflareWorkers, "isCloudflareWorkers");
      RemoteJWKSet = class extends LocalJWKSet {
        static {
          __name(this, "RemoteJWKSet");
        }
        constructor(url, options) {
          super({ keys: [] });
          this._jwks = void 0;
          if (!(url instanceof URL)) {
            throw new TypeError("url must be an instance of URL");
          }
          this._url = new URL(url.href);
          this._options = { agent: options === null || options === void 0 ? void 0 : options.agent, headers: options === null || options === void 0 ? void 0 : options.headers };
          this._timeoutDuration = typeof (options === null || options === void 0 ? void 0 : options.timeoutDuration) === "number" ? options === null || options === void 0 ? void 0 : options.timeoutDuration : 5e3;
          this._cooldownDuration = typeof (options === null || options === void 0 ? void 0 : options.cooldownDuration) === "number" ? options === null || options === void 0 ? void 0 : options.cooldownDuration : 3e4;
          this._cacheMaxAge = typeof (options === null || options === void 0 ? void 0 : options.cacheMaxAge) === "number" ? options === null || options === void 0 ? void 0 : options.cacheMaxAge : 6e5;
        }
        coolingDown() {
          return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
        }
        fresh() {
          return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
        }
        async getKey(protectedHeader, token) {
          if (!this._jwks || !this.fresh()) {
            await this.reload();
          }
          try {
            return await super.getKey(protectedHeader, token);
          } catch (err) {
            if (err instanceof JWKSNoMatchingKey) {
              if (this.coolingDown() === false) {
                await this.reload();
                return super.getKey(protectedHeader, token);
              }
            }
            throw err;
          }
        }
        async reload() {
          if (this._pendingFetch && isCloudflareWorkers()) {
            this._pendingFetch = void 0;
          }
          this._pendingFetch || (this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json) => {
            if (!isJWKSLike(json)) {
              throw new JWKSInvalid("JSON Web Key Set malformed");
            }
            this._jwks = { keys: json.keys };
            this._jwksTimestamp = Date.now();
            this._pendingFetch = void 0;
          }).catch((err) => {
            this._pendingFetch = void 0;
            throw err;
          }));
          await this._pendingFetch;
        }
      };
      __name(createRemoteJWKSet, "createRemoteJWKSet");
    }
  });

  // node_modules/jose/dist/browser/jwt/unsecured.js
  var init_unsecured = __esm({
    "node_modules/jose/dist/browser/jwt/unsecured.js"() {
      init_base64url();
      init_buffer_utils();
      init_errors2();
      init_jwt_claims_set();
      init_produce();
    }
  });

  // node_modules/jose/dist/browser/util/base64url.js
  var init_base64url2 = __esm({
    "node_modules/jose/dist/browser/util/base64url.js"() {
      init_base64url();
    }
  });

  // node_modules/jose/dist/browser/util/decode_protected_header.js
  var init_decode_protected_header = __esm({
    "node_modules/jose/dist/browser/util/decode_protected_header.js"() {
      init_base64url2();
      init_buffer_utils();
      init_is_object();
    }
  });

  // node_modules/jose/dist/browser/util/decode_jwt.js
  var init_decode_jwt = __esm({
    "node_modules/jose/dist/browser/util/decode_jwt.js"() {
      init_base64url2();
      init_buffer_utils();
      init_is_object();
      init_errors2();
    }
  });

  // node_modules/jose/dist/browser/runtime/generate.js
  var init_generate = __esm({
    "node_modules/jose/dist/browser/runtime/generate.js"() {
      init_webcrypto();
      init_errors2();
      init_random();
    }
  });

  // node_modules/jose/dist/browser/key/generate_key_pair.js
  var init_generate_key_pair = __esm({
    "node_modules/jose/dist/browser/key/generate_key_pair.js"() {
      init_generate();
    }
  });

  // node_modules/jose/dist/browser/key/generate_secret.js
  var init_generate_secret = __esm({
    "node_modules/jose/dist/browser/key/generate_secret.js"() {
      init_generate();
    }
  });

  // node_modules/jose/dist/browser/index.js
  var init_browser2 = __esm({
    "node_modules/jose/dist/browser/index.js"() {
      init_decrypt3();
      init_decrypt2();
      init_decrypt4();
      init_encrypt3();
      init_verify3();
      init_verify2();
      init_verify4();
      init_verify5();
      init_decrypt5();
      init_encrypt4();
      init_encrypt2();
      init_sign3();
      init_sign2();
      init_sign4();
      init_sign5();
      init_encrypt5();
      init_thumbprint();
      init_embedded();
      init_local();
      init_remote();
      init_unsecured();
      init_export();
      init_import();
      init_decode_protected_header();
      init_decode_jwt();
      init_errors2();
      init_generate_key_pair();
      init_generate_secret();
      init_base64url2();
    }
  });

  // packages/runtime/dist/utils/retry.js
  async function fetchRetry(options, request, requestInit) {
    for (let i = 0; i <= options.retries; i++) {
      const fetched = internals_default.fetch(request, requestInit);
      if (i === options.retries) {
        return fetched;
      }
      const res = await fetched;
      if (res.status < 500 && res.status !== 429) {
        return res;
      } else {
        options?.logger?.error(`Request failed, retrying`, {
          method: typeof request === "string" ? "GET" : request.method,
          url: typeof request === "string" ? request : request.url,
          status: res.status
        });
      }
      await new Promise((resolve) => setTimeout(resolve, options.retryDelayMs * Math.pow(2, i)));
    }
    throw new ConfigurationError("An unknown error occurred, ensure retries is not negative");
  }
  var init_retry = __esm({
    "packages/runtime/dist/utils/retry.js"() {
      "use strict";
      init_errors();
      init_internals();
      __name(fetchRetry, "fetchRetry");
    }
  });

  // packages/runtime/dist/utils/gcp.js
  async function getTokenFromGcpServiceAccount({ serviceAccount: serviceAccount5, audience, expirationTime = "1h", payload = {} }) {
    const { clientEmail, privateKeyId, privateKey } = serviceAccount5;
    const jwt = await new SignJWT(payload).setProtectedHeader({ alg: "RS256", kid: privateKeyId }).setIssuer(clientEmail).setSubject(clientEmail).setAudience(audience).setIssuedAt().setExpirationTime(expirationTime).sign(privateKey);
    return jwt;
  }
  async function exchangeFirebaseJwtForIdToken(audience, token, retryOptions) {
    return fetchToken(audience, {
      token,
      returnSecureToken: true
    }, retryOptions);
  }
  async function exchangeGgpJwtForIdToken(audience, token, retryOptions) {
    return fetchToken(audience, {
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: token
    }, retryOptions);
  }
  async function fetchToken(audience, body, retryOptions) {
    const response = await fetchRetry(retryOptions, audience, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(body)
    });
    if (response.status !== 200) {
      let extensionMembers;
      try {
        const text = await response.text();
        const data = JSON.parse(text);
        extensionMembers = { cause: data.error ?? data };
      } catch (err) {
      }
      throw new RuntimeError({
        message: "Could not get token from Google Identity",
        extensionMembers
      });
    }
    const result = await response.json();
    return result;
  }
  var GcpServiceAccount;
  var init_gcp = __esm({
    "packages/runtime/dist/utils/gcp.js"() {
      "use strict";
      init_browser2();
      init_errors();
      init_retry();
      __name(getTokenFromGcpServiceAccount, "getTokenFromGcpServiceAccount");
      __name(exchangeFirebaseJwtForIdToken, "exchangeFirebaseJwtForIdToken");
      __name(exchangeGgpJwtForIdToken, "exchangeGgpJwtForIdToken");
      __name(fetchToken, "fetchToken");
      GcpServiceAccount = class _GcpServiceAccount {
        static {
          __name(this, "GcpServiceAccount");
        }
        #privateKey;
        #serviceAccount;
        constructor({ serviceAccount: serviceAccount5, privateKey }) {
          this.#serviceAccount = serviceAccount5;
          this.#privateKey = privateKey;
        }
        static async init(serviceAccountJson) {
          const serviceAccount5 = JSON.parse(serviceAccountJson);
          const privateKey = await importPKCS8(serviceAccount5.private_key.trim(), "RS256");
          return new _GcpServiceAccount({ serviceAccount: serviceAccount5, privateKey });
        }
        get type() {
          return this.#serviceAccount.type;
        }
        get projectId() {
          return this.#serviceAccount.project_id;
        }
        get privateKeyId() {
          return this.#serviceAccount.private_key_id;
        }
        get privateKey() {
          return this.#privateKey;
        }
        get clientEmail() {
          return this.#serviceAccount.client_email;
        }
        get clientId() {
          return this.#serviceAccount.client_id;
        }
        get authUri() {
          return this.#serviceAccount.auth_uri;
        }
        get tokenUrl() {
          return this.#serviceAccount.token_url;
        }
        get authProviderX509CertUrl() {
          return this.#serviceAccount.auth_provider_x509_cert_url;
        }
        get clientX509CertUrl() {
          return this.#serviceAccount.client_x509_cert_url;
        }
        get universalDomain() {
          return this.#serviceAccount.universe_domain;
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/google-transport.js
  var GoogleCloudLoggingPlugin, GCP_LOGGING_ENDPOINT, ZuploToGCPMap, GoogleLogTransport;
  var init_google_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/google-transport.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_gcp();
      init_log_plugin();
      init_log_serializer_utils();
      GoogleCloudLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "GoogleCloudLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new GoogleLogTransport(this.options);
        }
      };
      GCP_LOGGING_ENDPOINT = "https://logging.googleapis.com/v2/entries:write?alt=json";
      ZuploToGCPMap = {
        error: "ERROR",
        warn: "WARNING",
        info: "INFO",
        debug: "DEBUG"
      };
      GoogleLogTransport = class {
        static {
          __name(this, "GoogleLogTransport");
        }
        constructor(options) {
          this.#logName = options.logName;
          this.#serviceAccountJson = options.serviceAccountJson;
          this.#environmentType = Environment.instance.loggingEnvironmentType;
          this.#environmentStage = Environment.instance.loggingEnvironmentStage;
          this.#environment = Environment.instance.deploymentName;
        }
        #serviceAccountJson;
        #serviceAccount;
        #logName;
        #environment;
        #environmentType;
        #environmentStage;
        async init() {
          this.#serviceAccount = await GcpServiceAccount.init(this.#serviceAccountJson);
        }
        log(logEntry, context) {
          if (!this.#serviceAccount) {
            throw new SystemError("Invalid state - Google log transport is not initialized");
          }
          if (logEntry.messages.length === 0) {
            return;
          }
          const serializableEntry = {
            allMessages: makeErrorsSerializable(logEntry.messages)
          };
          const projectID = this.#serviceAccount.projectId ?? "zuplo-production";
          const gcpEntry = {
            logName: this.#logName,
            resource: { type: "global" },
            severity: ZuploToGCPMap[logEntry.level],
            timestamp: logEntry.timestamp,
            trace: `projects/${projectID}/traces/${logEntry.requestId}`,
            labels: {
              requestId: logEntry.requestId,
              buildId: logEntry.buildId,
              source: logEntry.logSource,
              loggingId: logEntry.loggingId,
              logOwner: logEntry.logOwner,
              environment: this.#environment,
              environmentType: this.#environmentType,
              environmentStage: this.#environmentStage
            }
          };
          if (logEntry.rayId) {
            gcpEntry.labels.rayId = logEntry.rayId;
          }
          const message2 = extractBestMessage(serializableEntry.allMessages);
          gcpEntry.jsonPayload = { ...serializableEntry, message: message2 };
          this.batcher.enqueue(gcpEntry);
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
        dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          if (!this.#serviceAccount) {
            this.#serviceAccount = await GcpServiceAccount.init(this.#serviceAccountJson);
          }
          const token = await getTokenFromGcpServiceAccount({
            serviceAccount: this.#serviceAccount,
            audience: "https://logging.googleapis.com/google.logging.v2.LoggingServiceV2"
          });
          const result = await internals_default.fetch(GCP_LOGGING_ENDPOINT, {
            method: "POST",
            body: JSON.stringify({
              entries
            }),
            headers: {
              Authorization: `Bearer ${token}`,
              "content-type": "application/json;charset=UTF-8"
            }
          });
          if (!result.ok) {
            console.error(result.status, result.statusText, await result.text());
          }
        };
        batcher = new BatchDispatch("google-log-transport", 1, this.dispatchFunction);
      };
    }
  });

  // packages/runtime/dist/logging/v1/gcp-log-format.js
  function gcpLogFormat(logEntry) {
    const serializableEntry = {
      allMessages: makeErrorsSerializable(logEntry.messages)
    };
    const projectID = "zuplo-production";
    const message2 = extractBestMessage(serializableEntry.allMessages);
    const gcpEntry = {
      logName: `projects/${projectID}/logs/runtime-user`,
      message: message2,
      severity: ZuploToGCPMap[logEntry.level],
      timestamp: logEntry.timestamp,
      "logging.googleapis.com/labels": {
        buildId: logEntry.buildId,
        source: logEntry.logSource,
        loggingId: logEntry.loggingId,
        logOwner: logEntry.logOwner
      },
      "logging.googleapis.com/trace": `projects/${projectID}/traces/${logEntry.requestId}`,
      allMessages: serializableEntry.allMessages
    };
    if (logEntry.rayId) {
      gcpEntry["logging.googleapis.com/labels"].rayId = logEntry.rayId;
    }
    return gcpEntry;
  }
  var GCP_LOG_FORMAT;
  var init_gcp_log_format = __esm({
    "packages/runtime/dist/logging/v1/gcp-log-format.js"() {
      "use strict";
      init_log_serializer_utils();
      init_google_transport();
      GCP_LOG_FORMAT = "gcp";
      __name(gcpLogFormat, "gcpLogFormat");
    }
  });

  // packages/runtime/dist/logging/v1/transports/console-transport.js
  var ConsoleTransport;
  var init_console_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/console-transport.js"() {
      "use strict";
      init_gcp_log_format();
      ConsoleTransport = class {
        static {
          __name(this, "ConsoleTransport");
        }
        constructor(impl, format) {
          this.#impl = impl ?? console;
          this.#format = format;
        }
        #impl;
        #format;
        log(logEntry) {
          if (this.#format === GCP_LOG_FORMAT) {
            if (logEntry.messages.length === 0) {
              return;
            }
            this.#impl[logEntry.level].apply(null, [gcpLogFormat(logEntry)]);
          } else {
            this.#impl[logEntry.level].apply(null, [
              ...logEntry.messages,
              {
                logOwner: logEntry.logOwner,
                logSource: logEntry.logSource,
                level: logEntry.level,
                timestamp: logEntry.timestamp,
                loggingId: logEntry.loggingId,
                rayId: logEntry.rayId,
                requestId: logEntry.requestId,
                buildId: logEntry.buildId
              }
            ]);
          }
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/data-dog-transport.js
  var DataDogLoggingPlugin, DD_TAG_PROP, DD_ATTR_PROP, cleanTagText, formatTags, DataDogTransport;
  var init_data_dog_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/data-dog-transport.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_log_plugin();
      init_log_serializer_utils();
      DataDogLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "DataDogLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new DataDogTransport(this.options);
        }
      };
      DD_TAG_PROP = "__ddtags";
      DD_ATTR_PROP = "__ddattr";
      cleanTagText = /* @__PURE__ */ __name((text) => {
        return text.replaceAll(",", "_").replaceAll(":", "_");
      }, "cleanTagText");
      formatTags = /* @__PURE__ */ __name((tags) => {
        const keys = Object.keys(tags);
        const keyValuePairs = [];
        keys.forEach((key) => {
          const value = tags[key];
          if (value === null || value === void 0) {
            keyValuePairs.push(cleanTagText(key));
          } else {
            keyValuePairs.push(`${cleanTagText(key)}:${cleanTagText(value.toString())}`);
          }
        });
        return keyValuePairs.join(",");
      }, "formatTags");
      DataDogTransport = class {
        static {
          __name(this, "DataDogTransport");
        }
        constructor(options) {
          this.#apiKey = options.apiKey;
          this.#baseUrl = options.url ?? "https://http-intake.logs.datadoghq.com/api/v2/logs";
          this.#environmentType = Environment.instance.loggingEnvironmentType;
          this.#environmentStage = Environment.instance.loggingEnvironmentStage;
          this.#environment = Environment.instance.deploymentName;
        }
        #apiKey;
        #baseUrl;
        #environment;
        #environmentType;
        #environmentStage;
        log(logEntry, context) {
          const tags = {};
          const contextLevelTags = context.custom[DD_TAG_PROP];
          if (contextLevelTags && typeof contextLevelTags === "object") {
            Object.assign(tags, contextLevelTags);
          }
          const newMessages = [...logEntry.messages];
          const indexOfTags = logEntry.messages.findIndex((message2) => {
            return message2[DD_TAG_PROP] !== void 0;
          });
          if (indexOfTags > -1) {
            Object.assign(tags, newMessages[indexOfTags][DD_TAG_PROP]);
            newMessages.splice(indexOfTags, 1);
          }
          const attributes = {};
          const contextLevelAttributes = context.custom[DD_ATTR_PROP];
          if (contextLevelAttributes && typeof contextLevelAttributes === "object") {
            Object.assign(attributes, contextLevelAttributes);
          }
          const indexOfAttr = logEntry.messages.findIndex((message2) => {
            return message2[DD_ATTR_PROP] !== void 0;
          });
          if (indexOfAttr > -1) {
            Object.assign(attributes, newMessages[indexOfAttr][DD_ATTR_PROP]);
            newMessages.splice(indexOfAttr, 1);
          }
          const serializableMessages = makeErrorsSerializable(newMessages);
          const legacyEntry = {
            ...logEntry,
            activityId: logEntry.requestId,
            trace: logEntry.requestId
          };
          const serializableEntry = {
            message: { ...legacyEntry, messages: serializableMessages },
            ddsource: "Zuplo",
            hostname: new URL(context.originalRequest.url).hostname,
            msg: extractBestMessage(serializableMessages),
            service: logEntry.loggingId,
            ddtags: formatTags(tags),
            environment: this.#environment,
            environment_type: this.#environmentType,
            environment_stage: this.#environmentStage
          };
          Object.assign(serializableEntry, attributes);
          this.batcher.enqueue(serializableEntry);
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
        dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          await internals_default.fetch(this.#baseUrl, {
            method: "POST",
            body: JSON.stringify([...entries]),
            headers: {
              "content-type": "application/json",
              "DD-API-KEY": this.#apiKey
            }
          });
        };
        batcher = new BatchDispatch("data-dog-transport", 10, this.dispatchFunction);
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/process-transport.js
  var ProcessTransport;
  var init_process_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/process-transport.js"() {
      "use strict";
      init_gcp_log_format();
      ProcessTransport = class {
        static {
          __name(this, "ProcessTransport");
        }
        constructor(impl, format) {
          this.#impl = impl;
          this.#format = format;
        }
        #impl;
        #format;
        log(logEntry) {
          if (this.#format === GCP_LOG_FORMAT) {
            if (logEntry.messages.length === 0) {
              return;
            }
            this.#impl[logEntry.level].apply(null, [gcpLogFormat(logEntry)]);
          } else {
            this.#impl[logEntry.level].apply(null, [
              ...logEntry.messages,
              {
                logOwner: logEntry.logOwner,
                logSource: logEntry.logSource,
                timestamp: logEntry.timestamp,
                loggingId: logEntry.loggingId,
                rayId: logEntry.rayId,
                requestId: logEntry.requestId,
                buildId: logEntry.buildId,
                vectorClock: logEntry.vectorClock
              }
            ]);
          }
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/remote-log-transport.js
  var dispatchFunction, batcher, RemoteLogTransport;
  var init_remote_log_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/remote-log-transport.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_log_serializer_utils();
      dispatchFunction = /* @__PURE__ */ __name(({ url, remoteLogToken, loggingId, sendOnlyErrors }) => {
        return async (entries) => {
          let filteredEntries;
          if (sendOnlyErrors === true) {
            filteredEntries = entries.filter((entry) => entry.level === "error");
          } else {
            filteredEntries = entries;
          }
          if (filteredEntries.length === 0) {
            return;
          }
          try {
            await internals_default.fetch(`${url}/publish/${loggingId}`, {
              method: "POST",
              body: JSON.stringify({
                timestamp: Date.now(),
                type: "log",
                message: filteredEntries.map((entry) => {
                  return {
                    ...entry,
                    messages: makeErrorsSerializable(entry.messages)
                  };
                })
              }),
              headers: {
                "content-type": "application/json",
                authentication: `Bearer ${remoteLogToken}`,
                "user-agent": Environment.instance.systemUserAgent,
                "zp-dn": Environment.instance.deploymentName ?? "unknown"
              }
            });
          } catch (err) {
            console.error(err);
          }
        };
      }, "dispatchFunction");
      RemoteLogTransport = class {
        static {
          __name(this, "RemoteLogTransport");
        }
        constructor(options) {
          if (!batcher) {
            batcher = new BatchDispatch("remote-log-transport", 1, dispatchFunction(options));
          }
        }
        log(logEntry, context) {
          batcher.enqueue(logEntry);
          context.waitUntil(batcher.waitUntilFlushed());
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/unified-logging/formatter.js
  var SeverityNumberOpenTelemetryMap, unifiedFormatter;
  var init_formatter = __esm({
    "packages/runtime/dist/logging/v1/unified-logging/formatter.js"() {
      "use strict";
      SeverityNumberOpenTelemetryMap = {
        internal: 1,
        /**
         * A fine-grained debugging event. Typically disabled in default configurations.
         * Note: Normal range is 1-4 but we've reserved 1 for internal purposes
         */
        trace: 2,
        /**
         * A debugging event. Range 5-8
         */
        debug: 5,
        /**
         * An informational event. Indicates that an event happened. Range 9-12
         */
        info: 9,
        /**
         * A warning event. Not an error but is likely more important than an informational event.
         * Range 13-16
         */
        warn: 13,
        /**
         * An error event. Something went wrong.
         * Range 17-20
         */
        error: 17,
        /**
         * A fatal error such as application or system crash.
         * Range 21-24
         */
        fatal: 21
      };
      unifiedFormatter = /* @__PURE__ */ __name((deploymentName, build) => (logEntry) => {
        const attributeAggregator = {};
        attributeAggregator["deploymentName"] = deploymentName;
        attributeAggregator["labels"] = {
          requestId: logEntry.requestId,
          source: logEntry.logSource,
          loggingId: logEntry.loggingId,
          logOwner: logEntry.logOwner
        };
        attributeAggregator["rayId"] = logEntry.rayId ?? "";
        attributeAggregator["runtime"] = {
          buildId: build.BUILD_ID,
          buildTimestamp: build.TIMESTAMP,
          gitSHA: build.GIT_SHA,
          version: build.ZUPLO_VERSION
        };
        attributeAggregator["atomicCounter"] = logEntry.vectorClock;
        const unifiedEntry = {
          timestamp: logEntry.timestamp,
          observerdTimestamp: logEntry.timestamp,
          traceId: logEntry.requestId,
          severityText: logEntry.level,
          severityNumber: SeverityNumberOpenTelemetryMap[logEntry.level],
          body: logEntry.messages,
          attributes: attributeAggregator
        };
        return unifiedEntry;
      }, "unifiedFormatter");
    }
  });

  // packages/runtime/dist/logging/v1/unified-logging/transport.js
  var dispatchFunction2, batcher2, UnifiedLogTransport;
  var init_transport = __esm({
    "packages/runtime/dist/logging/v1/unified-logging/transport.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_formatter();
      dispatchFunction2 = /* @__PURE__ */ __name(({ url, remoteLogToken, deploymentName, build }) => {
        return async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const formatter = unifiedFormatter(deploymentName, build);
          try {
            await internals_default.fetch(`${url}/v1/runtime-logs`, {
              method: "POST",
              body: JSON.stringify({
                entries: entries.map(formatter)
              }),
              headers: {
                "content-type": "application/json",
                authentication: `Bearer ${remoteLogToken}`,
                "user-agent": Environment.instance.systemUserAgent,
                "zp-dn": Environment.instance.deploymentName ?? "unknown"
              }
            });
          } catch (err) {
            console.error(err);
          }
        };
      }, "dispatchFunction");
      UnifiedLogTransport = class {
        static {
          __name(this, "UnifiedLogTransport");
        }
        constructor(options) {
          if (!batcher2) {
            batcher2 = new BatchDispatch("unified-log-transport", 1, dispatchFunction2(options));
          }
        }
        async log(logEntry, context) {
          batcher2.enqueue(logEntry);
          context.waitUntil(batcher2.waitUntilFlushed());
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/log-initializer.js
  var import_debug2, log2, LogInitializer;
  var init_log_initializer = __esm({
    "packages/runtime/dist/logging/v1/log-initializer.js"() {
      "use strict";
      import_debug2 = __toESM(require_debug());
      init_constants();
      init_extensions();
      init_environment2();
      init_core_logger();
      init_log_plugin();
      init_logging_context();
      init_request_logger();
      init_console_transport();
      init_data_dog_transport();
      init_google_transport();
      init_process_transport();
      init_remote_log_transport();
      init_transport();
      log2 = (0, import_debug2.debug)("zuplo:logging");
      LogInitializer = class _LogInitializer {
        static {
          __name(this, "LogInitializer");
        }
        systemCoreLogger;
        userCoreLogger;
        constructor({ systemCoreLogger, userCoreLogger }) {
          this.systemCoreLogger = systemCoreLogger;
          this.userCoreLogger = userCoreLogger;
        }
        static async init(serviceProvider2) {
          const systemCoreLogger = await _LogInitializer.setupSystemCoreLogger(Environment.instance, serviceProvider2);
          const userCoreLogger = await _LogInitializer.setupUserCoreLogger(Environment.instance, serviceProvider2);
          return new _LogInitializer({ systemCoreLogger, userCoreLogger });
        }
        static async setupSystemCoreLogger(env, serviceProvider2) {
          const { build } = env;
          log2("Gateway.setupSystemCoreLogger");
          const transports = [];
          const logService = serviceProvider2.getService(SYSTEM_LOGGER);
          if (logService) {
            transports.push(new ProcessTransport(logService.logger, env.logFormat));
          } else if (env.isDeno) {
            transports.push(new ConsoleTransport(console, env.logFormat));
          }
          if (env.isCloudflare && env.deploymentName && env.remoteLogToken) {
            transports.push(new UnifiedLogTransport({
              url: env.remoteLogURL,
              deploymentName: env.deploymentName,
              remoteLogToken: env.remoteLogToken,
              build: env.build
            }));
          }
          await Promise.all(transports.map(async (transport) => {
            if (transport.init) {
              await transport.init();
            }
          }));
          return new CoreLogger(env.systemLogLevel, "system", env.loggingId, build.BUILD_ID, transports);
        }
        static async setupUserCoreLogger(env, serviceProvider2) {
          log2("Gateway.setupUserCoreLogger");
          const transports = [];
          const { runtime, build } = env;
          const logService = serviceProvider2.getService(SYSTEM_LOGGER);
          if (logService && logService.captureUserLogs === true) {
            transports.push(new ProcessTransport(logService.logger, env.logFormat));
          } else if (env.isDeno) {
            transports.push(new ConsoleTransport(console, env.logFormat));
          }
          if (env.remoteLogToken && env.loggingId) {
            transports.push(new RemoteLogTransport({
              loggingId: env.loggingId,
              url: env.remoteLogURL,
              remoteLogToken: env.remoteLogToken,
              sendOnlyErrors: !env.isWorkingCopy
            }));
          }
          if (runtime.GCP_USER_LOG_NAME && runtime.GCP_USER_LOG_SVC_ACCT_JSON) {
            transports.push(new GoogleLogTransport({
              serviceAccountJson: runtime.GCP_USER_LOG_SVC_ACCT_JSON,
              logName: runtime.GCP_USER_LOG_NAME
            }));
          }
          if (runtime.ZUPLO_USER_LOGGER_DATA_DOG_API_KEY) {
            const urlOverride = runtime.ZUPLO_USER_LOGGER_DATA_DOG_URL;
            transports.push(new DataDogTransport({
              apiKey: runtime.ZUPLO_USER_LOGGER_DATA_DOG_API_KEY,
              url: urlOverride
            }));
          }
          plugins.forEach((plugin) => {
            if (plugin instanceof LogPlugin) {
              transports.push(plugin.getTransport());
            }
          });
          await Promise.all(transports.map(async (transport) => {
            if (transport.init) {
              await transport.init();
            }
          }));
          return new CoreLogger(env.userLogLevel, "user", env.loggingId, build.BUILD_ID, transports);
        }
        createRequestLoggers(requestId, rayId, event, custom, originalRequest) {
          log2("Gateway.createRequestLoggers");
          const loggingContext = new LoggingContext(event, custom, originalRequest);
          const systemRequestLogger = new RequestLogger(requestId, rayId, this.systemCoreLogger, loggingContext);
          const userRequestLogger = new RequestLogger(requestId, rayId, this.userCoreLogger, loggingContext);
          return { userRequestLogger, systemRequestLogger };
        }
      };
    }
  });

  // packages/runtime/dist/router/user-route-configuration.js
  var UserRouteConfiguration;
  var init_user_route_configuration = __esm({
    "packages/runtime/dist/router/user-route-configuration.js"() {
      "use strict";
      UserRouteConfiguration = class {
        static {
          __name(this, "UserRouteConfiguration");
        }
        constructor(config) {
          this.path = config.path;
          this.methods = config.methods;
          this.label = config.label;
          this.key = config.key;
          this.handler = config.handler;
          this.corsPolicy = config.corsPolicy;
          this.custom = config.custom;
          this.version = config.version;
          this.policies = config.policies;
          this.excludeFromOpenApi = config.excludeFromOpenApi;
          this.pathPattern = config.pathPattern;
          if (config.raw) {
            this.#raw = config.raw();
            this.operationId = this.raw()?.operationId;
            this.summary = this.raw()?.summary;
            this.tags = this.raw()?.tags;
            this.parameters = this.raw()?.parameters;
            this.responses = this.raw()?.responses;
          } else {
            this.operationId = config.operationId;
            this.summary = config.summary;
            this.tags = config.tags;
            this.parameters = config.parameters;
            this.responses = config.responses;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        raw() {
          return this.#raw;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        #raw;
        label;
        key;
        path;
        summary;
        operationId;
        tags;
        parameters;
        responses;
        excludeFromOpenApi;
        pathPattern;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        custom;
        methods;
        handler;
        corsPolicy;
        version;
        policies;
      };
    }
  });

  // packages/runtime/dist/router/router.js
  var RouterEntry, LookupResult, RouterError, Router;
  var init_router = __esm({
    "packages/runtime/dist/router/router.js"() {
      "use strict";
      init_errors();
      init_system_route_configuration();
      init_user_route_configuration();
      RouterEntry = class {
        static {
          __name(this, "RouterEntry");
        }
        constructor(path, urlPattern, config, executableHandler) {
          this.fullPath = path;
          this.urlPattern = urlPattern;
          this.config = config;
          this.executableHandler = executableHandler;
        }
        fullPath;
        urlPattern;
        config;
        executableHandler;
      };
      LookupResult = class {
        static {
          __name(this, "LookupResult");
        }
        constructor(routeConfiguration, executableHandler, params) {
          this.routeConfiguration = routeConfiguration;
          this.params = params ?? {};
          this.executableHandler = executableHandler;
        }
        executableHandler;
        routeConfiguration;
        params;
      };
      RouterError = class extends Error {
        static {
          __name(this, "RouterError");
        }
        constructor(message2, options) {
          super(message2, options);
        }
      };
      Router = class {
        static {
          __name(this, "Router");
        }
        constructor(versions) {
          this.routeEntries = [];
          this.versions = versions;
        }
        versions;
        routeEntries;
        addRoute(config, executableHandler) {
          if (!(config instanceof UserRouteConfiguration || config instanceof SystemRouteConfiguration)) {
            throw new SystemError("Config must be a UserRouteConfiguration or SystemRouteConfiguration");
          }
          const prefix = this.versions.find((v) => v.name === config.version)?.pathPrefix;
          let fullPath;
          if ("pathPattern" in config && config.pathPattern) {
            fullPath = `${prefix ?? ""}${config.pathPattern}`;
          } else {
            fullPath = `${prefix ?? ""}${config.path}`;
          }
          try {
            const urlPattern = new URLPattern({ pathname: fullPath });
            const route = new RouterEntry(fullPath, urlPattern, config, executableHandler);
            Object.freeze(route.config);
            this.routeEntries.push(route);
          } catch (err) {
            throw new RouterError(`addRoute-error: Invalid path '${fullPath}'. '${err.message}'`, { cause: err });
          }
        }
        lookup(method, path) {
          if (typeof method === "undefined") {
            throw new ConfigurationError(`Invalid request - Method was undefined. Path: '${path}'`);
          }
          const methodMatches = this.routeEntries.filter((re2) => re2.config.methods.includes(method));
          if (methodMatches.length === 0) {
            return;
          }
          for (let i = 0; i < methodMatches.length; i++) {
            const routeEntry = methodMatches[i];
            const pattern = routeEntry.urlPattern;
            const m = pattern.exec({ pathname: path });
            if (m !== null) {
              const result = new LookupResult(routeEntry.config, routeEntry.executableHandler, m.pathname.groups);
              return result;
            }
          }
          return void 0;
        }
        // Used by API test console and Route Tester
        lookupByPathOnly(path) {
          const results = [];
          for (let i = 0; i < this.routeEntries.length; i++) {
            const routeEntry = this.routeEntries[i];
            const pattern = routeEntry.urlPattern;
            const m = pattern.exec({ pathname: path });
            if (m !== null) {
              const result = new LookupResult(routeEntry.config, routeEntry.executableHandler, m.pathname.groups);
              results.push(result);
            }
          }
          return results;
        }
      };
    }
  });

  // packages/runtime/dist/utils/global-zuplo-event-context.js
  function setGlobalZuploEventContext(event) {
    _event = event;
  }
  function getGlobalZuploEventContext() {
    if (_event === void 0) {
      throw new Error("global ZuploEventContext has not been defined - invalid runtime state");
    }
    return _event;
  }
  var _event;
  var init_global_zuplo_event_context = __esm({
    "packages/runtime/dist/utils/global-zuplo-event-context.js"() {
      "use strict";
      __name(setGlobalZuploEventContext, "setGlobalZuploEventContext");
      __name(getGlobalZuploEventContext, "getGlobalZuploEventContext");
    }
  });

  // packages/runtime/dist/utils/normalize-headers.js
  function normalizeIncomingRequestHeaders({ headers, removeAllVendorHeadersExceptListed, isDeno }) {
    const outputHeaders = new Headers(headers);
    if (removeAllVendorHeadersExceptListed) {
      for (const [key] of headers) {
        const prefix = key.substring(0, 3);
        if (VENDOR_HEADER_PREFIXES.includes(prefix.toLowerCase()) && !VENDOR_HEADERS_TO_ALLOW.includes(key.toLowerCase())) {
          outputHeaders.delete(key);
        }
      }
      outputHeaders.delete(X_REAL_IP_HEADER);
    } else {
      DISPATCH_HEADERS_TO_REMOVE.forEach((key) => {
        outputHeaders.delete(key);
      });
    }
    if (isDeno) {
      INTERNAL_HEADERS_TO_REMOVE.forEach((key) => {
        outputHeaders.delete(key);
      });
    }
    return outputHeaders;
  }
  var init_normalize_headers = __esm({
    "packages/runtime/dist/utils/normalize-headers.js"() {
      "use strict";
      init_constants();
      __name(normalizeIncomingRequestHeaders, "normalizeIncomingRequestHeaders");
    }
  });

  // packages/runtime/dist/gateway.js
  function checkHandler(handler2, routeMatch, request) {
    log3("Gateway.checkHandler");
    if (!handler2) {
      if (typeof routeMatch.routeConfiguration === "undefined") {
        throw new ConfigurationError(`Invalid state - no routeConfiguration for '${request.method}:${request.url}`);
      }
      throw new ConfigurationError(`Invalid state. No handler for request '${request.method}':'${routeMatch.routeConfiguration.path}'`);
    }
  }
  var import_debug3, log3, setupSystemNoVersion, Gateway;
  var init_gateway = __esm({
    "packages/runtime/dist/gateway.js"() {
      "use strict";
      init_esm();
      import_debug3 = __toESM(require_debug());
      init_build_route();
      init_cors_route();
      init_no_routes();
      init_not_found_route();
      init_ping_route();
      init_constants();
      init_context3();
      init_routes_v3();
      init_attributes();
      init_errors();
      init_extensions();
      init_log_initializer();
      init_pipeline();
      init_plugins();
      init_http_problems();
      init_cors_processor();
      init_metrics_processor();
      init_policy_processor();
      init_request();
      init_router();
      init_system_route_configuration();
      init_user_route_configuration();
      init_system_log_map();
      init_cors();
      init_environment2();
      init_global_zuplo_event_context();
      init_normalize_headers();
      init_serialize_error();
      init_system_routes();
      log3 = (0, import_debug3.debug)("zuplo:runtime");
      setupSystemNoVersion = /* @__PURE__ */ __name((versions) => {
        const index = versions.findIndex((v) => v.name === systemNoVersion.name);
        if (index > -1) {
          const newVersions = versions.splice(index);
          return [...newVersions, systemNoVersion];
        }
        return [...versions, systemNoVersion];
      }, "setupSystemNoVersion");
      Gateway = class _Gateway {
        static {
          __name(this, "Gateway");
        }
        routeData;
        runtimeSettings;
        schemaValidator;
        // gateway is stored at the module level and lazily created on the first request
        // cloudflare doesn't like many function calls (crypto, date ) outside of a request
        static #instance;
        constructor(routeData, runtimeSettings2, logInitializer, schemaValidator) {
          this.routeData = routeData;
          this.runtimeSettings = runtimeSettings2;
          this.schemaValidator = schemaValidator;
          log3("Gateway.constructor");
          SemanticAttributes;
          this.#router = this.setupRoutes();
          this.#errorHandler = this.setupErrorHandler();
          this.#logInitializer = logInitializer;
        }
        static async initialize(routeLoader, runtimeSettings2, serviceProvider2, schemaValidator) {
          log3("Gateway.initialize");
          if (!_Gateway.#instance) {
            const tracer = trace.getTracer("gateway");
            await tracer.startActiveSpan("gateway:initialize", {
              attributes: {
                [SemanticAttributes.SystemTrace]: true
              }
            }, async (span) => {
              try {
                const logInitializer = await LogInitializer.init(serviceProvider2);
                const routeData = routeLoader();
                const parsedRouteData = {
                  ...routeData,
                  corsPolicies: parseCorsPolicies(routeData.corsPolicies)
                };
                const gateway = new _Gateway(parsedRouteData, runtimeSettings2, logInitializer, schemaValidator);
                _Gateway.#instance = gateway;
              } finally {
                span.end();
              }
            });
          }
          if (!_Gateway.#instance) {
            throw new SystemError("Invalid state - Gateway not initialized after trace call. The trace provider is likely not functioning correctly.");
          }
          return _Gateway.#instance;
        }
        static purgeGatewayCache() {
          log3("Gateway.purgeGatewayCache");
          _Gateway.#instance = void 0;
        }
        static get instance() {
          if (!_Gateway.#instance) {
            throw new SystemError("Gateway cannot be used before it is initialized");
          }
          return _Gateway.#instance;
        }
        #logInitializer;
        #router;
        #processors = [
          policyProcessor,
          corsProcessor,
          metricsProcessor
        ];
        #errorHandler;
        setupRoutes = () => {
          log3("Gateway.setupRoutes");
          const routeData = this.routeData;
          const versions = setupSystemNoVersion(routeData.versions);
          const router = new Router(versions);
          if (routeData.routes.length === 0) {
            registerBuildRoute(router, this);
            registerPingRoute(router, this);
            registerCorsRoute(router, this);
            registerNoRoutes(router, this);
            return router;
          }
          const { enabled } = this.runtimeSettings.developerPortal;
          if (enabled) {
            registerDevPortalLegacyRedirectRoute(router, this);
            registerDevPortalV3Route(router, this);
          }
          registerBuildRoute(router, this);
          registerPingRoute(router, this);
          registerCorsRoute(router, this);
          for (const plugin of plugins) {
            if (plugin instanceof SystemRuntimePlugin) {
              plugin.registerRoutes(router, this);
            }
          }
          routeData.routes.forEach((route) => {
            let innerHandler;
            if (typeof route.handler?.module === "object") {
              innerHandler = route.handler?.module[route.handler.export];
            }
            if (typeof innerHandler !== "function") {
              throw new ConfigurationError(`Invalid state - No handler on route for path '${route.path}'`);
            }
            const pipeline = new Pipeline({
              processors: this.#processors,
              handler: innerHandler,
              gateway: this
            });
            const userConfigRoute = new UserRouteConfiguration(route);
            router.addRoute(userConfigRoute, pipeline.execute);
          });
          registerNotMatchedHandler(router, this);
          return router;
        };
        setupErrorHandler = () => {
          let errorHandler;
          if (typeof this.routeData.requestErrorHandler?.module === "object") {
            errorHandler = this.routeData.requestErrorHandler.module[this.routeData.requestErrorHandler.export];
            if (typeof errorHandler !== "function") {
              throw new ConfigurationError(`Invalid state - Module and export set for 'errorHandler' is not a function`);
            }
          } else {
            errorHandler = /* @__PURE__ */ __name((request, context, err) => this.#internalErrorResponse(request, context, err), "errorHandler");
          }
          return errorHandler;
        };
        errorHandler(request, context, error) {
          try {
            return this.#errorHandler(request, context, error);
          } catch (err) {
            log3("An error occurred in the user's errorHandler", err);
            return this.#internalErrorResponse(request, context, err);
          }
        }
        #internalErrorResponse(request, context, error) {
          log3("Gateway.internalErrorResponse");
          let extensionMembers = {};
          if (Environment.instance.isWorkingCopy) {
            if (error instanceof RuntimeError && error.extensionMembers) {
              extensionMembers = error.extensionMembers;
            } else if (error.cause) {
              const cause = serializeError(error.cause);
              if ("stack" in cause) {
                cause.stack = cleanStack(cause.stack);
              }
              extensionMembers = {
                cause
              };
            }
          }
          return HttpProblems.internalServerError(request, context, {
            detail: error.message,
            ...extensionMembers
          });
        }
        async handleRequest(originalRequest, requestContext, event) {
          const { requestId, rayId } = requestContext;
          setGlobalZuploEventContext(event);
          const normalizedHeaders = normalizeIncomingRequestHeaders({
            headers: originalRequest.headers,
            removeAllVendorHeadersExceptListed: Environment.instance.build.COMPATIBILITY_FLAGS.removeAllVendorHeadersExceptListed,
            isDeno: Environment.instance.isDeno
          });
          normalizedHeaders.set(REQUEST_ID_HEADER, requestId);
          let mutableRequest = new Request(originalRequest, {
            headers: normalizedHeaders
          });
          if (["GET", "HEAD"].includes(mutableRequest.method) && mutableRequest.body) {
            const headers = new Headers(mutableRequest.headers);
            headers.set(BODY_REMOVED_HEADER, "true");
            mutableRequest = new Request(mutableRequest, {
              headers,
              body: null
            });
          }
          const custom = {};
          const { userRequestLogger, systemRequestLogger } = this.#logInitializer.createRequestLoggers(requestId, rayId, event, custom, mutableRequest);
          const url = new URL(mutableRequest.url);
          const path = url.pathname;
          const routeMatch = this.#router.lookup(mutableRequest.method, path);
          if (!routeMatch) {
            throw new SystemError(`Invalid state - no route match - should have been picked up by the not found handler, path: '${path}'`);
          }
          const incomingRequestProperties = new HeaderIncomingRequestProperties(
            // IMPORTANT: This uses the original request because we read the request
            // props lazily, but they get stripped out of the mutableRequest when
            // the #normalizeIncomingRequest function runs
            originalRequest.headers
          );
          let zuploRequest = new ZuploRequest(mutableRequest, {
            params: routeMatch.params
          });
          const zuploContext = new SystemZuploContext({
            logger: userRequestLogger,
            route: routeMatch.routeConfiguration,
            requestId,
            event,
            custom,
            incomingRequestProperties
          });
          const rawRoute = routeMatch.routeConfiguration.raw();
          trace.getActiveSpan()?.setAttributes({
            "http.route": zuploContext.route.path ?? zuploContext.route.pathPattern,
            "cloud.region": zuploContext.incomingRequestProperties.colo,
            [SemanticAttributes.RoutePathPattern]: zuploContext.route.pathPattern,
            [SemanticAttributes.RouteOperationId]: rawRoute.operationId,
            [SemanticAttributes.RouteTrace]: rawRoute[`x-zuplo-trace`],
            [SemanticAttributes.RouteSystem]: isSystemRoute(url) ? true : void 0
          });
          const ext = ZuploContextExtensions.initialize(zuploContext, zuploRequest);
          if (routeMatch.routeConfiguration === notFoundRouteConfiguration && runtimeExtensions.value?.notFoundHandler !== void 0) {
            const otherMatches = this.#router.lookupByPathOnly(path);
            ext.pathOnlyMatches = otherMatches.map((m) => m.routeConfiguration).filter((m) => m instanceof UserRouteConfiguration);
          }
          try {
            SystemLogMap.addLogger(zuploContext, systemRequestLogger);
            if (Environment.instance.build.COMPATIBILITY_FLAGS.doNotRunHooksOnSystemRoutes ? !isSystemRoute(url) : !url.pathname.startsWith("/__zuplo")) {
              const onRequestHookResult = await invokeOnRequestExtensions(zuploRequest, zuploContext);
              if (onRequestHookResult instanceof Response) {
                return onRequestHookResult;
              } else {
                const ext2 = ZuploContextExtensions.getContextExtensions(zuploContext);
                zuploRequest = onRequestHookResult;
                ext2.latestRequest = zuploRequest;
              }
            }
            if (!isSystemRoute(url)) {
              userRequestLogger.debug(`Request received '${url.pathname}'`, {
                method: mutableRequest.method,
                url: url.pathname,
                hostname: url.hostname,
                route: routeMatch.routeConfiguration.path
              });
            }
            const handler2 = routeMatch.executableHandler;
            checkHandler(handler2, routeMatch, mutableRequest);
            log3("Gateway.handleRequest - call user handler");
            const response = await handler2(zuploRequest, zuploContext);
            log3("Gateway.handleRequest - user handler");
            if (!(response instanceof Response)) {
              throw new RuntimeError(`Invalid Response type from the request handler: ${typeof response}`);
            }
            if (response.bodyUsed) {
              throw new RuntimeError("The response object has already been used. Return a new response instead.");
            }
            let newResponse;
            if (response.headers.get(REQUEST_ID_HEADER) === null && !response.webSocket) {
              const headers = new Headers(response.headers);
              headers.set(REQUEST_ID_HEADER, requestId);
              newResponse = new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers,
                cf: response.cf
              });
            } else {
              newResponse = response;
            }
            return newResponse;
          } catch (err) {
            log3("Gateway - error executing handler", err);
            if (err instanceof RuntimeError) {
              userRequestLogger.error(err);
              systemRequestLogger.warn(err);
            } else {
              systemRequestLogger.error(err);
            }
            return await this.#internalErrorResponse(zuploRequest, zuploContext, err);
          }
        }
      };
      __name(checkHandler, "checkHandler");
    }
  });

  // packages/runtime/dist/invoke-policy.js
  var invokeInboundPolicy;
  var init_invoke_policy = __esm({
    "packages/runtime/dist/invoke-policy.js"() {
      "use strict";
      init_errors();
      init_gateway();
      init_policy_processor();
      invokeInboundPolicy = /* @__PURE__ */ __name(async (policyName, request, context) => {
        const policies = Gateway.instance.routeData.policies;
        const matchingPolicies = getInboundPolicyInstances([policyName], policies);
        if (matchingPolicies.length === 0) {
          throw new RuntimeError(`Invalid 'invokeInboundPolicy call' - no policy '${policyName}' found.`);
        }
        const policy = matchingPolicies[0];
        return policy.handler(request, context);
      }, "invokeInboundPolicy");
    }
  });

  // packages/runtime/dist/context.js
  var HeaderIncomingRequestProperties, ResponseSendingEvent, ResponseSentEvent, ZuploContextExtensions, SystemZuploContext;
  var init_context3 = __esm({
    "packages/runtime/dist/context.js"() {
      "use strict";
      init_constants();
      init_errors();
      init_invoke_policy();
      HeaderIncomingRequestProperties = class {
        static {
          __name(this, "HeaderIncomingRequestProperties");
        }
        #headers;
        constructor(headers) {
          this.#headers = headers;
        }
        get asn() {
          try {
            const asn = this.#headers.get(ZP_ASN_HEADER);
            if (typeof asn === "string") {
              return parseInt(asn);
            }
          } catch (err) {
          }
        }
        get asOrganization() {
          return this.#headers.get(ZP_AS_ORG_HEADER) ?? void 0;
        }
        get city() {
          return this.#headers.get(CF_IP_CITY_HEADER) ?? this.#headers.get(ZP_IP_CITY_HEADER) ?? void 0;
        }
        get continent() {
          return this.#headers.get(CF_IP_CONTINENT_HEADER) ?? this.#headers.get(ZP_IP_CONTINENT_HEADER) ?? void 0;
        }
        get country() {
          return this.#headers.get(CF_IP_COUNTRY_HEADER) ?? this.#headers.get(ZP_IP_COUNTRY_HEADER) ?? void 0;
        }
        get latitude() {
          return this.#headers.get(CF_IP_LATITUDE_HEADER) ?? this.#headers.get(ZP_IP_LATITUDE_HEADER) ?? void 0;
        }
        get longitude() {
          return this.#headers.get(CF_IP_LONGITUDE_HEADER) ?? this.#headers.get(ZP_IP_LONGITUDE_HEADER) ?? void 0;
        }
        get colo() {
          return this.#headers.get(ZP_COLO_HEADER) ?? void 0;
        }
        get postalCode() {
          return this.#headers.get(CF_POSTAL_CODE_HEADER) ?? this.#headers.get(ZP_POSTAL_CODE_HEADER) ?? void 0;
        }
        get metroCode() {
          return this.#headers.get(CF_METRO_CODE_HEADER) ?? this.#headers.get(ZP_METRO_CODE_HEADER) ?? void 0;
        }
        get region() {
          return this.#headers.get(CF_IP_REGION_HEADER) ?? this.#headers.get(ZP_REGION_HEADER) ?? void 0;
        }
        get regionCode() {
          return this.#headers.get(CF_REGION_CODE_HEADER) ?? this.#headers.get(ZP_REGION_CODE_HEADER) ?? void 0;
        }
        get timezone() {
          return this.#headers.get(CF_TIMEZONE_HEADER) ?? this.#headers.get(ZP_TIMEZONE_HEADER) ?? void 0;
        }
        toJSON() {
          const obj = {
            asn: this.asn,
            asOrganization: this.asOrganization,
            city: this.city,
            continent: this.continent,
            country: this.country,
            latitude: this.latitude,
            longitude: this.longitude,
            colo: this.colo,
            postalCode: this.postalCode,
            metroCode: this.metroCode,
            region: this.region,
            regionCode: this.regionCode,
            timezone: this.timezone
          };
          return obj;
        }
      };
      ResponseSendingEvent = class extends Event {
        static {
          __name(this, "ResponseSendingEvent");
        }
        constructor(request, response) {
          super("responseSending");
          this.request = request;
          this.mutableResponse = response;
        }
        request;
        mutableResponse;
      };
      ResponseSentEvent = class extends Event {
        static {
          __name(this, "ResponseSentEvent");
        }
        constructor(request, response) {
          super("responseSent");
          this.request = request;
          this.response = response;
        }
        request;
        response;
      };
      ZuploContextExtensions = class _ZuploContextExtensions {
        static {
          __name(this, "ZuploContextExtensions");
        }
        static #map = /* @__PURE__ */ new WeakMap();
        static initialize(context, originalRequest) {
          if (!_ZuploContextExtensions.#map.has(context)) {
            const ext = new _ZuploContextExtensions(originalRequest);
            _ZuploContextExtensions.#map.set(context, ext);
            return ext;
          }
          throw new Error(`ZuploContextExtensions already initialized for context with requestId '${context.requestId}'`);
        }
        static getContextExtensions(context) {
          const extensions2 = _ZuploContextExtensions.#map.get(context);
          if (!extensions2) {
            throw new RuntimeError(`Invalid state, could not get ZuploContext extensions for context with requestId '${context.requestId}'`);
          }
          return extensions2;
        }
        // This starts with the original request, and is updated as the request is modified
        // in the pipeline
        latestRequest;
        // Set only on NotFound responses - contains other path matches that match path but not method
        pathOnlyMatches;
        #onResponseSendingFinalHooks;
        #onResponseSendingHooks;
        constructor(originalRequest) {
          this.latestRequest = originalRequest;
          this.#onResponseSendingFinalHooks = [];
          this.#onResponseSendingHooks = [];
        }
        addResponseSendingHook(hook) {
          this.#onResponseSendingHooks.push(hook);
        }
        addResponseSendingFinalHook(hook) {
          this.#onResponseSendingFinalHooks.push(hook);
        }
        onResponseSendingFinal = async (response, latestRequest, context) => {
          for (const hook of this.#onResponseSendingFinalHooks) {
            await hook(response, latestRequest, context);
          }
        };
        onResponseSending = async (response, latestRequest, context) => {
          let latestResponse = response;
          for (const hook of this.#onResponseSendingHooks) {
            latestResponse = await hook(response, latestRequest, context);
          }
          return latestResponse;
        };
      };
      SystemZuploContext = class extends EventTarget {
        static {
          __name(this, "SystemZuploContext");
        }
        constructor({ logger, route, requestId, event, custom, incomingRequestProperties }) {
          super();
          this.log = Object.freeze(logger);
          this.route = route;
          this.requestId = requestId;
          this.custom = custom;
          this.incomingRequestProperties = incomingRequestProperties;
          this.#event = event;
          this.invokeInboundPolicy = (policyName, request) => {
            return invokeInboundPolicy(policyName, request, this);
          };
          this.waitUntil = (promise) => {
            this.#event.waitUntil(promise);
          };
          this.addResponseSendingHook = (hook) => {
            ZuploContextExtensions.getContextExtensions(this).addResponseSendingHook(hook);
          };
          this.addResponseSendingFinalHook = (hook) => {
            ZuploContextExtensions.getContextExtensions(this).addResponseSendingFinalHook(hook);
          };
          Object.freeze(this);
        }
        #event;
        requestId;
        log;
        route;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        custom;
        incomingRequestProperties;
        invokeInboundPolicy;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        waitUntil;
        /**
         * Fires just before the response is sent. Response can be modified.
         */
        addResponseSendingHook;
        /**
         * Fires immediately after the response is sent. Response cannot be modified.
         */
        addResponseSendingFinalHook;
        addEventListener(type, handler2, options) {
          const wrapped = /* @__PURE__ */ __name((e) => {
            try {
              typeof handler2 === "function" ? handler2(e) : handler2.handleEvent(e);
            } catch (err) {
              this.log.error(`Error invoking event ${type}. See following logs for details.`);
              throw err;
            }
          }, "wrapped");
          super.addEventListener(type, wrapped, options);
        }
      };
    }
  });

  // packages/runtime/dist/context-data.js
  var ContextData;
  var init_context_data = __esm({
    "packages/runtime/dist/context-data.js"() {
      "use strict";
      ContextData = class _ContextData {
        static {
          __name(this, "ContextData");
        }
        static #storage;
        #name;
        constructor(name) {
          this.#name = name;
        }
        set(context, data) {
          _ContextData.set(context, this.#name, data);
        }
        get(context) {
          return _ContextData.get(context, this.#name);
        }
        static set(context, name, data) {
          if (!_ContextData.#storage) {
            _ContextData.#storage = /* @__PURE__ */ new WeakMap();
          }
          let map2 = _ContextData.#storage.get(context);
          if (!map2) {
            map2 = /* @__PURE__ */ new Map();
          }
          map2.set(name, data);
          _ContextData.#storage.set(context, map2);
        }
        static get(context, name) {
          if (!_ContextData.#storage) {
            _ContextData.#storage = /* @__PURE__ */ new WeakMap();
          }
          return _ContextData.#storage.get(context)?.get(name);
        }
      };
    }
  });

  // packages/runtime/dist/environment.js
  function isRestrictedEnvVariableName(name) {
    if (name.startsWith("__ZUPLO") || name.startsWith("ZUPLO_")) {
      return !ALLOWED_WRITABLE_ZUPLO_VARIABLES.includes(name) && !name.startsWith("ZUPLO_PUBLIC_");
    }
    return false;
  }
  function isZuploReadableEnvVariableName(name) {
    if (name.startsWith("ZUPLO_")) {
      return true;
    }
    return false;
  }
  var ALLOWED_WRITABLE_ZUPLO_VARIABLES, environment;
  var init_environment3 = __esm({
    "packages/runtime/dist/environment.js"() {
      "use strict";
      init_environment2();
      ALLOWED_WRITABLE_ZUPLO_VARIABLES = [
        "ZUPLO_USER_LOGGER_DATA_DOG_API_KEY",
        "ZUPLO_USER_LOGGER_DATA_DOG_URL",
        "ZUPLO_LOG_LEVEL",
        "ZUPLO_HANDLER_WRITE_LOG_LEVEL"
      ];
      __name(isRestrictedEnvVariableName, "isRestrictedEnvVariableName");
      __name(isZuploReadableEnvVariableName, "isZuploReadableEnvVariableName");
      environment = new Proxy({}, {
        get(target, prop) {
          if (isRestrictedEnvVariableName(String(prop)) && !isZuploReadableEnvVariableName(String(prop))) {
            return void 0;
          }
          return Environment.instance.runtime[String(prop)];
        }
      });
    }
  });

  // packages/core/polyfills/async_hooks.js
  var AsyncLocalStorage;
  var init_async_hooks = __esm({
    "packages/core/polyfills/async_hooks.js"() {
      AsyncLocalStorage = class {
        static {
          __name(this, "AsyncLocalStorage");
        }
        getStore() {
          return {};
        }
        run(store, fn) {
          return fn();
        }
      };
    }
  });

  // packages/runtime/dist/stores.js
  var stores;
  var init_stores = __esm({
    "packages/runtime/dist/stores.js"() {
      "use strict";
      init_async_hooks();
      init_errors();
      stores = {
        request: new AsyncLocalStorage()
      };
    }
  });

  // packages/runtime/dist/handler.js
  var GATEWAY_ERROR_DETAIL, INIT_ERROR_DETAIL, Handler;
  var init_handler = __esm({
    "packages/runtime/dist/handler.js"() {
      "use strict";
      init_constants();
      init_telemetry();
      init_errors();
      init_extensions();
      init_gateway();
      init_stores();
      init_environment2();
      GATEWAY_ERROR_DETAIL = "Error initializing gateway. Check your configuration for errors or contact support.";
      INIT_ERROR_DETAIL = "Error initializing gateway. Check your 'zuplo.runtime.ts' for errors or contact support.";
      Handler = class {
        static {
          __name(this, "Handler");
        }
        routeLoader;
        buildEnvironment;
        runtimeSettings;
        serviceProvider;
        schemaValidations;
        runtimeInit;
        constructor(routeLoader, buildEnvironment, runtimeSettings2, serviceProvider2, schemaValidations2, runtimeInit2) {
          this.routeLoader = routeLoader;
          this.buildEnvironment = buildEnvironment;
          this.runtimeSettings = runtimeSettings2;
          this.serviceProvider = serviceProvider2;
          this.schemaValidations = schemaValidations2;
          this.runtimeInit = runtimeInit2;
        }
        requestHandler = async (request, runtimeEnvironment, event) => {
          const requestId = request.headers.get(REQUEST_ID_HEADER) ?? request.headers.get(LEGACY_REQUEST_ID_HEADER) ?? crypto.randomUUID();
          const rayId = request.headers.get(RAY_ID_HEADER);
          const requestContext = { requestId, rayId };
          return stores.request.run(requestContext, async () => {
            Environment.initialize({
              build: this.buildEnvironment,
              runtime: runtimeEnvironment
            });
            try {
              await initializeRuntime(this.runtimeInit);
            } catch (err) {
              this.handleError(err, INIT_ERROR_DETAIL, request);
            }
            const innerHandler = /* @__PURE__ */ __name(async (request2, event2) => {
              let gateway;
              try {
                gateway = await Gateway.initialize(this.routeLoader, this.runtimeSettings, this.serviceProvider, this.schemaValidations);
              } catch (err) {
                return this.handleError(err, GATEWAY_ERROR_DETAIL, request2);
              }
              return gateway.handleRequest(request2, requestContext, event2);
            }, "innerHandler");
            return proxyHandler(innerHandler)(request, event);
          });
        };
        handleError(err, detail, request) {
          console.error("Error initializing gateway.", err);
          if (err instanceof ConfigurationError) {
            detail = err.message;
          }
          const problem = {
            status: 500,
            title: "Gateway Initialization Error",
            type: "https://httpproblems.com/http-status/500",
            detail,
            instance: request.url,
            trace: {
              timestamp: Date.now(),
              rayId: request.headers.get("cf-ray") ?? void 0,
              buildId: this.buildEnvironment.BUILD_ID
            },
            // It's too risky to show details of the error to the user in production
            // Arguably OK in working-copy
            message: Environment.instance.isWorkingCopy ? err.message : void 0
          };
          return new Response(JSON.stringify(problem, null, 2), {
            status: 500,
            headers: {
              "content-type": "application/json"
            }
          });
        }
      };
    }
  });

  // node_modules/path-to-regexp/dist.es2015/index.js
  function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
      var char = str[i];
      if (char === "*" || char === "+" || char === "?") {
        tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
        continue;
      }
      if (char === "\\") {
        tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
        continue;
      }
      if (char === "{") {
        tokens.push({ type: "OPEN", index: i, value: str[i++] });
        continue;
      }
      if (char === "}") {
        tokens.push({ type: "CLOSE", index: i, value: str[i++] });
        continue;
      }
      if (char === ":") {
        var name = "";
        var j = i + 1;
        while (j < str.length) {
          var code = str.charCodeAt(j);
          if (
            // `0-9`
            code >= 48 && code <= 57 || // `A-Z`
            code >= 65 && code <= 90 || // `a-z`
            code >= 97 && code <= 122 || // `_`
            code === 95
          ) {
            name += str[j++];
            continue;
          }
          break;
        }
        if (!name)
          throw new TypeError("Missing parameter name at ".concat(i));
        tokens.push({ type: "NAME", index: i, value: name });
        i = j;
        continue;
      }
      if (char === "(") {
        var count = 1;
        var pattern = "";
        var j = i + 1;
        if (str[j] === "?") {
          throw new TypeError('Pattern cannot start with "?" at '.concat(j));
        }
        while (j < str.length) {
          if (str[j] === "\\") {
            pattern += str[j++] + str[j++];
            continue;
          }
          if (str[j] === ")") {
            count--;
            if (count === 0) {
              j++;
              break;
            }
          } else if (str[j] === "(") {
            count++;
            if (str[j + 1] !== "?") {
              throw new TypeError("Capturing groups are not allowed at ".concat(j));
            }
          }
          pattern += str[j++];
        }
        if (count)
          throw new TypeError("Unbalanced pattern at ".concat(i));
        if (!pattern)
          throw new TypeError("Missing pattern at ".concat(i));
        tokens.push({ type: "PATTERN", index: i, value: pattern });
        i = j;
        continue;
      }
      tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
  }
  function parse3(str, options) {
    if (options === void 0) {
      options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = /* @__PURE__ */ __name(function(type) {
      if (i < tokens.length && tokens[i].type === type)
        return tokens[i++].value;
    }, "tryConsume");
    var mustConsume = /* @__PURE__ */ __name(function(type) {
      var value2 = tryConsume(type);
      if (value2 !== void 0)
        return value2;
      var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
      throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    }, "mustConsume");
    var consumeText = /* @__PURE__ */ __name(function() {
      var result2 = "";
      var value2;
      while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
        result2 += value2;
      }
      return result2;
    }, "consumeText");
    while (i < tokens.length) {
      var char = tryConsume("CHAR");
      var name = tryConsume("NAME");
      var pattern = tryConsume("PATTERN");
      if (name || pattern) {
        var prefix = char || "";
        if (prefixes.indexOf(prefix) === -1) {
          path += prefix;
          prefix = "";
        }
        if (path) {
          result.push(path);
          path = "";
        }
        result.push({
          name: name || key++,
          prefix,
          suffix: "",
          pattern: pattern || defaultPattern,
          modifier: tryConsume("MODIFIER") || ""
        });
        continue;
      }
      var value = char || tryConsume("ESCAPED_CHAR");
      if (value) {
        path += value;
        continue;
      }
      if (path) {
        result.push(path);
        path = "";
      }
      var open = tryConsume("OPEN");
      if (open) {
        var prefix = consumeText();
        var name_1 = tryConsume("NAME") || "";
        var pattern_1 = tryConsume("PATTERN") || "";
        var suffix = consumeText();
        mustConsume("CLOSE");
        result.push({
          name: name_1 || (pattern_1 ? key++ : ""),
          pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
          prefix,
          suffix,
          modifier: tryConsume("MODIFIER") || ""
        });
        continue;
      }
      mustConsume("END");
    }
    return result;
  }
  function compile(str, options) {
    return tokensToFunction(parse3(str, options), options);
  }
  function tokensToFunction(tokens, options) {
    if (options === void 0) {
      options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode2 = _a === void 0 ? function(x) {
      return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    var matches = tokens.map(function(token) {
      if (typeof token === "object") {
        return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
      }
    });
    return function(data) {
      var path = "";
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          path += token;
          continue;
        }
        var value = data ? data[token.name] : void 0;
        var optional = token.modifier === "?" || token.modifier === "*";
        var repeat = token.modifier === "*" || token.modifier === "+";
        if (Array.isArray(value)) {
          if (!repeat) {
            throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
          }
          if (value.length === 0) {
            if (optional)
              continue;
            throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
          }
          for (var j = 0; j < value.length; j++) {
            var segment = encode2(value[j], token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
            }
            path += token.prefix + segment + token.suffix;
          }
          continue;
        }
        if (typeof value === "string" || typeof value === "number") {
          var segment = encode2(String(value), token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
          continue;
        }
        if (optional)
          continue;
        var typeOfMessage = repeat ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
      }
      return path;
    };
  }
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function flags(options) {
    return options && options.sensitive ? "" : "i";
  }
  var init_dist = __esm({
    "node_modules/path-to-regexp/dist.es2015/index.js"() {
      __name(lexer, "lexer");
      __name(parse3, "parse");
      __name(compile, "compile");
      __name(tokensToFunction, "tokensToFunction");
      __name(escapeString, "escapeString");
      __name(flags, "flags");
    }
  });

  // packages/runtime/dist/utils/aws.js
  async function hmac(key, val2) {
    const cryptoKey = await crypto.subtle.importKey("raw", typeof key === "string" ? encoder2.encode(key) : key, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
    return crypto.subtle.sign("HMAC", cryptoKey, encoder2.encode(val2));
  }
  async function hash(content) {
    return crypto.subtle.digest("SHA-256", typeof content === "string" ? encoder2.encode(content) : content);
  }
  function buf2hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), (x) => ("0" + x.toString(16)).slice(-2)).join("");
  }
  function encodeRfc3986(urlEncodedStr) {
    return urlEncodedStr.replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
  }
  function guessServiceRegion(url, headers) {
    const { hostname, pathname } = url;
    const match = hostname.replace("dualstack.", "").match(/([^.]+)\.(?:([^.]*)\.)?amazonaws\.com(?:\.cn)?$/);
    let [service, region] = (match || ["", ""]).slice(1, 3);
    if (region === "us-gov") {
      region = "us-gov-west-1";
    } else if (region === "s3" || region === "s3-accelerate") {
      region = "us-east-1";
      service = "s3";
    } else if (service === "iot") {
      if (hostname.startsWith("iot.")) {
        service = "execute-api";
      } else if (hostname.startsWith("data.jobs.iot.")) {
        service = "iot-jobs-data";
      } else {
        service = pathname === "/mqtt" ? "iotdevicegateway" : "iotdata";
      }
    } else if (service === "autoscaling") {
      const targetPrefix = (headers.get("X-Amz-Target") || "").split(".")[0];
      if (targetPrefix === "AnyScaleFrontendService") {
        service = "application-autoscaling";
      } else if (targetPrefix === "AnyScaleScalingPlannerFrontendService") {
        service = "autoscaling-plans";
      }
    } else if (region == null && service.startsWith("s3-")) {
      region = service.slice(3).replace(/^fips-|^external-1/, "");
      service = "s3";
    } else if (service.endsWith("-fips")) {
      service = service.slice(0, -5);
    } else if (region && /-\d$/.test(service) && !/-\d$/.test(region)) {
      [service, region] = [region, service];
    }
    if (service in HOST_SERVICES) {
      return [HOST_SERVICES[service], region];
    }
    return [service, region];
  }
  var import_debug4, log4, encoder2, HOST_SERVICES, UNSIGNABLE_HEADERS, AwsClient, AwsV4Signer;
  var init_aws = __esm({
    "packages/runtime/dist/utils/aws.js"() {
      "use strict";
      import_debug4 = __toESM(require_debug());
      init_errors();
      init_internals();
      log4 = (0, import_debug4.debug)("zuplo:runtime");
      encoder2 = new TextEncoder();
      HOST_SERVICES = {
        appstream2: "appstream",
        cloudhsmv2: "cloudhsm",
        email: "ses",
        marketplace: "aws-marketplace",
        mobile: "AWSMobileHubService",
        pinpoint: "mobiletargeting",
        queue: "sqs",
        "git-codecommit": "codecommit",
        "mturk-requester-sandbox": "mturk-requester",
        "personalize-runtime": "personalize"
      };
      UNSIGNABLE_HEADERS = [
        "authorization",
        "content-type",
        "content-length",
        "user-agent",
        "presigned-expires",
        "expect",
        "x-amzn-trace-id",
        "range",
        "connection"
      ];
      AwsClient = class {
        static {
          __name(this, "AwsClient");
        }
        accessKeyId;
        secretAccessKey;
        sessionToken;
        service;
        region;
        cache;
        retries;
        initRetryMs;
        constructor({ accessKeyId, secretAccessKey, sessionToken, service, region, cache, retries, initRetryMs }) {
          if (accessKeyId == null)
            throw new TypeError("accessKeyId is a required option");
          if (secretAccessKey == null)
            throw new TypeError("secretAccessKey is a required option");
          this.accessKeyId = accessKeyId;
          this.secretAccessKey = secretAccessKey;
          this.sessionToken = sessionToken;
          this.service = service;
          this.region = region;
          this.cache = cache || /* @__PURE__ */ new Map();
          this.retries = retries != null ? retries : 0;
          this.initRetryMs = initRetryMs || 50;
        }
        async sign(lambdaUrl, init) {
          const signer = new AwsV4Signer(Object.assign({ url: lambdaUrl }, init, this, init && init.aws));
          const signed = Object.assign({}, init, await signer.sign());
          delete signed.aws;
          return { url: signed.url.toString(), request: signed };
        }
        async fetch(lambdaUrl, init) {
          log4("AWS fetch", lambdaUrl);
          for (let i = 0; i <= this.retries; i++) {
            const { url, request } = await this.sign(lambdaUrl, init);
            const fetched = internals_default.fetch(url, request);
            if (i === this.retries) {
              return fetched;
            }
            const res = await fetched;
            if (res.status < 500 && res.status !== 429) {
              return res;
            }
            await new Promise((resolve) => setTimeout(resolve, Math.random() * this.initRetryMs * Math.pow(2, i)));
          }
          throw new ConfigurationError("An unknown error occurred, ensure retries is not negative");
        }
      };
      AwsV4Signer = class {
        static {
          __name(this, "AwsV4Signer");
        }
        method;
        url;
        headers;
        body;
        accessKeyId;
        secretAccessKey;
        sessionToken;
        service;
        region;
        cache;
        datetime;
        signQuery;
        appendSessionToken;
        signableHeaders;
        signedHeaders;
        canonicalHeaders;
        credentialString;
        encodedPath;
        encodedSearch;
        constructor({ method, url, headers, body, accessKeyId, secretAccessKey, sessionToken, service, region, cache, datetime, signQuery, appendSessionToken, allHeaders, singleEncode }) {
          if (url == null)
            throw new TypeError("url is a required option");
          if (accessKeyId == null)
            throw new TypeError("accessKeyId is a required option");
          if (secretAccessKey == null)
            throw new TypeError("secretAccessKey is a required option");
          this.method = method || (body ? "POST" : "GET");
          this.url = new URL(url);
          this.headers = new Headers(headers || {});
          this.body = body;
          this.accessKeyId = accessKeyId;
          this.secretAccessKey = secretAccessKey;
          this.sessionToken = sessionToken;
          let guessedService, guessedRegion;
          if (!service || !region) {
            [guessedService, guessedRegion] = guessServiceRegion(this.url, this.headers);
          }
          this.service = service || guessedService || "";
          this.region = region || guessedRegion || "us-east-1";
          this.cache = cache || /* @__PURE__ */ new Map();
          this.datetime = datetime || (/* @__PURE__ */ new Date()).toISOString().replace(/[:-]|\.\d{3}/g, "");
          this.signQuery = signQuery;
          this.appendSessionToken = appendSessionToken || this.service === "iotdevicegateway";
          this.headers.delete("Host");
          const params = this.signQuery ? this.url.searchParams : this.headers;
          if (this.service === "s3" && !this.headers.has("X-Amz-Content-Sha256")) {
            this.headers.set("X-Amz-Content-Sha256", "UNSIGNED-PAYLOAD");
          }
          params.set("X-Amz-Date", this.datetime);
          if (this.sessionToken && !this.appendSessionToken) {
            params.set("X-Amz-Security-Token", this.sessionToken);
          }
          this.signableHeaders = ["host", ...this.headers.keys()].filter((header) => allHeaders || !UNSIGNABLE_HEADERS.includes(header)).sort();
          this.signedHeaders = this.signableHeaders.join(";");
          this.canonicalHeaders = this.signableHeaders.map((header) => header + ":" + (header === "host" ? this.url.host : (this.headers.get(header) || "").replace(/\s+/g, " "))).join("\n");
          this.credentialString = [
            this.datetime.slice(0, 8),
            this.region,
            this.service,
            "aws4_request"
          ].join("/");
          if (this.signQuery) {
            if (this.service === "s3" && !params.has("X-Amz-Expires")) {
              params.set("X-Amz-Expires", "86400");
            }
            params.set("X-Amz-Algorithm", "AWS4-HMAC-SHA256");
            params.set("X-Amz-Credential", this.accessKeyId + "/" + this.credentialString);
            params.set("X-Amz-SignedHeaders", this.signedHeaders);
          }
          if (this.service === "s3") {
            try {
              this.encodedPath = decodeURIComponent(this.url.pathname.replace(/\+/g, " "));
            } catch (e) {
              this.encodedPath = this.url.pathname;
            }
          } else {
            this.encodedPath = this.url.pathname.replace(/\/+/g, "/");
          }
          if (!singleEncode) {
            this.encodedPath = encodeURIComponent(this.encodedPath).replace(/%2F/g, "/");
          }
          this.encodedPath = encodeRfc3986(this.encodedPath);
          const seenKeys = /* @__PURE__ */ new Set();
          this.encodedSearch = [...this.url.searchParams].filter(([k]) => {
            if (!k)
              return false;
            if (this.service === "s3") {
              if (seenKeys.has(k))
                return false;
              seenKeys.add(k);
            }
            return true;
          }).map((pair) => pair.map((p) => encodeRfc3986(encodeURIComponent(p)))).sort(([k1, v1], [k2, v2]) => k1 < k2 ? -1 : k1 > k2 ? 1 : v1 < v2 ? -1 : v1 > v2 ? 1 : 0).map((pair) => pair.join("=")).join("&");
        }
        async sign() {
          if (this.signQuery) {
            this.url.searchParams.set("X-Amz-Signature", await this.signature());
            if (this.sessionToken && this.appendSessionToken) {
              this.url.searchParams.set("X-Amz-Security-Token", this.sessionToken);
            }
          } else {
            this.headers.set("Authorization", await this.authHeader());
          }
          return {
            method: this.method,
            url: this.url,
            headers: this.headers,
            body: this.body
          };
        }
        async authHeader() {
          return [
            "AWS4-HMAC-SHA256 Credential=" + this.accessKeyId + "/" + this.credentialString,
            "SignedHeaders=" + this.signedHeaders,
            "Signature=" + await this.signature()
          ].join(", ");
        }
        async signature() {
          const date = this.datetime.slice(0, 8);
          const cacheKey = [
            this.secretAccessKey,
            date,
            this.region,
            this.service
          ].join();
          let kCredentials = this.cache.get(cacheKey);
          if (!kCredentials) {
            const kDate = await hmac("AWS4" + this.secretAccessKey, date);
            const kRegion = await hmac(kDate, this.region);
            const kService = await hmac(kRegion, this.service);
            kCredentials = await hmac(kService, "aws4_request");
            this.cache.set(cacheKey, kCredentials);
          }
          return buf2hex(await hmac(kCredentials, await this.stringToSign()));
        }
        async stringToSign() {
          return [
            "AWS4-HMAC-SHA256",
            this.datetime,
            this.credentialString,
            buf2hex(await hash(await this.canonicalString()))
          ].join("\n");
        }
        async canonicalString() {
          return [
            this.method.toUpperCase(),
            this.encodedPath,
            this.encodedSearch,
            this.canonicalHeaders + "\n",
            this.signedHeaders,
            await this.hexBodyHash()
          ].join("\n");
        }
        async hexBodyHash() {
          let hashHeader = this.headers.get("X-Amz-Content-Sha256");
          if (hashHeader == null) {
            if (this.body && typeof this.body !== "string" && !("byteLength" in this.body)) {
              throw new RuntimeError("body must be a string, ArrayBuffer or ArrayBufferView, unless you include the X-Amz-Content-Sha256 header");
            }
            hashHeader = buf2hex(await hash(this.body || ""));
          }
          return hashHeader;
        }
      };
      __name(hmac, "hmac");
      __name(hash, "hash");
      __name(buf2hex, "buf2hex");
      __name(encodeRfc3986, "encodeRfc3986");
      __name(guessServiceRegion, "guessServiceRegion");
    }
  });

  // packages/runtime/dist/utils/base64.js
  function b64ToUint6(nChr) {
    return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
  }
  function base64Decode(sBase64, nBlocksSize) {
    const sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
    const nInLen = sB64Enc.length;
    const nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
    const taBytes = new Uint8Array(nOutLen);
    let nMod3;
    let nMod4;
    let nUint24 = 0;
    let nOutIdx = 0;
    for (let nInIdx = 0; nInIdx < nInLen; nInIdx++) {
      nMod4 = nInIdx & 3;
      nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 6 * (3 - nMod4);
      if (nMod4 === 3 || nInLen - nInIdx === 1) {
        nMod3 = 0;
        while (nMod3 < 3 && nOutIdx < nOutLen) {
          taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
          nMod3++;
          nOutIdx++;
        }
        nUint24 = 0;
      }
    }
    return taBytes;
  }
  function uint6ToB64(nUint6) {
    return nUint6 < 26 ? nUint6 + 65 : nUint6 < 52 ? nUint6 + 71 : nUint6 < 62 ? nUint6 - 4 : nUint6 === 62 ? 43 : nUint6 === 63 ? 47 : 65;
  }
  function base64Encode(aBytes) {
    let nMod3 = 2;
    let sB64Enc = "";
    const nLen = aBytes.length;
    let nUint24 = 0;
    for (let nIdx = 0; nIdx < nLen; nIdx++) {
      nMod3 = nIdx % 3;
      nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
      if (nMod3 === 2 || aBytes.length - nIdx === 1) {
        sB64Enc += String.fromCodePoint(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
        nUint24 = 0;
      }
    }
    return sB64Enc.substring(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==");
  }
  var init_base64 = __esm({
    "packages/runtime/dist/utils/base64.js"() {
      "use strict";
      __name(b64ToUint6, "b64ToUint6");
      __name(base64Decode, "base64Decode");
      __name(uint6ToB64, "uint6ToB64");
      __name(base64Encode, "base64Encode");
    }
  });

  // packages/runtime/dist/utils/clf-date.js
  function numberToString(n) {
    const str = n.toString();
    return `${str.length === 1 ? "0" : ""}${str}`;
  }
  function getCLFOffset(date) {
    const tzoffset = date.getTimezoneOffset();
    const abstzoffset = Math.abs(tzoffset);
    const op = tzoffset > 0 ? "-" : "+";
    const hour2 = numberToString(Math.floor(abstzoffset / 60));
    const min = numberToString(abstzoffset % 60);
    return `${op}${hour2}${min}`;
  }
  function toCLFDate(now = /* @__PURE__ */ new Date()) {
    if (!(now instanceof Date)) {
      throw new Error("clf-date: invalid parameter");
    }
    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const day2 = numberToString(now.getDate());
    const month = MONTHS[now.getMonth()];
    const year2 = now.getFullYear();
    const hours = numberToString(now.getHours());
    const minutes = numberToString(now.getMinutes());
    const seconds = numberToString(now.getSeconds());
    const offset = getCLFOffset(now);
    return `${day2}/${month}/${year2}:${hours}:${minutes}:${seconds} ${offset}`;
  }
  var init_clf_date = __esm({
    "packages/runtime/dist/utils/clf-date.js"() {
      "use strict";
      __name(numberToString, "numberToString");
      __name(getCLFOffset, "getCLFOffset");
      __name(toCLFDate, "toCLFDate");
    }
  });

  // packages/runtime/dist/handlers/aws-lambda.js
  async function awsLambdaHandler(request, context) {
    const { accessKeyId, secretAccessKey, region, functionName, useLambdaProxyIntegration = true, useAwsResourcePathStyle = false, binaryMediaTypes } = context.route.handler.options;
    if (!accessKeyId) {
      throw new ConfigurationError("awsAccessKeyId is not set in the handler options");
    }
    if (!secretAccessKey) {
      throw new ConfigurationError("secretAccessKey is not set in the handler options");
    }
    if (!region) {
      throw new ConfigurationError("region is not set in the handler options");
    }
    if (!functionName) {
      throw new ConfigurationError("functionName is not set in the handler options");
    }
    const aws = new AwsClient({
      accessKeyId,
      secretAccessKey
    });
    const lambdaApiUrl = `https://lambda.${region}.amazonaws.com/2015-03-31/functions/${functionName}/invocations`;
    log5(`AWS Lambda URL: ${lambdaApiUrl}`);
    if (!useLambdaProxyIntegration) {
      return aws.fetch(lambdaApiUrl, {
        body: await request.arrayBuffer()
      });
    }
    const [body, isBase64Encoded] = await getBodyResult(request, {
      binaryMediaTypes
    });
    const { options } = context.route.handler;
    let event;
    if (options && typeof options === "object" && "payloadFormatVersion" in options && options.payloadFormatVersion === "2.0") {
      event = buildEventVersion2(request, context);
    } else {
      event = await buildEventVersion1(request, context, {
        useAwsResourcePathStyle
      });
    }
    log5("Calling onSendingAwsLambdaEvent hook");
    const modifiedEvent = await onSendingAwsLambdaEvent(request, context, event);
    modifiedEvent.body = body;
    modifiedEvent.isBase64Encoded = isBase64Encoded;
    const lambdaResponse = await aws.fetch(lambdaApiUrl, {
      body: JSON.stringify(modifiedEvent)
    });
    try {
      return getResponse(lambdaResponse);
    } catch (err) {
      if (err instanceof AwsLambdaError) {
        const headers = options && typeof options === "object" && "returnAmazonTraceIdHeader" in options && options.returnAmazonTraceIdHeader && err.traceId ? { AMZN_TRACE_ID_HEADER: err.traceId } : void 0;
        return HttpProblems.internalServerError(request, context, void 0, headers);
      }
      throw err;
    }
  }
  async function getResponse(lambdaResponse) {
    let json;
    try {
      json = await lambdaResponse.json();
    } catch (err) {
      throw new AwsLambdaError(`Lambda response did not contain valid JSON`, lambdaResponse.headers);
    }
    if (lambdaResponse.status !== 200) {
      if (json && typeof json === "object" && "message" in json && typeof json.message === "string") {
        throw new AwsLambdaError(json.message, lambdaResponse.headers);
      }
      throw new AwsLambdaError(`Status: ${lambdaResponse.statusText}`, lambdaResponse.headers);
    } else if (json && typeof json === "object" && "errorMessage" in json && typeof json.errorMessage === "string") {
      throw new AwsLambdaError(json.errorMessage, lambdaResponse.headers);
    } else if (!json || typeof json !== "object" || !("statusCode" in json) || typeof json.statusCode !== "number") {
      return new Response(JSON.stringify(json), {
        status: lambdaResponse.status,
        headers: {
          "content-type": "application/json"
        }
      });
    }
    const headers = new Headers();
    if ("headers" in json && json.headers) {
      if (typeof json.headers !== "object") {
        throw new AwsLambdaError(`Response headers must be an object. Received ${typeof json.headers}`, lambdaResponse.headers);
      }
      for (const [key, value] of Object.entries(json.headers)) {
        headers.set(key, value);
      }
    }
    if ("cookies" in json && json.cookies) {
      if (!Array.isArray(json.cookies)) {
        throw new AwsLambdaError(`Response cookies must be an array. Received ${typeof json.cookies}`, lambdaResponse.headers);
      }
      headers.set("cookie", json.cookies.join(";"));
    }
    let body;
    if ("isBase64Encoded" in json && typeof json.isBase64Encoded !== "boolean") {
      throw new AwsLambdaError(`Response property isBase64Encoded must be a boolean. Received ${typeof json.isBase64Encoded}`, lambdaResponse.headers);
    } else if ("isBase64Encoded" in json && json.isBase64Encoded === true) {
      if (!("body" in json)) {
        throw new AwsLambdaError("Response was set to base64 encoded but no body was set", lambdaResponse.headers);
      }
      if (typeof json.body !== "string") {
        throw new AwsLambdaError("Response was set to base64 encoded but body was not a string", lambdaResponse.headers);
      }
      body = base64Decode(json.body);
    } else if ("body" in json && typeof json.body === "string") {
      body = json.statusCode === 204 && json.body === "" ? null : json.body;
    } else if ("body" in json && json.body !== null && json.body !== void 0) {
      body = JSON.stringify(json.body);
    } else {
      body = null;
    }
    if (body !== null && "bodyEncoding" in json) {
      if (typeof json.bodyEncoding !== "string" || !(json.bodyEncoding === "gzip" || json.bodyEncoding === "deflate")) {
        throw new AwsLambdaError(`Response property bodyEncoding can only be set to 'gzip' or 'deflate'. Received ${json.bodyEncoding}`, lambdaResponse.headers);
      }
      const blob = new Blob([body]).stream().pipeThrough(new DecompressionStream(json.bodyEncoding));
      body = await new Response(blob).arrayBuffer();
    }
    return new Response(body, {
      headers,
      status: json.statusCode
    });
  }
  async function buildEventVersion1(request, context, { useAwsResourcePathStyle }) {
    const headers = {};
    const multiValueHeaders = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
      multiValueHeaders[key] = [value];
    });
    const queryStringParameters = request.query;
    const multiValueQueryStringParameters = {};
    for (const [key, value] of Object.entries(queryStringParameters)) {
      multiValueQueryStringParameters[key] = [value];
    }
    const url = new URL(request.url);
    const event = {
      version: "1.0",
      resource: url.pathname,
      path: url.pathname,
      httpMethod: request.method,
      headers,
      multiValueHeaders,
      queryStringParameters,
      multiValueQueryStringParameters,
      requestContext: {
        accountId: null,
        apiId: null,
        authorizer: {
          claims: {},
          scopes: []
        },
        domainName: url.hostname,
        domainPrefix: null,
        extendedRequestId: context.requestId,
        httpMethod: request.method,
        identity: {
          accessKey: null,
          accountId: null,
          caller: null,
          cognitoAuthenticationProvider: null,
          cognitoAuthenticationType: null,
          cognitoIdentityId: null,
          cognitoIdentityPoolId: null,
          principalOrgId: null,
          sourceIp: request.headers.get("CF-Connecting-IP"),
          user: null,
          userAgent: request.headers.get("user-agent"),
          userArn: null,
          clientCert: {
            clientCertPem: null,
            subjectDN: null,
            issuerDN: null,
            serialNumber: null,
            validity: {
              notBefore: null,
              notAfter: null
            }
          }
        },
        path: url.pathname,
        protocol: "HTTP/1.1",
        requestId: context.requestId,
        requestTime: toCLFDate(),
        requestTimeEpoch: (/* @__PURE__ */ new Date()).valueOf(),
        resourceId: context.route.operationId ?? null,
        resourcePath: getResourcePath(context.route.path, useAwsResourcePathStyle),
        stage: null
      },
      pathParameters: request.params,
      stageVariables: null
    };
    return event;
  }
  function buildEventVersion2(request, context) {
    const headers = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });
    const url = new URL(request.url);
    const event = {
      version: "2.0",
      routeKey: null,
      rawPath: url.pathname,
      rawQueryString: url.search,
      cookies: [],
      headers,
      queryStringParameters: request.query,
      requestContext: {
        accountId: null,
        apiId: null,
        authentication: {
          clientCert: {
            clientCertPem: null,
            subjectDN: null,
            issuerDN: null,
            serialNumber: null,
            validity: {
              notBefore: null,
              notAfter: null
            }
          }
        },
        authorizer: {
          jwt: {
            claims: {},
            scopes: []
          }
        },
        domainName: url.hostname,
        domainPrefix: null,
        http: {
          method: request.method,
          path: url.pathname,
          protocol: "HTTP/1.1",
          sourceIp: request.headers.get("CF-Connecting-IP"),
          userAgent: request.headers.get("user-agent")
        },
        requestId: context.requestId,
        routeKey: null,
        stage: null,
        time: toCLFDate(),
        timeEpoch: (/* @__PURE__ */ new Date()).valueOf()
      },
      pathParameters: request.params,
      stageVariables: null
    };
    return event;
  }
  async function getBodyResult(request, { binaryMediaTypes }) {
    let body;
    let isBase64Encoded = false;
    const contentType = request.headers.get("content-type");
    if (request.method === "GET" || request.method === "HEAD") {
      body = null;
    } else if (binaryMediaTypes && contentType && matchesContentType(binaryMediaTypes, contentType)) {
      const buffer = await request.arrayBuffer();
      body = base64Encode(new Uint8Array(buffer));
      isBase64Encoded = true;
    } else {
      body = await request.clone().text();
    }
    return [body, isBase64Encoded];
  }
  function matchesContentType(binaryMediaTypes, contentType) {
    const normalizedMimeType = contentType.split(";")[0].trim().toLowerCase();
    return binaryMediaTypes.findIndex((item) => {
      if (item === "*/*") {
        return true;
      } else {
        return item.toLowerCase() === normalizedMimeType;
      }
    }) > -1;
  }
  function getResourcePath(routePath, useAwsResourcePathStyle = false) {
    if (!useAwsResourcePathStyle) {
      return routePath;
    }
    const tokens = parse3(routePath);
    const toPath = compile(routePath);
    const params = {};
    tokens.forEach((token) => {
      if (typeof token === "string") {
        params[token] = `{${token}}`;
      } else {
        params[token.name] = `{${token.name}}`;
      }
    });
    return toPath(params);
  }
  var import_debug5, log5, AMZN_TRACE_ID_HEADER, AMZN_ERROR_TYPE_HEADER, onSendingAwsLambdaEventHooks, onSendingAwsLambdaEvent, AwsLambdaError, AwsLambdaHandlerExtensions;
  var init_aws_lambda = __esm({
    "packages/runtime/dist/handlers/aws-lambda.js"() {
      "use strict";
      import_debug5 = __toESM(require_debug());
      init_dist();
      init_errors();
      init_index_worker();
      init_aws();
      init_base64();
      init_clf_date();
      log5 = (0, import_debug5.debug)("zuplo:runtime");
      AMZN_TRACE_ID_HEADER = "X-Amzn-Trace-Id";
      AMZN_ERROR_TYPE_HEADER = "x-amzn-errortype";
      onSendingAwsLambdaEventHooks = [];
      onSendingAwsLambdaEvent = /* @__PURE__ */ __name(async (request, context, event) => {
        let current = event;
        for await (const hook of onSendingAwsLambdaEventHooks) {
          current = await hook(request, context, event);
        }
        return current;
      }, "onSendingAwsLambdaEvent");
      AwsLambdaError = class extends RuntimeError {
        static {
          __name(this, "AwsLambdaError");
        }
        traceId;
        errorType;
        constructor(message2, headers) {
          super(`Failed to invoke AWS Lambda function. ${message2}`);
          this.traceId = headers.get(AMZN_TRACE_ID_HEADER) ?? void 0;
          this.errorType = headers.get(AMZN_ERROR_TYPE_HEADER) ?? void 0;
        }
      };
      AwsLambdaHandlerExtensions = {
        addSendingAwsLambdaEventHook: (hook) => {
          onSendingAwsLambdaEventHooks.push(hook);
        }
      };
      __name(awsLambdaHandler, "awsLambdaHandler");
      __name(getResponse, "getResponse");
      __name(buildEventVersion1, "buildEventVersion1");
      __name(buildEventVersion2, "buildEventVersion2");
      __name(getBodyResult, "getBodyResult");
      __name(matchesContentType, "matchesContentType");
      __name(getResourcePath, "getResourcePath");
    }
  });

  // packages/runtime/dist/handlers/util.js
  async function logBadGatewayResponses(response, context) {
    if (BAD_CODES.includes(response.status)) {
      const systemLogger = SystemLogMap.getLogger(context);
      const clone2 = response.clone();
      const body = await clone2.text();
      const headers = {};
      for (const [key, value] of response.headers) {
        headers[key] = value;
      }
      systemLogger.warn(`BadGatewayResponse ${response.status}`, {
        status: response.status,
        statusText: response.statusText,
        body,
        headers
      });
    }
  }
  function getHandlerUserLogFunction(context) {
    if (writeLogLevel === void 0) {
      let level = Environment.instance.runtime.ZUPLO_HANDLER_WRITE_LOG_LEVEL;
      if (!["debug", "info", "warn", "error"].includes(level ?? "")) {
        level = "debug";
      }
      writeLogLevel = level;
    }
    const handlerLogFunction = context.log[writeLogLevel];
    return handlerLogFunction;
  }
  var BAD_CODES, writeLogLevel;
  var init_util = __esm({
    "packages/runtime/dist/handlers/util.js"() {
      "use strict";
      init_system_log_map();
      init_environment2();
      BAD_CODES = [502, 503, 504];
      __name(logBadGatewayResponses, "logBadGatewayResponses");
      __name(getHandlerUserLogFunction, "getHandlerUserLogFunction");
    }
  });

  // packages/runtime/dist/handlers/open-api.js
  async function openApiSpecHandler(request, context) {
    const buildId = Environment.instance.build.BUILD_ID;
    const { buildAssetsUrl } = Environment.instance;
    const options = context.route.handler.options;
    const { openApiFilePath } = options;
    if (!openApiFilePath) {
      throw new ConfigurationError(`Open API Spec Handler must have 'openApiFilePath' specified`);
    }
    const pathValidationResult = validateOpenApiPath(openApiFilePath);
    if (!pathValidationResult.isValid) {
      throw new ConfigurationError(pathValidationResult.error);
    }
    let openApiFileUrl;
    if (Environment.instance.isLocalDevelopment) {
      openApiFileUrl = `${buildAssetsUrl}/${openApiFilePath.substring(
        1
        // remove leading dot
      )}`;
    } else {
      openApiFileUrl = `${buildAssetsUrl}/${buildId}${openApiFilePath.substring(
        1
        // remove leading dot
      )}`;
    }
    const response = await internals_default.fetch(openApiFileUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers
    });
    if (response.status !== 200) {
      return HttpProblems.notFound(request, context, {
        detail: "OpenAPI file could not be found."
      });
    }
    const headersRemovedResponse = new Response(response.body, {
      headers: { "content-type": "application/json" },
      status: response.status,
      statusText: response.statusText
    });
    void logBadGatewayResponses(headersRemovedResponse, context);
    return headersRemovedResponse;
  }
  var validateOpenApiPath;
  var init_open_api = __esm({
    "packages/runtime/dist/handlers/open-api.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_http_problems();
      init_environment2();
      init_util();
      __name(openApiSpecHandler, "openApiSpecHandler");
      validateOpenApiPath = /* @__PURE__ */ __name((path) => {
        if (!path.startsWith("./")) {
          return { isValid: false, error: "'openApiFilePath' must start with './'" };
        }
        if (!path.startsWith("./config")) {
          return {
            isValid: false,
            error: "'openApiFilePath' must point to a file in your /config directory"
          };
        }
        if (!path.endsWith(".oas.json")) {
          return {
            isValid: false,
            error: "'openApiFilePath' must point to a file ending in '.oas.json'"
          };
        }
        return { isValid: true };
      }, "validateOpenApiPath");
    }
  });

  // packages/runtime/dist/handlers/redirect.js
  async function redirectHandler(request, context) {
    const options = context.route.handler.options;
    if (!options.location) {
      throw new ConfigurationError(`Redirect Handler must have 'location' specified`);
    }
    const status = options.status ?? 302;
    return new Response(null, {
      status,
      headers: {
        location: options.location
      }
    });
  }
  var init_redirect = __esm({
    "packages/runtime/dist/handlers/redirect.js"() {
      "use strict";
      init_errors();
      __name(redirectHandler, "redirectHandler");
    }
  });

  // packages/runtime/dist/handlers/url-forward.js
  function join(base, path) {
    const baseEndsSlash = base.endsWith("/");
    const pathStartsSlash = path.startsWith("/");
    if (baseEndsSlash && pathStartsSlash) {
      return `${base.substring(0, base.length - 1)}${path}`;
    }
    if (!baseEndsSlash && !pathStartsSlash) {
      return `${base}/${path}`;
    }
    return `${base}${path}`;
  }
  async function urlForwardHandler(request, context) {
    const userLogFunction = getHandlerUserLogFunction(context);
    const options = context.route.handler.options;
    const forwardSearch = options.forwardSearch === false ? false : true;
    if (!options.baseUrl) {
      throw new Error(`URL Forward Handler must have 'baseUrl' specified`);
    }
    if (!options || typeof options.__rewriteFunction !== "function") {
      throw new ConfigurationError("Invalid options for this route");
    }
    const forwardContext = {
      incomingRequestProperties: context.incomingRequestProperties,
      requestId: context.requestId,
      route: context.route,
      custom: context.custom
    };
    const incomingUrl = new URL(request.url);
    const rewrittenBaseUrl = options.__rewriteFunction(request, forwardContext);
    const newUrl = join(rewrittenBaseUrl, incomingUrl.pathname);
    const newStringUrl = forwardSearch ? `${newUrl}${incomingUrl.search}` : newUrl.toString();
    const start = Date.now();
    userLogFunction(`URL Forwarding to '${newStringUrl}'`);
    const result = await internals_default.fetch(newStringUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers
    });
    const delta = Date.now() - start;
    userLogFunction(`URL Forward received response ${result.status} - ${result.statusText} in ${delta}ms`);
    void logBadGatewayResponses(result, context);
    return result;
  }
  var init_url_forward = __esm({
    "packages/runtime/dist/handlers/url-forward.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_util();
      __name(join, "join");
      __name(urlForwardHandler, "urlForwardHandler");
    }
  });

  // packages/runtime/dist/handlers/url-rewrite.js
  async function urlRewriteHandler(request, context) {
    const userLogFunction = getHandlerUserLogFunction(context);
    const options = context.route.handler.options;
    const innerForwardSearch = options.forwardSearch === false ? false : true;
    const shouldFollowRedirects = options.followRedirects ?? false;
    if (!options || typeof options.__rewriteFunction !== "function") {
      throw new ConfigurationError("Invalid options for this route");
    }
    const rewriteContext = {
      incomingRequestProperties: context.incomingRequestProperties,
      requestId: context.requestId,
      route: context.route,
      custom: context.custom
    };
    const rewriteUrl = options.__rewriteFunction(request, rewriteContext);
    const url = innerForwardSearch ? addQuery(rewriteUrl, request.url) : rewriteUrl;
    const start = Date.now();
    userLogFunction(`URL Rewriting to '${url}'`);
    const result = await internals_default.fetch(url.toString(), {
      method: request.method,
      body: request.body,
      headers: request.headers,
      redirect: shouldFollowRedirects ? "follow" : "manual"
    });
    const delta = Date.now() - start;
    userLogFunction(`URL Rewrite received response ${result.status} - ${result.statusText} in ${delta}ms`);
    void logBadGatewayResponses(result, context);
    return result;
  }
  var addQuery;
  var init_url_rewrite = __esm({
    "packages/runtime/dist/handlers/url-rewrite.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_util();
      addQuery = /* @__PURE__ */ __name((targetUrl, incomingUrl) => {
        const targetUrlAsURL = new URL(targetUrl);
        const incomingUrlAsURL = new URL(incomingUrl);
        for (const [key, value] of incomingUrlAsURL.searchParams.entries()) {
          targetUrlAsURL.searchParams.append(key, value);
        }
        return targetUrlAsURL.toString();
      }, "addQuery");
      __name(urlRewriteHandler, "urlRewriteHandler");
    }
  });

  // packages/runtime/dist/handlers/websocket-handler.js
  async function webSocketHandler(request, context) {
    const env = Environment.instance;
    const options = context.route.handler.options;
    const userLogFunction = getHandlerUserLogFunction(context);
    if (!options || !options.rewritePattern) {
      throw new ConfigurationError(`WebSocket Handler must have option 'rewritePattern' specified`);
    }
    const upgradeHeader = request.headers.get("Upgrade");
    if (!upgradeHeader || upgradeHeader !== "websocket") {
      return HttpProblems.badRequest(request, context, {
        detail: "Request must include header 'Upgrade: websocket'"
      });
    }
    if (!options || typeof options.__rewriteFunction !== "function") {
      throw new ConfigurationError("Invalid options for this route");
    }
    const rewriteContext = {
      incomingRequestProperties: context.incomingRequestProperties,
      requestId: context.requestId,
      route: context.route,
      custom: context.custom
    };
    let rewriteUrl = options.__rewriteFunction(request, rewriteContext);
    const start = Date.now();
    userLogFunction(`Attempting WebSocket connection to '${rewriteUrl}'`);
    if (env.isDeno) {
      const headers = new Headers(request.headers);
      if (rewriteUrl.startsWith("service:")) {
        const tunnelConfig = await externalServiceTunnelConfig(rewriteUrl);
        const tmpUrl = new URL(rewriteUrl);
        const tunnelUrl = new URL(`${tunnelConfig.serviceBaseUrl}${tmpUrl.pathname}${tmpUrl.search}`);
        rewriteUrl = tunnelUrl.toString();
        for (const key in tunnelConfig.tunnelHeaders) {
          headers.set(key, tunnelConfig.tunnelHeaders[key]);
        }
      }
      rewriteUrl = rewriteUrl.replace(/^(http)/, "ws");
      try {
        if (headers.get("Authorization")) {
          const apiKey = headers.get("Authorization")?.replace("Bearer ", "");
          rewriteUrl += `?apiKey=${apiKey}`;
        }
      } catch (e) {
      }
      const resBody = JSON.stringify({ url: rewriteUrl });
      return new Response(resBody, { headers });
    }
    rewriteUrl = rewriteUrl.replace(/^(ws)/, "http");
    const result = await internals_default.fetch(rewriteUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    if (result.status !== 101 || !result.webSocket) {
      const content = await result.text();
      const msg = `WebSocket connection error - ${result.status}: ${result.statusText}, content: '${content}'`;
      throw new Error(msg);
    }
    const delta = Date.now() - start;
    userLogFunction(`WebSocket connected, received response ${result.status} - ${result.statusText} in ${delta}ms`);
    return new Response(null, {
      status: 101,
      webSocket: result.webSocket
    });
  }
  var init_websocket_handler = __esm({
    "packages/runtime/dist/handlers/websocket-handler.js"() {
      "use strict";
      init_errors();
      init_external_services();
      init_index_worker();
      init_internals();
      init_environment2();
      init_util();
      __name(webSocketHandler, "webSocketHandler");
    }
  });

  // packages/runtime/dist/handlers/websocket-policy-processor.js
  var getWebSocketPolicyFunctions, webSocketPolicyProcessor;
  var init_websocket_policy_processor = __esm({
    "packages/runtime/dist/handlers/websocket-policy-processor.js"() {
      "use strict";
      init_errors();
      getWebSocketPolicyFunctions = /* @__PURE__ */ __name((policies, type) => {
        const policyFunctions = policies.map((policyConfig, index) => {
          let policyFunction;
          if (typeof policyConfig.module === "object") {
            policyFunction = policyConfig.module[policyConfig.export];
          }
          if (!policyFunction || typeof policyFunction !== "function") {
            const policyType = type === "inbound" ? "WebSocketInboundPolicy" : "WebSocketOutboundPolicy";
            const policyExportPosition = `policy in position: ${index + 1}, export name: ${policyConfig.export}`;
            throw new ConfigurationError(`${policyType} - Websocket policy must be a valid function (${policyExportPosition})`);
          }
          return policyFunction;
        });
        return policyFunctions;
      }, "getWebSocketPolicyFunctions");
      webSocketPolicyProcessor = /* @__PURE__ */ __name(async (evt, sourceWS, targetWS, request, context, policies) => {
        let currentEventData = evt.data;
        if (policies && policies.length > 0) {
          const localPolicies = [...policies];
          while (localPolicies.length > 0) {
            const nextPolicy = localPolicies.shift();
            if (!nextPolicy) {
              return currentEventData;
            }
            currentEventData = await nextPolicy(currentEventData, targetWS, sourceWS, request, context);
            if (currentEventData === void 0) {
              return;
            }
          }
        }
        return currentEventData;
      }, "webSocketPolicyProcessor");
    }
  });

  // packages/runtime/dist/handlers/websocket-pipeline-handler.js
  function wireUpListeners(sourceWS, targetWS, request, context, policies) {
    sourceWS.addEventListener("close", () => {
      targetWS.close();
    });
    sourceWS.addEventListener("error", (evt) => {
      context.log.error(`WebSocket error: `, evt);
      targetWS.send(JSON.stringify(evt));
    });
    sourceWS.addEventListener("message", (evt) => {
      try {
        const innerPipeline = /* @__PURE__ */ __name(async (evt2) => {
          const currentEventData = await webSocketPolicyProcessor(evt2, sourceWS, targetWS, request, context, policies);
          if (currentEventData === void 0) {
            return;
          }
          targetWS.send(currentEventData);
        }, "innerPipeline");
        const promise = innerPipeline(evt).catch(context.log.error);
        context.waitUntil(promise);
      } catch (err) {
        context.log.error(err);
      }
    });
  }
  async function webSocketPipelineHandler(request, context) {
    const env = Environment.instance;
    const options = context.route.handler.options;
    const userLogFunction = getHandlerUserLogFunction(context);
    if (!options || !options.rewritePattern) {
      throw new ConfigurationError(`WebSocket Pipeline Handler must have option 'rewritePattern' specified`);
    }
    const upgradeHeader = request.headers.get("Upgrade");
    if (!upgradeHeader || upgradeHeader !== "websocket") {
      return HttpProblems.badRequest(request, context, {
        detail: "Request must include header 'Upgrade: websocket'"
      });
    }
    if (!options || typeof options.__rewriteFunction !== "function") {
      throw new ConfigurationError("Invalid options for this route");
    }
    const rewriteContext = {
      incomingRequestProperties: context.incomingRequestProperties,
      requestId: context.requestId,
      route: context.route,
      custom: context.custom
    };
    let rewriteUrl = options.__rewriteFunction(request, rewriteContext);
    const start = Date.now();
    userLogFunction(`Attempting WebSocket connection to '${rewriteUrl}'`);
    if (env.isDeno) {
      throw new ConfigurationError("Websocket pipeline handler is currently not supported on working-copy environments");
    }
    rewriteUrl = rewriteUrl.replace(/^(ws)/, "http");
    const result = await internals_default.fetch(rewriteUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    if (result.status !== 101 || !result.webSocket) {
      const content = await result.text();
      const msg = `WebSocket connection error - ${result.status}: ${result.statusText}, content: '${content}'`;
      throw new Error(msg);
    }
    const webSocketPair = new WebSocketPair();
    const [client, serverSocket] = Object.values(webSocketPair);
    const delta = Date.now() - start;
    userLogFunction(`WebSocket connected, received response ${result.status} - ${result.statusText} in ${delta}ms`);
    const outgoingSocket = result.webSocket;
    outgoingSocket.accept();
    serverSocket.accept();
    const inboundPolicies = options.policies && options.policies.inbound ? getWebSocketPolicyFunctions(options.policies.inbound, "inbound") : [];
    const outboundPolicies = options.policies && options.policies.outbound ? getWebSocketPolicyFunctions(options.policies.outbound, "outbound") : [];
    wireUpListeners(serverSocket, outgoingSocket, request, context, inboundPolicies);
    wireUpListeners(outgoingSocket, serverSocket, request, context, outboundPolicies);
    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }
  var init_websocket_pipeline_handler = __esm({
    "packages/runtime/dist/handlers/websocket-pipeline-handler.js"() {
      "use strict";
      init_errors();
      init_index_worker();
      init_internals();
      init_environment2();
      init_util();
      init_websocket_policy_processor();
      __name(wireUpListeners, "wireUpListeners");
      __name(webSocketPipelineHandler, "webSocketPipelineHandler");
    }
  });

  // packages/runtime/dist/logging/v1/transports/dynatrace-transport.js
  var DynaTraceLoggingPlugin, DynaTraceTransport;
  var init_dynatrace_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/dynatrace-transport.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_serialize_error();
      init_log_plugin();
      init_log_serializer_utils();
      DynaTraceLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "DynaTraceLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new DynaTraceTransport(this.options);
        }
      };
      DynaTraceTransport = class {
        static {
          __name(this, "DynaTraceTransport");
        }
        constructor(options) {
          this.#url = options.url;
          this.#apiToken = options.apiToken;
          this.#environmentType = Environment.instance.loggingEnvironmentType;
          this.#environmentStage = Environment.instance.loggingEnvironmentStage;
          this.#environment = Environment.instance.deploymentName;
        }
        #url;
        #apiToken;
        #environment;
        #environmentType;
        #environmentStage;
        log(logEntry, context) {
          logEntry.messages.forEach((message2) => {
            const entry = {
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              message: stringifyNonString(serializeError(message2)),
              severity: logEntry.level,
              "log.source": logEntry.logSource,
              requestId: logEntry.requestId,
              "custom.environment": this.#environment,
              "custom.environmentStage": this.#environmentStage,
              "custom.environmentType": this.#environmentType,
              "custom.loggingId": logEntry.loggingId,
              "custom.rayId": logEntry.rayId === null ? void 0 : logEntry.rayId
            };
            this.batcher.enqueue(entry);
          });
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
        #dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          await internals_default.fetch(this.#url, {
            method: "POST",
            body: JSON.stringify(entries),
            headers: {
              "content-type": "application/json; charset=utf-8",
              authorization: `Api-Token ${this.#apiToken}`
            }
          });
        };
        batcher = new BatchDispatch("dyna-trace-log-transport", 10, this.#dispatchFunction);
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/loki-transport.js
  function createBasicDigest(username, password) {
    const encoded = btoa(`${username}:${password}`);
    return encoded;
  }
  var LokiLoggingPlugin, LokiStream, LokiTransport;
  var init_loki_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/loki-transport.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_serialize_error();
      init_log_plugin();
      init_log_serializer_utils();
      LokiLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "LokiLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new LokiTransport(this.options);
        }
      };
      LokiStream = class {
        static {
          __name(this, "LokiStream");
        }
        constructor(level, environment2, environmentType, environmentStage, requestId) {
          this.level = level;
          this.environment = environment2;
          this.environmentType = environmentType;
          this.environmentStage = environmentStage;
          this.requestId = requestId;
        }
        job = "zuplo";
        level;
        environment;
        environmentType;
        environmentStage;
        requestId;
        equals = (entry) => {
          return this.level === entry.level && this.requestId === entry.requestId;
        };
      };
      __name(createBasicDigest, "createBasicDigest");
      LokiTransport = class {
        static {
          __name(this, "LokiTransport");
        }
        constructor(options) {
          this.#url = options.url;
          this.#basicAuthValue = createBasicDigest(options.username, options.password);
          this.#environmentType = Environment.instance.loggingEnvironmentType;
          this.#environmentStage = Environment.instance.loggingEnvironmentStage;
          this.#environment = Environment.instance.deploymentName;
        }
        #url;
        #basicAuthValue;
        #environment;
        #environmentType;
        #environmentStage;
        log(logEntry, context) {
          const lokiStream = new LokiStream(logEntry.level, this.#environment, this.#environmentType, this.#environmentStage, logEntry.requestId);
          logEntry.messages.forEach((message2) => {
            const entry = {
              stream: lokiStream,
              message: stringifyNonString(serializeError(message2)),
              // need nanosecond epoch string - add six 0s
              nanoSecondEpoch: `${logEntry.timestamp.getTime()}000000`
            };
            this.batcher.enqueue(entry);
          });
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
        #convertToLokiStreamsBatch = (entries) => {
          const batch = { streams: [] };
          entries.forEach((entry) => {
            let matchingStream = batch.streams.find((s) => s.stream.equals(entry.stream));
            if (!matchingStream) {
              matchingStream = { stream: entry.stream, values: [] };
              batch.streams.push(matchingStream);
            }
            matchingStream.values.push([entry.nanoSecondEpoch, entry.message]);
          });
          return batch;
        };
        #dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const batch = this.#convertToLokiStreamsBatch(entries);
          await internals_default.fetch(this.#url, {
            method: "POST",
            body: JSON.stringify(batch),
            headers: {
              "content-type": "application/json",
              authorization: `Basic ${this.#basicAuthValue}`
            }
          });
        };
        batcher = new BatchDispatch("loki-log-transport", 10, this.#dispatchFunction);
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/sumologic-transport.js
  var SumoLogicLoggingPlugin, SumoLogicTransport;
  var init_sumologic_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/sumologic-transport.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_serialize_error();
      init_log_plugin();
      init_log_serializer_utils();
      SumoLogicLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "SumoLogicLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new SumoLogicTransport(this.options);
        }
      };
      SumoLogicTransport = class {
        static {
          __name(this, "SumoLogicTransport");
        }
        constructor(options) {
          this.#url = options.url;
          this.#category = options.category;
          this.#name = options.name;
          this.#environmentType = Environment.instance.loggingEnvironmentType;
          this.#environmentStage = Environment.instance.loggingEnvironmentStage;
          this.#environment = Environment.instance.deploymentName;
        }
        #url;
        #environment;
        #environmentType;
        #environmentStage;
        #category;
        #name;
        log(logEntry, context) {
          logEntry.messages.forEach((message2) => {
            const entry = {
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              message: stringifyNonString(serializeError(message2)),
              severity: logEntry.level,
              source: logEntry.logSource,
              requestId: logEntry.requestId,
              environment: this.#environment,
              environmentType: this.#environmentType,
              environmentStage: this.#environmentStage,
              rayId: logEntry.rayId === null ? void 0 : logEntry.rayId
            };
            this.batcher.enqueue(entry);
          });
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
        #dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const body = entries.map((entry) => JSON.stringify(entry)).join("\n");
          const headers = new Headers({
            "content-type": "application/json; charset=utf-8"
          });
          if (this.#name) {
            headers.set("X-Sumo-Name", this.#name);
          }
          if (this.#category) {
            headers.set("X-Sumo-Category", this.#category);
          }
          await internals_default.fetch(this.#url, {
            method: "POST",
            body,
            headers
          });
        };
        batcher = new BatchDispatch("sumo-logic-log-transport", 10, this.#dispatchFunction);
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/vmware-log-insight-transport.js
  var DEFAULT_AGENT_ID, VMWareLogInsightLoggingPlugin, VMWareLogInsightTransport;
  var init_vmware_log_insight_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/vmware-log-insight-transport.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_log_plugin();
      init_log_serializer_utils();
      DEFAULT_AGENT_ID = "d3a5b78f823648f5b1df4fe269d41172";
      VMWareLogInsightLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "VMWareLogInsightLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new VMWareLogInsightTransport(this.options);
        }
      };
      VMWareLogInsightTransport = class {
        static {
          __name(this, "VMWareLogInsightTransport");
        }
        constructor(options) {
          let parsedUrl;
          try {
            parsedUrl = new URL(options.url);
            if (parsedUrl.pathname === "/") {
              parsedUrl.pathname = `/api/v1/events/ingest/${options.agentId ?? DEFAULT_AGENT_ID}`;
            }
          } catch (err) {
            throw new ConfigurationError(`Invalid option 'url' on 'VMWareLogInsightTransport' plugin. Must be a valid URL, received '${options.url}'`);
          }
          this.#url = parsedUrl.toString();
          this.#environmentType = Environment.instance.loggingEnvironmentType;
          this.#environmentStage = Environment.instance.loggingEnvironmentStage;
          this.#environment = Environment.instance.deploymentName;
          this.#onMessageSending = options.onMessageSending;
          this.#textReplacements = options.textReplacements;
          if (options.fields) {
            this.#fields = Object.entries(options.fields).map(([name, content]) => ({
              name,
              content
            }));
          }
        }
        #url;
        #textReplacements;
        #environment;
        #environmentType;
        #environmentStage;
        #onMessageSending;
        #fields;
        log(logEntry, context) {
          const entry = this.buildEntry(logEntry, context);
          this.batcher.enqueue(entry);
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
        buildEntry(logEntry, context) {
          let text = messagesToMultilineText(logEntry.messages);
          this.#textReplacements?.forEach((replacement) => {
            text = text.replaceAll(replacement[0], replacement[1]);
          });
          let entry = {
            timestamp: Date.now(),
            text,
            fields: [
              { name: "severity", content: logEntry.level.toUpperCase() },
              { name: "request_id", content: logEntry.requestId },
              { name: "environment_type", content: this.#environmentType },
              { name: "environment_stage", content: this.#environmentStage },
              { name: "log_source", content: logEntry.logSource },
              { name: "atomic_counter", content: logEntry.vectorClock }
            ]
          };
          if (logEntry.rayId) {
            entry.fields.push({ name: "request_ray_id", content: logEntry.rayId });
          }
          if (this.#environment) {
            entry.fields.push({ name: "environment", content: this.#environment });
          }
          if (this.#fields) {
            entry.fields.push(...this.#fields);
          }
          if (context.custom) {
            Object.entries(context.custom).forEach(([name, value]) => {
              const content = stringifyNonStringToText(value);
              if (content) {
                entry.fields.push({ name, content });
              }
            });
          }
          if (this.#onMessageSending) {
            entry = this.#onMessageSending(entry);
          }
          return entry;
        }
        #dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const response = await internals_default.fetch(this.#url, {
            method: "POST",
            body: JSON.stringify({ events: entries }),
            headers: {
              "content-type": "application/json; charset=utf-8"
            }
          });
          if (response.status !== 200) {
            try {
              const result = await response.text();
              console.error(`Error logging to Log Insight`, result);
            } catch (err) {
              console.error(err);
            }
          }
        };
        batcher = new BatchDispatch("vmware-log-insights-log-transport", 10, this.#dispatchFunction);
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/aws-transport.js
  var AWSLoggingPlugin, AWSLogTransport;
  var init_aws_transport = __esm({
    "packages/runtime/dist/logging/v1/transports/aws-transport.js"() {
      "use strict";
      init_aws();
      init_batch_dispatch();
      init_environment2();
      init_serialize_error();
      init_log_plugin();
      init_log_serializer_utils();
      AWSLoggingPlugin = class extends LogPlugin {
        static {
          __name(this, "AWSLoggingPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new AWSLogTransport(this.options);
        }
      };
      AWSLogTransport = class {
        static {
          __name(this, "AWSLogTransport");
        }
        awsClient;
        environment;
        environmentType;
        logGroupName;
        logStreamName;
        region;
        batcher = new BatchDispatch("aws-log-transport", 10, async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const body = JSON.stringify({
            logGroupName: this.logGroupName,
            logStreamName: this.logStreamName,
            logEvents: entries
          });
          await this.awsClient.fetch(`https://logs.${this.region}.amazonaws.com`, {
            headers: {
              "Content-Type": "application/x-amz-json-1.1",
              "x-amz-Target": "Logs_20140328.PutLogEvents"
            },
            body,
            aws: {
              accessKeyId: this.awsClient.accessKeyId,
              secretAccessKey: this.awsClient.secretAccessKey,
              service: this.awsClient.service,
              region: this.awsClient.region
            }
          });
        });
        constructor({ accessKeyId, logStreamName, logGroupName, secretAccessKey, region }) {
          this.awsClient = new AwsClient({
            accessKeyId,
            secretAccessKey,
            service: "logs",
            region
          });
          this.logGroupName = logGroupName;
          this.logStreamName = logStreamName;
          this.region = region;
          this.environmentType = Environment.instance.loggingEnvironmentType;
          this.environment = Environment.instance.deploymentName;
        }
        log(logEntry, context) {
          logEntry.messages.forEach((message2) => {
            const entry = {
              timestamp: (/* @__PURE__ */ new Date()).getTime(),
              message: JSON.stringify({
                data: stringifyNonString(serializeError(message2)),
                severity: logEntry.level,
                source: logEntry.logSource,
                environment: this.environment,
                requestId: logEntry.requestId,
                environmentType: this.environmentType,
                rayId: logEntry.rayId === null ? void 0 : logEntry.rayId
              })
            };
            this.batcher.enqueue(entry);
          });
          context.waitUntil(this.batcher.waitUntilFlushed());
        }
      };
    }
  });

  // packages/runtime/dist/logging/v1/transports/plugins.js
  var init_plugins2 = __esm({
    "packages/runtime/dist/logging/v1/transports/plugins.js"() {
      "use strict";
      init_data_dog_transport();
      init_dynatrace_transport();
      init_google_transport();
      init_loki_transport();
      init_sumologic_transport();
      init_vmware_log_insight_transport();
      init_aws_transport();
    }
  });

  // packages/runtime/dist/metrics/v1/transports/data-dog-metrics.js
  var contextMap, defaultDataDogContextTemplate, DataDogMetricsPlugin, DataDogMetricsTransport, DataDogMetricsError;
  var init_data_dog_metrics = __esm({
    "packages/runtime/dist/metrics/v1/transports/data-dog-metrics.js"() {
      "use strict";
      init_internals();
      init_system_log_map();
      init_batch_dispatch();
      init_metrics_plugin();
      contextMap = /* @__PURE__ */ new WeakMap();
      defaultDataDogContextTemplate = { tags: [] };
      DataDogMetricsPlugin = class extends MetricsPlugin {
        static {
          __name(this, "DataDogMetricsPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new DataDogMetricsTransport(this.options);
        }
        static setContext(context, data) {
          let ddContext = contextMap.get(context);
          if (!ddContext) {
            ddContext = defaultDataDogContextTemplate;
          }
          const merged = Object.assign({ ...ddContext }, data);
          contextMap.set(context, merged);
        }
      };
      DataDogMetricsTransport = class {
        static {
          __name(this, "DataDogMetricsTransport");
        }
        #apiKey;
        #baseUrl;
        #metrics;
        #tags;
        #includes;
        #batcher = void 0;
        constructor(options) {
          this.#apiKey = options.apiKey;
          this.#baseUrl = options.url ?? "https://api.datadoghq.com/api/v2/series";
          this.#metrics = Object.assign({
            latency: true,
            requestContentLength: true,
            responseContentLength: true
          }, options.metrics);
          this.#includes = options.include ?? {};
          this.#tags = options.tags ?? [];
        }
        pushMetrics(entry, context) {
          if (this.#batcher === void 0) {
            this.#batcher = new BatchDispatch("data-dog-metrics-transport", 10, this.dispatchFunction, SystemLogMap.getLogger(context));
          }
          const timestamp2 = Math.floor(entry.timestamp.getTime() / 1e3);
          const tags = this.#tags.concat(contextMap.get(context)?.tags ?? []);
          if (this.#includes.country) {
            tags.push(`country:${entry.country}`);
          }
          if (this.#includes.httpMethod) {
            tags.push(`httpMethod:${entry.method}`);
          }
          if (this.#includes.statusCode) {
            tags.push(`statusCode:${entry.statusCode}`);
          }
          if (this.#includes.path) {
            const path = entry.systemRouteName || entry.routePath;
            tags.push(`path:${path}`);
          }
          if (this.#metrics.latency) {
            this.#batcher.enqueue({
              metric: "zuplo.request.latency",
              type: 3,
              points: [
                {
                  timestamp: timestamp2,
                  value: entry.durationMs
                }
              ],
              tags
            });
          }
          if (this.#metrics.requestContentLength && entry.requestContentLength) {
            this.#batcher.enqueue({
              metric: "zuplo.request.content_length",
              type: 3,
              points: [
                {
                  timestamp: timestamp2,
                  value: entry.requestContentLength
                }
              ],
              tags
            });
          }
          if (this.#metrics.responseContentLength && entry.responseContentLength) {
            this.#batcher.enqueue({
              metric: "zuplo.response.content_length",
              type: 3,
              points: [
                {
                  timestamp: timestamp2,
                  value: entry.responseContentLength
                }
              ],
              tags
            });
          }
          context.waitUntil(this.#batcher.waitUntilFlushed());
        }
        dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const body = JSON.stringify({
            series: entries
          });
          const response = await internals_default.fetch(this.#baseUrl, {
            method: "POST",
            body,
            headers: {
              "content-type": "application/json",
              "DD-API-KEY": this.#apiKey
            }
          });
          if (!response.ok) {
            throw new DataDogMetricsError(await response.text());
          }
        };
      };
      DataDogMetricsError = class _DataDogMetricsError extends Error {
        static {
          __name(this, "DataDogMetricsError");
        }
        constructor(message2) {
          super(message2);
          Object.setPrototypeOf(this, _DataDogMetricsError.prototype);
        }
      };
    }
  });

  // packages/runtime/dist/metrics/v1/transports/dynatrace-metrics.js
  var contextMap2, defaultDynatraceContextTemplate, DynatraceMetricsPlugin, DynaTraceMetricsTransport, DynaTraceMetricsError;
  var init_dynatrace_metrics = __esm({
    "packages/runtime/dist/metrics/v1/transports/dynatrace-metrics.js"() {
      "use strict";
      init_internals();
      init_system_log_map();
      init_batch_dispatch();
      init_metrics_plugin();
      contextMap2 = /* @__PURE__ */ new WeakMap();
      defaultDynatraceContextTemplate = {
        dimensions: []
      };
      DynatraceMetricsPlugin = class extends MetricsPlugin {
        static {
          __name(this, "DynatraceMetricsPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         */
        getTransport() {
          return new DynaTraceMetricsTransport(this.options);
        }
        static setContext(context, data) {
          let dynaContext = contextMap2.get(context);
          if (!dynaContext) {
            dynaContext = defaultDynatraceContextTemplate;
          }
          const merged = Object.assign({ ...dynaContext }, data);
          contextMap2.set(context, merged);
        }
      };
      DynaTraceMetricsTransport = class {
        static {
          __name(this, "DynaTraceMetricsTransport");
        }
        apiToken;
        #baseUrl;
        #metrics;
        dimensions;
        #includes;
        #batcher = void 0;
        constructor(options) {
          this.apiToken = options.apiToken;
          this.#baseUrl = options.url;
          this.#metrics = Object.assign({
            latency: true,
            requestContentLength: true,
            responseContentLength: true
          }, options.metrics);
          this.#includes = options.include ?? {};
          this.dimensions = options.dimensions ?? [];
        }
        pushMetrics(entry, context) {
          if (this.#batcher === void 0) {
            this.#batcher = new BatchDispatch("dynatrace-metrics-transport", 10, this.dispatchFunction, SystemLogMap.getLogger(context));
          }
          const timestamp2 = Math.floor(entry.timestamp.getTime());
          const dimensions = this.dimensions.concat(contextMap2.get(context)?.dimensions ?? []);
          if (this.#includes.country) {
            dimensions.push(`country="${entry.country}"`);
          }
          if (this.#includes.httpMethod) {
            dimensions.push(`http_method="${entry.method}"`);
          }
          if (this.#includes.statusCode) {
            dimensions.push(`status_code="${entry.statusCode}"`);
          }
          if (this.#includes.path) {
            const path = entry.systemRouteName || entry.routePath;
            dimensions.push(`path="${path}"`);
          }
          const formattedDimensions = dimensions.join(",");
          if (this.#metrics.latency) {
            this.#batcher.enqueue(`zuplo.request.latency,${formattedDimensions} ${entry.durationMs} ${timestamp2}`);
          }
          if (this.#metrics.requestContentLength && entry.requestContentLength) {
            this.#batcher.enqueue(`zuplo.request.content_length,${formattedDimensions} ${entry.requestContentLength} ${timestamp2}`);
          }
          if (this.#metrics.responseContentLength && entry.responseContentLength) {
            this.#batcher.enqueue(`zuplo.response.content_length,${formattedDimensions} ${entry.responseContentLength} ${timestamp2}`);
          }
          context.waitUntil(this.#batcher.waitUntilFlushed());
        }
        dispatchFunction = async (entries) => {
          if (entries.length === 0) {
            return;
          }
          const body = entries.join("\n");
          const response = await internals_default.fetch(this.#baseUrl, {
            method: "POST",
            body,
            headers: {
              "content-type": "text/plain",
              Authorization: `Api-Token ${this.apiToken}`
            }
          });
          if (!response.ok) {
            throw new DynaTraceMetricsError(await response.text());
          }
        };
      };
      DynaTraceMetricsError = class _DynaTraceMetricsError extends Error {
        static {
          __name(this, "DynaTraceMetricsError");
        }
        constructor(message2) {
          super(message2);
          Object.setPrototypeOf(this, _DynaTraceMetricsError.prototype);
        }
      };
    }
  });

  // packages/runtime/dist/metrics/v1/transports/plugins.js
  var init_plugins3 = __esm({
    "packages/runtime/dist/metrics/v1/transports/plugins.js"() {
      "use strict";
      init_data_dog_metrics();
      init_dynatrace_metrics();
    }
  });

  // packages/runtime/dist/plugins/audit-log-output-providers/audit-log-datastax-provider.js
  var AuditLogDataStaxProvider;
  var init_audit_log_datastax_provider = __esm({
    "packages/runtime/dist/plugins/audit-log-output-providers/audit-log-datastax-provider.js"() {
      "use strict";
      init_internals();
      AuditLogDataStaxProvider = class {
        static {
          __name(this, "AuditLogDataStaxProvider");
        }
        constructor(options) {
          this.#options = options;
        }
        #options;
        writeLogBatch = async (entries) => {
          await Promise.allSettled(entries.map(async (entry) => {
            await internals_default.fetch(this.#options.url, {
              method: "POST",
              headers: {
                "X-Cassandra-Token": this.#options.xCassandraToken,
                "content-type": "application/json"
              },
              body: JSON.stringify(entry)
            });
          }));
        };
      };
    }
  });

  // packages/runtime/dist/plugins/audit-log-plugin.js
  var AuditLogPlugin, serializableHeaders, defaultAuditOutputOptions, AuditPluginImpl;
  var init_audit_log_plugin = __esm({
    "packages/runtime/dist/plugins/audit-log-plugin.js"() {
      "use strict";
      init_batch_dispatch();
      init_plugins();
      AuditLogPlugin = class extends SystemRuntimePlugin {
        static {
          __name(this, "AuditLogPlugin");
        }
        constructor(outputProvider, init) {
          super();
          this.#outputProvider = outputProvider;
          this.#init = init;
        }
        #outputProvider;
        #init;
        async initialize(runtimeInit2) {
          new AuditPluginImpl(runtimeInit2, this.#outputProvider, this.#init);
        }
      };
      serializableHeaders = /* @__PURE__ */ __name((headers) => {
        const output = {};
        headers.forEach((value, key) => {
          output[key] = value;
        });
        return output;
      }, "serializableHeaders");
      defaultAuditOutputOptions = {
        requestFilter: async () => true,
        include: {
          request: {
            headers: true,
            body: true
          },
          response: {
            headers: true,
            body: true
          }
        }
      };
      AuditPluginImpl = class {
        static {
          __name(this, "AuditPluginImpl");
        }
        constructor(runtime, outputProvider, options) {
          this.#outputProvider = outputProvider;
          const init = { ...defaultAuditOutputOptions };
          if (options?.requestFilter) {
            init.requestFilter = options.requestFilter;
          }
          if (options?.include?.request) {
            Object.assign(init, options.include.request);
          }
          if (options?.include?.response) {
            Object.assign(init, options.include.response);
          }
          this.#init = init;
          runtime.addRequestHook(this.#auditHook);
          this.#batchDispatcher = new BatchDispatch(`audit-log`, 10, this.#dispatch);
        }
        #init;
        #outputProvider;
        #batchDispatcher;
        #dispatch = async (entries) => {
          await this.#outputProvider.writeLogBatch(entries);
        };
        #asyncPrepLogs = async (clonedResponse, clonedRequest, context, timestamp2, durationMs, userSub) => {
          try {
            const auditLogEntry = {
              timestamp: timestamp2,
              durationMs,
              routePath: context.route.path,
              requestId: context.requestId,
              userSub,
              request: {
                url: clonedRequest.url,
                method: clonedRequest.method,
                headers: this.#init.include?.request?.headers ? serializableHeaders(clonedRequest.headers) : void 0,
                body: this.#init.include?.request?.body ? await clonedRequest.text() : void 0
              },
              response: {
                status: clonedResponse.status,
                statusText: clonedResponse.statusText,
                headers: this.#init.include?.response?.headers ? serializableHeaders(clonedResponse.headers) : void 0,
                body: this.#init.include?.response?.body ? await clonedResponse.text() : void 0
              }
            };
            this.#batchDispatcher.enqueue(auditLogEntry);
            context.waitUntil(this.#batchDispatcher.waitUntilFlushed());
          } catch (err) {
            context.log.error(err);
          }
        };
        #auditHook = async (request, context) => {
          try {
            const shouldLog2 = await this.#init.requestFilter(request, context);
            if (!shouldLog2) {
              return request;
            }
            const timestamp2 = /* @__PURE__ */ new Date();
            const start = Date.now();
            const requestClone = request.clone();
            context.addResponseSendingFinalHook(async (response, latestRequest) => {
              const end = Date.now();
              const responseClone = response.clone();
              const promise = this.#asyncPrepLogs(responseClone, requestClone, context, timestamp2, end - start, latestRequest.user?.sub).catch((err) => {
                context.log.error(err);
              });
              context.waitUntil(promise);
            });
            return request;
          } catch (err) {
            context.log.error(err);
            return request;
          }
        };
      };
    }
  });

  // packages/runtime/dist/utils/stripe/error.js
  var StripeError, StripeSignatureVerificationError;
  var init_error = __esm({
    "packages/runtime/dist/utils/stripe/error.js"() {
      "use strict";
      StripeError = class extends Error {
        static {
          __name(this, "StripeError");
        }
        message;
        type;
        raw;
        rawType;
        headers;
        requestId;
        code;
        doc_url;
        param;
        detail;
        statusCode;
        charge;
        decline_code;
        payment_method_type;
        payment_intent;
        payment_method;
        setup_intent;
        source;
        constructor(raw = {}) {
          super(raw.message);
          this.type = this.constructor.name;
          this.raw = raw;
          this.rawType = raw.type;
          this.code = raw.code;
          this.doc_url = raw.doc_url;
          this.param = raw.param;
          this.detail = raw.detail;
          this.headers = raw.headers;
          this.requestId = raw.requestId;
          this.statusCode = raw.statusCode;
          this.message = raw.message;
          this.charge = raw.charge;
          this.decline_code = raw.decline_code;
          this.payment_intent = raw.payment_intent;
          this.payment_method = raw.payment_method;
          this.payment_method_type = raw.payment_method_type;
          this.setup_intent = raw.setup_intent;
          this.source = raw.source;
        }
      };
      StripeSignatureVerificationError = class extends StripeError {
        static {
          __name(this, "StripeSignatureVerificationError");
        }
        header;
        payload;
        constructor(header, payload, raw = {}) {
          super(raw);
          this.header = header;
          this.payload = payload;
        }
      };
    }
  });

  // packages/runtime/dist/utils/stripe/webhook.js
  async function constructEventAsync(payload, header, secret, tolerance = DEFAULT_TOLERANCE, receivedAt) {
    await verifyHeaderAsync(payload, header, secret, tolerance, receivedAt);
    const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
    return jsonPayload;
  }
  function makeHMACContent(payload, details) {
    return `${details.timestamp}.${payload}`;
  }
  async function verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, receivedAt) {
    const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, EXPECTED_SCHEME);
    const secretContainsWhitespace = /\s/.test(secret);
    const expectedSignature = await computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
    return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
  }
  function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
    if (!encodedPayload) {
      throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
        message: "No webhook payload was provided."
      });
    }
    const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
    const textDecoder = new TextDecoder("utf8");
    const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
    if (Array.isArray(encodedHeader)) {
      throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
    }
    if (encodedHeader == null || encodedHeader == "") {
      throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
        message: "No stripe-signature header value was provided."
      });
    }
    const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
    const details = parseHeader(decodedHeader, expectedScheme);
    if (!details || details.timestamp === -1) {
      throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
        message: "Unable to extract timestamp and signatures from header"
      });
    }
    if (!details.signatures.length) {
      throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
        message: "No signatures found with expected scheme"
      });
    }
    return {
      decodedPayload,
      decodedHeader,
      details,
      suspectPayloadType
    };
  }
  function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
    const signatureFound = !!details.signatures.filter((sig) => secureCompare(sig, expectedSignature)).length;
    const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing";
    const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
    if (!signatureFound) {
      if (suspectPayloadType) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
        });
      }
      throw new StripeSignatureVerificationError(header, payload, {
        message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n" + docsLocation + "\n" + whitespaceMessage
      });
    }
    const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1e3) - details.timestamp;
    if (tolerance > 0 && timestampAge > tolerance) {
      throw new StripeSignatureVerificationError(header, payload, {
        message: "Timestamp outside the tolerance zone"
      });
    }
    return true;
  }
  function parseHeader(header, scheme) {
    if (typeof header !== "string") {
      return null;
    }
    return header.split(",").reduce((accum, item) => {
      const kv = item.split("=");
      if (kv[0] === "t") {
        accum.timestamp = parseInt(kv[1], 10);
      }
      if (kv[0] === scheme) {
        accum.signatures.push(kv[1]);
      }
      return accum;
    }, {
      timestamp: -1,
      signatures: []
    });
  }
  function secureCompare(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    const len = a.length;
    let result = 0;
    for (let i = 0; i < len; ++i) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }
  async function computeHMACSignatureAsync(payload, secret) {
    const encoder3 = new TextEncoder();
    const key = await crypto.subtle.importKey("raw", encoder3.encode(secret), {
      name: "HMAC",
      hash: { name: "SHA-256" }
    }, false, ["sign"]);
    const signatureBuffer = await crypto.subtle.sign("hmac", key, encoder3.encode(payload));
    const signatureBytes = new Uint8Array(signatureBuffer);
    const signatureHexCodes = new Array(signatureBytes.length);
    for (let i = 0; i < signatureBytes.length; i++) {
      signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
    }
    return signatureHexCodes.join("");
  }
  var EXPECTED_SCHEME, DEFAULT_TOLERANCE, byteHexMapping;
  var init_webhook = __esm({
    "packages/runtime/dist/utils/stripe/webhook.js"() {
      "use strict";
      init_error();
      EXPECTED_SCHEME = "v1";
      DEFAULT_TOLERANCE = 300;
      __name(constructEventAsync, "constructEventAsync");
      __name(makeHMACContent, "makeHMACContent");
      __name(verifyHeaderAsync, "verifyHeaderAsync");
      __name(parseEventDetails, "parseEventDetails");
      __name(validateComputedSignature, "validateComputedSignature");
      __name(parseHeader, "parseHeader");
      __name(secureCompare, "secureCompare");
      __name(computeHMACSignatureAsync, "computeHMACSignatureAsync");
      byteHexMapping = new Array(256);
      for (let i = 0; i < byteHexMapping.length; i++) {
        byteHexMapping[i] = i.toString(16).padStart(2, "0");
      }
    }
  });

  // packages/runtime/dist/utils/validator.js
  function optionValidator(options, sourceName, sourceType = "policy") {
    const optionSourceName = `${sourceType} '${sourceName}'`;
    if (!isObject(options)) {
      throw new ConfigurationError(`Options on ${optionSourceName} is expected to be an object. Received the type '${typeof options}'.`);
    }
    const validate = /* @__PURE__ */ __name((optionName, expectedType, optional2) => {
      const optionValue = options[optionName];
      if (optional2 && optionValue === void 0) {
        return;
      } else if (optionValue === void 0) {
        throw new ConfigurationError(`Value of '${String(optionName)}' on ${optionSourceName} is required, but no value was set. If using an environment variable, check that it is set correctly.`);
      }
      if (expectedType === "array" && Array.isArray(optionValue)) {
        throw new ConfigurationError(`Value of '${String(optionName)}' on ${optionSourceName} must be an array. Received type ${typeof optionValue}.`);
      } else if (typeof optionValue !== expectedType) {
        throw new ConfigurationError(`Value of '${String(optionName)}' on ${optionSourceName} must be of type ${expectedType}. Received type ${typeof optionValue}.`);
      }
      if (typeof optionValue === "string" && optionValue.length === 0) {
        throw new ConfigurationError(`Value of '${String(optionName)}' on ${optionSourceName} must be a non-empty string. The value received is empty. If using an environment variable, check that it is set correctly.`);
      } else if (typeof optionValue === "number" && isNaN(optionValue)) {
        throw new ConfigurationError(`Value of '${String(optionName)}' on ${optionSourceName} must be valid number. If using an environment variable, check that it is set correctly.`);
      }
    }, "validate");
    const optional = /* @__PURE__ */ __name((optionName, expectedType) => {
      validate(optionName, expectedType, true);
      return { optional, required };
    }, "optional");
    const required = /* @__PURE__ */ __name((optionName, expectedType) => {
      validate(optionName, expectedType, false);
      return { optional, required };
    }, "required");
    return { optional, required };
  }
  var init_validator = __esm({
    "packages/runtime/dist/utils/validator.js"() {
      "use strict";
      init_errors();
      init_types2();
      __name(optionValidator, "optionValidator");
    }
  });

  // packages/runtime/dist/policies/stripe-webhook-verification-inbound/policy.js
  var StripeWebhookVerificationInboundPolicy;
  var init_policy = __esm({
    "packages/runtime/dist/policies/stripe-webhook-verification-inbound/policy.js"() {
      "use strict";
      init_policies();
      init_http_problems();
      init_webhook();
      init_validator();
      StripeWebhookVerificationInboundPolicy = class extends InboundPolicy {
        static {
          __name(this, "StripeWebhookVerificationInboundPolicy");
        }
        async handler(request, context) {
          optionValidator(this.options, this.policyName).required("signingSecret", "string").optional("tolerance", "number");
          const sig = request.headers.get("stripe-signature");
          try {
            const body = await request.clone().text();
            await constructEventAsync(
              body,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              sig,
              this.options.signingSecret
            );
          } catch (err) {
            let erroMessage = err.message;
            if (err.type && err.type === "StripeSignatureVerificationError") {
              const message2 = err.message;
              const regex = /Note:(.*)/g;
              const match = regex.exec(message2);
              erroMessage = match ? match[1].trim() : message2;
              if (erroMessage.startsWith("No signatures found matching the expected signature for payload")) {
                erroMessage = "The Stripe Webhook Signature Secret provided is incorrect and does not match to the signature on the event received. Make sure your Zuplo configuration is correct.";
              }
            }
            context.log.error(`Error validating stripe webhook`, erroMessage);
            return HttpProblems.badRequest(request, context, {
              title: "Webhook Error",
              detail: erroMessage
            });
          }
          return request;
        }
      };
    }
  });

  // packages/runtime/dist/utils/stripe/types.js
  function isStripeWebhookEvent(event) {
    return event !== null && typeof event === "object" && "id" in event && isString(event.id) && "type" in event && isString(event.type);
  }
  var init_types3 = __esm({
    "packages/runtime/dist/utils/stripe/types.js"() {
      "use strict";
      init_types2();
      __name(isStripeWebhookEvent, "isStripeWebhookEvent");
    }
  });

  // packages/runtime/dist/utils/stripe/api.js
  var StripeApi, api_default;
  var init_api = __esm({
    "packages/runtime/dist/utils/stripe/api.js"() {
      "use strict";
      init_errors();
      init_internals();
      StripeApi = {
        getSubscription: async ({ subscriptionId, stripeSecretKey, logger }) => {
          const response = await internals_default.fetch(`https://api.stripe.com/v1/subscriptions/${subscriptionId}`, {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`
            }
          });
          const subscriptionResult = await response.json();
          if (response.status !== 200) {
            const message2 = `Error retrieving subscription from Stripe API.`;
            logger.error(message2, subscriptionResult);
            throw new RuntimeError(message2);
          }
          return subscriptionResult;
        },
        getCustomer: async ({ customerId, stripeSecretKey, logger }) => {
          const response = await internals_default.fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`
            }
          });
          const customerResult = await response.json();
          if (response.status !== 200) {
            const message2 = `Error retrieving customer from Stripe API.`;
            logger.error(message2, customerResult);
            throw new RuntimeError(message2);
          }
          return customerResult;
        },
        getUpcomingInvoice: async ({ customerId, stripeSecretKey, logger }) => {
          const response = await internals_default.fetch(`https://api.stripe.com/v1/invoices/upcoming?customer=${customerId}`, {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`
            }
          });
          const invoiceResult = await response.json();
          if (response.status !== 200) {
            const message2 = `Error retrieving customer upcoming invoice from Stripe API.`;
            logger.error(message2, invoiceResult);
            throw new RuntimeError(message2);
          }
          return invoiceResult;
        }
      };
      api_default = StripeApi;
    }
  });

  // packages/runtime/dist/plugins/stripe-event-handlers/apikey-mgmt-service-operations.js
  async function createConsumer({ apiKeyBucketName, stripeSubscriptionId, stripeProductId, stripeCustomerId, managerEmail, managerSub, context }) {
    const { authApiJWT } = Environment.instance;
    const url = new URL(`/v1/buckets/${apiKeyBucketName}/consumers`, API_KEY_MANAGEMENT_SERVICE_URL);
    url.searchParams.set("with-api-key", "true");
    const consumerId = crypto.randomUUID();
    const body = {
      name: consumerId,
      description: MONETIZATION_CONSUMER_LABEL,
      tags: {
        // Adding as tags so we can query the API
        subscriptionExternalId: stripeSubscriptionId,
        planExternalIds: [stripeProductId]
      },
      metadata: {
        // Metadata so the customer can use it if they want
        stripeSubscriptionId,
        stripeProductId,
        stripeCustomerId
      },
      managers: [{ sub: managerSub, email: managerEmail }]
    };
    const response = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, url.toString(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authApiJWT}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const result = await response.json();
    if (response.status !== 200) {
      const message2 = `Error creating API Key Consumer`;
      context.log.error(message2, result);
      throw new RuntimeError(message2);
    }
    context.log.info(`Successfully created API Key Consumer`, {
      consumerId,
      stripeSubscriptionId,
      stripeProductId
    });
    return consumerId;
  }
  async function createConsumerInvite({ apiKeyBucketName, stripeSubscriptionId, stripeProductId, stripeCustomerId, managerEmail, context }) {
    const { authApiJWT } = Environment.instance;
    const url = new URL(`/v1/buckets/${apiKeyBucketName}/consumers`, API_KEY_MANAGEMENT_SERVICE_URL);
    url.searchParams.set("with-api-key", "true");
    const consumerId = crypto.randomUUID();
    const body = {
      name: consumerId,
      description: MONETIZATION_CONSUMER_LABEL,
      tags: {
        // Adding as tags so we can query the API
        subscriptionExternalId: stripeSubscriptionId,
        planExternalIds: [stripeProductId]
      },
      metadata: {
        // Metadata so the customer can use it if they want
        stripeSubscriptionId,
        stripeProductId,
        stripeCustomerId
      },
      managers: [managerEmail]
    };
    const response = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, url.toString(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authApiJWT}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const result = await response.json();
    if (response.status !== 200) {
      const message2 = `Error creating API Key Consumer`;
      context.log.error(message2, result);
      throw new RuntimeError(message2);
    }
    context.log.info(`Successfully created API Key Consumer with Manager Invite`, {
      consumerId,
      stripeSubscriptionId,
      stripeProductId
    });
    return consumerId;
  }
  async function deleteConsumer({ apiKeyBucketName, consumerId, context }) {
    const { authApiJWT } = Environment.instance;
    const url = new URL(`/v1/buckets/${apiKeyBucketName}/consumers/${consumerId}`, API_KEY_MANAGEMENT_SERVICE_URL);
    url.searchParams.set("with-api-key", "true");
    const response = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, url.toString(), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authApiJWT}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({})
    });
    if (response.status !== 204) {
      const result = await response.json();
      const message2 = `Error invalidating API Key Consumer`;
      context.log.error(message2, result);
      throw new RuntimeError(message2);
    }
    context.log.info(`Successfully invalidated API Key Consumer '${consumerId}`);
    return consumerId;
  }
  var API_KEY_MANAGEMENT_SERVICE_URL, MONETIZATION_CONSUMER_LABEL;
  var init_apikey_mgmt_service_operations = __esm({
    "packages/runtime/dist/plugins/stripe-event-handlers/apikey-mgmt-service-operations.js"() {
      "use strict";
      init_errors();
      init_system_log_map();
      init_environment2();
      init_retry();
      API_KEY_MANAGEMENT_SERVICE_URL = "https://api-key-management-service-eq7z4lly2a-ue.a.run.app";
      MONETIZATION_CONSUMER_LABEL = "My API Key";
      __name(createConsumer, "createConsumer");
      __name(createConsumerInvite, "createConsumerInvite");
      __name(deleteConsumer, "deleteConsumer");
    }
  });

  // packages/runtime/dist/plugins/stripe-event-handlers/metering-service-operations.js
  async function createSubscription({ context, stripeSubscriptionId, stripeProductId, customerKey, meteringBucketId, meteringBucketRegion, customerExternalId, subscriptionStatus, metadata }) {
    const body = {
      status: subscriptionStatus,
      type: "periodic",
      renewalStrategy: "monthly",
      region: meteringBucketRegion,
      subscriptionExternalId: stripeSubscriptionId,
      planExternalIds: [stripeProductId],
      customerKey,
      customerExternalId,
      metadata
    };
    const { authApiJWT, meteringServiceUrl } = Environment.instance;
    if (!isNonEmptyString(authApiJWT)) {
      throw new SystemError("No Zuplo JWT token set.");
    }
    const response = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, `${meteringServiceUrl}/internal/v1/metering/${meteringBucketId}/subscriptions`, {
      headers: {
        Authorization: `Bearer ${authApiJWT}`,
        "Content-Type": "application/json",
        "zp-rid": context.requestId
      },
      method: "POST",
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const message2 = `Unable to create a monetization subscription for Stripe subscription '${stripeSubscriptionId}'.`;
      let problem;
      let additionalErrorInformation = "";
      try {
        problem = await response.json();
        additionalErrorInformation = problem.detail ?? problem.title;
      } catch (err) {
        problem = {
          type: "https://zup.fail/http-status/500",
          title: "Internal Server Error",
          status: response.status,
          detail: response.statusText
        };
      }
      context.log.error(message2, problem);
      throw new RuntimeError(`${message2} ${additionalErrorInformation}`);
    }
    context.log.info(`Successfully created monetization subscription.`, body);
  }
  async function updateSubscription({ context, meteringSubscriptionId, meteringBucketId, requestBody }) {
    const { authApiJWT, meteringServiceUrl } = Environment.instance;
    if (!isNonEmptyString(authApiJWT)) {
      throw new SystemError("No Zuplo JWT token set.");
    }
    const updateSubscription2 = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, `${meteringServiceUrl}/internal/v1/metering/${meteringBucketId}/subscriptions/${meteringSubscriptionId}`, {
      headers: {
        Authorization: `Bearer ${authApiJWT}`,
        "Content-Type": "application/json",
        "zp-rid": context.requestId
      },
      method: "PATCH",
      body: JSON.stringify(requestBody)
    });
    if (!updateSubscription2.ok) {
      const message2 = `Unable to update monetization subscription with: '${JSON.stringify(requestBody)}'.`;
      let problem;
      let additionalErrorInformation = "";
      try {
        problem = await updateSubscription2.json();
        additionalErrorInformation = problem.detail ?? problem.title;
      } catch (err) {
        problem = {
          type: "https://zup.fail/http-status/500",
          title: "Internal Server Error",
          status: updateSubscription2.status,
          detail: updateSubscription2.statusText
        };
      }
      context.log.error(message2, problem);
      throw new RuntimeError(`${message2} ${additionalErrorInformation}`);
    }
    context.log.info(`Successfully updated monetization subscription with: '${JSON.stringify(requestBody)}'.`);
  }
  async function getSubscription({ context, stripeSubscriptionId, stripeCustomerId, meteringBucketId }) {
    const { authApiJWT, meteringServiceUrl } = Environment.instance;
    if (!isNonEmptyString(authApiJWT)) {
      throw new SystemError("No Zuplo JWT token set.");
    }
    const response = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, `${meteringServiceUrl}/internal/v1/metering/${meteringBucketId}/subscriptions?subscriptionExternalId=${stripeSubscriptionId}`, {
      headers: {
        Authorization: `Bearer ${authApiJWT}`,
        "zp-rid": context.requestId
      },
      method: "GET"
    });
    if (!response.ok) {
      const message2 = `Unable to retrieve the monetization subscription for Stripe subscription '${stripeSubscriptionId}'.`;
      let problem;
      let additionalErrorInformation = "";
      try {
        problem = await response.json();
        additionalErrorInformation = problem.detail ?? problem.title;
      } catch (err) {
        problem = {
          type: "https://zup.fail/http-status/500",
          title: "Internal Server Error",
          status: response.status,
          detail: response.statusText
        };
      }
      context.log.error(message2, problem);
      throw new RuntimeError(`${message2} ${additionalErrorInformation}`);
    }
    const bucketSubscriptions = await response.json();
    if (bucketSubscriptions.data.length === 0) {
      const message2 = `Subscription was not found for Stripe subscription '${stripeSubscriptionId}' and the event was ignored by Zuplo.`;
      context.log.error(message2);
      throw new RuntimeError(message2);
    }
    if (bucketSubscriptions.data[0].customerExternalId !== stripeCustomerId) {
      const message2 = `Subscription was not found for Stripe customer '${stripeCustomerId}' and the event was ignored by Zuplo.`;
      context.log.error(message2);
      throw new RuntimeError(message2);
    }
    return bucketSubscriptions.data[0];
  }
  var init_metering_service_operations = __esm({
    "packages/runtime/dist/plugins/stripe-event-handlers/metering-service-operations.js"() {
      "use strict";
      init_errors();
      init_system_log_map();
      init_environment2();
      init_retry();
      init_types2();
      __name(createSubscription, "createSubscription");
      __name(updateSubscription, "updateSubscription");
      __name(getSubscription, "getSubscription");
    }
  });

  // packages/runtime/dist/plugins/stripe-event-handlers/utils.js
  function stripeStatusToMeteringStatus(stripeStatus) {
    return stripeStatus.replaceAll("_", "-");
  }
  function unixTimestampToISOString(timestamp2) {
    const date = new Date(timestamp2 * 1e3);
    return date.toISOString();
  }
  var UNABLE_PROCESS_WEBHOOK_EVENT, SUCCESS_PROCESSING_WEBHOOK_EVENT, MONETIZATION_DOC_ERROR_DETAIL;
  var init_utils = __esm({
    "packages/runtime/dist/plugins/stripe-event-handlers/utils.js"() {
      "use strict";
      UNABLE_PROCESS_WEBHOOK_EVENT = "Unable to process webhook event.";
      SUCCESS_PROCESSING_WEBHOOK_EVENT = "Successfully processed webhook event";
      MONETIZATION_DOC_ERROR_DETAIL = "See https://zuplo.com/docs/articles/monetization-troubleshooting for more details.";
      __name(stripeStatusToMeteringStatus, "stripeStatusToMeteringStatus");
      __name(unixTimestampToISOString, "unixTimestampToISOString");
    }
  });

  // packages/runtime/dist/plugins/stripe-event-handlers/customer-subscription-created-handler.js
  async function onCustomerSubscriptionCreated(request, context, subscriptionEvent, options) {
    const stripeSubscriptionId = subscriptionEvent.data.object.id;
    if (!stripeSubscriptionId) {
      context.log.warn(`Invalid Stripe webhook event. Expected event '${subscriptionEvent.id}' to have '.data.object.id' be the subscription ID.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe webhook event. Expected '.data.object.id' to be the subscription ID."
      });
    }
    const planItem = subscriptionEvent.data.object.plan;
    if (!planItem || !planItem.product) {
      context.log.warn(`Invalid Stripe API result. Expected event '${subscriptionEvent.id}' to have a plan data.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe API result. Expected event to have a plan data."
      });
    }
    const stripeCustomerId = subscriptionEvent.data.object.customer;
    if (!stripeCustomerId) {
      context.log.warn(`Invalid Stripe webhook event. Expected '.data.object.customer' to be provided by event '${subscriptionEvent.id}'`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe webhook event. Expected '.data.object.customer' to be provided"
      });
    }
    if (subscriptionEvent.data.object.metadata && subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName && subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName !== Environment.instance.deploymentName) {
      context.log.warn(`Subscription event '${subscriptionEvent.id}' will not be handled since it was not issued for this Zuplo environment. It was intended for '${subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName}'.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: `This subscription event is not meant to be handled by this environment's Stripe monetization plugin. It was intended for '${subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName}'. This can happen because of a misconfiguration of Stripe or your Zuplo API.` + MONETIZATION_DOC_ERROR_DETAIL
      });
    }
    const stripeProductId = planItem.product;
    let customerKey;
    let managerEmail;
    let managerSub;
    if (subscriptionEvent.data.object.metadata && subscriptionEvent.data.object.metadata.zuplo_created_by_email && subscriptionEvent.data.object.metadata.zuplo_created_by_sub) {
      managerEmail = subscriptionEvent.data.object.metadata.zuplo_created_by_email;
      managerSub = subscriptionEvent.data.object.metadata.zuplo_created_by_sub;
      customerKey = await createConsumer({
        apiKeyBucketName: options.apiKeyBucketName,
        stripeProductId,
        stripeSubscriptionId,
        stripeCustomerId,
        managerEmail,
        managerSub,
        context
      });
    } else {
      const stripeCustomer = await api_default.getCustomer({
        logger: context.log,
        stripeSecretKey: options.stripeSecretKey,
        customerId: stripeCustomerId
      });
      if (!stripeCustomer.email) {
        context.log.warn(`Invalid Stripe API result. Expected customer '${stripeCustomerId}' to contain email address.`);
        return HttpProblems.badRequest(request, context, {
          title: UNABLE_PROCESS_WEBHOOK_EVENT,
          detail: "Invalid Stripe API result. Expected customer to contain email address."
        });
      }
      customerKey = await createConsumerInvite({
        apiKeyBucketName: options.apiKeyBucketName,
        stripeProductId,
        stripeSubscriptionId,
        stripeCustomerId,
        managerEmail: stripeCustomer.email,
        context
      });
    }
    if (!customerKey) {
      return HttpProblems.internalServerError(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: `No API Key Consumer was created, skipping creation of subscription.`
      });
    }
    try {
      const subscriptionStatus = stripeStatusToMeteringStatus(subscriptionEvent.data.object.status);
      let metadata;
      if (managerEmail && managerSub) {
        metadata = {
          subscriber: {
            sub: managerSub,
            email: managerEmail
          }
        };
      }
      await createSubscription({
        context,
        stripeProductId,
        stripeSubscriptionId,
        customerKey,
        meteringBucketId: options.meteringBucketId,
        meteringBucketRegion: options.meteringBucketRegion,
        customerExternalId: stripeCustomerId,
        subscriptionStatus,
        metadata
      });
    } catch (err) {
      await deleteConsumer({
        apiKeyBucketName: options.apiKeyBucketName,
        consumerId: customerKey,
        context
      });
      return HttpProblems.internalServerError(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: err.message
      });
    }
    return HttpProblems.ok(request, context, {
      title: SUCCESS_PROCESSING_WEBHOOK_EVENT
    });
  }
  var init_customer_subscription_created_handler = __esm({
    "packages/runtime/dist/plugins/stripe-event-handlers/customer-subscription-created-handler.js"() {
      "use strict";
      init_http_problems();
      init_environment2();
      init_api();
      init_apikey_mgmt_service_operations();
      init_metering_service_operations();
      init_utils();
      __name(onCustomerSubscriptionCreated, "onCustomerSubscriptionCreated");
    }
  });

  // packages/runtime/dist/plugins/stripe-event-handlers/customer-subscription-deleted-handler.js
  async function onCustomerSubscriptionDeleted(request, context, deleteEvent, options) {
    const stripeSubscriptionId = deleteEvent.data.object.id;
    if (!stripeSubscriptionId) {
      context.log.warn(`Invalid Stripe webhook event. Expected event '${deleteEvent.id}' to have '.data.object.id' be the subscription ID.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe webhook event. Expected '.data.object.id' to be the subscription ID."
      });
    }
    const stripeCustomerId = deleteEvent.data.object.customer;
    if (!stripeCustomerId) {
      context.log.warn(`Invalid Stripe webhook event. Expected '.data.object.customer' to be provided by event '${deleteEvent.id}'`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe webhook event. Expected '.data.object.customer' to be provided"
      });
    }
    if (deleteEvent.data.object.metadata && deleteEvent.data.object.metadata.zuplo_created_by_deploymentName && deleteEvent.data.object.metadata.zuplo_created_by_deploymentName !== Environment.instance.deploymentName) {
      context.log.warn(`Subscription event '${deleteEvent.id}' will not be handled since it was not issued for this Zuplo environment. It was intended for '${deleteEvent.data.object.metadata.zuplo_created_by_deploymentName}'.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: `This 'customer.subscription.deleted' event is not meant to be handled by this environment's Stripe monetization plugin. It was intended for '${deleteEvent.data.object.metadata.zuplo_created_by_deploymentName}'.This can happen because of a misconfiguration of Stripe or your Zuplo API.` + MONETIZATION_DOC_ERROR_DETAIL
      });
    }
    try {
      const currentSubscription = await getSubscription({
        context,
        stripeSubscriptionId,
        stripeCustomerId,
        meteringBucketId: options.meteringBucketId
      });
      await updateSubscription({
        context,
        meteringSubscriptionId: currentSubscription.id,
        meteringBucketId: options.meteringBucketId,
        requestBody: {
          status: "canceled",
          planExternalIds: currentSubscription.planExternalIds
        }
      });
    } catch (err) {
      return HttpProblems.internalServerError(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: `The event 'customer.subscription.deleted' could not be processed. ${err.message} This can happen because of a misconfiguration of Stripe or your Zuplo API. ` + MONETIZATION_DOC_ERROR_DETAIL
      });
    }
    return HttpProblems.ok(request, context, {
      title: SUCCESS_PROCESSING_WEBHOOK_EVENT
    });
  }
  var init_customer_subscription_deleted_handler = __esm({
    "packages/runtime/dist/plugins/stripe-event-handlers/customer-subscription-deleted-handler.js"() {
      "use strict";
      init_http_problems();
      init_environment2();
      init_metering_service_operations();
      init_utils();
      __name(onCustomerSubscriptionDeleted, "onCustomerSubscriptionDeleted");
    }
  });

  // packages/runtime/dist/plugins/stripe-event-handlers/customer-subscription-updated-handler.js
  async function onCustomerSubscriptionUpdated(request, context, subscriptionEvent, options) {
    const stripeSubscriptionId = subscriptionEvent.data.object.id;
    if (!stripeSubscriptionId) {
      context.log.warn(`Invalid Stripe webhook event. Expected event '${subscriptionEvent.id}' to include '.data.object.id' as the subscription ID.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe webhook event. Expected '.data.object.id' to be the subscription ID."
      });
    }
    const stripeCustomerId = subscriptionEvent.data.object.customer;
    if (!stripeCustomerId) {
      context.log.warn(`Invalid Stripe webhook event. Expected '.data.object.customer' to be provided by event '${subscriptionEvent.id}'`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: "Invalid Stripe webhook event. Expected '.data.object.customer' to be provided"
      });
    }
    if (subscriptionEvent.data.object.metadata && subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName && subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName !== Environment.instance.deploymentName) {
      context.log.warn(`Subscription event '${subscriptionEvent.id}' will not be handled since it was not issued for this Zuplo environment. It was intended for '${subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName}'.`);
      return HttpProblems.badRequest(request, context, {
        title: UNABLE_PROCESS_WEBHOOK_EVENT,
        detail: `This 'customer.subscription.updated' event is not meant to be handled by this environment's Stripe monetization plugin. It was intended for '${subscriptionEvent.data.object.metadata.zuplo_created_by_deploymentName}'.This can happen because of a misconfiguration of Stripe or your Zuplo API.` + MONETIZATION_DOC_ERROR_DETAIL
      });
    }
    if (subscriptionEvent.data.previous_attributes) {
      const previousAttributes = subscriptionEvent.data.previous_attributes;
      if (previousAttributes.status && previousAttributes.status !== subscriptionEvent.data.object.status) {
        try {
          context.log.debug(`Processing subscription status change from Stripe event '${subscriptionEvent.id}'.`);
          const currentSubscription = await getSubscription({
            context,
            stripeSubscriptionId,
            stripeCustomerId,
            meteringBucketId: options.meteringBucketId
          });
          const newStatus = stripeStatusToMeteringStatus(subscriptionEvent.data.object.status);
          await updateSubscription({
            context,
            meteringSubscriptionId: currentSubscription.id,
            meteringBucketId: options.meteringBucketId,
            requestBody: {
              status: newStatus,
              planExternalIds: currentSubscription.planExternalIds
            }
          });
        } catch (err) {
          return HttpProblems.internalServerError(request, context, {
            title: UNABLE_PROCESS_WEBHOOK_EVENT,
            detail: `The event 'customer.subscription.updated' could not be processed. ${err.message} This can happen because of a misconfiguration of Stripe or your Zuplo API. However, it also could be a temporary condition that happens when a subscription is created due to events being sent out of order. ` + MONETIZATION_DOC_ERROR_DETAIL
          });
        }
        return HttpProblems.ok(request, context, {
          title: SUCCESS_PROCESSING_WEBHOOK_EVENT
        });
      }
      if (previousAttributes.plan && previousAttributes.plan.product !== subscriptionEvent.data.object.plan.product) {
        try {
          context.log.debug(`Processing subscription plan change from Stripe event '${subscriptionEvent.id}'.`);
          const currentSubscription = await getSubscription({
            context,
            stripeSubscriptionId,
            stripeCustomerId,
            meteringBucketId: options.meteringBucketId
          });
          const newStripeProductId = subscriptionEvent.data.object.plan.product;
          const upcomingInvoice = await api_default.getUpcomingInvoice({
            customerId: stripeCustomerId,
            logger: context.log,
            stripeSecretKey: options.stripeSecretKey
          });
          const newPlanProratedData = upcomingInvoice.lines.data.filter((line) => {
            return line.proration && line.price.product === newStripeProductId;
          });
          let prorateResult = 0;
          if (newPlanProratedData.length === 0) {
            context.log.warn(`The plan change does not include proration details. Subscription event '${subscriptionEvent.id}'`);
          } else {
            prorateResult = parseFloat(newPlanProratedData[0].unit_amount_excluding_tax) / newPlanProratedData[0].price.unit_amount;
          }
          await updateSubscription({
            context,
            meteringSubscriptionId: currentSubscription.id,
            meteringBucketId: options.meteringBucketId,
            requestBody: {
              status: currentSubscription.status,
              planExternalIds: [newStripeProductId],
              prorate: prorateResult
            }
          });
        } catch (err) {
          return HttpProblems.internalServerError(request, context, {
            title: UNABLE_PROCESS_WEBHOOK_EVENT,
            detail: `The event 'customer.subscription.updated' could not be processed. ${err.message} This can happen because of a misconfiguration of Stripe or your Zuplo API. However, it also could be a temporary condition that happens when a subscription is created due to events being sent out of order. ` + MONETIZATION_DOC_ERROR_DETAIL
          });
        }
        return HttpProblems.ok(request, context, {
          title: SUCCESS_PROCESSING_WEBHOOK_EVENT
        });
      }
      if ((previousAttributes.cancel_at || previousAttributes.cancel_at === null) && previousAttributes.cancel_at !== subscriptionEvent.data.object.cancel_at && previousAttributes.cancel_at_period_end && previousAttributes.cancel_at_period_end !== subscriptionEvent.data.object.cancel_at_period_end && (previousAttributes.canceled_at || previousAttributes.canceled_at === null) && previousAttributes.canceled_at !== subscriptionEvent.data.object.canceled_at || previousAttributes.cancellation_details && (previousAttributes.cancellation_details.comment || previousAttributes.cancellation_details.comment === null || previousAttributes.cancellation_details.feedback || previousAttributes.cancellation_details.feedback === null || previousAttributes.cancellation_details.reason || previousAttributes.cancellation_details.reason === null)) {
        try {
          context.log.debug(`Processing subscription cancellation details from Stripe event '${subscriptionEvent.id}'.`);
          const currentSubscription = await getSubscription({
            context,
            stripeSubscriptionId,
            stripeCustomerId,
            meteringBucketId: options.meteringBucketId
          });
          const cancelationDetails = {
            cancellation: {
              cancel_at: subscriptionEvent.data.object.cancel_at ? unixTimestampToISOString(subscriptionEvent.data.object.cancel_at) : null,
              cancel_at_period_end: subscriptionEvent.data.object.cancel_at_period_end,
              canceled_at: subscriptionEvent.data.object.canceled_at ? unixTimestampToISOString(subscriptionEvent.data.object.canceled_at) : null,
              cancellation_details: subscriptionEvent.data.object.cancellation_details
            }
          };
          let subscriptionMetadataUpdate;
          if (currentSubscription.metadata) {
            subscriptionMetadataUpdate = {
              ...currentSubscription.metadata,
              ...cancelationDetails
            };
          } else {
            subscriptionMetadataUpdate = cancelationDetails;
          }
          await updateSubscription({
            context,
            meteringSubscriptionId: currentSubscription.id,
            meteringBucketId: options.meteringBucketId,
            requestBody: {
              status: currentSubscription.status,
              planExternalIds: currentSubscription.planExternalIds,
              metadata: subscriptionMetadataUpdate
            }
          });
        } catch (err) {
          return HttpProblems.internalServerError(request, context, {
            title: UNABLE_PROCESS_WEBHOOK_EVENT,
            detail: `The event 'customer.subscription.updated' could not be processed. ${err.message} This can happen because of a misconfiguration of Stripe or your Zuplo API. However, it also could be a temporary condition that happens when a subscription is created due to events being sent out of order. ` + MONETIZATION_DOC_ERROR_DETAIL
          });
        }
        return HttpProblems.ok(request, context, {
          title: SUCCESS_PROCESSING_WEBHOOK_EVENT
        });
      }
    }
    context.log.warn(`This update event '${subscriptionEvent.id}' is not supported by Stripe monetization plugin webhook.`);
    return HttpProblems.badRequest(request, context, {
      title: UNABLE_PROCESS_WEBHOOK_EVENT,
      detail: "This 'customer.subscription.updated' event could not be processed. The Stripe monetization plugin only supports update events for subscription plan changes or subscription status changes." + MONETIZATION_DOC_ERROR_DETAIL
    });
  }
  var init_customer_subscription_updated_handler = __esm({
    "packages/runtime/dist/plugins/stripe-event-handlers/customer-subscription-updated-handler.js"() {
      "use strict";
      init_http_problems();
      init_environment2();
      init_api();
      init_metering_service_operations();
      init_utils();
      __name(onCustomerSubscriptionUpdated, "onCustomerSubscriptionUpdated");
    }
  });

  // packages/runtime/dist/plugins/stripe-monetization-plugin.js
  function isMetricsRegion(val2) {
    return val2 !== null && typeof val2 === "string" && ["us-central1", "us-east1", "europe-west4"].includes(val2);
  }
  var StripeMonetizationPlugin;
  var init_stripe_monetization_plugin = __esm({
    "packages/runtime/dist/plugins/stripe-monetization-plugin.js"() {
      "use strict";
      init_environment3();
      init_errors();
      init_pipeline();
      init_policy();
      init_http_problems();
      init_metrics_processor();
      init_policy_processor();
      init_interfaces_custom();
      init_system_route_configuration();
      init_environment2();
      init_types3();
      init_validator();
      init_plugins();
      init_customer_subscription_created_handler();
      init_customer_subscription_deleted_handler();
      init_customer_subscription_updated_handler();
      init_utils();
      StripeMonetizationPlugin = class extends MeteringPlugin {
        static {
          __name(this, "StripeMonetizationPlugin");
        }
        options;
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @internal
         * @param router - The router to register the routes with
         * @param gateway - The gateway to register the routes with
         */
        registerRoutes(router, gateway) {
          const stripeWebhookHandler = /* @__PURE__ */ __name(async (request, context) => {
            if (this.options.__testMode === true) {
              context.log.warn(`Received Stripe webhook event of in test mode.`);
              return "success";
            }
            let { meteringBucketId, apiKeyBucketName } = this.options;
            if (!meteringBucketId) {
              if (environment.ZUPLO_METERING_SERVICE_BUCKET_ID) {
                meteringBucketId = environment.ZUPLO_METERING_SERVICE_BUCKET_ID;
              } else {
                throw new ConfigurationError(`StripeMonetizationPlugin - No 'meteringBucketId' property provided`);
              }
            }
            if (!apiKeyBucketName) {
              if (environment.ZUPLO_API_KEY_SERVICE_BUCKET_NAME) {
                apiKeyBucketName = environment.ZUPLO_API_KEY_SERVICE_BUCKET_NAME;
              } else {
                throw new ConfigurationError(`StripeMonetizationPlugin - No 'apiKeyBucketName' property provided`);
              }
            }
            if (!Environment.instance.build.ACCOUNT_NAME) {
              throw new SystemError("Build environment is not configured correctly. Expected 'ACCOUNT_NAME' to be set.");
            }
            const primaryDataRegion = this.options.primaryDataRegion ?? "us-central1";
            if (!isMetricsRegion(primaryDataRegion)) {
              throw new ConfigurationError(`StripeMonetizationPlugin - The value '${primaryDataRegion}' on the property 'primaryDataRegion' is invalid.`);
            }
            const event = await request.json();
            if (!isStripeWebhookEvent(event)) {
              return HttpProblems.badRequest(request, context, {
                title: UNABLE_PROCESS_WEBHOOK_EVENT,
                detail: "The event payload received was not in the expected format. This can happen because of a misconfiguration of Stripe or your Zuplo API. " + MONETIZATION_DOC_ERROR_DETAIL
              });
            }
            context.log.info(`Received Stripe webhook event of type '${event.type}' with ID '${event.id}'.`);
            switch (event.type) {
              case "customer.subscription.created":
                return await onCustomerSubscriptionCreated(request, context, event, {
                  meteringBucketId,
                  apiKeyBucketName,
                  meteringBucketRegion: primaryDataRegion,
                  stripeSecretKey: this.options.stripeSecretKey
                });
              case "customer.subscription.updated":
                return await onCustomerSubscriptionUpdated(request, context, event, {
                  meteringBucketId,
                  apiKeyBucketName,
                  meteringBucketRegion: primaryDataRegion,
                  stripeSecretKey: this.options.stripeSecretKey
                });
              case "customer.subscription.deleted":
                return await onCustomerSubscriptionDeleted(request, context, event, {
                  meteringBucketId
                });
              default:
                return HttpProblems.badRequest(request, context, {
                  title: UNABLE_PROCESS_WEBHOOK_EVENT,
                  detail: `Event '${event.type}' could not be processed because it is not supported by Stripe monetization plugin webhook. This can happen because of a misconfiguration of Stripe or your Zuplo API.` + MONETIZATION_DOC_ERROR_DETAIL
                });
            }
          }, "stripeWebhookHandler");
          const policyProcessor2 = createInternalPolicyProcessor({
            inboundPolicies: [
              new StripeWebhookVerificationInboundPolicy({
                signingSecret: this.options.webhooks.signingSecret,
                tolerance: this.options.webhooks.tolerance
              }, "stripe-webhook-verification")
            ]
          });
          optionValidator(this.options.webhooks, "StripeMonetizationPlugin", "plugin").required("signingSecret", "string").optional("tolerance", "number");
          const zPipe = new Pipeline({
            processors: [metricsProcessor, policyProcessor2],
            handler: stripeWebhookHandler,
            gateway
          });
          const stripeWebhookRouteConfig = new SystemRouteConfiguration({
            label: "PLUGIN_STRIPE_WEBHOOK_ROUTE",
            methods: ["POST"],
            path: this.options.webhooks.routePath ?? `/__plugins/stripe/webhooks`,
            systemRouteName: SystemRouteName.StripePlugin
          });
          router.addRoute(stripeWebhookRouteConfig, zPipe.execute);
        }
      };
      __name(isMetricsRegion, "isMetricsRegion");
    }
  });

  // packages/runtime/dist/policies/amberflo-metering-inbound/policy.js
  async function AmberfloMeteringInboundPolicy(request, context, options, policyName) {
    if (!options.statusCodes) {
      throw new ConfigurationError(`Invalid AmberfloMeterInboundPolicy '${policyName}': options.statusCodes must be an array of HTTP status code numbers`);
    }
    const statusCodes = statusCodesStringToNumberArray(options.statusCodes);
    context.addResponseSendingFinalHook(async (response) => {
      if (statusCodes.includes(response.status)) {
        const local = map.get(context);
        let tmpCustomerId = options.customerId;
        if (options.customerIdPropertyPath) {
          if (!request.user) {
            throw new RuntimeError(`Unable to apply customerIdPropertyPath '${options.customerIdPropertyPath}' as request.user is 'undefined'.`);
          }
          tmpCustomerId = getValueFromRequestUser(request.user, options.customerIdPropertyPath, "customerIdPropertyPath");
        }
        const customerId = local?.customerId ?? tmpCustomerId;
        if (!customerId) {
          context.log.error(`Error in AmberfloMeterInboundPolicy '${policyName}': customerId cannot be undefined`);
          return;
        }
        const meterApiName = local?.meterApiName ?? options.meterApiName;
        if (!meterApiName) {
          context.log.error(`Error in AmberfloMeterInboundPolicy '${policyName}': meterApiName cannot be undefined`);
          return;
        }
        const meterValue = local?.meterValue ?? options.meterValue;
        if (!meterValue) {
          context.log.error(`Error in AmberfloMeterInboundPolicy '${policyName}': meterValue cannot be undefined`);
          return;
        }
        const data = {
          customerId,
          meterApiName,
          meterValue,
          meterTimeInMillis: Date.now(),
          dimensions: Object.apply(
            options.dimensions ?? {},
            local?.dimensions
            // TypeScript being too fussy here
          )
        };
        let batcher3 = batcherMap[options.apiKey];
        if (!batcher3) {
          const apiKey = options.apiKey;
          const zmTestId = request.headers.get("zm-test-id") ?? "";
          batcher3 = new BatchDispatch(`amberflo-ingest-meter`, 10, async (entries) => {
            try {
              const url = options.url ?? "https://app.amberflo.io/ingest";
              const result = await internals_default.fetch(url, {
                method: "POST",
                body: JSON.stringify(entries),
                headers: {
                  "content-type": "application/json",
                  "x-api-key": apiKey,
                  "zm-test-id": zmTestId
                }
              });
              if (!result.ok) {
                context.log.error(`Unexpected response in AmberfloMeteringInboundPolicy '${policyName}'. ${result.status}: ${await result.text()}`);
              }
            } catch (err) {
              context.log.error(`Error in AmberfloMeteringInboundPolicy '${policyName}': ${err.message}`);
              throw err;
            }
          });
          batcherMap[apiKey] = batcher3;
        }
        batcher3.enqueue(data);
        context.waitUntil(batcher3.waitUntilFlushed());
      }
    });
    return request;
  }
  var map, batcherMap, AmberfloMeteringPolicy;
  var init_policy2 = __esm({
    "packages/runtime/dist/policies/amberflo-metering-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_batch_dispatch();
      init_options_parsing();
      map = /* @__PURE__ */ new WeakMap();
      batcherMap = {};
      AmberfloMeteringPolicy = class {
        static {
          __name(this, "AmberfloMeteringPolicy");
        }
        static setRequestProperties(context, properties) {
          map.set(context, properties);
        }
      };
      __name(AmberfloMeteringInboundPolicy, "AmberfloMeteringInboundPolicy");
    }
  });

  // packages/runtime/dist/utils/crypto.js
  async function sha256(value) {
    const enc = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest({ name: "SHA-256" }, enc);
    const hex = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
    return hex;
  }
  var init_crypto = __esm({
    "packages/runtime/dist/utils/crypto.js"() {
      "use strict";
      __name(sha256, "sha256");
    }
  });

  // packages/runtime/dist/caches/keys.js
  async function getPolicyCacheName(policyName, options) {
    let name;
    const cachedName = cacheMap.get(policyName);
    if (cachedName !== void 0) {
      name = cachedName;
    } else {
      const hash2 = await sha256(JSON.stringify({ policyName, options }));
      name = `zuplo-policy-${hash2}`;
      cacheMap.set(policyName, name);
    }
    return name;
  }
  var cacheMap;
  var init_keys = __esm({
    "packages/runtime/dist/caches/keys.js"() {
      "use strict";
      init_crypto();
      cacheMap = /* @__PURE__ */ new Map();
      __name(getPolicyCacheName, "getPolicyCacheName");
    }
  });

  // packages/runtime/dist/policies/api-key-inbound/policy.js
  function getKeyValue(rawAuthHeader, options) {
    if (options.authScheme === "") {
      return rawAuthHeader;
    }
    return rawAuthHeader.replace(`${options.authScheme} `, "");
  }
  async function ApiKeyInboundPolicy(request, context, unparsedOptions, policyName) {
    if (!unparsedOptions.bucketName) {
      if (environment.ZUPLO_API_KEY_SERVICE_BUCKET_NAME) {
        unparsedOptions.bucketName = environment.ZUPLO_API_KEY_SERVICE_BUCKET_NAME;
      } else {
        throw new ConfigurationError(`ApiKeyInboundPolicy '${policyName}' - no bucketName property provided`);
      }
    }
    const options = {
      authHeader: unparsedOptions.authHeader ?? "authorization",
      authScheme: unparsedOptions.authScheme ?? "Bearer",
      bucketName: unparsedOptions.bucketName,
      cacheTtlSeconds: unparsedOptions.cacheTtlSeconds ?? 60,
      allowUnauthenticatedRequests: unparsedOptions.allowUnauthenticatedRequests ?? false,
      disableAutomaticallyAddingKeyHeaderToOpenApi: unparsedOptions.disableAutomaticallyAddingKeyHeaderToOpenApi ?? false
    };
    if (options.cacheTtlSeconds < 60) {
      throw new ConfigurationError(`ApiKeyInboundPolicy '${policyName}' - minimum cacheTtlSeconds value is 60s, '${options.cacheTtlSeconds}' is invalid`);
    }
    const unauthorizedResponse = /* @__PURE__ */ __name((detail) => {
      if (options.allowUnauthenticatedRequests) {
        return request;
      }
      return HttpProblems.unauthorized(request, context, { detail });
    }, "unauthorizedResponse");
    const rawAuthHeader = request.headers.get(options.authHeader);
    if (!rawAuthHeader) {
      return unauthorizedResponse(`No Authorization Header`);
    }
    if (!rawAuthHeader.toLowerCase().startsWith(options.authScheme.toLowerCase())) {
      return unauthorizedResponse(`Invalid Authorization Scheme`);
    }
    const keyValue = getKeyValue(rawAuthHeader, options);
    if (!keyValue || keyValue === "") {
      return unauthorizedResponse(`No key present`);
    }
    const hashedKey = await hashValue(keyValue);
    const cacheName = await getPolicyCacheName(policyName, options);
    const cache = new MemoryZoneReadThroughCache(cacheName, context);
    const cachedMetadata = await cache.get(hashedKey);
    if (cachedMetadata && cachedMetadata.isValid === true) {
      request.user = cachedMetadata.user;
      return request;
    }
    if (cachedMetadata && !cachedMetadata.isValid) {
      if (cachedMetadata.typeId !== KEY_TYPE_ID) {
        SystemLogMap.getLogger(context).error(`ApiKeyInboundPolicy '${policyName}' - cached metadata has invalid typeId '${cachedMetadata.typeId}'`, cachedMetadata);
      }
      return unauthorizedResponse(`Authorization Failed`);
    }
    const payload = {
      key: keyValue
    };
    const response = await fetchRetry({
      retryDelayMs: 5,
      retries: 2,
      logger: SystemLogMap.getLogger(context)
    }, `${Environment.instance.apiKeyServiceUrl}/v1/$validate/${options.bucketName}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "zp-rid": context.requestId,
        "zp-dn": Environment.instance.deploymentName ?? "unknown",
        "User-Agent": Environment.instance.systemUserAgent
      },
      body: JSON.stringify(payload)
    });
    if (response.status === 401) {
      context.log.info(`ApiKeyInboundPolicy '${policyName}' - 401 response from Key Service`);
      return unauthorizedResponse(`Authorization Failed`);
    }
    if (response.status !== 200) {
      try {
        const errorBody = await response.text();
        const errorData = JSON.parse(errorBody);
        context.log.error("Unexpected response from key service", errorData);
      } catch (err) {
        context.log.error("Invalid response from key service");
      }
      throw new RuntimeError(`ApiKeyInboundPolicy '${policyName}' - unexpected response from Key Service. Status: ${response.status}`);
    }
    const data = await response.json();
    const keyMetadata = {
      isValid: true,
      typeId: KEY_TYPE_ID,
      user: {
        sub: data.name,
        data: data.metadata
      }
    };
    request.user = keyMetadata.user;
    cache.put(hashedKey, keyMetadata, options.cacheTtlSeconds);
    return request;
  }
  async function hashValue(value) {
    const msgUint8 = new TextEncoder().encode(value);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }
  var KEY_TYPE_ID;
  var init_policy3 = __esm({
    "packages/runtime/dist/policies/api-key-inbound/policy.js"() {
      "use strict";
      init_keys();
      init_memory_zone_readthrough_cache();
      init_environment3();
      init_errors();
      init_index_worker();
      init_system_log_map();
      init_environment2();
      init_retry();
      KEY_TYPE_ID = "key-metadata-cache-type";
      __name(getKeyValue, "getKeyValue");
      __name(ApiKeyInboundPolicy, "ApiKeyInboundPolicy");
      __name(hashValue, "hashValue");
    }
  });

  // packages/runtime/dist/policies/api-key-auth-inbound/policy.js
  var ApiAuthKeyInboundPolicy;
  var init_policy4 = __esm({
    "packages/runtime/dist/policies/api-key-auth-inbound/policy.js"() {
      "use strict";
      init_policy3();
      ApiAuthKeyInboundPolicy = ApiKeyInboundPolicy;
    }
  });

  // packages/runtime/dist/policies/open-id-jwt-auth-inbound/jwks.js
  function createRemoteJWKSet2(url, cache, options) {
    const set = new RemoteJWKSet2(url, cache, options);
    return async (protectedHeader, token) => set.getKey(protectedHeader, token);
  }
  var RemoteJWKSet2, JWKSError, JWKSNoMatchingKey2, JWKSTimeout2;
  var init_jwks = __esm({
    "packages/runtime/dist/policies/open-id-jwt-auth-inbound/jwks.js"() {
      "use strict";
      init_browser2();
      init_errors();
      init_internals();
      init_environment2();
      RemoteJWKSet2 = class {
        static {
          __name(this, "RemoteJWKSet");
        }
        cache;
        url;
        timeoutDuration;
        cooldownDuration;
        cacheMaxAge;
        jwksTimestamp;
        pendingFetch;
        options;
        local;
        constructor(url, cache, options) {
          this.cache = cache;
          if (!(url instanceof URL)) {
            throw new TypeError("url must be an instance of URL");
          }
          this.url = new URL(url.href);
          this.options = { agent: options?.agent, headers: options?.headers };
          this.timeoutDuration = typeof options?.timeoutDuration === "number" ? options?.timeoutDuration : 5e3;
          this.cooldownDuration = typeof options?.cooldownDuration === "number" ? options?.cooldownDuration : 3e4;
          this.cacheMaxAge = typeof options?.cacheMaxAge === "number" ? options?.cacheMaxAge : 6e5;
        }
        coolingDown() {
          return typeof this.jwksTimestamp === "number" ? Date.now() < this.jwksTimestamp + this.cooldownDuration : false;
        }
        fresh() {
          return typeof this.jwksTimestamp === "number" ? Date.now() < this.jwksTimestamp + this.cacheMaxAge : false;
        }
        async getKey(protectedHeader, token) {
          if (!this.local || !this.fresh()) {
            await this.reload();
          }
          try {
            return await this.local(protectedHeader, token);
          } catch (err) {
            if (err instanceof JWKSNoMatchingKey2) {
              if (this.coolingDown() === false) {
                await this.reload();
                return this.local(protectedHeader, token);
              }
            }
            throw err;
          }
        }
        async reload() {
          if (this.pendingFetch) {
            this.pendingFetch = void 0;
          }
          const headers = new Headers(this.options.headers);
          if (!headers.has("User-Agent")) {
            headers.set("User-Agent", Environment.instance.systemUserAgent);
            this.options.headers = Object.fromEntries(headers.entries());
          }
          this.pendingFetch ||= this.fetchJwks(this.url, this.timeoutDuration, this.options).then((json) => {
            this.local = createLocalJWKSet(json);
            this.jwksTimestamp = Date.now();
            this.pendingFetch = void 0;
          }).catch((err) => {
            this.pendingFetch = void 0;
            throw err;
          });
          await this.pendingFetch;
        }
        async fetchJwks(url, timeout, options) {
          const cachedJwks = await this.cache.get(this.url.href);
          if (cachedJwks) {
            return cachedJwks;
          }
          let controller;
          let id;
          let timedOut = false;
          if (typeof AbortController === "function") {
            controller = new AbortController();
            id = setTimeout(() => {
              timedOut = true;
              controller.abort();
            }, timeout);
          }
          const response = await internals_default.fetch(url.href, {
            signal: controller ? controller.signal : void 0,
            redirect: "manual",
            headers: options.headers
          }).catch((err) => {
            if (timedOut)
              throw new JWKSTimeout2("JWKS fetch timed out");
            throw err;
          });
          if (id !== void 0)
            clearTimeout(id);
          if (response.status !== 200) {
            throw new JWKSError("Expected 200 OK from the JSON Web Key Set HTTP response");
          }
          try {
            const result = await response.json();
            this.cache.put(this.url.href, result, this.cacheMaxAge);
            return result;
          } catch {
            throw new JWKSError("Failed to parse the JSON Web Key Set HTTP response as JSON");
          }
        }
      };
      __name(createRemoteJWKSet2, "createRemoteJWKSet");
      JWKSError = class extends RuntimeError {
        static {
          __name(this, "JWKSError");
        }
      };
      JWKSNoMatchingKey2 = class extends JWKSError {
        static {
          __name(this, "JWKSNoMatchingKey");
        }
      };
      JWKSTimeout2 = class extends JWKSError {
        static {
          __name(this, "JWKSTimeout");
        }
      };
    }
  });

  // packages/runtime/dist/policies/open-id-jwt-auth-inbound/policy.js
  var JwksDictionary, createJwkVerifier, secretVerifier, OpenIdJwtInboundPolicy;
  var init_policy5 = __esm({
    "packages/runtime/dist/policies/open-id-jwt-auth-inbound/policy.js"() {
      "use strict";
      init_browser2();
      init_keys();
      init_memory_zone_readthrough_cache();
      init_errors();
      init_http_problems();
      init_jwks();
      JwksDictionary = {};
      createJwkVerifier = /* @__PURE__ */ __name((policyName, context) => async (jwt, options) => {
        if (!options.jwkUrl || typeof options.jwkUrl !== "string") {
          throw new ConfigurationError(`Invalid State - jwkUrl not set`);
        }
        if (!JwksDictionary[options.jwkUrl]) {
          let useExperimentalInMemoryCache = false;
          if ("useExperimentalInMemoryCache" in options && typeof options.useExperimentalInMemoryCache === "boolean") {
            useExperimentalInMemoryCache = options.useExperimentalInMemoryCache;
          }
          if (useExperimentalInMemoryCache) {
            const cacheName = await getPolicyCacheName(policyName, options);
            const cache = new MemoryZoneReadThroughCache(cacheName, context);
            JwksDictionary[options.jwkUrl] = createRemoteJWKSet2(new URL(options.jwkUrl), cache, options.headers ? { headers: options.headers } : void 0);
          } else {
            JwksDictionary[options.jwkUrl] = createRemoteJWKSet(new URL(options.jwkUrl), options.headers ? { headers: options.headers } : void 0);
          }
        }
        const { payload } = await jwtVerify(jwt, JwksDictionary[options.jwkUrl], {
          issuer: options.issuer,
          audience: options.audience
        });
        return payload;
      }, "createJwkVerifier");
      secretVerifier = /* @__PURE__ */ __name(async (jwt, options) => {
        let key;
        if (options.secret === void 0) {
          throw new Error("secretVerifier requires secret to be defined");
        } else if (typeof options.secret === "string") {
          const encoder3 = new TextEncoder();
          const encoded = encoder3.encode(options.secret);
          key = new Uint8Array(encoded);
        } else {
          key = options.secret;
        }
        const { payload } = await jwtVerify(jwt, key, {
          issuer: options.issuer,
          audience: options.audience
        });
        return payload;
      }, "secretVerifier");
      OpenIdJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const authHeader = request.headers.get("Authorization");
        const bearerPrefix = "bearer ";
        const unauthorizedResponse = /* @__PURE__ */ __name((detail) => {
          return HttpProblems.unauthorized(request, context, { detail });
        }, "unauthorizedResponse");
        if (!options.jwkUrl && !options.secret) {
          throw new ConfigurationError(`OpenIdJwtInboundPolicy policy '${policyName}': One of 'jwkUrl' or 'secret' options are required.`);
        }
        if (options.jwkUrl && options.secret) {
          throw new ConfigurationError(`OpenIdJwtInboundPolicy policy '${policyName}': Only one of 'jwkUrl' and 'secret' options should be provided.`);
        }
        const verifier = options.jwkUrl ? createJwkVerifier(policyName, context) : secretVerifier;
        const getJwtOrRejectedResponse = /* @__PURE__ */ __name(async () => {
          if (!authHeader) {
            return unauthorizedResponse(`No authorization header`);
          }
          if (authHeader.toLowerCase().indexOf(bearerPrefix) !== 0) {
            return unauthorizedResponse(`Invalid bearer token format for authorization header`);
          }
          const jwt = authHeader.substring(bearerPrefix.length);
          if (!jwt || jwt.length === 0) {
            return unauthorizedResponse(`No bearer token on authorization header`);
          }
          try {
            return await verifier(jwt, options);
          } catch (err) {
            const url = new URL(request.url);
            if ("code" in err && err.code === "ERR_JWT_EXPIRED") {
              context.log.warn(`Expired token used on url: ${url.pathname} `, err);
            } else {
              context.log.warn(`Invalid token on: ${request.method} ${url.pathname}`, err);
            }
            return unauthorizedResponse(`Invalid token`);
          }
        }, "getJwtOrRejectedResponse");
        const result = await getJwtOrRejectedResponse();
        if (result instanceof Response) {
          return options.allowUnauthenticatedRequests === true ? request : result;
        }
        const subProp = options.subPropertyName ?? "sub";
        const sub = result[subProp];
        if (!sub) {
          return unauthorizedResponse(`Token is not valid, no '${subProp}' property found.`);
        }
        request.user = {
          sub,
          data: result
        };
        return request;
      }, "OpenIdJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/auth0-jwt-auth-inbound/policy.js
  var Auth0JwtInboundPolicy;
  var init_policy6 = __esm({
    "packages/runtime/dist/policies/auth0-jwt-auth-inbound/policy.js"() {
      "use strict";
      init_policy5();
      Auth0JwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => OpenIdJwtInboundPolicy(request, context, {
        issuer: `https://${options.auth0Domain}/`,
        audience: options.audience,
        jwkUrl: `https://${options.auth0Domain}/.well-known/jwks.json`,
        allowUnauthenticatedRequests: options.allowUnauthenticatedRequests
      }, policyName), "Auth0JwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/basic-auth-inbound/policy.js
  var BasicAuthInboundPolicy;
  var init_policy7 = __esm({
    "packages/runtime/dist/policies/basic-auth-inbound/policy.js"() {
      "use strict";
      init_http_problems();
      BasicAuthInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        const authHeader = request.headers.get("Authorization");
        const basicPrefix = "basic ";
        const unauthorizedResponse = /* @__PURE__ */ __name((detail) => {
          return HttpProblems.unauthorized(request, context, { detail });
        }, "unauthorizedResponse");
        const getAccountOrRejectedResponse = /* @__PURE__ */ __name(async () => {
          if (!authHeader) {
            return await unauthorizedResponse(`No Authorization header`);
          }
          if (authHeader.toLowerCase().indexOf(basicPrefix) !== 0) {
            return await unauthorizedResponse(`Invalid Basic token format for Authorization header`);
          }
          const encodedToken = authHeader.substring(basicPrefix.length);
          if (!encodedToken || encodedToken.length === 0) {
            return await unauthorizedResponse(`No username:password provided`);
          }
          const decoded = atob(encodedToken).normalize();
          const colonIndex = decoded.indexOf(":");
          if (colonIndex === -1 || /[\0-\x1F\x7F]/.test(decoded)) {
            return await unauthorizedResponse(`Invalid basic token value - see https://tools.ietf.org/html/rfc5234#appendix-B.1`);
          }
          const username = decoded.substring(0, colonIndex);
          const password = decoded.substring(colonIndex + 1);
          const matchingAccount = options.accounts.find((acct) => acct.username === username && acct.password === password);
          if (!matchingAccount) {
            return await unauthorizedResponse("Invalid username or password");
          }
          return matchingAccount;
        }, "getAccountOrRejectedResponse");
        const result = await getAccountOrRejectedResponse();
        if (result instanceof Response) {
          return options.allowUnauthenticatedRequests ? request : result;
        }
        const sub = result.username;
        request.user = {
          sub,
          data: result.data
        };
        return request;
      }, "BasicAuthInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/caching-inbound/policy.js
  async function digestMessage(data) {
    const msgUint8 = new TextEncoder().encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }
  async function CachingInboundPolicy(request, context, options, policyName) {
    const cacheName = await getPolicyCacheName(policyName, options);
    const cache = await caches.open(cacheName);
    const cacheHttpMethods = options?.cacheHttpMethods?.map((method) => method.toUpperCase()) ?? ["GET"];
    const cacheKeyRequest = await createCacheKeyRequest(request, options);
    const cachedResponse = await cache.match(cacheKeyRequest);
    if (cachedResponse) {
      return cachedResponse;
    }
    context.addEventListener("responseSent", (event) => {
      try {
        const statusCodes = options.statusCodes ?? [
          200,
          206,
          301,
          302,
          303,
          404,
          410
        ];
        const response = event.response.clone();
        if (!statusCodes.includes(response.status) || !cacheHttpMethods.includes(request.method.toUpperCase())) {
          return;
        }
        const ttlSeconds = options?.expirationSecondsTtl ?? 60;
        const cacheReadyResponse = new Response(response.body, response);
        CACHE_HEADERS_TO_REMOVE.forEach((key) => cacheReadyResponse.headers.delete(key));
        cacheReadyResponse.headers.set("cache-control", `s-maxage=${ttlSeconds}`);
        context.waitUntil(cache.put(cacheKeyRequest, cacheReadyResponse));
      } catch (err) {
        context.log.error(`Error in caching-inbound-policy '${policyName}': "${err.message}"`, err);
      }
    });
    return request;
  }
  var CACHE_HEADERS_TO_REMOVE, createCacheKeyRequest;
  var init_policy8 = __esm({
    "packages/runtime/dist/policies/caching-inbound/policy.js"() {
      "use strict";
      init_keys();
      CACHE_HEADERS_TO_REMOVE = [
        "cdn-cache-control",
        "cloudflare-cdn-cache-control",
        "surrogate-control",
        "cache-tag",
        "expires"
      ];
      __name(digestMessage, "digestMessage");
      createCacheKeyRequest = /* @__PURE__ */ __name(async (request, options) => {
        const headersToInclude = [
          ...options.dangerouslyIgnoreAuthorizationHeader === true ? [] : ["authorization"],
          ...options.headers ?? []
          // undefined is not iterable
        ];
        const matchingHeaders = [];
        for (const [key, value] of request.headers.entries()) {
          if (headersToInclude.includes(key)) {
            matchingHeaders.push({ key: key.toLowerCase(), value });
          }
        }
        matchingHeaders.sort((a, b) => a.key.localeCompare(b.key));
        const serialized = await digestMessage(JSON.stringify(matchingHeaders));
        const incomingUrl = new URL(request.url);
        const newSearchParams = new URLSearchParams(incomingUrl.searchParams);
        newSearchParams.set("_z-hdr-dgst", serialized);
        const rewriteMethod = (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options.cacheHttpMethods?.includes(request.method.toUpperCase()) && request.method.toUpperCase() !== "GET"
        );
        if (rewriteMethod) {
          newSearchParams.set("_z-original-method", request.method);
        }
        const newUrl = `${incomingUrl.origin}${incomingUrl.pathname}?${newSearchParams}`;
        const cacheKeyRequest = new Request(newUrl, {
          method: rewriteMethod ? "GET" : request.method
        });
        return cacheKeyRequest;
      }, "createCacheKeyRequest");
      __name(CachingInboundPolicy, "CachingInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/change-method-inbound/policy.js
  var ChangeMethodInboundPolicy;
  var init_policy9 = __esm({
    "packages/runtime/dist/policies/change-method-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_request();
      ChangeMethodInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        if (!options.method) {
          throw new ConfigurationError(`ChangeMethodInboundPolicy '${policyName}' options.method must be valid HttpMethod`);
        }
        const newRequest = new ZuploRequest(request, {
          method: options.method
        });
        return newRequest;
      }, "ChangeMethodInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/clear-headers-inbound/policy.js
  var ClearHeadersInboundPolicy;
  var init_policy10 = __esm({
    "packages/runtime/dist/policies/clear-headers-inbound/policy.js"() {
      "use strict";
      init_request();
      ClearHeadersInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        const exclude = [...options.exclude ?? []];
        const headers = new Headers();
        exclude.forEach((ex) => {
          const val2 = request.headers.get(ex);
          if (val2) {
            headers.set(ex, val2);
          }
        });
        const newRequest = new ZuploRequest(request, {
          headers
        });
        return newRequest;
      }, "ClearHeadersInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/clear-headers-outbound/policy.js
  var ClearHeadersOutboundPolicy;
  var init_policy11 = __esm({
    "packages/runtime/dist/policies/clear-headers-outbound/policy.js"() {
      "use strict";
      ClearHeadersOutboundPolicy = /* @__PURE__ */ __name(async (response, request, context, options) => {
        const exclude = [...options.exclude ?? []];
        const headers = new Headers();
        exclude.forEach((key) => {
          const val2 = response.headers.get(key);
          if (val2) {
            headers.set(key, val2);
          }
        });
        const newResponse = new Response(response.body, {
          headers,
          status: response.status,
          statusText: response.statusText
        });
        return newResponse;
      }, "ClearHeadersOutboundPolicy");
    }
  });

  // packages/runtime/dist/policies/clerk-jwt-auth-inbound/policy.js
  var ClerkJwtInboundPolicy;
  var init_policy12 = __esm({
    "packages/runtime/dist/policies/clerk-jwt-auth-inbound/policy.js"() {
      "use strict";
      init_policy5();
      ClerkJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const issuerUrl = new URL(options.frontendApiUrl.startsWith("https://") || options.frontendApiUrl.startsWith("http://") ? options.frontendApiUrl : `https://${options.frontendApiUrl}`);
        const jwkUrl = new URL(issuerUrl);
        jwkUrl.pathname = `/.well-known/jwks.json`;
        return OpenIdJwtInboundPolicy(request, context, {
          issuer: issuerUrl.href.slice(0, -1),
          jwkUrl: jwkUrl.toString(),
          allowUnauthenticatedRequests: options.allowUnauthenticatedRequests
        }, policyName);
      }, "ClerkJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/cognito-jwt-auth-inbound/policy.js
  var CognitoJwtInboundPolicy;
  var init_policy13 = __esm({
    "packages/runtime/dist/policies/cognito-jwt-auth-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_policy5();
      CognitoJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        if (!options.userPoolId) {
          throw new ConfigurationError("userPoolId must be set in the options for CognitoJwtInboundPolicy");
        }
        if (!options.region) {
          throw new ConfigurationError("region must be set in the options for CognitoJwtInboundPolicy");
        }
        return OpenIdJwtInboundPolicy(request, context, {
          issuer: `https://cognito-idp.${options.region}.amazonaws.com/${options.userPoolId}`,
          jwkUrl: `https://cognito-idp.${options.region}.amazonaws.com/${options.userPoolId}/.well-known/jwks.json`,
          allowUnauthenticatedRequests: options.allowUnauthenticatedRequests
        }, policyName);
      }, "CognitoJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/composite-inbound/policy.js
  var CompositeInboundPolicy;
  var init_policy14 = __esm({
    "packages/runtime/dist/policies/composite-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_gateway();
      init_policy_processor();
      CompositeInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        if (!options.policies || options.policies.length === 0) {
          throw new ConfigurationError(`CompositeInboundPolicy '${policyName}' must have valid policies defined`);
        }
        const gateway = Gateway.instance;
        const handlersAndOptions = getInboundPolicyInstances(options.policies, gateway?.routeData.policies);
        const stackedPolicies = toStackedInboundHandler(handlersAndOptions);
        return stackedPolicies(request, context);
      }, "CompositeInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/curity-phantom-token-inbound/policy.js
  function getToken(authHeader) {
    if (authHeader.split(" ")[0] === "Bearer") {
      return authHeader.split(" ")[1];
    }
    return null;
  }
  var CurityPhantomTokenInboundPolicy;
  var init_policy15 = __esm({
    "packages/runtime/dist/policies/curity-phantom-token-inbound/policy.js"() {
      "use strict";
      init_keys();
      init_memory_zone_readthrough_cache();
      init_internals();
      init_http_problems();
      CurityPhantomTokenInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const authHeader = request.headers.get("Authorization");
        if (!authHeader) {
          return HttpProblems.unauthorized(request, context, {
            detail: "No authorization header"
          });
        }
        const token = getToken(authHeader);
        if (!token) {
          return HttpProblems.unauthorized(request, context, {
            detail: `Failed to parse token from Authorization header`
          });
        }
        const cacheName = await getPolicyCacheName(policyName, options);
        const cache = new MemoryZoneReadThroughCache(cacheName, context);
        let jwt = await cache.get(token);
        if (!jwt) {
          const response = await internals_default.fetch(options.introspectionUrl, {
            headers: {
              Authorization: "Basic " + btoa(`${options.clientId}:${options.clientSecret}`),
              Accept: "application/jwt",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            body: "token=" + token + "&token_type_hint=access_token"
          });
          const text = await response.text();
          if (response.status === 200) {
            jwt = text;
            cache.put(token, jwt, options.cacheDurationSeconds ?? 600);
          } else if (response.status >= 500) {
            context.log.error(`Error introspecting token - ${response.status}: '${text}'`);
            return HttpProblems.internalServerError(request, context, {
              detail: "Problem encountered authorizing the HTTP request"
            });
          } else {
            return HttpProblems.unauthorized(request, context);
          }
        }
        request.headers.set("Authorization", `Bearer ${jwt}`);
        return request;
      }, "CurityPhantomTokenInboundPolicy");
      __name(getToken, "getToken");
    }
  });

  // packages/runtime/dist/policies/firebase-jwt-inbound/policy.js
  var FirebaseJwtInboundPolicy;
  var init_policy16 = __esm({
    "packages/runtime/dist/policies/firebase-jwt-inbound/policy.js"() {
      "use strict";
      init_validator();
      init_policy5();
      FirebaseJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("projectId", "string").optional("allowUnauthenticatedRequests", "boolean");
        return OpenIdJwtInboundPolicy(request, context, {
          issuer: `https://securetoken.google.com/${options.projectId}`,
          audience: options.projectId,
          jwkUrl: `https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com`,
          allowUnauthenticatedRequests: options.allowUnauthenticatedRequests
        }, policyName);
      }, "FirebaseJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/formdata-to-json-inbound/policy.js
  var FormDataToJsonInboundPolicy;
  var init_policy17 = __esm({
    "packages/runtime/dist/policies/formdata-to-json-inbound/policy.js"() {
      "use strict";
      init_request();
      FormDataToJsonInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        const FORM_URL_ENCODED = "application/x-www-form-urlencoded";
        const FORM_MULTIPART = "multipart/form-data";
        const contentType = request.headers.get("content-type")?.toLowerCase();
        if (!contentType || ![FORM_MULTIPART, FORM_URL_ENCODED].includes(contentType)) {
          if (options && options.badRequestIfNotFormData) {
            return new Response(`Bad Request - expected content-type '${FORM_URL_ENCODED}' or ${FORM_MULTIPART}`, { status: 400, statusText: "Bad Request" });
          }
          return request;
        }
        const formData = await request.formData();
        if (options && options.optionalHoneypotName) {
          if (formData.get(options.optionalHoneypotName) !== "") {
            return new Response("Bad Request", {
              status: 400,
              statusText: "Bad Request"
            });
          }
        }
        const body = {};
        for (const [key, value] of formData) {
          body[key] = value.toString();
        }
        const headers = new Headers(request.headers);
        headers.set("content-type", "application/json");
        headers.delete("content-length");
        const newRequest = new ZuploRequest(request, {
          body: JSON.stringify(body),
          headers
        });
        return newRequest;
      }, "FormDataToJsonInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/geo-filter-inbound/policy.js
  function blockedResponse(request, context, policyName, country, regionCode, asn) {
    context.log.debug(`Request blocked by GeoFilterInboundPolicy '${policyName}' (country: '${country}', regionCode: '${regionCode}', asn: '${asn}')`);
    return HttpProblems.forbidden(request, context, {
      geographicContext: {
        country,
        regionCode,
        asn
      }
    });
  }
  function toLowerStringArray(input, propertyName, policyName) {
    if (typeof input === "string") {
      return input.split(",").map((s) => s.trim().toLowerCase());
    }
    if (typeof input === "undefined") {
      return [];
    }
    if (Array.isArray(input)) {
      return input.map((s) => s.trim().toLowerCase());
    }
    throw new ConfigurationError(`Invalid '${propertyName}' for GeoFilterInboundPolicy '${policyName}': '${input}', must be a string or string[]`);
  }
  var UNKNOWN, GeoFilterInboundPolicy;
  var init_policy18 = __esm({
    "packages/runtime/dist/policies/geo-filter-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_http_problems();
      UNKNOWN = "__unknown__";
      GeoFilterInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const parsedOptions = {
          allow: {
            countries: toLowerStringArray(options.allow?.countries, "allow.countries", policyName),
            regionCodes: toLowerStringArray(options.allow?.regionCodes, "allow.regionCode", policyName),
            asns: toLowerStringArray(options.allow?.asns, "allow.asOrganization", policyName)
          },
          block: {
            countries: toLowerStringArray(options.block?.countries, "block.countries", policyName),
            regionCodes: toLowerStringArray(options.block?.regionCodes, "block.regionCode", policyName),
            asns: toLowerStringArray(options.block?.asns, "block.asOrganization", policyName)
          },
          // default to true for ignoreUnknown
          ignoreUnknown: options.ignoreUnknown === false ? false : true
        };
        const lowerCountry = context.incomingRequestProperties.country?.toLowerCase() ?? UNKNOWN;
        const lowerRegionCode = context.incomingRequestProperties.regionCode?.toLowerCase() ?? UNKNOWN;
        const lowerAsn = context.incomingRequestProperties.asn?.toString() ?? UNKNOWN;
        const ignoreUnknownCountry = parsedOptions.ignoreUnknown && lowerCountry === UNKNOWN;
        const ignoreUnknownCity = parsedOptions.ignoreUnknown && lowerRegionCode === UNKNOWN;
        const ignoreUnknownAsOrganization = parsedOptions.ignoreUnknown && lowerAsn === UNKNOWN;
        const allowCountries = parsedOptions.allow.countries;
        const allowRegionCodes = parsedOptions.allow.regionCodes;
        const allowAsns = parsedOptions.allow.asns;
        if (allowCountries.length > 0 && !allowCountries.includes(lowerCountry) && !ignoreUnknownCountry) {
          return blockedResponse(request, context, policyName, lowerCountry, lowerRegionCode, lowerAsn);
        }
        if (allowRegionCodes.length > 0 && !allowRegionCodes.includes(lowerRegionCode) && !ignoreUnknownCity) {
          return blockedResponse(request, context, policyName, lowerCountry, lowerRegionCode, lowerAsn);
        }
        if (allowAsns.length > 0 && !allowAsns.includes(lowerAsn) && !ignoreUnknownAsOrganization) {
          return blockedResponse(request, context, policyName, lowerCountry, lowerRegionCode, lowerAsn);
        }
        const blockCountries = parsedOptions.block.countries;
        const blockRegionCode = parsedOptions.block.regionCodes;
        const blockAsn = parsedOptions.block.asns;
        if (blockCountries.length > 0 && blockCountries.includes(lowerCountry) && !ignoreUnknownCountry) {
          return blockedResponse(request, context, policyName, lowerCountry, lowerRegionCode, lowerAsn);
        }
        if (blockRegionCode.length > 0 && blockRegionCode.includes(lowerRegionCode) && !ignoreUnknownCity) {
          return blockedResponse(request, context, policyName, lowerCountry, lowerRegionCode, lowerAsn);
        }
        if (blockAsn.length > 0 && blockAsn.includes(lowerAsn) && !ignoreUnknownAsOrganization) {
          return blockedResponse(request, context, policyName, lowerCountry, lowerRegionCode, lowerAsn);
        }
        return request;
      }, "GeoFilterInboundPolicy");
      __name(blockedResponse, "blockedResponse");
      __name(toLowerStringArray, "toLowerStringArray");
    }
  });

  // packages/runtime/dist/policies/jwt-scopes-inbound/policy.js
  var JWTScopeValidationInboundPolicy;
  var init_policy19 = __esm({
    "packages/runtime/dist/policies/jwt-scopes-inbound/policy.js"() {
      "use strict";
      JWTScopeValidationInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        const tokenScopes = request.user?.data["scope"].split(" ") || [];
        const scopeChecker = /* @__PURE__ */ __name((tokenScopes2, routeScopes) => routeScopes.every((v) => tokenScopes2.includes(v)), "scopeChecker");
        if (!scopeChecker(tokenScopes, options.scopes)) {
          const data = {
            code: "UNAUTHORIZED",
            help_url: "https://zup.fail/UNAUTHORIZED",
            message: `JWT must have all the following scopes: ${options.scopes}`
          };
          return new Response(JSON.stringify(data), {
            status: 401,
            statusText: "Unauthorized",
            headers: {
              "content-type": "application/json"
            }
          });
        }
        return request;
      }, "JWTScopeValidationInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/mock-api-inbound/policy.js
  function generateResponse(exampleData) {
    const jsonValue = JSON.stringify(exampleData.exampleValue, null, 2);
    const headers = new Headers();
    headers.set("Content-Type", exampleData.contentName);
    switch (exampleData.responseName) {
      case "1XX":
        return new Response(jsonValue, { status: 100, headers });
      case "2XX":
        return new Response(jsonValue, { status: 200, headers });
      case "3XX":
        return new Response(jsonValue, { status: 300, headers });
      case "4XX":
        return new Response(jsonValue, { status: 400, headers });
      case "5XX":
      case "default":
        return new Response(jsonValue, { status: 500, headers });
      default:
        return new Response(jsonValue, {
          status: Number(exampleData.responseName),
          headers
        });
    }
  }
  var MockApiInboundPolicy, getProblemDetailResponse;
  var init_policy20 = __esm({
    "packages/runtime/dist/policies/mock-api-inbound/policy.js"() {
      "use strict";
      init_http_problems();
      MockApiInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const responses = context.route.raw().responses;
        if (!responses) {
          return getProblemDetailResponse(policyName, request, context, "No responses defined in the OpenAPI document. Add some responses with examples to use this policy.");
        }
        const responseNames = Object.keys(responses);
        let examplesData = [];
        if (responseNames.length === 0) {
          return getProblemDetailResponse(policyName, request, context, "No response object defined under responses in the OpenAPI document. Add some response objects with examples to use this policy.");
        }
        responseNames.forEach((responseName) => {
          if (responses[responseName]["content"]) {
            const contentNames = Object.keys(responses[responseName]["content"]);
            contentNames.forEach((contentName) => {
              const examples = responses[responseName]["content"][contentName].examples;
              if (examples) {
                const exampleNames = Object.keys(examples);
                exampleNames.forEach((exampleName) => {
                  examplesData.push({
                    responseName,
                    contentName,
                    exampleName,
                    exampleValue: examples[exampleName]
                  });
                });
              }
            });
          }
        });
        examplesData = examplesData.filter((e) => {
          if (options.responsePrefixFilter && !e.responseName.startsWith(options.responsePrefixFilter)) {
            return false;
          }
          if (options.contentType && !(e.contentName === options.contentType)) {
            return false;
          }
          if (options.exampleName && !(e.exampleName === options.exampleName)) {
            return false;
          }
          return true;
        });
        if (options.random && examplesData.length > 1) {
          const randomKey = Math.floor(Math.random() * examplesData.length);
          return generateResponse(examplesData[randomKey]);
        } else if (examplesData.length > 0) {
          return generateResponse(examplesData[0]);
        } else {
          return getProblemDetailResponse(policyName, request, context, "No examples matching the mocking options found in the OpenAPI document. Add examples to the OpenAPI document matching the options for this policy or change the mocking options to match the examples in the OpenAPI document.");
        }
      }, "MockApiInboundPolicy");
      __name(generateResponse, "generateResponse");
      getProblemDetailResponse = /* @__PURE__ */ __name((policyName, request, context, message2) => {
        const detail = `Error in policy: ${policyName} - On route ${request.method} ${context.route.path}. ${message2}`;
        return HttpProblems.internalServerError(request, context, { detail });
      }, "getProblemDetailResponse");
    }
  });

  // packages/runtime/dist/policies/moesif-inbound/policy.js
  function headersToObject(headers) {
    const h = {};
    headers.forEach((value, key) => {
      h[key] = value;
    });
    return h;
  }
  function timestamp() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
  function setMoesifContext(context, moesifContext) {
    let mc = contextMap3.get(context);
    if (!mc) {
      mc = defaultMoesifContext;
    }
    const newMoesifContext = Object.assign({ ...mc }, moesifContext);
    contextMap3.set(context, newMoesifContext);
  }
  async function readBody(reqRes, context) {
    const contentType = reqRes.headers.get("content-type");
    if (contentType && contentType.indexOf("json") !== 0) {
      try {
        const body2 = await reqRes.clone().json();
        return body2;
      } catch (err) {
        context.log.error(err);
      }
    }
    const body = await reqRes.clone().text();
    context.log.debug({ textBody: body });
    return body;
  }
  function getLastLogger() {
    if (!_lastLogger) {
      throw new RuntimeError("Invalid State - no _lastLogger");
    }
    return _lastLogger;
  }
  function getDispatcher(applicationId) {
    let dispatcher = dispatchers[applicationId];
    if (!dispatcher) {
      dispatcher = new BatchDispatch("moesif-inbound", 100, async (entries) => {
        const body = JSON.stringify(entries);
        getLastLogger().debug("posting", body);
        const result = await internals_default.fetch("https://api.moesif.net/v1/events/batch", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-Moesif-Application-Id": applicationId
          },
          body
        });
        if (!result.ok) {
          getLastLogger().error({
            status: result.status,
            body: await result.text()
          });
        }
      });
    }
    return dispatcher;
  }
  async function MoesifInboundPolicy(request, context, passedOptions, policyName) {
    _lastLogger = context.log;
    const startTime = timestamp();
    const options = Object.assign(DEFAULT_OPTIONS, passedOptions);
    if (!options.applicationId) {
      throw new Error(`Invalid configuration for MoesifInboundPolicy '${policyName}' - applicationId is required`);
    }
    const requestBody = options.logRequestBody ? await readBody(request, context) : void 0;
    context.addResponseSendingFinalHook(async (response, latestRequest) => {
      const dispatcher = getDispatcher(options.applicationId);
      const ip = request.headers.get("true-client-ip");
      const mc = contextMap3.get(context) ?? {};
      const req = {
        time: startTime,
        uri: request.url,
        verb: request.method,
        body: requestBody,
        ip_address: ip ?? void 0,
        api_version: mc.apiVersion,
        headers: headersToObject(request.headers)
      };
      const responseBody = options.logResponseBody ? await readBody(response, context) : void 0;
      const res = {
        time: timestamp(),
        status: response.status,
        headers: headersToObject(response.headers),
        body: responseBody
      };
      const entry = {
        request: req,
        response: res,
        user_id: mc.userId ?? latestRequest.user?.sub,
        // allow override
        session_token: mc.sessionToken,
        company_id: mc.companyId,
        metadata: mc.metadata,
        direction: DEFAULT_DIRECTION
      };
      dispatcher.enqueue(entry);
      context.waitUntil(dispatcher.waitUntilFlushed());
    });
    return request;
  }
  var DEFAULT_DIRECTION, DEFAULT_OPTIONS, contextMap3, defaultMoesifContext, dispatchers, _lastLogger;
  var init_policy21 = __esm({
    "packages/runtime/dist/policies/moesif-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_batch_dispatch();
      DEFAULT_DIRECTION = "Incoming";
      DEFAULT_OPTIONS = {
        logRequestBody: true,
        logResponseBody: true
      };
      __name(headersToObject, "headersToObject");
      __name(timestamp, "timestamp");
      contextMap3 = /* @__PURE__ */ new WeakMap();
      defaultMoesifContext = {};
      __name(setMoesifContext, "setMoesifContext");
      __name(readBody, "readBody");
      dispatchers = {};
      __name(getLastLogger, "getLastLogger");
      __name(getDispatcher, "getDispatcher");
      __name(MoesifInboundPolicy, "MoesifInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/monetization-inbound/metering-utils.js
  async function loadSubscription(context, userSub, policyName, bucketId) {
    const systemLog = SystemLogMap.getLogger(context);
    const { authApiJWT, meteringServiceUrl } = Environment.instance;
    let subscriptionResult;
    try {
      const res = await internals_default.fetch(`${meteringServiceUrl}/internal/v1/metering/${bucketId}/subscriptions?customerKey=${userSub}`, {
        headers: {
          Authorization: `Bearer ${authApiJWT}`,
          "zp-rid": context.requestId
        },
        method: "GET"
      });
      if (!res.ok) {
        const loadSubscriptionError = await res.json();
        const errMessage = loadSubscriptionError.detail ?? loadSubscriptionError.title ?? "Unknown error on quota consumption.";
        context.log.error(`MonetizationInboundPolicy '${policyName}' - Error loading subscription. ${res.status} - ${errMessage}`);
        systemLog.error(`MonetizationInboundPolicy '${policyName}' - Error loading subscription.${res.status} - ${errMessage}`);
      } else {
        subscriptionResult = await res.json();
      }
    } catch (err) {
      systemLog.error(`MonetizationInboundPolicy '${policyName}' - Error loading subscription`, err);
    }
    const subscriptionRes = subscriptionResult && subscriptionResult.data && subscriptionResult.data.length > 0 ? subscriptionResult.data : void 0;
    if (subscriptionRes && subscriptionRes.length > 1) {
      const sortedSubscriptions = subscriptionRes.sort((a, b) => a.createdOn > b.createdOn ? -1 : 1);
      return sortedSubscriptions[0];
    }
    return subscriptionRes ? subscriptionRes[0] : subscriptionRes;
  }
  async function consumeSubcriptionQuotas(context, subscriptionId, policyName, bucketId, meters) {
    const { authApiJWT, meteringServiceUrl } = Environment.instance;
    const systemLog = SystemLogMap.getLogger(context);
    try {
      const consumption = await internals_default.fetch(`${meteringServiceUrl}/internal/v1/metering/${bucketId}/subscriptions/${subscriptionId}/quotas/consume`, {
        headers: {
          Authorization: `Bearer ${authApiJWT}`,
          "zp-rid": context.requestId
        },
        method: "POST",
        // @TODO - make the meters customizable, hardcoded for v0
        body: JSON.stringify({
          meters
        })
      });
      if (!consumption.ok) {
        const consumptionError = await consumption.json();
        const errMessage = consumptionError.detail ?? consumptionError.title ?? "Unknown error on quota consumption.";
        context.log.error(`MonetizationInboundPolicy '${policyName}' - Error updating subscription quota. ${consumption.status} - ${errMessage}`);
        systemLog.error(`MonetizationInboundPolicy '${policyName}' - Error updating subscription quota. ${consumption.status} - ${errMessage}`);
      }
    } catch (err) {
      context.log.error(`MonetizationInboundPolicy '${policyName}' - Error updating subscription quota.`);
      systemLog.error(`MonetizationInboundPolicy '${policyName}' - Error updating subscription quota.`, err);
    }
  }
  var init_metering_utils = __esm({
    "packages/runtime/dist/policies/monetization-inbound/metering-utils.js"() {
      "use strict";
      init_internals();
      init_system_log_map();
      init_environment2();
      __name(loadSubscription, "loadSubscription");
      __name(consumeSubcriptionQuotas, "consumeSubcriptionQuotas");
    }
  });

  // packages/runtime/dist/policies/monetization-inbound/validation-utils.js
  function validateMeters(meters, policyName) {
    try {
      const nonNumericProperties = [];
      for (const key in meters) {
        if (typeof meters[key] !== "number" && !(Number.isInteger(meters[key]) && /^-?\d+$/.test(meters[key].toString()))) {
          nonNumericProperties.push(key);
        }
      }
      if (nonNumericProperties.length > 0) {
        throw new ConfigurationError(nonNumericProperties.length > 1 ? `The values found in these properties are not integers : ${nonNumericProperties.join(", ")}` : `The value in property '${nonNumericProperties[0]}' is not an integer`);
      }
    } catch (err) {
      if (err instanceof ConfigurationError) {
        throw new ConfigurationError(`MonetizationInboundPolicy '${policyName}' - The property 'meters' is invalid. ${err.message}`);
      }
      throw err;
    }
  }
  function parseAllowedSubscriptionStatuses(providedAllowedSubscriptionStatuses, policyName) {
    if (providedAllowedSubscriptionStatuses) {
      try {
        if (providedAllowedSubscriptionStatuses.length === 0) {
          throw new ConfigurationError(`Must set valid subscription statuses`);
        }
        const statuses = parseValueToStringArray(providedAllowedSubscriptionStatuses);
        const invalidStatuses = [];
        for (const item of statuses) {
          if (!validSubscriptionStatuses.has(item)) {
            invalidStatuses.push(item);
          }
        }
        if (invalidStatuses.length > 0) {
          throw new ConfigurationError(`Found the following invalid statuses: ${invalidStatuses.join(", ")}`);
        }
        return providedAllowedSubscriptionStatuses;
      } catch (err) {
        if (err instanceof ConfigurationError) {
          throw new ConfigurationError(`MonetizationInboundPolicy '${policyName}' - The property 'allowedSubscriptionStatuses' is invalid. ${err.message}`);
        }
        throw err;
      }
    } else {
      return ["active", "incomplete", "trialing"];
    }
  }
  function compareMeters(subscriptionMeters, policyMeters) {
    const metersInSubscription = {};
    const metersNotInSubscription = {};
    for (const key in policyMeters) {
      if (subscriptionMeters.hasOwnProperty(key)) {
        metersInSubscription[key] = policyMeters[key];
      } else {
        metersNotInSubscription[key] = policyMeters[key];
      }
    }
    return { metersInSubscription, metersNotInSubscription };
  }
  var validSubscriptionStatuses;
  var init_validation_utils = __esm({
    "packages/runtime/dist/policies/monetization-inbound/validation-utils.js"() {
      "use strict";
      init_errors();
      init_options_parsing();
      validSubscriptionStatuses = /* @__PURE__ */ new Set([
        "active",
        "inactive",
        "incomplete",
        "incomplete-expired",
        "trialing",
        "past-due",
        "canceled",
        "unpaid"
      ]);
      __name(validateMeters, "validateMeters");
      __name(parseAllowedSubscriptionStatuses, "parseAllowedSubscriptionStatuses");
      __name(compareMeters, "compareMeters");
    }
  });

  // packages/runtime/dist/policies/monetization-inbound/policy.js
  var MonetizationInboundPolicy;
  var init_policy22 = __esm({
    "packages/runtime/dist/policies/monetization-inbound/policy.js"() {
      "use strict";
      init_constants();
      init_context_data();
      init_environment3();
      init_errors();
      init_policies();
      init_http_problems();
      init_options_parsing();
      init_validator();
      init_metering_utils();
      init_validation_utils();
      MonetizationInboundPolicy = class extends InboundPolicy {
        static {
          __name(this, "MonetizationInboundPolicy");
        }
        static getSubscription(context) {
          return ContextData.get(context, METERING_SUBSCRIPTION_CONTEXT_DATA);
        }
        static setMeters(context, meters) {
          validateMeters(meters, "setMeters");
          ContextData.set(context, DYNAMIC_METERS_CONTEXT_DATA, meters);
        }
        async handler(request, context) {
          optionValidator(this.options, this.policyName).optional("allowRequestsWithoutSubscription", "boolean").optional("allowRequestsOverQuota", "boolean").optional("bucketId", "string");
          if (!this.options.meterOnStatusCodes) {
            this.options.meterOnStatusCodes = "200-399";
          }
          const allowRequestsOverQuota = this.options.allowRequestsOverQuota ?? false;
          const statusCodes = statusCodesStringToNumberArray(this.options.meterOnStatusCodes);
          const dynamicMeters = ContextData.get(context, DYNAMIC_METERS_CONTEXT_DATA);
          const mergedMeters = {
            ...this.options.meters,
            ...dynamicMeters
          };
          validateMeters(mergedMeters, this.policyName);
          const allowRequestsWithoutSubscription = this.options.allowRequestsWithoutSubscription ?? false;
          const allowedSubscriptionStatus = parseAllowedSubscriptionStatuses(this.options.allowedSubscriptionStatuses, this.policyName);
          context.addResponseSendingFinalHook(async (response, latestRequest, context2) => {
            const subscription2 = ContextData.get(context2, METERING_SUBSCRIPTION_CONTEXT_DATA);
            const allowRequestsWithoutSubscription2 = this.options.allowRequestsWithoutSubscription ?? false;
            if (allowRequestsWithoutSubscription2 && !subscription2) {
              context2.log.debug(`MonetizationInboundPolicy '${this.policyName}' - No subscription found and property 'allowRequestsWithoutSubscription' is true`);
              return;
            }
            if (!this.options.bucketId) {
              if (environment.ZUPLO_METERING_SERVICE_BUCKET_ID) {
                this.options.bucketId = environment.ZUPLO_METERING_SERVICE_BUCKET_ID;
              } else {
                throw new ConfigurationError(`MonetizationInboundPolicy '${this.policyName}' - No bucketId property provided`);
              }
            }
            const dynamicMeters2 = ContextData.get(context2, DYNAMIC_METERS_CONTEXT_DATA);
            const mergedMeters2 = {
              ...this.options.meters,
              ...dynamicMeters2
            };
            validateMeters(mergedMeters2, this.policyName);
            if (statusCodes.includes(response.status) && subscription2 && mergedMeters2) {
              context2.log.debug(`MonetizationInboundPolicy '${this.policyName}' - Updating subscription '${subscription2.id}' with meters '${JSON.stringify(mergedMeters2)} on response status '${response.status}'`);
              const { metersInSubscription, metersNotInSubscription } = compareMeters(subscription2.meters, mergedMeters2);
              if (metersNotInSubscription && Object.keys(metersNotInSubscription).length > 0) {
                const keys = Object.keys(metersNotInSubscription);
                context2.log.warn(`The following meters cannot be applied since they are not present in the subscription: '${keys}'`);
              }
              await consumeSubcriptionQuotas(context2, subscription2.id, this.policyName, this.options.bucketId, metersInSubscription);
            }
          });
          const user = request.user;
          if (!user) {
            if (allowRequestsWithoutSubscription) {
              return request;
            }
            return HttpProblems.unauthorized(request, context, {
              detail: "Unable to check subscription for anonymous user"
            });
          }
          if (!this.options.bucketId) {
            if (environment.ZUPLO_METERING_SERVICE_BUCKET_ID) {
              this.options.bucketId = environment.ZUPLO_METERING_SERVICE_BUCKET_ID;
            } else {
              throw new ConfigurationError(`MonetizationInboundPolicy '${this.policyName}' - No bucketId property provided`);
            }
          }
          const { sub } = user;
          const subscriptionRes = await loadSubscription(context, sub, this.policyName, this.options.bucketId);
          if (!subscriptionRes) {
            context.log.warn(`No valid subscription found`);
            if (allowRequestsWithoutSubscription) {
              return request;
            } else {
              return HttpProblems.unauthorized(request, context, {
                detail: "No valid subscription found"
              });
            }
          }
          if (!allowedSubscriptionStatus.includes(subscriptionRes.status) && !allowRequestsWithoutSubscription) {
            context.log.warn(`Subscription '${subscriptionRes.id}' has status '${subscriptionRes.status}' which is not part of the allowed statuses.`);
            return HttpProblems.unauthorized(request, context, {
              detail: "No valid subscription found"
            });
          }
          if (allowedSubscriptionStatus.includes(subscriptionRes.status)) {
            context.log.debug(`Loading subscription '${subscriptionRes.id}' for user sub '${sub}' to ContextData`);
            ContextData.set(context, METERING_SUBSCRIPTION_CONTEXT_DATA, subscriptionRes);
          }
          const subscription = ContextData.get(context, METERING_SUBSCRIPTION_CONTEXT_DATA);
          if (!subscription) {
            if (allowRequestsWithoutSubscription) {
              return request;
            }
            context.log.warn("Subscription is not available for user");
            return HttpProblems.paymentRequired(request, context, {
              detail: "Subscription is not available for user",
              title: "No Subscription"
            });
          }
          if (subscription && Object.keys(subscription.meters).length === 0) {
            context.log.error(`Quota is not set up for subscription '${subscription.id}'`);
            return HttpProblems.tooManyRequests(request, context, {
              detail: `Quota is not set up for the user's subscription`,
              title: "Quota Exceeded"
            });
          }
          const policyMeterKeys = Object.keys(mergedMeters);
          const missingMeterKeys = policyMeterKeys.filter((meterKey) => !Object.keys(subscription.meters).includes(meterKey));
          if (missingMeterKeys.length > 0) {
            context.log.warn(`The following policy meters are not present in the subscription: ${missingMeterKeys.join(", ")}`);
            return HttpProblems.tooManyRequests(request, context, {
              detail: `The following policy meters are not present in the subscription: ${missingMeterKeys.join(", ")}`,
              title: "Quota Exceeded"
            });
          }
          for (const key of Object.keys(mergedMeters)) {
            const quota = subscription.meters[key].available;
            if (quota <= 0) {
              if (!allowRequestsOverQuota) {
                return HttpProblems.tooManyRequests(request, context, {
                  detail: `Quota exceeded for meter '${key}'`,
                  title: "Quota Exceeded"
                });
              }
            }
          }
          return request;
        }
      };
    }
  });

  // packages/runtime/dist/policies/okta-jwt-auth-inbound/policy.js
  var OktaJwtInboundPolicy;
  var init_policy23 = __esm({
    "packages/runtime/dist/policies/okta-jwt-auth-inbound/policy.js"() {
      "use strict";
      init_policy5();
      OktaJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => OpenIdJwtInboundPolicy(request, context, {
        issuer: options.issuerUrl,
        audience: options.audience,
        jwkUrl: `${options.issuerUrl}/v1/keys`,
        allowUnauthenticatedRequests: options.allowUnauthenticatedRequests
      }, policyName), "OktaJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/propel-auth-jwt-inbound/policy.js
  var verifierKey, PropelAuthJwtInboundPolicy;
  var init_policy24 = __esm({
    "packages/runtime/dist/policies/propel-auth-jwt-inbound/policy.js"() {
      "use strict";
      init_browser2();
      init_policy5();
      PropelAuthJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        if (!verifierKey) {
          try {
            verifierKey = await importSPKI(options.verifierKey, "RS256");
          } catch (err) {
            context.log.error("Could not import verifier key");
            throw err;
          }
        }
        return OpenIdJwtInboundPolicy(request, context, {
          issuer: options.authUrl,
          secret: verifierKey,
          allowUnauthenticatedRequests: options.allowUnauthenticatedRequests,
          subPropertyName: "user_id"
        }, policyName);
      }, "PropelAuthJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/utils/errors.js
  function throwIfUndefinedOrNull(value, name) {
    if (isUndefinedOrNull(value)) {
      throw new ArgumentUndefinedError(name);
    }
  }
  function throwIfNotString(value, name) {
    throwIfUndefinedOrNull(value, name);
    if (!isString(value)) {
      throw new ArgumentTypeError(name, "string");
    }
  }
  var ValidationError, ArgumentUndefinedError, ArgumentTypeError;
  var init_errors3 = __esm({
    "packages/runtime/dist/utils/errors.js"() {
      "use strict";
      init_types2();
      ValidationError = class extends Error {
        static {
          __name(this, "ValidationError");
        }
        constructor(message2) {
          super(message2);
        }
      };
      ArgumentUndefinedError = class extends ValidationError {
        static {
          __name(this, "ArgumentUndefinedError");
        }
        constructor(argument) {
          super(`The argument '${argument}' is undefined.`);
        }
      };
      ArgumentTypeError = class extends ValidationError {
        static {
          __name(this, "ArgumentTypeError");
        }
        constructor(argument, type) {
          super(`The argument '${argument}' must be of type '${type}'.`);
        }
      };
      __name(throwIfUndefinedOrNull, "throwIfUndefinedOrNull");
      __name(throwIfNotString, "throwIfNotString");
    }
  });

  // packages/runtime/dist/utils/redis-rest-client.js
  var StandardRedisClient, InMemoryRedisClient;
  var init_redis_rest_client = __esm({
    "packages/runtime/dist/utils/redis-rest-client.js"() {
      "use strict";
      init_errors();
      init_internals();
      init_errors3();
      StandardRedisClient = class _StandardRedisClient {
        static {
          __name(this, "StandardRedisClient");
        }
        static instance;
        redisClientUrl;
        clientAuthToken;
        userAgent;
        deploymentName;
        constructor(domain, token, deploymentName, userAgent) {
          this.redisClientUrl = domain;
          this.clientAuthToken = token;
          this.deploymentName = deploymentName;
          this.userAgent = userAgent;
        }
        static initialize(redisClientUrl, clientAuthToken, deploymentName, userAgent) {
          throwIfNotString(redisClientUrl, "redisClientUrl");
          throwIfNotString(clientAuthToken, "clientAuthToken");
          if (!_StandardRedisClient.instance) {
            _StandardRedisClient.instance = new _StandardRedisClient(redisClientUrl, clientAuthToken, deploymentName, userAgent);
          }
          return _StandardRedisClient.instance;
        }
        isEnabled() {
          return this.redisClientUrl !== void 0 && this.clientAuthToken !== void 0;
        }
        async fetch({ url, body, method, requestId }) {
          throwIfNotString(url, "url");
          const res = await internals_default.fetch(`${this.redisClientUrl}${url}`, {
            method,
            body,
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${this.clientAuthToken}`,
              "zp-rid": requestId,
              "zp-dn": this.deploymentName,
              "User-Agent": this.userAgent
            }
          });
          const data = res.headers.get("Content-Type")?.includes("application/json") ? await res.json() : await res.text();
          if (res.ok) {
            return data;
          } else {
            if (res.status === 401) {
              throw new SystemError("Redis client failed with 401: Unauthorized");
            } else {
              throw new SystemError(`Redis client failed with (${res.status}): ${typeof data === "string" ? data : JSON.stringify(data, null, 2)}`);
            }
          }
        }
      };
      InMemoryRedisClient = class {
        static {
          __name(this, "InMemoryRedisClient");
        }
        keyValueStore;
        constructor() {
          this.keyValueStore = /* @__PURE__ */ new Map();
        }
        isEnabled() {
          return true;
        }
        fetch({ url, body, method }) {
          throwIfNotString(url, "url");
          if (method === "POST" && url === "/rate-limit") {
            const { incrBy, expire: expiresInSeconds, key } = JSON.parse(body);
            const expirationEpoch = Date.now() + expiresInSeconds * 1e3;
            const currentDataForKey = this.keyValueStore.get(key);
            if (currentDataForKey) {
              if (Date.now() > currentDataForKey.expiresAt) {
                this.keyValueStore.set(key, {
                  value: incrBy,
                  expiresAt: expirationEpoch
                });
              } else {
                this.keyValueStore.set(key, {
                  value: currentDataForKey.value + incrBy,
                  // retain the same value
                  expiresAt: currentDataForKey.expiresAt
                });
              }
            } else {
              this.keyValueStore.set(key, {
                value: incrBy,
                expiresAt: expirationEpoch
              });
            }
            const latestDataForKey = this.keyValueStore.get(key);
            return Promise.resolve({
              count: latestDataForKey.value,
              ttlSeconds: Math.round((latestDataForKey.expiresAt - Date.now()) / 1e3)
            });
          }
          throw new SystemError("The in-memory redis client only supports /rate-limit calls");
        }
      };
    }
  });

  // packages/runtime/dist/policies/rate-limit-inbound/common.js
  function getRedisClient(policyName, logger) {
    let redis;
    if (redisClient) {
      return redisClient;
    }
    if (Environment.instance.isLocalDevelopment) {
      logger.info("Using in-memory redis client for local development.");
      redis = new InMemoryRedisClient();
      redisClient = redis;
      return redis;
    }
    const { authApiJWT, redisURL } = Environment.instance;
    if (!isString(redisURL)) {
      throw new SystemError(`RateLimitInboundPolicy '${policyName}' - rate limit service URL not configured`);
    }
    if (!isString(authApiJWT)) {
      throw new SystemError(`RateLimitInboundPolicy '${policyName}' - service authentication not configured`);
    }
    if (redisURL) {
      redis = StandardRedisClient.initialize(redisURL, authApiJWT, Environment.instance.deploymentName ?? "unknown", Environment.instance.systemUserAgent);
    }
    if (!redis || !redis.isEnabled()) {
      throw new SystemError(`RateLimitInboundPolicy '${policyName}' - no redis ('${redis}') or redis.isEnabled ('${redis?.isEnabled}) is false`);
    }
    redisClient = redis;
    return redis;
  }
  async function getCountAndUpdateExpiry(bucketName, timeWindowMinutes, client, systemLog, requestId) {
    const expireInSeconds = Math.floor(timeWindowMinutes * 60);
    const data = await client.fetch({
      url: "/rate-limit",
      method: "POST",
      body: JSON.stringify({
        incrBy: 1,
        expire: expireInSeconds,
        key: bucketName
      }),
      requestId
    });
    return data;
  }
  function wrapUserFunction(options, policyName) {
    let userFunction;
    if (options.rateLimitBy === "function") {
      if (!options.identifier) {
        throw new ConfigurationError(`RateLimitInboundPolicy '${policyName}' - If rateLimitBy set to 'function' options.identifier must be specified`);
      }
      if (!options.identifier.module) {
        throw new ConfigurationError(`RateLimitInboundPolicy '${policyName}' - If rateLimitBy set to 'function' options.identifier.module must be specified`);
      }
      if (!options.identifier.export) {
        throw new ConfigurationError(`RateLimitInboundPolicy '${policyName}' - If rateLimitBy set to 'function' options.identifier.export must be specified`);
      }
      userFunction = options.identifier.module[options.identifier.export];
      if (!userFunction || typeof userFunction !== "function") {
        throw new ConfigurationError(`RateLimitInboundPolicy '${policyName}' - Custom rate limit function must be a valid function`);
      }
    }
    const outerFunction = /* @__PURE__ */ __name(async (request, context, policyName2) => {
      const result = await userFunction(request, context, policyName2);
      if (!result.key) {
        const message2 = `RateLimitInboundPolicy '${policyName2}' - Custom rate limit function must return a valid key property '${JSON.stringify(result, null, 2)}'`;
        context.log.error(message2);
        throw new RuntimeError(message2);
      }
      return result;
    }, "outerFunction");
    return outerFunction;
  }
  var getRealIP, getIP, getUser, getAll, redisClient, RETRY_AFTER_HEADER;
  var init_common = __esm({
    "packages/runtime/dist/policies/rate-limit-inbound/common.js"() {
      "use strict";
      init_errors();
      init_environment2();
      init_redis_rest_client();
      init_types2();
      getRealIP = /* @__PURE__ */ __name((request) => {
        const trueClientIp = request.headers.get("x-real-ip") ?? request.headers.get("true-client-ip") ?? request.headers.get("cf-connecting-ip");
        if (trueClientIp) {
          return trueClientIp;
        }
        const xff = request.headers.get("x-forwarded-for");
        const ip = xff ? xff.split(",")[0] : "127.0.0.1";
        return ip;
      }, "getRealIP");
      getIP = /* @__PURE__ */ __name(async (request) => {
        return { key: `ip-${getRealIP(request)}` };
      }, "getIP");
      getUser = /* @__PURE__ */ __name(async (request) => {
        return {
          key: `user-${request.user?.sub ?? "anonymous"}`
        };
      }, "getUser");
      getAll = /* @__PURE__ */ __name(async () => {
        return {
          key: `all-2d77ce9d-9a3c-4206-9ab2-668cfd271095`
        };
      }, "getAll");
      __name(getRedisClient, "getRedisClient");
      __name(getCountAndUpdateExpiry, "getCountAndUpdateExpiry");
      __name(wrapUserFunction, "wrapUserFunction");
      RETRY_AFTER_HEADER = "Retry-After";
    }
  });

  // packages/runtime/dist/policies/rate-limit-inbound/async.js
  var import_debug6, log6, AsyncRateLimitInboundPolicy;
  var init_async = __esm({
    "packages/runtime/dist/policies/rate-limit-inbound/async.js"() {
      "use strict";
      import_debug6 = __toESM(require_debug());
      init_keys();
      init_http_problems();
      init_system_log_map();
      init_environment2();
      init_memory_zone_readthrough_cache();
      init_common();
      log6 = (0, import_debug6.debug)("zuplo:policies:RateLimitInboundPolicy");
      AsyncRateLimitInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const systemLog = SystemLogMap.getLogger(context);
        const rateLimited = /* @__PURE__ */ __name((rateLimitHeaderMode2, ttlSeconds) => {
          const headers = {};
          if (!rateLimitHeaderMode2 || rateLimitHeaderMode2 === "retry-after") {
            headers[RETRY_AFTER_HEADER] = ttlSeconds.toString();
          }
          return HttpProblems.tooManyRequests(request, context, void 0, headers);
        }, "rateLimited");
        const rateLimitByFunctions = {
          function: wrapUserFunction(options, policyName),
          user: getUser,
          ip: getIP,
          all: getAll
        };
        const detailsFunction = rateLimitByFunctions[options.rateLimitBy];
        const customDetails = await detailsFunction(request, context, policyName);
        const key = customDetails.key;
        const requestsAllowed = customDetails.requestsAllowed ?? options.requestsAllowed;
        const timeWindowMinutes = customDetails.timeWindowMinutes ?? options.timeWindowMinutes;
        const rateLimitHeaderMode = options.headerMode ?? "retry-after";
        const redis = getRedisClient(policyName, systemLog);
        const buildId = Environment.instance.build.BUILD_ID;
        const bucketName = `bucket/${buildId}/${policyName}/${key}`;
        const cacheName = await getPolicyCacheName(policyName, options);
        const cache = new MemoryZoneReadThroughCache(cacheName, context);
        const redisPromise = getCountAndUpdateExpiry(bucketName, timeWindowMinutes, redis, systemLog, context.requestId);
        let rateLimitResponse;
        const asyncCheck = /* @__PURE__ */ __name(async () => {
          const redisCount = await redisPromise;
          if (redisCount.count > requestsAllowed) {
            const expires2 = Date.now() + redisCount.ttlSeconds * 1e3;
            cache.put(bucketName, expires2, redisCount.ttlSeconds);
            log6(`RateLimitInboundPolicy '${policyName}' - returning 429 from redis for '${bucketName}' (async mode)`);
            rateLimitResponse = rateLimited(rateLimitHeaderMode, redisCount.ttlSeconds);
          }
        }, "asyncCheck");
        void asyncCheck();
        const expires = await cache.get(bucketName);
        if (expires !== void 0 && expires > Date.now()) {
          log6(`RateLimitInboundPolicy '${policyName}' - returning 429 from cache for '${bucketName}' (async mode)`);
          const ttlSeconds = Math.round((expires - Date.now()) / 1e3);
          return rateLimited(rateLimitHeaderMode, ttlSeconds);
        }
        context.addResponseSendingHook(async (response) => {
          return rateLimitResponse ?? response;
        });
        return request;
      }, "AsyncRateLimitInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/rate-limit-inbound/policy.js
  var import_debug7, log7, DEFAULT_RATE_LIMIT_MODE, RateLimitInboundPolicy;
  var init_policy25 = __esm({
    "packages/runtime/dist/policies/rate-limit-inbound/policy.js"() {
      "use strict";
      import_debug7 = __toESM(require_debug());
      init_errors();
      init_http_problems();
      init_system_log_map();
      init_environment2();
      init_async();
      init_common();
      log7 = (0, import_debug7.debug)("zuplo:policies:RateLimitInboundPolicy");
      DEFAULT_RATE_LIMIT_MODE = "strict";
      RateLimitInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const mode = options.mode ?? DEFAULT_RATE_LIMIT_MODE;
        if (mode === "async") {
          return AsyncRateLimitInboundPolicy(request, context, options, policyName);
        }
        const start = Date.now();
        const systemLog = SystemLogMap.getLogger(context);
        const throwOrLog = /* @__PURE__ */ __name((message2, err) => {
          if (options.throwOnFailure) {
            throw new SystemError(message2, { cause: err });
          }
          systemLog.error(message2, err);
        }, "throwOrLog");
        const rateLimited = /* @__PURE__ */ __name((rateLimitHeaderMode, ttlSeconds) => {
          const headers = {};
          if (!rateLimitHeaderMode || rateLimitHeaderMode === "retry-after") {
            headers[RETRY_AFTER_HEADER] = ttlSeconds.toString();
          }
          return HttpProblems.tooManyRequests(request, context, void 0, headers);
        }, "rateLimited");
        try {
          const rateLimitByFunctions = {
            function: wrapUserFunction(options, policyName),
            user: getUser,
            ip: getIP,
            all: getAll
          };
          const detailsFunction = rateLimitByFunctions[options.rateLimitBy];
          const customDetails = await detailsFunction(request, context, policyName);
          const key = customDetails.key;
          const requestsAllowed = customDetails.requestsAllowed ?? options.requestsAllowed;
          const timeWindowMinutes = customDetails.timeWindowMinutes ?? options.timeWindowMinutes;
          const rateLimitHeaderMode = options.headerMode ?? "retry-after";
          const redis = getRedisClient(policyName, systemLog);
          const buildId = Environment.instance.build.BUILD_ID;
          const bucketName = `bucket/${buildId}/${policyName}/${key}`;
          const redisCount = await getCountAndUpdateExpiry(bucketName, timeWindowMinutes, redis, systemLog, context.requestId);
          if (redisCount.count > requestsAllowed) {
            log7(`RateLimitInboundPolicy '${policyName}' - returning 429 from redis for '${bucketName}' (strict mode)`);
            return rateLimited(rateLimitHeaderMode, redisCount.ttlSeconds);
          }
          return request;
        } catch (err) {
          throwOrLog(err.message, err);
          return request;
        } finally {
          const latency = Date.now() - start;
          log7(`RateLimitInboundPolicy '${policyName}' - latency ${latency}ms`);
        }
      }, "RateLimitInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/readme-metrics-inbound/policy.js
  function headersToNameValuePairs(headers) {
    const result = [];
    for (const [name, value] of headers) {
      result.push({ name, value });
    }
    return result;
  }
  function queryToNameValueParis(query) {
    const result = [];
    Object.entries(query).forEach(([name, value]) => {
      result.push({ name, value });
    });
    return result;
  }
  function parseIntOrUndefined(value) {
    if (value === null) {
      return void 0;
    }
    const parsed = parseFloat(value);
    if (isNaN(parsed)) {
      return void 0;
    }
    return parsed;
  }
  async function ReadmeMetricsInboundPolicy(request, context, options, policyName) {
    const startDate = /* @__PURE__ */ new Date();
    const startMs = Date.now();
    if (!readmeCreator) {
      readmeCreator = {
        name: "zuplo",
        version: Environment.instance.build.ZUPLO_VERSION,
        comment: `zuplo/${Environment.instance.build.ZUPLO_VERSION}`
      };
    }
    context.addResponseSendingFinalHook(async (response) => {
      try {
        const userLabel = options.userLabelPropertyPath && request.user ? getValueFromRequestUser(request.user, options.userLabelPropertyPath, "userLabelPropertyPath") : request.user?.sub;
        const userEmail = options.userEmailPropertyPath && request.user ? getValueFromRequestUser(request.user, options.userEmailPropertyPath, "userEmailPropertyPath") : void 0;
        const data = {
          clientIPAddress: request.headers.get("true-client-ip") ?? "",
          development: options.development !== void 0 ? options.development : Environment.instance.isWorkingCopy || Environment.instance.isLocalDevelopment,
          group: {
            label: userLabel,
            email: userEmail,
            id: request.user?.sub ?? "anonymous"
            // can be used for API keys, we're not comfortable sending this, but it is required so sending blank (confirmed with readme that is OK)
          },
          request: {
            log: {
              creator: readmeCreator,
              entries: [
                {
                  startedDateTime: startDate.toISOString(),
                  time: Date.now() - startMs,
                  request: {
                    method: request.method,
                    // by default we use the route path, because that is safer
                    url: options.useFullRequestPath ? new URL(request.url).pathname : context.route.path,
                    httpVersion: "2",
                    // hard coding for now, not sure we can know this?
                    headers: headersToNameValuePairs(request.headers),
                    queryString: queryToNameValueParis(request.query)
                  },
                  response: {
                    status: response.status,
                    statusText: response.statusText,
                    headers: headersToNameValuePairs(response.headers),
                    content: {
                      // TODO - need to not set this if this is not a number otherwise we'll get NaN
                      size: parseIntOrUndefined(request.headers.get("content-length"))
                    }
                  }
                }
              ]
            }
          }
        };
        let batcher3 = batcherMap2[options.apiKey];
        if (!batcher3) {
          const apiKey = options.apiKey;
          batcher3 = new BatchDispatch(`readme-metering-inbound-policy`, 10, async (entries) => {
            try {
              const url = options.url ?? "https://metrics.readme.io/request";
              const result = await internals_default.fetch(url, {
                method: "POST",
                body: JSON.stringify(entries),
                headers: {
                  "content-type": "application/json",
                  authorization: `Basic ${btoa(apiKey + ":")}`
                  // yes, readme have weird auth
                }
              });
              if (result.status !== 202) {
                context.log.error(`Unexpected response in ReadmeMeteringInboundPolicy '${policyName}'. ${result.status}: '${await result.text()}'`);
              }
            } catch (err) {
              context.log.error(`Error in ReadmeMeteringInboundPolicy '${policyName}': '${err.message}'`);
              throw err;
            }
          });
          batcherMap2[apiKey] = batcher3;
        }
        batcher3.enqueue(data);
        context.waitUntil(batcher3.waitUntilFlushed());
      } catch (err) {
        context.log.error(err);
      }
    });
    return request;
  }
  var readmeCreator, batcherMap2;
  var init_policy26 = __esm({
    "packages/runtime/dist/policies/readme-metrics-inbound/policy.js"() {
      "use strict";
      init_internals();
      init_batch_dispatch();
      init_environment2();
      init_options_parsing();
      __name(headersToNameValuePairs, "headersToNameValuePairs");
      __name(queryToNameValueParis, "queryToNameValueParis");
      __name(parseIntOrUndefined, "parseIntOrUndefined");
      batcherMap2 = {};
      __name(ReadmeMetricsInboundPolicy, "ReadmeMetricsInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/remove-headers-inbound/policy.js
  var RemoveHeadersInboundPolicy;
  var init_policy27 = __esm({
    "packages/runtime/dist/policies/remove-headers-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_request();
      RemoveHeadersInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const names = options?.headers;
        if (!names || !Array.isArray(names) || names.length === 0) {
          throw new ConfigurationError(`RemoveHeadersInboundPolicy '${policyName}' options.headers must be a non-empty string array of header names`);
        }
        const headers = new Headers(request.headers);
        names.forEach((key) => {
          headers.delete(key);
        });
        const newRequest = new ZuploRequest(request, {
          headers
        });
        return newRequest;
      }, "RemoveHeadersInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/remove-headers-outbound/policy.js
  var RemoveHeadersOutboundPolicy;
  var init_policy28 = __esm({
    "packages/runtime/dist/policies/remove-headers-outbound/policy.js"() {
      "use strict";
      init_errors();
      RemoveHeadersOutboundPolicy = /* @__PURE__ */ __name(async (response, request, context, options, policyName) => {
        const names = options?.headers;
        if (!names || !Array.isArray(names) || names.length === 0) {
          throw new ConfigurationError(`RemoveHeadersOutboundPolicy '${policyName}' options.headers must be a non-empty string array of header names`);
        }
        const headers = new Headers(response.headers);
        names.forEach((key) => {
          headers.delete(key);
        });
        const newResponse = new Response(response.body, {
          headers,
          status: response.status,
          statusText: response.statusText
        });
        return newResponse;
      }, "RemoveHeadersOutboundPolicy");
    }
  });

  // packages/runtime/dist/policies/remove-query-params-inbound/policy.js
  var RemoveQueryParamsInboundPolicy;
  var init_policy29 = __esm({
    "packages/runtime/dist/policies/remove-query-params-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_request();
      RemoveQueryParamsInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const names = options.params;
        if (!names || !Array.isArray(names) || names.length === 0) {
          throw new ConfigurationError(`RemoveQueryParamsInboundPolicy '${policyName}' options.params must be a non-empty string array of header names`);
        }
        const url = new URL(request.url);
        names.forEach((n) => {
          url.searchParams.delete(n);
        });
        const newRequest = new ZuploRequest(url.toString(), request);
        return newRequest;
      }, "RemoveQueryParamsInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/replace-string-outbound/policy.js
  var ReplaceStringOutboundPolicy;
  var init_policy30 = __esm({
    "packages/runtime/dist/policies/replace-string-outbound/policy.js"() {
      "use strict";
      ReplaceStringOutboundPolicy = /* @__PURE__ */ __name(async (response, request, context, options) => {
        const body = await response.text();
        const replaceFragment = options.mode === "regexp" ? new RegExp(options.match, "gm") : options.match;
        const content = body.replaceAll(replaceFragment, options.replaceWith);
        return new Response(content, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText
        });
      }, "ReplaceStringOutboundPolicy");
    }
  });

  // packages/runtime/dist/policies/request-size-limit-inbound/policy.js
  var payloadTooLarge, RequestSizeLimitInboundPolicy;
  var init_policy31 = __esm({
    "packages/runtime/dist/policies/request-size-limit-inbound/policy.js"() {
      "use strict";
      payloadTooLarge = /* @__PURE__ */ __name(() => {
        return new Response(`Maximum request size exceeded`, {
          status: 413,
          statusText: "Payload Too Large"
        });
      }, "payloadTooLarge");
      RequestSizeLimitInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        const trustContentLengthHeader = options.trustContentLengthHeader ?? false;
        if (["GET", "HEAD"].includes(request.method)) {
          return request;
        }
        const contentLengthHeader = request.headers.get("content-length");
        const contentLength = contentLengthHeader !== null ? parseInt(contentLengthHeader) : void 0;
        if (contentLength && !isNaN(contentLength) && contentLength > options.maxSizeInBytes) {
          return payloadTooLarge();
        }
        if (contentLength && trustContentLengthHeader) {
          return request;
        }
        const clone2 = request.clone();
        const body = await clone2.text();
        const len = body.length;
        if (len > options.maxSizeInBytes) {
          return payloadTooLarge();
        }
        return request;
      }, "RequestSizeLimitInboundPolicy");
    }
  });

  // packages/runtime/dist/utils/open-api-utils.js
  function getRawOperationDataIdentifierName(oasFileName, path, operation) {
    return `_${sanitizedIdentifierName(oasFileName + "_" + path + "_" + operation)}`;
  }
  function getIdForParameterSchema(path, operation, type, name) {
    return `_${sanitizedIdentifierName(path.toLowerCase())}_` + operation.toLowerCase() + "_" + type.toLowerCase() + `_${name.toLowerCase()}`;
  }
  function getIdForRequestBodySchema(path, operation, contentType) {
    return `_${sanitizedIdentifierName(path.toLowerCase())}_` + operation.toLowerCase() + `_rb_${sanitizedIdentifierName(contentType.toLowerCase())}`;
  }
  function getIdForRefSchema(oasFileName, ref) {
    return `_${sanitizedIdentifierName(oasFileName)}__${sanitizedIdentifierName(ref)}`;
  }
  function sanitizedIdentifierName(name) {
    const sanitizedString = [];
    for (let i = 0; i < name.length; i++) {
      const charCode = name.charCodeAt(i);
      if (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0) || charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) || charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
        sanitizedString.push(name.charAt(i));
      } else {
        sanitizedString.push("_");
      }
    }
    return sanitizedString.join("");
  }
  var init_open_api_utils = __esm({
    "packages/runtime/dist/utils/open-api-utils.js"() {
      "use strict";
      __name(getRawOperationDataIdentifierName, "getRawOperationDataIdentifierName");
      __name(getIdForParameterSchema, "getIdForParameterSchema");
      __name(getIdForRequestBodySchema, "getIdForRequestBodySchema");
      __name(getIdForRefSchema, "getIdForRefSchema");
      __name(sanitizedIdentifierName, "sanitizedIdentifierName");
    }
  });

  // packages/runtime/dist/utils/request-validation/common.js
  var getParametersForOperation, validateParameters, logErrors, shouldLog, shouldReject, getErrorsFromValidator;
  var init_common2 = __esm({
    "packages/runtime/dist/utils/request-validation/common.js"() {
      "use strict";
      init_gateway();
      init_open_api_utils();
      getParametersForOperation = /* @__PURE__ */ __name((context) => {
        const openApi = context.route.raw();
        if (!openApi.parameters) {
          return [];
        }
        const methodParams = openApi.parameters.map((p) => {
          return {
            name: p.name,
            location: p.in,
            required: p.required,
            deprecated: p.deprecated,
            allowEmptyValue: p.allowEmptyValue
          };
        });
        return methodParams;
      }, "getParametersForOperation");
      validateParameters = /* @__PURE__ */ __name((parametersFromSpec, parametersFromRequest, path, method, location) => {
        const errors = [];
        let isValid = true;
        const invalidValues = [];
        parametersFromSpec.forEach((p) => {
          const isRequiredParam = p.required || location === "path";
          if (isRequiredParam && !parametersFromRequest[p.name]) {
            isValid = false;
            errors.push(`Required ${location} parameter '${p.name}' not found`);
          } else if (!isRequiredParam && !parametersFromRequest[p.name]) {
          } else {
            const paramValidationId = getIdForParameterSchema(path, method, location, p.name);
            const paramValidator = Gateway.instance.schemaValidator[paramValidationId];
            const isValidParams = paramValidator(parametersFromRequest[p.name]);
            const validationErrors = getErrorsFromValidator(paramValidator.errors);
            if (!isValidParams) {
              isValid = false;
              invalidValues.push(`${location} parameter: ${p.name} : ${parametersFromRequest[p.name]}`);
              errors.push(`Invalid value for ${location} parameter: '${p.name}' ${validationErrors.join(", ")}`);
            }
          }
        });
        return { isValid, invalidValues, errors };
      }, "validateParameters");
      logErrors = /* @__PURE__ */ __name((context, logLevel, logMessage, invalidValues, errors) => {
        if (invalidValues) {
          context.log[logLevel](logMessage, invalidValues, errors);
        } else {
          context.log[logLevel](logMessage, errors);
        }
      }, "logErrors");
      shouldLog = /* @__PURE__ */ __name((options) => {
        return options === "log-only" || options === "reject-and-log";
      }, "shouldLog");
      shouldReject = /* @__PURE__ */ __name((options) => {
        return options === "reject-only" || options === "reject-and-log";
      }, "shouldReject");
      getErrorsFromValidator = /* @__PURE__ */ __name((errors) => {
        return errors?.map((err) => {
          if (err.instancePath === void 0 || err.instancePath === "") {
            return err.message ?? "Unknown validation error";
          } else {
            return err.instancePath.replace("/", "") + " " + err.message;
          }
        }) ?? ["Unknown validation error"];
      }, "getErrorsFromValidator");
    }
  });

  // packages/runtime/dist/utils/request-validation/body.js
  async function handleBodyValidation(context, request, options) {
    if (!options.validateBody || options.validateBody === "none") {
      return;
    }
    let body;
    try {
      const clone2 = request.clone();
      body = await clone2.json();
    } catch (error) {
      const errorMessage = `Error in request body for method : ${request.method} in route: ${context.route.path} with content-type: ${request.headers.get("Content-Type")}`;
      const response2 = HttpProblems.badRequest(request, context, {
        detail: `${errorMessage}, see errors property for more details`,
        errors: `${error}`
      });
      if (shouldLog(options.validateBody)) {
        logErrors(context, options.logLevel ?? "info", errorMessage, [body], error);
      }
      if (shouldReject(options.validateBody)) {
        return response2;
      }
    }
    if (!request.headers.get("Content-Type")) {
      const errorMessage = `No content-type header defined in incoming request to ${request.method} in route: ${context.route.path}`;
      const response2 = HttpProblems.badRequest(request, context, {
        detail: errorMessage
      });
      if (shouldLog(options.validateBody)) {
        logErrors(context, options.logLevel ?? "info", errorMessage, [body], [errorMessage]);
      }
      if (shouldReject(options.validateBody)) {
        return response2;
      } else {
        return;
      }
    }
    let contentType = request.headers.get("Content-Type");
    const indexOfSemiColon = contentType.indexOf(";");
    if (indexOfSemiColon > -1) {
      contentType = contentType.substring(0, indexOfSemiColon);
    }
    const id = getIdForRequestBodySchema(context.route.path, request.method, contentType);
    const schemaValidator = Gateway.instance.schemaValidator[id];
    if (!schemaValidator) {
      const errorMessage = `No schema defined for method: ${request.method} in route: ${context.route.path} with content-type: ${request.headers.get("Content-Type")}`;
      const response2 = HttpProblems.badRequest(request, context, {
        detail: errorMessage
      });
      if (shouldLog(options.validateBody)) {
        logErrors(context, options.logLevel ?? "info", errorMessage, [body], [errorMessage]);
      }
      if (shouldReject(options.validateBody)) {
        return response2;
      } else {
        return;
      }
    }
    const isValid = schemaValidator(body);
    if (isValid) {
      return;
    }
    const schemaErrors = schemaValidator.errors;
    const logMessage = "Request body did not pass validation";
    const errors = getErrorsFromValidator(schemaErrors);
    const response = HttpProblems.badRequest(request, context, {
      detail: `${logMessage}, see errors property for more details`,
      errors
    });
    if (shouldLog(options.validateBody)) {
      logErrors(context, options.logLevel ?? "info", logMessage, [body], errors);
    }
    if (shouldReject(options.validateBody)) {
      return response;
    }
  }
  var init_body = __esm({
    "packages/runtime/dist/utils/request-validation/body.js"() {
      "use strict";
      init_gateway();
      init_http_problems();
      init_open_api_utils();
      init_common2();
      __name(handleBodyValidation, "handleBodyValidation");
    }
  });

  // packages/runtime/dist/utils/request-validation/headers.js
  function handleHeadersValidation(context, request, options) {
    if (!options.validateHeaders || options.validateHeaders === "none") {
      return;
    }
    const headers = {};
    request.headers.forEach((value, name) => {
      headers[name] = value;
    });
    const parameters = getParametersForOperation(context);
    const result = validateParameters(parameters.filter((p) => p.location === "header"), headers, context.route.path, request.method.toLowerCase(), "header");
    if (!result.isValid) {
      const logMessage = "Header validation failed";
      const response = HttpProblems.badRequest(request, context, {
        detail: `${logMessage}, see errors property for more details`,
        errors: result.errors
      });
      if (shouldLog(options.validateHeaders)) {
        logErrors(context, options.logLevel ?? "info", logMessage, result.invalidValues, result.errors);
      }
      if (shouldReject(options.validateHeaders)) {
        return response;
      }
    }
  }
  var init_headers = __esm({
    "packages/runtime/dist/utils/request-validation/headers.js"() {
      "use strict";
      init_http_problems();
      init_common2();
      __name(handleHeadersValidation, "handleHeadersValidation");
    }
  });

  // packages/runtime/dist/utils/request-validation/path-parameters.js
  function handlePathParameterValidation(context, request, options) {
    if (!options.validatePathParameters || options.validatePathParameters === "none") {
      return;
    }
    const parameters = getParametersForOperation(context);
    const result = validateParameters(parameters.filter((p) => p.location === "path"), request.params, context.route.path, request.method.toLowerCase(), "path");
    if (!result.isValid) {
      const logMessage = "Path parameters validation failed";
      const response = HttpProblems.badRequest(request, context, {
        detail: `${logMessage}, see errors property for more details`,
        errors: result.errors
      });
      if (shouldLog(options.validatePathParameters)) {
        logErrors(context, options.logLevel ?? "info", logMessage, result.invalidValues, result.errors);
      }
      if (shouldReject(options.validatePathParameters)) {
        return response;
      }
    }
  }
  var init_path_parameters = __esm({
    "packages/runtime/dist/utils/request-validation/path-parameters.js"() {
      "use strict";
      init_http_problems();
      init_common2();
      __name(handlePathParameterValidation, "handlePathParameterValidation");
    }
  });

  // packages/runtime/dist/utils/request-validation/query-parameters.js
  function handleQueryParameterValidation(context, request, options) {
    if (!options.validateQueryParameters || options.validateQueryParameters === "none") {
      return;
    }
    const parameters = getParametersForOperation(context);
    const result = validateParameters(parameters.filter((p) => p.location === "query"), request.query, context.route.path, request.method.toLowerCase(), "query");
    if (!result.isValid) {
      const logMessage = "Query parameters validation failed";
      const response = HttpProblems.badRequest(request, context, {
        detail: `${logMessage}, see errors property for more details`,
        errors: result.errors
      });
      if (shouldLog(options.validateQueryParameters)) {
        logErrors(context, options.logLevel ?? "info", logMessage, result.invalidValues, result.errors);
      }
      if (shouldReject(options.validateQueryParameters)) {
        return response;
      }
    }
  }
  var init_query_parameters = __esm({
    "packages/runtime/dist/utils/request-validation/query-parameters.js"() {
      "use strict";
      init_http_problems();
      init_common2();
      __name(handleQueryParameterValidation, "handleQueryParameterValidation");
    }
  });

  // packages/runtime/dist/policies/request-validation-inbound/policy.js
  var RequestValidationInboundPolicy, SchemaBasedRequestValidation;
  var init_policy32 = __esm({
    "packages/runtime/dist/policies/request-validation-inbound/policy.js"() {
      "use strict";
      init_body();
      init_headers();
      init_path_parameters();
      init_query_parameters();
      RequestValidationInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        let responseResult = handleQueryParameterValidation(context, request, options);
        if (responseResult !== void 0) {
          return responseResult;
        }
        responseResult = handlePathParameterValidation(context, request, options);
        if (responseResult !== void 0) {
          return responseResult;
        }
        responseResult = handleHeadersValidation(context, request, options);
        if (responseResult !== void 0) {
          return responseResult;
        }
        const responseResultForBody = await handleBodyValidation(context, request, options);
        if (responseResultForBody !== void 0) {
          return responseResultForBody;
        }
        return request;
      }, "RequestValidationInboundPolicy");
      SchemaBasedRequestValidation = RequestValidationInboundPolicy;
    }
  });

  // packages/runtime/dist/policies/require-origin-inbound/policy.js
  var RequireOriginInboundPolicy;
  var init_policy33 = __esm({
    "packages/runtime/dist/policies/require-origin-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_http_problems();
      RequireOriginInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        if (options.origins === void 0 || options.origins.length === 0) {
          throw new ConfigurationError(`RequireOriginInboundPolicy '${policyName}' configuration error - no allowed origins specified`);
        }
        let origins = typeof options.origins === "string" ? options.origins.split(",") : options.origins;
        origins = origins.map((o) => o.trim());
        const origin = request.headers.get("origin");
        if (!origin || !origins.includes(origin)) {
          const detail = options.failureDetail ?? "Forbidden";
          return HttpProblems.forbidden(request, context, { detail });
        }
        return request;
      }, "RequireOriginInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/set-body-inbound/policy.js
  var SetBodyInboundPolicy;
  var init_policy34 = __esm({
    "packages/runtime/dist/policies/set-body-inbound/policy.js"() {
      "use strict";
      init_request();
      SetBodyInboundPolicy = /* @__PURE__ */ __name(async (request, context, options) => {
        return new ZuploRequest(request, {
          body: options.body
        });
      }, "SetBodyInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/set-headers-inbound/policy.js
  var SetHeadersInboundPolicy;
  var init_policy35 = __esm({
    "packages/runtime/dist/policies/set-headers-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_request();
      SetHeadersInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const setHeaders = options.headers;
        if (!setHeaders || !Array.isArray(setHeaders) || setHeaders.length == 0) {
          throw new ConfigurationError(`SetHeadersInboundPolicy '${policyName}' options.headers must be a valid array of { name, value }`);
        }
        const newHeaders = new Headers(request.headers);
        setHeaders.forEach((h) => {
          if (!h.name || h.name.length === 0) {
            throw new ConfigurationError(`SetHeadersInboundPolicy '${policyName}' each option.headers[] entry must have a name property`);
          }
          const overwrite = h.overwrite === void 0 ? true : h.overwrite;
          const hasHeader = newHeaders.has(h.name);
          if (!hasHeader || overwrite) {
            newHeaders.set(h.name, h.value);
          }
        });
        const newRequest = new ZuploRequest(request, {
          headers: newHeaders
        });
        return newRequest;
      }, "SetHeadersInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/set-headers-outbound/policy.js
  var SetHeadersOutboundPolicy;
  var init_policy36 = __esm({
    "packages/runtime/dist/policies/set-headers-outbound/policy.js"() {
      "use strict";
      init_errors();
      SetHeadersOutboundPolicy = /* @__PURE__ */ __name(async (response, request, context, options, policyName) => {
        const setHeaders = options.headers;
        if (!setHeaders || !Array.isArray(setHeaders) || setHeaders.length == 0) {
          throw new ConfigurationError(`SetHeadersOutboundPolicy '${policyName}' options.headers must be a valid array of { name, value }`);
        }
        const newHeaders = new Headers(response.headers);
        setHeaders.forEach((h) => {
          if (!h.name || h.name.length === 0) {
            throw new ConfigurationError(`SetHeadersOutboundPolicy '${policyName}' each option.headers[] entry must have a name property`);
          }
          const overwrite = h.overwrite === void 0 ? true : h.overwrite;
          const hasHeader = newHeaders.has(h.name);
          if (!hasHeader || overwrite) {
            newHeaders.set(h.name, h.value);
          }
        });
        const newResponse = new Response(response.body, {
          headers: newHeaders,
          status: response.status,
          statusText: response.statusText
        });
        return newResponse;
      }, "SetHeadersOutboundPolicy");
    }
  });

  // packages/runtime/dist/policies/set-query-params-inbound/policy.js
  var SetQueryParamsInboundPolicy;
  var init_policy37 = __esm({
    "packages/runtime/dist/policies/set-query-params-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_request();
      SetQueryParamsInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        const setParams = options.params;
        if (!setParams || !Array.isArray(setParams) || setParams.length == 0) {
          throw new ConfigurationError(`SetQueryParamsInboundPolicy '${policyName}' options.params must be a valid array of { name, value }`);
        }
        const url = new URL(request.url);
        setParams.forEach((p) => {
          if (!p.name || p.name.length === 0) {
            throw new ConfigurationError(`SetQueryParamsInboundPolicy '${policyName}' each option.params[] entry must have a name property`);
          }
          const overwrite = p.overwrite === void 0 ? true : p.overwrite;
          const hasParam = url.searchParams.has(p.name);
          if (!hasParam || overwrite) {
            url.searchParams.set(p.name, p.value);
          }
        });
        const newRequest = new ZuploRequest(url.toString(), request);
        return newRequest;
      }, "SetQueryParamsInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/set-status-outbound/policy.js
  var SetStatusOutboundPolicy;
  var init_policy38 = __esm({
    "packages/runtime/dist/policies/set-status-outbound/policy.js"() {
      "use strict";
      SetStatusOutboundPolicy = /* @__PURE__ */ __name(async (response, request, context, options, policyName) => {
        if (!options.status || isNaN(options.status) || options.status < 100 || options.status > 599) {
          throw new Error(`Invalid SetStatusOutboundPolicy '${policyName}' - status must be a valid number between 100 and 599, not '${options.status}'`);
        }
        const newResponse = new Response(response.body, {
          headers: response.headers,
          status: options.status,
          statusText: options.statusText ?? response.statusText
        });
        return newResponse;
      }, "SetStatusOutboundPolicy");
    }
  });

  // packages/runtime/dist/policies/sleep-inbound/policy.js
  var sleep, SleepInboundPolicy;
  var init_policy39 = __esm({
    "packages/runtime/dist/policies/sleep-inbound/policy.js"() {
      "use strict";
      init_errors();
      sleep = /* @__PURE__ */ __name(async (ms) => {
        const promise = new Promise((res) => {
          setTimeout(res, ms);
        });
        return promise;
      }, "sleep");
      SleepInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        if (!options || options.sleepInMs === void 0 || isNaN(options.sleepInMs)) {
          throw new ConfigurationError(`SleepInboundPolicy '${policyName} must have a valid options.sleepInMs value`);
        }
        await sleep(options.sleepInMs);
        return request;
      }, "SleepInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/supabase-jwt-auth-inbound/policy.js
  var SupabaseJwtInboundPolicy;
  var init_policy40 = __esm({
    "packages/runtime/dist/policies/supabase-jwt-auth-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_http_problems();
      init_request();
      init_validator();
      init_policy5();
      SupabaseJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("secret", "string").optional("allowUnauthenticatedRequests", "boolean").optional("requiredClaims", "object");
        const innerOptions = {
          secret: options.secret,
          allowUnauthenticatedRequests: options.allowUnauthenticatedRequests ?? false
        };
        const result = await OpenIdJwtInboundPolicy(request, context, innerOptions, policyName);
        if (result instanceof Response) {
          return result;
        }
        if (!(result instanceof ZuploRequest)) {
          throw new SystemError(`Invalid State - SupabaseJwtInboundPolicy encountered a non-response that wasn't a ZuploRequest type')`);
        }
        const requiredClaims = options.requiredClaims;
        if (!requiredClaims) {
          return result;
        }
        const app_metadata = request.user?.data.app_metadata;
        if (!app_metadata) {
          throw new RuntimeError(`SupabaseJwtInboundPolicy policy '${policyName}' - has requiredClaims but the JWT token had no app_metadata property`);
        }
        const keys = Object.keys(requiredClaims);
        const missingClaims = [];
        keys.forEach((key) => {
          const requiredClaim = requiredClaims[key];
          if (Array.isArray(requiredClaim)) {
            if (!requiredClaim.includes(app_metadata[key])) {
              missingClaims.push(key);
            }
          } else {
            if (requiredClaim !== app_metadata[key]) {
              missingClaims.push(key);
            }
          }
        });
        if (missingClaims.length > 0) {
          return HttpProblems.unauthorized(request, context, {
            detail: `Invalid JWT token - missing valid claims ${missingClaims.join(", ")}`
          });
        }
        return result;
      }, "SupabaseJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/upstream-azure-ad-service-auth-inbound/policy.js
  async function getAccessToken(options, context) {
    const body = new URLSearchParams({
      client_id: options.activeDirectoryClientId,
      scope: `${options.activeDirectoryClientId}/.default`,
      client_secret: options.activeDirectoryClientSecret,
      grant_type: "client_credentials"
    });
    const response = await fetchRetry({
      retries: options.tokenRetries ?? 3,
      retryDelayMs: 10
    }, `https://login.microsoftonline.com/${options.activeDirectoryTenantId}/oauth2/v2.0/token`, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      body
    });
    if (response.status !== 200) {
      try {
        const text = await response.text();
        context.log.error("Could not get token from Azure AD", text);
      } catch (err) {
      }
      throw new RuntimeError("Could not get token from Azure AD");
    }
    const result = await response.json();
    if (result && typeof result === "object" && "access_token" in result && typeof result.access_token === "string" && "expires_in" in result && typeof result.expires_in === "number") {
      return {
        access_token: result.access_token,
        expires_in: result.expires_in
      };
    }
    throw new RuntimeError("Response returned from Azure AD is not in the expected format.");
  }
  var UpstreamAzureAdServiceAuthInboundPolicy;
  var init_policy41 = __esm({
    "packages/runtime/dist/policies/upstream-azure-ad-service-auth-inbound/policy.js"() {
      "use strict";
      init_keys();
      init_memory_zone_readthrough_cache();
      init_errors();
      init_retry();
      init_validator();
      UpstreamAzureAdServiceAuthInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("activeDirectoryTenantId", "string").required("activeDirectoryClientId", "string").required("activeDirectoryClientSecret", "string").optional("tokenRetries", "number").optional("expirationOffsetSeconds", "number");
        const cacheName = await getPolicyCacheName(policyName, options);
        const cache = new MemoryZoneReadThroughCache(cacheName, context);
        let accessToken = await cache.get(policyName);
        if (!accessToken) {
          const result = await getAccessToken(options, context);
          cache.put(policyName, result.access_token, result.expires_in - (options.expirationOffsetSeconds ?? 300));
          accessToken = result.access_token;
        }
        request.headers.set("Authorization", `Bearer ${accessToken}`);
        return request;
      }, "UpstreamAzureAdServiceAuthInboundPolicy");
      __name(getAccessToken, "getAccessToken");
    }
  });

  // packages/runtime/dist/policies/upstream-firebase-admin-auth-inbound/policy.js
  var GOOGLE_TOKEN_AUDIENCE, serviceAccount, UpstreamFirebaseAdminAuthInboundPolicy;
  var init_policy42 = __esm({
    "packages/runtime/dist/policies/upstream-firebase-admin-auth-inbound/policy.js"() {
      "use strict";
      init_keys();
      init_memory_zone_readthrough_cache();
      init_errors();
      init_gcp();
      init_validator();
      GOOGLE_TOKEN_AUDIENCE = "https://accounts.google.com/o/oauth2/token";
      UpstreamFirebaseAdminAuthInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("serviceAccountJson", "string");
        if (!serviceAccount) {
          serviceAccount = await GcpServiceAccount.init(options.serviceAccountJson);
        }
        const payload = {
          scope: [
            "https://www.googleapis.com/auth/cloud-platform",
            "https://www.googleapis.com/auth/firebase.database",
            "https://www.googleapis.com/auth/firebase.messaging",
            "https://www.googleapis.com/auth/identitytoolkit",
            "https://www.googleapis.com/auth/userinfo.email"
          ].join(" ")
        };
        const cacheName = await getPolicyCacheName(policyName, options);
        const cache = new MemoryZoneReadThroughCache(cacheName, context);
        let token = await cache.get(policyName);
        if (!token) {
          const jwt = await getTokenFromGcpServiceAccount({
            serviceAccount,
            audience: GOOGLE_TOKEN_AUDIENCE,
            payload
          });
          const response = await exchangeGgpJwtForIdToken(GOOGLE_TOKEN_AUDIENCE, jwt, { retries: options.tokenRetries ?? 3, retryDelayMs: 10 });
          if (!response.access_token) {
            throw new RuntimeError("Invalid OAuth response from Firebase");
          }
          token = response.access_token;
          cache.put(policyName, token, (response.expires_in ?? 3600) - (options.expirationOffsetSeconds ?? 300));
        }
        request.headers.set("Authorization", `Bearer ${token}`);
        return request;
      }, "UpstreamFirebaseAdminAuthInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/upstream-firebase-user-auth-inbound/policy.js
  var FIREBASE_AUDIENCE, RESERVED_CLAIMS, serviceAccount2, UpstreamFirebaseUserAuthInboundPolicy;
  var init_policy43 = __esm({
    "packages/runtime/dist/policies/upstream-firebase-user-auth-inbound/policy.js"() {
      "use strict";
      init_keys();
      init_memory_zone_readthrough_cache();
      init_errors();
      init_crypto();
      init_gcp();
      init_options_parsing();
      init_validator();
      FIREBASE_AUDIENCE = "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit";
      RESERVED_CLAIMS = [
        "acr",
        "amr",
        "at_hash",
        "aud",
        "auth_time",
        "azp",
        "cnf",
        "c_hash",
        "exp",
        "iat",
        "iss",
        "jti",
        "nbf",
        "nonce"
      ];
      UpstreamFirebaseUserAuthInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("serviceAccountJson", "string").required("webApiKey", "string").optional("developerClaims", "object").optional("userId", "string").optional("userIdPropertyPath", "string");
        if (!options.userId && !options.userIdPropertyPath) {
          throw new ConfigurationError(`Either 'userId' or 'userIdPropertyPath' options must be set on policy '${policyName}'.`);
        }
        const claims = {};
        if (typeof options.developerClaims !== "undefined") {
          for (const key2 in options.developerClaims) {
            if (Object.prototype.hasOwnProperty.call(options.developerClaims, key2)) {
              if (RESERVED_CLAIMS.indexOf(key2) !== -1) {
                throw new ConfigurationError(`Developer claim "${key2}" is reserved and cannot be specified.`);
              }
              claims[key2] = options.developerClaims[key2];
            }
          }
        }
        if (!serviceAccount2) {
          serviceAccount2 = await GcpServiceAccount.init(options.serviceAccountJson);
        }
        let userId = options.userId;
        if (!userId && !options.userIdPropertyPath) {
          if (!request.user) {
            throw new RuntimeError(`Unable to set userId for upstream auth policy as request.user is 'undefined'. Do you have an authentication policy before this policy?.`);
          }
          userId = request.user?.sub;
        } else if (options.userIdPropertyPath) {
          if (!request.user) {
            throw new RuntimeError(`Unable to apply userIdPropertyPath '${options.userIdPropertyPath}' as request.user is 'undefined'. Do you have an authentication policy before this policy?`);
          }
          userId = getValueFromRequestUser(request.user, options.userIdPropertyPath, "userIdPropertyPath");
        }
        if (!userId) {
          throw new RuntimeError(`Unable to determine user from for the policy ${policyName}`);
        }
        const cacheName = await getPolicyCacheName(policyName, options);
        const cache = new MemoryZoneReadThroughCache(cacheName, context);
        const payload = {
          uid: userId,
          claims
        };
        const key = await sha256(JSON.stringify(payload));
        let token = await cache.get(key);
        if (!token) {
          const jwt = await getTokenFromGcpServiceAccount({
            serviceAccount: serviceAccount2,
            audience: FIREBASE_AUDIENCE,
            payload
          });
          const oauthUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${options.webApiKey}`;
          const response = await exchangeFirebaseJwtForIdToken(oauthUrl, jwt, {
            retries: options.tokenRetries ?? 3,
            retryDelayMs: 10
          });
          if (!response.idToken) {
            throw new RuntimeError("Invalid token response from Firebase");
          }
          token = response.idToken;
          cache.put(key, token, (response.expiresIn ? parseInt(response.expiresIn) : 3600) - (options.expirationOffsetSeconds ?? 300));
        }
        request.headers.set("Authorization", `Bearer ${token}`);
        return request;
      }, "UpstreamFirebaseUserAuthInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/upstream-gcp-jwt-inbound/policy.js
  var serviceAccount3, UpstreamGcpJwtInboundPolicy;
  var init_policy44 = __esm({
    "packages/runtime/dist/policies/upstream-gcp-jwt-inbound/policy.js"() {
      "use strict";
      init_gcp();
      init_validator();
      UpstreamGcpJwtInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("audience", "string").required("serviceAccountJson", "string");
        if (!serviceAccount3) {
          serviceAccount3 = await GcpServiceAccount.init(options.serviceAccountJson);
        }
        const jwt = await getTokenFromGcpServiceAccount({
          serviceAccount: serviceAccount3,
          audience: options.audience
        });
        request.headers.set("Authorization", `Bearer ${jwt}`);
        return request;
      }, "UpstreamGcpJwtInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/upstream-gcp-service-auth-inbound/policy.js
  var GOOGLE_OAUTH_URL, serviceAccount4, UpstreamGcpServiceAuthInboundPolicy;
  var init_policy45 = __esm({
    "packages/runtime/dist/policies/upstream-gcp-service-auth-inbound/policy.js"() {
      "use strict";
      init_keys();
      init_memory_cache();
      init_memory_zone_readthrough_cache();
      init_errors();
      init_gcp();
      init_options_parsing();
      init_validator();
      GOOGLE_OAUTH_URL = "https://www.googleapis.com/oauth2/v4/token";
      UpstreamGcpServiceAuthInboundPolicy = /* @__PURE__ */ __name(async (request, context, options, policyName) => {
        optionValidator(options, policyName).required("serviceAccountJson", "string").optional("audience", "string").optional("tokenRetries", "number").optional("expirationOffsetSeconds", "number");
        if (!serviceAccount4) {
          serviceAccount4 = await GcpServiceAccount.init(options.serviceAccountJson);
        }
        const payload = {};
        if (options.scopes && options.audience) {
          throw new ConfigurationError(`UpstreamGcpServiceAuthInboundPolicy - Either the 'scopes' or the 'audience' property can be set, not both.`);
        }
        if (options.scopes) {
          try {
            const scopes = parseValueToStringArray(options.scopes);
            payload.scope = scopes.join(" ");
          } catch (err) {
            if (err instanceof ConfigurationError) {
              throw new ConfigurationError(`UpstreamGcpServiceAuthInboundPolicy - The property 'scopes' is invalid. ${err.message}`);
            }
            throw err;
          }
        }
        if (options.audience) {
          payload.target_audience = `${options.audience}`;
        }
        const cacheName = await getPolicyCacheName(policyName, options);
        let cache;
        if (options.useMemoryCacheOnly) {
          cache = new MemoryCache(cacheName);
        } else {
          cache = new MemoryZoneReadThroughCache(cacheName, context);
        }
        let token = await cache.get(policyName);
        if (!token) {
          const jwt = await getTokenFromGcpServiceAccount({
            serviceAccount: serviceAccount4,
            audience: GOOGLE_OAUTH_URL,
            payload
          });
          const tokenResponse = await exchangeGgpJwtForIdToken(GOOGLE_OAUTH_URL, jwt, {
            retries: options.tokenRetries ?? 3,
            retryDelayMs: 10
          });
          if (options.audience) {
            if (!tokenResponse.id_token) {
              throw new RuntimeError("Invalid token response from GCP");
            }
            token = tokenResponse.id_token;
          } else {
            if (!tokenResponse.access_token) {
              throw new RuntimeError("Invalid token response from GCP");
            }
            token = tokenResponse.access_token;
          }
          cache.put(
            policyName,
            token,
            // GCP tokens are valid for 1 hour
            3600 - (options.expirationOffsetSeconds ?? 300)
          );
        }
        request.headers.set("Authorization", `Bearer ${token}`);
        return request;
      }, "UpstreamGcpServiceAuthInboundPolicy");
    }
  });

  // packages/runtime/dist/policies/validate-json-schema-inbound/policy.js
  var ValidateJsonSchemaInbound;
  var init_policy46 = __esm({
    "packages/runtime/dist/policies/validate-json-schema-inbound/policy.js"() {
      "use strict";
      init_errors();
      init_http_problems();
      ValidateJsonSchemaInbound = /* @__PURE__ */ __name(async (request, context, options) => {
        const clone2 = request.clone();
        let body;
        try {
          body = await clone2.json();
        } catch (err) {
          return HttpProblems.badRequest(request, context, {
            detail: "Invalid JSON body - expected well-formed JSON document"
          });
        }
        const isValid = options.validator(body);
        if (isValid) {
          return request;
        }
        const { errors } = options.validator;
        if (!errors) {
          throw new SystemError("Invalid state - validator error object is undefined even though validation failed.");
        }
        const messages = errors.map((err) => {
          if (err.instancePath === void 0 || err.instancePath === "") {
            return "Body " + err.message;
          } else {
            return err.instancePath.replace("/", "") + " " + err.message;
          }
        });
        return HttpProblems.badRequest(request, context, {
          detail: "Incoming body did not pass schema validation",
          errors: messages
        });
      }, "ValidateJsonSchemaInbound");
    }
  });

  // packages/runtime/dist/third-party/fast-xml-parser/index.js
  var require_fast_xml_parser = __commonJS({
    "packages/runtime/dist/third-party/fast-xml-parser/index.js"(exports, module) {
      "use strict";
      var __defProp2 = Object.defineProperty;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
      var __commonJS2 = /* @__PURE__ */ __name((cb, mod) => /* @__PURE__ */ __name(function __require() {
        return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      }, "__require"), "__commonJS");
      var require_util = __commonJS2({
        "node_modules/fast-xml-parser/src/util.js"(exports2) {
          "use strict";
          var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
          var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
          var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
          var regexName = new RegExp("^" + nameRegexp + "$");
          var getAllMatches = /* @__PURE__ */ __name2(function(string, regex) {
            const matches = [];
            let match = regex.exec(string);
            while (match) {
              const allmatches = [];
              allmatches.startIndex = regex.lastIndex - match[0].length;
              const len = match.length;
              for (let index = 0; index < len; index++) {
                allmatches.push(match[index]);
              }
              matches.push(allmatches);
              match = regex.exec(string);
            }
            return matches;
          }, "getAllMatches");
          var isName = /* @__PURE__ */ __name2(function(string) {
            const match = regexName.exec(string);
            return !(match === null || typeof match === "undefined");
          }, "isName");
          exports2.isExist = function(v) {
            return typeof v !== "undefined";
          };
          exports2.isEmptyObject = function(obj) {
            return Object.keys(obj).length === 0;
          };
          exports2.merge = function(target, a, arrayMode) {
            if (a) {
              const keys = Object.keys(a);
              const len = keys.length;
              for (let i = 0; i < len; i++) {
                if (arrayMode === "strict") {
                  target[keys[i]] = [a[keys[i]]];
                } else {
                  target[keys[i]] = a[keys[i]];
                }
              }
            }
          };
          exports2.getValue = function(v) {
            if (exports2.isExist(v)) {
              return v;
            } else {
              return "";
            }
          };
          exports2.isName = isName;
          exports2.getAllMatches = getAllMatches;
          exports2.nameRegexp = nameRegexp;
        }
      });
      var require_validator = __commonJS2({
        "node_modules/fast-xml-parser/src/validator.js"(exports2) {
          "use strict";
          var util = require_util();
          var defaultOptions = {
            allowBooleanAttributes: false,
            //A tag can have attributes without any value
            unpairedTags: []
          };
          exports2.validate = function(xmlData, options) {
            options = Object.assign({}, defaultOptions, options);
            const tags = [];
            let tagFound = false;
            let reachedRoot = false;
            if (xmlData[0] === "\uFEFF") {
              xmlData = xmlData.substr(1);
            }
            for (let i = 0; i < xmlData.length; i++) {
              if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
                i += 2;
                i = readPI(xmlData, i);
                if (i.err)
                  return i;
              } else if (xmlData[i] === "<") {
                let tagStartPos = i;
                i++;
                if (xmlData[i] === "!") {
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else {
                  let closingTag = false;
                  if (xmlData[i] === "/") {
                    closingTag = true;
                    i++;
                  }
                  let tagName = "";
                  for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
                    tagName += xmlData[i];
                  }
                  tagName = tagName.trim();
                  if (tagName[tagName.length - 1] === "/") {
                    tagName = tagName.substring(0, tagName.length - 1);
                    i--;
                  }
                  if (!validateTagName(tagName)) {
                    let msg;
                    if (tagName.trim().length === 0) {
                      msg = "Invalid space after '<'.";
                    } else {
                      msg = "Tag '" + tagName + "' is an invalid name.";
                    }
                    return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
                  }
                  const result = readAttributeStr(xmlData, i);
                  if (result === false) {
                    return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
                  }
                  let attrStr = result.value;
                  i = result.index;
                  if (attrStr[attrStr.length - 1] === "/") {
                    const attrStrStart = i - attrStr.length;
                    attrStr = attrStr.substring(0, attrStr.length - 1);
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid === true) {
                      tagFound = true;
                    } else {
                      return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                    }
                  } else if (closingTag) {
                    if (!result.tagClosed) {
                      return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                    } else if (attrStr.trim().length > 0) {
                      return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                    } else {
                      const otg = tags.pop();
                      if (tagName !== otg.tagName) {
                        let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                        return getErrorObject("InvalidTag", "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                      }
                      if (tags.length == 0) {
                        reachedRoot = true;
                      }
                    }
                  } else {
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid !== true) {
                      return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                    }
                    if (reachedRoot === true) {
                      return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
                    } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                    } else {
                      tags.push({ tagName, tagStartPos });
                    }
                    tagFound = true;
                  }
                  for (i++; i < xmlData.length; i++) {
                    if (xmlData[i] === "<") {
                      if (xmlData[i + 1] === "!") {
                        i++;
                        i = readCommentAndCDATA(xmlData, i);
                        continue;
                      } else if (xmlData[i + 1] === "?") {
                        i = readPI(xmlData, ++i);
                        if (i.err)
                          return i;
                      } else {
                        break;
                      }
                    } else if (xmlData[i] === "&") {
                      const afterAmp = validateAmpersand(xmlData, i);
                      if (afterAmp == -1)
                        return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                      i = afterAmp;
                    } else {
                      if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                        return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                      }
                    }
                  }
                  if (xmlData[i] === "<") {
                    i--;
                  }
                }
              } else {
                if (isWhiteSpace(xmlData[i])) {
                  continue;
                }
                return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
              }
            }
            if (!tagFound) {
              return getErrorObject("InvalidXml", "Start tag expected.", 1);
            } else if (tags.length == 1) {
              return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
            } else if (tags.length > 0) {
              return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
            }
            return true;
          };
          function isWhiteSpace(char) {
            return char === " " || char === "	" || char === "\n" || char === "\r";
          }
          __name(isWhiteSpace, "isWhiteSpace");
          __name2(isWhiteSpace, "isWhiteSpace");
          function readPI(xmlData, i) {
            const start = i;
            for (; i < xmlData.length; i++) {
              if (xmlData[i] == "?" || xmlData[i] == " ") {
                const tagname = xmlData.substr(start, i - start);
                if (i > 5 && tagname === "xml") {
                  return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
                } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
                  i++;
                  break;
                } else {
                  continue;
                }
              }
            }
            return i;
          }
          __name(readPI, "readPI");
          __name2(readPI, "readPI");
          function readCommentAndCDATA(xmlData, i) {
            if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
              for (i += 3; i < xmlData.length; i++) {
                if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
                  i += 2;
                  break;
                }
              }
            } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
              let angleBracketsCount = 1;
              for (i += 8; i < xmlData.length; i++) {
                if (xmlData[i] === "<") {
                  angleBracketsCount++;
                } else if (xmlData[i] === ">") {
                  angleBracketsCount--;
                  if (angleBracketsCount === 0) {
                    break;
                  }
                }
              }
            } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
              for (i += 8; i < xmlData.length; i++) {
                if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
                  i += 2;
                  break;
                }
              }
            }
            return i;
          }
          __name(readCommentAndCDATA, "readCommentAndCDATA");
          __name2(readCommentAndCDATA, "readCommentAndCDATA");
          var doubleQuote = '"';
          var singleQuote = "'";
          function readAttributeStr(xmlData, i) {
            let attrStr = "";
            let startChar = "";
            let tagClosed = false;
            for (; i < xmlData.length; i++) {
              if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
                if (startChar === "") {
                  startChar = xmlData[i];
                } else if (startChar !== xmlData[i]) {
                } else {
                  startChar = "";
                }
              } else if (xmlData[i] === ">") {
                if (startChar === "") {
                  tagClosed = true;
                  break;
                }
              }
              attrStr += xmlData[i];
            }
            if (startChar !== "") {
              return false;
            }
            return {
              value: attrStr,
              index: i,
              tagClosed
            };
          }
          __name(readAttributeStr, "readAttributeStr");
          __name2(readAttributeStr, "readAttributeStr");
          var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
          function validateAttributeString(attrStr, options) {
            const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
            const attrNames = {};
            for (let i = 0; i < matches.length; i++) {
              if (matches[i][1].length === 0) {
                return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
              } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
                return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
              } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
                return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
              }
              const attrName = matches[i][2];
              if (!validateAttrName(attrName)) {
                return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
              }
              if (!attrNames.hasOwnProperty(attrName)) {
                attrNames[attrName] = 1;
              } else {
                return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
              }
            }
            return true;
          }
          __name(validateAttributeString, "validateAttributeString");
          __name2(validateAttributeString, "validateAttributeString");
          function validateNumberAmpersand(xmlData, i) {
            let re2 = /\d/;
            if (xmlData[i] === "x") {
              i++;
              re2 = /[\da-fA-F]/;
            }
            for (; i < xmlData.length; i++) {
              if (xmlData[i] === ";")
                return i;
              if (!xmlData[i].match(re2))
                break;
            }
            return -1;
          }
          __name(validateNumberAmpersand, "validateNumberAmpersand");
          __name2(validateNumberAmpersand, "validateNumberAmpersand");
          function validateAmpersand(xmlData, i) {
            i++;
            if (xmlData[i] === ";")
              return -1;
            if (xmlData[i] === "#") {
              i++;
              return validateNumberAmpersand(xmlData, i);
            }
            let count = 0;
            for (; i < xmlData.length; i++, count++) {
              if (xmlData[i].match(/\w/) && count < 20)
                continue;
              if (xmlData[i] === ";")
                break;
              return -1;
            }
            return i;
          }
          __name(validateAmpersand, "validateAmpersand");
          __name2(validateAmpersand, "validateAmpersand");
          function getErrorObject(code, message2, lineNumber) {
            return {
              err: {
                code,
                msg: message2,
                line: lineNumber.line || lineNumber,
                col: lineNumber.col
              }
            };
          }
          __name(getErrorObject, "getErrorObject");
          __name2(getErrorObject, "getErrorObject");
          function validateAttrName(attrName) {
            return util.isName(attrName);
          }
          __name(validateAttrName, "validateAttrName");
          __name2(validateAttrName, "validateAttrName");
          function validateTagName(tagname) {
            return util.isName(tagname);
          }
          __name(validateTagName, "validateTagName");
          __name2(validateTagName, "validateTagName");
          function getLineNumberForPosition(xmlData, index) {
            const lines = xmlData.substring(0, index).split(/\r?\n/);
            return {
              line: lines.length,
              // column number is last line's length + 1, because column numbering starts at 1:
              col: lines[lines.length - 1].length + 1
            };
          }
          __name(getLineNumberForPosition, "getLineNumberForPosition");
          __name2(getLineNumberForPosition, "getLineNumberForPosition");
          function getPositionFromMatch(match) {
            return match.startIndex + match[1].length;
          }
          __name(getPositionFromMatch, "getPositionFromMatch");
          __name2(getPositionFromMatch, "getPositionFromMatch");
        }
      });
      var require_OptionsBuilder = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports2) {
          var defaultOptions = {
            preserveOrder: false,
            attributeNamePrefix: "@_",
            attributesGroupName: false,
            textNodeName: "#text",
            ignoreAttributes: true,
            removeNSPrefix: false,
            // remove NS from tag name or attribute name if true
            allowBooleanAttributes: false,
            //a tag can have attributes without any value
            //ignoreRootElement : false,
            parseTagValue: true,
            parseAttributeValue: false,
            trimValues: true,
            //Trim string values of tag and attributes
            cdataPropName: false,
            numberParseOptions: {
              hex: true,
              leadingZeros: true,
              eNotation: true
            },
            tagValueProcessor: function(tagName, val2) {
              return val2;
            },
            attributeValueProcessor: function(attrName, val2) {
              return val2;
            },
            stopNodes: [],
            //nested tags will not be parsed even for errors
            alwaysCreateTextNode: false,
            isArray: () => false,
            commentPropName: false,
            unpairedTags: [],
            processEntities: true,
            htmlEntities: false,
            ignoreDeclaration: false,
            ignorePiTags: false,
            transformTagName: false,
            transformAttributeName: false,
            updateTag: function(tagName, jPath, attrs) {
              return tagName;
            }
            // skipEmptyListItem: false
          };
          var buildOptions = /* @__PURE__ */ __name2(function(options) {
            return Object.assign({}, defaultOptions, options);
          }, "buildOptions");
          exports2.buildOptions = buildOptions;
          exports2.defaultOptions = defaultOptions;
        }
      });
      var require_xmlNode = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports2, module2) {
          "use strict";
          var XmlNode = class {
            static {
              __name(this, "XmlNode");
            }
            static {
              __name2(this, "XmlNode");
            }
            constructor(tagname) {
              this.tagname = tagname;
              this.child = [];
              this[":@"] = {};
            }
            add(key, val2) {
              if (key === "__proto__")
                key = "#__proto__";
              this.child.push({ [key]: val2 });
            }
            addChild(node) {
              if (node.tagname === "__proto__")
                node.tagname = "#__proto__";
              if (node[":@"] && Object.keys(node[":@"]).length > 0) {
                this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
              } else {
                this.child.push({ [node.tagname]: node.child });
              }
            }
          };
          module2.exports = XmlNode;
        }
      });
      var require_DocTypeReader = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports2, module2) {
          var util = require_util();
          function readDocType(xmlData, i) {
            const entities = {};
            if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
              i = i + 9;
              let angleBracketsCount = 1;
              let hasBody = false, comment = false;
              let exp = "";
              for (; i < xmlData.length; i++) {
                if (xmlData[i] === "<" && !comment) {
                  if (hasBody && isEntity(xmlData, i)) {
                    i += 7;
                    [entityName, val, i] = readEntityExp(xmlData, i + 1);
                    if (val.indexOf("&") === -1)
                      entities[validateEntityName(entityName)] = {
                        regx: RegExp(`&${entityName};`, "g"),
                        val
                      };
                  } else if (hasBody && isElement(xmlData, i))
                    i += 8;
                  else if (hasBody && isAttlist(xmlData, i))
                    i += 8;
                  else if (hasBody && isNotation(xmlData, i))
                    i += 9;
                  else if (isComment)
                    comment = true;
                  else
                    throw new Error("Invalid DOCTYPE");
                  angleBracketsCount++;
                  exp = "";
                } else if (xmlData[i] === ">") {
                  if (comment) {
                    if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                      comment = false;
                      angleBracketsCount--;
                    }
                  } else {
                    angleBracketsCount--;
                  }
                  if (angleBracketsCount === 0) {
                    break;
                  }
                } else if (xmlData[i] === "[") {
                  hasBody = true;
                } else {
                  exp += xmlData[i];
                }
              }
              if (angleBracketsCount !== 0) {
                throw new Error(`Unclosed DOCTYPE`);
              }
            } else {
              throw new Error(`Invalid Tag instead of DOCTYPE`);
            }
            return { entities, i };
          }
          __name(readDocType, "readDocType");
          __name2(readDocType, "readDocType");
          function readEntityExp(xmlData, i) {
            let entityName2 = "";
            for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
              entityName2 += xmlData[i];
            }
            entityName2 = entityName2.trim();
            if (entityName2.indexOf(" ") !== -1)
              throw new Error("External entites are not supported");
            const startChar = xmlData[i++];
            let val2 = "";
            for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
              val2 += xmlData[i];
            }
            return [entityName2, val2, i];
          }
          __name(readEntityExp, "readEntityExp");
          __name2(readEntityExp, "readEntityExp");
          function isComment(xmlData, i) {
            if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-")
              return true;
            return false;
          }
          __name(isComment, "isComment");
          __name2(isComment, "isComment");
          function isEntity(xmlData, i) {
            if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y")
              return true;
            return false;
          }
          __name(isEntity, "isEntity");
          __name2(isEntity, "isEntity");
          function isElement(xmlData, i) {
            if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T")
              return true;
            return false;
          }
          __name(isElement, "isElement");
          __name2(isElement, "isElement");
          function isAttlist(xmlData, i) {
            if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T")
              return true;
            return false;
          }
          __name(isAttlist, "isAttlist");
          __name2(isAttlist, "isAttlist");
          function isNotation(xmlData, i) {
            if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N")
              return true;
            return false;
          }
          __name(isNotation, "isNotation");
          __name2(isNotation, "isNotation");
          function validateEntityName(name) {
            if (util.isName(name))
              return name;
            else
              throw new Error(`Invalid entity name ${name}`);
          }
          __name(validateEntityName, "validateEntityName");
          __name2(validateEntityName, "validateEntityName");
          module2.exports = readDocType;
        }
      });
      var require_strnum = __commonJS2({
        "../../node_modules/strnum/strnum.js"(exports2, module2) {
          var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
          var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
          if (!Number.parseInt && window.parseInt) {
            Number.parseInt = window.parseInt;
          }
          if (!Number.parseFloat && window.parseFloat) {
            Number.parseFloat = window.parseFloat;
          }
          var consider = {
            hex: true,
            leadingZeros: true,
            decimalPoint: ".",
            eNotation: true
            //skipLike: /regex/
          };
          function toNumber(str, options = {}) {
            options = Object.assign({}, consider, options);
            if (!str || typeof str !== "string")
              return str;
            let trimmedStr = str.trim();
            if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
              return str;
            else if (options.hex && hexRegex.test(trimmedStr)) {
              return Number.parseInt(trimmedStr, 16);
            } else {
              const match = numRegex.exec(trimmedStr);
              if (match) {
                const sign2 = match[1];
                const leadingZeros = match[2];
                let numTrimmedByZeros = trimZeros(match[3]);
                const eNotation = match[4] || match[6];
                if (!options.leadingZeros && leadingZeros.length > 0 && sign2 && trimmedStr[2] !== ".")
                  return str;
                else if (!options.leadingZeros && leadingZeros.length > 0 && !sign2 && trimmedStr[1] !== ".")
                  return str;
                else {
                  const num = Number(trimmedStr);
                  const numStr = "" + num;
                  if (numStr.search(/[eE]/) !== -1) {
                    if (options.eNotation)
                      return num;
                    else
                      return str;
                  } else if (eNotation) {
                    if (options.eNotation)
                      return num;
                    else
                      return str;
                  } else if (trimmedStr.indexOf(".") !== -1) {
                    if (numStr === "0" && numTrimmedByZeros === "")
                      return num;
                    else if (numStr === numTrimmedByZeros)
                      return num;
                    else if (sign2 && numStr === "-" + numTrimmedByZeros)
                      return num;
                    else
                      return str;
                  }
                  if (leadingZeros) {
                    if (numTrimmedByZeros === numStr)
                      return num;
                    else if (sign2 + numTrimmedByZeros === numStr)
                      return num;
                    else
                      return str;
                  }
                  if (trimmedStr === numStr)
                    return num;
                  else if (trimmedStr === sign2 + numStr)
                    return num;
                  return str;
                }
              } else {
                return str;
              }
            }
          }
          __name(toNumber, "toNumber");
          __name2(toNumber, "toNumber");
          function trimZeros(numStr) {
            if (numStr && numStr.indexOf(".") !== -1) {
              numStr = numStr.replace(/0+$/, "");
              if (numStr === ".")
                numStr = "0";
              else if (numStr[0] === ".")
                numStr = "0" + numStr;
              else if (numStr[numStr.length - 1] === ".")
                numStr = numStr.substr(0, numStr.length - 1);
              return numStr;
            }
            return numStr;
          }
          __name(trimZeros, "trimZeros");
          __name2(trimZeros, "trimZeros");
          module2.exports = toNumber;
        }
      });
      var require_OrderedObjParser = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports2, module2) {
          "use strict";
          var util = require_util();
          var xmlNode = require_xmlNode();
          var readDocType = require_DocTypeReader();
          var toNumber = require_strnum();
          var OrderedObjParser = class {
            static {
              __name(this, "OrderedObjParser");
            }
            static {
              __name2(this, "OrderedObjParser");
            }
            constructor(options) {
              this.options = options;
              this.currentNode = null;
              this.tagsNodeStack = [];
              this.docTypeEntities = {};
              this.lastEntities = {
                "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
                "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
                "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
                "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
              };
              this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
              this.htmlEntities = {
                "space": { regex: /&(nbsp|#160);/g, val: " " },
                // "lt" : { regex: /&(lt|#60);/g, val: "<" },
                // "gt" : { regex: /&(gt|#62);/g, val: ">" },
                // "amp" : { regex: /&(amp|#38);/g, val: "&" },
                // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
                // "apos" : { regex: /&(apos|#39);/g, val: "'" },
                "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
                "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
                "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
                "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
                "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
                "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
                "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
              };
              this.addExternalEntities = addExternalEntities;
              this.parseXml = parseXml;
              this.parseTextData = parseTextData;
              this.resolveNameSpace = resolveNameSpace;
              this.buildAttributesMap = buildAttributesMap;
              this.isItStopNode = isItStopNode;
              this.replaceEntitiesValue = replaceEntitiesValue;
              this.readStopNodeData = readStopNodeData;
              this.saveTextToParentTag = saveTextToParentTag;
              this.addChild = addChild;
            }
          };
          function addExternalEntities(externalEntities) {
            const entKeys = Object.keys(externalEntities);
            for (let i = 0; i < entKeys.length; i++) {
              const ent = entKeys[i];
              this.lastEntities[ent] = {
                regex: new RegExp("&" + ent + ";", "g"),
                val: externalEntities[ent]
              };
            }
          }
          __name(addExternalEntities, "addExternalEntities");
          __name2(addExternalEntities, "addExternalEntities");
          function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
            if (val2 !== void 0) {
              if (this.options.trimValues && !dontTrim) {
                val2 = val2.trim();
              }
              if (val2.length > 0) {
                if (!escapeEntities)
                  val2 = this.replaceEntitiesValue(val2);
                const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
                if (newval === null || newval === void 0) {
                  return val2;
                } else if (typeof newval !== typeof val2 || newval !== val2) {
                  return newval;
                } else if (this.options.trimValues) {
                  return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
                } else {
                  const trimmedVal = val2.trim();
                  if (trimmedVal === val2) {
                    return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
                  } else {
                    return val2;
                  }
                }
              }
            }
          }
          __name(parseTextData, "parseTextData");
          __name2(parseTextData, "parseTextData");
          function resolveNameSpace(tagname) {
            if (this.options.removeNSPrefix) {
              const tags = tagname.split(":");
              const prefix = tagname.charAt(0) === "/" ? "/" : "";
              if (tags[0] === "xmlns") {
                return "";
              }
              if (tags.length === 2) {
                tagname = prefix + tags[1];
              }
            }
            return tagname;
          }
          __name(resolveNameSpace, "resolveNameSpace");
          __name2(resolveNameSpace, "resolveNameSpace");
          var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
          function buildAttributesMap(attrStr, jPath, tagName) {
            if (!this.options.ignoreAttributes && typeof attrStr === "string") {
              const matches = util.getAllMatches(attrStr, attrsRegx);
              const len = matches.length;
              const attrs = {};
              for (let i = 0; i < len; i++) {
                const attrName = this.resolveNameSpace(matches[i][1]);
                let oldVal = matches[i][4];
                let aName = this.options.attributeNamePrefix + attrName;
                if (attrName.length) {
                  if (this.options.transformAttributeName) {
                    aName = this.options.transformAttributeName(aName);
                  }
                  if (aName === "__proto__")
                    aName = "#__proto__";
                  if (oldVal !== void 0) {
                    if (this.options.trimValues) {
                      oldVal = oldVal.trim();
                    }
                    oldVal = this.replaceEntitiesValue(oldVal);
                    const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                    if (newVal === null || newVal === void 0) {
                      attrs[aName] = oldVal;
                    } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                      attrs[aName] = newVal;
                    } else {
                      attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
                    }
                  } else if (this.options.allowBooleanAttributes) {
                    attrs[aName] = true;
                  }
                }
              }
              if (!Object.keys(attrs).length) {
                return;
              }
              if (this.options.attributesGroupName) {
                const attrCollection = {};
                attrCollection[this.options.attributesGroupName] = attrs;
                return attrCollection;
              }
              return attrs;
            }
          }
          __name(buildAttributesMap, "buildAttributesMap");
          __name2(buildAttributesMap, "buildAttributesMap");
          var parseXml = /* @__PURE__ */ __name2(function(xmlData) {
            xmlData = xmlData.replace(/\r\n?/g, "\n");
            const xmlObj = new xmlNode("!xml");
            let currentNode = xmlObj;
            let textData = "";
            let jPath = "";
            for (let i = 0; i < xmlData.length; i++) {
              const ch = xmlData[i];
              if (ch === "<") {
                if (xmlData[i + 1] === "/") {
                  const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                  let tagName = xmlData.substring(i + 2, closeIndex).trim();
                  if (this.options.removeNSPrefix) {
                    const colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) {
                      tagName = tagName.substr(colonIndex + 1);
                    }
                  }
                  if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                  }
                  if (currentNode) {
                    textData = this.saveTextToParentTag(textData, currentNode, jPath);
                  }
                  const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
                  if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                    throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
                  }
                  let propIndex = 0;
                  if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                    propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
                    this.tagsNodeStack.pop();
                  } else {
                    propIndex = jPath.lastIndexOf(".");
                  }
                  jPath = jPath.substring(0, propIndex);
                  currentNode = this.tagsNodeStack.pop();
                  textData = "";
                  i = closeIndex;
                } else if (xmlData[i + 1] === "?") {
                  let tagData = readTagExp(xmlData, i, false, "?>");
                  if (!tagData)
                    throw new Error("Pi Tag is not closed.");
                  textData = this.saveTextToParentTag(textData, currentNode, jPath);
                  if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
                  } else {
                    const childNode = new xmlNode(tagData.tagName);
                    childNode.add(this.options.textNodeName, "");
                    if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                      childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                    }
                    this.addChild(currentNode, childNode, jPath);
                  }
                  i = tagData.closeIndex + 1;
                } else if (xmlData.substr(i + 1, 3) === "!--") {
                  const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                  if (this.options.commentPropName) {
                    const comment = xmlData.substring(i + 4, endIndex - 2);
                    textData = this.saveTextToParentTag(textData, currentNode, jPath);
                    currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
                  }
                  i = endIndex;
                } else if (xmlData.substr(i + 1, 2) === "!D") {
                  const result = readDocType(xmlData, i);
                  this.docTypeEntities = result.entities;
                  i = result.i;
                } else if (xmlData.substr(i + 1, 2) === "![") {
                  const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                  const tagExp = xmlData.substring(i + 9, closeIndex);
                  textData = this.saveTextToParentTag(textData, currentNode, jPath);
                  let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
                  if (val2 == void 0)
                    val2 = "";
                  if (this.options.cdataPropName) {
                    currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
                  } else {
                    currentNode.add(this.options.textNodeName, val2);
                  }
                  i = closeIndex + 2;
                } else {
                  let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
                  let tagName = result.tagName;
                  const rawTagName = result.rawTagName;
                  let tagExp = result.tagExp;
                  let attrExpPresent = result.attrExpPresent;
                  let closeIndex = result.closeIndex;
                  if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                  }
                  if (currentNode && textData) {
                    if (currentNode.tagname !== "!xml") {
                      textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                    }
                  }
                  const lastTag = currentNode;
                  if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                    currentNode = this.tagsNodeStack.pop();
                    jPath = jPath.substring(0, jPath.lastIndexOf("."));
                  }
                  if (tagName !== xmlObj.tagname) {
                    jPath += jPath ? "." + tagName : tagName;
                  }
                  if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                    let tagContent = "";
                    if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                      i = result.closeIndex;
                    } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                      i = result.closeIndex;
                    } else {
                      const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                      if (!result2)
                        throw new Error(`Unexpected end of ${rawTagName}`);
                      i = result2.i;
                      tagContent = result2.tagContent;
                    }
                    const childNode = new xmlNode(tagName);
                    if (tagName !== tagExp && attrExpPresent) {
                      childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                    }
                    if (tagContent) {
                      tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                    }
                    jPath = jPath.substr(0, jPath.lastIndexOf("."));
                    childNode.add(this.options.textNodeName, tagContent);
                    this.addChild(currentNode, childNode, jPath);
                  } else {
                    if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                      if (tagName[tagName.length - 1] === "/") {
                        tagName = tagName.substr(0, tagName.length - 1);
                        jPath = jPath.substr(0, jPath.length - 1);
                        tagExp = tagName;
                      } else {
                        tagExp = tagExp.substr(0, tagExp.length - 1);
                      }
                      if (this.options.transformTagName) {
                        tagName = this.options.transformTagName(tagName);
                      }
                      const childNode = new xmlNode(tagName);
                      if (tagName !== tagExp && attrExpPresent) {
                        childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                      }
                      this.addChild(currentNode, childNode, jPath);
                      jPath = jPath.substr(0, jPath.lastIndexOf("."));
                    } else {
                      const childNode = new xmlNode(tagName);
                      this.tagsNodeStack.push(currentNode);
                      if (tagName !== tagExp && attrExpPresent) {
                        childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                      }
                      this.addChild(currentNode, childNode, jPath);
                      currentNode = childNode;
                    }
                    textData = "";
                    i = closeIndex;
                  }
                }
              } else {
                textData += xmlData[i];
              }
            }
            return xmlObj.child;
          }, "parseXml");
          function addChild(currentNode, childNode, jPath) {
            const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
            if (result === false) {
            } else if (typeof result === "string") {
              childNode.tagname = result;
              currentNode.addChild(childNode);
            } else {
              currentNode.addChild(childNode);
            }
          }
          __name(addChild, "addChild");
          __name2(addChild, "addChild");
          var replaceEntitiesValue = /* @__PURE__ */ __name2(function(val2) {
            if (this.options.processEntities) {
              for (let entityName2 in this.docTypeEntities) {
                const entity = this.docTypeEntities[entityName2];
                val2 = val2.replace(entity.regx, entity.val);
              }
              for (let entityName2 in this.lastEntities) {
                const entity = this.lastEntities[entityName2];
                val2 = val2.replace(entity.regex, entity.val);
              }
              if (this.options.htmlEntities) {
                for (let entityName2 in this.htmlEntities) {
                  const entity = this.htmlEntities[entityName2];
                  val2 = val2.replace(entity.regex, entity.val);
                }
              }
              val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
            }
            return val2;
          }, "replaceEntitiesValue");
          function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
            if (textData) {
              if (isLeafNode === void 0)
                isLeafNode = Object.keys(currentNode.child).length === 0;
              textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
              if (textData !== void 0 && textData !== "")
                currentNode.add(this.options.textNodeName, textData);
              textData = "";
            }
            return textData;
          }
          __name(saveTextToParentTag, "saveTextToParentTag");
          __name2(saveTextToParentTag, "saveTextToParentTag");
          function isItStopNode(stopNodes, jPath, currentTagName) {
            const allNodesExp = "*." + currentTagName;
            for (const stopNodePath in stopNodes) {
              const stopNodeExp = stopNodes[stopNodePath];
              if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
                return true;
            }
            return false;
          }
          __name(isItStopNode, "isItStopNode");
          __name2(isItStopNode, "isItStopNode");
          function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
            let attrBoundary;
            let tagExp = "";
            for (let index = i; index < xmlData.length; index++) {
              let ch = xmlData[index];
              if (attrBoundary) {
                if (ch === attrBoundary)
                  attrBoundary = "";
              } else if (ch === '"' || ch === "'") {
                attrBoundary = ch;
              } else if (ch === closingChar[0]) {
                if (closingChar[1]) {
                  if (xmlData[index + 1] === closingChar[1]) {
                    return {
                      data: tagExp,
                      index
                    };
                  }
                } else {
                  return {
                    data: tagExp,
                    index
                  };
                }
              } else if (ch === "	") {
                ch = " ";
              }
              tagExp += ch;
            }
          }
          __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
          __name2(tagExpWithClosingIndex, "tagExpWithClosingIndex");
          function findClosingIndex(xmlData, str, i, errMsg) {
            const closingIndex = xmlData.indexOf(str, i);
            if (closingIndex === -1) {
              throw new Error(errMsg);
            } else {
              return closingIndex + str.length - 1;
            }
          }
          __name(findClosingIndex, "findClosingIndex");
          __name2(findClosingIndex, "findClosingIndex");
          function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
            const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
            if (!result)
              return;
            let tagExp = result.data;
            const closeIndex = result.index;
            const separatorIndex = tagExp.search(/\s/);
            let tagName = tagExp;
            let attrExpPresent = true;
            if (separatorIndex !== -1) {
              tagName = tagExp.substring(0, separatorIndex);
              tagExp = tagExp.substring(separatorIndex + 1).trimStart();
            }
            const rawTagName = tagName;
            if (removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
                attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
              }
            }
            return {
              tagName,
              tagExp,
              closeIndex,
              attrExpPresent,
              rawTagName
            };
          }
          __name(readTagExp, "readTagExp");
          __name2(readTagExp, "readTagExp");
          function readStopNodeData(xmlData, tagName, i) {
            const startIndex = i;
            let openTagCount = 1;
            for (; i < xmlData.length; i++) {
              if (xmlData[i] === "<") {
                if (xmlData[i + 1] === "/") {
                  const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
                  let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
                  if (closeTagName === tagName) {
                    openTagCount--;
                    if (openTagCount === 0) {
                      return {
                        tagContent: xmlData.substring(startIndex, i),
                        i: closeIndex
                      };
                    }
                  }
                  i = closeIndex;
                } else if (xmlData[i + 1] === "?") {
                  const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
                  i = closeIndex;
                } else if (xmlData.substr(i + 1, 3) === "!--") {
                  const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
                  i = closeIndex;
                } else if (xmlData.substr(i + 1, 2) === "![") {
                  const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
                  i = closeIndex;
                } else {
                  const tagData = readTagExp(xmlData, i, ">");
                  if (tagData) {
                    const openTagName = tagData && tagData.tagName;
                    if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                      openTagCount++;
                    }
                    i = tagData.closeIndex;
                  }
                }
              }
            }
          }
          __name(readStopNodeData, "readStopNodeData");
          __name2(readStopNodeData, "readStopNodeData");
          function parseValue(val2, shouldParse, options) {
            if (shouldParse && typeof val2 === "string") {
              const newval = val2.trim();
              if (newval === "true")
                return true;
              else if (newval === "false")
                return false;
              else
                return toNumber(val2, options);
            } else {
              if (util.isExist(val2)) {
                return val2;
              } else {
                return "";
              }
            }
          }
          __name(parseValue, "parseValue");
          __name2(parseValue, "parseValue");
          module2.exports = OrderedObjParser;
        }
      });
      var require_node2json = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports2) {
          "use strict";
          function prettify(node, options) {
            return compress(node, options);
          }
          __name(prettify, "prettify");
          __name2(prettify, "prettify");
          function compress(arr, options, jPath) {
            let text;
            const compressedObj = {};
            for (let i = 0; i < arr.length; i++) {
              const tagObj = arr[i];
              const property = propName(tagObj);
              let newJpath = "";
              if (jPath === void 0)
                newJpath = property;
              else
                newJpath = jPath + "." + property;
              if (property === options.textNodeName) {
                if (text === void 0)
                  text = tagObj[property];
                else
                  text += "" + tagObj[property];
              } else if (property === void 0) {
                continue;
              } else if (tagObj[property]) {
                let val2 = compress(tagObj[property], options, newJpath);
                const isLeaf = isLeafTag(val2, options);
                if (tagObj[":@"]) {
                  assignAttributes(val2, tagObj[":@"], newJpath, options);
                } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
                  val2 = val2[options.textNodeName];
                } else if (Object.keys(val2).length === 0) {
                  if (options.alwaysCreateTextNode)
                    val2[options.textNodeName] = "";
                  else
                    val2 = "";
                }
                if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
                  if (!Array.isArray(compressedObj[property])) {
                    compressedObj[property] = [compressedObj[property]];
                  }
                  compressedObj[property].push(val2);
                } else {
                  if (options.isArray(property, newJpath, isLeaf)) {
                    compressedObj[property] = [val2];
                  } else {
                    compressedObj[property] = val2;
                  }
                }
              }
            }
            if (typeof text === "string") {
              if (text.length > 0)
                compressedObj[options.textNodeName] = text;
            } else if (text !== void 0)
              compressedObj[options.textNodeName] = text;
            return compressedObj;
          }
          __name(compress, "compress");
          __name2(compress, "compress");
          function propName(obj) {
            const keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (key !== ":@")
                return key;
            }
          }
          __name(propName, "propName");
          __name2(propName, "propName");
          function assignAttributes(obj, attrMap, jpath, options) {
            if (attrMap) {
              const keys = Object.keys(attrMap);
              const len = keys.length;
              for (let i = 0; i < len; i++) {
                const atrrName = keys[i];
                if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
                  obj[atrrName] = [attrMap[atrrName]];
                } else {
                  obj[atrrName] = attrMap[atrrName];
                }
              }
            }
          }
          __name(assignAttributes, "assignAttributes");
          __name2(assignAttributes, "assignAttributes");
          function isLeafTag(obj, options) {
            const { textNodeName } = options;
            const propCount = Object.keys(obj).length;
            if (propCount === 0) {
              return true;
            }
            if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
              return true;
            }
            return false;
          }
          __name(isLeafTag, "isLeafTag");
          __name2(isLeafTag, "isLeafTag");
          exports2.prettify = prettify;
        }
      });
      var require_XMLParser = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports2, module2) {
          var { buildOptions } = require_OptionsBuilder();
          var OrderedObjParser = require_OrderedObjParser();
          var { prettify } = require_node2json();
          var validator2 = require_validator();
          var XMLParser22 = class {
            static {
              __name(this, "XMLParser2");
            }
            static {
              __name2(this, "XMLParser");
            }
            constructor(options) {
              this.externalEntities = {};
              this.options = buildOptions(options);
            }
            /**
             * Parse XML dats to JS object
             * @param {string|Buffer} xmlData
             * @param {boolean|Object} validationOption
             */
            parse(xmlData, validationOption) {
              if (typeof xmlData === "string") {
              } else if (xmlData.toString) {
                xmlData = xmlData.toString();
              } else {
                throw new Error("XML data is accepted in String or Bytes[] form.");
              }
              if (validationOption) {
                if (validationOption === true)
                  validationOption = {};
                const result = validator2.validate(xmlData, validationOption);
                if (result !== true) {
                  throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
                }
              }
              const orderedObjParser = new OrderedObjParser(this.options);
              orderedObjParser.addExternalEntities(this.externalEntities);
              const orderedResult = orderedObjParser.parseXml(xmlData);
              if (this.options.preserveOrder || orderedResult === void 0)
                return orderedResult;
              else
                return prettify(orderedResult, this.options);
            }
            /**
             * Add Entity which is not by default supported by this library
             * @param {string} key
             * @param {string} value
             */
            addEntity(key, value) {
              if (value.indexOf("&") !== -1) {
                throw new Error("Entity value can't have '&'");
              } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
                throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
              } else if (value === "&") {
                throw new Error("An entity with value '&' is not permitted");
              } else {
                this.externalEntities[key] = value;
              }
            }
          };
          module2.exports = XMLParser22;
        }
      });
      var require_orderedJs2Xml = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports2, module2) {
          var EOL = "\n";
          function toXml(jArray, options) {
            let indentation = "";
            if (options.format && options.indentBy.length > 0) {
              indentation = EOL;
            }
            return arrToStr(jArray, options, "", indentation);
          }
          __name(toXml, "toXml");
          __name2(toXml, "toXml");
          function arrToStr(arr, options, jPath, indentation) {
            let xmlStr = "";
            let isPreviousElementTag = false;
            for (let i = 0; i < arr.length; i++) {
              const tagObj = arr[i];
              const tagName = propName(tagObj);
              if (tagName === void 0)
                continue;
              let newJPath = "";
              if (jPath.length === 0)
                newJPath = tagName;
              else
                newJPath = `${jPath}.${tagName}`;
              if (tagName === options.textNodeName) {
                let tagText = tagObj[tagName];
                if (!isStopNode(newJPath, options)) {
                  tagText = options.tagValueProcessor(tagName, tagText);
                  tagText = replaceEntitiesValue(tagText, options);
                }
                if (isPreviousElementTag) {
                  xmlStr += indentation;
                }
                xmlStr += tagText;
                isPreviousElementTag = false;
                continue;
              } else if (tagName === options.cdataPropName) {
                if (isPreviousElementTag) {
                  xmlStr += indentation;
                }
                xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
                isPreviousElementTag = false;
                continue;
              } else if (tagName === options.commentPropName) {
                xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
                isPreviousElementTag = true;
                continue;
              } else if (tagName[0] === "?") {
                const attStr2 = attr_to_str(tagObj[":@"], options);
                const tempInd = tagName === "?xml" ? "" : indentation;
                let piTextNodeName = tagObj[tagName][0][options.textNodeName];
                piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
                xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
                isPreviousElementTag = true;
                continue;
              }
              let newIdentation = indentation;
              if (newIdentation !== "") {
                newIdentation += options.indentBy;
              }
              const attStr = attr_to_str(tagObj[":@"], options);
              const tagStart = indentation + `<${tagName}${attStr}`;
              const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
              if (options.unpairedTags.indexOf(tagName) !== -1) {
                if (options.suppressUnpairedNode)
                  xmlStr += tagStart + ">";
                else
                  xmlStr += tagStart + "/>";
              } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
                xmlStr += tagStart + "/>";
              } else if (tagValue && tagValue.endsWith(">")) {
                xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
              } else {
                xmlStr += tagStart + ">";
                if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                  xmlStr += indentation + options.indentBy + tagValue + indentation;
                } else {
                  xmlStr += tagValue;
                }
                xmlStr += `</${tagName}>`;
              }
              isPreviousElementTag = true;
            }
            return xmlStr;
          }
          __name(arrToStr, "arrToStr");
          __name2(arrToStr, "arrToStr");
          function propName(obj) {
            const keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (!obj.hasOwnProperty(key))
                continue;
              if (key !== ":@")
                return key;
            }
          }
          __name(propName, "propName");
          __name2(propName, "propName");
          function attr_to_str(attrMap, options) {
            let attrStr = "";
            if (attrMap && !options.ignoreAttributes) {
              for (let attr in attrMap) {
                if (!attrMap.hasOwnProperty(attr))
                  continue;
                let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
                attrVal = replaceEntitiesValue(attrVal, options);
                if (attrVal === true && options.suppressBooleanAttributes) {
                  attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
                } else {
                  attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
                }
              }
            }
            return attrStr;
          }
          __name(attr_to_str, "attr_to_str");
          __name2(attr_to_str, "attr_to_str");
          function isStopNode(jPath, options) {
            jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
            let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
            for (let index in options.stopNodes) {
              if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
                return true;
            }
            return false;
          }
          __name(isStopNode, "isStopNode");
          __name2(isStopNode, "isStopNode");
          function replaceEntitiesValue(textValue, options) {
            if (textValue && textValue.length > 0 && options.processEntities) {
              for (let i = 0; i < options.entities.length; i++) {
                const entity = options.entities[i];
                textValue = textValue.replace(entity.regex, entity.val);
              }
            }
            return textValue;
          }
          __name(replaceEntitiesValue, "replaceEntitiesValue");
          __name2(replaceEntitiesValue, "replaceEntitiesValue");
          module2.exports = toXml;
        }
      });
      var require_json2xml = __commonJS2({
        "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports2, module2) {
          "use strict";
          var buildFromOrderedJs = require_orderedJs2Xml();
          var defaultOptions = {
            attributeNamePrefix: "@_",
            attributesGroupName: false,
            textNodeName: "#text",
            ignoreAttributes: true,
            cdataPropName: false,
            format: false,
            indentBy: "  ",
            suppressEmptyNode: false,
            suppressUnpairedNode: true,
            suppressBooleanAttributes: true,
            tagValueProcessor: function(key, a) {
              return a;
            },
            attributeValueProcessor: function(attrName, a) {
              return a;
            },
            preserveOrder: false,
            commentPropName: false,
            unpairedTags: [],
            entities: [
              { regex: new RegExp("&", "g"), val: "&amp;" },
              //it must be on top
              { regex: new RegExp(">", "g"), val: "&gt;" },
              { regex: new RegExp("<", "g"), val: "&lt;" },
              { regex: new RegExp("'", "g"), val: "&apos;" },
              { regex: new RegExp('"', "g"), val: "&quot;" }
            ],
            processEntities: true,
            stopNodes: [],
            // transformTagName: false,
            // transformAttributeName: false,
            oneListGroup: false
          };
          function Builder(options) {
            this.options = Object.assign({}, defaultOptions, options);
            if (this.options.ignoreAttributes || this.options.attributesGroupName) {
              this.isAttribute = function() {
                return false;
              };
            } else {
              this.attrPrefixLen = this.options.attributeNamePrefix.length;
              this.isAttribute = isAttribute;
            }
            this.processTextOrObjNode = processTextOrObjNode;
            if (this.options.format) {
              this.indentate = indentate;
              this.tagEndChar = ">\n";
              this.newLine = "\n";
            } else {
              this.indentate = function() {
                return "";
              };
              this.tagEndChar = ">";
              this.newLine = "";
            }
          }
          __name(Builder, "Builder");
          __name2(Builder, "Builder");
          Builder.prototype.build = function(jObj) {
            if (this.options.preserveOrder) {
              return buildFromOrderedJs(jObj, this.options);
            } else {
              if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
                jObj = {
                  [this.options.arrayNodeName]: jObj
                };
              }
              return this.j2x(jObj, 0).val;
            }
          };
          Builder.prototype.j2x = function(jObj, level) {
            let attrStr = "";
            let val2 = "";
            for (let key in jObj) {
              if (!Object.prototype.hasOwnProperty.call(jObj, key))
                continue;
              if (typeof jObj[key] === "undefined") {
                if (this.isAttribute(key)) {
                  val2 += "";
                }
              } else if (jObj[key] === null) {
                if (this.isAttribute(key)) {
                  val2 += "";
                } else if (key[0] === "?") {
                  val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                } else {
                  val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
                }
              } else if (jObj[key] instanceof Date) {
                val2 += this.buildTextValNode(jObj[key], key, "", level);
              } else if (typeof jObj[key] !== "object") {
                const attr = this.isAttribute(key);
                if (attr) {
                  attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
                } else {
                  if (key === this.options.textNodeName) {
                    let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
                    val2 += this.replaceEntitiesValue(newval);
                  } else {
                    val2 += this.buildTextValNode(jObj[key], key, "", level);
                  }
                }
              } else if (Array.isArray(jObj[key])) {
                const arrLen = jObj[key].length;
                let listTagVal = "";
                for (let j = 0; j < arrLen; j++) {
                  const item = jObj[key][j];
                  if (typeof item === "undefined") {
                  } else if (item === null) {
                    if (key[0] === "?")
                      val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                    else
                      val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
                  } else if (typeof item === "object") {
                    if (this.options.oneListGroup) {
                      listTagVal += this.j2x(item, level + 1).val;
                    } else {
                      listTagVal += this.processTextOrObjNode(item, key, level);
                    }
                  } else {
                    listTagVal += this.buildTextValNode(item, key, "", level);
                  }
                }
                if (this.options.oneListGroup) {
                  listTagVal = this.buildObjectNode(listTagVal, key, "", level);
                }
                val2 += listTagVal;
              } else {
                if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
                  const Ks = Object.keys(jObj[key]);
                  const L = Ks.length;
                  for (let j = 0; j < L; j++) {
                    attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
                  }
                } else {
                  val2 += this.processTextOrObjNode(jObj[key], key, level);
                }
              }
            }
            return { attrStr, val: val2 };
          };
          Builder.prototype.buildAttrPairStr = function(attrName, val2) {
            val2 = this.options.attributeValueProcessor(attrName, "" + val2);
            val2 = this.replaceEntitiesValue(val2);
            if (this.options.suppressBooleanAttributes && val2 === "true") {
              return " " + attrName;
            } else
              return " " + attrName + '="' + val2 + '"';
          };
          function processTextOrObjNode(object, key, level) {
            const result = this.j2x(object, level + 1);
            if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
              return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
            } else {
              return this.buildObjectNode(result.val, key, result.attrStr, level);
            }
          }
          __name(processTextOrObjNode, "processTextOrObjNode");
          __name2(processTextOrObjNode, "processTextOrObjNode");
          Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
            if (val2 === "") {
              if (key[0] === "?")
                return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
              else {
                return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
              }
            } else {
              let tagEndExp = "</" + key + this.tagEndChar;
              let piClosingChar = "";
              if (key[0] === "?") {
                piClosingChar = "?";
                tagEndExp = "";
              }
              if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
                return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
              } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
                return this.indentate(level) + `<!--${val2}-->` + this.newLine;
              } else {
                return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
              }
            }
          };
          Builder.prototype.closeTag = function(key) {
            let closeTag = "";
            if (this.options.unpairedTags.indexOf(key) !== -1) {
              if (!this.options.suppressUnpairedNode)
                closeTag = "/";
            } else if (this.options.suppressEmptyNode) {
              closeTag = "/";
            } else {
              closeTag = `></${key}`;
            }
            return closeTag;
          };
          Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
            if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
              return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
            } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
              return this.indentate(level) + `<!--${val2}-->` + this.newLine;
            } else if (key[0] === "?") {
              return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
            } else {
              let textValue = this.options.tagValueProcessor(key, val2);
              textValue = this.replaceEntitiesValue(textValue);
              if (textValue === "") {
                return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
              } else {
                return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
              }
            }
          };
          Builder.prototype.replaceEntitiesValue = function(textValue) {
            if (textValue && textValue.length > 0 && this.options.processEntities) {
              for (let i = 0; i < this.options.entities.length; i++) {
                const entity = this.options.entities[i];
                textValue = textValue.replace(entity.regex, entity.val);
              }
            }
            return textValue;
          };
          function indentate(level) {
            return this.options.indentBy.repeat(level);
          }
          __name(indentate, "indentate");
          __name2(indentate, "indentate");
          function isAttribute(name) {
            if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
              return name.substr(this.attrPrefixLen);
            } else {
              return false;
            }
          }
          __name(isAttribute, "isAttribute");
          __name2(isAttribute, "isAttribute");
          module2.exports = Builder;
        }
      });
      var validator = require_validator();
      var XMLParser2 = require_XMLParser();
      var XMLBuilder = require_json2xml();
      module.exports = {
        XMLParser: XMLParser2,
        XMLValidator: validator,
        XMLBuilder
      };
    }
  });

  // packages/runtime/dist/policies/xml-to-json-outbound/policy.js
  var import_fast_xml_parser, XmlToJsonOutboundPolicy;
  var init_policy47 = __esm({
    "packages/runtime/dist/policies/xml-to-json-outbound/policy.js"() {
      "use strict";
      init_errors();
      init_policies();
      import_fast_xml_parser = __toESM(require_fast_xml_parser());
      init_options_parsing();
      init_validator();
      XmlToJsonOutboundPolicy = class extends OutboundPolicy {
        static {
          __name(this, "XmlToJsonOutboundPolicy");
        }
        parser;
        parseOnStatusCodes;
        constructor(options, policyName) {
          super(options, policyName);
          optionValidator(this.options, this.policyName).optional("removeNSPrefix", "boolean").optional("ignoreProcessingInstructions", "boolean").optional("ignoreDeclarations", "boolean").optional("ignoreAttributes", "boolean").optional("stopNodes", "array").optional("attributeNamePrefix", "string").optional("textNodeName", "string").optional("trimValues", "boolean");
          this.parseOnStatusCodes = options.parseOnStatusCodes ? statusCodesStringToNumberArray(options.parseOnStatusCodes) : void 0;
          this.parser = new import_fast_xml_parser.XMLParser({
            removeNSPrefix: options?.removeNSPrefix ?? true,
            ignorePiTags: options?.ignoreProcessingInstructions ?? true,
            ignoreDeclaration: options?.ignoreDeclarations ?? true,
            ignoreAttributes: options?.ignoreAttributes ?? true,
            stopNodes: options?.stopNodes ?? [],
            attributeNamePrefix: options?.attributeNamePrefix ?? "@_",
            textNodeName: options?.textNodeName ?? "#text",
            trimValues: options?.trimValues ?? true
          });
        }
        async handler(response, request, context) {
          if (this.parseOnStatusCodes && !this.parseOnStatusCodes.includes(response.status)) {
            return response;
          }
          let obj;
          try {
            const xml = await response.text();
            obj = this.parser.parse(xml);
          } catch (err) {
            const message2 = `XmlToJsonOutboundPolicy - Error parsing XML contents in policy '${this.policyName}'.`;
            context.log.error(message2, err);
            throw new RuntimeError(message2);
          }
          const headers = new Headers(response.headers);
          headers.set("content-type", "application/json");
          const newResponse = new Response(JSON.stringify(obj), {
            status: response.status,
            statusText: response.statusText,
            headers
          });
          return newResponse;
        }
      };
    }
  });

  // packages/runtime/dist/service-provider.js
  var ServiceProviderImpl;
  var init_service_provider = __esm({
    "packages/runtime/dist/service-provider.js"() {
      "use strict";
      init_errors();
      ServiceProviderImpl = class {
        static {
          __name(this, "ServiceProviderImpl");
        }
        services = /* @__PURE__ */ new Map();
        addService(name, service) {
          if (this.services.get(name)) {
            throw new SystemError(`A service with the name ${name} already exists -- you cannot have duplicate services`);
          }
          this.services.set(name, service);
        }
        getService(name) {
          return this.services.get(name);
        }
      };
    }
  });

  // packages/runtime/dist/utils/background-dispatcher.js
  var BackgroundDispatcher;
  var init_background_dispatcher = __esm({
    "packages/runtime/dist/utils/background-dispatcher.js"() {
      "use strict";
      init_batch_dispatch();
      init_global_zuplo_event_context();
      BackgroundDispatcher = class {
        static {
          __name(this, "BackgroundDispatcher");
        }
        #innerBatchDispatcher;
        constructor(dispatcher, options) {
          if (!options || options.msDelay === void 0) {
            throw new Error("BackgroundDispatcher: options.msDelay is required");
          }
          this.#innerBatchDispatcher = new BatchDispatch(options.name ?? "", options.msDelay, dispatcher);
        }
        enqueue = (payload) => {
          this.#innerBatchDispatcher.enqueue(payload);
          const fetchEvent = getGlobalZuploEventContext();
          fetchEvent.waitUntil(this.#innerBatchDispatcher.waitUntilFlushed());
        };
      };
    }
  });

  // packages/runtime/dist/utils/background-loader.js
  var BackgroundLoader, WrappedPromise;
  var init_background_loader = __esm({
    "packages/runtime/dist/utils/background-loader.js"() {
      "use strict";
      init_global_zuplo_event_context();
      BackgroundLoader = class {
        static {
          __name(this, "BackgroundLoader");
        }
        #cache = /* @__PURE__ */ new Map();
        #loader;
        #ttl;
        #refreshPromises = /* @__PURE__ */ new Map();
        constructor(loader, ttlSeconds) {
          this.#loader = loader;
          this.#ttl = ttlSeconds * 1e3;
        }
        #updateExpiry(key) {
          const cacheEntry = this.#cache.get(key);
          if (cacheEntry) {
            cacheEntry.expiry = new Date(Date.now() + this.#ttl);
          }
        }
        #isExpired(cacheEntry) {
          return cacheEntry.expiry <= /* @__PURE__ */ new Date();
        }
        async get(key) {
          const cacheEntry = this.#cache.get(key);
          if (cacheEntry && !this.#isExpired(cacheEntry)) {
            void this.#refreshInBackground(key);
            return cacheEntry.data;
          }
          return this.#loadAndCache(key);
        }
        async #refreshInBackground(key) {
          const currentPromise = this.#refreshPromises.get(key);
          if (currentPromise !== void 0) {
            return currentPromise.wrap();
          }
          const refreshPromise = this.#loadAndCache(key);
          this.#refreshPromises.set(key, new WrappedPromise(refreshPromise));
          await new WrappedPromise(refreshPromise).wrap();
          this.#refreshPromises.delete(key);
          return refreshPromise;
        }
        async #loadAndCache(key) {
          let promise = this.#refreshPromises.get(key);
          if (promise === void 0) {
            const innerPromise = this.#loader(key);
            promise = new WrappedPromise(innerPromise);
            this.#updateExpiry(key);
            const result = await promise.wrap();
            this.#cache.set(key, {
              data: result,
              expiry: new Date(Date.now() + this.#ttl)
            });
          }
          return promise.wrap();
        }
      };
      WrappedPromise = class {
        static {
          __name(this, "WrappedPromise");
        }
        #innerPromise;
        #subPromises = [];
        #resolvedValue;
        #resolvedReason;
        constructor(promise) {
          const event = getGlobalZuploEventContext();
          event.waitUntil(promise);
          this.#innerPromise = promise;
          this.#innerPromise.then((value) => {
            this.#subPromises.forEach((resRej) => resRej.resolve(value));
            this.#resolvedValue = value;
          }).catch((reason) => {
            this.#subPromises.forEach((resRej) => resRej.reject(reason));
            this.#resolvedReason = reason;
          });
        }
        async wrap() {
          if (this.#resolvedReason) {
            throw this.#resolvedReason;
          }
          if (this.#resolvedValue) {
            return this.#resolvedValue;
          }
          const wrapper = this;
          const p = new Promise((resolve, reject) => {
            wrapper.#subPromises.push({ resolve, reject });
          });
          return p;
        }
      };
    }
  });

  // packages/runtime/dist/index.js
  var init_dist2 = __esm({
    "packages/runtime/dist/index.js"() {
      "use strict";
      init_internals();
      init_security();
      init_memory_zone_readthrough_cache();
      init_zone_cache();
      init_constants();
      init_context3();
      init_context_data();
      init_attributes();
      init_environment3();
      init_errors();
      init_handler();
      init_aws_lambda();
      init_open_api();
      init_redirect();
      init_url_forward();
      init_url_rewrite();
      init_websocket_handler();
      init_websocket_pipeline_handler();
      init_http_status();
      init_plugins2();
      init_plugins3();
      init_audit_log_datastax_provider();
      init_audit_log_plugin();
      init_plugins();
      init_stripe_monetization_plugin();
      init_policies();
      init_policy2();
      init_policy4();
      init_policy3();
      init_policy6();
      init_policy7();
      init_policy8();
      init_policy9();
      init_policy10();
      init_policy11();
      init_policy12();
      init_policy13();
      init_policy14();
      init_policy15();
      init_policy16();
      init_policy17();
      init_policy18();
      init_policy19();
      init_policy20();
      init_policy21();
      init_policy22();
      init_policy23();
      init_policy5();
      init_policy24();
      init_policy25();
      init_policy26();
      init_policy27();
      init_policy28();
      init_policy29();
      init_policy30();
      init_policy31();
      init_policy32();
      init_policy33();
      init_policy34();
      init_policy35();
      init_policy36();
      init_policy37();
      init_policy38();
      init_policy39();
      init_policy();
      init_policy40();
      init_policy41();
      init_policy42();
      init_policy43();
      init_policy44();
      init_policy45();
      init_policy46();
      init_policy47();
      init_http_problems();
      init_problem_response_formatter();
      init_request();
      init_interfaces();
      init_router();
      init_serializer();
      init_service_provider();
      init_statuses();
      init_background_dispatcher();
      init_background_loader();
      init_open_api_utils();
    }
  });

  // packages/runtime/dist/crypto-beta.js
  var supportedDigests, BaseCryptoBeta;
  var init_crypto_beta = __esm({
    "packages/runtime/dist/crypto-beta.js"() {
      "use strict";
      supportedDigests = ["sha-1", "sha-256", "sha-384", "sha-512"];
      BaseCryptoBeta = class {
        static {
          __name(this, "BaseCryptoBeta");
        }
      };
    }
  });

  // packages/runtime/dist/platforms/worker/crypto-beta.js
  var WorkerCryptoBeta;
  var init_crypto_beta2 = __esm({
    "packages/runtime/dist/platforms/worker/crypto-beta.js"() {
      "use strict";
      init_crypto_beta();
      init_errors();
      WorkerCryptoBeta = class extends BaseCryptoBeta {
        static {
          __name(this, "WorkerCryptoBeta");
        }
        async digest(algorithm, data) {
          if (!supportedDigests.includes(algorithm.toLowerCase())) {
            throw new RuntimeError(`Algorithm ${algorithm} is not supported. Try using ${supportedDigests.join(", ")}`);
          }
          const msgUint8 = new TextEncoder().encode(data);
          const hashBuffer = await crypto.subtle.digest(algorithm, msgUint8);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
          return hashHex;
        }
      };
    }
  });

  // packages/runtime/dist/key-value-store.js
  var BaseKeyValueStore;
  var init_key_value_store = __esm({
    "packages/runtime/dist/key-value-store.js"() {
      "use strict";
      BaseKeyValueStore = class {
        static {
          __name(this, "BaseKeyValueStore");
        }
        context;
        constructor(context) {
          this.context = context;
        }
      };
    }
  });

  // packages/runtime/dist/platforms/worker/key-value-store.js
  var WorkerKeyValueStore;
  var init_key_value_store2 = __esm({
    "packages/runtime/dist/platforms/worker/key-value-store.js"() {
      "use strict";
      init_errors();
      init_key_value_store();
      init_environment2();
      WorkerKeyValueStore = class extends BaseKeyValueStore {
        static {
          __name(this, "WorkerKeyValueStore");
        }
        #kv;
        constructor(context) {
          super(context);
          const kv = Environment.instance.runtime.ZUPLO_KV;
          if (!kv) {
            throw new FeatureNotEnabledError("The Key Value Store feature is not enabled for this project.");
          }
          this.#kv = kv;
        }
        put(key, value, options) {
          if (typeof key !== "string") {
            throw new ConfigurationError("value must be of type string");
          }
          return this.#kv.put(key, value, options ? { expirationTtl: options.expirationSecondsTtl } : void 0);
        }
        get(key, options) {
          return this.#kv.get(key, {
            type: "text",
            cacheTtl: options?.cacheSecondsTtl
          });
        }
        delete(key) {
          return this.#kv.delete(key);
        }
      };
    }
  });

  // packages/runtime/dist/index.worker.js
  var index_worker_exports = {};
  __export(index_worker_exports, {
    AWSLoggingPlugin: () => AWSLoggingPlugin,
    AmberfloMeteringInboundPolicy: () => AmberfloMeteringInboundPolicy,
    AmberfloMeteringPolicy: () => AmberfloMeteringPolicy,
    ApiAuthKeyInboundPolicy: () => ApiAuthKeyInboundPolicy,
    ApiKeyInboundPolicy: () => ApiKeyInboundPolicy,
    AuditLogDataStaxProvider: () => AuditLogDataStaxProvider,
    AuditLogPlugin: () => AuditLogPlugin,
    Auth0JwtInboundPolicy: () => Auth0JwtInboundPolicy,
    AwsLambdaHandlerExtensions: () => AwsLambdaHandlerExtensions,
    BackgroundDispatcher: () => BackgroundDispatcher,
    BackgroundLoader: () => BackgroundLoader,
    BasicAuthInboundPolicy: () => BasicAuthInboundPolicy,
    BasicRateLimitInboundPolicy: () => RateLimitInboundPolicy,
    BatchDispatch: () => BatchDispatch,
    CachingInboundPolicy: () => CachingInboundPolicy,
    ChangeMethodInboundPolicy: () => ChangeMethodInboundPolicy,
    ClearHeadersInboundPolicy: () => ClearHeadersInboundPolicy,
    ClearHeadersOutboundPolicy: () => ClearHeadersOutboundPolicy,
    ClerkJwtInboundPolicy: () => ClerkJwtInboundPolicy,
    CognitoJwtInboundPolicy: () => CognitoJwtInboundPolicy,
    CompositeInboundPolicy: () => CompositeInboundPolicy,
    ConfigurationError: () => ConfigurationError,
    ContentTypes: () => ContentTypes,
    ContextData: () => ContextData,
    CryptoBeta: () => WorkerCryptoBeta,
    CurityPhantomTokenInboundPolicy: () => CurityPhantomTokenInboundPolicy,
    DataDogLoggingPlugin: () => DataDogLoggingPlugin,
    DataDogMetricsPlugin: () => DataDogMetricsPlugin,
    DynaTraceLoggingPlugin: () => DynaTraceLoggingPlugin,
    DynatraceMetricsPlugin: () => DynatraceMetricsPlugin,
    FirebaseJwtInboundPolicy: () => FirebaseJwtInboundPolicy,
    FormDataToJsonInboundPolicy: () => FormDataToJsonInboundPolicy,
    GeoFilterInboundPolicy: () => GeoFilterInboundPolicy,
    GoogleCloudLoggingPlugin: () => GoogleCloudLoggingPlugin,
    Handler: () => Handler,
    HttpProblems: () => HttpProblems,
    HttpStatusCode: () => HttpStatusCode,
    InboundPolicy: () => InboundPolicy,
    JWTScopeValidationInboundPolicy: () => JWTScopeValidationInboundPolicy,
    KeyValueStore: () => WorkerKeyValueStore,
    LokiLoggingPlugin: () => LokiLoggingPlugin,
    LookupResult: () => LookupResult,
    MemoryZoneReadThroughCache: () => MemoryZoneReadThroughCache,
    MockApiInboundPolicy: () => MockApiInboundPolicy,
    MoesifInboundPolicy: () => MoesifInboundPolicy,
    MonetizationInboundPolicy: () => MonetizationInboundPolicy,
    OktaJwtInboundPolicy: () => OktaJwtInboundPolicy,
    OpenIdJwtInboundPolicy: () => OpenIdJwtInboundPolicy,
    OutboundPolicy: () => OutboundPolicy,
    ProblemResponseFormatter: () => ProblemResponseFormatter,
    PropelAuthJwtInboundPolicy: () => PropelAuthJwtInboundPolicy,
    RateLimitInboundPolicy: () => RateLimitInboundPolicy,
    ReadmeMetricsInboundPolicy: () => ReadmeMetricsInboundPolicy,
    RemoveHeadersInboundPolicy: () => RemoveHeadersInboundPolicy,
    RemoveHeadersOutboundPolicy: () => RemoveHeadersOutboundPolicy,
    RemoveQueryParamsInboundPolicy: () => RemoveQueryParamsInboundPolicy,
    ReplaceStringOutboundPolicy: () => ReplaceStringOutboundPolicy,
    RequestSizeLimitInboundPolicy: () => RequestSizeLimitInboundPolicy,
    RequestValidationInboundPolicy: () => RequestValidationInboundPolicy,
    RequireOriginInboundPolicy: () => RequireOriginInboundPolicy,
    ResponseSendingEvent: () => ResponseSendingEvent,
    ResponseSentEvent: () => ResponseSentEvent,
    Router: () => Router,
    RuntimeError: () => RuntimeError,
    SYSTEM_LOGGER: () => SYSTEM_LOGGER,
    SchemaBasedRequestValidation: () => SchemaBasedRequestValidation,
    SemanticAttributes: () => SemanticAttributes,
    ServiceProviderImpl: () => ServiceProviderImpl,
    SetBodyInboundPolicy: () => SetBodyInboundPolicy,
    SetHeadersInboundPolicy: () => SetHeadersInboundPolicy,
    SetHeadersOutboundPolicy: () => SetHeadersOutboundPolicy,
    SetQueryParamsInboundPolicy: () => SetQueryParamsInboundPolicy,
    SetStatusOutboundPolicy: () => SetStatusOutboundPolicy,
    SleepInboundPolicy: () => SleepInboundPolicy,
    StripeMonetizationPlugin: () => StripeMonetizationPlugin,
    StripeWebhookVerificationInboundPolicy: () => StripeWebhookVerificationInboundPolicy,
    SumoLogicLoggingPlugin: () => SumoLogicLoggingPlugin,
    SupabaseJwtInboundPolicy: () => SupabaseJwtInboundPolicy,
    SystemRouteName: () => SystemRouteName,
    TelemetryPlugin: () => TelemetryPlugin,
    UpstreamAzureAdServiceAuthInboundPolicy: () => UpstreamAzureAdServiceAuthInboundPolicy,
    UpstreamFirebaseAdminAuthInboundPolicy: () => UpstreamFirebaseAdminAuthInboundPolicy,
    UpstreamFirebaseUserAuthInboundPolicy: () => UpstreamFirebaseUserAuthInboundPolicy,
    UpstreamGcpJwtInboundPolicy: () => UpstreamGcpJwtInboundPolicy,
    UpstreamGcpServiceAuthInboundPolicy: () => UpstreamGcpServiceAuthInboundPolicy,
    VMWareLogInsightLoggingPlugin: () => VMWareLogInsightLoggingPlugin,
    ValidateJsonSchemaInbound: () => ValidateJsonSchemaInbound,
    XmlToJsonOutboundPolicy: () => XmlToJsonOutboundPolicy,
    ZoneCache: () => ZoneCache,
    ZuploRequest: () => ZuploRequest,
    awsLambdaHandler: () => awsLambdaHandler,
    environment: () => environment,
    getIdForParameterSchema: () => getIdForParameterSchema,
    getIdForRefSchema: () => getIdForRefSchema,
    getIdForRequestBodySchema: () => getIdForRequestBodySchema,
    getRawOperationDataIdentifierName: () => getRawOperationDataIdentifierName,
    httpStatuses: () => statuses_default,
    openApiSpecHandler: () => openApiSpecHandler,
    redirectHandler: () => redirectHandler,
    sanitizedIdentifierName: () => sanitizedIdentifierName,
    serialize: () => serialize,
    setMoesifContext: () => setMoesifContext,
    urlForwardHandler: () => urlForwardHandler,
    urlRewriteHandler: () => urlRewriteHandler,
    webSocketHandler: () => webSocketHandler,
    webSocketPipelineHandler: () => webSocketPipelineHandler
  });
  var init_index_worker = __esm({
    "packages/runtime/dist/index.worker.js"() {
      "use strict";
      init_dist2();
      init_crypto_beta2();
      init_key_value_store2();
    }
  });

  // schema-validation:./ajv-schema.json
  var require_ajv_schema = __commonJS({
    "schema-validation:./ajv-schema.json"() {
    }
  });

  // dev-portal-json:/usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/config/dev-portal.json
  var require_dev_portal = __commonJS({
    "dev-portal-json:/usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/config/dev-portal.json"(exports, module) {
      module.exports = { "sitePathname": "/docs", "enabled": true };
    }
  });

  // ../usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/.zuplo/worker.ts
  init_index_worker();

  // open-api-routes-json:/usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/config/routes.json
  init_index_worker();

  // raw-route:./raw.json
  var routes_refsData_0 = {
    "type": "object",
    "required": [
      "name",
      "photoUrls"
    ],
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64",
        "readOnly": true
      },
      category: routes_refsData_1,
      "name": {
        "type": "string",
        "example": "doggie"
      },
      "photoUrls": {
        "type": "array",
        "xml": {
          "name": "photoUrl",
          "wrapped": true
        },
        "items": {
          "type": "string"
        }
      },
      "tags": {
        "type": "array",
        "xml": {
          "name": "tag",
          "wrapped": true
        },
        items: routes_refsData_2
      },
      "status": {
        "type": "string",
        "description": "pet status in the store",
        "enum": [
          "available",
          "pending",
          "sold"
        ]
      }
    },
    "xml": {
      "name": "Pet"
    }
  };
  var routes_refsData_1 = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "name": {
        "type": "string"
      }
    },
    "xml": {
      "name": "Category"
    }
  };
  var routes_refsData_2 = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "format": "int64"
      },
      "name": {
        "type": "string"
      }
    },
    "xml": {
      "name": "Tag"
    }
  };
  var routes_refsData_3 = {
    "content": {
      "application/json": {
        schema: routes_refsData_0
      },
      "application/xml": {
        schema: routes_refsData_0
      }
    },
    "description": "Pet object that needs to be added to the store",
    "required": true
  };
  var rawRouteData = {
    _routes__openapi_x_zuplo_path: {
      "pathMode": "open-api"
    },
    _routes__openapi_get: {
      "summary": "OpenAPI Spec",
      "x-zuplo-route": {
        "corsPolicy": "anything-goes",
        "handler": {
          "export": "openApiSpecHandler",
          "module": "$import(@zuplo/runtime)",
          "options": {
            "openApiFilePath": "./config/routes.oas.json"
          }
        },
        "policies": {
          "inbound": []
        }
      },
      "operationId": "f8d5c981-b173-4d3d-8a74-ce1f3f1ea2a3"
    },
    _routes__ap1_v1_entity_findByStatus_x_zuplo_path: {
      "pathMode": "open-api"
    },
    _routes__ap1_v1_entity_findByStatus_get: {
      "tags": [
        "pet"
      ],
      "summary": "Find all entities by status",
      "operationId": "findPetsByStatus",
      "parameters": [
        {
          "name": "status",
          "in": "query",
          "description": "Status values that need to be considered for filter",
          "required": true,
          "explode": true,
          "schema": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "available",
                "pending",
                "sold"
              ],
              "default": "available"
            }
          }
        }
      ],
      "responses": {
        "200": {
          "description": "successful operation",
          "content": {
            "application/xml": {
              "schema": {
                "type": "array",
                items: routes_refsData_0
              }
            },
            "application/json": {
              "schema": {
                "type": "array",
                items: routes_refsData_0
              }
            }
          }
        },
        "400": {
          "description": "Invalid status value"
        }
      },
      "security": [
        {
          "petstore_auth": [
            "write:pets",
            "read:pets"
          ]
        }
      ],
      "x-zuplo-route": {
        "corsPolicy": "none",
        "handler": {
          "export": "urlForwardHandler",
          "module": "$import(@zuplo/runtime)",
          "options": {
            "baseUrl": "http://sagent-sample-url"
          }
        },
        "policies": {
          "inbound": [
            "rate-limit-inbound"
          ]
        }
      }
    },
    _routes__api_v1_entity_create_x_zuplo_path: {
      "pathMode": "open-api"
    },
    _routes__api_v1_entity_create_post: {
      "tags": [
        "pet"
      ],
      "summary": "Create a new Entity",
      "operationId": "addPet",
      "parameters": [],
      "responses": {
        "405": {
          "description": "Invalid input"
        }
      },
      "security": [
        {
          "petstore_auth": [
            "write:pets",
            "read:pets"
          ]
        }
      ],
      requestBody: routes_refsData_3,
      "x-internal": false,
      "x-zuplo-route": {
        "corsPolicy": "none",
        "handler": {
          "export": "urlForwardHandler",
          "module": "$import(@zuplo/runtime)",
          "options": {
            "baseUrl": "http://sagent-sample-url"
          }
        },
        "policies": {
          "inbound": []
        }
      }
    },
    _routes__ap1_v1_entity_update_x_zuplo_path: {
      "pathMode": "open-api"
    },
    _routes__ap1_v1_entity_update_put: {
      "tags": [
        "pet"
      ],
      "summary": "Update an existing entity",
      "operationId": "updatePet",
      "parameters": [],
      "responses": {
        "400": {
          "description": "Invalid ID supplied"
        },
        "404": {
          "description": "Pet not found"
        },
        "405": {
          "description": "Validation exception"
        }
      },
      "security": [
        {
          "petstore_auth": [
            "write:pets",
            "read:pets"
          ]
        }
      ],
      requestBody: routes_refsData_3,
      "x-zuplo-route": {
        "corsPolicy": "none",
        "handler": {
          "export": "urlForwardHandler",
          "module": "$import(@zuplo/runtime)",
          "options": {
            "baseUrl": "http://sagent-sample-url"
          }
        },
        "policies": {
          "inbound": [
            "rate-limit-inbound"
          ]
        }
      }
    },
    _routes__ap1_v1_entity_delete__entityId__x_zuplo_path: {
      "pathMode": "open-api"
    },
    _routes__ap1_v1_entity_delete__entityId__delete: {
      "tags": [
        "pet"
      ],
      "summary": "Deletes an Entity",
      "operationId": "deletePet",
      "parameters": [
        {
          "name": "api_key",
          "in": "header",
          "required": false,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "petId",
          "in": "path",
          "description": "Pet id to delete",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }
      ],
      "responses": {
        "400": {
          "description": "Invalid ID supplied"
        },
        "404": {
          "description": "Pet not found"
        }
      },
      "security": [
        {
          "petstore_auth": [
            "write:pets",
            "read:pets"
          ]
        }
      ],
      "x-zuplo-route": {
        "corsPolicy": "none",
        "handler": {
          "export": "urlForwardHandler",
          "module": "$import(@zuplo/runtime)",
          "options": {
            "baseUrl": "http://sagent-sample-url"
          }
        },
        "policies": {
          "inbound": []
        }
      }
    }
  };
  var raw_default = rawRouteData;

  // open-api-routes-json:/usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/config/routes.json
  var routes = /* @__PURE__ */ __name(() => ({
    routes: [
      { raw: () => {
        return raw_default._routes__openapi_get;
      }, version: "none", methods: ["GET"], pathPattern: "/openapi{/}?", path: "/openapi", corsPolicy: "anything-goes", handler: { export: "openApiSpecHandler", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { openApiFilePath: "./config/routes.oas.json" } }, policies: { inbound: [] } },
      { raw: () => {
        return raw_default._routes__ap1_v1_entity_findByStatus_get;
      }, version: "none", methods: ["GET"], pathPattern: "/ap1/v1/entity/findByStatus{/}?", path: "/ap1/v1/entity/findByStatus", corsPolicy: "none", handler: { export: "urlForwardHandler", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { baseUrl: "http://sagent-sample-url", __rewriteFunction: (request, context) => {
        const { params, url, query, method, headers } = request;
        const { host, hostname, origin, pathname, port, search } = new URL(url);
        const e = encodeURIComponent;
        const env = environment;
        return `http://sagent-sample-url`;
      } } }, policies: { inbound: ["rate-limit-inbound"] } },
      { raw: () => {
        return raw_default._routes__api_v1_entity_create_post;
      }, version: "none", methods: ["POST"], pathPattern: "/api/v1/entity/create{/}?", path: "/api/v1/entity/create", corsPolicy: "none", handler: { export: "urlForwardHandler", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { baseUrl: "http://sagent-sample-url", __rewriteFunction: (request, context) => {
        const { params, url, query, method, headers } = request;
        const { host, hostname, origin, pathname, port, search } = new URL(url);
        const e = encodeURIComponent;
        const env = environment;
        return `http://sagent-sample-url`;
      } } }, policies: { inbound: [] } },
      { raw: () => {
        return raw_default._routes__ap1_v1_entity_update_put;
      }, version: "none", methods: ["PUT"], pathPattern: "/ap1/v1/entity/update{/}?", path: "/ap1/v1/entity/update", corsPolicy: "none", handler: { export: "urlForwardHandler", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { baseUrl: "http://sagent-sample-url", __rewriteFunction: (request, context) => {
        const { params, url, query, method, headers } = request;
        const { host, hostname, origin, pathname, port, search } = new URL(url);
        const e = encodeURIComponent;
        const env = environment;
        return `http://sagent-sample-url`;
      } } }, policies: { inbound: ["rate-limit-inbound"] } },
      { raw: () => {
        return raw_default._routes__ap1_v1_entity_delete__entityId__delete;
      }, version: "none", methods: ["DELETE"], pathPattern: "/ap1/v1/entity/delete/:entityId{/}?", path: "/ap1/v1/entity/delete/{entityId}", corsPolicy: "none", handler: { export: "urlForwardHandler", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { baseUrl: "http://sagent-sample-url", __rewriteFunction: (request, context) => {
        const { params, url, query, method, headers } = request;
        const { host, hostname, origin, pathname, port, search } = new URL(url);
        const e = encodeURIComponent;
        const env = environment;
        return `http://sagent-sample-url`;
      } } }, policies: { inbound: [] } }
    ],
    policies: [{ handler: { export: "RateLimitInboundPolicy", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { rateLimitBy: "ip", requestsAllowed: 2, timeWindowMinutes: 1 } }, name: "rate-limit-inbound", policyType: "rate-limit-inbound" }, { handler: { export: "ApiKeyInboundPolicy", module: (init_index_worker(), __toCommonJS(index_worker_exports)), options: { allowUnauthenticatedRequests: false, cacheTtlSeconds: 60 } }, name: "api-key-inbound", policyType: "api-key-inbound" }],
    corsPolicies: [],
    versions: [
      { name: "none", pathPrefix: "" }
    ]
  }), "routes");
  var routes_default = routes;

  // ../usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/.zuplo/worker.ts
  var schemaValidations = __toESM(require_ajv_schema());

  // runtime-config-plugin:/usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/modules/zuplo.runtime.ts
  var runtimeInit = void 0;

  // ../usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/.zuplo/worker.ts
  var import_dev_portal2 = __toESM(require_dev_portal());

  // ../usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/.zuplo/build.json
  var build_default = {
    BUILD_ID: "945edd3e-c41c-43c1-94e7-4549dc7c476d",
    TIMESTAMP: "2024-03-20T11:28:19.258Z",
    IS_PRODUCTION: true,
    BUILD_ENV: "production",
    ZUPLO_VERSION: "5.1977.0",
    COMPATIBILITY_DATE: "2024-01-15",
    ACCOUNT_NAME: "sapphire_fluffy_amphibian",
    PROJECT_NAME: "sagentzuplo",
    ENVIRONMENT_TYPE: "WORKING_COPY",
    COMPATIBILITY_FLAGS: {
      runOutboundPoliciesOnHandlerOnAllStatuses: true,
      doNotRunHooksOnSystemRoutes: true,
      removeAllVendorHeadersExceptListed: true
    }
  };

  // ../usr/dev/projects/34b31b7e6a57d29ac5a7ed89e1241794a9531eb1/sapphire_fluffy_amphibian/sagentzuplo/.zuplo/worker.ts
  var serviceProvider = new ServiceProviderImpl();
  globalThis["__ZUPLO_SERVICE_PROVIDER"] = serviceProvider;
  var runtimeSettings = { developerPortal: import_dev_portal2.default };
  var handler = new Handler(
    routes_default,
    build_default,
    runtimeSettings,
    serviceProvider,
    schemaValidations,
    runtimeInit
  );
  addEventListener("fetch", (event) => {
    event.respondWith(handler.requestHandler(event.request, globalThis, event));
  });
})();
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {boolean} showHidden
 * @param {number} depth
 * @param {boolean} colors
 * @license MIT (© Joyent)
 */
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * Source: https://github.com/lludol/clf-date/blob/master/src/main.js
 *
 * The MIT License (MIT)
 * Copyright (c) 2016 Lerus Ludovic
 *
 */
//# sourceMappingURL=worker.js.map
