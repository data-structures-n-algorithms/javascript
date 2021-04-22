// The goal of these 2 methods is to find the first repeated item of the array
// and return -1 if there are not repeated item

function firstRecurringCharacter(input) {
  let x = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (input[i] === x[j]) {
        return input[i];
      }
    }
    x.push(input[i]);
  }
  return -1;
}

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return -1;
}