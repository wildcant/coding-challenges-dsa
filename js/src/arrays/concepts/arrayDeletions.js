// Utils.
const initArr = () => {
  const arr = Array(10)
  let length = 0

  for (let i = 0; i < 6; i++) {
    arr[i] = i
    length++
  }

  return [arr, length]
}

const printArr = (arr, length) => {
  for (let j = 0; j < length; j++) {
    console.log(arr[j])
  }
}

// Note arrays are queues.
const deleteFromEnd = () => {
  let [arr, length] = initArr()

  console.log('** Delete From End **')

  console.log('Array initial state')
  printArr(arr, length)

  length -= 1

  console.log('\nArray new state after "deletion"')
  printArr(arr, length)
}

// Notice this operation is costly because we have to loop over the array
// (aka O(n) where n is the number of elements in the array) in order
// to move the vacant spot an the end.
const deleteFromStart = () => {
  let [arr, length] = initArr()
  console.log('** Delete From Start **')
  console.log('Array initial state')
  printArr(arr, length)

  // shift all elements one place to the left.
  for (let i = 0; i < length; i++) {
    arr[i - 1] = arr[i]
  }

  console.log('\nArray new state after "deletion"')
  length -= 1
  printArr(arr, length)
}

// When defining complexity we take the worst case. For example here we say
// complexity of O(n) because the index could be the first element of the array.
const deleteFromIndex = () => {
  let [arr, length] = initArr()
  console.log('** Delete From Start **')
  console.log('Array initial state')
  printArr(arr, length)

  // shift k elements one place to the left, where k is the number of elements
  // to the right of the given index.
  const idx = 2
  console.log('\nDeleting element at index ', idx - 1)
  for (let i = idx; i < length; i++) {
    arr[i - 1] = arr[i]
  }
  console.log('\nArray new state after "deletion"')
  length -= 1
  printArr(arr, length)
}

;(() => {
  deleteFromEnd()
  deleteFromStart()
  deleteFromIndex()
})()
