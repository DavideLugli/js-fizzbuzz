// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// Stampiamo come sempre prima in console e poi su html

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    document.getElementById('fizz_list').innerHTML += '<li>' + 'FizzBuzz' + '</li>';
  } else if (i % 3 == 0) {
    console.log('Fizz');
    document.getElementById('fizz_list').innerHTML += '<li>' + 'Fizz' + '</li>';
  } else if (i % 5 == 0) {
    console.log('Buzz');
    document.getElementById('fizz_list').innerHTML += '<li>' + 'Buzz' + '</li>';
  } else {
    console.log(i);
    document.getElementById('fizz_list').innerHTML += '<li>' + i + '</li>';
  }
}



// con il while
// var i = 1;
// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 == 0) {
//     console.log('Fizz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
//   i++;
// }
