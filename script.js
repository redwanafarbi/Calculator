let string = "";

let Btns = document.querySelectorAll('.button');
let inputText = document.querySelector('input');
let multiplySign = document.querySelector('multiply');

Array.from(Btns).forEach((btn)=>{
    btn.addEventListener('click',(val)=>{
        if(val.target.innerHTML == '='){
            string = eval(string);
            // inputText.value = string;
        }else if (val.target.innerHTML == 'AC'){
            string = "";
            // inputText.value = string;
        }else if(val.target.innerHTML == 'DC'){
            string = string.substring(0,string.length-1);
        }else{
            string = string + val.target.innerHTML;
        }
        
        inputText.value = string;
        console.log(string);
    })
})
