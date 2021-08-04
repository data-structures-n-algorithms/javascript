function fibonacciRecursive(n) {
  if (n < 2) return n

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

function fibonacciIterative(n) {
  const arr = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr[n]
}
