class Mobie {
    constructor() {
        this.status = true;
        this.battery = 100;
        this.inbox = [];
        this.outbox = [];
        this.draft = '';
    }
    creatMessage(text) {
        this.draft = text
        this.battery--
    }
    sendMessage(phone){
        phone.inbox.push(this.draft);
        this.outbox.push(this.draft);
        this.draft = '';
        this.battery--
    }
    getInbox() {
        return this.inbox;
    }
    getOutbox() {
        return this.outbox;
    }
    check() {
        return this.status;
    }
    turnOnOff() {
        this.status = !this.status;
    }
    charge() {
        this.battery++
    }

}
let dtcuaCuong = new Mobie();
let dtcuaHuyen = new Mobie();