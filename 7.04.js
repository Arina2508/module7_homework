function Device(name){
this.state = false
this.name = name
}

Device.prototype.getState = function(){
console.log(this.state ? 'Device: '+this.name+' is on' : 'Device: '+this.name+' is off')
}

Device.prototype.switch = function (){
this.state = !this.state
this.getState()
}

function SmartDevice(name, power, os){
this.state = false
this.name = name
this.power = power
this.os = os
}

SmartDevice.prototype = new Device()

SmartDevice.prototype.reinstallOS = function(newOS){
this.os = newOS
}

function KitchenDevice(name, power, feature){
this.state = false
this.name = name
this.power = power
this.feature = feature
}

KitchenDevice.prototype = new Device()

const computer1 = new SmartDevice('MacBook', 50, 'MacOS')
const computer2 = new SmartDevice('ASUS ROG 5', 300, 'Windows 11')
const computer3 = new SmartDevice('Lenovo Air', 200, 'Windows 10')
const teapot = new KitchenDevice('Xiaomi Teapot', 65, '5l')
const meatgrinder = new KitchenDevice('Sony Meat Grinder', 115, 'Titanium blades')

computer2.reinstallOS('Linux')
computer1.switch()
computer3.switch()
teapot.switch()

const devices = [computer1, computer2, computer3, teapot, meatgrinder]
let s = 0
for (let i=0; i<devices.length; i++){
s += devices[i].state ? devices[i].power : 0
}

console.log(s)