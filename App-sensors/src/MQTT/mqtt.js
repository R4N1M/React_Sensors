var mqtt = require('mqtt')
var client;

const connect_mqtt = (lien) => {
  client  = mqtt.connect(lien)

  client.on('connect', function () {
    client.subscribe('#')
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
  })
}

export default connect_mqtt ;

//'ws://localhost:8080'
