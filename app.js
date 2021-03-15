//Listen for submit button
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate results
function calculateResults(e){
  console.log('Calculating...');
  //UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const loanAmount = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Calculate monthly payment
  const payments = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (loanAmount * payments * calculatedInterest)/(payments - 1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - loanAmount).toFixed(2);
  } else {
    console.log('Please check your numbers');
  }
  e.preventDefault();
}