import {
  VOID7hggqo3abtya as VOID,
  Unit_instanceat14thlj150z as Unit_instance,
} from './kotlin-kotlin-stdlib.mjs';
import { Application_getInstance2kmfyp5stwhta as Application_getInstance } from './ktor-ktor-http.mjs';
import { serialization1fpeds7cruos4 as serialization } from './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function get_DefaultJson() {
  _init_properties_JsonSupport_kt__yf438r();
  return DefaultJson;
}
var DefaultJson;
function json(_this__u8e3s4, json, contentType) {
  json = json === VOID ? get_DefaultJson() : json;
  contentType = contentType === VOID ? Application_getInstance().e2b_1 : contentType;
  _init_properties_JsonSupport_kt__yf438r();
  serialization(_this__u8e3s4, contentType, json);
}
function DefaultJson$lambda($this$Json) {
  _init_properties_JsonSupport_kt__yf438r();
  $this$Json.r4d_1 = true;
  $this$Json.u4d_1 = true;
  $this$Json.f4e_1 = true;
  $this$Json.g4e_1 = true;
  $this$Json.v4d_1 = false;
  $this$Json.h4e_1 = false;
  return Unit_instance;
}
var properties_initialized_JsonSupport_kt_9cgd93;
function _init_properties_JsonSupport_kt__yf438r() {
  if (!properties_initialized_JsonSupport_kt_9cgd93) {
    properties_initialized_JsonSupport_kt_9cgd93 = true;
    DefaultJson = Json(VOID, DefaultJson$lambda);
  }
}
//region block: exports
export {
  json as jsonu6qnfo3b405p,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.mjs.map
