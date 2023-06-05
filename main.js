let toGram1;
let toGram2;
fromButton = document.getElementById("from-button");
fromText = document.getElementById("from-text");
fromButton.addEventListener('click', (e)=>{
    if(e.target.classList.contains('from-gram')){
        fromText.innerText = 'gram';
        toGram1 = 1;
        console.log('1');
    }
    else if(e.target.classList.contains('from-pound')){
        fromText.innerText = 'pound';
        toGram1 = 453.592;
        console.log('2');
    }
    else if(e.target.classList.contains('from-ounce')){
        fromText.innerText = 'ounce';
        toGram1 = 28/3495;
        console.log('3');
    }
    else if(e.target.classList.contains('from-Kg')){
        fromText.innerText = 'Kg';
        toGram1 = 1000;
        console.log('4');
    }
})

toButton = document.getElementById("to-button");
toText = document.getElementById("to-text");
toButton.addEventListener('click', (e)=>{
    if(e.target.classList.contains('to-gram')){
        toText.innerText = 'gram';
        toGram2 = 1;
        console.log('1');
    }
    else if(e.target.classList.contains('to-pound')){
        toText.innerText = 'pound';
        toGram2 = 453.592;
        console.log('2');
    }
    else if(e.target.classList.contains('to-ounce')){
        toText.innerText = 'ounce';
        toGram2 = 28/3495;
        console.log('3');
    }
    else if(e.target.classList.contains('to-Kg')){
        toText.innerText = 'Kg';
        toGram2 = 1000;
        console.log('4');
    }
})

fromInput = document.getElementById('from-input');
toInput = document.getElementById('to-input')

fromInput.addEventListener('input', () => {
    if (fromInput.value == '') {
        fromInputValue = 0;
        result = fromInputValue * (toGram1 / toGram2);
    } else {
        fromInputValue = parseFloat(fromInput.value);
        result = fromInputValue * (toGram1 / toGram2);
    }
    toInput.value = result;
});