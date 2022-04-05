window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  const submit = document.getElementById('calc-submit');
  if (form) {
    setupIntialValues();
    submit.addEventListener("click", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 30000, years: 10, rate: 9};

  const UIAmount = document.getElementById('loan-amount');
  UIAmount.value = values.amount;

  const UIYears = document.getElementById('loan-years');
  UIYears.value = values.years;

  const UIRate = document.getElementById('loan-rate');
  UIRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const interestRate = (values.rate/100)/12;
  const totalPayments = Math.floor(values.years*12);
  const principle = values.amount;

  return (
    (principle*interestRate)/(1-Math.pow(1+interestRate),-totalPayments)
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyRate = document.getElementById('monthly-payment');
  monthlyRate.innerText ='$' + monthly;
}
