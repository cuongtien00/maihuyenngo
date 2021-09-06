class SwitchButton {
    constructor (status,lamp) {
        this.status = status;
        this.lamp = lamp
    }
   setElectricLamp(Lamp){
        this.lamp = Lamp;
   }
   turnOn(){
        this.lamp.turnOn();
   }
   turnOff(){
        this.lamp.turnOff();
   }

}
let ct = new SwitchButton ()