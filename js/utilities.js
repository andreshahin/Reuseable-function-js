function getInputFieldValueById(id){
   const inputValue =  document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
   return inputNumber;
   
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber =parseFloat(textValue);
    return textNumber;
}


function showSectionId(id){
    // hidden all section
document.getElementById('add-money-form').classList.add('hidden');
document.getElementById('cash-out-form').classList.add('hidden');
document.getElementById('transaction-section').classList.add('hidden');

// show the section provide as a parameter 
document.getElementById(id).classList.remove('hidden');

}