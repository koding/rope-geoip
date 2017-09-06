const Kite = require('kite.js').Kite
const geoIp = require('geoip-lite')

setTimeout(() => {
  let kite = new Kite({
    url: 'https://secure.rope.live',
    transportClass: Kite.transport.SockJS,
    name: 'geo-location',
    autoConnect: true,
    autoReconnect: true,
    environment: 'Node.js ' + process.version,
    api: {
      'rope.identify': (id, callback) => {
        callback(null, {
          api: ['lookup'],
          kiteInfo: kite.getKiteInfo(),
          signatures: {
            lookup: 'String, Function',
          },
        })
      },
      lookup: (ip, callback) => {
        callback(null, geoIp.lookup(ip))
      },
    },
  })
}, 1000)

module.exports = () => 'Welcome to GeoIP-Kite!'
