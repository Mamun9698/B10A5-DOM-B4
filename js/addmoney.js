// // add donation for Noakhali start
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

const addMoneyInput = document.getElementById('input-add-money').value;
const balance = document.getElementById('noakhali-balance').innerText;
const mainAmount = document.getElementById('default-balance').innerText;
// convert value to number
const addMoneyAmount = parseFloat(addMoneyInput);
const newBalance = parseFloat(balance);
const reduseValue = parseFloat(mainAmount);

// Validation

if (isNaN(addMoneyAmount) || addMoneyAmount <= 0) {
    alert("Please enter a valid amount!");
    return;
}

if(addMoneyAmount>mainAmount){
    alert('Insufficient funds in Main Account!');
    return;
} 

//Calculation

const transfarAmount = reduseValue-addMoneyAmount;
const addwithNoakhali = newBalance + addMoneyAmount;

  
document.getElementById('noakhali-balance').innerText = addwithNoakhali.toFixed(2);
document.getElementById('default-balance').innerText = transfarAmount.toFixed(2)
document.getElementById('input-add-money').value = "";

// add to transaction history
const p = document.createElement('p');
p.innerText = `Added: ${addMoneyAmount} Tk. Balance: ${addwithNoakhali}`;
    // p.innerText = `Added : ${addMoneyAmount} Tk. Balance : ${addwithNoakhali}`; 
    // console.log(p);

    // should be a common function
    document.getElementById('transaction-container').appendChild(p);
                                 
});

// add donation for Noakhali end

