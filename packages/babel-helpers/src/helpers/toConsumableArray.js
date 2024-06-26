/* @minVersion 7.0.0-beta.0 */

import arrayWithoutHoles from "arrayWithoutHoles";
import iterableToArray from "iterableToArray";
import unsupportedIterableToArray from "unsupportedIterableToArray";
import nonIterableSpread from "nonIterableSpread";

export default function _toConsumableArray(arr) {
  return (
    arrayWithoutHoles(arr) ||
    iterableToArray(arr) ||
    unsupportedIterableToArray(arr) ||
    nonIterableSpread()
  );
}
