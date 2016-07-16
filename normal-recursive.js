'use strict';

let sum = (n) => {
  if(n <= 0) {
    return 0;
  }else {
    return n + sum(n - 1);
  }
};

console.log(sum(5));
console.log(sum(10000 * 1000));
