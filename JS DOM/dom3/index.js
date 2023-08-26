// const t1 = performance.now();

// for(let i = 0; i <100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para '+i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();

// console.log(`this took ${(t2 - t1)} ms`);

// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i = 0; i < 100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para '+i;
//     mydiv.appendChild(element);
// }

// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log((t4 - t3));

// optimized a bit
const t1 = performance.now();
// let fragment = document.createDocumentFragment();

// for(let i = 0; i <100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para '+i;
//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);
// const t2 = performance.now();

// console.log(t2 - t1);