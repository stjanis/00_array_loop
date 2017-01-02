const getStockSymbols = (stocks) => stocks.map(stock => stock.symbol);

// for illustrative purposes, override array map method
/*
Array.prototype.map = function(projection) {
  // projection --> whole purpose of this function is to transform
  // item in the array into something else
  let results = [];
  // this.forEach is being added to the Array itself.
  // This, in the context of this function, is an Array.
  this.forEach( item => {
    results.push(projection(item))
  });
  return results;
}
*/

let stockSymbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 }
]);

console.log(stockSymbols);
