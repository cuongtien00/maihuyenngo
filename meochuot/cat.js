class Cat{
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.maxSpeed = _speed;
    }
    sound(text){
        console.log(text);
    }
    catch(rat) {
        if (this.maxSpeed > rat.speed) {
            console.log("Meo " + this.name + " da bat duoc chuot " + rat.name);
        }
    }
    eat(rat) {
            console.log("Meo " + this.name + " da an thit chuot " + rat.name);
            rat.status = false;
            this.weight = this.weight + rat.weight;


    }
}
let cuongTien = new Cat("cuongTien", 58, 50);
let ma = new Cat("ma", 50, 35);