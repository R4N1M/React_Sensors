var mqtt = require('mqtt')
var client  = mqtt.connect('ws://localhost:8080')

client.on('connect', function () {
  client.subscribe('#')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})
