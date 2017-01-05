let exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 }
  ],
  [
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "NYN", price: 88.47, volume: 98275 }
  ]
];

// create new array method - concatAll
Array.prototype.concatAll = function() {
  let results = [];
  this.forEach(subArray => {
    subArray.forEach(item => {
      results.push(item);
    });
  });
  return results;
};
// note: concatAll is not particularly usefull:
// 1. if array is more than 2 levels deep, nested array will be returned
// 2. will not work on 1 level deep arrays

exchanges.concatAll().forEach(res => {
  console.log(res);
});

// ineffective forEach solution (as we need manually reach each level)
/*
exchanges.forEach(exchange => {
  exchange.forEach(stock => {
    console.log(JSON.stringify(stock));
  });
});
*/
