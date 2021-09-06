class Human {
    constructor(_name,_gender,_weight) {
        this.name = _name;
        this.gender = _gender;
        this.weight = _weight;
    }
    say(text){
        console.log(text);
    }
    eat(Apple) {
        if(Apple.weight>0) {
            this.weight++;
            Apple.decrease();
        }
    }
    check(Apple) {
       return Apple.getWeight();
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getWeight() {
        return this.weight;
    }
}
let n1 = new Human("Cuong",true,50);

let n2 = new Human("Huyen",false,47);