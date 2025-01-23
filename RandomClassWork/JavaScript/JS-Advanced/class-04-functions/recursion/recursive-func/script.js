console.log(`====== RECURSIVE FUNCTION ======`);

// Recursive function
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(`${factorial(120)}`);

// Memoized version (dramatically faster)
const memoFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
};

console.log(memoFib(50)); // 12586269025 (instant vs ∞ time)
