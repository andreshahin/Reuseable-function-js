
// add money
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = getInputFieldValueById('pin-number');
    const amountNumber = getInputFieldValueById('new-amount');
    const previousNumber = getTextValueById('previous-amount');

    // validation check 
    if(isNaN(amountNumber)){
        alert('add money is failed');
        return;
    }

    if(pinNumber === 1234){
        const newBalance = amountNumber + previousNumber;
        document.getElementById('previous-amount').innerText = newBalance;

        // add transaction history
        const p = document.createElement('p');
        p.innerText =`Added: ${amountNumber} Tk. New Balance:${newBalance}`;
        console.log(p);
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('something is wrong');
    }

})

