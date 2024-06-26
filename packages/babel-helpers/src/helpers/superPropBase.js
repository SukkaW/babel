/* @minVersion 7.0.0-beta.0 */

import getPrototypeOf from "getPrototypeOf";

export default function _superPropBase(object, property) {
  // Yes, this throws if object is null to being with, that's on purpose.
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
