const numbers = [99, 44, 6, 2, 2, 1, 5, 63, 87, 283, 4, 0]

function smaller(array, smallIndex) {
  let small = smallIndex
  for (let i = small + 1; i < array.length; i++) {
    if (array[small] > array[i]) {
      small = i
    }
  }
  return small
}

function swipe(array, first, second) {
  const aux = array[first]
  array[first] = array[second]
  array[second] = aux
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    swipe(array, i, smaller(array, i))
  }
}
