
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 30000, years: 10, rate: 9};
  expect(calculateMonthlyPayment(values)).toEqual('380.03')
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 29997.84, years: 10, rate: 9};
  expect(calculateMonthlyPayment(values)).toEqual('380.00')
});

it('should calculate with small loans', function() {
  const values = {amount: 100, years: 10, rate: 9};
  expect(calculateMonthlyPayment(values)).toEqual('1.27')
})
