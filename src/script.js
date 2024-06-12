const Display = document.querySelector('#display')
console.log(Display.value);
function appendToDisplay(input){
        Display.value+=input;
    // console.log(Display.value)
    
    
}

function calculate(){
    // console.log(Display.value)
    if(Display.value == undefined){
        Display.value="Enter correct value"
    }else{
    try{
        Display.value = eval(Display.value);
    }
    catch{
        Display.value="Enter correct value"
    }
    }
    
    
}

function clearDisplay(){
    Display.value =''
}