class SwitchButton {
    constructor (status,lamp) {
        this.status = status;
        this.lamp = lamp
    }
    turnOn(lamp) {
        this.status = true;
        alert("Bat cong tac");
        lamp.turnOn();
    }
    turnOff(lamp) {
        this.status = false;
        alert("Tat cong tac");
        lamp.turnOff();
    }
}
let ct = new SwitchButton ()