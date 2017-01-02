// function that takes 2 params and returns stocks that
// has higher price than minPrice

// forEach solution
/*
const getStocksOver = (stocks, minPrice) => {
  let results = [];
  stocks.forEach( stock => {
    if(stock.price > minPrice) {
      results.push(`${stock.symbol}: ${stock.price}`);
    };
  });
  return results;
};
*/

const getStocksOver = (stocks, minPrice) => stocks.filter(stock => stock.price > minPrice)

// redefine Array filter method for illustrative purposes
/*
Array.prototype.filter = function(predicate) {
  // predicate --> function that accepts value and returns bool
  let results = [];
  this.forEach( item => {
    if(predicate(item)) {
      results.push(item);
    };
  });
  return results;
};
*/

let expensiveStocks = getStocksOver([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 }
],
150.00);

console.log(expensiveStocks);
