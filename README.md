# Linux Lock with MQTT as 2FA Authentication.

###### USE AT YOUR OWN RISK. IM NOT RESPONSIBLE OF ANY DAMAGE MAY OCCUR IN YOUR DEVICES.
###### IT WILL DISABLE KEYBOARD, BLANK SCREEN and DISABLE MOUSE until you give access from MQTT 

### Locking computer with 2FA mobile approval using MQTT cloud server.

``` 
npm install  iohook mqtt  robotjs
```

### CHANGE PASSWORDS AND URLS IN:
```
var options  = { username: 'MQTT_SERVER_USERNAME', password: 'MQTT_SERVER_PASSWORD', port: 'MQTT_SERVER_PORT' };
var client = mqtt.connect('mqtt://MQTT_SERVER_URL', options)
```
USE MQTT DASH FOR CREATING A BUTTON AND CONTROLLING THE PC-2FA LOCK

https://play.google.com/store/apps/details?id=net.routix.mqttdash&hl=en&gl=US

```
TOPIC: security

VALUES: 0 (off) / 1 (on) (Number) 
```
 
##### To grand access use topic: "security" and set value to 0
##### To prevent access use topic: "security" and set value to 1

--------------------------------------------------------

Copyrights Nikolaos Astyrakakis 2020

--------------------------------------------------------
