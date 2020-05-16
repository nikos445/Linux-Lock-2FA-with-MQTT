var mqtt = require('mqtt')

const { exec } = require('child_process');
const ioHook = require('iohook');
ioHook.start()
 
var lockstatus = '1';
var options  = { username: 'jltycthi', password: 'YuhEFQuYoXZP', port: '18650' };
var client = mqtt.connect('mqtt://m24.cloudmqtt.com', options)
  

client.on('connect', function (res) {
    client.subscribe('security', function (err) {
        if (err) {
            console.log(err)
            return;
        }
        else if (!err) {        
            client.publish('security', lockstatus.toString()) 
        }
    })
})


client.on('message', function (topic, message) {
    // message is Buffer
    if(topic.toString() === 'security' && message.toString() === '1'){    
          
        ioHook.disableClickPropagation(); 
        exec('sleep 1; xset dpms force off')
        exec('sleep 1; xinput disable 11')
        exec('sleep 1; xinput disable 8')
    }
    
    if(topic.toString() === 'security' && message.toString() === '0'){ 
 
        ioHook.enableClickPropagation();
        
        exec('sleep 1; xset dpms force on')
        exec('sleep 1; xinput enable 11')
        exec('sleep 1; xinput enable 8')
    }
})
