class Tivi {
    constructor (channel,volume,status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }
    setChannel(text) {
        this.channel = text
    }
    setVolume(text) {
        this.volume = text
    }
    turnOnOff() {
        this.status = !this.status;
    }
}
let tv1 = new Tivi("0","0","true");
let tv2 = new Tivi("0","0","true");