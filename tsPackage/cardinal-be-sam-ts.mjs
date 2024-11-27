import * as options from './options.mjs'
import * as utils from './utils.mjs'
import * as sdk from './sdk.mjs'
import * as model from './model.mjs'
import * as api from './api.mjs'
import {
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instanceat14thlj150z as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID7hggqo3abtya as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  lazy2hsh8ze7j6ikd as lazy,
  defineProp3hxgpk2knu2px as defineProp,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  isNaNymqb93xtq8w8 as isNaN_0,
  isFinite2t9l5a275mxm6 as isFinite,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  numberToLong1a4cndvg6c52s as numberToLong,
  ArrayList_init_$Create$3m1kyiqequwm5 as ArrayList_init_$Create$,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  copyToArray2j022khrow2yi as copyToArray,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  GlobalScope_instance3m5vaygder2s9 as GlobalScope_instance,
  promise1ky6tawqaxbt4 as promise,
} from './kotlinx-coroutines-core.mjs';
import {
  Companion_getInstancelbkcl3360l3r as Companion_getInstance,
  SamSdkOptions18w2nrd9smr51 as SamSdkOptions,
  isJsSafe3tg3iamd6fmve as isJsSafe,
  InternalCardinalExceptionc3t96mv2fga as InternalCardinalException,
  _JwtRefresh___init__impl__17g47niqmuwb5es91o as _JwtRefresh___init__impl__17g47n,
  _JwtBearer___init__impl__envtvz3047p4ld8xgab as _JwtBearer___init__impl__envtvz,
  JwtBearer1yfd1mgpklfw8 as JwtBearer,
  JwtCredentials2bkcd3j3a9kcm as JwtCredentials,
  valueOf2742a51uwcjku as valueOf,
  ThirdPartyAuthentication14c770gl4xl8k as ThirdPartyAuthentication,
  UsernameLongToken2ndogdyawcawo as UsernameLongToken,
  UsernamePassword1chj6960jmwe9 as UsernamePassword,
} from './cardinal-be-sam.mjs';
import {
  base32Encodekmf3yf2s0juj as base32Encode,
  base32Decode2jbdu2t0l4088 as base32Decode,
  toHexStringu73q9mlb2b2a as toHexString,
  hexToByteArray3fb7kdnap6dyp as hexToByteArray,
  base64Encode2qlepsvd3tele as base64Encode,
  base64Decodes731id9on7gy as base64Decode,
} from './kryptom-lib.mjs';
//region block: imports
var CodeStub = model.CodeStub;
var Amp = model.Amp;
var Nmp = model.Nmp;
var Paragraph = model.Paragraph;
var PharmaceuticalForm = model.PharmaceuticalForm;
var SamVersion = model.SamVersion;
var Substance = model.Substance;
var Verse = model.Verse;
var VmpGroup = model.VmpGroup;
var Vmp = model.Vmp;
var AddedDocument = model.AddedDocument;
var AmpComponent = model.AmpComponent;
var AmppComponent = model.AmppComponent;
var Ampp = model.Ampp;
var Atc = model.Atc;
var BoundedParameter = model.BoundedParameter;
var CommentedClassification = model.CommentedClassification;
var Commercialization = model.Commercialization;
var Company = model.Company;
var ComplexStrength = model.ComplexStrength;
var Copayment = model.Copayment;
var DeviceType = model.DeviceType;
var Dmpp = model.Dmpp;
var DosageParameter = model.DosageParameter;
var Indication = model.Indication;
var Ingredient = model.Ingredient;
var NoGenericPrescriptionReason = model.NoGenericPrescriptionReason;
var NoSwitchReason = model.NoSwitchReason;
var NumeratorRange = model.NumeratorRange;
var PackagingType = model.PackagingType;
var Pricing = model.Pricing;
var Quantity = model.Quantity;
var ReimbursementCriterion = model.ReimbursementCriterion;
var Reimbursement = model.Reimbursement;
var RouteOfAdministration = model.RouteOfAdministration;
var SamText = model.SamText;
var StandardDosage = model.StandardDosage;
var StandardSubstance = model.StandardSubstance;
var StrengthRange = model.StrengthRange;
var SupplyProblem = model.SupplyProblem;
var VirtualForm = model.VirtualForm;
var VirtualIngredient = model.VirtualIngredient;
var VmpComponent = model.VmpComponent;
var Vtm = model.Vtm;
var Wada = model.Wada;
var PharmaceuticalFormStub = model.PharmaceuticalFormStub;
var SubstanceStub = model.SubstanceStub;
var VmpGroupStub = model.VmpGroupStub;
var VmpStub = model.VmpStub;
var JwtCredentials_0 = options.Credentials.JwtCredentials;
var ThirdPartyAuth = options.Credentials.ThirdPartyAuth;
var UsernameLongToken_0 = options.Credentials.UsernameLongToken;
var UsernamePassword_0 = options.Credentials.UsernamePassword;
//endregion
//region block: pre-declaration
initMetadataForLambda(InternalSdkInitializers$initializeSdk$slambda, CoroutineImpl, VOID, [1]);
initMetadataForObject(InternalSdkInitializers_0, 'InternalSdkInitializers');
initMetadataForClass(CardinalBeSamSdkJsImpl, 'CardinalBeSamSdkJsImpl');
initMetadataForLambda(SamV2ApiImplJs$getSamVersion$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findAmpsByDmppCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findAmpsByAmpCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listVmpsByVmpCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listVmpsByGroupIds$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByGroupCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByDmppCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByGroupIds$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByVmpCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByVmpIds$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listNmpsByCnks$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listSubstances$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listPharmaceuticalForms$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getAddedDocument$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findParagraphs$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findParagraphsWithCnk$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getAmpsForParagraph$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getVtmNamesForParagraph$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getVersesHierarchy$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(SamV2ApiImplJs, 'SamV2ApiImplJs');
initMetadataForObject(CheckedConverters, 'CheckedConverters');
initMetadataForInterface(PaginatedListIterator, 'PaginatedListIteratorJs');
initMetadataForLambda(paginatedListIterator_toJs$o$hasNext$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(paginatedListIterator_toJs$o$next$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(paginatedListIterator_toJs$1, VOID, VOID, VOID, [PaginatedListIterator]);
//endregion
function InternalSdkInitializers$initializeSdk$slambda($applicationId, $apiUrl, $credentials, resultContinuation) {
  this.h6z_1 = $applicationId;
  this.i6z_1 = $apiUrl;
  this.j6z_1 = $credentials;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(InternalSdkInitializers$initializeSdk$slambda).l6z = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(InternalSdkInitializers$initializeSdk$slambda).c9 = function (p1, $completion) {
  return this.l6z((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(InternalSdkInitializers$initializeSdk$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = Companion_getInstance().n4p(this.h6z_1, this.i6z_1, toKt(this.j6z_1), new SamSdkOptions(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          return new CardinalBeSamSdkJsImpl(ARGUMENT);
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
protoOf(InternalSdkInitializers$initializeSdk$slambda).a1j = function ($this$promise, completion) {
  var i = new InternalSdkInitializers$initializeSdk$slambda(this.h6z_1, this.i6z_1, this.j6z_1, completion);
  i.k6z_1 = $this$promise;
  return i;
};
function InternalSdkInitializers$initializeSdk$slambda_0($applicationId, $apiUrl, $credentials, resultContinuation) {
  var i = new InternalSdkInitializers$initializeSdk$slambda($applicationId, $apiUrl, $credentials, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.l6z($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function InternalSdkInitializers_0() {
}
protoOf(InternalSdkInitializers_0).initializeSdk = function (applicationId, apiUrl, credentials) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, InternalSdkInitializers$initializeSdk$slambda_0(applicationId, apiUrl, credentials, null));
};
var InternalSdkInitializers_instance;
function InternalSdkInitializers_getInstance() {
  return InternalSdkInitializers_instance;
}
function CardinalBeSamSdkJsImpl$sam$delegate$lambda(this$0) {
  return function () {
    return new SamV2ApiImplJs(this$0.m6z_1.w4p());
  };
}
function CardinalBeSamSdkJsImpl(sdk) {
  this.m6z_1 = sdk;
  var tmp = this;
  tmp.n6z_1 = lazy(CardinalBeSamSdkJsImpl$sam$delegate$lambda(this));
}
protoOf(CardinalBeSamSdkJsImpl).w4p = function () {
  // Inline function 'kotlin.getValue' call
  var this_0 = this.n6z_1;
  sam$factory();
  return this_0.z();
};
function sam$factory() {
  return getPropertyCallableRef('sam', 1, KProperty1, function (receiver) {
    return receiver.w4p();
  }, null);
}
function SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda$lambda(x1) {
  return nmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findAmpsByDmppCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findAmpsByAmpCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda$lambda(x1) {
  return vmpGroup_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda$lambda(x1) {
  return vmpGroup_toJs(x1);
}
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda_0(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda_0(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda_0(x1) {
  return vmpGroup_toJs(x1);
}
function SamV2ApiImplJs$listNmpsByCnks$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listNmpsByCnks$slambda$lambda_0(x1) {
  return nmp_toJs(x1);
}
function SamV2ApiImplJs$listSubstances$slambda$lambda(x1) {
  return substance_toJs(x1);
}
function SamV2ApiImplJs$listPharmaceuticalForms$slambda$lambda(x1) {
  return pharmaceuticalForm_toJs(x1);
}
function SamV2ApiImplJs$findParagraphs$slambda$lambda(x1) {
  return paragraph_toJs(x1);
}
function SamV2ApiImplJs$findParagraphsWithCnk$slambda$lambda(x1) {
  return paragraph_toJs(x1);
}
function SamV2ApiImplJs$getAmpsForParagraph$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$getVtmNamesForParagraph$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$getSamVersion$slambda(this$0, resultContinuation) {
  this.w6z_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getSamVersion$slambda).y6z = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$getSamVersion$slambda).c9 = function (p1, $completion) {
  return this.y6z((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getSamVersion$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = this.w6z_1.z6z_1.i57(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return samVersion_toJs(result);
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
protoOf(SamV2ApiImplJs$getSamVersion$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getSamVersion$slambda(this.w6z_1, completion);
  i.x6z_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getSamVersion$slambda_0(this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getSamVersion$slambda(this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.y6z($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.i70_1 = $language;
  this.j70_1 = $label;
  this.k70_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).o70 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).c9 = function (p1, $completion) {
  return this.o70((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.m70_1 = CheckedConverters_instance.t70(this.i70_1);
          this.n70_1 = CheckedConverters_instance.t70(this.j70_1);
          this.k8_1 = 1;
          suspendResult = this.k70_1.z6z_1.j57(this.m70_1, this.n70_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda(this.i70_1, this.j70_1, this.k70_1, completion);
  i.l70_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o70($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.c71_1 = $language;
  this.d71_1 = $label;
  this.e71_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).i71 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).c9 = function (p1, $completion) {
  return this.i71((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.g71_1 = CheckedConverters_instance.t70(this.c71_1);
          this.h71_1 = CheckedConverters_instance.t70(this.d71_1);
          this.k8_1 = 1;
          suspendResult = this.e71_1.z6z_1.k57(this.g71_1, this.h71_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda(this.c71_1, this.d71_1, this.e71_1, completion);
  i.f71_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.i71($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation) {
  this.r71_1 = $vmpgCode;
  this.s71_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).i71 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).c9 = function (p1, $completion) {
  return this.i71((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.u71_1 = this.r71_1;
          this.k8_1 = 1;
          suspendResult = this.s71_1.z6z_1.l57(this.u71_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda(this.r71_1, this.s71_1, completion);
  i.t71_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda_0($vmpgCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.i71($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation) {
  this.d72_1 = $vmpCode;
  this.e72_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).i71 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).c9 = function (p1, $completion) {
  return this.i71((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.g72_1 = this.d72_1;
          this.k8_1 = 1;
          suspendResult = this.e72_1.z6z_1.m57(this.g72_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda(this.d72_1, this.e72_1, completion);
  i.f72_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda_0($vmpCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.i71($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.p72_1 = $language;
  this.q72_1 = $label;
  this.r72_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).v72 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).c9 = function (p1, $completion) {
  return this.v72((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.t72_1 = CheckedConverters_instance.t70(this.p72_1);
          this.u72_1 = CheckedConverters_instance.t70(this.q72_1);
          this.k8_1 = 1;
          suspendResult = this.r72_1.z6z_1.n57(this.t72_1, this.u72_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda(this.p72_1, this.q72_1, this.r72_1, completion);
  i.s72_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.v72($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda($vmpgId, this$0, resultContinuation) {
  this.e73_1 = $vmpgId;
  this.f73_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).i71 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).c9 = function (p1, $completion) {
  return this.i71((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.h73_1 = this.e73_1;
          this.k8_1 = 1;
          suspendResult = this.f73_1.z6z_1.o57(this.h73_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda(this.e73_1, this.f73_1, completion);
  i.g73_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda_0($vmpgId, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda($vmpgId, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.i71($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation) {
  this.q73_1 = $vmpgCode;
  this.r73_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).o70 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).c9 = function (p1, $completion) {
  return this.o70((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.t73_1 = this.q73_1;
          this.k8_1 = 1;
          suspendResult = this.r73_1.z6z_1.p57(this.t73_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda(this.q73_1, this.r73_1, completion);
  i.s73_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda_0($vmpgCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o70($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda($ampId, this$0, resultContinuation) {
  this.c74_1 = $ampId;
  this.d74_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).o70 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).c9 = function (p1, $completion) {
  return this.o70((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.f74_1 = this.c74_1;
          this.k8_1 = 1;
          suspendResult = this.d74_1.z6z_1.q57(this.f74_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda(this.c74_1, this.d74_1, completion);
  i.e74_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda_0($ampId, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda($ampId, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o70($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation) {
  this.o74_1 = $vmpCode;
  this.p74_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).o70 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).c9 = function (p1, $completion) {
  return this.o70((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.r74_1 = this.o74_1;
          this.k8_1 = 1;
          suspendResult = this.p74_1.z6z_1.r57(this.r74_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda(this.o74_1, this.p74_1, completion);
  i.q74_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda_0($vmpCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o70($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda($atcCode, this$0, resultContinuation) {
  this.a75_1 = $atcCode;
  this.b75_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).o70 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).c9 = function (p1, $completion) {
  return this.o70((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.d75_1 = this.a75_1;
          this.k8_1 = 1;
          suspendResult = this.b75_1.z6z_1.s57(this.d75_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda(this.a75_1, this.b75_1, completion);
  i.c75_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda_0($atcCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda($atcCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o70($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda($vmpId, this$0, resultContinuation) {
  this.m75_1 = $vmpId;
  this.n75_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).o70 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).c9 = function (p1, $completion) {
  return this.o70((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.p75_1 = this.m75_1;
          this.k8_1 = 1;
          suspendResult = this.n75_1.z6z_1.t57(this.p75_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda(this.m75_1, this.n75_1, completion);
  i.o75_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda_0($vmpId, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda($vmpId, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o70($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findAmpsByDmppCode$slambda($dmppCode, this$0, resultContinuation) {
  this.y75_1 = $dmppCode;
  this.z75_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.b76_1 = this.y75_1;
          this.k8_1 = 1;
          suspendResult = this.z75_1.z6z_1.u57(this.b76_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$findAmpsByDmppCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findAmpsByDmppCode$slambda(this.y75_1, this.z75_1, completion);
  i.a76_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findAmpsByDmppCode$slambda_0($dmppCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findAmpsByDmppCode$slambda($dmppCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findAmpsByAmpCode$slambda($ampCode, this$0, resultContinuation) {
  this.m76_1 = $ampCode;
  this.n76_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.p76_1 = this.m76_1;
          this.k8_1 = 1;
          suspendResult = this.n76_1.z6z_1.v57(this.p76_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$findAmpsByAmpCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findAmpsByAmpCode$slambda(this.m76_1, this.n76_1, completion);
  i.o76_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findAmpsByAmpCode$slambda_0($ampCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findAmpsByAmpCode$slambda($ampCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.y76_1 = $language;
  this.z76_1 = $label;
  this.a77_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).e77 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).c9 = function (p1, $completion) {
  return this.e77((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.c77_1 = CheckedConverters_instance.t70(this.y76_1);
          this.d77_1 = CheckedConverters_instance.t70(this.z76_1);
          this.k8_1 = 1;
          suspendResult = this.a77_1.z6z_1.w57(this.c77_1, this.d77_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda(this.y76_1, this.z76_1, this.a77_1, completion);
  i.b77_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.e77($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda($vmpgCode, this$0, resultContinuation) {
  this.n77_1 = $vmpgCode;
  this.o77_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).e77 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).c9 = function (p1, $completion) {
  return this.e77((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.q77_1 = this.n77_1;
          this.k8_1 = 1;
          suspendResult = this.o77_1.z6z_1.x57(this.q77_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda(this.n77_1, this.o77_1, completion);
  i.p77_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda_0($vmpgCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda($vmpgCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.e77($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda($vmpCodes, this$0, resultContinuation) {
  this.z77_1 = $vmpCodes;
  this.a78_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).d78 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).c9 = function (p1, $completion) {
  return this.d78((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.c78_1 = tmp_1.e78(this.z77_1, 'vmpCodes', SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.a78_1.z6z_1.y57(this.c78_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listVmpsByVmpCodes$slambda(this.z77_1, this.a78_1, completion);
  i.b78_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda_0($vmpCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listVmpsByVmpCodes$slambda($vmpCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.d78($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listVmpsByGroupIds$slambda($vmpgIds, this$0, resultContinuation) {
  this.n78_1 = $vmpgIds;
  this.o78_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).d78 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).c9 = function (p1, $completion) {
  return this.d78((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.q78_1 = tmp_1.e78(this.n78_1, 'vmpgIds', SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.o78_1.z6z_1.z57(this.q78_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listVmpsByGroupIds$slambda(this.n78_1, this.o78_1, completion);
  i.p78_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listVmpsByGroupIds$slambda_0($vmpgIds, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listVmpsByGroupIds$slambda($vmpgIds, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.d78($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda($ampCodes, this$0, resultContinuation) {
  this.z78_1 = $ampCodes;
  this.a79_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.c79_1 = tmp_1.e78(this.z78_1, 'ampCodes', SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.a79_1.z6z_1.a58(this.c79_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByGroupCodes$slambda(this.z78_1, this.a79_1, completion);
  i.b79_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda_0($ampCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByGroupCodes$slambda($ampCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda($dmppCodes, this$0, resultContinuation) {
  this.l79_1 = $dmppCodes;
  this.m79_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.o79_1 = tmp_1.e78(this.l79_1, 'dmppCodes', SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.m79_1.z6z_1.b58(this.o79_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByDmppCodes$slambda(this.l79_1, this.m79_1, completion);
  i.n79_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda_0($dmppCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByDmppCodes$slambda($dmppCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByGroupIds$slambda($groupIds, this$0, resultContinuation) {
  this.x79_1 = $groupIds;
  this.y79_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.a7a_1 = tmp_1.e78(this.x79_1, 'groupIds', SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.y79_1.z6z_1.c58(this.a7a_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByGroupIds$slambda(this.x79_1, this.y79_1, completion);
  i.z79_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByGroupIds$slambda_0($groupIds, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByGroupIds$slambda($groupIds, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda($vmpgCodes, this$0, resultContinuation) {
  this.j7a_1 = $vmpgCodes;
  this.k7a_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.m7a_1 = tmp_1.e78(this.j7a_1, 'vmpgCodes', SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.k7a_1.z6z_1.d58(this.m7a_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByVmpCodes$slambda(this.j7a_1, this.k7a_1, completion);
  i.l7a_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda_0($vmpgCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByVmpCodes$slambda($vmpgCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByVmpIds$slambda($vmpIds, this$0, resultContinuation) {
  this.v7a_1 = $vmpIds;
  this.w7a_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.y7a_1 = tmp_1.e78(this.v7a_1, 'vmpIds', SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.w7a_1.z6z_1.e58(this.y7a_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByVmpIds$slambda(this.v7a_1, this.w7a_1, completion);
  i.x7a_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByVmpIds$slambda_0($vmpIds, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByVmpIds$slambda($vmpIds, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda($vmpgCodes, this$0, resultContinuation) {
  this.h7b_1 = $vmpgCodes;
  this.i7b_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).l7b = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).c9 = function (p1, $completion) {
  return this.l7b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.k7b_1 = tmp_1.e78(this.h7b_1, 'vmpgCodes', SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.i7b_1.z6z_1.f58(this.k7b_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda(this.h7b_1, this.i7b_1, completion);
  i.j7b_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda_0($vmpgCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda($vmpgCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.l7b($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listNmpsByCnks$slambda($cnks, this$0, resultContinuation) {
  this.u7b_1 = $cnks;
  this.v7b_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).y7b = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).c9 = function (p1, $completion) {
  return this.y7b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.x7b_1 = tmp_1.e78(this.u7b_1, 'cnks', SamV2ApiImplJs$listNmpsByCnks$slambda$lambda);
          this.k8_1 = 1;
          suspendResult = this.v7b_1.z6z_1.g58(this.x7b_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.d76(result, SamV2ApiImplJs$listNmpsByCnks$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listNmpsByCnks$slambda(this.u7b_1, this.v7b_1, completion);
  i.w7b_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listNmpsByCnks$slambda_0($cnks, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listNmpsByCnks$slambda($cnks, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.y7b($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listSubstances$slambda(this$0, resultContinuation) {
  this.h7c_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listSubstances$slambda).j7c = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listSubstances$slambda).c9 = function (p1, $completion) {
  return this.j7c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listSubstances$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = this.h7c_1.z6z_1.h58(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$listSubstances$slambda$lambda);
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
protoOf(SamV2ApiImplJs$listSubstances$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listSubstances$slambda(this.h7c_1, completion);
  i.i7c_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listSubstances$slambda_0(this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listSubstances$slambda(this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.j7c($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listPharmaceuticalForms$slambda(this$0, resultContinuation) {
  this.s7c_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).u7c = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).c9 = function (p1, $completion) {
  return this.u7c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = this.s7c_1.z6z_1.i58(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$listPharmaceuticalForms$slambda$lambda);
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
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listPharmaceuticalForms$slambda(this.s7c_1, completion);
  i.t7c_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listPharmaceuticalForms$slambda_0(this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listPharmaceuticalForms$slambda(this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.u7c($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getAddedDocument$slambda($chapterName, $paragraphName, $verseSeq, $docSeq, $language, this$0, resultContinuation) {
  this.d7d_1 = $chapterName;
  this.e7d_1 = $paragraphName;
  this.f7d_1 = $verseSeq;
  this.g7d_1 = $docSeq;
  this.h7d_1 = $language;
  this.i7d_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).p7d = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).c9 = function (p1, $completion) {
  return this.p7d((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k7d_1 = this.d7d_1;
          this.l7d_1 = this.e7d_1;
          this.m7d_1 = CheckedConverters_instance.q7d(this.f7d_1, 'verseSeq');
          this.n7d_1 = CheckedConverters_instance.q7d(this.g7d_1, 'docSeq');
          this.o7d_1 = this.h7d_1;
          this.k8_1 = 1;
          suspendResult = this.i7d_1.z6z_1.j58(this.k7d_1, this.l7d_1, this.m7d_1, this.n7d_1, this.o7d_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
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
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getAddedDocument$slambda(this.d7d_1, this.e7d_1, this.f7d_1, this.g7d_1, this.h7d_1, this.i7d_1, completion);
  i.j7d_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getAddedDocument$slambda_0($chapterName, $paragraphName, $verseSeq, $docSeq, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getAddedDocument$slambda($chapterName, $paragraphName, $verseSeq, $docSeq, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.p7d($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findParagraphs$slambda($searchString, $language, this$0, resultContinuation) {
  this.z7d_1 = $searchString;
  this.a7e_1 = $language;
  this.b7e_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findParagraphs$slambda).f7e = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findParagraphs$slambda).c9 = function (p1, $completion) {
  return this.f7e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findParagraphs$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.d7e_1 = this.z7d_1;
          this.e7e_1 = this.a7e_1;
          this.k8_1 = 1;
          suspendResult = this.b7e_1.z6z_1.k58(this.d7e_1, this.e7e_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$findParagraphs$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findParagraphs$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findParagraphs$slambda(this.z7d_1, this.a7e_1, this.b7e_1, completion);
  i.c7e_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findParagraphs$slambda_0($searchString, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findParagraphs$slambda($searchString, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.f7e($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findParagraphsWithCnk$slambda($cnk, $language, this$0, resultContinuation) {
  this.o7e_1 = $cnk;
  this.p7e_1 = $language;
  this.q7e_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).f7e = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).c9 = function (p1, $completion) {
  return this.f7e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.s7e_1 = CheckedConverters_instance.q7d(this.o7e_1, 'cnk');
          this.t7e_1 = this.p7e_1;
          this.k8_1 = 1;
          suspendResult = this.q7e_1.z6z_1.l58(this.s7e_1, this.t7e_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$findParagraphsWithCnk$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findParagraphsWithCnk$slambda(this.o7e_1, this.p7e_1, this.q7e_1, completion);
  i.r7e_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findParagraphsWithCnk$slambda_0($cnk, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findParagraphsWithCnk$slambda($cnk, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.f7e($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getAmpsForParagraph$slambda($chapterName, $paragraphName, this$0, resultContinuation) {
  this.c7f_1 = $chapterName;
  this.d7f_1 = $paragraphName;
  this.e7f_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).c76 = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).c9 = function (p1, $completion) {
  return this.c76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.g7f_1 = this.c7f_1;
          this.h7f_1 = this.d7f_1;
          this.k8_1 = 1;
          suspendResult = this.e7f_1.z6z_1.m58(this.g7f_1, this.h7f_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$getAmpsForParagraph$slambda$lambda);
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
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getAmpsForParagraph$slambda(this.c7f_1, this.d7f_1, this.e7f_1, completion);
  i.f7f_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getAmpsForParagraph$slambda_0($chapterName, $paragraphName, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getAmpsForParagraph$slambda($chapterName, $paragraphName, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.c76($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getVtmNamesForParagraph$slambda($chapterName, $paragraphName, $language, this$0, resultContinuation) {
  this.q7f_1 = $chapterName;
  this.r7f_1 = $paragraphName;
  this.s7f_1 = $language;
  this.t7f_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).y7f = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).c9 = function (p1, $completion) {
  return this.y7f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.v7f_1 = this.q7f_1;
          this.w7f_1 = this.r7f_1;
          this.x7f_1 = this.s7f_1;
          this.k8_1 = 1;
          suspendResult = this.t7f_1.z6z_1.n58(this.v7f_1, this.w7f_1, this.x7f_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.d76(result, SamV2ApiImplJs$getVtmNamesForParagraph$slambda$lambda);
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
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getVtmNamesForParagraph$slambda(this.q7f_1, this.r7f_1, this.s7f_1, this.t7f_1, completion);
  i.u7f_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getVtmNamesForParagraph$slambda_0($chapterName, $paragraphName, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getVtmNamesForParagraph$slambda($chapterName, $paragraphName, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.y7f($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getVersesHierarchy$slambda($chapterName, $paragraphName, this$0, resultContinuation) {
  this.h7g_1 = $chapterName;
  this.i7g_1 = $paragraphName;
  this.j7g_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).n7g = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).c9 = function (p1, $completion) {
  return this.n7g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.l7g_1 = this.h7g_1;
          this.m7g_1 = this.i7g_1;
          this.k8_1 = 1;
          suspendResult = this.j7g_1.z6z_1.o58(this.l7g_1, this.m7g_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          var tmp_1;
          if (result == null) {
            tmp_1 = null;
          } else {
            tmp_1 = verse_toJs(result);
          }

          return tmp_0.o7g(tmp_1);
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
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).a1j = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getVersesHierarchy$slambda(this.h7g_1, this.i7g_1, this.j7g_1, completion);
  i.k7g_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getVersesHierarchy$slambda_0($chapterName, $paragraphName, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getVersesHierarchy$slambda($chapterName, $paragraphName, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.n7g($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs(samV2Api) {
  this.z6z_1 = samV2Api;
}
protoOf(SamV2ApiImplJs).p7g = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getSamVersion$slambda_0(this, null));
};
protoOf(SamV2ApiImplJs).getSamVersion = function () {
  return this.p7g();
};
protoOf(SamV2ApiImplJs).q7g = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByLabel = function (language, label) {
  return this.q7g(language, label);
};
protoOf(SamV2ApiImplJs).r7g = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByLabel = function (language, label) {
  return this.r7g(language, label);
};
protoOf(SamV2ApiImplJs).s7g = function (vmpgCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda_0(vmpgCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByGroupCode = function (vmpgCode) {
  return this.s7g(vmpgCode);
};
protoOf(SamV2ApiImplJs).t7g = function (vmpCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda_0(vmpCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByVmpCode = function (vmpCode) {
  return this.t7g(vmpCode);
};
protoOf(SamV2ApiImplJs).u7g = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedNmpsByLabel = function (language, label) {
  return this.u7g(language, label);
};
protoOf(SamV2ApiImplJs).v7g = function (vmpgId) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda_0(vmpgId, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByGroupId = function (vmpgId) {
  return this.v7g(vmpgId);
};
protoOf(SamV2ApiImplJs).w7g = function (vmpgCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda_0(vmpgCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByGroupCode = function (vmpgCode) {
  return this.w7g(vmpgCode);
};
protoOf(SamV2ApiImplJs).x7g = function (ampId) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda_0(ampId, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByGroupId = function (ampId) {
  return this.x7g(ampId);
};
protoOf(SamV2ApiImplJs).y7g = function (vmpCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda_0(vmpCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByVmpCode = function (vmpCode) {
  return this.y7g(vmpCode);
};
protoOf(SamV2ApiImplJs).z7g = function (atcCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda_0(atcCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByAtc = function (atcCode) {
  return this.z7g(atcCode);
};
protoOf(SamV2ApiImplJs).a7h = function (vmpId) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda_0(vmpId, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByVmpId = function (vmpId) {
  return this.a7h(vmpId);
};
protoOf(SamV2ApiImplJs).b7h = function (dmppCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findAmpsByDmppCode$slambda_0(dmppCode, this, null));
};
protoOf(SamV2ApiImplJs).findAmpsByDmppCode = function (dmppCode) {
  return this.b7h(dmppCode);
};
protoOf(SamV2ApiImplJs).c7h = function (ampCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findAmpsByAmpCode$slambda_0(ampCode, this, null));
};
protoOf(SamV2ApiImplJs).findAmpsByAmpCode = function (ampCode) {
  return this.c7h(ampCode);
};
protoOf(SamV2ApiImplJs).d7h = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpGroupsByLabel = function (language, label) {
  return this.d7h(language, label);
};
protoOf(SamV2ApiImplJs).e7h = function (vmpgCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda_0(vmpgCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpGroupsByVmpGroupCode = function (vmpgCode) {
  return this.e7h(vmpgCode);
};
protoOf(SamV2ApiImplJs).f7h = function (vmpCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listVmpsByVmpCodes$slambda_0(vmpCodes, this, null));
};
protoOf(SamV2ApiImplJs).listVmpsByVmpCodes = function (vmpCodes) {
  return this.f7h(vmpCodes);
};
protoOf(SamV2ApiImplJs).g7h = function (vmpgIds) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listVmpsByGroupIds$slambda_0(vmpgIds, this, null));
};
protoOf(SamV2ApiImplJs).listVmpsByGroupIds = function (vmpgIds) {
  return this.g7h(vmpgIds);
};
protoOf(SamV2ApiImplJs).h7h = function (ampCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByGroupCodes$slambda_0(ampCodes, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByGroupCodes = function (ampCodes) {
  return this.h7h(ampCodes);
};
protoOf(SamV2ApiImplJs).i7h = function (dmppCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByDmppCodes$slambda_0(dmppCodes, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByDmppCodes = function (dmppCodes) {
  return this.i7h(dmppCodes);
};
protoOf(SamV2ApiImplJs).j7h = function (groupIds) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByGroupIds$slambda_0(groupIds, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByGroupIds = function (groupIds) {
  return this.j7h(groupIds);
};
protoOf(SamV2ApiImplJs).k7h = function (vmpgCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByVmpCodes$slambda_0(vmpgCodes, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByVmpCodes = function (vmpgCodes) {
  return this.k7h(vmpgCodes);
};
protoOf(SamV2ApiImplJs).l7h = function (vmpIds) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByVmpIds$slambda_0(vmpIds, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByVmpIds = function (vmpIds) {
  return this.l7h(vmpIds);
};
protoOf(SamV2ApiImplJs).m7h = function (vmpgCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda_0(vmpgCodes, this, null));
};
protoOf(SamV2ApiImplJs).listVmpGroupsByVmpGroupCodes = function (vmpgCodes) {
  return this.m7h(vmpgCodes);
};
protoOf(SamV2ApiImplJs).n7h = function (cnks) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listNmpsByCnks$slambda_0(cnks, this, null));
};
protoOf(SamV2ApiImplJs).listNmpsByCnks = function (cnks) {
  return this.n7h(cnks);
};
protoOf(SamV2ApiImplJs).o7h = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listSubstances$slambda_0(this, null));
};
protoOf(SamV2ApiImplJs).listSubstances = function () {
  return this.o7h();
};
protoOf(SamV2ApiImplJs).p7h = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listPharmaceuticalForms$slambda_0(this, null));
};
protoOf(SamV2ApiImplJs).listPharmaceuticalForms = function () {
  return this.p7h();
};
protoOf(SamV2ApiImplJs).q7h = function (chapterName, paragraphName, verseSeq, docSeq, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getAddedDocument$slambda_0(chapterName, paragraphName, verseSeq, docSeq, language, this, null));
};
protoOf(SamV2ApiImplJs).getAddedDocument = function (chapterName, paragraphName, verseSeq, docSeq, language) {
  return this.q7h(chapterName, paragraphName, verseSeq, docSeq, language);
};
protoOf(SamV2ApiImplJs).r7h = function (searchString, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findParagraphs$slambda_0(searchString, language, this, null));
};
protoOf(SamV2ApiImplJs).findParagraphs = function (searchString, language) {
  return this.r7h(searchString, language);
};
protoOf(SamV2ApiImplJs).s7h = function (cnk, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findParagraphsWithCnk$slambda_0(cnk, language, this, null));
};
protoOf(SamV2ApiImplJs).findParagraphsWithCnk = function (cnk, language) {
  return this.s7h(cnk, language);
};
protoOf(SamV2ApiImplJs).t7h = function (chapterName, paragraphName) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getAmpsForParagraph$slambda_0(chapterName, paragraphName, this, null));
};
protoOf(SamV2ApiImplJs).getAmpsForParagraph = function (chapterName, paragraphName) {
  return this.t7h(chapterName, paragraphName);
};
protoOf(SamV2ApiImplJs).u7h = function (chapterName, paragraphName, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getVtmNamesForParagraph$slambda_0(chapterName, paragraphName, language, this, null));
};
protoOf(SamV2ApiImplJs).getVtmNamesForParagraph = function (chapterName, paragraphName, language) {
  return this.u7h(chapterName, paragraphName, language);
};
protoOf(SamV2ApiImplJs).v7h = function (chapterName, paragraphName) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getVersesHierarchy$slambda_0(chapterName, paragraphName, this, null));
};
protoOf(SamV2ApiImplJs).getVersesHierarchy = function (chapterName, paragraphName) {
  return this.v7h(chapterName, paragraphName);
};
function CheckedConverters() {
  this.p70_1 = 9.007199254740991E15;
  this.q70_1 = -9.007199254740991E15;
  this.r70_1 = -2.147483648E9;
  this.s70_1 = 2.147483647E9;
}
protoOf(CheckedConverters).q7d = function (number, description) {
  // Inline function 'kotlin.require' call
  var tmp;
  if (!isNaN_0(number) && isFinite(number)) {
    // Inline function 'kotlin.math.floor' call
    tmp = Math.floor(number) === number;
  } else {
    tmp = false;
  }
  // Inline function 'kotlin.contracts.contract' call
  if (!tmp) {
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.numberToLong.<anonymous>' call
    var message = description + ' should be a 64bits integer - got ' + number;
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(-9.007199254740991E15 <= number ? number <= 9.007199254740991E15 : false)) {
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.numberToLong.<anonymous>' call
    var message_0 = description + ' is outside of the safe integer range for javascript numbers, conversion may cause loss of precision - got ' + number;
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  return numberToLong(number);
};
protoOf(CheckedConverters).w7h = function (long) {
  // Inline function 'com.icure.cardinal.sdk.utils.ensure' call
  if (!isJsSafe(long)) {
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.longToNumber.<anonymous>' call
    var tmp$ret$0 = 'Number is not in safe integer range: ' + long.toString();
    throw new InternalCardinalException(tmp$ret$0);
  }
  return long.k3();
};
protoOf(CheckedConverters).x7h = function (long) {
  var tmp;
  if (long == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.longToNumber.<anonymous>' call
    tmp = CheckedConverters_instance.w7h(long);
  }
  return tmp;
};
protoOf(CheckedConverters).y7h = function (int) {
  return int;
};
protoOf(CheckedConverters).z7h = function (map, convertKey, convertValue) {
  var obj = {};
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = map.x().m();
  while (_iterator__ex2g4s.n()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.o();
    // Inline function 'kotlin.collections.component1' call
    var key = _destruct__k2r9zo.y();
    // Inline function 'kotlin.collections.component2' call
    var value = _destruct__k2r9zo.z();
    obj[convertKey(key)] = convertValue(value);
  }
  return obj;
};
protoOf(CheckedConverters).a7i = function (map, convertKey, convertValue) {
  var tmp;
  if (map == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.mapToObject.<anonymous>' call
    tmp = CheckedConverters_instance.z7h(map, convertKey, convertValue);
  }
  return tmp;
};
protoOf(CheckedConverters).e78 = function (array, description, convertValue) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(array.length);
  var inductionVariable = 0;
  var last = array.length;
  while (inductionVariable < last) {
    var item = array[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.arrayToList.<anonymous>' call
    var tmp$ret$0 = convertValue(item);
    destination.k(tmp$ret$0);
  }
  return destination;
};
protoOf(CheckedConverters).d76 = function (list, convertValue) {
  // Inline function 'kotlin.collections.toTypedArray' call
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(list, 10));
  var tmp0_iterator = list.m();
  while (tmp0_iterator.n()) {
    var item = tmp0_iterator.o();
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.listToArray.<anonymous>' call
    var tmp$ret$0 = convertValue(item);
    destination.k(tmp$ret$0);
  }
  return copyToArray(destination);
};
protoOf(CheckedConverters).b7i = function (list, convertValue) {
  var tmp;
  if (list == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.CheckedConverters.listToArray.<anonymous>' call
    tmp = CheckedConverters_instance.d76(list, convertValue);
  }
  return tmp;
};
protoOf(CheckedConverters).o7g = function (obj) {
  return obj == null ? undefined : obj;
};
protoOf(CheckedConverters).t70 = function (obj) {
  return obj == null ? null : obj;
};
var CheckedConverters_instance;
function CheckedConverters_getInstance() {
  return CheckedConverters_instance;
}
function codeStub_toJs(obj) {
  var id = CheckedConverters_instance.o7g(obj.y6b_1);
  var context = CheckedConverters_instance.o7g(obj.z6b_1);
  var type = CheckedConverters_instance.o7g(obj.a6c_1);
  var code = CheckedConverters_instance.o7g(obj.b6c_1);
  var version = CheckedConverters_instance.o7g(obj.c6c_1);
  var contextLabel = CheckedConverters_instance.o7g(obj.d6c_1);
  var tmp = CheckedConverters_instance;
  var tmp_0 = CheckedConverters_instance;
  var tmp_1 = codeStub_toJs$lambda;
  var label = tmp.o7g(tmp_0.a7i(obj.e6c_1, tmp_1, codeStub_toJs$lambda_0));
  return new CodeStub({id: id, context: context, type: type, code: code, version: version, contextLabel: contextLabel, label: label});
}
function codeStub_toJs$lambda(x1) {
  return x1;
}
function codeStub_toJs$lambda_0(x1) {
  return x1;
}
function amp_toJs(obj) {
  var id = obj.l6c_1;
  var rev = CheckedConverters_instance.o7g(obj.m6c_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.n6c_1));
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.o6c_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.p6c_1));
  var code = CheckedConverters_instance.o7g(obj.q6c_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r6c_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_0 = vmpStub_toJs(tmp0_safe_receiver);
  }
  var vmp = tmp.o7g(tmp_0);
  var officialName = CheckedConverters_instance.o7g(obj.s6c_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.t6c_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_2 = tmp1_safe_receiver.m2_1;
  }
  var status = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.u6c_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var name = tmp_3.o7g(tmp_4);
  var blackTriangle = obj.v6c_1;
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.w6c_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_6 = tmp3_safe_receiver.m2_1;
  }
  var medicineType = tmp_5.o7g(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.x6c_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_8 = company_toJs(tmp4_safe_receiver);
  }
  var company = tmp_7.o7g(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.y6c_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_10 = samText_toJs(tmp5_safe_receiver);
  }
  var abbreviatedName = tmp_9.o7g(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp6_safe_receiver = obj.z6c_1;
  var tmp_12;
  if (tmp6_safe_receiver == null) {
    tmp_12 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_12 = samText_toJs(tmp6_safe_receiver);
  }
  var proprietarySuffix = tmp_11.o7g(tmp_12);
  var tmp_13 = CheckedConverters_instance;
  var tmp7_safe_receiver = obj.a6d_1;
  var tmp_14;
  if (tmp7_safe_receiver == null) {
    tmp_14 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.amp_toJs.<anonymous>' call
    tmp_14 = samText_toJs(tmp7_safe_receiver);
  }
  var prescriptionName = tmp_13.o7g(tmp_14);
  var tmp_15 = CheckedConverters_instance;
  var ampps = tmp_15.d76(obj.b6d_1, amp_toJs$lambda);
  var tmp_16 = CheckedConverters_instance;
  var components = tmp_16.d76(obj.c6d_1, amp_toJs$lambda_0);
  return new Amp({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, code: code, vmp: vmp, officialName: officialName, status: status, name: name, blackTriangle: blackTriangle, medicineType: medicineType, company: company, abbreviatedName: abbreviatedName, proprietarySuffix: proprietarySuffix, prescriptionName: prescriptionName, ampps: ampps, components: components});
}
function amp_toJs$lambda(x1) {
  return ampp_toJs(x1);
}
function amp_toJs$lambda_0(x1) {
  return ampComponent_toJs(x1);
}
function nmp_toJs(obj) {
  var id = obj.f6d_1;
  var rev = CheckedConverters_instance.o7g(obj.g6d_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.h6d_1));
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.i6d_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.j6d_1));
  var code = CheckedConverters_instance.o7g(obj.k6d_1);
  var productId = CheckedConverters_instance.o7g(obj.l6d_1);
  var category = CheckedConverters_instance.o7g(obj.m6d_1);
  var commercialStatus = CheckedConverters_instance.o7g(obj.n6d_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.o6d_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.nmp_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.p6d_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.nmp_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var producer = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.q6d_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.nmp_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var distributor = tmp_3.o7g(tmp_4);
  return new Nmp({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, code: code, productId: productId, category: category, commercialStatus: commercialStatus, name: name, producer: producer, distributor: distributor});
}
function paragraph_toJs(obj) {
  var id = obj.t6d_1;
  var rev = CheckedConverters_instance.o7g(obj.u6d_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.v6d_1));
  var chapterName = CheckedConverters_instance.o7g(obj.w6d_1);
  var paragraphName = CheckedConverters_instance.o7g(obj.x6d_1);
  var startDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.y6d_1));
  var createdTms = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.z6d_1));
  var createdUserId = CheckedConverters_instance.o7g(obj.a6e_1);
  var endDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.b6e_1));
  var keyStringNl = CheckedConverters_instance.o7g(obj.c6e_1);
  var keyStringFr = CheckedConverters_instance.o7g(obj.d6e_1);
  var agreementType = CheckedConverters_instance.o7g(obj.e6e_1);
  var processType = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.f6e_1));
  var legalReference = CheckedConverters_instance.o7g(obj.g6e_1);
  var publicationDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.h6e_1));
  var modificationDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.i6e_1));
  var processTypeOverrule = CheckedConverters_instance.o7g(obj.j6e_1);
  var paragraphVersion = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.k6e_1));
  var agreementTypePro = CheckedConverters_instance.o7g(obj.l6e_1);
  var modificationStatus = CheckedConverters_instance.o7g(obj.m6e_1);
  return new Paragraph({id: id, rev: rev, deletionDate: deletionDate, chapterName: chapterName, paragraphName: paragraphName, startDate: startDate, createdTms: createdTms, createdUserId: createdUserId, endDate: endDate, keyStringNl: keyStringNl, keyStringFr: keyStringFr, agreementType: agreementType, processType: processType, legalReference: legalReference, publicationDate: publicationDate, modificationDate: modificationDate, processTypeOverrule: processTypeOverrule, paragraphVersion: paragraphVersion, agreementTypePro: agreementTypePro, modificationStatus: modificationStatus});
}
function pharmaceuticalForm_toJs(obj) {
  var id = obj.q6e_1;
  var rev = CheckedConverters_instance.o7g(obj.r6e_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.s6e_1));
  var code = CheckedConverters_instance.o7g(obj.t6e_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.u6e_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.pharmaceuticalForm_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardForms = tmp_1.d76(obj.v6e_1, pharmaceuticalForm_toJs$lambda);
  return new PharmaceuticalForm({id: id, rev: rev, deletionDate: deletionDate, code: code, name: name, standardForms: standardForms});
}
function pharmaceuticalForm_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function samVersion_toJs(obj) {
  var id = obj.y6e_1;
  var rev = CheckedConverters_instance.o7g(obj.z6e_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.a6f_1));
  var version = CheckedConverters_instance.o7g(obj.b6f_1);
  var date = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.c6f_1));
  return new SamVersion({id: id, rev: rev, deletionDate: deletionDate, version: version, date: date});
}
function substance_toJs(obj) {
  var id = obj.g6f_1;
  var rev = CheckedConverters_instance.o7g(obj.h6f_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.i6f_1));
  var code = CheckedConverters_instance.o7g(obj.j6f_1);
  var chemicalForm = CheckedConverters_instance.o7g(obj.k6f_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.l6f_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.substance_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.m6f_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.substance_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var note = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var standardSubstances = tmp_3.o7g(tmp_4.b7i(obj.n6f_1, substance_toJs$lambda));
  return new Substance({id: id, rev: rev, deletionDate: deletionDate, code: code, chemicalForm: chemicalForm, name: name, note: note, standardSubstances: standardSubstances});
}
function substance_toJs$lambda(x1) {
  return standardSubstance_toJs(x1);
}
function verse_toJs(obj) {
  var id = obj.r6f_1;
  var rev = CheckedConverters_instance.o7g(obj.s6f_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.t6f_1));
  var chapterName = CheckedConverters_instance.o7g(obj.u6f_1);
  var paragraphName = CheckedConverters_instance.o7g(obj.v6f_1);
  var verseSeq = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.w6f_1));
  var startDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.x6f_1));
  var createdTms = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.y6f_1));
  var createdUserId = CheckedConverters_instance.o7g(obj.z6f_1);
  var endDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.a6g_1));
  var verseNum = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.b6g_1));
  var verseSeqParent = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.c6g_1));
  var verseLevel = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.d6g_1));
  var verseType = CheckedConverters_instance.o7g(obj.e6g_1);
  var checkBoxInd = CheckedConverters_instance.o7g(obj.f6g_1);
  var minCheckNum = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.g6g_1));
  var andClauseNum = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.h6g_1));
  var textFr = CheckedConverters_instance.o7g(obj.i6g_1);
  var textNl = CheckedConverters_instance.o7g(obj.j6g_1);
  var requestType = CheckedConverters_instance.o7g(obj.k6g_1);
  var agreementTerm = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.l6g_1));
  var agreementTermUnit = CheckedConverters_instance.o7g(obj.m6g_1);
  var maxPackageNumber = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.n6g_1));
  var purchasingAdvisorQualList = CheckedConverters_instance.o7g(obj.o6g_1);
  var legalReference = CheckedConverters_instance.o7g(obj.p6g_1);
  var modificationDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.q6g_1));
  var tmp = CheckedConverters_instance;
  var addedDocuments = tmp.d76(obj.r6g_1, verse_toJs$lambda);
  var agreementYearMax = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.s6g_1));
  var agreementRenewalMax = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.t6g_1));
  var sexRestricted = CheckedConverters_instance.o7g(obj.u6g_1);
  var minimumAgeAuthorized = CheckedConverters_instance.o7g(obj.v6g_1);
  var maximumAgeAuthorized = CheckedConverters_instance.o7g(obj.w6g_1);
  var maximumContentQuantity = CheckedConverters_instance.o7g(obj.x6g_1);
  var maximumContentUnit = CheckedConverters_instance.o7g(obj.y6g_1);
  var maximumStrengthQuantity = CheckedConverters_instance.o7g(obj.z6g_1);
  var maximumStrengthUnit = CheckedConverters_instance.o7g(obj.a6h_1);
  var maximumDurationQuantity = CheckedConverters_instance.o7g(obj.b6h_1);
  var maximumDurationUnit = CheckedConverters_instance.o7g(obj.c6h_1);
  var otherAddedDocumentInd = CheckedConverters_instance.o7g(obj.d6h_1);
  var minimumAgeAuthorizedUnit = CheckedConverters_instance.o7g(obj.e6h_1);
  var maximumAgeAuthorizedUnit = CheckedConverters_instance.o7g(obj.f6h_1);
  var modificationStatus = CheckedConverters_instance.o7g(obj.g6h_1);
  var tmp_0 = CheckedConverters_instance;
  var tmp_1 = CheckedConverters_instance;
  var children = tmp_0.o7g(tmp_1.b7i(obj.h6h_1, verse_toJs$lambda_0));
  return new Verse({id: id, rev: rev, deletionDate: deletionDate, chapterName: chapterName, paragraphName: paragraphName, verseSeq: verseSeq, startDate: startDate, createdTms: createdTms, createdUserId: createdUserId, endDate: endDate, verseNum: verseNum, verseSeqParent: verseSeqParent, verseLevel: verseLevel, verseType: verseType, checkBoxInd: checkBoxInd, minCheckNum: minCheckNum, andClauseNum: andClauseNum, textFr: textFr, textNl: textNl, requestType: requestType, agreementTerm: agreementTerm, agreementTermUnit: agreementTermUnit, maxPackageNumber: maxPackageNumber, purchasingAdvisorQualList: purchasingAdvisorQualList, legalReference: legalReference, modificationDate: modificationDate, addedDocuments: addedDocuments, agreementYearMax: agreementYearMax, agreementRenewalMax: agreementRenewalMax, sexRestricted: sexRestricted, minimumAgeAuthorized: minimumAgeAuthorized, maximumAgeAuthorized: maximumAgeAuthorized, maximumContentQuantity: maximumContentQuantity, maximumContentUnit: maximumContentUnit, maximumStrengthQuantity: maximumStrengthQuantity, maximumStrengthUnit: maximumStrengthUnit, maximumDurationQuantity: maximumDurationQuantity, maximumDurationUnit: maximumDurationUnit, otherAddedDocumentInd: otherAddedDocumentInd, minimumAgeAuthorizedUnit: minimumAgeAuthorizedUnit, maximumAgeAuthorizedUnit: maximumAgeAuthorizedUnit, modificationStatus: modificationStatus, children: children});
}
function verse_toJs$lambda(x1) {
  return addedDocument_toJs(x1);
}
function verse_toJs$lambda_0(x1) {
  return verse_toJs(x1);
}
function vmpGroup_toJs(obj) {
  var id = obj.b6i_1;
  var rev = CheckedConverters_instance.o7g(obj.c6i_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.d6i_1));
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.e6i_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.f6i_1));
  var productId = CheckedConverters_instance.o7g(obj.g6i_1);
  var code = CheckedConverters_instance.o7g(obj.h6i_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.i6i_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmpGroup_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.j6i_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmpGroup_toJs.<anonymous>' call
    tmp_2 = noGenericPrescriptionReason_toJs(tmp1_safe_receiver);
  }
  var noGenericPrescriptionReason = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.k6i_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmpGroup_toJs.<anonymous>' call
    tmp_4 = noSwitchReason_toJs(tmp2_safe_receiver);
  }
  var noSwitchReason = tmp_3.o7g(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp_6 = CheckedConverters_instance;
  var standardDosage = tmp_5.o7g(tmp_6.b7i(obj.l6i_1, vmpGroup_toJs$lambda));
  return new VmpGroup({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, productId: productId, code: code, name: name, noGenericPrescriptionReason: noGenericPrescriptionReason, noSwitchReason: noSwitchReason, standardDosage: standardDosage});
}
function vmpGroup_toJs$lambda(x1) {
  return standardDosage_toJs(x1);
}
function vmp_toJs(obj) {
  var id = obj.l6h_1;
  var rev = CheckedConverters_instance.o7g(obj.m6h_1);
  var deletionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.n6h_1));
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.o6h_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.p6h_1));
  var code = CheckedConverters_instance.o7g(obj.q6h_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r6h_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmp_toJs.<anonymous>' call
    tmp_0 = vmpGroupStub_toJs(tmp0_safe_receiver);
  }
  var vmpGroup = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.s6h_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmp_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.t6h_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmp_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var abbreviation = tmp_3.o7g(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.u6h_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.vmp_toJs.<anonymous>' call
    tmp_6 = vtm_toJs(tmp3_safe_receiver);
  }
  var vtm = tmp_5.o7g(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp_8 = CheckedConverters_instance;
  var wadas = tmp_7.o7g(tmp_8.b7i(obj.v6h_1, vmp_toJs$lambda));
  var tmp_9 = CheckedConverters_instance;
  var tmp_10 = CheckedConverters_instance;
  var components = tmp_9.o7g(tmp_10.b7i(obj.w6h_1, vmp_toJs$lambda_0));
  var tmp_11 = CheckedConverters_instance;
  var tmp_12 = CheckedConverters_instance;
  var commentedClassifications = tmp_11.o7g(tmp_12.b7i(obj.x6h_1, vmp_toJs$lambda_1));
  return new Vmp({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, code: code, vmpGroup: vmpGroup, name: name, abbreviation: abbreviation, vtm: vtm, wadas: wadas, components: components, commentedClassifications: commentedClassifications});
}
function vmp_toJs$lambda(x1) {
  return wada_toJs(x1);
}
function vmp_toJs$lambda_0(x1) {
  return vmpComponent_toJs(x1);
}
function vmp_toJs$lambda_1(x1) {
  return commentedClassification_toJs(x1);
}
function addedDocument_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.o6i_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.p6i_1));
  var verseSeq = CheckedConverters_instance.w7h(obj.q6i_1);
  var documentSeq = CheckedConverters_instance.w7h(obj.r6i_1);
  var mimeType = CheckedConverters_instance.o7g(obj.s6i_1);
  var addressUrl = CheckedConverters_instance.o7g(obj.t6i_1);
  var descrNl = CheckedConverters_instance.o7g(obj.u6i_1);
  var descrFr = CheckedConverters_instance.o7g(obj.v6i_1);
  var localPath = CheckedConverters_instance.o7g(obj.w6i_1);
  return new AddedDocument({from: from, to: to, verseSeq: verseSeq, documentSeq: documentSeq, mimeType: mimeType, addressUrl: addressUrl, descrNl: descrNl, descrFr: descrFr, localPath: localPath});
}
function ampComponent_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.c6j_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.d6j_1));
  var tmp = CheckedConverters_instance;
  var tmp_0 = CheckedConverters_instance;
  var ingredients = tmp.o7g(tmp_0.b7i(obj.e6j_1, ampComponent_toJs$lambda));
  var tmp_1 = CheckedConverters_instance;
  var tmp_2 = CheckedConverters_instance;
  var pharmaceuticalForms = tmp_1.o7g(tmp_2.b7i(obj.f6j_1, ampComponent_toJs$lambda_0));
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var routeOfAdministrations = tmp_3.o7g(tmp_4.b7i(obj.g6j_1, ampComponent_toJs$lambda_1));
  var dividable = CheckedConverters_instance.o7g(obj.h6j_1);
  var scored = CheckedConverters_instance.o7g(obj.i6j_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.j6j_1;
  var tmp_6;
  if (tmp0_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampComponent_toJs.<anonymous>' call
    tmp_6 = tmp0_safe_receiver.m2_1;
  }
  var crushable = tmp_5.o7g(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.k6j_1;
  var tmp_8;
  if (tmp1_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampComponent_toJs.<anonymous>' call
    tmp_8 = tmp1_safe_receiver.m2_1;
  }
  var containsAlcohol = tmp_7.o7g(tmp_8);
  var sugarFree = CheckedConverters_instance.o7g(obj.l6j_1);
  var modifiedReleaseType = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.m6j_1));
  var specificDrugDevice = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.n6j_1));
  var dimensions = CheckedConverters_instance.o7g(obj.o6j_1);
  var tmp_9 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.p6j_1;
  var tmp_10;
  if (tmp2_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampComponent_toJs.<anonymous>' call
    tmp_10 = samText_toJs(tmp2_safe_receiver);
  }
  var name = tmp_9.o7g(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.q6j_1;
  var tmp_12;
  if (tmp3_safe_receiver == null) {
    tmp_12 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampComponent_toJs.<anonymous>' call
    tmp_12 = samText_toJs(tmp3_safe_receiver);
  }
  var note = tmp_11.o7g(tmp_12);
  return new AmpComponent({from: from, to: to, ingredients: ingredients, pharmaceuticalForms: pharmaceuticalForms, routeOfAdministrations: routeOfAdministrations, dividable: dividable, scored: scored, crushable: crushable, containsAlcohol: containsAlcohol, sugarFree: sugarFree, modifiedReleaseType: modifiedReleaseType, specificDrugDevice: specificDrugDevice, dimensions: dimensions, name: name, note: note});
}
function ampComponent_toJs$lambda(x1) {
  return ingredient_toJs(x1);
}
function ampComponent_toJs$lambda_0(x1) {
  return pharmaceuticalFormStub_toJs(x1);
}
function ampComponent_toJs$lambda_1(x1) {
  return routeOfAdministration_toJs(x1);
}
function amppComponent_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.p6l_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.q6l_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r6l_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.amppComponent_toJs.<anonymous>' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var contentType = tmp.o7g(tmp_0);
  var contentMultiplier = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.s6l_1));
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.t6l_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.amppComponent_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var packSpecification = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.u6l_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.amppComponent_toJs.<anonymous>' call
    tmp_4 = deviceType_toJs(tmp2_safe_receiver);
  }
  var deviceType = tmp_3.o7g(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.v6l_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.amppComponent_toJs.<anonymous>' call
    tmp_6 = packagingType_toJs(tmp3_safe_receiver);
  }
  var packagingType = tmp_5.o7g(tmp_6);
  return new AmppComponent({from: from, to: to, contentType: contentType, contentMultiplier: contentMultiplier, packSpecification: packSpecification, deviceType: deviceType, packagingType: packagingType});
}
function ampp_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.u6j_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.v6j_1));
  var index = CheckedConverters_instance.o7g(obj.w6j_1);
  var ctiExtended = CheckedConverters_instance.o7g(obj.x6j_1);
  var orphan = obj.y6j_1;
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.z6j_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var leafletLink = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.a6k_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var spcLink = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.b6k_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var rmaPatientLink = tmp_3.o7g(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.c6k_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var rmaProfessionalLink = tmp_5.o7g(tmp_6);
  var parallelCircuit = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.d6k_1));
  var parallelDistributor = CheckedConverters_instance.o7g(obj.e6k_1);
  var packMultiplier = CheckedConverters_instance.o7g(obj.f6k_1);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.g6k_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_8 = quantity_toJs(tmp4_safe_receiver);
  }
  var packAmount = tmp_7.o7g(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.h6k_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_10 = samText_toJs(tmp5_safe_receiver);
  }
  var packDisplayValue = tmp_9.o7g(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp6_safe_receiver = obj.i6k_1;
  var tmp_12;
  if (tmp6_safe_receiver == null) {
    tmp_12 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_12 = tmp6_safe_receiver.m2_1;
  }
  var status = tmp_11.o7g(tmp_12);
  var tmp_13 = CheckedConverters_instance;
  var atcs = tmp_13.d76(obj.j6k_1, ampp_toJs$lambda);
  var tmp_14 = CheckedConverters_instance;
  var tmp7_safe_receiver = obj.k6k_1;
  var tmp_15;
  if (tmp7_safe_receiver == null) {
    tmp_15 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_15 = samText_toJs(tmp7_safe_receiver);
  }
  var crmLink = tmp_14.o7g(tmp_15);
  var deliveryModusCode = CheckedConverters_instance.o7g(obj.l6k_1);
  var tmp_16 = CheckedConverters_instance;
  var tmp8_safe_receiver = obj.m6k_1;
  var tmp_17;
  if (tmp8_safe_receiver == null) {
    tmp_17 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_17 = samText_toJs(tmp8_safe_receiver);
  }
  var deliveryModus = tmp_16.o7g(tmp_17);
  var deliveryModusSpecificationCode = CheckedConverters_instance.o7g(obj.n6k_1);
  var tmp_18 = CheckedConverters_instance;
  var tmp9_safe_receiver = obj.o6k_1;
  var tmp_19;
  if (tmp9_safe_receiver == null) {
    tmp_19 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_19 = samText_toJs(tmp9_safe_receiver);
  }
  var deliveryModusSpecification = tmp_18.o7g(tmp_19);
  var tmp_20 = CheckedConverters_instance;
  var tmp10_safe_receiver = obj.p6k_1;
  var tmp_21;
  if (tmp10_safe_receiver == null) {
    tmp_21 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_21 = samText_toJs(tmp10_safe_receiver);
  }
  var dhpcLink = tmp_20.o7g(tmp_21);
  var tmp_22 = CheckedConverters_instance;
  var tmp11_safe_receiver = obj.q6k_1;
  var tmp_23;
  if (tmp11_safe_receiver == null) {
    tmp_23 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_23 = company_toJs(tmp11_safe_receiver);
  }
  var distributorCompany = tmp_22.o7g(tmp_23);
  var singleUse = CheckedConverters_instance.o7g(obj.r6k_1);
  var speciallyRegulated = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.s6k_1));
  var tmp_24 = CheckedConverters_instance;
  var tmp12_safe_receiver = obj.t6k_1;
  var tmp_25;
  if (tmp12_safe_receiver == null) {
    tmp_25 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_25 = samText_toJs(tmp12_safe_receiver);
  }
  var abbreviatedName = tmp_24.o7g(tmp_25);
  var tmp_26 = CheckedConverters_instance;
  var tmp13_safe_receiver = obj.u6k_1;
  var tmp_27;
  if (tmp13_safe_receiver == null) {
    tmp_27 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_27 = samText_toJs(tmp13_safe_receiver);
  }
  var prescriptionName = tmp_26.o7g(tmp_27);
  var tmp_28 = CheckedConverters_instance;
  var tmp14_safe_receiver = obj.v6k_1;
  var tmp_29;
  if (tmp14_safe_receiver == null) {
    tmp_29 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_29 = samText_toJs(tmp14_safe_receiver);
  }
  var note = tmp_28.o7g(tmp_29);
  var tmp_30 = CheckedConverters_instance;
  var tmp15_safe_receiver = obj.w6k_1;
  var tmp_31;
  if (tmp15_safe_receiver == null) {
    tmp_31 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_31 = samText_toJs(tmp15_safe_receiver);
  }
  var posologyNote = tmp_30.o7g(tmp_31);
  var tmp_32 = CheckedConverters_instance;
  var tmp_33 = CheckedConverters_instance;
  var noGenericPrescriptionReasons = tmp_32.o7g(tmp_33.b7i(obj.x6k_1, ampp_toJs$lambda_0));
  var exFactoryPrice = CheckedConverters_instance.o7g(obj.y6k_1);
  var reimbursementCode = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.z6k_1));
  var tmp_34 = CheckedConverters_instance;
  var tmp16_safe_receiver = obj.a6l_1;
  var tmp_35;
  if (tmp16_safe_receiver == null) {
    tmp_35 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_35 = quantity_toJs(tmp16_safe_receiver);
  }
  var definedDailyDose = tmp_34.o7g(tmp_35);
  var officialExFactoryPrice = CheckedConverters_instance.o7g(obj.b6l_1);
  var realExFactoryPrice = CheckedConverters_instance.o7g(obj.c6l_1);
  var pricingInformationDecisionDate = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.d6l_1));
  var tmp_36 = CheckedConverters_instance;
  var tmp_37 = CheckedConverters_instance;
  var components = tmp_36.o7g(tmp_37.b7i(obj.e6l_1, ampp_toJs$lambda_1));
  var tmp_38 = CheckedConverters_instance;
  var tmp_39 = CheckedConverters_instance;
  var commercializations = tmp_38.o7g(tmp_39.b7i(obj.f6l_1, ampp_toJs$lambda_2));
  var tmp_40 = CheckedConverters_instance;
  var tmp_41 = CheckedConverters_instance;
  var supplyProblems = tmp_40.o7g(tmp_41.b7i(obj.g6l_1, ampp_toJs$lambda_3));
  var tmp_42 = CheckedConverters_instance;
  var dmpps = tmp_42.d76(obj.h6l_1, ampp_toJs$lambda_4);
  var tmp_43 = CheckedConverters_instance;
  var tmp_44 = CheckedConverters_instance;
  var vaccineIndicationCodes = tmp_43.o7g(tmp_44.b7i(obj.i6l_1, ampp_toJs$lambda_5));
  var tmp_45 = CheckedConverters_instance;
  var tmp17_safe_receiver = obj.j6l_1;
  var tmp_46;
  if (tmp17_safe_receiver == null) {
    tmp_46 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>' call
    tmp_46 = samText_toJs(tmp17_safe_receiver);
  }
  var rmaKeyMessages = tmp_45.o7g(tmp_46);
  var genericPrescriptionRequired = CheckedConverters_instance.o7g(obj.k6l_1);
  return new Ampp({from: from, to: to, index: index, ctiExtended: ctiExtended, orphan: orphan, leafletLink: leafletLink, spcLink: spcLink, rmaPatientLink: rmaPatientLink, rmaProfessionalLink: rmaProfessionalLink, parallelCircuit: parallelCircuit, parallelDistributor: parallelDistributor, packMultiplier: packMultiplier, packAmount: packAmount, packDisplayValue: packDisplayValue, status: status, atcs: atcs, crmLink: crmLink, deliveryModusCode: deliveryModusCode, deliveryModus: deliveryModus, deliveryModusSpecificationCode: deliveryModusSpecificationCode, deliveryModusSpecification: deliveryModusSpecification, dhpcLink: dhpcLink, distributorCompany: distributorCompany, singleUse: singleUse, speciallyRegulated: speciallyRegulated, abbreviatedName: abbreviatedName, prescriptionName: prescriptionName, note: note, posologyNote: posologyNote, noGenericPrescriptionReasons: noGenericPrescriptionReasons, exFactoryPrice: exFactoryPrice, reimbursementCode: reimbursementCode, definedDailyDose: definedDailyDose, officialExFactoryPrice: officialExFactoryPrice, realExFactoryPrice: realExFactoryPrice, pricingInformationDecisionDate: pricingInformationDecisionDate, components: components, commercializations: commercializations, supplyProblems: supplyProblems, dmpps: dmpps, vaccineIndicationCodes: vaccineIndicationCodes, rmaKeyMessages: rmaKeyMessages, genericPrescriptionRequired: genericPrescriptionRequired});
}
function ampp_toJs$lambda(x1) {
  return atc_toJs(x1);
}
function ampp_toJs$lambda_0(x1) {
  return samText_toJs(x1);
}
function ampp_toJs$lambda_1(x1) {
  var tmp = CheckedConverters_instance;
  var tmp_0;
  if (x1 == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ampp_toJs.<anonymous>.<anonymous>' call
    tmp_0 = amppComponent_toJs(x1);
  }
  return tmp.o7g(tmp_0);
}
function ampp_toJs$lambda_2(x1) {
  return commercialization_toJs(x1);
}
function ampp_toJs$lambda_3(x1) {
  return supplyProblem_toJs(x1);
}
function ampp_toJs$lambda_4(x1) {
  return dmpp_toJs(x1);
}
function ampp_toJs$lambda_5(x1) {
  return x1;
}
function atc_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.y6l_1);
  var description = CheckedConverters_instance.o7g(obj.z6l_1);
  return new Atc({code: code, description: description});
}
function boundedParameter_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.c6m_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.boundedParameter_toJs.<anonymous>' call
    tmp_0 = dosageParameter_toJs(tmp0_safe_receiver);
  }
  var dosageParameter = tmp.o7g(tmp_0);
  var lowerBound = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.d6m_1));
  var upperBound = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.e6m_1));
  return new BoundedParameter({dosageParameter: dosageParameter, lowerBound: lowerBound, upperBound: upperBound});
}
function commentedClassification_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.h6m_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.commentedClassification_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var title = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.i6m_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.commentedClassification_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var url = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var commentedClassification = tmp_3.o7g(tmp_4.b7i(obj.j6m_1, commentedClassification_toJs$lambda));
  return new CommentedClassification({title: title, url: url, commentedClassification: commentedClassification});
}
function commentedClassification_toJs$lambda(x1) {
  return commentedClassification_toJs(x1);
}
function commercialization_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.m6m_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.n6m_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.o6m_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.commercialization_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var reason = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.p6m_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.commercialization_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var endOfComercialization = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.q6m_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.commercialization_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var impact = tmp_3.o7g(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.r6m_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.commercialization_toJs.<anonymous>' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var additionalInformation = tmp_5.o7g(tmp_6);
  return new Commercialization({from: from, to: to, reason: reason, endOfComercialization: endOfComercialization, impact: impact, additionalInformation: additionalInformation});
}
function company_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.v6m_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.w6m_1));
  var authorisationNr = CheckedConverters_instance.o7g(obj.x6m_1);
  var tmp = CheckedConverters_instance;
  var tmp_0 = CheckedConverters_instance;
  var tmp_1 = company_toJs$lambda;
  var vatNr = tmp.o7g(tmp_0.a7i(obj.y6m_1, tmp_1, company_toJs$lambda_0));
  var europeanNr = CheckedConverters_instance.o7g(obj.z6m_1);
  var denomination = CheckedConverters_instance.o7g(obj.a6n_1);
  var legalForm = CheckedConverters_instance.o7g(obj.b6n_1);
  var building = CheckedConverters_instance.o7g(obj.c6n_1);
  var streetName = CheckedConverters_instance.o7g(obj.d6n_1);
  var streetNum = CheckedConverters_instance.o7g(obj.e6n_1);
  var postbox = CheckedConverters_instance.o7g(obj.f6n_1);
  var postcode = CheckedConverters_instance.o7g(obj.g6n_1);
  var city = CheckedConverters_instance.o7g(obj.h6n_1);
  var countryCode = CheckedConverters_instance.o7g(obj.i6n_1);
  var phone = CheckedConverters_instance.o7g(obj.j6n_1);
  var language = CheckedConverters_instance.o7g(obj.k6n_1);
  var website = CheckedConverters_instance.o7g(obj.l6n_1);
  return new Company({from: from, to: to, authorisationNr: authorisationNr, vatNr: vatNr, europeanNr: europeanNr, denomination: denomination, legalForm: legalForm, building: building, streetName: streetName, streetNum: streetNum, postbox: postbox, postcode: postcode, city: city, countryCode: countryCode, phone: phone, language: language, website: website});
}
function company_toJs$lambda(x1) {
  return x1;
}
function company_toJs$lambda_0(x1) {
  return x1;
}
function complexStrength_toJs(obj) {
  var operator = CheckedConverters_instance.o7g(obj.o6n_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.p6n_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.complexStrength_toJs.<anonymous>' call
    tmp_0 = quantity_toJs(tmp0_safe_receiver);
  }
  var quantity = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.q6n_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.complexStrength_toJs.<anonymous>' call
    tmp_2 = quantity_toJs(tmp1_safe_receiver);
  }
  var secondQuantity = tmp_1.o7g(tmp_2);
  return new ComplexStrength({operator: operator, quantity: quantity, secondQuantity: secondQuantity});
}
function copayment_toJs(obj) {
  var regimeType = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.t6n_1));
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.u6n_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.v6n_1));
  var feeAmount = CheckedConverters_instance.o7g(obj.w6n_1);
  return new Copayment({regimeType: regimeType, from: from, to: to, feeAmount: feeAmount});
}
function deviceType_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.a6o_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.b6o_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.deviceType_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var edqmCode = CheckedConverters_instance.o7g(obj.c6o_1);
  var edqmDefinition = CheckedConverters_instance.o7g(obj.d6o_1);
  return new DeviceType({code: code, name: name, edqmCode: edqmCode, edqmDefinition: edqmDefinition});
}
function dmpp_toJs(obj) {
  var id = CheckedConverters_instance.o7g(obj.i6o_1);
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.j6o_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.k6o_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.l6o_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.dmpp_toJs.<anonymous>' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var deliveryEnvironment = tmp.o7g(tmp_0);
  var code = CheckedConverters_instance.o7g(obj.m6o_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.n6o_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.dmpp_toJs.<anonymous>' call
    tmp_2 = tmp1_safe_receiver.m2_1;
  }
  var codeType = tmp_1.o7g(tmp_2);
  var price = CheckedConverters_instance.o7g(obj.o6o_1);
  var cheap = CheckedConverters_instance.o7g(obj.p6o_1);
  var cheapest = CheckedConverters_instance.o7g(obj.q6o_1);
  var reimbursable = CheckedConverters_instance.o7g(obj.r6o_1);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var reimbursements = tmp_3.o7g(tmp_4.b7i(obj.s6o_1, dmpp_toJs$lambda));
  var productId = CheckedConverters_instance.o7g(obj.t6o_1);
  return new Dmpp({id: id, from: from, to: to, deliveryEnvironment: deliveryEnvironment, code: code, codeType: codeType, price: price, cheap: cheap, cheapest: cheapest, reimbursable: reimbursable, reimbursements: reimbursements, productId: productId});
}
function dmpp_toJs$lambda(x1) {
  return reimbursement_toJs(x1);
}
function dosageParameter_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.w6o_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.x6o_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.dosageParameter_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.y6o_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.dosageParameter_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var definition = tmp_1.o7g(tmp_2);
  var standardUnit = CheckedConverters_instance.o7g(obj.z6o_1);
  var snomedCT = CheckedConverters_instance.o7g(obj.a6p_1);
  return new DosageParameter({code: code, name: name, definition: definition, standardUnit: standardUnit, snomedCT: snomedCT});
}
function indication_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.d6p_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.e6p_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.indication_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var snomedCT = CheckedConverters_instance.o7g(obj.f6p_1);
  return new Indication({code: code, name: name, snomedCT: snomedCT});
}
function ingredient_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.k6p_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.l6p_1));
  var rank = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.m6p_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.n6p_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ingredient_toJs.<anonymous>' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var type = tmp.o7g(tmp_0);
  var knownEffect = CheckedConverters_instance.o7g(obj.o6p_1);
  var strengthDescription = CheckedConverters_instance.o7g(obj.p6p_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.q6p_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ingredient_toJs.<anonymous>' call
    tmp_2 = complexStrength_toJs(tmp1_safe_receiver);
  }
  var strength = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.r6p_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ingredient_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var additionalInformation = tmp_3.o7g(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.s6p_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.ingredient_toJs.<anonymous>' call
    tmp_6 = substanceStub_toJs(tmp3_safe_receiver);
  }
  var substance = tmp_5.o7g(tmp_6);
  return new Ingredient({from: from, to: to, rank: rank, type: type, knownEffect: knownEffect, strengthDescription: strengthDescription, strength: strength, additionalInformation: additionalInformation, substance: substance});
}
function noGenericPrescriptionReason_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.w6p_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.x6p_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.noGenericPrescriptionReason_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var description = tmp.o7g(tmp_0);
  return new NoGenericPrescriptionReason({code: code, description: description});
}
function noSwitchReason_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.a6q_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.b6q_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.noSwitchReason_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var description = tmp.o7g(tmp_0);
  return new NoSwitchReason({code: code, description: description});
}
function numeratorRange_toJs(obj) {
  var min = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.e6q_1));
  var max = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.f6q_1));
  var unit = CheckedConverters_instance.o7g(obj.g6q_1);
  return new NumeratorRange({min: min, max: max, unit: unit});
}
function packagingType_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.j6q_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.k6q_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.packagingType_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var edqmCode = CheckedConverters_instance.o7g(obj.l6q_1);
  var edqmDefinition = CheckedConverters_instance.o7g(obj.m6q_1);
  return new PackagingType({code: code, name: name, edqmCode: edqmCode, edqmDefinition: edqmDefinition});
}
function pricing_toJs(obj) {
  var quantity = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.p6q_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.q6q_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.pricing_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var label = tmp.o7g(tmp_0);
  return new Pricing({quantity: quantity, label: label});
}
function quantity_toJs(obj) {
  var value = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.t6q_1));
  var unit = CheckedConverters_instance.o7g(obj.u6q_1);
  return new Quantity({value: value, unit: unit});
}
function reimbursementCriterion_toJs(obj) {
  var category = CheckedConverters_instance.o7g(obj.r6r_1);
  var code = CheckedConverters_instance.o7g(obj.s6r_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.t6r_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursementCriterion_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var description = tmp.o7g(tmp_0);
  return new ReimbursementCriterion({category: category, code: code, description: description});
}
function reimbursement_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.y6q_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.z6q_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.a6r_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursement_toJs.<anonymous>' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var deliveryEnvironment = tmp.o7g(tmp_0);
  var code = CheckedConverters_instance.o7g(obj.b6r_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.c6r_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursement_toJs.<anonymous>' call
    tmp_2 = tmp1_safe_receiver.m2_1;
  }
  var codeType = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.d6r_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursement_toJs.<anonymous>' call
    tmp_4 = tmp2_safe_receiver.m2_1;
  }
  var multiple = tmp_3.o7g(tmp_4);
  var temporary = CheckedConverters_instance.o7g(obj.e6r_1);
  var reference = CheckedConverters_instance.o7g(obj.f6r_1);
  var legalReferencePath = CheckedConverters_instance.o7g(obj.g6r_1);
  var flatRateSystem = CheckedConverters_instance.o7g(obj.h6r_1);
  var reimbursementBasePrice = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.i6r_1));
  var referenceBasePrice = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.j6r_1));
  var copaymentSupplement = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.k6r_1));
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.l6r_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursement_toJs.<anonymous>' call
    tmp_6 = pricing_toJs(tmp3_safe_receiver);
  }
  var pricingUnit = tmp_5.o7g(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.m6r_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursement_toJs.<anonymous>' call
    tmp_8 = pricing_toJs(tmp4_safe_receiver);
  }
  var pricingSlice = tmp_7.o7g(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.n6r_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.reimbursement_toJs.<anonymous>' call
    tmp_10 = reimbursementCriterion_toJs(tmp5_safe_receiver);
  }
  var reimbursementCriterion = tmp_9.o7g(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp_12 = CheckedConverters_instance;
  var copayments = tmp_11.o7g(tmp_12.b7i(obj.o6r_1, reimbursement_toJs$lambda));
  return new Reimbursement({from: from, to: to, deliveryEnvironment: deliveryEnvironment, code: code, codeType: codeType, multiple: multiple, temporary: temporary, reference: reference, legalReferencePath: legalReferencePath, flatRateSystem: flatRateSystem, reimbursementBasePrice: reimbursementBasePrice, referenceBasePrice: referenceBasePrice, copaymentSupplement: copaymentSupplement, pricingUnit: pricingUnit, pricingSlice: pricingSlice, reimbursementCriterion: reimbursementCriterion, copayments: copayments});
}
function reimbursement_toJs$lambda(x1) {
  return copayment_toJs(x1);
}
function routeOfAdministration_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.x6r_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.routeOfAdministration_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardRoutes = tmp_1.d76(obj.y6r_1, routeOfAdministration_toJs$lambda);
  return new RouteOfAdministration({name: name, standardRoutes: standardRoutes});
}
function routeOfAdministration_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function samText_toJs(obj) {
  var fr = CheckedConverters_instance.o7g(obj.b6s_1);
  var nl = CheckedConverters_instance.o7g(obj.c6s_1);
  var de = CheckedConverters_instance.o7g(obj.d6s_1);
  var en = CheckedConverters_instance.o7g(obj.e6s_1);
  return new SamText({fr: fr, nl: nl, de: de, en: en});
}
function standardDosage_toJs(obj) {
  var code = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.i6s_1));
  var targetGroup = CheckedConverters_instance.o7g(obj.j6s_1);
  var kidneyFailureClass = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.k6s_1));
  var liverFailureClass = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.l6s_1));
  var treatmentDurationType = CheckedConverters_instance.o7g(obj.m6s_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.n6s_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_0 = quantity_toJs(tmp0_safe_receiver);
  }
  var temporalityDuration = tmp.o7g(tmp_0);
  var temporalityUserProvided = CheckedConverters_instance.o7g(obj.o6s_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.p6s_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var temporalityNote = tmp_1.o7g(tmp_2);
  var quantity = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.q6s_1));
  var quantityDenominator = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.r6s_1));
  var quantityMultiplicator = CheckedConverters_instance.o7g(obj.s6s_1);
  var quantityRangeLower = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.t6s_1));
  var quantityRangeLowerDenominator = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.u6s_1));
  var quantityRangeUpper = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.v6s_1));
  var quantityRangeUpperDenominator = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.w6s_1));
  var administrationFrequencyQuantity = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.x6s_1));
  var administrationFrequencyIsMax = CheckedConverters_instance.o7g(obj.y6s_1);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.z6s_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_4 = quantity_toJs(tmp2_safe_receiver);
  }
  var administrationFrequencyTimeframe = tmp_3.o7g(tmp_4);
  var maximumAdministrationQuantity = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.a6t_1));
  var maximumAdministrationQuantityDenominator = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.b6t_1));
  var maximumAdministrationQuantityMultiplicator = CheckedConverters_instance.o7g(obj.c6t_1);
  var maximumDailyQuantity = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.d6t_1));
  var maximumDailyQuantityDenominator = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.e6t_1));
  var maximumDailyQuantityMultiplicator = CheckedConverters_instance.o7g(obj.f6t_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.g6t_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var textualDosage = tmp_5.o7g(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.h6t_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_8 = samText_toJs(tmp4_safe_receiver);
  }
  var supplementaryInfo = tmp_7.o7g(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.i6t_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_10 = samText_toJs(tmp5_safe_receiver);
  }
  var routeSpecification = tmp_9.o7g(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp_12 = CheckedConverters_instance;
  var indication = tmp_11.o7g(tmp_12.b7i(obj.j6t_1, standardDosage_toJs$lambda));
  var tmp_13 = CheckedConverters_instance;
  var tmp_14 = CheckedConverters_instance;
  var parameterBounds = tmp_13.o7g(tmp_14.b7i(obj.k6t_1, standardDosage_toJs$lambda_0));
  var tmp_15 = CheckedConverters_instance;
  var tmp6_safe_receiver = obj.l6t_1;
  var tmp_16;
  if (tmp6_safe_receiver == null) {
    tmp_16 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardDosage_toJs.<anonymous>' call
    tmp_16 = routeOfAdministration_toJs(tmp6_safe_receiver);
  }
  var routeOfAdministration = tmp_15.o7g(tmp_16);
  return new StandardDosage({code: code, targetGroup: targetGroup, kidneyFailureClass: kidneyFailureClass, liverFailureClass: liverFailureClass, treatmentDurationType: treatmentDurationType, temporalityDuration: temporalityDuration, temporalityUserProvided: temporalityUserProvided, temporalityNote: temporalityNote, quantity: quantity, quantityDenominator: quantityDenominator, quantityMultiplicator: quantityMultiplicator, quantityRangeLower: quantityRangeLower, quantityRangeLowerDenominator: quantityRangeLowerDenominator, quantityRangeUpper: quantityRangeUpper, quantityRangeUpperDenominator: quantityRangeUpperDenominator, administrationFrequencyQuantity: administrationFrequencyQuantity, administrationFrequencyIsMax: administrationFrequencyIsMax, administrationFrequencyTimeframe: administrationFrequencyTimeframe, maximumAdministrationQuantity: maximumAdministrationQuantity, maximumAdministrationQuantityDenominator: maximumAdministrationQuantityDenominator, maximumAdministrationQuantityMultiplicator: maximumAdministrationQuantityMultiplicator, maximumDailyQuantity: maximumDailyQuantity, maximumDailyQuantityDenominator: maximumDailyQuantityDenominator, maximumDailyQuantityMultiplicator: maximumDailyQuantityMultiplicator, textualDosage: textualDosage, supplementaryInfo: supplementaryInfo, routeSpecification: routeSpecification, indication: indication, parameterBounds: parameterBounds, routeOfAdministration: routeOfAdministration});
}
function standardDosage_toJs$lambda(x1) {
  return indication_toJs(x1);
}
function standardDosage_toJs$lambda_0(x1) {
  return boundedParameter_toJs(x1);
}
function standardSubstance_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.q6t_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r6t_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardSubstance_toJs.<anonymous>' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var type = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.s6t_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardSubstance_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.t6t_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.standardSubstance_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var definition = tmp_3.o7g(tmp_4);
  var url = CheckedConverters_instance.o7g(obj.u6t_1);
  return new StandardSubstance({code: code, type: type, name: name, definition: definition, url: url});
}
function strengthRange_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.a6u_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.strengthRange_toJs.<anonymous>' call
    tmp_0 = numeratorRange_toJs(tmp0_safe_receiver);
  }
  var numeratorRange = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.b6u_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.strengthRange_toJs.<anonymous>' call
    tmp_2 = quantity_toJs(tmp1_safe_receiver);
  }
  var denominator = tmp_1.o7g(tmp_2);
  return new StrengthRange({numeratorRange: numeratorRange, denominator: denominator});
}
function supplyProblem_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.e6u_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.f6u_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.g6u_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.supplyProblem_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var reason = tmp.o7g(tmp_0);
  var expectedEndOn = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.h6u_1));
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.i6u_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.supplyProblem_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var impact = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.j6u_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.supplyProblem_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var additionalInformation = tmp_3.o7g(tmp_4);
  return new SupplyProblem({from: from, to: to, reason: reason, expectedEndOn: expectedEndOn, impact: impact, additionalInformation: additionalInformation});
}
function virtualForm_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.n6u_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.virtualForm_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardForms = tmp_1.d76(obj.o6u_1, virtualForm_toJs$lambda);
  return new VirtualForm({name: name, standardForms: standardForms});
}
function virtualForm_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function virtualIngredient_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.s6u_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.t6u_1));
  var rank = CheckedConverters_instance.o7g(CheckedConverters_instance.y7h(obj.u6u_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.v6u_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.virtualIngredient_toJs.<anonymous>' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var type = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.w6u_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.virtualIngredient_toJs.<anonymous>' call
    tmp_2 = strengthRange_toJs(tmp1_safe_receiver);
  }
  var strengthRange = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.x6u_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.virtualIngredient_toJs.<anonymous>' call
    tmp_4 = substanceStub_toJs(tmp2_safe_receiver);
  }
  var substance = tmp_3.o7g(tmp_4);
  return new VirtualIngredient({from: from, to: to, rank: rank, type: type, strengthRange: strengthRange, substance: substance});
}
function vmpComponent_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.b6v_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.c6v_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.vmpComponent_toJs.<anonymous>' call
    tmp_0 = virtualForm_toJs(tmp0_safe_receiver);
  }
  var virtualForm = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp_2 = CheckedConverters_instance;
  var routeOfAdministrations = tmp_1.o7g(tmp_2.b7i(obj.d6v_1, vmpComponent_toJs$lambda));
  var tmp_3 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.e6v_1;
  var tmp_4;
  if (tmp1_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.vmpComponent_toJs.<anonymous>' call
    tmp_4 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_3.o7g(tmp_4);
  var phaseNumber = CheckedConverters_instance.o7g(obj.f6v_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp_6 = CheckedConverters_instance;
  var virtualIngredients = tmp_5.o7g(tmp_6.b7i(obj.g6v_1, vmpComponent_toJs$lambda_0));
  return new VmpComponent({code: code, virtualForm: virtualForm, routeOfAdministrations: routeOfAdministrations, name: name, phaseNumber: phaseNumber, virtualIngredients: virtualIngredients});
}
function vmpComponent_toJs$lambda(x1) {
  return routeOfAdministration_toJs(x1);
}
function vmpComponent_toJs$lambda_0(x1) {
  return virtualIngredient_toJs(x1);
}
function vtm_toJs(obj) {
  var from = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.j6v_1));
  var to = CheckedConverters_instance.o7g(CheckedConverters_instance.x7h(obj.k6v_1));
  var code = CheckedConverters_instance.o7g(obj.l6v_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.m6v_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.vtm_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  return new Vtm({from: from, to: to, code: code, name: name});
}
function wada_toJs(obj) {
  var code = CheckedConverters_instance.o7g(obj.p6v_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.q6v_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.wada_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.r6v_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.embed.wada_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var description = tmp_1.o7g(tmp_2);
  return new Wada({code: code, name: name, description: description});
}
function pharmaceuticalFormStub_toJs(obj) {
  var id = CheckedConverters_instance.o7g(obj.v6v_1);
  var code = CheckedConverters_instance.o7g(obj.w6v_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.x6v_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.stub.pharmaceuticalFormStub_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardForms = tmp_1.d76(obj.y6v_1, pharmaceuticalFormStub_toJs$lambda);
  return new PharmaceuticalFormStub({id: id, code: code, name: name, standardForms: standardForms});
}
function pharmaceuticalFormStub_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function substanceStub_toJs(obj) {
  var id = CheckedConverters_instance.o7g(obj.c6w_1);
  var code = CheckedConverters_instance.o7g(obj.d6w_1);
  var chemicalForm = CheckedConverters_instance.o7g(obj.e6w_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.f6w_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.stub.substanceStub_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.g6w_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.stub.substanceStub_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var note = tmp_1.o7g(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var standardSubstances = tmp_3.o7g(tmp_4.b7i(obj.h6w_1, substanceStub_toJs$lambda));
  return new SubstanceStub({id: id, code: code, chemicalForm: chemicalForm, name: name, note: note, standardSubstances: standardSubstances});
}
function substanceStub_toJs$lambda(x1) {
  return standardSubstance_toJs(x1);
}
function vmpGroupStub_toJs(obj) {
  var id = obj.k6w_1;
  var code = CheckedConverters_instance.o7g(obj.l6w_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.m6w_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.stub.vmpGroupStub_toJs.<anonymous>' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.o7g(tmp_0);
  var productId = CheckedConverters_instance.o7g(obj.n6w_1);
  return new VmpGroupStub({id: id, code: code, name: name, productId: productId});
}
function vmpStub_toJs(obj) {
  var id = obj.q6w_1;
  var code = CheckedConverters_instance.o7g(obj.r6w_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.s6w_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.stub.vmpStub_toJs.<anonymous>' call
    tmp_0 = vmpGroupStub_toJs(tmp0_safe_receiver);
  }
  var vmpGroup = tmp.o7g(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.t6w_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.icure.cardinal.sdk.js.model.samv2.stub.vmpStub_toJs.<anonymous>' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_1.o7g(tmp_2);
  return new VmpStub({id: id, code: code, vmpGroup: vmpGroup, name: name});
}
function toKt(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 instanceof UsernamePassword_0) {
    tmp = new UsernamePassword(_this__u8e3s4.username, _this__u8e3s4.password);
  } else {
    if (_this__u8e3s4 instanceof UsernameLongToken_0) {
      tmp = new UsernameLongToken(_this__u8e3s4.username, _this__u8e3s4.token);
    } else {
      if (_this__u8e3s4 instanceof ThirdPartyAuth) {
        tmp = new ThirdPartyAuthentication(_this__u8e3s4.token, valueOf(_this__u8e3s4.provider));
      } else {
        if (_this__u8e3s4 instanceof JwtCredentials_0) {
          var tmp2_refresh = _JwtRefresh___init__impl__17g47n(_this__u8e3s4.refresh);
          var tmp1_safe_receiver = _this__u8e3s4.bearer;
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.icure.cardinal.sdk.js.options.toKt.<anonymous>' call
            tmp_0 = _JwtBearer___init__impl__envtvz(tmp1_safe_receiver);
          }
          var tmp3_initialBearer = tmp_0;
          tmp = new JwtCredentials(tmp3_initialBearer, tmp2_refresh);
        } else {
          throw IllegalArgumentException_init_$Create$('Unrecognised authentication method: ' + getKClassFromExpression(_this__u8e3s4).ca());
        }
      }
    }
  }
  return tmp;
}
function base32Encode_0(bytes) {
  return base32Encode(bytes);
}
function base32Decode_0(base32String) {
  return base32Decode(base32String);
}
function hexEncode(bytes) {
  return toHexString(bytes);
}
function hexDecode(hexString) {
  return hexToByteArray(hexString);
}
function base64Encode_0(bytes) {
  return base64Encode(bytes);
}
function base64Decode_0(base64String) {
  return base64Decode(base64String);
}
function PaginatedListIterator() {
}
function paginatedListIterator_toJs(paginatedListIterator, tConverter) {
  return new paginatedListIterator_toJs$1(paginatedListIterator, tConverter);
}
function paginatedListIterator_toJs$o$hasNext$slambda($paginatedListIterator, resultContinuation) {
  this.k7i_1 = $paginatedListIterator;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).m7i = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).c9 = function (p1, $completion) {
  return this.m7i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = this.k7i_1.e10(this);
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
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).a1j = function ($this$promise, completion) {
  var i = new paginatedListIterator_toJs$o$hasNext$slambda(this.k7i_1, completion);
  i.l7i_1 = $this$promise;
  return i;
};
function paginatedListIterator_toJs$o$hasNext$slambda_0($paginatedListIterator, resultContinuation) {
  var i = new paginatedListIterator_toJs$o$hasNext$slambda($paginatedListIterator, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.m7i($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function paginatedListIterator_toJs$o$next$slambda($paginatedListIterator, $limit, $tConverter, resultContinuation) {
  this.v7i_1 = $paginatedListIterator;
  this.w7i_1 = $limit;
  this.x7i_1 = $tConverter;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(paginatedListIterator_toJs$o$next$slambda).z7i = function ($this$promise, $completion) {
  var tmp = this.a1j($this$promise, $completion);
  tmp.m8_1 = Unit_instance;
  tmp.n8_1 = null;
  return tmp.s8();
};
protoOf(paginatedListIterator_toJs$o$next$slambda).c9 = function (p1, $completion) {
  return this.z7i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(paginatedListIterator_toJs$o$next$slambda).s8 = function () {
  var suspendResult = this.m8_1;
  $sm: do
    try {
      var tmp = this.k8_1;
      switch (tmp) {
        case 0:
          this.l8_1 = 2;
          this.k8_1 = 1;
          suspendResult = this.v7i_1.y6y(this.w7i_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var this_0 = suspendResult;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var item = tmp0_iterator.o();
            destination.k(this.x7i_1(item));
          }

          return copyToArray(destination);
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
protoOf(paginatedListIterator_toJs$o$next$slambda).a1j = function ($this$promise, completion) {
  var i = new paginatedListIterator_toJs$o$next$slambda(this.v7i_1, this.w7i_1, this.x7i_1, completion);
  i.y7i_1 = $this$promise;
  return i;
};
function paginatedListIterator_toJs$o$next$slambda_0($paginatedListIterator, $limit, $tConverter, resultContinuation) {
  var i = new paginatedListIterator_toJs$o$next$slambda($paginatedListIterator, $limit, $tConverter, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.z7i($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function paginatedListIterator_toJs$1($paginatedListIterator, $tConverter) {
  this.a7j_1 = $paginatedListIterator;
  this.b7j_1 = $tConverter;
}
protoOf(paginatedListIterator_toJs$1).hasNext = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, paginatedListIterator_toJs$o$hasNext$slambda_0(this.a7j_1, null));
};
protoOf(paginatedListIterator_toJs$1).next = function (limit) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, paginatedListIterator_toJs$o$next$slambda_0(this.a7j_1, limit, this.b7j_1, null));
};
//region block: post-declaration
defineProp(protoOf(CardinalBeSamSdkJsImpl), 'sam', function () {
  return this.w4p();
});
//endregion
//region block: init
InternalSdkInitializers_instance = new InternalSdkInitializers_0();
CheckedConverters_instance = new CheckedConverters();
//endregion
//region block: exports
var InternalSdkInitializers = {getInstance: InternalSdkInitializers_getInstance};
export {
  InternalSdkInitializers as InternalSdkInitializers,
  base32Encode_0 as base32Encode,
  base32Decode_0 as base32Decode,
  hexEncode as hexEncode,
  hexDecode as hexDecode,
  base64Encode_0 as base64Encode,
  base64Decode_0 as base64Decode,
};
//endregion

//# sourceMappingURL=cardinal-be-sam-ts.mjs.map
export * from './options.mjs'
export * from './utils.mjs'
export * from './sdk.mjs'
export * from './model.mjs'
export * from './api.mjs'
export { RevisionConflictException } from './cardinal-be-sam.mjs'
