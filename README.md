# Library for loan amortization schedule manipulation

## Install
```sh
npm i loan-schedule.js
```

## Init
```js
let LoanSchedule = require('loan-schedule.js');

let loanSchedule = new LoanSchedule({});
```

## Init with options
```js
let LoanSchedule = require('loan-schedule.js');

let loanSchedule = new LoanSchedule({
    DecimalDigit : 2,
    dateFormat: 'DD.MM.YYYY',
    prodCalendar: "ru"
});
```

## Interest by period
```js
let interest = loanSchedule.calculateInterestByPeriod({
                   from: '10.12.2015', 
                   to: '10.01.2016', 
                   amount: 1000, 
                   rate: 16.7
});
console.log(interest);
```

## Payment
```js
let payment = loanSchedule.calculateAnnuityPaymentAmount({
                  amount: 110000, 
                  term: 60, 
                  rate: 12.9
});
console.log(payment);
```

## Max Loan Amount
```js
let loanAmount = loanSchedule.calculateMaxLoanAmount({
                  paymentAmount: 2497.21,
                  term: 60,
                  rate: 12.9
});
console.log(loanAmount);
```

## Annuity loan schedule (payment amount will be calculated)
```js
let schedule = loanSchedule.calculateSchedule({
                   amount: 50000,
                   rate: 11.5,
                   term: 12,
                   paymentOnDay: 25,
                   issueDate: '25.10.2016',
                   scheduleType : loanSchedule.ANNUITY_SCHEDULE
}).payments.forEach((pay) => {
    console.log(pay.paymentDate + '\t|\t\t'
     + pay.initialBalance + '\t|\t\t'
     + pay.paymentAmount + '\t|\t\t'
     + pay.principalAmount + '\t|\t\t'
     + pay.interestAmount + '\t|\t\t'
     + pay.finalBalance
     );
});
```

## Annuity loan schedule (payment amount is set)
```js
let schedule = loanSchedule.calculateSchedule({
                   amount: 50000,
                   rate: 11.5,
                   term: 12,
                   paymentAmount: 40000,
                   paymentOnDay: 25,
                   issueDate: '25.10.2016',
                   scheduleType : loanSchedule.ANNUITY_SCHEDULE
}).payments.forEach((pay) => {
    console.log(pay.paymentDate + '\t|\t\t'
     + pay.initialBalance + '\t|\t\t'
     + pay.paymentAmount + '\t|\t\t'
     + pay.principalAmount + '\t|\t\t'
     + pay.interestAmount + '\t|\t\t'
     + pay.finalBalance
     );
});
```

## Differentiated loan schedule
```js
let schedule = loanSchedule.calculateSchedule({
                   amount: 50000,
                   rate: 11.5,
                   term: 12,
                   paymentOnDay: 25,
                   issueDate: '25.10.2016',
                   scheduleType : loanSchedule.DIFFERENTIATED_SCHEDULE
}).payments.forEach((pay) => {
    console.log(pay.paymentDate + '\t|\t\t'
     + pay.initialBalance + '\t|\t\t'
     + pay.paymentAmount + '\t|\t\t'
     + pay.principalAmount + '\t|\t\t'
     + pay.interestAmount + '\t|\t\t'
     + pay.finalBalance
     );
});
```

## Bubble loan schedule
```js
let schedule = loanSchedule.calculateSchedule({
                   amount: 50000,
                   rate: 11.5,
                   term: 12,
                   paymentOnDay: 25,
                   issueDate: '25.10.2016',
                   scheduleType : loanSchedule.BUUBLE_SCHEDULE
}).payments.forEach((pay) => {
    console.log(pay.paymentDate + '\t|\t\t'
     + pay.initialBalance + '\t|\t\t'
     + pay.paymentAmount + '\t|\t\t'
     + pay.principalAmount + '\t|\t\t'
     + pay.interestAmount + '\t|\t\t'
     + pay.finalBalance
     );
});
```
