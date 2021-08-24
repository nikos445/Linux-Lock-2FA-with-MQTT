# LINUX LOCK + APPROVAL
### Locking computer with 2FA mobile approval using MQTT cloud server.

``` 
npm install  iohook mqtt  robotjs
```

### CHANGE PASSWORDS AND URLS IN:
```
var options  = { username: 'MQTT SERVER USERNAME', password: 'MQTT SERVER PASSWORD', port: '18650' };
var client = mqtt.connect('mqtt://m24.cloudmqtt.com MQTT SERVER URL', options)
```
USE MQTT DASH FOR CREATING A BUTTON AND CONTROLLING THE PC-2FA LOCK

https://play.google.com/store/apps/details?id=net.routix.mqttdash&hl=en&gl=US

```
TOPIC: security

VALUES: 0 (off) / 1 (on) (Number) 
```
 
--------------------------------------------------------

Copyrights Nikolaos Astyrakakis 2020

--------------------------------------------------------
