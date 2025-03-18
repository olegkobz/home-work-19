function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}

console.log(sumBigIntegers('9007199254740991', '9007199254740991'));
console.log(sumBigIntegers('123456789123456789', '987654321987654321'));
console.log(sumBigIntegers('999999999999999999', '1'));
