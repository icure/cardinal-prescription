import {
  IndexOutOfBoundsException_init_$Create$lgvynu6unvfx as IndexOutOfBoundsException_init_$Create$,
  Long2qws0ah9gnpki as Long,
  IllegalArgumentException_init_$Create$sfel9vrfa7w2 as IllegalArgumentException_init_$Create$,
  _Char___init__impl__6a9atx367vrx0avsvbg as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  protoOf180f3jzyo7rfj as protoOf,
  toString1pkumu07cwy4m as toString,
  Unit_instanceat14thlj150z as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  toLongw1zpgk99d84b as toLong,
  StringBuilder_init_$Create$1ckbfpj83l95o as StringBuilder_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID7hggqo3abtya as VOID,
  IllegalStateException_init_$Create$1nm9y6jd3c9iy as IllegalStateException_init_$Create$,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  IllegalArgumentException_init_$Create$3czm0y2xr5n58 as IllegalArgumentException_init_$Create$_0,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd17daqndsyg0ov as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  Exception_init_$Init$25rnrjp6anyxk as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$3c1h61we8oiuv as Exception_init_$Init$_0,
  Exception_init_$Init$2t8qsqvbxaqim as Exception_init_$Init$_1,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
function readAtMostTo$default(sink, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  return $super === VOID ? this.e1a(sink, startIndex, endIndex) : $super.e1a.call(this, sink, startIndex, endIndex);
}
initMetadataForInterface(Source, 'Source');
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.q1a(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.q1a.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
initMetadataForInterface(Sink, 'Sink');
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource');
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex.e1(new Long(0, 0)) < 0 || endIndex.e1(size) > 0) {
    throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex.e1(endIndex) > 0) {
    throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset.e1(new Long(0, 0)) < 0 || offset.e1(size) > 0 || size.u2(offset).e1(byteCount) < 0 || byteCount.e1(new Long(0, 0)) < 0) {
    throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.p().toString() + ', required: ' + byteCount.toString() + ')');
}
function Buffer() {
  this.d19_1 = null;
  this.e19_1 = null;
  this.f19_1 = new Long(0, 0);
}
protoOf(Buffer).p = function () {
  return this.f19_1;
};
protoOf(Buffer).g19 = function () {
  return this;
};
protoOf(Buffer).h19 = function () {
  return this.p().equals(new Long(0, 0));
};
protoOf(Buffer).i19 = function (byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.Buffer.require.<anonymous>' call
    var message = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.p().e1(byteCount) < 0) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.p().toString() + ', required: ' + byteCount.toString() + ')');
  }
};
protoOf(Buffer).j19 = function (byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.Buffer.request.<anonymous>' call
    var message = 'byteCount: ' + byteCount.toString() + ' < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.p().e1(byteCount) >= 0;
};
protoOf(Buffer).k19 = function () {
  var tmp0_elvis_lhs = this.d19_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(1, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.s19();
  if (segmentSize === 0) {
    this.t19();
    return this.k19();
  }
  var v = segment.u19();
  this.f19_1 = this.f19_1.u2(new Long(1, 0));
  if (segmentSize === 1) {
    this.t19();
  }
  return v;
};
protoOf(Buffer).v19 = function () {
  var tmp0_elvis_lhs = this.d19_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(2, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.s19();
  if (segmentSize < 2) {
    this.i19(new Long(2, 0));
    if (segmentSize === 0) {
      this.t19();
      return this.v19();
    }
    // Inline function 'kotlinx.io.and' call
    var tmp_0 = (this.k19() & 255) << 8;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = this.k19() & 255;
    return toShort(tmp_0 | tmp$ret$1);
  }
  var v = segment.w19();
  this.f19_1 = this.f19_1.u2(new Long(2, 0));
  if (segmentSize === 2) {
    this.t19();
  }
  return v;
};
protoOf(Buffer).x19 = function () {
  return Unit_instance;
};
protoOf(Buffer).y19 = function (out, startIndex, endIndex) {
  checkBounds(this.p(), startIndex, endIndex);
  if (startIndex.equals(endIndex))
    return Unit_instance;
  var currentOffset = startIndex;
  var remainingByteCount = endIndex.u2(startIndex);
  out.f19_1 = out.f19_1.t2(remainingByteCount);
  var s = this.d19_1;
  while (currentOffset.e1(toLong(ensureNotNull(s).n19_1 - s.m19_1 | 0)) >= 0) {
    currentOffset = currentOffset.u2(toLong(s.n19_1 - s.m19_1 | 0));
    s = s.q19_1;
  }
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    var copy = ensureNotNull(s).z19();
    copy.m19_1 = copy.m19_1 + currentOffset.j1() | 0;
    var tmp = copy;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = copy.m19_1 + remainingByteCount.j1() | 0;
    var b = copy.n19_1;
    tmp.n19_1 = Math.min(a, b);
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (out.d19_1 == null) {
      out.d19_1 = copy;
      out.e19_1 = copy;
    } else if (false) {
      out.e19_1 = ensureNotNull(out.e19_1).a1a(copy).b1a();
      if (ensureNotNull(out.e19_1).r19_1 == null) {
        out.d19_1 = out.e19_1;
      }
    } else {
      out.e19_1 = ensureNotNull(out.e19_1).a1a(copy);
    }
    remainingByteCount = remainingByteCount.u2(toLong(copy.n19_1 - copy.m19_1 | 0));
    currentOffset = new Long(0, 0);
    s = s.q19_1;
  }
};
protoOf(Buffer).c1a = function () {
  var result = this.p();
  if (result.equals(new Long(0, 0)))
    return new Long(0, 0);
  var tail = ensureNotNull(this.e19_1);
  if (tail.n19_1 < 8192 && tail.p19_1) {
    result = result.u2(toLong(tail.n19_1 - tail.m19_1 | 0));
  }
  return result;
};
protoOf(Buffer).a2 = function () {
  return this.d1a(this.p());
};
protoOf(Buffer).d1a = function (byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var remainingByteCount = byteCount;
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    var tmp0_elvis_lhs = this.d19_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    // Inline function 'kotlinx.io.minOf' call
    var a = remainingByteCount;
    var b = head.n19_1 - head.m19_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = toLong(b);
    var toSkip = (a.e1(b_0) <= 0 ? a : b_0).j1();
    this.f19_1 = this.f19_1.u2(toLong(toSkip));
    remainingByteCount = remainingByteCount.u2(toLong(toSkip));
    head.m19_1 = head.m19_1 + toSkip | 0;
    if (head.m19_1 === head.n19_1) {
      this.t19();
    }
  }
};
protoOf(Buffer).e1a = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var tmp0_elvis_lhs = this.d19_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var s = tmp;
  // Inline function 'kotlin.comparisons.minOf' call
  var a = endIndex - startIndex | 0;
  var b = s.s19();
  var toCopy = Math.min(a, b);
  s.f1a(sink, startIndex, startIndex + toCopy | 0);
  this.f19_1 = this.f19_1.u2(toLong(toCopy));
  if (isEmpty(s)) {
    this.t19();
  }
  return toCopy;
};
protoOf(Buffer).h1a = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.p().equals(new Long(0, 0)))
    return new Long(-1, -1);
  var bytesWritten = byteCount.e1(this.p()) > 0 ? this.p() : byteCount;
  sink.i1a(this, bytesWritten);
  return bytesWritten;
};
protoOf(Buffer).j1a = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.p().e1(byteCount) < 0) {
    sink.i1a(this, this.p());
    throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.p().toString() + ' bytes were written.');
  }
  sink.i1a(this, byteCount);
};
protoOf(Buffer).k1a = function (sink) {
  var byteCount = this.p();
  if (byteCount.e1(new Long(0, 0)) > 0) {
    sink.i1a(this, byteCount);
  }
  return byteCount;
};
protoOf(Buffer).l1a = function () {
  return buffered(new PeekSource(this));
};
protoOf(Buffer).m1a = function (minimumCapacity) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
    // Inline function 'kotlinx.io.Buffer.writableSegment.<anonymous>' call
    var message = 'unexpected capacity';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.e19_1 == null) {
    var result = SegmentPool_instance.p1a();
    this.d19_1 = result;
    this.e19_1 = result;
    return result;
  }
  var t = ensureNotNull(this.e19_1);
  if ((t.n19_1 + minimumCapacity | 0) > 8192 || !t.p19_1) {
    var newTail = t.a1a(SegmentPool_instance.p1a());
    this.e19_1 = newTail;
    return newTail;
  }
  return t;
};
protoOf(Buffer).q1a = function (source, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = source.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var currentOffset = startIndex;
  while (currentOffset < endIndex) {
    var tail = this.m1a(1);
    // Inline function 'kotlin.comparisons.minOf' call
    var a = endIndex - currentOffset | 0;
    var b = tail.r1a();
    var toCopy = Math.min(a, b);
    tail.s1a(source, currentOffset, currentOffset + toCopy | 0);
    currentOffset = currentOffset + toCopy | 0;
  }
  var tmp = this;
  // Inline function 'kotlin.Long.plus' call
  var this_0 = this.f19_1;
  var other = endIndex - startIndex | 0;
  tmp.f19_1 = this_0.t2(toLong(other));
};
protoOf(Buffer).i1a = function (source, byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!(source === this)) {
    // Inline function 'kotlinx.io.Buffer.write.<anonymous>' call
    var message = 'source == this';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  checkOffsetAndCount(source.f19_1, new Long(0, 0), byteCount);
  var remainingByteCount = byteCount;
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    if (remainingByteCount.e1(toLong(ensureNotNull(source.d19_1).s19())) < 0) {
      var tail = this.e19_1;
      var tmp;
      if (!(tail == null) && tail.p19_1) {
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var this_0 = remainingByteCount;
        var other = tail.n19_1;
        var this_1 = this_0.t2(toLong(other));
        var other_0 = tail.u1a() ? 0 : tail.m19_1;
        tmp = this_1.u2(toLong(other_0)).e1(new Long(8192, 0)) <= 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        ensureNotNull(source.d19_1).w1a(tail, remainingByteCount.j1());
        source.f19_1 = source.f19_1.u2(remainingByteCount);
        this.f19_1 = this.f19_1.t2(remainingByteCount);
        return Unit_instance;
      } else {
        source.d19_1 = ensureNotNull(source.d19_1).v1a(remainingByteCount.j1());
      }
    }
    var segmentToMove = ensureNotNull(source.d19_1);
    var movedByteCount = toLong(segmentToMove.s19());
    source.d19_1 = segmentToMove.x1a();
    if (source.d19_1 == null) {
      source.e19_1 = null;
    }
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (this.d19_1 == null) {
      this.d19_1 = segmentToMove;
      this.e19_1 = segmentToMove;
    } else if (true) {
      this.e19_1 = ensureNotNull(this.e19_1).a1a(segmentToMove).b1a();
      if (ensureNotNull(this.e19_1).r19_1 == null) {
        this.d19_1 = this.e19_1;
      }
    } else {
      this.e19_1 = ensureNotNull(this.e19_1).a1a(segmentToMove);
    }
    source.f19_1 = source.f19_1.u2(movedByteCount);
    this.f19_1 = this.f19_1.t2(movedByteCount);
    remainingByteCount = remainingByteCount.u2(movedByteCount);
  }
};
protoOf(Buffer).y1a = function (source) {
  var totalBytesRead = new Long(0, 0);
  $l$loop: while (true) {
    var readCount = source.h1a(this, new Long(8192, 0));
    if (readCount.equals(new Long(-1, -1)))
      break $l$loop;
    totalBytesRead = totalBytesRead.t2(readCount);
  }
  return totalBytesRead;
};
protoOf(Buffer).z1a = function (byte) {
  this.m1a(1).a1b(byte);
  this.f19_1 = this.f19_1.t2(new Long(1, 0));
};
protoOf(Buffer).b1b = function (short) {
  this.m1a(2).c1b(short);
  this.f19_1 = this.f19_1.t2(new Long(2, 0));
};
protoOf(Buffer).d1b = function () {
  return Unit_instance;
};
protoOf(Buffer).toString = function () {
  if (this.p().equals(new Long(0, 0)))
    return 'Buffer(size=0)';
  var maxPrintableBytes = 64;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.p();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(maxPrintableBytes);
  var len = (a.e1(b) <= 0 ? a : b).j1();
  var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.p().e1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
  var bytesWritten = 0;
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = this.d19_1;
  while (!(curr == null)) {
    // Inline function 'kotlinx.io.Buffer.toString.<anonymous>' call
    var ctx = get_SegmentReadContextImpl();
    var segment = curr;
    var idx = 0;
    while (bytesWritten < len && idx < segment.s19()) {
      var _unary__edvuaz = idx;
      idx = _unary__edvuaz + 1 | 0;
      var b_0 = ctx.e1b(segment, _unary__edvuaz);
      bytesWritten = bytesWritten + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.shr' call
      var tmp$ret$2 = b_0 >> 4;
      var tmp_0 = builder.x7(tmp[tmp$ret$2 & 15]);
      var tmp_1 = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$3 = b_0 & 15;
      tmp_0.x7(tmp_1[tmp$ret$3]);
    }
    curr = curr.q19_1;
  }
  if (this.p().e1(toLong(maxPrintableBytes)) > 0) {
    builder.x7(_Char___init__impl__6a9atx(8230));
  }
  return 'Buffer(size=' + this.p().toString() + ' hex=' + builder.toString() + ')';
};
protoOf(Buffer).t19 = function () {
  var oldHead = ensureNotNull(this.d19_1);
  var nextHead = oldHead.q19_1;
  this.d19_1 = nextHead;
  if (nextHead == null) {
    this.e19_1 = null;
  } else {
    nextHead.r19_1 = null;
  }
  oldHead.q19_1 = null;
  SegmentPool_instance.f1b(oldHead);
};
protoOf(Buffer).g1b = function () {
  var oldTail = ensureNotNull(this.e19_1);
  var newTail = oldTail.r19_1;
  this.e19_1 = newTail;
  if (newTail == null) {
    this.d19_1 = null;
  } else {
    newTail.q19_1 = null;
  }
  oldTail.r19_1 = null;
  SegmentPool_instance.f1b(oldTail);
};
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
function PeekSource(upstream) {
  this.h1b_1 = upstream;
  this.i1b_1 = this.h1b_1.g19();
  this.j1b_1 = this.i1b_1.d19_1;
  var tmp = this;
  var tmp0_safe_receiver = this.i1b_1.d19_1;
  var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m19_1;
  tmp.k1b_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  this.l1b_1 = false;
  this.m1b_1 = new Long(0, 0);
}
protoOf(PeekSource).h1a = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.l1b_1) {
    // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(this.j1b_1 == null || (this.j1b_1 === this.i1b_1.d19_1 && this.k1b_1 === ensureNotNull(this.i1b_1.d19_1).m19_1))) {
    // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
    var message_1 = 'Peek source is invalid because upstream source was used';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  if (byteCount.equals(new Long(0, 0)))
    return new Long(0, 0);
  // Inline function 'kotlin.Long.plus' call
  var tmp$ret$3 = this.m1b_1.t2(toLong(1));
  if (!this.h1b_1.j19(tmp$ret$3))
    return new Long(-1, -1);
  if (this.j1b_1 == null && !(this.i1b_1.d19_1 == null)) {
    this.j1b_1 = this.i1b_1.d19_1;
    this.k1b_1 = ensureNotNull(this.i1b_1.d19_1).m19_1;
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.i1b_1.p().u2(this.m1b_1);
  var toCopy = byteCount.e1(b) <= 0 ? byteCount : b;
  this.i1b_1.y19(sink, this.m1b_1, this.m1b_1.t2(toCopy));
  this.m1b_1 = this.m1b_1.t2(toCopy);
  return toCopy;
};
protoOf(PeekSource).d1b = function () {
  this.l1b_1 = true;
};
function RealSource(source) {
  this.n1b_1 = source;
  this.o1b_1 = false;
  this.p1b_1 = new Buffer();
}
protoOf(RealSource).g19 = function () {
  return this.p1b_1;
};
protoOf(RealSource).h1a = function (sink, byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.o1b_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.RealSource.readAtMostTo.<anonymous>' call
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  if (this.p1b_1.p().equals(new Long(0, 0))) {
    var read = this.n1b_1.h1a(this.p1b_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return new Long(-1, -1);
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.p1b_1.p();
  var toRead = byteCount.e1(b) <= 0 ? byteCount : b;
  return this.p1b_1.h1a(sink, toRead);
};
protoOf(RealSource).h19 = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.o1b_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return this.p1b_1.h19() && this.n1b_1.h1a(this.p1b_1, new Long(8192, 0)).equals(new Long(-1, -1));
};
protoOf(RealSource).i19 = function (byteCount) {
  if (!this.j19(byteCount))
    throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
};
protoOf(RealSource).j19 = function (byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.o1b_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.RealSource.request.<anonymous>' call
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  while (this.p1b_1.p().e1(byteCount) < 0) {
    if (this.n1b_1.h1a(this.p1b_1, new Long(8192, 0)).equals(new Long(-1, -1)))
      return false;
  }
  return true;
};
protoOf(RealSource).e1a = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  if (this.p1b_1.p().equals(new Long(0, 0))) {
    var read = this.n1b_1.h1a(this.p1b_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return -1;
  }
  // Inline function 'kotlinx.io.minOf' call
  var a = endIndex - startIndex | 0;
  var b = this.p1b_1.p();
  // Inline function 'kotlin.comparisons.minOf' call
  var a_0 = toLong(a);
  var toRead = (a_0.e1(b) <= 0 ? a_0 : b).j1();
  return this.p1b_1.e1a(sink, startIndex, startIndex + toRead | 0);
};
protoOf(RealSource).j1a = function (sink, byteCount) {
  try {
    this.i19(byteCount);
  } catch ($p) {
    if ($p instanceof EOFException) {
      var e = $p;
      sink.i1a(this.p1b_1, this.p1b_1.p());
      throw e;
    } else {
      throw $p;
    }
  }
  this.p1b_1.j1a(sink, byteCount);
};
protoOf(RealSource).k1a = function (sink) {
  var totalBytesWritten = new Long(0, 0);
  while (!this.n1b_1.h1a(this.p1b_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
    var emitByteCount = this.p1b_1.c1a();
    if (emitByteCount.e1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.t2(emitByteCount);
      sink.i1a(this.p1b_1, emitByteCount);
    }
  }
  if (this.p1b_1.p().e1(new Long(0, 0)) > 0) {
    totalBytesWritten = totalBytesWritten.t2(this.p1b_1.p());
    sink.i1a(this.p1b_1, this.p1b_1.p());
  }
  return totalBytesWritten;
};
protoOf(RealSource).v19 = function () {
  this.i19(new Long(2, 0));
  return this.p1b_1.v19();
};
protoOf(RealSource).l1a = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!this.o1b_1) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return buffered(new PeekSource(this));
};
protoOf(RealSource).d1b = function () {
  if (this.o1b_1)
    return Unit_instance;
  this.o1b_1 = true;
  this.n1b_1.d1b();
  this.p1b_1.a2();
};
protoOf(RealSource).toString = function () {
  return 'buffered(' + toString(this.n1b_1) + ')';
};
function Segment_init_$Init$($this) {
  Segment.call($this);
  $this.l19_1 = new Int8Array(8192);
  $this.p19_1 = true;
  $this.o19_1 = null;
  return $this;
}
function Segment_init_$Create$() {
  return Segment_init_$Init$(objectCreate(protoOf(Segment)));
}
function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
  Segment.call($this);
  $this.l19_1 = data;
  $this.m19_1 = pos;
  $this.n19_1 = limit;
  $this.o19_1 = shareToken;
  $this.p19_1 = owner;
  return $this;
}
function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
  return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
}
function Companion() {
  this.q1b_1 = 8192;
  this.r1b_1 = 1024;
}
protoOf(Companion).s1b = function () {
  return Segment_init_$Create$();
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
protoOf(Segment).u1a = function () {
  var tmp1_safe_receiver = this.o19_1;
  var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t1b();
  return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
};
protoOf(Segment).z19 = function () {
  var tmp0_elvis_lhs = this.o19_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = SegmentPool_instance.u1b();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
    this.o19_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var t = tmp;
  var tmp_0 = this.m19_1;
  var tmp_1 = this.n19_1;
  // Inline function 'kotlin.also' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
  t.v1b();
  return Segment_init_$Create$_0(this.l19_1, tmp_0, tmp_1, t, false);
};
protoOf(Segment).x1a = function () {
  var result = this.q19_1;
  if (!(this.r19_1 == null)) {
    ensureNotNull(this.r19_1).q19_1 = this.q19_1;
  }
  if (!(this.q19_1 == null)) {
    ensureNotNull(this.q19_1).r19_1 = this.r19_1;
  }
  this.q19_1 = null;
  this.r19_1 = null;
  return result;
};
protoOf(Segment).a1a = function (segment) {
  segment.r19_1 = this;
  segment.q19_1 = this.q19_1;
  if (!(this.q19_1 == null)) {
    ensureNotNull(this.q19_1).r19_1 = segment;
  }
  this.q19_1 = segment;
  return segment;
};
protoOf(Segment).v1a = function (byteCount) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount > 0 && byteCount <= (this.n19_1 - this.m19_1 | 0))) {
    // Inline function 'kotlinx.io.Segment.split.<anonymous>' call
    var message = 'byteCount out of range';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var prefix;
  if (byteCount >= 1024) {
    prefix = this.z19();
  } else {
    prefix = SegmentPool_instance.p1a();
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.l19_1;
    var destination = prefix.l19_1;
    var startIndex = this.m19_1;
    var endIndex = this.m19_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, startIndex, endIndex);
  }
  prefix.n19_1 = prefix.m19_1 + byteCount | 0;
  this.m19_1 = this.m19_1 + byteCount | 0;
  if (!(this.r19_1 == null)) {
    ensureNotNull(this.r19_1).a1a(prefix);
  } else {
    prefix.q19_1 = this;
    this.r19_1 = prefix;
  }
  return prefix;
};
protoOf(Segment).b1a = function () {
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!!(this.r19_1 == null)) {
    // Inline function 'kotlinx.io.Segment.compact.<anonymous>' call
    var message = 'cannot compact';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (!ensureNotNull(this.r19_1).p19_1)
    return this;
  var byteCount = this.n19_1 - this.m19_1 | 0;
  var availableByteCount = (8192 - ensureNotNull(this.r19_1).n19_1 | 0) + (ensureNotNull(this.r19_1).u1a() ? 0 : ensureNotNull(this.r19_1).m19_1) | 0;
  if (byteCount > availableByteCount)
    return this;
  var predecessor = this.r19_1;
  this.w1a(ensureNotNull(predecessor), byteCount);
  var successor = this.x1a();
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(successor == null)) {
    // Inline function 'kotlin.check.<anonymous>' call
    var message_0 = 'Check failed.';
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  SegmentPool_instance.f1b(this);
  return predecessor;
};
protoOf(Segment).a1b = function (byte) {
  var _unary__edvuaz = this.n19_1;
  this.n19_1 = _unary__edvuaz + 1 | 0;
  this.l19_1[_unary__edvuaz] = byte;
};
protoOf(Segment).c1b = function (short) {
  var data = this.l19_1;
  var limit = this.n19_1;
  var _unary__edvuaz = limit;
  limit = _unary__edvuaz + 1 | 0;
  data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
  var _unary__edvuaz_0 = limit;
  limit = _unary__edvuaz_0 + 1 | 0;
  data[_unary__edvuaz_0] = toByte(short & 255);
  this.n19_1 = limit;
};
protoOf(Segment).u19 = function () {
  var _unary__edvuaz = this.m19_1;
  this.m19_1 = _unary__edvuaz + 1 | 0;
  return this.l19_1[_unary__edvuaz];
};
protoOf(Segment).w19 = function () {
  var data = this.l19_1;
  var pos = this.m19_1;
  // Inline function 'kotlinx.io.and' call
  var _unary__edvuaz = pos;
  pos = _unary__edvuaz + 1 | 0;
  var tmp = (data[_unary__edvuaz] & 255) << 8;
  // Inline function 'kotlinx.io.and' call
  var _unary__edvuaz_0 = pos;
  pos = _unary__edvuaz_0 + 1 | 0;
  var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
  var s = toShort(tmp | tmp$ret$1);
  this.m19_1 = pos;
  return s;
};
protoOf(Segment).w1a = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  // Inline function 'kotlin.contracts.contract' call
  if (!sink.p19_1) {
    // Inline function 'kotlinx.io.Segment.writeTo.<anonymous>' call
    var message = 'only owner can write';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if ((sink.n19_1 + byteCount | 0) > 8192) {
    if (sink.u1a())
      throw IllegalArgumentException_init_$Create$_0();
    if (((sink.n19_1 + byteCount | 0) - sink.m19_1 | 0) > 8192)
      throw IllegalArgumentException_init_$Create$_0();
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = sink.l19_1;
    var destination = sink.l19_1;
    var startIndex = sink.m19_1;
    var endIndex = sink.n19_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, startIndex, endIndex);
    sink.n19_1 = sink.n19_1 - sink.m19_1 | 0;
    sink.m19_1 = 0;
  }
  // Inline function 'kotlin.collections.copyInto' call
  var this_1 = this.l19_1;
  var destination_0 = sink.l19_1;
  var destinationOffset = sink.n19_1;
  var startIndex_0 = this.m19_1;
  var endIndex_0 = this.m19_1 + byteCount | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = this_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, destination_0, destinationOffset, startIndex_0, endIndex_0);
  sink.n19_1 = sink.n19_1 + byteCount | 0;
  this.m19_1 = this.m19_1 + byteCount | 0;
};
protoOf(Segment).f1a = function (dst, dstStartOffset, dstEndOffset) {
  var len = dstEndOffset - dstStartOffset | 0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = this.l19_1;
  var startIndex = this.m19_1;
  var endIndex = this.m19_1 + len | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, dst, dstStartOffset, startIndex, endIndex);
  this.m19_1 = this.m19_1 + len | 0;
};
protoOf(Segment).s1a = function (src, srcStartOffset, srcEndOffset) {
  // Inline function 'kotlin.collections.copyInto' call
  var destination = this.l19_1;
  var destinationOffset = this.n19_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = src;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, destination, destinationOffset, srcStartOffset, srcEndOffset);
  this.n19_1 = this.n19_1 + (srcEndOffset - srcStartOffset | 0) | 0;
};
protoOf(Segment).s19 = function () {
  return this.n19_1 - this.m19_1 | 0;
};
protoOf(Segment).r1a = function () {
  return this.l19_1.length - this.n19_1 | 0;
};
protoOf(Segment).w1b = function (readOnly) {
  return this.l19_1;
};
protoOf(Segment).x1b = function (index) {
  return this.l19_1[this.m19_1 + index | 0];
};
protoOf(Segment).y1b = function (index, value) {
  this.l19_1[this.n19_1 + index | 0] = value;
};
protoOf(Segment).z1b = function (index, b0, b1) {
  var d = this.l19_1;
  var l = this.n19_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
};
protoOf(Segment).a1c = function (index, b0, b1, b2) {
  var d = this.l19_1;
  var l = this.n19_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
};
protoOf(Segment).b1c = function (index, b0, b1, b2, b3) {
  var d = this.l19_1;
  var l = this.n19_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
  d[(l + index | 0) + 3 | 0] = b3;
};
function Segment() {
  this.m19_1 = 0;
  this.n19_1 = 0;
  this.o19_1 = null;
  this.p19_1 = false;
  this.q19_1 = null;
  this.r19_1 = null;
}
function SegmentCopyTracker() {
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.s19() === 0;
}
function AlwaysSharedCopyTracker() {
  AlwaysSharedCopyTracker_instance = this;
  SegmentCopyTracker.call(this);
}
protoOf(AlwaysSharedCopyTracker).t1b = function () {
  return true;
};
protoOf(AlwaysSharedCopyTracker).v1b = function () {
  return Unit_instance;
};
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance == null)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function Sink() {
}
function Source() {
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = new Long(2147483647, 0);
    while (_this__u8e3s4.g19().p().e1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.j19(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      fetchSize = fetchSize.v2(toLong(2));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4.g19().p().e1(new Long(2147483647, 0)) < 0)) {
      // Inline function 'kotlinx.io.readByteArrayImpl.<anonymous>' call
      var message = "Can't create an array of size " + _this__u8e3s4.g19().p().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    arraySize = _this__u8e3s4.g19().p().j1();
  } else {
    _this__u8e3s4.i19(toLong(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.g19(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.e1a(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = toLong(byteCount);
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(byteCount_0.e1(new Long(0, 0)) >= 0)) {
    // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.writeString.<anonymous>' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.g19();
  var i = startIndex;
  while (i < endIndex) {
    // Inline function 'kotlin.code' call
    var p0 = i;
    var this_1 = charSequenceGet(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.m1a(1);
        // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.r1a() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.f1c(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          // Inline function 'kotlin.code' call
          var p0_0 = i;
          var this_2 = charSequenceGet(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.f1c(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.n19_1 = tail.n19_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp.f19_1 = this_0.f19_1.t2(toLong(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.r1a() : false)) {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.r1a();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.n19_1 = tail.n19_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_0.f19_1 = this_0.f19_1.t2(toLong(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.g1b();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.m1a(2);
        // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
        get_SegmentWriteContextImpl().e1c(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.n19_1 = tail_0.n19_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_1.f19_1 = this_0.f19_1.t2(toLong(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.r1a() : false)) {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.r1a();
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.n19_1 = tail_0.n19_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_2.f19_1 = this_0.f19_1.t2(toLong(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.g1b();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.m1a(3);
        // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
        get_SegmentWriteContextImpl().d1c(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.n19_1 = tail_1.n19_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_3.f19_1 = this_0.f19_1.t2(toLong(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.r1a() : false)) {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.r1a();
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.n19_1 = tail_1.n19_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_4.f19_1 = this_0.f19_1.t2(toLong(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.g1b();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        // Inline function 'kotlin.code' call
        var p0_1 = i + 1 | 0;
        var this_3 = charSequenceGet(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_3);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        this_0.z1a(63);
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.m1a(4);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          get_SegmentWriteContextImpl().c1c(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.n19_1 = tail_2.n19_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_6.f19_1 = this_0.f19_1.t2(toLong(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.r1a() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.r1a();
            throw IllegalStateException_init_$Create$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.n19_1 = tail_2.n19_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_7.f19_1 = this_0.f19_1.t2(toLong(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.g1b();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.x19();
}
function readString(_this__u8e3s4) {
  _this__u8e3s4.j19(new Long(-1, 2147483647));
  return commonReadUtf8(_this__u8e3s4.g19(), _this__u8e3s4.g19().p());
}
function readString_0(_this__u8e3s4, byteCount) {
  _this__u8e3s4.i19(byteCount);
  return commonReadUtf8(_this__u8e3s4.g19(), byteCount);
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount.equals(new Long(0, 0)))
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.d19_1;
  while (!(curr == null)) {
    // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>' call
    get_SegmentReadContextImpl();
    if (toLong(curr.s19()).e1(byteCount) >= 0) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>.<anonymous>' call
      var data = curr.w1b(true);
      var pos = curr.m19_1;
      // Inline function 'kotlin.math.min' call
      var a = curr.n19_1;
      var b = pos + byteCount.j1() | 0;
      var tmp$ret$0 = Math.min(a, b);
      result = commonToUtf8String(data, pos, tmp$ret$0);
      _this__u8e3s4.d1a(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.j1()));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException_init_$Create$(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = numberToChar(b0);
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          var beginIndex_0 = index;
          if (endIndex <= (beginIndex_0 + 1 | 0)) {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = numberToChar(65533);
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[beginIndex_0];
          var b1 = _this__u8e3s4[beginIndex_0 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = numberToChar(65533);
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = numberToChar(65533);
          } else {
            // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = numberToChar(codePoint);
          }
          tmp$ret$1 = 2;
        }
        index = tmp + tmp$ret$1 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp$ret$7;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            var beginIndex_1 = index;
            if (endIndex <= (beginIndex_1 + 2 | 0)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = numberToChar(65533);
              var tmp_1;
              if (endIndex <= (beginIndex_1 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[beginIndex_1 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$7 = 1;
                break $l$block_4;
              } else {
                tmp$ret$7 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[beginIndex_1];
            var b1_0 = _this__u8e3s4[beginIndex_1 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = numberToChar(65533);
              tmp$ret$7 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[beginIndex_1 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = numberToChar(65533);
              tmp$ret$7 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = numberToChar(65533);
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = numberToChar(65533);
            } else {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = numberToChar(codePoint_0);
            }
            tmp$ret$7 = 3;
          }
          index = tmp_0 + tmp$ret$7 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp$ret$15;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              var beginIndex_2 = index;
              if (endIndex <= (beginIndex_2 + 3 | 0)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = _Char___init__impl__6a9atx(65533);
                }
                var tmp_3;
                if (endIndex <= (beginIndex_2 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[beginIndex_2 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$15 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (beginIndex_2 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[beginIndex_2 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$15 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$15 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[beginIndex_2];
              var b1_1 = _this__u8e3s4[beginIndex_2 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = _Char___init__impl__6a9atx(65533);
                }
                tmp$ret$15 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[beginIndex_2 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = _Char___init__impl__6a9atx(65533);
                }
                tmp$ret$15 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[beginIndex_2 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = _Char___init__impl__6a9atx(65533);
                }
                tmp$ret$15 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = _Char___init__impl__6a9atx(65533);
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = _Char___init__impl__6a9atx(65533);
                }
              } else if (codePoint_1 < 65536) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(65533 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = numberToChar((65533 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = _Char___init__impl__6a9atx(65533);
                }
              } else {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                if (!(codePoint_1 === 65533)) {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                } else {
                  // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = _Char___init__impl__6a9atx(65533);
                }
              }
              tmp$ret$15 = 4;
            }
            index = tmp_2 + tmp$ret$15 | 0;
          } else {
            // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = _Char___init__impl__6a9atx(65533);
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
function UnsafeBufferOperations() {
}
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
function SegmentReadContextImpl$1() {
}
protoOf(SegmentReadContextImpl$1).e1b = function (segment, offset) {
  return segment.x1b(offset);
};
function SegmentWriteContextImpl$1() {
}
protoOf(SegmentWriteContextImpl$1).f1c = function (segment, offset, value) {
  segment.y1b(offset, value);
};
protoOf(SegmentWriteContextImpl$1).e1c = function (segment, offset, b0, b1) {
  segment.z1b(offset, b0, b1);
};
protoOf(SegmentWriteContextImpl$1).d1c = function (segment, offset, b0, b1, b2) {
  segment.a1c(offset, b0, b1, b2);
};
protoOf(SegmentWriteContextImpl$1).c1c = function (segment, offset, b0, b1, b2, b3) {
  segment.b1c(offset, b0, b1, b2, b3);
};
function BufferIterationContextImpl$1() {
}
protoOf(BufferIterationContextImpl$1).e1b = function (segment, offset) {
  return get_SegmentReadContextImpl().e1b(segment, offset);
};
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function IOException_init_$Init$($this) {
  Exception_init_$Init$($this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$() {
  var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$);
  return tmp;
}
function IOException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_0(message) {
  var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_0);
  return tmp;
}
function IOException_init_$Init$_1(message, cause, $this) {
  Exception_init_$Init$_1(message, cause, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_1(message, cause) {
  var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_1);
  return tmp;
}
function IOException() {
  captureStack(this, IOException);
}
function EOFException_init_$Init$($this) {
  IOException_init_$Init$($this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$() {
  var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$);
  return tmp;
}
function EOFException_init_$Init$_0(message, $this) {
  IOException_init_$Init$_0(message, $this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$_0(message) {
  var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$_0);
  return tmp;
}
function EOFException() {
  captureStack(this, EOFException);
}
function SegmentPool() {
  this.n1a_1 = 0;
  this.o1a_1 = 0;
}
protoOf(SegmentPool).p1a = function () {
  return Companion_instance.s1b();
};
protoOf(SegmentPool).f1b = function (segment) {
};
protoOf(SegmentPool).u1b = function () {
  return AlwaysSharedCopyTracker_getInstance();
};
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
protoOf(Buffer).g1a = readAtMostTo$default;
protoOf(Buffer).t1a = write$default;
protoOf(RealSource).g1a = readAtMostTo$default;
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  EOFException_init_$Create$_0 as EOFException_init_$Create$1rbgrvr26c6ad,
  IOException_init_$Init$_0 as IOException_init_$Init$ixjqjud2vd5a,
  IOException_init_$Create$_0 as IOException_init_$Create$2ud7rnqxh44u0,
  IOException_init_$Init$_1 as IOException_init_$Init$p8spuvlfkd8t,
  IOException_init_$Create$_1 as IOException_init_$Create$667agappkj1h,
  Buffer as Buffergs925ekssbch,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readString as readString2nvggcfaijfhd,
  readString_0 as readString3v6duspiz33tv,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
