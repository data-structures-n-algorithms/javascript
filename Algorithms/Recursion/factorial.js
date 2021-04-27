function factorialRecursive(number) {
  if(number === 1) {
    return 1;
  } else {
    return number * factorialRecursive(number-1)
  }
}

function factorialIterative(number) {
  if(number === 1) {
    return 1;
  }

  let result = 1;
  for(let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
}