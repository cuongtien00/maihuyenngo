class FlashLamp {
    setBattery(Battery) {
        this.battery = Battery

    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light(){
        if(this.status)
            alert("Den dang sang");
        else alert ("Den dang tat");

    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }

}
let flashLamp = new FlashLamp();
