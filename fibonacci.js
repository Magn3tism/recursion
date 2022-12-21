function fibonaccci(num) {
  if (num <= 2) return 1;
  return fibonaccci(num - 1) + fibonaccci(num - 2);
}
