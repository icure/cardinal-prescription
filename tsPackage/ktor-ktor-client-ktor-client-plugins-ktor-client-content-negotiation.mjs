import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList_init_$Create$2rimpp4x9tjd3 as ArrayList_init_$Create$,
  Unit_instanceat14thlj150z as Unit_instance,
  VOID7hggqo3abtya as VOID,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$3c1h61we8oiuv as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  isInterface3d6p8outrmvmk as isInterface,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$_0,
  PrimitiveClasses_getInstanceeand5azd2sul as PrimitiveClasses_getInstance,
  getKClass1s3j9wy1cofik as getKClass,
  setOf45ia9pnfhe90 as setOf,
  startsWith26w8qjqapeeq6 as startsWith,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet_init_$Create$161uomhguzhxi as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Application_getInstance2kmfyp5stwhta as Application_getInstance,
  contentType317fn4f991q9a as contentType,
  HttpHeaders_getInstance2mkud6v3erele as HttpHeaders_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType_0,
  charset1dribv3ku48b1 as charset,
  NullBody_instance3dxn6cf98q9mv as NullBody_instance,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
} from './ktor-ktor-http.mjs';
import {
  register$default3adwmu6p4dd5l as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
  deserialize2wnohscat0mh6 as deserialize,
} from './ktor-ktor-shared-ktor-serialization.mjs';
import {
  Charsets_getInstance193f5sla8amhs as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  TransformRequestBodyContext3ll40opqaho0d as TransformRequestBodyContext,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  TransformResponseBodyContext1axf7xx6ifwbj as TransformResponseBodyContext,
  HttpResponse1532ob1hsse1y as HttpResponse,
  get_request3dwcif5y0fvf1 as get_request,
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance25tnzbc1zmttj as EmptyContent_getInstance,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
initMetadataForLambda(ContentNegotiation$lambda$slambda, CoroutineImpl, VOID, [4]);
initMetadataForLambda(ContentNegotiation$lambda$slambda_1, CoroutineImpl, VOID, [4]);
initMetadataForCoroutine($invoke$convertRequestCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($invoke$convertResponseCOROUTINE$1, CoroutineImpl);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
  this.i45_1 = converter;
  this.j45_1 = contentTypeToSend;
  this.k45_1 = contentTypeMatcher;
}
function defaultMatcher($this, pattern) {
  return new ContentNegotiationConfig$defaultMatcher$1(pattern);
}
function ContentNegotiationConfig$defaultMatcher$1($pattern) {
  this.l45_1 = $pattern;
}
protoOf(ContentNegotiationConfig$defaultMatcher$1).m45 = function (contentType) {
  return contentType.m2c(this.l45_1);
};
function ContentNegotiationConfig() {
  this.n45_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.o45_1 = ArrayList_init_$Create$();
}
protoOf(ContentNegotiationConfig).f2w = function (contentType, converter, configuration) {
  var matcher = contentType.equals(Application_getInstance().e2b_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
  this.p45(contentType, converter, matcher, configuration);
};
protoOf(ContentNegotiationConfig).p45 = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.contracts.contract' call
  configuration(converter);
  var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
  this.o45_1.k(registration);
};
function ContentConverterException(message) {
  Exception_init_$Init$(message, this);
  captureStack(this, ContentConverterException);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  var l = function () {
    return new ContentNegotiationConfig();
  };
  l.callableName = '<init>';
  return l;
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.w38_1.o45_1;
  var ignoredTypes = $this$createClientPlugin.w38_1.n45_1;
  $this$createClientPlugin.f3q(ContentNegotiation$lambda$slambda_0(registrations, ignoredTypes, $this$createClientPlugin, null));
  $this$createClientPlugin.b3j(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
  return Unit_instance;
}
function invoke$convertRequest(registrations, ignoredTypes, $this_createClientPlugin, request, body, $completion) {
  var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, ignoredTypes, $this_createClientPlugin, request, body, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
}
function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().d1j_1 : charset;
  var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
}
function ContentNegotiation$lambda$slambda($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation) {
  this.j47_1 = $registrations;
  this.k47_1 = $ignoredTypes;
  this.l47_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda).q47 = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
  var tmp = this.r47($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(ContentNegotiation$lambda$slambda).g3k = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
  var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
  return this.q47(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = invoke$convertRequest(this.j47_1, this.k47_1, this.l47_1, this.n47_1, this.o47_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda).r47 = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
  var i = new ContentNegotiation$lambda$slambda(this.j47_1, this.k47_1, this.l47_1, completion);
  i.m47_1 = $this$transformRequestBody;
  i.n47_1 = request;
  i.o47_1 = body;
  i.p47_1 = _unused_var__etf5q3;
  return i;
};
function ContentNegotiation$lambda$slambda_0($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda($registrations, $ignoredTypes, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    return i.q47($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  this.a48_1 = $ignoredTypes;
  this.b48_1 = $registrations;
  this.c48_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda_1).e3k = function ($this$transformResponseBody, response, body, info, $completion) {
  var tmp = this.f3k($this$transformResponseBody, response, body, info, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(ContentNegotiation$lambda$slambda_1).g3k = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
  var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
  return this.e3k(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda_1).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp0_elvis_lhs = contentType(this.e48_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }

          tmp_0.h48_1 = tmp_1;
          this.i48_1 = suitableCharset(get_request(this.e48_1).v2g());
          this.k8_1 = 1;
          suspendResult = invoke$convertResponse(this.a48_1, this.b48_1, this.c48_1, get_request(this.e48_1).v32(), this.g48_1, this.f48_1, this.h48_1, this.i48_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda_1).f3k = function ($this$transformResponseBody, response, body, info, completion) {
  var i = new ContentNegotiation$lambda$slambda_1(this.a48_1, this.b48_1, this.c48_1, completion);
  i.d48_1 = $this$transformResponseBody;
  i.e48_1 = response;
  i.f48_1 = body;
  i.g48_1 = info;
  return i;
};
function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformResponseBody, response, body, info, $completion) {
    return i.e3k($this$transformResponseBody, response, body, info, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.i45_1);
}
function $invoke$convertRequestCOROUTINE$0(registrations, ignoredTypes, $this_createClientPlugin, request, body, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.y45_1 = registrations;
  this.z45_1 = ignoredTypes;
  this.a46_1 = $this_createClientPlugin;
  this.b46_1 = request;
  this.c46_1 = body;
}
protoOf($invoke$convertRequestCOROUTINE$0).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 7;
          var tmp0_iterator = this.y45_1.m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
            l$ret$1: do {
              get_LOGGER().r2a('Adding Accept=' + element.j45_1.i2c_1 + ' header for ' + this.b46_1.j30_1.toString());
              if (this.b46_1.l30_1.x26(HttpHeaders_getInstance().s2c_1, element.j45_1.toString())) {
                break l$ret$1;
              }
              accept(this.b46_1, element.j45_1);
            }
             while (false);
          }

          var tmp_0;
          var tmp_1 = this.c46_1;
          if (tmp_1 instanceof OutgoingContent) {
            tmp_0 = true;
          } else {
            var tmp$ret$2;
            l$ret$3: do {
              var this_0 = this.z45_1;
              var tmp_2;
              if (isInterface(this_0, Collection)) {
                tmp_2 = this_0.h();
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$2 = false;
                break l$ret$3;
              }
              var tmp0_iterator_0 = this_0.m();
              while (tmp0_iterator_0.n()) {
                var element_0 = tmp0_iterator_0.o();
                if (element_0.da(this.c46_1)) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
              }
              tmp$ret$2 = false;
            }
             while (false);
            tmp_0 = tmp$ret$2;
          }

          if (tmp_0) {
            get_LOGGER().r2a('Body type ' + toString(getKClassFromExpression(this.c46_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.b46_1.j30_1.toString() + '.'));
            return null;
          }

          var tmp_3 = this;
          var tmp0_elvis_lhs = contentType_0(this.b46_1);
          var tmp_4;
          if (tmp0_elvis_lhs == null) {
            this.a46_1;
            get_LOGGER().r2a("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.b46_1.j30_1.toString() + '.');
            return null;
          } else {
            tmp_4 = tmp0_elvis_lhs;
          }

          tmp_3.d46_1 = tmp_4;
          var tmp_5 = this.c46_1;
          if (tmp_5 instanceof Unit) {
            get_LOGGER().r2a('Sending empty body for ' + this.b46_1.j30_1.toString());
            this.b46_1.l30_1.c27(HttpHeaders_getInstance().k2d_1);
            return EmptyContent_getInstance();
          }

          var tmp_6 = this;
          var this_1 = this.y45_1;
          var destination = ArrayList_init_$Create$();
          var tmp0_iterator_1 = this_1.m();
          while (tmp0_iterator_1.n()) {
            var element_1 = tmp0_iterator_1.o();
            if (element_1.k45_1.m45(this.d46_1)) {
              destination.k(element_1);
            }
          }

          var tmp_7;
          if (!destination.h()) {
            tmp_7 = destination;
          } else {
            tmp_7 = null;
          }

          var tmp1_elvis_lhs = tmp_7;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            this.a46_1;
            get_LOGGER().r2a('None of the registered converters match request Content-Type=' + this.d46_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.b46_1.j30_1.toString() + '.'));
            return null;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }

          tmp_6.e46_1 = tmp_8;
          if (this.b46_1.c3s() == null) {
            get_LOGGER().r2a('Request has unknown body type. Skipping ContentNegotiation for ' + this.b46_1.j30_1.toString() + '.');
            return null;
          }

          this.b46_1.l30_1.c27(HttpHeaders_getInstance().k2d_1);
          this.k8_1 = 1;
          continue $sm;
        case 1:
          var tmp_9 = this;
          tmp_9.g46_1 = this.e46_1;
          this.h46_1 = this.g46_1.m();
          this.k8_1 = 2;
          continue $sm;
        case 2:
          if (!this.h46_1.n()) {
            this.k8_1 = 5;
            continue $sm;
          }

          this.i46_1 = this.h46_1.o();
          var tmp_10 = this;
          tmp_10.j46_1 = this.i46_1;
          this.k8_1 = 3;
          var tmp0_elvis_lhs_0 = charset(this.d46_1);
          var tmp_11 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().d1j_1 : tmp0_elvis_lhs_0;
          var tmp_12 = ensureNotNull(this.b46_1.c3s());
          var this_2 = this.c46_1;
          var tmp_13;
          if (!equals(this_2, NullBody_instance)) {
            tmp_13 = this_2;
          } else {
            tmp_13 = null;
          }

          suspendResult = this.j46_1.i45_1.j48(this.d46_1, tmp_11, tmp_12, tmp_13, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          var result = suspendResult;
          if (!(result == null)) {
            get_LOGGER().r2a('Converted request body using ' + toString(this.j46_1.i45_1) + ' for ' + this.b46_1.j30_1.toString());
          }

          var result_0 = result;
          if (!(result_0 == null)) {
            this.f46_1 = result_0;
            this.k8_1 = 6;
            continue $sm;
          } else {
            this.k8_1 = 4;
            continue $sm;
          }

        case 4:
          this.k8_1 = 2;
          continue $sm;
        case 5:
          this.f46_1 = null;
          if (false) {
            this.k8_1 = 1;
            continue $sm;
          }

          this.k8_1 = 6;
          continue $sm;
        case 6:
          var tmp2_elvis_lhs = this.f46_1;
          var tmp_14;
          if (tmp2_elvis_lhs == null) {
            var tmp_15 = "Can't convert " + toString(this.c46_1) + ' with contentType ' + this.d46_1.toString() + ' using converters ';
            throw new ContentConverterException(tmp_15 + joinToString(this.e46_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
          } else {
            tmp_14 = tmp2_elvis_lhs;
          }

          var serializedContent = tmp_14;
          return serializedContent;
        case 7:
          throw this.n8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.l8_1 === 7) {
        throw e;
      } else {
        this.k8_1 = this.l8_1;
        this.n8_1 = e;
      }
    }
   while (true);
};
function $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s46_1 = ignoredTypes;
  this.t46_1 = registrations;
  this.u46_1 = $this_createClientPlugin;
  this.v46_1 = requestUrl;
  this.w46_1 = info;
  this.x46_1 = body;
  this.y46_1 = responseContentType;
  this.z46_1 = charset;
}
protoOf($invoke$convertResponseCOROUTINE$1).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this.x46_1;
          if (!isInterface(tmp_0, ByteReadChannel)) {
            get_LOGGER().r2a('Response body is already transformed. Skipping ContentNegotiation for ' + this.v46_1.toString() + '.');
            return null;
          }

          if (this.s46_1.x1(this.w46_1.n2a_1)) {
            get_LOGGER().r2a('Response body type ' + toString(this.w46_1.n2a_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.v46_1.toString() + '.'));
            return null;
          }

          var tmp_1 = this;
          var this_0 = this.t46_1;
          var destination = ArrayList_init_$Create$();
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
            if (element.k45_1.m45(this.y46_1)) {
              destination.k(element);
            }
          }

          var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
          var tmp0_iterator_0 = destination.m();
          while (tmp0_iterator_0.n()) {
            var item = tmp0_iterator_0.o();
            destination_0.k(item.i45_1);
          }

          var tmp_2;
          if (!destination_0.h()) {
            tmp_2 = destination_0;
          } else {
            tmp_2 = null;
          }

          var tmp0_elvis_lhs = tmp_2;
          var tmp_3;
          if (tmp0_elvis_lhs == null) {
            this.u46_1;
            get_LOGGER().r2a('None of the registered converters match response with Content-Type=' + this.y46_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.v46_1.toString() + '.'));
            return null;
          } else {
            tmp_3 = tmp0_elvis_lhs;
          }

          tmp_1.a47_1 = tmp_3;
          this.k8_1 = 1;
          suspendResult = deserialize(this.a47_1, this.x46_1, this.w46_1, this.z46_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          if (!isInterface(result, ByteReadChannel)) {
            get_LOGGER().r2a('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.v46_1.toString() + '.');
          }

          return result;
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
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().mb(), PrimitiveClasses_getInstance().ib(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    var tmp = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp, ContentNegotiation$lambda);
  }
}
function JsonContentTypeMatcher() {
}
protoOf(JsonContentTypeMatcher).m45 = function (contentType) {
  if (contentType.m2c(Application_getInstance().e2b_1)) {
    return true;
  }
  var value = contentType.l2c().toString();
  return startsWith(value, 'application/', true) && endsWith(value, '+json', true);
};
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
  }
}
//region block: post-declaration
protoOf(ContentNegotiationConfig).g2w = register$default;
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.mjs.map
