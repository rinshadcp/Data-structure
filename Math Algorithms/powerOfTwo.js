function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(100));
console.log(isPowerOfTwo(8));

// Big-O = O(logn)  => (n=m/2 =>input reduce by half)
