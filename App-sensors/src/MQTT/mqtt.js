var mqtt = require('mqtt')

const connect_mqtt = () => {
  var client  = mqtt.connect('ws://localhost:8080')

  client.on('connect', function () {
    client.subscribe('#')
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
  })
}

export default connect_mqtt ;
