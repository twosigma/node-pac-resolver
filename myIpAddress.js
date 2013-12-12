
/**
 * Module dependencies.
 */

var net = require('net');

/**
 * Module exports.
 */

module.exports = myIpAddress;

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

function myIpAddress () {
  return function (fn) {
    // 8.8.8.8:53 is "Google Public DNS":
    // https://developers.google.com/speed/public-dns/
    var socket = net.connect({ host: '8.8.8.8', port: 53 });
    socket.once('error', fn);
    socket.once('connect', function () {
      socket.removeListener('error', fn);
      var ip = socket.address().address;
      socket.destroy();
      fn(null, ip);
    });
  };
}
