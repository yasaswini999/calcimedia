let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C': //clears the enterted txt 
                display.innerText = '';
                break;
            case '=': // built-in js function to evaluation
                try{
                    display.innerText = eval(display.innerText);
                } catch { // for user good experience invalid expression are tackled
                    display.innerText = "Error! Entered only mathematical functions"
                }
                break;
            case '←': //remove last character only if its resent in inner text
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default: //displays on the screen
                display.innerText += e.target.innerText;
        }
    });
});