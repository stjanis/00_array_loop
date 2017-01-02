// we can combine map and filter methods together to write
// some pretty complex programs, without ever using a loop.
// the reason why to build programs without loops
// is that loops only work on data that is synchronously available
// e.g. data sitting somewhere in memory.

// However, loops are no good to us when we're trying to work
// with data that's arriving asynchronously like with events.

let stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

// create array that contains stock symbol when
// price is higher than minPrice
let filteredStockSymbols =
  stocks.
    filter(stock => stock.price > 150.00).
      map(stock => `${stock.symbol}: ${stock.price}`);

filteredStockSymbols.forEach(stock => console.log(stock));
