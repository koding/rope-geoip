const Rope = require('@rope/node').Rope
const geoIp = require('geoip-lite')

new Rope('geoip', {
  lookup: (ip, callback) => {
    callback(null, geoIp.lookup(ip))
  },
})

