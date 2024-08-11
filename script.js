function convert() {
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('Temperature').value);
    var convertedValue;
    var resultUnit;

    if (isNaN(temperature)) {
        document.getElementById('result').value = "Please enter a valid number";
        return;
    }

    // Perform conversion
    switch(fromUnit) {
        case 'Celcius':
            switch(toUnit) {
                case 'Fahrenheit':
                    convertedValue = (temperature * 9/5) + 32;
                    resultUnit = 'Fahrenheit';
                    break;
                default:
                    convertedValue = temperature;
                    resultUnit = 'Celcius';
            }
            break;
        case 'Fahrenheit':
            switch(toUnit) {
                case 'Celcius':
                    convertedValue = (temperature - 32) * 5/9;
                    resultUnit = 'Celcius';
                    break;
                default:
                    convertedValue = temperature;
                    resultUnit = 'Fahrenheit';
            }
            break;
    }
    document.getElementById('result').value = convertedValue.toFixed(2) + " " + resultUnit;
}
