//Farenheit  to  Celcius Converter

function farenheitToCelcius(farenheit) {
  var celcius = (5 / 9) * (farenheit - 32);
  return celcius;
}

var myTemp = farenheitToCelcius(100);
console.log(myTemp);
