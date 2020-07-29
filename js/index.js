const currencyElementOne = document.getElementById('currency-one'),
   currencyElementTwo = document.getElementById('currency-two'),
   amountElementOne= document.getElementById('amount-one'),
   amountElementTwo= document.getElementById('amount-two'),

   rateEl = document.getElementById('rate'),
   swap = document.getElementById('swap');

currencyElementOne.addEventListener('change', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
amountElementTwo.addEventListener('input', calculate);
swap.addEventListener('click', () =>{
   const temp = currencyElementOne.value;
   currencyElementOne.value = currencyElementTwo.value;
   currencyElementTwo.value = temp;
   calculate();
});

function calculate(){
   const curreny_one = currencyElementOne.value;
   const curreny_two = currencyElementTwo.value;
   const URL = `https://api.exchangerate-api.com/v4/latest/${curreny_one}`;
   fetch(URL)
   .then(res => res.json())
   .then(data => {
      const rate = data.rates[curreny_two];
      rateEl.innerText = `1 ${curreny_one} = ${rate} ${curreny_two}`
      amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
   })
}

calculate();