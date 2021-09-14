class Animal {
    constructor(_name,_weight) {
        this.name = _name;
        this.weight = _weight;
    }
    setName(newName) {
        this.name = newName;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return 'Name: '+this.name +' . '+ 'Weight: ' + this.weight;
    }
 }
 let objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight('45.6');
console.log(objAnimal1.toString());


let objAnimal2 = new Animal('Cat',"10");
objAnimal2.setName("Mouse");
console.log(objAnimal2);

