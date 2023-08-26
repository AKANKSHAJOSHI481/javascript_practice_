const countvalue = document.querySelector('.middle');
console.log(countvalue.innerText);

const increment=()=>{
    let value = parseInt(countvalue.innerText);
    value = value + 1;
    countvalue.innerText = value;
    
};

const decrement=()=>{
    let value = parseInt(countvalue.innerText);
    value = value - 1;
    countvalue.innerText = value;
};