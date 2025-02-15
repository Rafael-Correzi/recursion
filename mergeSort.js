function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  else {
    let mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right, mid);
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
    else if (left[i] === right[i]) {
      newArr.push(left[i++]);
      newArr.push(right[j++]);
    }
  }
  if (i === left.length && j < right.length) {
    while (j < right.length) {
      newArr.push(right[j++]);
    }
  }
  else {
    while (i < left.length) {
      newArr.push(left[i++]);
    }
  }
  return newArr;
}


console.log(mergeSort([1, 3, 2, 5]))