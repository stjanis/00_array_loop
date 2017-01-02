const getStockSymbols = (stocks) => {
  let symbols = [];

  // for loop solution
  /*
  for(let i = 0; i < stocks.length; i++) {
    symbols.push(stocks[i].symbol);
  }
  */

  // forEach solution (can run also asynchronously, unlike for loop)
  stocks.forEach( stock => {
    symbols.push(stock.symbol);
  });

  return symbols;
};

let stockSymbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 }
]);

console.log(stockSymbols);
