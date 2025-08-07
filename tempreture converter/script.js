document.getElementById("convertBtn").addEventListener('click',function(){
    const input1=parseFloat(document.getElementById('input1').value);
    const fromUnit=document.getElementById("dropdown1").value;
    const toUnit=document.getElementById("dropdown2").value;
    let result;

    if(input1===""){
        alert("please enter the valid number!");
        return;
    }

    switch (fromUnit) {
        case 'celsius':
            tempInCelsius = input1;
            break;
        case 'fahrenheit':
            tempInCelsius = (input1 - 32) * 5 / 9;
            console.log(tempInCelsius);
            break;
        case 'kelvin':
            tempInCelsius = input1 - 273.15;
            break;
    }

    switch (toUnit) {
        case 'celsius':
            result = tempInCelsius;
            break;
        case 'fahrenheit':
            result = (tempInCelsius * 9 / 5) + 32;
            break;
        case 'kelvin':
            result = tempInCelsius + 273.15;
            break;
    }

    document.getElementById('input2').value = result.toFixed(2);

});