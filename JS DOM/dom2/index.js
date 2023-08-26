
// function eventfunction(){
//     console.log('I clicked on document')
// }
// document.addEventListener('click', eventfunction)

// document.removeEventListener('click', eventfunction)

// const container = document.querySelector('#wrapper');

// container.addEventListener('click', function(event){
//     console.log(event);
// })

// const link = document.querySelectorAll('a');
// const first = link[0];
// first.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("prevented");
// })

// let myDiv = document.createElement('div');
// myDiv.addEventListener('click', function(event){
//     console.log('para' + event.target.textContent);
// });
// for(let i = 0; i <10; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is para " + i;
   
//     myDiv.appendChild(newElement)
// }

// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('clicked on span' + event.target.textContent);
    }
})