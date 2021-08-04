const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

function partition(array, pivot, left, right) {
  const pivotValue = array[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }

  swap(array, right, partitionIndex)

  return partitionIndex
}

function quickSort(array, left, right) {
  const len = array.length
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }

  return array
}
