// console.log("Hi");
// Object creation

function createRectangle(){
    let rectangle = {
        length: 1,
        breadth: 2,
        draw : function(){
            console.log("Hello");
        }
    }
    return rectangle;
}

// rectangle.draw();

function rectangle(len, bre){
    this.length  = len;
    this.breadth = bre;
    this.draw = function(){
        console.log(`breadth is ${this.breadth}`);
    }
}

let rectangleObject = new rectangle(4, 6);

// rectangleObject.draw();

rectangleObject.color = 'yellow';
// console.log(rectangleObject);

delete rectangleObject.color;
// console.log(rectangleObject);


let circle = new Function('radius', `this.radius = radius`);

let circ = new circle(4);
// console.log(circ);
// console.log(circle.constructor);

// let a = 10;
// let b = a;
// a++;
// console.log(`a is ${a}`);
// console.log(`b is ${b}`);

// let x = {value: 10};
// let y  = x;
// x.value++;
// console.log(`x value  is ${x.value}`);
// console.log(`y value is ${y.value}`);

// let a = {value: 10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);

let rectangl = {
    length: 2,
    breadth: 3,
}

// for(let key in rectangl){
//     console.log(key, rectangl[key]);
// }

//Iteration object cloning
let clone1 = {};
for(let key in rectangl){
    clone1[key] = rectangl[key];
}
console.log(clone1);

// using assign object cloning
let clone2 = Object.assign({}, rectangl);
console.log(clone2);

// using spread

let clone3 = {...rectangl};
console.log(clone3);

let lastname = 'Joshi';
let firstname = new String('akanksha');
console.log(firstname);
console.log(lastname);

let message = `This is
my first
message`;
// let words = message.split(' ');
console.log(message);


let date = new Date('JUNE 20 1998');
console.log(date);