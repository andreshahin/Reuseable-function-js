// add money
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = getInputFieldValueById('pin-number');
    const amountNumber = getInputFieldValueById('new-amount');
    const previousNumber = getTextValueById('previous-amount');
    if(pinNumber === 1234){
        const newBalance = amountNumber + previousNumber;
        document.getElementById('previous-amount').innerText = newBalance;
    }

})

