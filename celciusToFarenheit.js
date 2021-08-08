// Celcius to Farenheit Converter

function celciusToFarenheit(celcius) {
  var convertFaren = (celcius * 9) / 5 + 32;
  return convertFaren;
}
var myTemp = celciusToFarenheit(38);
console.log(myTemp);
