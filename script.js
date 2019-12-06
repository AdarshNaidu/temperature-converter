function CtoF(c){
    return roundOff(c*9/5 + 32);
}

function CtoK(c){
    return roundOff(+c + 273.15);
}

function FtoC(f){
    return roundOff((f - 32)*5/9);
}

function KtoC(k){
    return roundOff(+k - 273.15);
}

function FtoK(f){
    let c = FtoC(f);
    return roundOff(CtoK(c));
}

function KtoF(k){
    let c = KtoC(k);
    return roundOff(CtoF(c));
}

function roundOff(n){
    return Math.round(n * 100)/100;
}

let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

function setUpEventListeners(){

    celciusInput.addEventListener('input', function(){
        if(celciusInput.value){
            fahrenheitInput.value = CtoF(celciusInput.value);
            kelvinInput.value = CtoK(celciusInput.value);
        }else{
            fahrenheitInput.value = null;
            kelvinInput.value = null;
        }
    });

    fahrenheitInput.addEventListener('input', function(){
        if(fahrenheitInput.value){
            celciusInput.value = FtoC(fahrenheitInput.value);
            kelvinInput.value = FtoK(fahrenheitInput.value);
        }else{
            celciusInput.value = null;
            kelvinInput.value = null;
        }
    });

    kelvinInput.addEventListener('input', function(){
        if(kelvinInput.value){
            celciusInput.value = KtoC(kelvinInput.value);
            fahrenheitInput.value = KtoF(kelvinInput.value);
        }else{
            fahrenheitInput.value = null;
            celciusInput.value = null;
        }
    });

}

setUpEventListeners();