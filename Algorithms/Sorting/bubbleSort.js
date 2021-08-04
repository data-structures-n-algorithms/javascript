const numbers = [99, 44, 2, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function swipe(array, first, second) {
  const aux = array[first]
  array[first] = array[second]
  array[second] = aux
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swipe(array, j, j + 1)
      }
    }
  }
}
