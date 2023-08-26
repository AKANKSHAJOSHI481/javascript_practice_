// let number = [1,3,5,6];
// console.log(number);
// number.splice(2, 1);
// console.log(number);


// let courses = [
//     {no: 1, name: 'Akanksha'},
//     {no: 2, name: 'Joshi'}
// ];

// call back funciion
// let course = courses.find(function(course){
//     return course.name == 'Akanksha';
// })
// using arrow function
// let course = courses.find(course => course.name == 'Joshi');
// console.log(course);


let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);
let sliced = combined.slice(2,3);
console.log(sliced);

// for(let i = 0; i<combined.length; i++){
//     console.log(combined[i]);
// }

// for(let value of combined){
//     console.log(value);
// }

// combined.forEach(function(number){
//     console.log(number);
// })

// let message = 'This is my message';
// console.log(message);
// let parts = message.split(' ');
// console.log(parts);
// let joined = parts.join('_');
// console.log(joined);

let maxSpeed = {
    car: 300,
    bike: 60, 
    train: 250,
    aeroplane : 1000
}
let sortable = [];
for(var vehicle in maxSpeed){
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b){
    return a[1] - b[1];
})

console.log(sortable);