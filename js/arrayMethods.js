// console.log('Hello from array methods!');

/*
    ARRAY Methods
*/

// Create an array with which we will work

let names = ['Mike', 'Frank', 'Catherine', 'Alison', 'Fred', 'William'];

// Basic Looping
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}


console.log('=====================')

// For ... of
for (let name of names){
    console.log(name)
}

console.log('=====================')

// Array.prototype.forEach()
names.forEach(element => console.log(element));


console.log('=====================')

// Callback function
function logAllInfo(name, idx, arr){
    console.log(name, idx, arr)
};

names.forEach(logAllInfo);

names.forEach(name => console.log(name.toUpperCase()))

names.forEach((name, idx) => console.log(idx + name))


// Array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    }
}

let newNames = names.map(mapCallBack);
console.log(names);
console.log(newNames);

// As Arrow Function / One line
let newerNames = names.map((e,i) => (i%2===0) ? e.toUpperCase() : e.toLowerCase());
console.log(newerNames);


// Array.prototype.filter()
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver'];
console.log(cities);

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C'
}

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);

let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);


// As an Arrow Function

function startsWithB(cityName){
    return cityName[0].toUpperCase() === 'B'
}
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);

let oddCities = cities.filter((c,i) => i%2 === 1)
console.log(oddCities);

let someNums = [1, 54, -324, 54, 324, -345, -23, 353]

// let sumPosNums = 0
// someNums.filter(e => e > 0).forEach(e => sumPosNums += e)
// console.log(sumPosNums)


let arrA = [1,2,3];
let arrB = [4,5,6];
let arrC = arrA + arrB;
console.log(arrC);
console.log(typeof arrC);

// Array.prototype.concat()
let arrAB = arrA.concat(arrB);
console.log(arrAB);

let myConcatArr = arrA.concat([4, 5, 6], [9, 8, 7], [34, 56, 78])
console.log(myConcatArr);

// Array.prototype.includes()
let fruits = ['orange', 'apple', 'banana', 'pear'];

console.log(fruits.includes('apple'));
console.log(fruits.includes('mango'));
console.log('orange' in fruits);
console.log('2' in fruits);
