function recursiveIsPrime(n, i = 2) {
  if (n <= 2) {
    return n === 2 ? true : false;
  }
  if (n % i === 0) {
    return false;
  }
  if (i * i > n) {
    return true;
  }
  return recursiveIsPrime(n, i + 1);
}
console.log(recursiveIsPrime(1));
console.log(recursiveIsPrime(2));
console.log(recursiveIsPrime(3));
console.log(recursiveIsPrime(111));

// Big-O = O(sqrt(n))
