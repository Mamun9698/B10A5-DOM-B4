document.getElementById('btnfeni-add-money').addEventListener('click',function(event){
    event.preventDefault();

const addMoneyInputFeni = document.getElementById('inputfeni-add-money').value;
const balanceFeni = document.getElementById('feni-balance').innerText;
const mainAmountFeni = document.getElementById('default-balance').innerText;
// convert value to number
const addMoneyAmountFeni = parseFloat(addMoneyInputFeni);
const newBalanceFeni = parseFloat(balanceFeni);
const reduseValueFeni = parseFloat(mainAmountFeni);

// Validation

if (isNaN(addMoneyAmountFeni) || addMoneyAmountFeni <= 0) {
    alert("Please enter a valid amount!");
    return;
}

if(addMoneyAmountFeni>mainAmountFeni){
    alert('Insufficient funds in Main Account!');
    return;
} 

//Calculation

const transfarAmountFeni = reduseValueFeni-addMoneyAmountFeni;
const addwithFeni = newBalanceFeni + addMoneyAmountFeni;

  
document.getElementById('feni-balance').innerText = addwithFeni.toFixed(2);
document.getElementById('default-balance').innerText = transfarAmountFeni.toFixed(2)
document.getElementById('inputfeni-add-money').value = "";
                                  
});