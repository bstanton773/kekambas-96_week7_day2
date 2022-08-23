// console.log("hello from object");

/*
    JavaScript Object and Prototypes
*/

let person = {
    name: 'Tom',
    age: 23,
    favColor: 'purple'
};

console.log(person);

// Bracket Notation
console.log(person['name']);
// Dot Notation
console.log(person.favColor);

let person2 = {
    name: 'Samantha',
    age: 32,
    languages: ['JavaScript', 'Python'],
    teams: {
        mlb: 'Nationals',
        nfl: 'Commanders'
    }
};

console.log(person2);

console.log(person2.languages);
person2.languages.forEach(lang => console.log(lang));

let person3 = {
    name: 'Jeeves',
    sayHello: function(){
        console.log(`Hello my name is ${this.name}!`)
    }
}

console.log(person3);

console.log(person3.sayHello);

person3.sayHello();

console.clear();

// JavaScript Object Instantiation -> Class Instantiation

// let animal = {};
// animal.name = 'Buddy';
// animal.energy = 10;

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// }

// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// }

// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// }

// console.log(animal);

// animal.eat(10);
// animal.play(15);
// animal.sleep(20);
// console.log(animal);

////////////////////////////
// Function Instantiation //
////////////////////////////

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     }

//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     }

//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }

//     return animal
// }

// let buddy = Animal('Buddy');
// buddy.eat(10);
// buddy.play(15);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(10);

// console.log(buddy);
// console.log(leo);


////////////////////////////////////////////////
// Function Instantiation with Shared Methods //
////////////////////////////////////////////////

// let animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }
// }

// function Animal(name, energy=10){
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = animalMethods.eat

//     animal.sleep = animalMethods.sleep

//     animal.play = animalMethods.play

//     return animal
// }

// let buddy = Animal('Buddy');
// buddy.eat(10);
// buddy.play(15);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(10);

// console.log(buddy);
// console.log(leo);

// console.log(buddy.eat === leo.eat);


// Object.create

let parent = {
    first: 'Margaret',
    last: "O'Reilly",
    heritage: 'Irish'
}

console.log(parent);
console.log(parent.first);
console.log(parent.last);
console.log(parent.heritage);

let child = Object.create(parent);
child.first = 'Seamus';
console.log(child);
console.log(child.first)
console.log(child.last)
console.log(child.heritage)

let parentObj = {
    name: 'Hughie',
    getInfo: function(){console.log(`Hello ${this.name}`)}
}


let childObj = Object.create(parentObj);
childObj.name = 'William';

console.log(childObj);

grandchild = Object.create(childObj);
console.log(grandchild);

console.clear();



//////////////////////////////////////////////////////////////////
// Function Instantiation with Shared Methods and Object.create //
//////////////////////////////////////////////////////////////////

// let animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating and energy is now ${this.energy}`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing and energy is now ${this.energy}`)
//     }
// }

// function Animal(name, energy=10){
//     let animal = Object.create(animalMethods);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// let buddy = Animal('Buddy');
// buddy.eat(10);
// buddy.play(15);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(10);

// console.log(buddy);
// console.log(leo);

// console.log(buddy.eat === leo.eat);


// Function prototype
function doNothing(){};
console.log(doNothing.prototype)
console.log(typeof doNothing.prototype)


//////////////////////////////
// Prototypal Instantiation //
//////////////////////////////

// function Animal(name, energy=10){
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.energy = energy;

//     return animal
// }

// Animal.prototype.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// }

// let buddy = Animal('Buddy');
// buddy.eat(10);
// buddy.play(15);

// let leo = Animal('Leo', 20);
// leo.eat(5);
// leo.play(10);

// console.log(buddy);
// console.log(leo);

// console.log(buddy.eat === leo.eat);

///////////////////////////////////
// Pseudoclassical Instantiation //
///////////////////////////////////

// function Animal(name, energy=10){
//     // let animal = Object.create(Animal.prototype);
//     this.name = name; // change variable object name to this (e.g. animal.name = name -> this.name = name)
//     this.energy = energy;

//     // return animal
// }

// Animal.prototype.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating and energy is now ${this.energy}`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing and energy is now ${this.energy}`)
// }

// let buddy = new Animal('Buddy');
// buddy.eat(10);
// buddy.play(15);

// let leo = new Animal('Leo', 20);
// leo.eat(5);
// leo.play(10);

// console.log(buddy);
// console.log(leo);

// console.log(buddy.eat === leo.eat);


/////////////////////////////////////
// ECMAScript 2015 - class keyword //
/////////////////////////////////////


class Animal{
    constructor(name, energy=10){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        this.energy += amount;
        console.log(`${this.name} is eating and energy is now ${this.energy}`)
    }

    sleep(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
    }

    play(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing and energy is now ${this.energy}`)
    }
}


let buddy = new Animal('Buddy');
buddy.eat(10);
buddy.play(15);

let leo = new Animal('Leo', 20);
leo.eat(5);
leo.play(10);

console.log(buddy);
console.log(leo);

console.log(buddy.eat === leo.eat);



let myCoolArr = [];
let myCoolerArr = new Array();

console.log(myCoolArr);
console.log(myCoolerArr);