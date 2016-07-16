'use strict';

let sum = (n, accumulator = 0) => {
  if(n <= 0) {
    return accumulator;
  }else {
    return sum(n - 1, accumulator + n);
  }
};

console.log(sum(5));
console.log(sum(10000 * 1000));
