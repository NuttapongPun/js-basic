function checkPrime(number) {
  // TODO: write code here
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }
  return count === 2 ? true : false;
}

module.exports = { checkPrime };
