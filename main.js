let toGram1;
let toGram2;


// const fromDropdown = document.getElementById('from-dropdown');
const toDropdown = document.getElementById('to-dropdown');
const unitContainer = document.getElementById('unit-container');
const unitDropdown = document.getElementById('units-dropdown');

unitContainer.addEventListener('click', function(){
    unitDropdown.style.display = 'flex';
    unitDropdown.style.flexDirection = 'column';
    unitDropdown.style.alignItems = 'center';
})
unitContainer.addEventListener('mouseleave', function(){
    unitDropdown.style.display = 'none';
})

document.getElementById('area').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Area';
    event.stopPropagation();
    
})

document.getElementById('pressure').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Pressure';
    event.stopPropagation();
    
})

document.getElementById('mass').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Mass';    
    event.stopPropagation();

    const fromButton = document.getElementById('from-button');
    fromButton.lastChild.remove();
    const toButton = document.getElementById('to-button');
    toButton.lastChild.remove();
    
    // FROM DROP DOWNS

    const fromDropdown = document.createElement('div');
    fromDropdown.className = 'from-dropdown';
    fromDropdown.id = 'from-dropdown';
    
    fromButton.appendChild(fromDropdown);

    const fromGram = document.createElement('button');
    fromGram.innerHTML = 'Gram';
    fromGram.className = 'from-gram button';

    const fromPound = document.createElement('button');
    fromPound.innerHTML = 'Pound';
    fromPound.className = 'from-pound button';

    const fromOunce = document.createElement('button');
    fromOunce.innerHTML = 'Ounce';
    fromOunce.className = 'from-ounce button';

    const fromKg = document.createElement('button');
    fromKg.innerHTML = 'kiloGram';
    fromKg.className = 'from-kg button';

    fromDropdown.appendChild(fromGram);
    fromDropdown.appendChild(fromPound);
    fromDropdown.appendChild(fromOunce);
    fromDropdown.appendChild(fromKg);

    // TO DROP DOWNS

    const toDropdown = document.createElement('div');
    toDropdown.className = 'to-dropdown';
    toDropdown.id = 'to-dropdown';

    toButton.appendChild(toDropdown);

    const toGram = document.createElement('button');
    toGram.innerHTML = 'Gram';
    toGram.className = 'to-gram button';

    const toPound = document.createElement('button');
    toPound.innerHTML = 'Pound';
    toPound.className = 'to-pound button';

    const toOunce = document.createElement('button');
    toOunce.innerHTML = 'Ounce';
    toOunce.className = 'to-ounce button';

    const toKg = document.createElement('button');
    toKg.innerHTML = 'kiloGram';
    toKg.className = 'to-kg button';

    toDropdown.appendChild(toGram);
    toDropdown.appendChild(toPound);
    toDropdown.appendChild(toOunce);
    toDropdown.appendChild(toKg);
    
})

  

document.getElementById('length').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Length';
    event.stopPropagation();

    const fromButton = document.getElementById('from-button');
    fromButton.lastChild.remove();
    const toButton = document.getElementById('to-button');
    toButton.lastChild.remove();

    // FROM DROP DOWNS
    
    const fromDropdown = document.createElement('div');
    fromDropdown.className = 'from-dropdown';
    fromDropdown.id = 'from-dropdown';
    
    fromButton.appendChild(fromDropdown);

    const fromMeter = document.createElement('button');
    fromMeter.innerHTML = 'Meter';
    fromMeter.className = 'from-meter button';

    const fromFeet = document.createElement('button');
    fromFeet.innerHTML = 'Feet';
    fromFeet.className = 'from-feet button';

    const fromYard = document.createElement('button');
    fromYard.innerHTML = 'Yard';
    fromYard.className = 'from-yard button';

    const fromKm = document.createElement('button');
    fromKm.innerHTML = 'kiloMeter';
    fromKm.className = 'from-km button';

    fromDropdown.appendChild(fromMeter);
    fromDropdown.appendChild(fromFeet);
    fromDropdown.appendChild(fromYard);
    fromDropdown.appendChild(fromKm);

    // TO DROP DOWNS

    const toDropdown = document.createElement('div');
    toDropdown.className = 'to-dropdown';
    toDropdown.id = 'to-dropdown';

    toButton.appendChild(toDropdown);

    const toMeter = document.createElement('button');
    toMeter.innerHTML = 'Meter';
    toMeter.className = 'to-meter button';

    const toFeet = document.createElement('button');
    toFeet.innerHTML = 'Feet';
    toFeet.className = 'to-feet button';

    const toYard = document.createElement('button');
    toYard.innerHTML = 'Yard';
    toYard.className = 'to-yard button';

    const toKm = document.createElement('button');
    toKm.innerHTML = 'kiloMeter';
    toKm.className = 'to-km button';

    toDropdown.appendChild(toMeter);
    toDropdown.appendChild(toFeet);
    toDropdown.appendChild(toYard);
    toDropdown.appendChild(toKm);
    
})

document.getElementById('temprature').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Temprature';
    event.stopPropagation();
    
})

document.getElementById('volume').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Volume';
    event.stopPropagation();
    
})

document.getElementById('time').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Time';
    event.stopPropagation();
    
})

document.getElementById('energy').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Energy';
    event.stopPropagation();
    
})

document.getElementById('speed').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Speed';
    event.stopPropagation();
    
})

document.getElementById('digital-storage').addEventListener('click', function(event){
    unitDropdown.style.display = 'none';
    document.getElementById('unit').innerHTML = 'Digital Storage';
    event.stopPropagation();
    
})





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
        }else{
        calculation1();}
        console.log('1');
    }
    else if(e.target.classList.contains('to-pound')){
        toText.innerText = 'pound';
        toGram2 = 453.592;
        if(toInput.value !== ''){
            calculation2();
        }else{
            calculation1();}
        console.log('2');
    }
    else if(e.target.classList.contains('to-ounce')){
        toText.innerText = 'ounce';
        toGram2 = 28/3495;
        if(toInput.value !== ''){
            calculation2();
        }else{
            calculation1();}
        console.log('3');
    }
    else if(e.target.classList.contains('to-Kg')){
        toText.innerText = 'Kg';
        toGram2 = 1000;
        if(toInput.value !== ''){
            calculation2();
        }else{
            calculation1();}
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