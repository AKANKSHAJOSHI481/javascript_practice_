const inputSlider = document.querySelector("[data-lengthSlider]");  
// Using custom attribute - data-lengthSlider

const lengthDisplay = document.querySelector("[data-length]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copymsg]")
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-password")

const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_-+={}[]|?.,;:"<>?/';
// 
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength circle to gray
setIndicator("#ccc");
// Copycontent
async function Copycontent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied!"
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add('active');
    setTimeout(()=>{
        copyMsg.classList.remove('active');
    }, 2000);
}
// handleSlider
// set passwordlength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength-min)*100/(max-min)) + "% 100";
}
// generatePassword
// Set indicator
function setIndicator(color){
    indicator.style.backgroundColor = color;
    // shadow
    indicator.style.boxShadow = "1px 1px 10px" + color;
}

// getrandominteger - range
function getRandomInteger(min, max){
    return Math.floor(Math.random()*(max-min)) + min; // generates a number between min and max
}
// getrandomUppercase
function getRandomUppercase(){
    return String.fromCharCode(getRandomInteger(65, 91));
}
// getrandomLowercase
function getRandomLowercase(){
    return String.fromCharCode(getRandomInteger(97, 123));
}
// generateRandomNumber
function generateRandomNumber(){
    return getRandomInteger(0,9);
}
// getrandomsymbol
function getRandomSymbol(){
    const randNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

// calcstrength

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hassymbol = false;
    if(upperCaseCheck.checked) hasUpper = true;
    if(lowerCaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hassymbol = true;
    if(hasUpper && hasLower &&(hasNum || hassymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNum || hassymbol) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkBox) => {
    checkBox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', (e)=>{
    if(passwordDisplay.value){
        Copycontent();
    }
});

function shufflePassword(array){
    // fisher yates method
    for(let i = array.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

generateBtn.addEventListener('click', ()=>{
    // if none of the checkbox are selected
    if(checkCount<=0) return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
    // remove old password
    // console.log("Starting the journey");
    password = "";
   

    let funcArr=[];
    if(upperCaseCheck.checked){
        funcArr.push(getRandomUppercase);
    }
    if(lowerCaseCheck.checked){
        funcArr.push(getRandomLowercase);
    }
    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funcArr.push(getRandomSymbol);
    }
  
    // compulsory addition
    for(let i = 0; i<funcArr.length; i++){
        password += funcArr[i]();
    }
    // console.log("Compusory Addition done")
    for(let i = 0; i<passwordLength-funcArr.length; i++){
        let randIndex = getRandomInteger(0, funcArr.length);
        // console.log("randIndex ", randIndex);
        password += funcArr[randIndex]();
    }

    // shuffle password
    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;
    calcStrength();
    // console.log(password);
})