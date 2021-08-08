function simpleInterest(deposite, interest, year) {
  var r = interest / 100;
  var profit = deposite * (1 + r * year);
  return profit;
}
var myInvest = simpleInterest(550000, 2.7, 10);
console.log(myInvest);
