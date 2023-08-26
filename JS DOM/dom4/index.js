// // function sync(){
// //     console.log('first');
// // }
// // sync();
// // console.log('second');

// // setTimeout(function() {
// //     console.log('third');
// // })
// // function sync(){
// //     console.log('first');
// // }
// // sync();
// // console.log('second');

// let newPromise = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         console.log('I am inside Promise');
//     }, 5000);
//     resolve(2933); 
//     // reject(new Error('New errors'))
// })

// console.log('Hello')

// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(function() { 
//         console.log('I am inside Promise1')
//     }, 2000);
//     resolve(true);
// });

// let output = promise1.then(()=>{
//     let promise2 = new Promise(function(resolve, reject){
//         setTimeout(function() {
//             console.log('I am inside Promise2')
//         }, 3000);
//         resolve("promise 2 resolved");
//     })
//     return promise2;
// });

// output.then((value)=>console.log(value))
// async function utility(){
    
//     let maharastraclimate = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Its too hot in maharastra')
//         }, 1000);
//     });
    
//     let hydclimate = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Its too hot in hyd')
//         }, 5000);
//     });

//     let mm = maharastraclimate;
//     let hm = hydclimate;
//     return [mm, hm]; 
// }
    

// async function utility(){
    
//     let content =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let ans = await content.json();
//     console.log(ans);
// }

// utility();


async function helper(){
    let options = {
        method: 'POST',  
        body: JSON.stringify({  
          title: 'akanksha',  
          body: 'heh',  
          userId: 1,  
        }),  
        headers: {  
          'Content-type': 'application/json; charset=UTF-8',  
        },  
    };
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;

}

async function utility(){
    let ans = await helper();
    console.log(ans);
}

utility();
