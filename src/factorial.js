export function factorial(n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(5)