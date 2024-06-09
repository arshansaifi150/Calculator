const calculator = document.querySelector('.parent-container')
// console.log(calculator);
const display = document.querySelector('.whitespace')


const keys = document.querySelector('.calculator-container')
// console.log(calculator);

keys.addEventListener('click',(e)=>{
    // console.log(e.target);

    if (e.target.matches('button')) {
        //Do something
        const keyValue = e.target
        const action = keyValue.dataset.action
        // console.log(action);
        const keyContent = keyValue.textContent
        // console.log(keyContent);
        const displayNum = display.textContent
        

        if(!action){
            if(displayNum  === '0'){
                display.textContent = keyContent
            }else{
                display.textContent = displayNum + keyContent
            }
            
        }
    
        if (action === 'add' || action==='subtract' || action ==='multiply' || action ==='divide') {
            // console.log('operator key')
            
        }
    
        if(action === 'decimal'){
            
            display.textContent+= keyContent
            // display.textContent = displayNum + '.'
        }
    
        if (action === 'calculate') {
            console.log('equal key');
        }
    
        if (action === 'clear') {
            console.log('clear key');
        }

    }

    
    
    
})



