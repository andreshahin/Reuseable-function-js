
// cash out 
document.getElementById('btn-cash-out-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = getInputFieldValueById('pin-number-cash');
    const amountNumber = getInputFieldValueById('cash-out-amount');
    const previousNumber = getTextValueById('previous-amount');
    if(pinNumber === 1234){
        const newBalance = previousNumber - amountNumber;
        document.getElementById('previous-amount').innerText = newBalance;
    }

})