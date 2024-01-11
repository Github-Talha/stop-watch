const startButton = document.getElementById('start').addEventListener('click', () => {
    // get input value that user provide
    let inputValue = document.getElementById('time-input');
    let inputValueNumber = parseFloat(inputValue.value) * 60;
    let displayCount = document.getElementById('display-time')
    inputValue.value = '';

    const intervalId = setInterval(() => {
        displayCount.innerText = --inputValueNumber;
        if (inputValueNumber === 0) {
            clearInterval(intervalId)
        }
    },
        1000);

})