document.getElementById('btnquota-add-money').addEventListener('click',function(event){
    event.preventDefault();

const addMoneyInputQuota = document.getElementById('inputquota-add-money').value;
const balanceQuota = document.getElementById('quota-balance').innerText;
const mainAmountQuota = document.getElementById('default-balance').innerText;
// convert value to number
const addMoneyAmountQuota = parseFloat(addMoneyInputQuota);
const newBalanceQuota = parseFloat(balanceQuota);
const reduseValueQuota = parseFloat(mainAmountQuota);

// Validation

if (isNaN(addMoneyAmountQuota) || addMoneyAmountQuota <= 0) {
    alert("Please enter a valid amount!");
    return;
}

if(addMoneyAmountQuota>mainAmountQuota){
    alert('Insufficient funds in Main Account!');
    return;
} 

//Calculation

const transfarAmountQuota = reduseValueQuota-addMoneyAmountQuota;
const addwithQuota = newBalanceQuota + addMoneyAmountQuota;

  
document.getElementById('quota-balance').innerText = addwithQuota.toFixed(2);
document.getElementById('default-balance').innerText = transfarAmountQuota.toFixed(2)
document.getElementById('inputquota-add-money').value = "";
                                  
});