function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var weapp_socket_io = createCommonjsModule(function (module, exports) {
  !function (t, e) {
    module.exports = e();
  }(window, function () {
    return function (t) {
      var e = {};

      function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }

      return r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        });
      }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
        return n;
      }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return r.d(e, "a", e), e;
      }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, r.p = "", r(r.s = 24);
    }([function (t, e) {
      t.exports = function () {
        return function () { };
      };
    }, function (t, e) {
      var r;

      r = function () {
        return this;
      }();

      try {
        r = r || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (r = window);
      }

      t.exports = r;
    }, function (t, e) {
      var r = {}.toString;

      t.exports = Array.isArray || function (t) {
        return "[object Array]" == r.call(t);
      };
    }, function (t, e, r) {
      function n(t) {
        if (t) return function (t) {
          for (var e in n.prototype) t[e] = n.prototype[e];

          return t;
        }(t);
      }

      t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
      }, n.prototype.once = function (t, e) {
        function r() {
          this.off(t, r), e.apply(this, arguments);
        }

        return r.fn = e, this.on(t, r), this;
      }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var r,
          n = this._callbacks["$" + t];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;

        for (var o = 0; o < n.length; o++) if ((r = n[o]) === e || r.fn === e) {
          n.splice(o, 1);
          break;
        }

        return this;
      }, n.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1),
          r = this._callbacks["$" + t];
        if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
        return this;
      }, n.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
      }, n.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      };
    }, function (t, e, r) {
      var n = r(0)("socket.io-parser"),
        o = r(3),
        i = r(20),
        s = r(2),
        a = r(9);

      function u() { }

      e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = u, e.Decoder = h;
      var c = e.ERROR + '"encode error"';

      function f(t) {
        var r = "" + t.type;

        if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), t.nsp && "/" !== t.nsp && (r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {
          var o = function (t) {
            try {
              return JSON.stringify(t);
            } catch (t) {
              return !1;
            }
          }(t.data);

          if (!1 === o) return c;
          r += o;
        }

        return n("encoded %j as %s", t, r), r;
      }

      function h() {
        this.reconstructor = null;
      }

      function p(t) {
        this.reconPack = t, this.buffers = [];
      }

      function l(t) {
        return {
          type: e.ERROR,
          data: "parser error: " + t
        };
      }

      u.prototype.encode = function (t, r) {
        (n("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function (t, e) {
          i.removeBlobs(t, function (t) {
            var r = i.deconstructPacket(t),
              n = f(r.packet),
              o = r.buffers;
            o.unshift(n), e(o);
          });
        }(t, r) : r([f(t)]);
      }, o(h.prototype), h.prototype.add = function (t) {
        var r;
        if ("string" == typeof t) r = function (t) {
          var r = 0,
            o = {
              type: Number(t.charAt(0))
            };
          if (null == e.types[o.type]) return l("unknown packet type " + o.type);

          if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
            for (var i = ""; "-" !== t.charAt(++r) && (i += t.charAt(r), r != t.length););

            if (i != Number(i) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");
            o.attachments = Number(i);
          }

          if ("/" === t.charAt(r + 1)) for (o.nsp = ""; ++r;) {
            var a = t.charAt(r);
            if ("," === a) break;
            if (o.nsp += a, r === t.length) break;
          } else o.nsp = "/";
          var u = t.charAt(r + 1);

          if ("" !== u && Number(u) == u) {
            for (o.id = ""; ++r;) {
              var a = t.charAt(r);

              if (null == a || Number(a) != a) {
                --r;
                break;
              }

              if (o.id += t.charAt(r), r === t.length) break;
            }

            o.id = Number(o.id);
          }

          if (t.charAt(++r)) {
            var c = function (t) {
              try {
                return JSON.parse(t);
              } catch (t) {
                return !1;
              }
            }(t.substr(r)),
              f = !1 !== c && (o.type === e.ERROR || s(c));

            if (!f) return l("invalid payload");
            o.data = c;
          }

          return n("decoded %s as %j", t, o), o;
        }(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new p(r), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r); else {
          if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
          if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
          (r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r));
        }
      }, h.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }, p.prototype.takeBinaryData = function (t) {
        if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
          var e = i.reconstructPacket(this.reconPack, this.buffers);
          return this.finishedReconstruction(), e;
        }

        return null;
      }, p.prototype.finishedReconstruction = function () {
        this.reconPack = null, this.buffers = [];
      };
    }, function (t, e) {
      var r = [].slice;

      t.exports = function (t, e) {
        if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
        var n = r.call(arguments, 2);
        return function () {
          return e.apply(t, n.concat(r.call(arguments)));
        };
      };
    }, function (t, e) {
      t.exports = function (t, e, r) {
        return t.on(e, r), {
          destroy: function () {
            t.removeListener(e, r);
          }
        };
      };
    }, function (t, e, r) {
      var n = r(4),
        o = r(3),
        i = r(18),
        s = r(6),
        a = r(5),
        u = r(0)("socket.io-client:socket"),
        c = r(17),
        f = r(16);
      t.exports = l;
      var h = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      },
        p = o.prototype.emit;

      function l(t, e, r) {
        this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
      }

      o(l.prototype), l.prototype.subEvents = function () {
        if (!this.subs) {
          var t = this.io;
          this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose"))];
        }
      }, l.prototype.open = l.prototype.connect = function () {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
      }, l.prototype.send = function () {
        var t = i(arguments);
        return t.unshift("message"), this.emit.apply(this, t), this;
      }, l.prototype.emit = function (t) {
        if (h.hasOwnProperty(t)) return p.apply(this, arguments), this;
        var e = i(arguments),
          r = {
            type: (void 0 !== this.flags.binary ? this.flags.binary : f(e)) ? n.BINARY_EVENT : n.EVENT,
            data: e,
            options: {}
          };
        return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this;
      }, l.prototype.packet = function (t) {
        t.nsp = this.nsp, this.io.packet(t);
      }, l.prototype.onopen = function () {
        if (u("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
          var t = "object" == typeof this.query ? c.encode(this.query) : this.query;
          u("sending connect packet with query %s", t), this.packet({
            type: n.CONNECT,
            query: t
          });
        } else this.packet({
          type: n.CONNECT
        });
      }, l.prototype.onclose = function (t) {
        u("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
      }, l.prototype.onpacket = function (t) {
        var e = t.nsp === this.nsp,
          r = t.type === n.ERROR && "/" === t.nsp;
        if (e || r) switch (t.type) {
          case n.CONNECT:
            this.onconnect();
            break;

          case n.EVENT:
          case n.BINARY_EVENT:
            this.onevent(t);
            break;

          case n.ACK:
          case n.BINARY_ACK:
            this.onack(t);
            break;

          case n.DISCONNECT:
            this.ondisconnect();
            break;

          case n.ERROR:
            this.emit("error", t.data);
        }
      }, l.prototype.onevent = function (t) {
        var e = t.data || [];
        u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? p.apply(this, e) : this.receiveBuffer.push(e);
      }, l.prototype.ack = function (t) {
        var e = this,
          r = !1;
        return function () {
          if (!r) {
            r = !0;
            var o = i(arguments);
            u("sending ack %j", o), e.packet({
              type: f(o) ? n.BINARY_ACK : n.ACK,
              id: t,
              data: o
            });
          }
        };
      }, l.prototype.onack = function (t) {
        var e = this.acks[t.id];
        "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u("bad ack %s", t.id);
      }, l.prototype.onconnect = function () {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
      }, l.prototype.emitBuffered = function () {
        var t;

        for (t = 0; t < this.receiveBuffer.length; t++) p.apply(this, this.receiveBuffer[t]);

        for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);

        this.sendBuffer = [];
      }, l.prototype.ondisconnect = function () {
        u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
      }, l.prototype.destroy = function () {
        if (this.subs) {
          for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();

          this.subs = null;
        }

        this.io.destroy(this);
      }, l.prototype.close = l.prototype.disconnect = function () {
        return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({
          type: n.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
      }, l.prototype.compress = function (t) {
        return this.flags.compress = t, this;
      }, l.prototype.binary = function (t) {
        return this.flags.binary = t, this;
      };
    }, function (t, e, r) {
      var n = r(19),
        o = r(7),
        i = r(3),
        s = r(4),
        a = r(6),
        u = r(5),
        c = r(0)("socket.io-client:manager"),
        f = r(11),
        h = r(10),
        p = Object.prototype.hasOwnProperty;

      function l(t, e) {
        if (!(this instanceof l)) return new l(t, e);
        t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new h({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var r = e.parser || s;
        this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open();
      }

      t.exports = l, l.prototype.emitAll = function () {
        for (var t in this.emit.apply(this, arguments), this.nsps) p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
      }, l.prototype.updateSocketIds = function () {
        for (var t in this.nsps) p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
      }, l.prototype.generateId = function (t) {
        return ("/" === t ? "" : t + "#") + this.engine.id;
      }, i(l.prototype), l.prototype.reconnection = function (t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
      }, l.prototype.reconnectionAttempts = function (t) {
        return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
      }, l.prototype.reconnectionDelay = function (t) {
        return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
      }, l.prototype.randomizationFactor = function (t) {
        return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
      }, l.prototype.reconnectionDelayMax = function (t) {
        return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
      }, l.prototype.timeout = function (t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout;
      }, l.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
      }, l.prototype.open = l.prototype.connect = function (t, e) {
        if (c("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        c("opening %s", this.uri), this.engine = n(this.uri, this.opts);
        var r = this.engine,
          o = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var i = a(r, "open", function () {
          o.onopen(), t && t();
        }),
          s = a(r, "error", function (e) {
            if (c("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {
              var r = new Error("Connection error");
              r.data = e, t(r);
            } else o.maybeReconnectOnOpen();
          });

        if (!1 !== this._timeout) {
          var u = this._timeout;
          c("connect attempt will timeout after %d", u);
          var f = setTimeout(function () {
            c("connect attempt timed out after %d", u), i.destroy(), r.close(), r.emit("error", "timeout"), o.emitAll("connect_timeout", u);
          }, u);
          this.subs.push({
            destroy: function () {
              clearTimeout(f);
            }
          });
        }

        return this.subs.push(i), this.subs.push(s), this;
      }, l.prototype.onopen = function () {
        c("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var t = this.engine;
        this.subs.push(a(t, "data", u(this, "ondata"))), this.subs.push(a(t, "ping", u(this, "onping"))), this.subs.push(a(t, "pong", u(this, "onpong"))), this.subs.push(a(t, "error", u(this, "onerror"))), this.subs.push(a(t, "close", u(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", u(this, "ondecoded")));
      }, l.prototype.onping = function () {
        this.lastPing = new Date(), this.emitAll("ping");
      }, l.prototype.onpong = function () {
        this.emitAll("pong", new Date() - this.lastPing);
      }, l.prototype.ondata = function (t) {
        this.decoder.add(t);
      }, l.prototype.ondecoded = function (t) {
        this.emit("packet", t);
      }, l.prototype.onerror = function (t) {
        c("error", t), this.emitAll("error", t);
      }, l.prototype.socket = function (t, e) {
        var r = this.nsps[t];

        if (!r) {
          r = new o(this, t, e), this.nsps[t] = r;
          var n = this;
          r.on("connecting", i), r.on("connect", function () {
            r.id = n.generateId(t);
          }), this.autoConnect && i();
        }

        function i() {
          ~f(n.connecting, r) || n.connecting.push(r);
        }

        return r;
      }, l.prototype.destroy = function (t) {
        var e = f(this.connecting, t);
        ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
      }, l.prototype.packet = function (t) {
        c("writing packet %j", t);
        var e = this;
        t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (r) {
          for (var n = 0; n < r.length; n++) e.engine.write(r[n], t.options);

          e.encoding = !1, e.processPacketQueue();
        }));
      }, l.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var t = this.packetBuffer.shift();
          this.packet(t);
        }
      }, l.prototype.cleanup = function () {
        c("cleanup");

        for (var t = this.subs.length, e = 0; e < t; e++) {
          this.subs.shift().destroy();
        }

        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
      }, l.prototype.close = l.prototype.disconnect = function () {
        c("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
      }, l.prototype.onclose = function (t) {
        c("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
      }, l.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;
        var t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) c("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
          var e = this.backoff.duration();
          c("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
          var r = setTimeout(function () {
            t.skipReconnect || (c("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
              e ? (c("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (c("reconnect success"), t.onreconnect());
            }));
          }, e);
          this.subs.push({
            destroy: function () {
              clearTimeout(r);
            }
          });
        }
      }, l.prototype.onreconnect = function () {
        var t = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
      };
    }, function (t, e, r) {
      (function (e) {
        t.exports = function (t) {
          return r && e.Buffer.isBuffer(t) || n && (t instanceof e.ArrayBuffer || o(t));
        };

        var r = "function" == typeof e.Buffer && "function" == typeof e.Buffer.isBuffer,
          n = "function" == typeof e.ArrayBuffer,
          o = n && "function" == typeof e.ArrayBuffer.isView ? e.ArrayBuffer.isView : function (t) {
            return t.buffer instanceof e.ArrayBuffer;
          };
      }).call(this, r(1));
    }, function (t, e) {
      function r(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
      }

      t.exports = r, r.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);

        if (this.jitter) {
          var e = Math.random(),
            r = Math.floor(e * this.jitter * t);
          t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
        }

        return 0 | Math.min(t, this.max);
      }, r.prototype.reset = function () {
        this.attempts = 0;
      }, r.prototype.setMin = function (t) {
        this.ms = t;
      }, r.prototype.setMax = function (t) {
        this.max = t;
      }, r.prototype.setJitter = function (t) {
        this.jitter = t;
      };
    }, function (t, e) {
      var r = [].indexOf;

      t.exports = function (t, e) {
        if (r) return t.indexOf(e);

        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;

        return -1;
      };
    }, function (t, e) {
      var r = {}.toString;

      t.exports = Array.isArray || function (t) {
        return "[object Array]" == r.call(t);
      };
    }, function (t, e) {
      e.read = function (t, e, r, n, o) {
        var i,
          s,
          a = 8 * o - n - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          f = -7,
          h = r ? o - 1 : 0,
          p = r ? -1 : 1,
          l = t[e + h];

        for (h += p, i = l & (1 << -f) - 1, l >>= -f, f += a; f > 0; i = 256 * i + t[e + h], h += p, f -= 8);

        for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + t[e + h], h += p, f -= 8);

        if (0 === i) i = 1 - c; else {
          if (i === u) return s ? NaN : 1 / 0 * (l ? -1 : 1);
          s += Math.pow(2, n), i -= c;
        }
        return (l ? -1 : 1) * s * Math.pow(2, i - n);
      }, e.write = function (t, e, r, n, o, i) {
        var s,
          a,
          u,
          c = 8 * i - o - 1,
          f = (1 << c) - 1,
          h = f >> 1,
          p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          l = n ? 0 : i - 1,
          d = n ? 1 : -1,
          y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s-- , u *= 2), (e += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 && (s++ , u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -= 8);

        for (s = s << o | a, c += o; c > 0; t[r + l] = 255 & s, l += d, s /= 256, c -= 8);

        t[r + l - d] |= 128 * y;
      };
    }, function (t, e, r) {

      e.byteLength = function (t) {
        var e = c(t),
          r = e[0],
          n = e[1];
        return 3 * (r + n) / 4 - n;
      }, e.toByteArray = function (t) {
        for (var e, r = c(t), n = r[0], s = r[1], a = new i(function (t, e, r) {
          return 3 * (e + r) / 4 - r;
        }(0, n, s)), u = 0, f = s > 0 ? n - 4 : n, h = 0; h < f; h += 4) e = o[t.charCodeAt(h)] << 18 | o[t.charCodeAt(h + 1)] << 12 | o[t.charCodeAt(h + 2)] << 6 | o[t.charCodeAt(h + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;

        2 === s && (e = o[t.charCodeAt(h)] << 2 | o[t.charCodeAt(h + 1)] >> 4, a[u++] = 255 & e);
        1 === s && (e = o[t.charCodeAt(h)] << 10 | o[t.charCodeAt(h + 1)] << 4 | o[t.charCodeAt(h + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e);
        return a;
      }, e.fromByteArray = function (t) {
        for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(f(t, s, s + 16383 > a ? a : s + 16383));

        1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
        return i.join("");
      };

      for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], o[s.charCodeAt(a)] = a;

      function c(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
      }

      function f(t, e, r) {
        for (var o, i, s = [], a = e; a < r; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);

        return s.join("");
      }

      o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
    }, function (t, e, r) {

      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var n = r(14),
          o = r(13),
          i = r(12);

        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }

        function a(t, e) {
          if (s() < e) throw new RangeError("Invalid typed array length");
          return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
        }

        function u(t, e, r) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);

          if ("number" == typeof t) {
            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
            return h(this, t);
          }

          return c(this, t, e, r);
        }

        function c(t, e, r, n) {
          if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
            if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
            e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
            u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = p(t, e);
            return t;
          }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
            "string" == typeof r && "" !== r || (r = "utf8");
            if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | d(e, r),
              o = (t = a(t, n)).write(e, r);
            o !== n && (t = t.slice(0, o));
            return t;
          }(t, e, r) : function (t, e) {
            if (u.isBuffer(e)) {
              var r = 0 | l(e.length);
              return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
            }

            if (e) {
              if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);
              if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
            }

            var n;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          }(t, e);
        }

        function f(t) {
          if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
          if (t < 0) throw new RangeError('"size" argument must not be negative');
        }

        function h(t, e) {
          if (f(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) t[r] = 0;
          return t;
        }

        function p(t, e) {
          var r = e.length < 0 ? 0 : 0 | l(e.length);
          t = a(t, r);

          for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];

          return t;
        }

        function l(t) {
          if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
          return 0 | t;
        }

        function d(t, e) {
          if (u.isBuffer(t)) return t.length;
          if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var r = t.length;
          if (0 === r) return 0;

          for (var n = !1; ;) switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;

            case "utf8":
            case "utf-8":
            case void 0:
              return j(t).length;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;

            case "hex":
              return r >>> 1;

            case "base64":
              return q(t).length;

            default:
              if (n) return j(t).length;
              e = ("" + e).toLowerCase(), n = !0;
          }
        }

        function y(t, e, r) {
          var n = t[e];
          t[e] = t[r], t[r] = n;
        }

        function g(t, e, r, n, o) {
          if (0 === t.length) return -1;

          if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
            if (o) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }

          if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, r, n, o);
          if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : v(t, [e], r, n, o);
          throw new TypeError("val must be string, number or Buffer");
        }

        function v(t, e, r, n, o) {
          var i,
            s = 1,
            a = t.length,
            u = e.length;

          if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (t.length < 2 || e.length < 2) return -1;
            s = 2, a /= 2, u /= 2, r /= 2;
          }

          function c(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }

          if (o) {
            var f = -1;

            for (i = r; i < a; i++) if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
              if (-1 === f && (f = i), i - f + 1 === u) return f * s;
            } else -1 !== f && (i -= i - f), f = -1;
          } else for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
            for (var h = !0, p = 0; p < u; p++) if (c(t, i + p) !== c(e, p)) {
              h = !1;
              break;
            }

            if (h) return i;
          }

          return -1;
        }

        function b(t, e, r, n) {
          r = Number(r) || 0;
          var o = t.length - r;
          n ? (n = Number(n)) > o && (n = o) : n = o;
          var i = e.length;
          if (i % 2 != 0) throw new TypeError("Invalid hex string");
          n > i / 2 && (n = i / 2);

          for (var s = 0; s < n; ++s) {
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[r + s] = a;
          }

          return s;
        }

        function m(t, e, r, n) {
          return F(j(e, t.length - r), t, r, n);
        }

        function w(t, e, r, n) {
          return F(function (t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));

            return e;
          }(e), t, r, n);
        }

        function A(t, e, r, n) {
          return w(t, e, r, n);
        }

        function _(t, e, r, n) {
          return F(q(e), t, r, n);
        }

        function E(t, e, r, n) {
          return F(function (t, e) {
            for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);

            return i;
          }(e, t.length - r), t, r, n);
        }

        function k(t, e, r) {
          return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
        }

        function B(t, e, r) {
          r = Math.min(t.length, r);

          for (var n = [], o = e; o < r;) {
            var i,
              s,
              a,
              u,
              c = t[o],
              f = null,
              h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (o + h <= r) switch (h) {
              case 1:
                c < 128 && (f = c);
                break;

              case 2:
                128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                break;

              case 3:
                i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                break;

              case 4:
                i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u);
            }
            null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), o += h;
          }

          return function (t) {
            var e = t.length;
            if (e <= R) return String.fromCharCode.apply(String, t);
            var r = "",
              n = 0;

            for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += R));

            return r;
          }(n);
        }

        e.Buffer = u, e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return u.alloc(+t);
        }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
          try {
            var t = new Uint8Array(1);
            return t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              }
            }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
          } catch (t) {
            return !1;
          }
        }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
          return t.__proto__ = u.prototype, t;
        }, u.from = function (t, e, r) {
          return c(null, t, e, r);
        }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
          value: null,
          configurable: !0
        })), u.alloc = function (t, e, r) {
          return function (t, e, r, n) {
            return f(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
          }(null, t, e, r);
        }, u.allocUnsafe = function (t) {
          return h(null, t);
        }, u.allocUnsafeSlow = function (t) {
          return h(null, t);
        }, u.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }, u.compare = function (t, e) {
          if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;

          for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) if (t[o] !== e[o]) {
            r = t[o], n = e[o];
            break;
          }

          return r < n ? -1 : n < r ? 1 : 0;
        }, u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;

            default:
              return !1;
          }
        }, u.concat = function (t, e) {
          if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          var r;
          if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var n = u.allocUnsafe(e),
            o = 0;

          for (r = 0; r < t.length; ++r) {
            var s = t[r];
            if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
            s.copy(n, o), o += s.length;
          }

          return n;
        }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

          for (var e = 0; e < t; e += 2) y(this, e, e + 1);

          return this;
        }, u.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

          for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);

          return this;
        }, u.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

          for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);

          return this;
        }, u.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : function (t, e, r) {
            var n = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (e >>>= 0)) return "";

            for (t || (t = "utf8"); ;) switch (t) {
              case "hex":
                return T(this, e, r);

              case "utf8":
              case "utf-8":
                return B(this, e, r);

              case "ascii":
                return P(this, e, r);

              case "latin1":
              case "binary":
                return S(this, e, r);

              case "base64":
                return k(this, e, r);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return O(this, e, r);

              default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(), n = !0;
            }
          }.apply(this, arguments);
        }, u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }, u.prototype.inspect = function () {
          var t = "",
            r = e.INSPECT_MAX_BYTES;
          return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
        }, u.prototype.compare = function (t, e, r, n, o) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
          if (n >= o && e >= r) return 0;
          if (n >= o) return -1;
          if (e >= r) return 1;
          if (e >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;

          for (var i = o - n, s = r - e, a = Math.min(i, s), c = this.slice(n, o), f = t.slice(e, r), h = 0; h < a; ++h) if (c[h] !== f[h]) {
            i = c[h], s = f[h];
            break;
          }

          return i < s ? -1 : s < i ? 1 : 0;
        }, u.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }, u.prototype.indexOf = function (t, e, r) {
          return g(this, t, e, r, !0);
        }, u.prototype.lastIndexOf = function (t, e, r) {
          return g(this, t, e, r, !1);
        }, u.prototype.write = function (t, e, r, n) {
          if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
          }
          var o = this.length - e;
          if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");

          for (var i = !1; ;) switch (n) {
            case "hex":
              return b(this, t, e, r);

            case "utf8":
            case "utf-8":
              return m(this, t, e, r);

            case "ascii":
              return w(this, t, e, r);

            case "latin1":
            case "binary":
              return A(this, t, e, r);

            case "base64":
              return _(this, t, e, r);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return E(this, t, e, r);

            default:
              if (i) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), i = !0;
          }
        }, u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var R = 4096;

        function P(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);

          for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);

          return n;
        }

        function S(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);

          for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);

          return n;
        }

        function T(t, e, r) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);

          for (var o = "", i = e; i < r; ++i) o += D(t[i]);

          return o;
        }

        function O(t, e, r) {
          for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);

          return o;
        }

        function x(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
        }

        function C(t, e, r, n, o, i) {
          if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }

        function U(t, e, r, n) {
          e < 0 && (e = 65535 + e + 1);

          for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
        }

        function L(t, e, r, n) {
          e < 0 && (e = 4294967295 + e + 1);

          for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
        }

        function I(t, e, r, n, o, i) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }

        function N(t, e, r, n, i) {
          return i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
        }

        function M(t, e, r, n, i) {
          return i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
        }

        u.prototype.slice = function (t, e) {
          var r,
            n = this.length;
          if (t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = u.prototype; else {
            var o = e - t;
            r = new u(o, void 0);

            for (var i = 0; i < o; ++i) r[i] = this[i + t];
          }
          return r;
        }, u.prototype.readUIntLE = function (t, e, r) {
          t |= 0, e |= 0, r || x(t, e, this.length);

          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;

          return n;
        }, u.prototype.readUIntBE = function (t, e, r) {
          t |= 0, e |= 0, r || x(t, e, this.length);

          for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;

          return n;
        }, u.prototype.readUInt8 = function (t, e) {
          return e || x(t, 1, this.length), this[t];
        }, u.prototype.readUInt16LE = function (t, e) {
          return e || x(t, 2, this.length), this[t] | this[t + 1] << 8;
        }, u.prototype.readUInt16BE = function (t, e) {
          return e || x(t, 2, this.length), this[t] << 8 | this[t + 1];
        }, u.prototype.readUInt32LE = function (t, e) {
          return e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
        }, u.prototype.readUInt32BE = function (t, e) {
          return e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
        }, u.prototype.readIntLE = function (t, e, r) {
          t |= 0, e |= 0, r || x(t, e, this.length);

          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;

          return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }, u.prototype.readIntBE = function (t, e, r) {
          t |= 0, e |= 0, r || x(t, e, this.length);

          for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;

          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
        }, u.prototype.readInt8 = function (t, e) {
          return e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }, u.prototype.readInt16LE = function (t, e) {
          e || x(t, 2, this.length);
          var r = this[t] | this[t + 1] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, u.prototype.readInt16BE = function (t, e) {
          e || x(t, 2, this.length);
          var r = this[t + 1] | this[t] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, u.prototype.readInt32LE = function (t, e) {
          return e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
        }, u.prototype.readInt32BE = function (t, e) {
          return e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
        }, u.prototype.readFloatLE = function (t, e) {
          return e || x(t, 4, this.length), o.read(this, t, !0, 23, 4);
        }, u.prototype.readFloatBE = function (t, e) {
          return e || x(t, 4, this.length), o.read(this, t, !1, 23, 4);
        }, u.prototype.readDoubleLE = function (t, e) {
          return e || x(t, 8, this.length), o.read(this, t, !0, 52, 8);
        }, u.prototype.readDoubleBE = function (t, e) {
          return e || x(t, 8, this.length), o.read(this, t, !1, 52, 8);
        }, u.prototype.writeUIntLE = function (t, e, r, n) {
          (t = +t, e |= 0, r |= 0, n) || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var o = 1,
            i = 0;

          for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;

          return e + r;
        }, u.prototype.writeUIntBE = function (t, e, r, n) {
          (t = +t, e |= 0, r |= 0, n) || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var o = r - 1,
            i = 1;

          for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;

          return e + r;
        }, u.prototype.writeUInt8 = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
        }, u.prototype.writeUInt16LE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : U(this, t, e, !0), e + 2;
        }, u.prototype.writeUInt16BE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : U(this, t, e, !1), e + 2;
        }, u.prototype.writeUInt32LE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4;
        }, u.prototype.writeUInt32BE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
        }, u.prototype.writeIntLE = function (t, e, r, n) {
          if (t = +t, e |= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            C(this, t, e, r, o - 1, -o);
          }

          var i = 0,
            s = 1,
            a = 0;

          for (this[e] = 255 & t; ++i < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;

          return e + r;
        }, u.prototype.writeIntBE = function (t, e, r, n) {
          if (t = +t, e |= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            C(this, t, e, r, o - 1, -o);
          }

          var i = r - 1,
            s = 1,
            a = 0;

          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;

          return e + r;
        }, u.prototype.writeInt8 = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
        }, u.prototype.writeInt16LE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : U(this, t, e, !0), e + 2;
        }, u.prototype.writeInt16BE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : U(this, t, e, !1), e + 2;
        }, u.prototype.writeInt32LE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4;
        }, u.prototype.writeInt32BE = function (t, e, r) {
          return t = +t, e |= 0, r || C(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
        }, u.prototype.writeFloatLE = function (t, e, r) {
          return N(this, t, e, !0, r);
        }, u.prototype.writeFloatBE = function (t, e, r) {
          return N(this, t, e, !1, r);
        }, u.prototype.writeDoubleLE = function (t, e, r) {
          return M(this, t, e, !0, r);
        }, u.prototype.writeDoubleBE = function (t, e, r) {
          return M(this, t, e, !1, r);
        }, u.prototype.copy = function (t, e, r, n) {
          if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
          var o,
            i = n - r;
          if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r]; else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
          return i;
        }, u.prototype.fill = function (t, e, r, n) {
          if ("string" == typeof t) {
            if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
              var o = t.charCodeAt(0);
              o < 256 && (t = o);
            }

            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof t && (t &= 255);

          if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
          if (r <= e) return this;
          var i;
          if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
            var s = u.isBuffer(t) ? t : j(new u(t, n).toString()),
              a = s.length;

            for (i = 0; i < r - e; ++i) this[i + e] = s[i % a];
          }
          return this;
        };
        var Y = /[^+\/0-9A-Za-z-_]/g;

        function D(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }

        function j(t, e) {
          var r;
          e = e || 1 / 0;

          for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
              if (!o) {
                if (r > 56319) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }

                if (s + 1 === n) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }

                o = r;
                continue;
              }

              if (r < 56320) {
                (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                continue;
              }

              r = 65536 + (o - 55296 << 10 | r - 56320);
            } else o && (e -= 3) > -1 && i.push(239, 191, 189);

            if (o = null, r < 128) {
              if ((e -= 1) < 0) break;
              i.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              i.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
          }

          return i;
        }

        function q(t) {
          return n.toByteArray(function (t) {
            if ((t = function (t) {
              return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            }(t).replace(Y, "")).length < 2) return "";

            for (; t.length % 4 != 0;) t += "=";

            return t;
          }(t));
        }

        function F(t, e, r, n) {
          for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];

          return o;
        }
      }).call(this, r(1));
    }, function (t, e, r) {
      (function (e) {
        var n = r(2),
          o = Object.prototype.toString,
          i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
          s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);

        t.exports = function t(r) {
          if (!r || "object" != typeof r) return !1;

          if (n(r)) {
            for (var o = 0, a = r.length; o < a; o++) if (t(r[o])) return !0;

            return !1;
          }

          if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || i && r instanceof Blob || s && r instanceof File) return !0;
          if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), !0);

          for (var u in r) if (Object.prototype.hasOwnProperty.call(r, u) && t(r[u])) return !0;

          return !1;
        };
      }).call(this, r(15).Buffer);
    }, function (t, e) {
      e.encode = function (t) {
        var e = "";

        for (var r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));

        return e;
      }, e.decode = function (t) {
        for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
          var i = r[n].split("=");
          e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        }

        return e;
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) r[n - e] = t[n];

        return r;
      };
    }, function (t, e, r) {
      t.exports = function (t) {
        var e = {};

        function r(n) {
          if (e[n]) return e[n].exports;
          var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }

        return r.m = t, r.c = e, r.d = function (t, e, n) {
          r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
          });
        }, r.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, r.t = function (t, e) {
          if (1 & e && (t = r(t)), 8 & e) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
            return t[e];
          }.bind(null, o));
          return n;
        }, r.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return r.d(e, "a", e), e;
        }, r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, r.p = "", r(r.s = 29);
      }([function (t, e) {
        var r;

        r = function () {
          return this;
        }();

        try {
          r = r || Function("return this")() || (0, eval)("this");
        } catch (t) {
          "object" == typeof window && (r = window);
        }

        t.exports = r;
      }, function (t, e, r) {
        (function (t) {
          var n,
            o = r(26),
            i = r(25),
            s = r(19),
            a = r(18),
            u = r(17);
          t && t.ArrayBuffer && (n = r(15));
          var c = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            f = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
            h = c || f;
          e.protocol = 3;
          var p = e.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
          },
            l = o(p),
            d = {
              type: "error",
              data: "parser error"
            },
            y = r(14);

          function g(t, e, r) {
            for (var n = new Array(t.length), o = a(t.length, r), i = function (t, r, o) {
              e(r, function (e, r) {
                n[t] = r, o(e, n);
              });
            }, s = 0; s < t.length; s++) i(s, t[s], o);
          }

          e.encodePacket = function (r, n, o, i) {
            "function" == typeof n && (i = n, n = !1), "function" == typeof o && (i = o, o = null);
            var s = void 0 === r.data ? void 0 : r.data.buffer || r.data;
            if (t.ArrayBuffer && s instanceof ArrayBuffer) return function (t, r, n) {
              if (!r) return e.encodeBase64Packet(t, n);
              var o = t.data,
                i = new Uint8Array(o),
                s = new Uint8Array(1 + o.byteLength);
              s[0] = p[t.type];

              for (var a = 0; a < i.length; a++) s[a + 1] = i[a];

              return n(s.buffer);
            }(r, n, i);
            if (y && s instanceof t.Blob) return function (t, r, n) {
              if (!r) return e.encodeBase64Packet(t, n);
              if (h) return function (t, r, n) {
                if (!r) return e.encodeBase64Packet(t, n);
                var o = new FileReader();
                return o.onload = function () {
                  t.data = o.result, e.encodePacket(t, r, !0, n);
                }, o.readAsArrayBuffer(t.data);
              }(t, r, n);
              var o = new Uint8Array(1);
              o[0] = p[t.type];
              var i = new y([o.buffer, t.data]);
              return n(i);
            }(r, n, i);
            if (s && s.base64) return function (t, r) {
              var n = "b" + e.packets[t.type] + t.data.data;
              return r(n);
            }(r, i);
            var a = p[r.type];
            return void 0 !== r.data && (a += o ? u.encode(String(r.data), {
              strict: !1
            }) : String(r.data)), i("" + a);
          }, e.encodeBase64Packet = function (r, n) {
            var o,
              i = "b" + e.packets[r.type];

            if (y && r.data instanceof t.Blob) {
              var s = new FileReader();
              return s.onload = function () {
                var t = s.result.split(",")[1];
                n(i + t);
              }, s.readAsDataURL(r.data);
            }

            try {
              o = String.fromCharCode.apply(null, new Uint8Array(r.data));
            } catch (t) {
              for (var a = new Uint8Array(r.data), u = new Array(a.length), c = 0; c < a.length; c++) u[c] = a[c];

              o = String.fromCharCode.apply(null, u);
            }

            return i += t.btoa(o), n(i);
          }, e.decodePacket = function (t, r, n) {
            if (void 0 === t) return d;

            if ("string" == typeof t) {
              if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);
              if (n && !1 === (t = function (t) {
                try {
                  t = u.decode(t, {
                    strict: !1
                  });
                } catch (t) {
                  return !1;
                }

                return t;
              }(t))) return d;
              var o = t.charAt(0);
              return Number(o) == o && l[o] ? t.length > 1 ? {
                type: l[o],
                data: t.substring(1)
              } : {
                  type: l[o]
                } : d;
            }

            o = new Uint8Array(t)[0];
            var i = s(t, 1);
            return y && "blob" === r && (i = new y([i])), {
              type: l[o],
              data: i
            };
          }, e.decodeBase64Packet = function (t, e) {
            var r = l[t.charAt(0)];
            if (!n) return {
              type: r,
              data: {
                base64: !0,
                data: t.substr(1)
              }
            };
            var o = n.decode(t.substr(1));
            return "blob" === e && y && (o = new y([o])), {
              type: r,
              data: o
            };
          }, e.encodePayload = function (t, r, n) {
            "function" == typeof r && (n = r, r = null);
            var o = i(t);
            return r && o ? y && !h ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n) : t.length ? void g(t, function (t, n) {
              e.encodePacket(t, !!o && r, !1, function (t) {
                n(null, function (t) {
                  return t.length + ":" + t;
                }(t));
              });
            }, function (t, e) {
              return n(e.join(""));
            }) : n("0:");
          }, e.decodePayload = function (t, r, n) {
            if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);
            var o;
            if ("function" == typeof r && (n = r, r = null), "" === t) return n(d, 0, 1);

            for (var i, s, a = "", u = 0, c = t.length; u < c; u++) {
              var f = t.charAt(u);

              if (":" === f) {
                if ("" === a || a != (i = Number(a))) return n(d, 0, 1);
                if (a != (s = t.substr(u + 1, i)).length) return n(d, 0, 1);

                if (s.length) {
                  if (o = e.decodePacket(s, r, !1), d.type === o.type && d.data === o.data) return n(d, 0, 1);
                  if (!1 === n(o, u + i, c)) return;
                }

                u += i, a = "";
              } else a += f;
            }

            return "" !== a ? n(d, 0, 1) : void 0;
          }, e.encodePayloadAsArrayBuffer = function (t, r) {
            if (!t.length) return r(new ArrayBuffer(0));
            g(t, function (t, r) {
              e.encodePacket(t, !0, !0, function (t) {
                return r(null, t);
              });
            }, function (t, e) {
              var n = e.reduce(function (t, e) {
                var r;
                return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;
              }, 0),
                o = new Uint8Array(n),
                i = 0;
              return e.forEach(function (t) {
                var e = "string" == typeof t,
                  r = t;

                if (e) {
                  for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) n[s] = t.charCodeAt(s);

                  r = n.buffer;
                }

                o[i++] = e ? 0 : 1;
                var a = r.byteLength.toString();

                for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);

                for (o[i++] = 255, n = new Uint8Array(r), s = 0; s < n.length; s++) o[i++] = n[s];
              }), r(o.buffer);
            });
          }, e.encodePayloadAsBlob = function (t, r) {
            g(t, function (t, r) {
              e.encodePacket(t, !0, !0, function (t) {
                var e = new Uint8Array(1);

                if (e[0] = 1, "string" == typeof t) {
                  for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);

                  t = n.buffer, e[0] = 0;
                }

                var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
                  s = new Uint8Array(i.length + 1);

                for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);

                if (s[i.length] = 255, y) {
                  var a = new y([e.buffer, s.buffer, t]);
                  r(null, a);
                }
              });
            }, function (t, e) {
              return r(new y(e));
            });
          }, e.decodePayloadAsBinary = function (t, r, n) {
            "function" == typeof r && (n = r, r = null);

            for (var o = t, i = []; o.byteLength > 0;) {
              for (var a = new Uint8Array(o), u = 0 === a[0], c = "", f = 1; 255 !== a[f]; f++) {
                if (c.length > 310) return n(d, 0, 1);
                c += a[f];
              }

              o = s(o, 2 + c.length), c = parseInt(c);
              var h = s(o, 0, c);
              if (u) try {
                h = String.fromCharCode.apply(null, new Uint8Array(h));
              } catch (t) {
                var p = new Uint8Array(h);

                for (h = "", f = 0; f < p.length; f++) h += String.fromCharCode(p[f]);
              }
              i.push(h), o = s(o, c);
            }

            var l = i.length;
            i.forEach(function (t, o) {
              n(e.decodePacket(t, r, !0), o, l);
            });
          };
        }).call(this, r(0));
      }, function (t, e) {
        t.exports = function () {
          return function () { };
        };
      }, function (t, e) {
        e.encode = function (t) {
          var e = "";

          for (var r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));

          return e;
        }, e.decode = function (t) {
          for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
            var i = r[n].split("=");
            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          }

          return e;
        };
      }, function (t, e, r) {
        function n(t) {
          if (t) return function (t) {
            for (var e in n.prototype) t[e] = n.prototype[e];

            return t;
          }(t);
        }

        t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
        }, n.prototype.once = function (t, e) {
          function r() {
            this.off(t, r), e.apply(this, arguments);
          }

          return r.fn = e, this.on(t, r), this;
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
          if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
          var r,
            n = this._callbacks["$" + t];
          if (!n) return this;
          if (1 == arguments.length) return delete this._callbacks["$" + t], this;

          for (var o = 0; o < n.length; o++) if ((r = n[o]) === e || r.fn === e) {
            n.splice(o, 1);
            break;
          }

          return this;
        }, n.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          var e = [].slice.call(arguments, 1),
            r = this._callbacks["$" + t];
          if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
          return this;
        }, n.prototype.listeners = function (t) {
          return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
        }, n.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        };
      }, function (t, e, r) {
        var n = r(1),
          o = r(4);

        function i(t) {
          this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
        }

        t.exports = i, o(i.prototype), i.prototype.onError = function (t, e) {
          var r = new Error(t);
          return r.type = "TransportError", r.description = e, this.emit("error", r), this;
        }, i.prototype.open = function () {
          return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
        }, i.prototype.close = function () {
          return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
        }, i.prototype.send = function (t) {
          if ("open" !== this.readyState) throw new Error("Transport not open");
          this.write(t);
        }, i.prototype.onOpen = function () {
          this.readyState = "open", this.writable = !0, this.emit("open");
        }, i.prototype.onData = function (t) {
          var e = n.decodePacket(t, this.socket.binaryType);
          this.onPacket(e);
        }, i.prototype.onPacket = function (t) {
          this.emit("packet", t);
        }, i.prototype.onClose = function () {
          this.readyState = "closed", this.emit("close");
        };
      }, function (t, e, r) {
        var n = r(27);
        e.websocket = n;
      }, function (t, e) {
        var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

        t.exports = function (t) {
          var e = t,
            o = t.indexOf("["),
            i = t.indexOf("]");
          -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));

          for (var s = r.exec(t || ""), a = {}, u = 14; u--;) a[n[u]] = s[u] || "";

          return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
        };
      }, function (t, e) {
        var r = [].indexOf;

        t.exports = function (t, e) {
          if (r) return t.indexOf(e);

          for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;

          return -1;
        };
      }, function (t, e, r) {

        class n {
          constructor(t, e) {
            this.target = e, this.type = t;
          }

        }

        class o extends n {
          constructor(t, e) {
            super("message", e), this.data = t;
          }

        }

        class i extends n {
          constructor(t, e, r) {
            super("close", r), this.wasClean = r._closeFrameReceived && r._closeFrameSent, this.reason = e, this.code = t;
          }

        }

        class s extends n {
          constructor(t) {
            super("open", t);
          }

        }

        class a extends n {
          constructor(t, e) {
            super("error", e), this.message = t.message, this.error = t;
          }

        }

        const u = {
          addEventListener(t, e) {
            function r(t) {
              e.call(this, new o(t, this));
            }

            function n(t, r) {
              e.call(this, new i(t, r, this));
            }

            function u(t) {
              e.call(this, new a(t, this));
            }

            function c() {
              e.call(this, new s(this));
            }

            "function" == typeof e && ("message" === t ? (r._listener = e, this.on(t, r)) : "close" === t ? (n._listener = e, this.on(t, n)) : "error" === t ? (u._listener = e, this.on(t, u)) : "open" === t ? (c._listener = e, this.on(t, c)) : this.on(t, e));
          },

          removeEventListener(t, e) {
            const r = this.listeners(t);

            for (var n = 0; n < r.length; n++) r[n] !== e && r[n]._listener !== e || this.removeListener(t, r[n]);
          }

        };
        t.exports = u;
      }, function (t, e) {
        function r() {
          this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
        }

        function n(t) {
          return "function" == typeof t;
        }

        function o(t) {
          return "object" == typeof t && null !== t;
        }

        function i(t) {
          return void 0 === t;
        }

        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
          return this._maxListeners = t, this;
        }, r.prototype.emit = function (t) {
          var e, r, s, a, u, c;

          if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1]) instanceof Error) throw e;
            var f = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw f.context = e, f;
          }

          if (i(r = this._events[t])) return !1;
          if (n(r)) switch (arguments.length) {
            case 1:
              r.call(this);
              break;

            case 2:
              r.call(this, arguments[1]);
              break;

            case 3:
              r.call(this, arguments[1], arguments[2]);
              break;

            default:
              a = Array.prototype.slice.call(arguments, 1), r.apply(this, a);
          } else if (o(r)) for (a = Array.prototype.slice.call(arguments, 1), s = (c = r.slice()).length, u = 0; u < s; u++) c[u].apply(this, a);
          return !0;
        }, r.prototype.addListener = function (t, e) {
          var s;
          if (!n(e)) throw TypeError("listener must be a function");
          return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (s = i(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this;
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (t, e) {
          if (!n(e)) throw TypeError("listener must be a function");
          var r = !1;

          function o() {
            this.removeListener(t, o), r || (r = !0, e.apply(this, arguments));
          }

          return o.listener = e, this.on(t, o), this;
        }, r.prototype.removeListener = function (t, e) {
          var r, i, s, a;
          if (!n(e)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[t]) return this;
          if (s = (r = this._events[t]).length, i = -1, r === e || n(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (o(r)) {
            for (a = s; a-- > 0;) if (r[a] === e || r[a].listener && r[a].listener === e) {
              i = a;
              break;
            }

            if (i < 0) return this;
            1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e);
          }
          return this;
        }, r.prototype.removeAllListeners = function (t) {
          var e, r;
          if (!this._events) return this;
          if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;

          if (0 === arguments.length) {
            for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);

            return this.removeAllListeners("removeListener"), this._events = {}, this;
          }

          if (n(r = this._events[t])) this.removeListener(t, r); else if (r) for (; r.length;) this.removeListener(t, r[r.length - 1]);
          return delete this._events[t], this;
        }, r.prototype.listeners = function (t) {
          return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
        }, r.prototype.listenerCount = function (t) {
          if (this._events) {
            var e = this._events[t];
            if (n(e)) return 1;
            if (e) return e.length;
          }

          return 0;
        }, r.listenerCount = function (t, e) {
          return t.listenerCount(e);
        };
      }, function (t, e, r) {
        const n = r(10),
          o = r(9),
          i = r(2)("weapp-socket:"),
          s = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];

        class a extends n {
          constructor(t, e, r) {
            super(), this.readyState = a.CONNECTING, this.protocol = "", this._socket = null, null !== t && (Array.isArray(e) ? e = e.join(", ") : "object" == typeof e && null !== e && (r = e, e = void 0), function (t, e, r) {
              Object.assign(r, {
                url: t,
                header: {
                  "content-type": "application/json"
                },
                protocols: e,
                method: "GET"
              }), this._socket = function (t) {
                const e = wx.connectSocket(t);
                return i("socketTask: ", e), e || {
                  onClose: wx.onSocketClose,
                  onOpen: wx.onSocketOpen,
                  onError: wx.onSocketError,
                  onMessage: wx.onSocketMessage,
                  send: wx.sendSocketMessage,
                  close: wx.closeSocket
                };
              }(r), this.addSocketEventListeners();
            }.call(this, t, e, r));
          }

          get CONNECTING() {
            return a.CONNECTING;
          }

          get CLOSING() {
            return a.CLOSING;
          }

          get CLOSED() {
            return a.CLOSED;
          }

          get OPEN() {
            return a.OPEN;
          }

          addSocketEventListeners() {
            this._socket.onOpen(() => {
              this.readyState = a.OPEN, this.onopen();
            }), this._socket.onClose(t => {
              i("onclose: ", t), this.readyState = a.CLOSED, this.onclose(t.code, t.reason);
            }), this._socket.onError(t => {
              i("onerror: ", t), this.onerror(t);
            }), this._socket.onMessage(t => {
              this.onmessage(t);
            });
          }

          send(t) {
            i("send data: ", t, this.readyState), this.readyState === a.OPEN && this._socket.send({
              data: t
            });
          }

          close(t, e) {
            i("close socket: ", t, e), this.readyState = a.CLOSING, this._socket.close({
              code: t,
              reason: e
            });
          }

        }

        s.forEach((t, e) => {
          a[s[e]] = e;
        }), ["open", "error", "close", "message"].forEach(t => {
          Object.defineProperty(a.prototype, `on${t}`, {
            get() {
              const e = this.listeners(t);

              for (var r = 0; r < e.length; r++) if (e[r]._listener) return e[r]._listener;
            },

            set(e) {
              const r = this.listeners(t);

              for (var n = 0; n < r.length; n++) r[n]._listener && this.removeListener(t, r[n]);

              this.addEventListener(t, e);
            }

          });
        }), a.prototype.addEventListener = o.addEventListener, a.prototype.removeEventListener = o.removeEventListener, t.exports = a;
      }, function (t, e, r) {

        var n,
          o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
          i = 64,
          s = {},
          a = 0,
          u = 0;

        function c(t) {
          var e = "";

          do {
            e = o[t % i] + e, t = Math.floor(t / i);
          } while (t > 0);

          return e;
        }

        function f() {
          var t = c(+new Date());
          return t !== n ? (a = 0, n = t) : t + "." + c(a++);
        }

        for (; u < i; u++) s[o[u]] = u;

        f.encode = c, f.decode = function (t) {
          var e = 0;

          for (u = 0; u < t.length; u++) e = e * i + s[t.charAt(u)];

          return e;
        }, t.exports = f;
      }, function (t, e) {
        t.exports = function (t, e) {
          var r = function () { };

          r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
        };
      }, function (t, e, r) {
        (function (e) {
          var r = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
            n = function () {
              try {
                return 2 === new Blob(["hi"]).size;
              } catch (t) {
                return !1;
              }
            }(),
            o = n && function () {
              try {
                return 2 === new Blob([new Uint8Array([1, 2])]).size;
              } catch (t) {
                return !1;
              }
            }(),
            i = r && r.prototype.append && r.prototype.getBlob;

          function s(t) {
            for (var e = 0; e < t.length; e++) {
              var r = t[e];

              if (r.buffer instanceof ArrayBuffer) {
                var n = r.buffer;

                if (r.byteLength !== n.byteLength) {
                  var o = new Uint8Array(r.byteLength);
                  o.set(new Uint8Array(n, r.byteOffset, r.byteLength)), n = o.buffer;
                }

                t[e] = n;
              }
            }
          }

          t.exports = n ? o ? e.Blob : function (t, e) {
            return s(t), new Blob(t, e || {});
          } : i ? function (t, e) {
            e = e || {};
            var n = new r();
            s(t);

            for (var o = 0; o < t.length; o++) n.append(t[o]);

            return e.type ? n.getBlob(e.type) : n.getBlob();
          } : void 0;
        }).call(this, r(0));
      }, function (t, e) {
        !function () {

          for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++) r[t.charCodeAt(n)] = n;

          e.encode = function (e) {
            var r,
              n = new Uint8Array(e),
              o = n.length,
              i = "";

            for (r = 0; r < o; r += 3) i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];

            return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
          }, e.decode = function (t) {
            var e,
              n,
              o,
              i,
              s,
              a = .75 * t.length,
              u = t.length,
              c = 0;
            "=" === t[t.length - 1] && (a-- , "=" === t[t.length - 2] && a--);
            var f = new ArrayBuffer(a),
              h = new Uint8Array(f);

            for (e = 0; e < u; e += 4) n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], h[c++] = n << 2 | o >> 4, h[c++] = (15 & o) << 4 | i >> 2, h[c++] = (3 & i) << 6 | 63 & s;

            return f;
          };
        }();
      }, function (t, e) {
        t.exports = function (t) {
          return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            }
          }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            }
          }), t.webpackPolyfill = 1), t;
        };
      }, function (t, e, r) {
        (function (t, n) {
          var o;
          /*! https://mths.be/utf8js v2.1.2 by @mathias */

          !function (i) {
            var s = ("object" == typeof t && t && t.exports, "object" == typeof n && n);
            s.global !== s && s.window;
            var a,
              u,
              c,
              f = String.fromCharCode;

            function h(t) {
              for (var e, r, n = [], o = 0, i = t.length; o < i;) (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);

              return n;
            }

            function p(t, e) {
              if (t >= 55296 && t <= 57343) {
                if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                return !1;
              }

              return !0;
            }

            function l(t, e) {
              return f(t >> e & 63 | 128);
            }

            function d(t, e) {
              if (0 == (4294967168 & t)) return f(t);
              var r = "";
              return 0 == (4294965248 & t) ? r = f(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (p(t, e) || (t = 65533), r = f(t >> 12 & 15 | 224), r += l(t, 6)) : 0 == (4292870144 & t) && (r = f(t >> 18 & 7 | 240), r += l(t, 12), r += l(t, 6)), r += f(63 & t | 128);
            }

            function y() {
              if (c >= u) throw Error("Invalid byte index");
              var t = 255 & a[c];
              if (c++ , 128 == (192 & t)) return 63 & t;
              throw Error("Invalid continuation byte");
            }

            function g(t) {
              var e, r;
              if (c > u) throw Error("Invalid byte index");
              if (c == u) return !1;
              if (e = 255 & a[c], c++ , 0 == (128 & e)) return e;

              if (192 == (224 & e)) {
                if ((r = (31 & e) << 6 | y()) >= 128) return r;
                throw Error("Invalid continuation byte");
              }

              if (224 == (240 & e)) {
                if ((r = (15 & e) << 12 | y() << 6 | y()) >= 2048) return p(r, t) ? r : 65533;
                throw Error("Invalid continuation byte");
              }

              if (240 == (248 & e) && (r = (7 & e) << 18 | y() << 12 | y() << 6 | y()) >= 65536 && r <= 1114111) return r;
              throw Error("Invalid UTF-8 detected");
            }

            var v = {
              version: "2.1.2",
              encode: function (t, e) {
                for (var r = !1 !== (e = e || {}).strict, n = h(t), o = n.length, i = -1, s = ""; ++i < o;) s += d(n[i], r);

                return s;
              },
              decode: function (t, e) {
                var r = !1 !== (e = e || {}).strict;
                a = h(t), u = a.length, c = 0;

                for (var n, o = []; !1 !== (n = g(r));) o.push(n);

                return function (t) {
                  for (var e, r = t.length, n = -1, o = ""; ++n < r;) (e = t[n]) > 65535 && (o += f((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += f(e);

                  return o;
                }(o);
              }
            };
            void 0 === (o = function () {
              return v;
            }.call(e, r, e, t)) || (t.exports = o);
          }();
        }).call(this, r(16)(t), r(0));
      }, function (t, e) {
        function r() { }

        t.exports = function (t, e, n) {
          var o = !1;
          return n = n || r, i.count = t, 0 === t ? e() : i;

          function i(t, r) {
            if (i.count <= 0) throw new Error("after called too many times");
            --i.count, t ? (o = !0, e(t), e = n) : 0 !== i.count || o || e(null, r);
          }
        };
      }, function (t, e) {
        t.exports = function (t, e, r) {
          var n = t.byteLength;
          if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);
          if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);

          for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++ , a++) i[a] = o[s];

          return i.buffer;
        };
      }, function (t, e) {
        var r = {}.toString;

        t.exports = Array.isArray || function (t) {
          return "[object Array]" == r.call(t);
        };
      }, function (t, e) {
        var r = {}.toString;

        t.exports = Array.isArray || function (t) {
          return "[object Array]" == r.call(t);
        };
      }, function (t, e) {
        e.read = function (t, e, r, n, o) {
          var i,
            s,
            a = 8 * o - n - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            f = -7,
            h = r ? o - 1 : 0,
            p = r ? -1 : 1,
            l = t[e + h];

          for (h += p, i = l & (1 << -f) - 1, l >>= -f, f += a; f > 0; i = 256 * i + t[e + h], h += p, f -= 8);

          for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + t[e + h], h += p, f -= 8);

          if (0 === i) i = 1 - c; else {
            if (i === u) return s ? NaN : 1 / 0 * (l ? -1 : 1);
            s += Math.pow(2, n), i -= c;
          }
          return (l ? -1 : 1) * s * Math.pow(2, i - n);
        }, e.write = function (t, e, r, n, o, i) {
          var s,
            a,
            u,
            c = 8 * i - o - 1,
            f = (1 << c) - 1,
            h = f >> 1,
            p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : i - 1,
            d = n ? 1 : -1,
            y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

          for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s-- , u *= 2), (e += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 && (s++ , u /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -= 8);

          for (s = s << o | a, c += o; c > 0; t[r + l] = 255 & s, l += d, s /= 256, c -= 8);

          t[r + l - d] |= 128 * y;
        };
      }, function (t, e, r) {

        e.byteLength = function (t) {
          var e = c(t),
            r = e[0],
            n = e[1];
          return 3 * (r + n) / 4 - n;
        }, e.toByteArray = function (t) {
          for (var e, r = c(t), n = r[0], s = r[1], a = new i(NaN), u = 0, f = s > 0 ? n - 4 : n, h = 0; h < f; h += 4) e = o[t.charCodeAt(h)] << 18 | o[t.charCodeAt(h + 1)] << 12 | o[t.charCodeAt(h + 2)] << 6 | o[t.charCodeAt(h + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;

          return 2 === s && (e = o[t.charCodeAt(h)] << 2 | o[t.charCodeAt(h + 1)] >> 4, a[u++] = 255 & e), 1 === s && (e = o[t.charCodeAt(h)] << 10 | o[t.charCodeAt(h + 1)] << 4 | o[t.charCodeAt(h + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e), a;
        }, e.fromByteArray = function (t) {
          for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(f(t, s, s + 16383 > a ? a : s + 16383));

          return 1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")), i.join("");
        };

        for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], o[s.charCodeAt(a)] = a;

        function c(t) {
          var e = t.length;
          if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var r = t.indexOf("=");
          return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
        }

        function f(t, e, r) {
          for (var o, i, s = [], a = e; a < r; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);

          return s.join("");
        }

        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function (t, e, r) {

        (function (t) {
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
           * @license  MIT
           */
          var n = r(23),
            o = r(22),
            i = r(21);

          function s() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }

          function a(t, e) {
            if (s() < e) throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
          }

          function u(t, e, r) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);

            if ("number" == typeof t) {
              if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
              return h(this, t);
            }

            return c(this, t, e, r);
          }

          function c(t, e, r, n) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
              if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
              return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = p(t, e), t;
            }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
              if ("string" == typeof r && "" !== r || (r = "utf8"), !u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
              var n = 0 | d(e, r),
                o = (t = a(t, n)).write(e, r);
              return o !== n && (t = t.slice(0, o)), t;
            }(t, e, r) : function (t, e) {
              if (u.isBuffer(e)) {
                var r = 0 | l(e.length);
                return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
              }

              if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);
                if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
              }

              var n;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t, e);
          }

          function f(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative');
          }

          function h(t, e) {
            if (f(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) t[r] = 0;
            return t;
          }

          function p(t, e) {
            var r = e.length < 0 ? 0 : 0 | l(e.length);
            t = a(t, r);

            for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];

            return t;
          }

          function l(t) {
            if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | t;
          }

          function d(t, e) {
            if (u.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r) return 0;

            for (var n = !1; ;) switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;

              case "utf8":
              case "utf-8":
              case void 0:
                return j(t).length;

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;

              case "hex":
                return r >>> 1;

              case "base64":
                return q(t).length;

              default:
                if (n) return j(t).length;
                e = ("" + e).toLowerCase(), n = !0;
            }
          }

          function y(t, e, r) {
            var n = t[e];
            t[e] = t[r], t[r] = n;
          }

          function g(t, e, r, n, o) {
            if (0 === t.length) return -1;

            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
              if (o) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!o) return -1;
              r = 0;
            }

            if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, r, n, o);
            if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : v(t, [e], r, n, o);
            throw new TypeError("val must be string, number or Buffer");
          }

          function v(t, e, r, n, o) {
            var i,
              s = 1,
              a = t.length,
              u = e.length;

            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
              if (t.length < 2 || e.length < 2) return -1;
              s = 2, a /= 2, u /= 2, r /= 2;
            }

            function c(t, e) {
              return 1 === s ? t[e] : t.readUInt16BE(e * s);
            }

            if (o) {
              var f = -1;

              for (i = r; i < a; i++) if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
                if (-1 === f && (f = i), i - f + 1 === u) return f * s;
              } else -1 !== f && (i -= i - f), f = -1;
            } else for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
              for (var h = !0, p = 0; p < u; p++) if (c(t, i + p) !== c(e, p)) {
                h = !1;
                break;
              }

              if (h) return i;
            }

            return -1;
          }

          function b(t, e, r, n) {
            r = Number(r) || 0;
            var o = t.length - r;
            n ? (n = Number(n)) > o && (n = o) : n = o;
            var i = e.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            n > i / 2 && (n = i / 2);

            for (var s = 0; s < n; ++s) {
              var a = parseInt(e.substr(2 * s, 2), 16);
              if (isNaN(a)) return s;
              t[r + s] = a;
            }

            return s;
          }

          function m(t, e, r, n) {
            return F(j(e, t.length - r), t, r, n);
          }

          function w(t, e, r, n) {
            return F(function (t) {
              for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));

              return e;
            }(e), t, r, n);
          }

          function A(t, e, r, n) {
            return w(t, e, r, n);
          }

          function _(t, e, r, n) {
            return F(q(e), t, r, n);
          }

          function E(t, e, r, n) {
            return F(function (t, e) {
              for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);

              return i;
            }(e, t.length - r), t, r, n);
          }

          function k(t, e, r) {
            return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
          }

          function B(t, e, r) {
            r = Math.min(t.length, r);

            for (var n = [], o = e; o < r;) {
              var i,
                s,
                a,
                u,
                c = t[o],
                f = null,
                h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
              if (o + h <= r) switch (h) {
                case 1:
                  c < 128 && (f = c);
                  break;

                case 2:
                  128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                  break;

                case 3:
                  i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                  break;

                case 4:
                  i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u);
              }
              null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), o += h;
            }

            return function (t) {
              var e = t.length;
              if (e <= R) return String.fromCharCode.apply(String, t);

              for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += R));

              return r;
            }(n);
          }

          e.Buffer = u, e.SlowBuffer = function (t) {
            return +t != t && (t = 0), u.alloc(+t);
          }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
            try {
              var t = new Uint8Array(1);
              return t.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                  return 42;
                }
              }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
            } catch (t) {
              return !1;
            }
          }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
            return t.__proto__ = u.prototype, t;
          }, u.from = function (t, e, r) {
            return c(null, t, e, r);
          }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
            value: null,
            configurable: !0
          })), u.alloc = function (t, e, r) {
            return function (t, e, r, n) {
              return f(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
            }(null, t, e, r);
          }, u.allocUnsafe = function (t) {
            return h(null, t);
          }, u.allocUnsafeSlow = function (t) {
            return h(null, t);
          }, u.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }, u.compare = function (t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;

            for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) if (t[o] !== e[o]) {
              r = t[o], n = e[o];
              break;
            }

            return r < n ? -1 : n < r ? 1 : 0;
          }, u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;

              default:
                return !1;
            }
          }, u.concat = function (t, e) {
            if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return u.alloc(0);
            var r;
            if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = u.allocUnsafe(e),
              o = 0;

            for (r = 0; r < t.length; ++r) {
              var s = t[r];
              if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
              s.copy(n, o), o += s.length;
            }

            return n;
          }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

            for (var e = 0; e < t; e += 2) y(this, e, e + 1);

            return this;
          }, u.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

            for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);

            return this;
          }, u.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

            for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);

            return this;
          }, u.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : function (t, e, r) {
              var n = !1;
              if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
              if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
              if ((r >>>= 0) <= (e >>>= 0)) return "";

              for (t || (t = "utf8"); ;) switch (t) {
                case "hex":
                  return T(this, e, r);

                case "utf8":
                case "utf-8":
                  return B(this, e, r);

                case "ascii":
                  return P(this, e, r);

                case "latin1":
                case "binary":
                  return S(this, e, r);

                case "base64":
                  return k(this, e, r);

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return O(this, e, r);

                default:
                  if (n) throw new TypeError("Unknown encoding: " + t);
                  t = (t + "").toLowerCase(), n = !0;
              }
            }.apply(this, arguments);
          }, u.prototype.equals = function (t) {
            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }, u.prototype.inspect = function () {
            var t = "",
              r = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
          }, u.prototype.compare = function (t, e, r, n, o) {
            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
            if (n >= o && e >= r) return 0;
            if (n >= o) return -1;
            if (e >= r) return 1;
            if (e >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;

            for (var i = o - n, s = r - e, a = Math.min(i, s), c = this.slice(n, o), f = t.slice(e, r), h = 0; h < a; ++h) if (c[h] !== f[h]) {
              i = c[h], s = f[h];
              break;
            }

            return i < s ? -1 : s < i ? 1 : 0;
          }, u.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }, u.prototype.indexOf = function (t, e, r) {
            return g(this, t, e, r, !0);
          }, u.prototype.lastIndexOf = function (t, e, r) {
            return g(this, t, e, r, !1);
          }, u.prototype.write = function (t, e, r, n) {
            if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
              if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
            }
            var o = this.length - e;
            if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");

            for (var i = !1; ;) switch (n) {
              case "hex":
                return b(this, t, e, r);

              case "utf8":
              case "utf-8":
                return m(this, t, e, r);

              case "ascii":
                return w(this, t, e, r);

              case "latin1":
              case "binary":
                return A(this, t, e, r);

              case "base64":
                return _(this, t, e, r);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return E(this, t, e, r);

              default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), i = !0;
            }
          }, u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          };
          var R = 4096;

          function P(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);

            for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);

            return n;
          }

          function S(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);

            for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);

            return n;
          }

          function T(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);

            for (var o = "", i = e; i < r; ++i) o += D(t[i]);

            return o;
          }

          function O(t, e, r) {
            for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);

            return o;
          }

          function x(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
          }

          function C(t, e, r, n, o, i) {
            if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range");
          }

          function U(t, e, r, n) {
            e < 0 && (e = 65535 + e + 1);

            for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
          }

          function L(t, e, r, n) {
            e < 0 && (e = 4294967295 + e + 1);

            for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
          }

          function I(t, e, r, n, o, i) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }

          function N(t, e, r, n, i) {
            return i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
          }

          function M(t, e, r, n, i) {
            return i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
          }

          u.prototype.slice = function (t, e) {
            var r,
              n = this.length;
            if (t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = u.prototype; else {
              var o = e - t;
              r = new u(o, void 0);

              for (var i = 0; i < o; ++i) r[i] = this[i + t];
            }
            return r;
          }, u.prototype.readUIntLE = function (t, e, r) {
            t |= 0, e |= 0, r || x(t, e, this.length);

            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;

            return n;
          }, u.prototype.readUIntBE = function (t, e, r) {
            t |= 0, e |= 0, r || x(t, e, this.length);

            for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;

            return n;
          }, u.prototype.readUInt8 = function (t, e) {
            return e || x(t, 1, this.length), this[t];
          }, u.prototype.readUInt16LE = function (t, e) {
            return e || x(t, 2, this.length), this[t] | this[t + 1] << 8;
          }, u.prototype.readUInt16BE = function (t, e) {
            return e || x(t, 2, this.length), this[t] << 8 | this[t + 1];
          }, u.prototype.readUInt32LE = function (t, e) {
            return e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
          }, u.prototype.readUInt32BE = function (t, e) {
            return e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
          }, u.prototype.readIntLE = function (t, e, r) {
            t |= 0, e |= 0, r || x(t, e, this.length);

            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;

            return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
          }, u.prototype.readIntBE = function (t, e, r) {
            t |= 0, e |= 0, r || x(t, e, this.length);

            for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;

            return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }, u.prototype.readInt8 = function (t, e) {
            return e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
          }, u.prototype.readInt16LE = function (t, e) {
            e || x(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r;
          }, u.prototype.readInt16BE = function (t, e) {
            e || x(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r;
          }, u.prototype.readInt32LE = function (t, e) {
            return e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
          }, u.prototype.readInt32BE = function (t, e) {
            return e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
          }, u.prototype.readFloatLE = function (t, e) {
            return e || x(t, 4, this.length), o.read(this, t, !0, 23, 4);
          }, u.prototype.readFloatBE = function (t, e) {
            return e || x(t, 4, this.length), o.read(this, t, !1, 23, 4);
          }, u.prototype.readDoubleLE = function (t, e) {
            return e || x(t, 8, this.length), o.read(this, t, !0, 52, 8);
          }, u.prototype.readDoubleBE = function (t, e) {
            return e || x(t, 8, this.length), o.read(this, t, !1, 52, 8);
          }, u.prototype.writeUIntLE = function (t, e, r, n) {
            t = +t, e |= 0, r |= 0, n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
              i = 0;

            for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;

            return e + r;
          }, u.prototype.writeUIntBE = function (t, e, r, n) {
            t = +t, e |= 0, r |= 0, n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
              i = 1;

            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;

            return e + r;
          }, u.prototype.writeUInt8 = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
          }, u.prototype.writeUInt16LE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : U(this, t, e, !0), e + 2;
          }, u.prototype.writeUInt16BE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : U(this, t, e, !1), e + 2;
          }, u.prototype.writeUInt32LE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4;
          }, u.prototype.writeUInt32BE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
          }, u.prototype.writeIntLE = function (t, e, r, n) {
            if (t = +t, e |= 0, !n) {
              var o = Math.pow(2, 8 * r - 1);
              C(this, t, e, r, o - 1, -o);
            }

            var i = 0,
              s = 1,
              a = 0;

            for (this[e] = 255 & t; ++i < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;

            return e + r;
          }, u.prototype.writeIntBE = function (t, e, r, n) {
            if (t = +t, e |= 0, !n) {
              var o = Math.pow(2, 8 * r - 1);
              C(this, t, e, r, o - 1, -o);
            }

            var i = r - 1,
              s = 1,
              a = 0;

            for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;

            return e + r;
          }, u.prototype.writeInt8 = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
          }, u.prototype.writeInt16LE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : U(this, t, e, !0), e + 2;
          }, u.prototype.writeInt16BE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : U(this, t, e, !1), e + 2;
          }, u.prototype.writeInt32LE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4;
          }, u.prototype.writeInt32BE = function (t, e, r) {
            return t = +t, e |= 0, r || C(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
          }, u.prototype.writeFloatLE = function (t, e, r) {
            return N(this, t, e, !0, r);
          }, u.prototype.writeFloatBE = function (t, e, r) {
            return N(this, t, e, !1, r);
          }, u.prototype.writeDoubleLE = function (t, e, r) {
            return M(this, t, e, !0, r);
          }, u.prototype.writeDoubleBE = function (t, e, r) {
            return M(this, t, e, !1, r);
          }, u.prototype.copy = function (t, e, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
            var o,
              i = n - r;
            if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r]; else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
            return i;
          }, u.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                var o = t.charCodeAt(0);
                o < 256 && (t = o);
              }

              if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof t && (t &= 255);

            if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
            if (r <= e) return this;
            var i;
            if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
              var s = u.isBuffer(t) ? t : j(new u(t, n).toString()),
                a = s.length;

              for (i = 0; i < r - e; ++i) this[i + e] = s[i % a];
            }
            return this;
          };
          var Y = /[^+\/0-9A-Za-z-_]/g;

          function D(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16);
          }

          function j(t, e) {
            var r;
            e = e || 1 / 0;

            for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
              if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                if (!o) {
                  if (r > 56319) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }

                  if (s + 1 === n) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }

                  o = r;
                  continue;
                }

                if (r < 56320) {
                  (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                  continue;
                }

                r = 65536 + (o - 55296 << 10 | r - 56320);
              } else o && (e -= 3) > -1 && i.push(239, 191, 189);

              if (o = null, r < 128) {
                if ((e -= 1) < 0) break;
                i.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                i.push(r >> 6 | 192, 63 & r | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
              }
            }

            return i;
          }

          function q(t) {
            return n.toByteArray(function (t) {
              if ((t = function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              }(t).replace(Y, "")).length < 2) return "";

              for (; t.length % 4 != 0;) t += "=";

              return t;
            }(t));
          }

          function F(t, e, r, n) {
            for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];

            return o;
          }
        }).call(this, r(0));
      }, function (t, e, r) {
        (function (e) {
          var n = r(20),
            o = Object.prototype.toString,
            i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
            s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);

          t.exports = function t(r) {
            if (!r || "object" != typeof r) return !1;

            if (n(r)) {
              for (var o = 0, a = r.length; o < a; o++) if (t(r[o])) return !0;

              return !1;
            }

            if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || i && r instanceof Blob || s && r instanceof File) return !0;
            if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), !0);

            for (var u in r) if (Object.prototype.hasOwnProperty.call(r, u) && t(r[u])) return !0;

            return !1;
          };
        }).call(this, r(24).Buffer);
      }, function (t, e) {
        t.exports = Object.keys || function (t) {
          var e = [],
            r = Object.prototype.hasOwnProperty;

          for (var n in t) r.call(t, n) && e.push(n);

          return e;
        };
      }, function (t, e, r) {
        (function (e) {
          var n,
            o = r(5),
            i = r(1),
            s = r(3),
            a = r(13),
            u = r(12),
            c = r(2)("engine.io-client:websocket"),
            f = e.WebSocket || e.MozWebSocket;
          if ("undefined" == typeof window) try {
            n = r(11);
          } catch (t) {
            c("require error: ", t);
          }
          var h = f;

          function p(t) {
            t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = f && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (h = n), o.call(this, t);
          }

          h || "undefined" != typeof window || (h = n), t.exports = p, a(p, o), p.prototype.name = "websocket", p.prototype.supportsBinary = !0, p.prototype.doOpen = function () {
            if (c("wesocket do open: ", this.protocols), this.check()) {
              var t = this.uri(),
                e = this.protocols,
                r = {
                  agent: this.agent,
                  perMessageDeflate: this.perMessageDeflate
                };
              r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);

              try {
                this.ws = this.usingBrowserWebSocket ? e ? new h(t, e) : new h(t) : new h(t, e, r);
              } catch (t) {
                return this.emit("error", t);
              }

              void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
            }
          }, p.prototype.addEventListeners = function () {
            var t = this;
            this.ws.onopen = function () {
              t.onOpen();
            }, this.ws.onclose = function () {
              t.onClose();
            }, this.ws.onmessage = function (e) {
              t.onData(e.data);
            }, this.ws.onerror = function (e) {
              t.onError("websocket error", e);
            };
          }, p.prototype.write = function (t) {
            var e = this;
            this.writable = !1;

            for (var r, n = t.length, o = 0, s = n; o < s; o++) r = t[o], i.encodePacket(r, e.supportsBinary, function (t) {
              try {
                e.ws.send(t);
              } catch (t) { }

              --n || (e.emit("flush"), setTimeout(function () {
                e.writable = !0, e.emit("drain");
              }, 0));
            });
          }, p.prototype.onClose = function () {
            o.prototype.onClose.call(this);
          }, p.prototype.doClose = function () {
            void 0 !== this.ws && this.ws.close();
          }, p.prototype.uri = function () {
            var t = this.query || {},
              e = this.secure ? "wss" : "ws",
              r = "";
            return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), (t = s.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
          }, p.prototype.check = function () {
            return !(!h || "__initialize" in h && this.name === p.prototype.name);
          };
        }).call(this, r(0));
      }, function (t, e, r) {
        (function (e) {
          var n = r(6),
            o = r(4),
            i = r(2)("engine.io-client:socket"),
            s = r(8),
            a = r(1),
            u = r(7),
            c = r(3);

          function f(t, r) {
            if (!(this instanceof f)) return new f(t, r);
            r = r || {}, t && "object" == typeof t && (r = t, t = null), t ? (t = u(t), r.hostname = t.host, r.secure = "https" === t.protocol || "wss" === t.protocol, r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = u(r.host).host), this.secure = null != r.secure ? r.secure : e.location && "https:" === location.protocol, r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.agent = r.agent || !1, this.hostname = r.hostname || (e.location ? location.hostname : "localhost"), this.port = r.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = r.query || {}, "string" == typeof this.query && (this.query = c.decode(this.query)), this.upgrade = !1 !== r.upgrade, this.path = (r.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!r.forceJSONP, this.jsonp = !1 !== r.jsonp, this.forceBase64 = !!r.forceBase64, this.enablesXDR = !!r.enablesXDR, this.timestampParam = r.timestampParam || "t", this.timestampRequests = r.timestampRequests, this.transports = r.transports || ["websocket"], this.transportOptions = r.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = r.policyPort || 843, this.rememberUpgrade = r.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = r.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== r.perMessageDeflate && (r.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = r.pfx || null, this.key = r.key || null, this.passphrase = r.passphrase || null, this.cert = r.cert || null, this.ca = r.ca || null, this.ciphers = r.ciphers || null, this.rejectUnauthorized = void 0 === r.rejectUnauthorized || r.rejectUnauthorized, this.forceNode = !!r.forceNode;
            var n = "object" == typeof e && e;
            n.global === n && (r.extraHeaders && Object.keys(r.extraHeaders).length > 0 && (this.extraHeaders = r.extraHeaders), r.localAddress && (this.localAddress = r.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
          }

          t.exports = f, f.priorWebsocketSuccess = !1, o(f.prototype), f.protocol = a.protocol, f.Socket = f, f.Transport = r(5), f.transports = r(6), f.parser = r(1), f.prototype.createTransport = function (t) {
            i('creating transport "%s"', t);

            var e = function (t) {
              var e = {};

              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);

              return e;
            }(this.query);

            e.EIO = a.protocol, e.transport = t;
            var r = this.transportOptions[t] || {};
            this.id && (e.sid = this.id);
            var o = new n[t]({
              query: e,
              socket: this,
              agent: r.agent || this.agent,
              hostname: r.hostname || this.hostname,
              port: r.port || this.port,
              secure: r.secure || this.secure,
              path: r.path || this.path,
              forceJSONP: r.forceJSONP || this.forceJSONP,
              jsonp: r.jsonp || this.jsonp,
              forceBase64: r.forceBase64 || this.forceBase64,
              enablesXDR: r.enablesXDR || this.enablesXDR,
              timestampRequests: r.timestampRequests || this.timestampRequests,
              timestampParam: r.timestampParam || this.timestampParam,
              policyPort: r.policyPort || this.policyPort,
              pfx: r.pfx || this.pfx,
              key: r.key || this.key,
              passphrase: r.passphrase || this.passphrase,
              cert: r.cert || this.cert,
              ca: r.ca || this.ca,
              ciphers: r.ciphers || this.ciphers,
              rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
              perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
              extraHeaders: r.extraHeaders || this.extraHeaders,
              forceNode: r.forceNode || this.forceNode,
              localAddress: r.localAddress || this.localAddress,
              requestTimeout: r.requestTimeout || this.requestTimeout,
              protocols: r.protocols || void 0
            });
            return i("transport: ", o), o;
          }, f.prototype.open = function () {
            var t;
            if (this.rememberUpgrade && f.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"; else {
              if (0 === this.transports.length) {
                var e = this;
                return void setTimeout(function () {
                  e.emit("error", "No transports available");
                }, 0);
              }

              t = this.transports[0];
            }
            this.readyState = "opening";

            try {
              t = this.createTransport(t);
            } catch (t) {
              return this.transports.shift(), void this.open();
            }

            t.open(), this.setTransport(t);
          }, f.prototype.setTransport = function (t) {
            i("setting transport %s", t.name);
            var e = this;
            this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
              e.onDrain();
            }).on("packet", function (t) {
              e.onPacket(t);
            }).on("error", function (t) {
              e.onError(t);
            }).on("close", function () {
              e.onClose("transport close");
            });
          }, f.prototype.probe = function (t) {
            i('probing transport "%s"', t);
            var e = this.createTransport(t, {
              probe: 1
            }),
              r = !1,
              n = this;

            function o() {
              if (n.onlyBinaryUpgrades) {
                var o = !this.supportsBinary && n.transport.supportsBinary;
                r = r || o;
              }

              r || (i('probe transport "%s" opened', t), e.send([{
                type: "ping",
                data: "probe"
              }]), e.once("packet", function (o) {
                if (!r) if ("pong" === o.type && "probe" === o.data) {
                  if (i('probe transport "%s" pong', t), n.upgrading = !0, n.emit("upgrading", e), !e) return;
                  f.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', n.transport.name), n.transport.pause(function () {
                    r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), p(), n.setTransport(e), e.send([{
                      type: "upgrade"
                    }]), n.emit("upgrade", e), e = null, n.upgrading = !1, n.flush());
                  });
                } else {
                  i('probe transport "%s" failed', t);
                  var s = new Error("probe error");
                  s.transport = e.name, n.emit("upgradeError", s);
                }
              }));
            }

            function s() {
              r || (r = !0, p(), e.close(), e = null);
            }

            function a(r) {
              var o = new Error("probe error: " + r);
              o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, r), n.emit("upgradeError", o);
            }

            function u() {
              a("transport closed");
            }

            function c() {
              a("socket closed");
            }

            function h(t) {
              e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s());
            }

            function p() {
              e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", u), n.removeListener("close", c), n.removeListener("upgrading", h);
            }

            f.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", u), this.once("close", c), this.once("upgrading", h), e.open();
          }, f.prototype.onOpen = function () {
            if (i("socket open"), this.readyState = "open", f.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
              i("starting upgrade probes");

              for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]);
            }
          }, f.prototype.onPacket = function (t) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
              case "open":
                this.onHandshake(JSON.parse(t.data));
                break;

              case "pong":
                this.setPing(), this.emit("pong");
                break;

              case "error":
                var e = new Error("server error");
                e.code = t.data, this.onError(e);
                break;

              case "message":
                this.emit("data", t.data), this.emit("message", t.data);
            } else i('packet received with socket readyState "%s"', this.readyState);
          }, f.prototype.onHandshake = function (t) {
            this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
          }, f.prototype.onHeartbeat = function (t) {
            clearTimeout(this.pingTimeoutTimer);
            var e = this;
            e.pingTimeoutTimer = setTimeout(function () {
              "closed" !== e.readyState && e.onClose("ping timeout");
            }, t || e.pingInterval + e.pingTimeout);
          }, f.prototype.setPing = function () {
            var t = this;
            clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
              i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
            }, t.pingInterval);
          }, f.prototype.ping = function () {
            var t = this;
            this.sendPacket("ping", function () {
              t.emit("ping");
            });
          }, f.prototype.onDrain = function () {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
          }, f.prototype.flush = function () {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
          }, f.prototype.write = f.prototype.send = function (t, e, r) {
            return this.sendPacket("message", t, e, r), this;
          }, f.prototype.sendPacket = function (t, e, r, n) {
            if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
              (r = r || {}).compress = !1 !== r.compress;
              var o = {
                type: t,
                data: e,
                options: r
              };
              this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
            }
          }, f.prototype.close = function () {
            if ("opening" === this.readyState || "open" === this.readyState) {
              this.readyState = "closing";
              var t = this;
              this.writeBuffer.length ? this.once("drain", function () {
                this.upgrading ? n() : e();
              }) : this.upgrading ? n() : e();
            }

            function e() {
              t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close();
            }

            function r() {
              t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e();
            }

            function n() {
              t.once("upgrade", r), t.once("upgradeError", r);
            }

            return this;
          }, f.prototype.onError = function (t) {
            i("socket error %j", t), f.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
          }, f.prototype.onClose = function (t, e) {
            "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (i('socket close with reason: "%s"', t), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0);
          }, f.prototype.filterUpgrades = function (t) {
            for (var e = [], r = 0, n = t.length; r < n; r++) ~s(this.transports, t[r]) && e.push(t[r]);

            return e;
          };
        }).call(this, r(0));
      }, function (t, e, r) {
        t.exports = r(28), t.exports.parser = r(1);
      }]);
    }, function (t, e, r) {
      (function (t) {
        var n = r(2),
          o = r(9),
          i = Object.prototype.toString,
          s = "function" == typeof t.Blob || "[object BlobConstructor]" === i.call(t.Blob),
          a = "function" == typeof t.File || "[object FileConstructor]" === i.call(t.File);
        e.deconstructPacket = function (t) {
          var e = [],
            r = t.data,
            i = t;
          return i.data = function t(e, r) {
            if (!e) return e;

            if (o(e)) {
              var i = {
                _placeholder: !0,
                num: r.length
              };
              return r.push(e), i;
            }

            if (n(e)) {
              for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], r);

              return s;
            }

            if ("object" == typeof e && !(e instanceof Date)) {
              var s = {};

              for (var u in e) s[u] = t(e[u], r);

              return s;
            }

            return e;
          }(r, e), i.attachments = e.length, {
              packet: i,
              buffers: e
            };
        }, e.reconstructPacket = function (t, e) {
          return t.data = function t(e, r) {
            if (!e) return e;
            if (e && e._placeholder) return r[e.num];
            if (n(e)) for (var o = 0; o < e.length; o++) e[o] = t(e[o], r); else if ("object" == typeof e) for (var i in e) e[i] = t(e[i], r);
            return e;
          }(t.data, e), t.attachments = void 0, t;
        }, e.removeBlobs = function (t, e) {
          var r = 0,
            i = t;
          !function t(u, c, f) {
            if (!u) return u;

            if (s && u instanceof Blob || a && u instanceof File) {
              r++;
              var h = new FileReader();
              h.onload = function () {
                f ? f[c] = this.result : i = this.result, --r || e(i);
              }, h.readAsArrayBuffer(u);
            } else if (n(u)) for (var p = 0; p < u.length; p++) t(u[p], p, u); else if ("object" == typeof u && !o(u)) for (var l in u) t(u[l], l, u);
          }(i), r || e(i);
        };
      }).call(this, r(1));
    }, function (t, e) {
      var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

      t.exports = function (t) {
        var e = t,
          o = t.indexOf("["),
          i = t.indexOf("]");
        -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));

        for (var s = r.exec(t || ""), a = {}, u = 14; u--;) a[n[u]] = s[u] || "";

        return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;
      };
    }, function (t, e, r) {
      (function (e) {
        var n = r(21),
          o = r(0)("socket.io-client:url");

        t.exports = function (t, r) {
          var i = t;
          r = r || e.location, null == t && (t = r.protocol + "//" + r.host);
          "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? r.protocol + t : r.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== r ? r.protocol + "//" + t : "https://" + t), o("parse %s", t), i = n(t));
          i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443"));
          i.path = i.path || "/";
          var s = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
          return i.id = i.protocol + "://" + s + ":" + i.port, i.href = i.protocol + "://" + s + (r && r.port === i.port ? "" : ":" + i.port), i;
        };
      }).call(this, r(1));
    }, function (t, e, r) {
      var n = r(22),
        o = r(4),
        i = r(8),
        s = r(0)("socket.io-client");
      t.exports = e = u;
      var a = e.managers = {};

      function u(t, e) {
        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var r,
          o = n(t),
          u = o.source,
          c = o.id,
          f = o.path,
          h = a[c] && f in a[c].nsps;
        return e.forceNew || e["force new connection"] || !1 === e.multiplex || h ? (s("ignoring socket cache for %s", u), r = i(u, e)) : (a[c] || (s("new io instance for %s", u), a[c] = i(u, e)), r = a[c]), o.query && !e.query && (e.query = o.query), r.socket(o.path, e);
      }

      e.protocol = o.protocol, e.connect = u, e.Manager = r(8), e.Socket = r(7);
    }, function (t, e, r) {
      t.exports = r(23);
    }]);
  });
});

var io = unwrapExports(weapp_socket_io);

// eslint-disable-next-line no-unused-vars
var regeneratorRuntime = require('./polyfill');

var Auth =
  /*#__PURE__*/
  function () {
    function Auth(options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
        _options$storageKey = _options.storageKey,
        storageKey = _options$storageKey === void 0 ? 'tcb-token' : _options$storageKey;
      this.storageKey = storageKey;

      if (typeof wx !== 'undefined') {
        this.isMiniprogram = true;
      }
    }
    /**
     * 获取小程序token
     */


    var _proto = Auth.prototype;

    _proto.getToken = function getToken() {
      var token;

      if (this.isMiniprogram) {
        token = wx.getStorageSync(this.storageKey);
      }

      return token;
    }
      /**
       * 小程序用户鉴权
       * @param {object} userInfo 小程序用户信息
       * @return {string} 用户 jwt token
       */
      ;

    _proto.login =
      /*#__PURE__*/
      function () {
        var _login = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(userInfo) {
            var r, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return wx.cloud.callFunction({
                      name: 'tcb-auth',
                      data: {
                        action: 'login',
                        data: userInfo
                      }
                    });

                  case 2:
                    r = _context.sent;
                    res = r.result;

                    if (!res.data) {
                      _context.next = 9;
                      break;
                    }

                    wx.setStorageSync(this.storageKey, res.data.token);
                    return _context.abrupt("return", res.data.token);

                  case 9:
                    throw new Error('Login Failed');

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

        function login(_x) {
          return _login.apply(this, arguments);
        }

        return login;
      }()
      /**
       * 小程序用户登出
       */
      ;

    _proto.logout = function logout() {
      if (this.isMiniprogram) {
        wx.removeStorageSync(this.storageKey);
      }
    } // 首次授权后，可自动获取用户信息并登陆
      ;

    _proto.autoLogin =
      /*#__PURE__*/
      function () {
        var _autoLogin = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      wx.getSetting({
                        success: function success(res) {
                          if (res.authSetting['scope.userInfo']) {
                            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                            wx.getUserInfo({
                              success: function success(res) {
                                if (!wx.getStorageSync(_this.storageKey)) {
                                  _this._getAuth(res);
                                }

                                resolve(res);
                              },
                              fail: function fail() {
                                _this.logout();

                                reject(new Error('wx.getUserInfo failed'));
                              }
                            });
                          } else {
                            _this.logout();

                            resolve(); // reject(new Error('scope.userInfo permission should be got.'));
                          }
                        },
                        fail: function fail() {
                          _this.logout();

                          reject(new Error('wx.getSetting failed'));
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

        function autoLogin() {
          return _autoLogin.apply(this, arguments);
        }

        return autoLogin;
      }()
      /**
       * 首次授权，获取用户信息并登陆
       * @param {object} e 小程序授权按钮事件及数据
       * @return {object} 用户信息
       */
      ;

    _proto.tapToLogin =
      /*#__PURE__*/
      function () {
        var _tapToLogin = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(e) {
            var info;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    info = e.detail;
                    _context3.next = 3;
                    return this._getAuth(info);

                  case 3:
                    return _context3.abrupt("return", info);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

        function tapToLogin(_x2) {
          return _tapToLogin.apply(this, arguments);
        }

        return tapToLogin;
      }();

    _proto._getAuth =
      /*#__PURE__*/
      function () {
        var _getAuth2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4(info) {
            var result;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.login(info);

                  case 2:
                    result = _context4.sent;
                    return _context4.abrupt("return", result);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

        function _getAuth(_x3) {
          return _getAuth2.apply(this, arguments);
        }

        return _getAuth;
      }();

    return Auth;
  }();

var utils = {
  /**
   * 检查是否函数
   * @param {Any} func
   * @return {Boolean}
   */
  isFunction: function isFunction(func) {
    return typeof func === 'function';
  }
};

// eslint-disable-next-line no-unused-vars
var regeneratorRuntime$1 = require('./polyfill');

var TcbClientWS =
  /*#__PURE__*/
  function () {
    function TcbClientWS(url, options) {
      if (options === void 0) {
        options = {};
      }

      this.io = io;
      this.socket = null;
      this.url = url;
      this.roomID = null;
      this.options = options;
      this.authOptions = options.authOptions;
      delete options['authOptions'];
    }
    /**
     * 鉴权对象
     */


    var _proto = TcbClientWS.prototype;

    /**
     *  建立 WebSocket 连接
     */
    _proto.open = function open(_temp) {
      var _this = this;

      var _ref = _temp === void 0 ? {} : _temp,
        _ref$connect = _ref.connect,
        connect = _ref$connect === void 0 ? null : _ref$connect,
        _ref$disconnect = _ref.disconnect,
        disconnect = _ref$disconnect === void 0 ? null : _ref$disconnect;

      this.socket = io(this.url, _extends({
        transports: ['websocket']
      }, this.options));
      this.socket.on('connect', function () {
        utils.isFunction(connect) && connect.bind(_this)(_this.socket);
      });
      this.socket.on('disconnect', function () {
        utils.isFunction(disconnect) && disconnect.bind(_this)(_this.socket);
      });
      return this.socket;
    }
      /**
       * 断开 WebSocket 连接
       */
      ;

    _proto.close = function close() {
      if (this.socket) {
        this.socket.close();
      }
    }
      /**
       * 加入房间
       * @param {String} roomID 房间号
       * @return {Promise}
       */
      ;

    _proto.join =
      /*#__PURE__*/
      function () {
        var _join = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime$1.mark(function _callee(roomID) {
            var _this2 = this;

            return regeneratorRuntime$1.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.roomID) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 3;
                    return this.leave();

                  case 3:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      if (!roomID) {
                        return reject(new Error('roomID is null.'));
                      }

                      _this2.socket.emit('tcb-join-room', roomID, function (data) {
                        _this2.roomID = roomID;
                        resolve(data);
                      });
                    }));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

        function join(_x) {
          return _join.apply(this, arguments);
        }

        return join;
      }()
      /**
       * 离开房间
       * @param {String} roomIDParam 房间号
       * @return {Promise}
       */
      ;

    _proto.leave =
      /*#__PURE__*/
      function () {
        var _leave = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime$1.mark(function _callee2(roomIDParam) {
            var _this3 = this;

            var roomID;
            return regeneratorRuntime$1.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (roomIDParam === void 0) {
                      roomIDParam = null;
                    }

                    roomID = this.roomID || roomIDParam;
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      if (!roomID) {
                        return reject(new Error('roomID is null.'));
                      }

                      _this3.socket.emit('tcb-leave-room', roomID, function (data) {
                        _this3.roomID = null;
                        resolve(data);
                      });
                    }));

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

        function leave(_x2) {
          return _leave.apply(this, arguments);
        }

        return leave;
      }()
      /**
       * 发送消息
       * @param {*} param
       * @param {String} param.event 消息事件
       * @param {String} param.message 消息数据
       * @return {Promise<data>}
       */
      ;

    _proto.send =
      /*#__PURE__*/
      function () {
        var _send = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime$1.mark(function _callee3(_ref2) {
            var _this4 = this;

            var event, message;
            return regeneratorRuntime$1.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    event = _ref2.event, message = _ref2.message;
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      _this4.socket.emit(event, message, function (data) {
                        resolve(data);
                      });
                    }));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

        function send(_x3) {
          return _send.apply(this, arguments);
        }

        return send;
      }()
      /**
       * 接收消息
       * @param {*} param
       * @param {String} param.event 消息事件
       * @param {String} param.callback 数据接受回调
       */
      ;

    _proto.receive = function receive(_ref3) {
      var event = _ref3.event,
        callback = _ref3.callback;
      this.socket.on(event, function (data, ack) {
        utils.isFunction(callback) && callback(data);
        utils.isFunction(ack) && ack(data);
      });
    };

    _createClass(TcbClientWS, null, [{
      key: "auth",
      get: function get() {
        return new Auth(this.authOptions);
      }
    }]);

    return TcbClientWS;
  }();

export default TcbClientWS;
