
const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const kelvinInput = document.getElementById('kelvinInput');
const convertButton = document.getElementById('convertButton');


function convertTemperature() {
    const celsiusValue = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        const kelvinValue = celsiusValue + 273.15;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}


convertButton.addEventListener('click', convertTemperature);
convertTemperature();