const currencyElementOne = document.getElementById('currency-one');
const amountElemnetOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementTwo = document.getElementById('amount-two');
const rateEle = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculator(){
    const currencyOne = currencyElementOne.value;
    const currencyTow = currencyElementTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data =>{
        const rate = (data.rates[currencyTow]);
        rateEle.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTow}`;
        amountElementTwo.value = (amountElemnetOne.value * rate).toFixed(2);

    });

}

// Event 
currencyElementOne.addEventListener('change', calculator);
amountElemnetOne.addEventListener('input', calculator);
currencyElementTwo.addEventListener('change', calculator);
amountElementTwo.addEventListener('input', calculator);
swap.addEventListener('click', () =>{
    const temp = currencyElementOne.value;
    currencyElementOne.value = currencyElementTwo.value;
    currencyElementTwo.value = temp;
    calculator()
});
calculator();