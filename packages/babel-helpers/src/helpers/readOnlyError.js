/* @minVersion 7.0.0-beta.0 */

export default function _readOnlyError(name) {
  throw new TypeError('"' + name + '" is read-only');
}
