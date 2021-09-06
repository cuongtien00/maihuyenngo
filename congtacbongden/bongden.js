class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    turnOn() {
        this.status = true;
        alert("Bong den dang sang");
    }
    turnOff() {
        this.status = false;
        alert("Bong den da tat");
    }
}
let den = new ElectricLamp();