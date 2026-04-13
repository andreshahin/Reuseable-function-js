
// cash out 
document.getElementById('btn-cash-out-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = getInputFieldValueById('pin-number-cash');
    const amountNumber = getInputFieldValueById('cash-out-amount');
    const previousNumber = getTextValueById('previous-amount');

    // validation check
    if(isNaN(amountNumber)){
        alert('cash out is failed');
        return;
    }

    if(pinNumber === 1234){
        const newBalance = previousNumber - amountNumber;
        document.getElementById('previous-amount').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-300');
        div.innerHTML=`
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p> ${amountNumber} withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);

    }else{
        alert('something is wrong');
    }

})