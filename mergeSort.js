function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  else {
    let mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right, mid) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newArr.push(left[i++]);
    }
    else if (left[i] > right[j]) {
      newArr.push(right[j++]);
    }
    else if (left[i] === right[j]) {
      newArr.push(left[i++]);
      newArr.push(right[j++]);
    }
  }
  if (i === left.length && j < right.length) {
    while (j < right.length) {
      newArr.push(right[j++]);
    }
  }
  else if (j === right.length & i < left.length) {
    while (i < left.length) {
      newArr.push(left[i++]);
    }
  }
  return newArr;
}

function createRandomArr(length, max) {
  let randomArr = [];
  for (i = 0; i < length; i++) {
    randomArr.push(Math.ceil(Math.random() * max));
  }
  return randomArr;
}

let testArr = createRandomArr(50, 100);
console.log(testArr)
console.log(mergeSort(testArr));