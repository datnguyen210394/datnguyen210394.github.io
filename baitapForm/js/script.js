

// function createPassword(input) {
//     if (input.search(/\s/g)== -1&&input.search(/\d/g)! ==-1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// $('.sign-up').on('submit', function() {
//   console.log('form submit');
//   return false;
// });

document.getElementById('year')
let year = `<option value="">Year</option>`
for (let i = 1956; i <= 2040; i++) {
    year += `<option vaue="{i}">${i}</option>`
}
document.getElementById('year').innerHTML = year;

document.getElementById('day')
let day = `<option value="">Day</option>`
for (let i = 1; i <= 31; i++) {
    day += `<option vaue="{i}">${i}</option>`
}
document.getElementById('day').innerHTML = day;

document.getElementById('month')
let month = `<option value="">Month</option>`
for (let i = 1; i <= 12; i++) {
    month += `<option vaue="{i}">${i}</option>`
}
document.getElementById('month').innerHTML = month;