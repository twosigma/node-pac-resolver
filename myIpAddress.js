
/**
 * Module dependencies.
 */

var ip = require('ip');

/**
 * Module exports.
 */

module.exports = myIpAddress;

myIpAddress.async = true;

/**
 * Returns the IP address of the host that the Navigator is running on, as
 * a string in the dot-separated integer format.
 *
 * Example:
 *
 * ``` js
 * myIpAddress()
 *   // would return the string "198.95.249.79" if you were running the
 *   // Navigator on that host.
 * ```
 *
 * @return {String} external IP address
 */

function myIpAddress (fn) {
  return fn(null, ip.address());
}
