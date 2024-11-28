import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID7hggqo3abtya as VOID,
  Exception_init_$Init$2t8qsqvbxaqim as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instanceat14thlj150z as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Charsets_getInstance193f5sla8amhs as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
import {
  HttpHeaders_getInstance2mkud6v3erele as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
  NullBody_instance3dxn6cf98q9mv as NullBody_instance,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull6qzpet0vqiov as firstOrNull,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.f2w(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.f2w.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($deserializeCOROUTINE$0, CoroutineImpl);
//endregion
function ContentConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  Exception_init_$Init$(message, cause, this);
  captureStack(this, ContentConvertException);
}
function JsonConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  ContentConvertException.call(this, message, cause);
  captureStack(this, JsonConvertException);
}
function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().d1j_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function Configuration() {
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().d1j_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.l25(HttpHeaders_getInstance().t2c_1)).m();
  while (_iterator__ex2g4s.n()) {
    var charset = _iterator__ex2g4s.o().ce();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.h2w_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).i14 = function (value, $completion) {
  return this.h2w_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l3 = function () {
  return this.h2w_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.l3(), other.l3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
  return hashCode(this.l3());
};
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  this.q2w_1 = $$this$unsafeFlow;
  this.r2w_1 = $charset;
  this.s2w_1 = $typeInfo;
  this.t2w_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$o$collect$slambda).z2w = function (value, $completion) {
  var tmp = this.a2x(value, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(deserialize$o$collect$slambda).c9 = function (p1, $completion) {
  return this.z2w((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$o$collect$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 3;
          var tmp_0 = this;
          tmp_0.v2w_1 = this.q2w_1;
          var tmp_1 = this;
          tmp_1.w2w_1 = this.u2w_1;
          var tmp_2 = this;
          tmp_2.x2w_1 = this.w2w_1;
          this.k8_1 = 1;
          suspendResult = this.x2w_1.b2x(this.r2w_1, this.s2w_1, this.t2w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.y2w_1 = suspendResult;
          this.k8_1 = 2;
          suspendResult = this.v2w_1.i14(this.y2w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.l8_1 === 3) {
        throw e;
      } else {
        this.k8_1 = this.l8_1;
        this.n8_1 = e;
      }
    }
   while (true);
};
protoOf(deserialize$o$collect$slambda).a2x = function (value, completion) {
  var i = new deserialize$o$collect$slambda(this.q2w_1, this.r2w_1, this.s2w_1, this.t2w_1, completion);
  i.u2w_1 = value;
  return i;
};
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
  var l = function (value, $completion) {
    return i.z2w(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.k2x_1 = _this__u8e3s4;
  this.l2x_1 = collector;
}
protoOf($collectCOROUTINE$1).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          tmp_0.m2x_1 = this.l2x_1;
          this.k8_1 = 1;
          var tmp_1 = deserialize$o$collect$slambda_0(this.m2x_1, this.k2x_1.o2x_1, this.k2x_1.p2x_1, this.k2x_1.q2x_1, null);
          suspendResult = this.k2x_1.n2x_1.k14(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.l8_1 === 2) {
        throw e;
      } else {
        this.k8_1 = this.l8_1;
        this.n8_1 = e;
      }
    }
   while (true);
};
function _no_name_provided__qut3iv($this, $charset, $typeInfo, $body) {
  this.n2x_1 = $this;
  this.o2x_1 = $charset;
  this.p2x_1 = $typeInfo;
  this.q2x_1 = $body;
}
protoOf(_no_name_provided__qut3iv).j14 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$1(this, collector, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(_no_name_provided__qut3iv).k14 = function (collector, $completion) {
  return this.j14(collector, $completion);
};
function deserialize$slambda($body, resultContinuation) {
  this.z2x_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$slambda).b2y = function (it, $completion) {
  var tmp = this.a2x(it, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(deserialize$slambda).c9 = function (p1, $completion) {
  return this.b2y((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      if (tmp === 0) {
        this.l8_1 = 1;
        return !(this.a2y_1 == null) || this.z2x_1.m1e();
      } else if (tmp === 1) {
        throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(deserialize$slambda).a2x = function (it, completion) {
  var i = new deserialize$slambda(this.z2x_1, completion);
  i.a2y_1 = it;
  return i;
};
function deserialize$slambda_0($body, resultContinuation) {
  var i = new deserialize$slambda($body, resultContinuation);
  var l = function (it, $completion) {
    return i.b2y(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.b2w_1 = _this__u8e3s4;
  this.c2w_1 = body;
  this.d2w_1 = typeInfo;
  this.e2w_1 = charset;
}
protoOf($deserializeCOROUTINE$0).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          var this_0 = asFlow(this.b2w_1);
          var tmp_0 = new _no_name_provided__qut3iv(this_0, this.e2w_1, this.d2w_1, this.c2w_1);
          suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.c2w_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_1;
          if (!(result == null)) {
            tmp_1 = result;
          } else {
            if (!this.c2w_1.m1e()) {
              tmp_1 = this.c2w_1;
            } else {
              var tmp0_safe_receiver = this.d2w_1.o2a_1;
              if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ta()) === true) {
                tmp_1 = NullBody_instance;
              } else {
                throw new ContentConvertException('No suitable converter found for ' + this.d2w_1.toString());
              }
            }
          }

          return tmp_1;
        case 2:
          throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.l8_1 === 2) {
        throw e;
      } else {
        this.k8_1 = this.l8_1;
        this.n8_1 = e;
      }
    }
   while (true);
};
//region block: exports
export {
  deserialize as deserialize2wnohscat0mh6,
  register$default as register$default3adwmu6p4dd5l,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.mjs.map
