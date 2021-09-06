class Remote {
    constructor(_code,_tivi) {
        this.code = _code
        this.tivi = _tivi
    }
    setTivi(tivi) {
        this.tivi = tivi;
    }
    changeChannel(newChannel){
        this.tivi.setChannel(newChannel);
    }
    changeVolume(newVolume) {
        this.tivi.setVolume(newVolume);
    }
    turnOnOffTv() {
        this.tivi.turnOnOff();
    }

}
let remote = new Remote("RM1809", tv1 );