import classApplyDescriptorSet from "./classApplyDescriptorSet.js";
import assertClassBrand from "./assertClassBrand.js";
import classCheckPrivateStaticFieldDescriptor from "./classCheckPrivateStaticFieldDescriptor.js";
export default function _classStaticPrivateFieldSpecSet(s, t, r, e) {
  return assertClassBrand(t, s), classCheckPrivateStaticFieldDescriptor(r, "set"), classApplyDescriptorSet(s, r, e), e;
}