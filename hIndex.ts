function hIndex(len: number, citations: number[]) {
  const weights = new Array(len + 1).fill(0);
  let hIndex: number = 0;
  let counter: number = 0;

  citations.forEach(c => c >= len ? weights[len] += 1 : weights[c] += 1);

  for (let i = len; i >= 0; i--) {
    counter += weights[i];
    
    if (counter >= i) {
      hIndex = i;
      break;
    }
  }

  return hIndex;
}

console.log(hIndex(5, [1, 5, 3, 4, 2]));
console.log(hIndex(8, [1, 13, 1, 3, 5, 2, 21, 8]));
console.log(hIndex(10, [5, 2, 16, 11, 4, 8, 23, 4, 1, 3]));
console.log(hIndex(5, [100, 2, 1, 1, 1]))
console.log(hIndex(5, [10, 1, 5, 3, 15]))