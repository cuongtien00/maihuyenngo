class Rat {
    constructor(_name,_weight,_speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true
    }
    sound(text) {
        console.log(text);
    }
}
let maiHuyen = new Rat("maiHuyen", 47, 40);