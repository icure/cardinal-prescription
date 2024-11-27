import {
  ArrayList_init_$Create$2rimpp4x9tjd3 as ArrayList_init_$Create$,
  Unit_instanceat14thlj150z as Unit_instance,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID7hggqo3abtya as VOID,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$1nm9y6jd3c9iy as IllegalStateException_init_$Create$,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance1kavzb69ik84p as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$_0,
  HashSet_init_$Create$2bsk5herqkxxm as HashSet_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull6qzpet0vqiov as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemaining1h8rbofkekiud as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-shared-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$2, CoroutineImpl);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$3, CoroutineImpl);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($serializeCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($deserializeCOROUTINE$1, CoroutineImpl);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var this_0 = get_providers();
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var tmp0_iterator = this_0.m();
  while (tmp0_iterator.n()) {
    var element = tmp0_iterator.o();
    // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
    // Inline function 'io.ktor.serialization.kotlinx.extensions.<anonymous>' call
    var tmp0_safe_receiver = element.k48(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      destination.k(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.g2w(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  this.t48_1 = $$this$unsafeFlow;
  this.u48_1 = $contentType;
  this.v48_1 = $charset;
  this.w48_1 = $typeInfo;
  this.x48_1 = $value;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).z2w = function (value, $completion) {
  var tmp = this.a2x(value, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).c9 = function (p1, $completion) {
  return this.z2w((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 3;
          var tmp_0 = this;
          tmp_0.z48_1 = this.t48_1;
          var tmp_1 = this;
          tmp_1.a49_1 = this.y48_1;
          var tmp_2 = this;
          tmp_2.b49_1 = this.a49_1;
          this.k8_1 = 1;
          suspendResult = this.b49_1.j48(this.u48_1, this.v48_1, this.w48_1, this.x48_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.c49_1 = suspendResult;
          this.k8_1 = 2;
          suspendResult = this.z48_1.i14(this.c49_1, this);
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
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).a2x = function (value, completion) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.t48_1, this.u48_1, this.v48_1, this.w48_1, this.x48_1, completion);
  i.y48_1 = value;
  return i;
};
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
  var l = function (value, $completion) {
    return i.z2w(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.l49_1 = _this__u8e3s4;
  this.m49_1 = collector;
}
protoOf($collectCOROUTINE$2).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          tmp_0.n49_1 = this.m49_1;
          this.k8_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.n49_1, this.l49_1.p49_1, this.l49_1.q49_1, this.l49_1.r49_1, this.l49_1.s49_1, null);
          suspendResult = this.l49_1.o49_1.k14(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  this.b4a_1 = $$this$unsafeFlow;
  this.c4a_1 = $charset;
  this.d4a_1 = $typeInfo;
  this.e4a_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).z2w = function (value, $completion) {
  var tmp = this.a2x(value, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).c9 = function (p1, $completion) {
  return this.z2w((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 3;
          var tmp_0 = this;
          tmp_0.g4a_1 = this.b4a_1;
          var tmp_1 = this;
          tmp_1.h4a_1 = this.f4a_1;
          var tmp_2 = this;
          tmp_2.i4a_1 = this.h4a_1;
          this.k8_1 = 1;
          suspendResult = this.i4a_1.b2x(this.c4a_1, this.d4a_1, this.e4a_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.j4a_1 = suspendResult;
          this.k8_1 = 2;
          suspendResult = this.g4a_1.i14(this.j4a_1, this);
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
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).a2x = function (value, completion) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.b4a_1, this.c4a_1, this.d4a_1, this.e4a_1, completion);
  i.f4a_1 = value;
  return i;
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
  var l = function (value, $completion) {
    return i.z2w(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s4a_1 = _this__u8e3s4;
  this.t4a_1 = collector;
}
protoOf($collectCOROUTINE$3).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          tmp_0.u4a_1 = this.t4a_1;
          this.k8_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.u4a_1, this.s4a_1.w4a_1, this.s4a_1.x4a_1, this.s4a_1.y4a_1, null);
          suspendResult = this.s4a_1.v4a_1.k14(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.a1l(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.d1l(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  return tmp;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.z4a_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).i14 = function (value, $completion) {
  return this.z4a_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l3 = function () {
  return this.z4a_1;
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
function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
  this.a4b_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).i14 = function (value, $completion) {
  return this.a4b_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).l3 = function () {
  return this.a4b_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
  return hashCode(this.l3());
};
function _no_name_provided__qut3iv($this, $contentType, $charset, $typeInfo, $value) {
  this.o49_1 = $this;
  this.p49_1 = $contentType;
  this.q49_1 = $charset;
  this.r49_1 = $typeInfo;
  this.s49_1 = $value;
}
protoOf(_no_name_provided__qut3iv).j14 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$2(this, collector, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(_no_name_provided__qut3iv).k14 = function (collector, $completion) {
  return this.j14(collector, $completion);
};
function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$slambda).k4b = function (it, $completion) {
  var tmp = this.l4b(it, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(KotlinxSerializationConverter$serialize$slambda).c9 = function (p1, $completion) {
  return this.k4b((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      if (tmp === 0) {
        this.l8_1 = 1;
        return !(this.j4b_1 == null);
      } else if (tmp === 1) {
        throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).l4b = function (it, completion) {
  var i = new KotlinxSerializationConverter$serialize$slambda(completion);
  i.j4b_1 = it;
  return i;
};
function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
  var l = function (it, $completion) {
    return i.k4b(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function _no_name_provided__qut3iv_0($this, $charset, $typeInfo, $content) {
  this.v4a_1 = $this;
  this.w4a_1 = $charset;
  this.x4a_1 = $typeInfo;
  this.y4a_1 = $content;
}
protoOf(_no_name_provided__qut3iv_0).j14 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$3(this, collector, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(_no_name_provided__qut3iv_0).k14 = function (collector, $completion) {
  return this.j14(collector, $completion);
};
function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
  this.u4b_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$slambda).b2y = function (it, $completion) {
  var tmp = this.a2x(it, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).c9 = function (p1, $completion) {
  return this.b2y((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      if (tmp === 0) {
        this.l8_1 = 1;
        return !(this.v4b_1 == null) || this.u4b_1.m1e();
      } else if (tmp === 1) {
        throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).a2x = function (it, completion) {
  var i = new KotlinxSerializationConverter$deserialize$slambda(this.u4b_1, completion);
  i.v4b_1 = it;
  return i;
};
function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
  var l = function (it, $completion) {
    return i.b2y(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $serializeCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.e4c_1 = _this__u8e3s4;
  this.f4c_1 = contentType;
  this.g4c_1 = charset;
  this.h4c_1 = typeInfo;
  this.i4c_1 = value;
}
protoOf($serializeCOROUTINE$0).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          var this_0 = asFlow(this.e4c_1.k4c_1);
          var tmp_0 = new _no_name_provided__qut3iv(this_0, this.f4c_1, this.g4c_1, this.h4c_1, this.i4c_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$serialize$slambda_0(null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var fromExtension = suspendResult;
          if (!(fromExtension == null))
            return fromExtension;
          var tmp_1;
          try {
            tmp_1 = serializerForTypeInfo(this.e4c_1.j4c_1.c1l(), this.h4c_1);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof SerializationException) {
              var cause = $p;
              tmp_2 = guessSerializer(this.i4c_1, this.e4c_1.j4c_1.c1l());
            } else {
              throw $p;
            }
            tmp_1 = tmp_2;
          }

          var serializer = tmp_1;
          return serializeContent(this.e4c_1, serializer, this.e4c_1.j4c_1, this.i4c_1, this.f4c_1, this.g4c_1);
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
function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.t4c_1 = _this__u8e3s4;
  this.u4c_1 = charset;
  this.v4c_1 = typeInfo;
  this.w4c_1 = content;
}
protoOf($deserializeCOROUTINE$1).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 4;
          this.k8_1 = 1;
          var this_0 = asFlow(this.t4c_1.k4c_1);
          var tmp_0 = new _no_name_provided__qut3iv_0(this_0, this.u4c_1, this.v4c_1, this.w4c_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.w4c_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.x4c_1 = suspendResult;
          var tmp_1;
          if (!this.t4c_1.k4c_1.h()) {
            tmp_1 = !(this.x4c_1 == null) || this.w4c_1.m1e();
          } else {
            tmp_1 = false;
          }

          if (tmp_1)
            return this.x4c_1;
          this.y4c_1 = serializerForTypeInfo(this.t4c_1.j4c_1.c1l(), this.v4c_1);
          this.k8_1 = 2;
          suspendResult = readRemaining(this.w4c_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var contentPacket = suspendResult;
          this.l8_1 = 3;
          var tmp0_subject = this.t4c_1.j4c_1;
          var tmp_2;
          if (isInterface(tmp0_subject, StringFormat)) {
            tmp_2 = this.t4c_1.j4c_1.b1l(this.y4c_1, readText(contentPacket, this.u4c_1));
          } else {
            if (isInterface(tmp0_subject, BinaryFormat)) {
              tmp_2 = this.t4c_1.j4c_1.e1l(this.y4c_1, readByteArray(contentPacket));
            } else {
              discard(contentPacket);
              var message = 'Unsupported format ' + toString(this.t4c_1.j4c_1);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }

          return tmp_2;
        case 3:
          this.l8_1 = 4;
          var tmp_3 = this.n8_1;
          if (tmp_3 instanceof Error) {
            var cause = this.n8_1;
            throw new JsonConvertException('Illegal input: ' + cause.message, cause);
          } else {
            throw this.n8_1;
          }

        case 4:
          throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.l8_1 === 4) {
        throw e;
      } else {
        this.k8_1 = this.l8_1;
        this.n8_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter(format) {
  this.j4c_1 = format;
  this.k4c_1 = extensions(this.j4c_1);
  // Inline function 'kotlin.require' call
  var tmp;
  var tmp_0 = this.j4c_1;
  if (isInterface(tmp_0, BinaryFormat)) {
    tmp = true;
  } else {
    var tmp_1 = this.j4c_1;
    tmp = isInterface(tmp_1, StringFormat);
  }
  // Inline function 'kotlin.contracts.contract' call
  if (!tmp) {
    // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
    var message = 'Only binary and string formats are supported, ' + toString(this.j4c_1) + ' is not supported.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(KotlinxSerializationConverter).z4c = function (contentType, charset, typeInfo, value, $completion) {
  var tmp = new $serializeCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(KotlinxSerializationConverter).j48 = function (contentType, charset, typeInfo, value, $completion) {
  return this.z4c(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).b2x = function (charset, typeInfo, content, $completion) {
  var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.o2a_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.serialization.kotlinx.serializerForTypeInfo.<anonymous>' call
    var tmp_0;
    if (tmp0_safe_receiver.sa().h()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.h1l(typeInfo.n2a_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.n2a_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (!(value == null) ? isInterface(value, KtList) : false) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (!(value == null) ? isArray(value) : false) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (!(value == null) ? isInterface(value, KtSet) : false) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (!(value == null) ? isInterface(value, KtMap) : false) {
            var keySerializer = elementSerializer(value.h2(), module_0);
            var valueSerializer = elementSerializer(value.i2(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.h1l(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.o2a_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ta()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.distinctBy' call
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var tmp0_iterator = this_0.m();
  while (tmp0_iterator.n()) {
    var item = tmp0_iterator.o();
    // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
    var tmp$ret$0 = guessSerializer(item, module_0);
    destination.k(tmp$ret$0);
  }
  var set = HashSet_init_$Create$();
  var list = ArrayList_init_$Create$();
  var tmp0_iterator_0 = destination.m();
  while (tmp0_iterator_0.n()) {
    var e = tmp0_iterator_0.o();
    // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
    var key = e.g1k().p1l();
    if (set.k(key)) {
      list.k(e);
    }
  }
  var serializers = list;
  if (serializers.p() > 1) {
    // Inline function 'kotlin.error' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
    var tmp0_iterator_1 = serializers.m();
    while (tmp0_iterator_1.n()) {
      var item_0 = tmp0_iterator_1.o();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var tmp$ret$5 = item_0.g1k().p1l();
      destination_0.k(tmp$ret$5);
    }
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.g1k().l1l()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.h();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$8 = false;
      break $l$block_0;
    }
    var tmp0_iterator_2 = _this__u8e3s4.m();
    while (tmp0_iterator_2.n()) {
      var element = tmp0_iterator_2.o();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      if (element == null) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
    }
    tmp$ret$8 = false;
  }
  if (tmp$ret$8) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs.map
