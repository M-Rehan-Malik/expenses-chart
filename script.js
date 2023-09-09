
const charValueArr = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

const amountArr = document.querySelectorAll('.amount-div');

for (let i=0;i<amountArr.length;i++) {
    amountArr[i].textContent = `$${charValueArr[i].amount}`;
}

const chartColumnArr = document.querySelectorAll('.chart-column');

let largestValue = 0
let charValueArrAmount = []
charValueArr.forEach(value=>{
    if (value.amount>largestValue) largestValue = value.amount;
    charValueArrAmount.push(value.amount)
})

chartColumnArr[charValueArrAmount.indexOf(largestValue)].classList.add('largest-value')


chartColumnArr.forEach(column=>{
    column.addEventListener('pointerenter', hoverFunction);
    column.addEventListener('pointerleave', leaveFunction);
})


function hoverFunction() {
     document.querySelector(`.${this.classList[1].substr(6,10)}`).classList.toggle('hidden-amount')
}

function leaveFunction() {
    document.querySelector(`.${this.classList[1].substr(6,10)}`).classList.toggle('hidden-amount')
}