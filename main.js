let toGram1;
let toGram2;
fromInput = document.getElementById('from-input');
toInput = document.getElementById('to-input');
fromButton = document.getElementById("from-button");
fromText = document.getElementById("from-text");
fromButton.addEventListener('click', (e)=>{
    if(e.target.classList.contains('from-gram')){
        fromText.innerText = 'gram';
        toGram1 = 1;
        if(fromInput.value !== ''){
            calculation1();
        }
        console.log('1');
    }
    else if(e.target.classList.contains('from-pound')){
        fromText.innerText = 'pound';
        toGram1 = 453.592;
        if(fromInput.value !== ''){
            calculation1();
        }
        console.log('2');
    }
    else if(e.target.classList.contains('from-ounce')){
        fromText.innerText = 'ounce';
        toGram1 = 28/3495;
        if(fromInput.value !== ''){
            calculation1();
        }
        console.log('3');
    }
    else if(e.target.classList.contains('from-Kg')){
        fromText.innerText = 'Kg';
        toGram1 = 1000;
        if(fromInput.value !== ''){
            calculation1();
        }
        console.log('4');
    }
})

toButton = document.getElementById("to-button");
toText = document.getElementById("to-text");
toButton.addEventListener('click', (e)=>{
    if(e.target.classList.contains('to-gram')){
        toText.innerText = 'gram';
        toGram2 = 1;
        if(toInput.value !== ''){
            calculation2();
        }
        console.log('1');
    }
    else if(e.target.classList.contains('to-pound')){
        toText.innerText = 'pound';
        toGram2 = 453.592;
        if(toInput.value !== ''){
            calculation2();
        }
        console.log('2');
    }
    else if(e.target.classList.contains('to-ounce')){
        toText.innerText = 'ounce';
        toGram2 = 28/3495;
        if(toInput.value !== ''){
            calculation2();
        }
        console.log('3');
    }
    else if(e.target.classList.contains('to-Kg')){
        toText.innerText = 'Kg';
        toGram2 = 1000;
        if(toInput.value !== ''){
            calculation2();
        }
        console.log('4');
    }
})

fromInput.addEventListener('input', calculation1)
toInput.addEventListener('input', calculation2)

function calculation1(){
    result = (parseFloat(fromInput.value)) * (toGram1 / toGram2)
    toInput.value = result;
}

function calculation2(){
    result = (parseFloat(toInput.value)) * (toGram2 / toGram1)
    fromInput.value = result;
}