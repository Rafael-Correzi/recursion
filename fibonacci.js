function fibs(num) {
  let fibOfNum = 1;
  let fibOfPreviousNum = 0
  let copy;
  let arr = [];
  if (num >= 0 ) {
    arr.push(0);
  }
  if (num >= 1 ) {
    arr.push(1);
  }
  for (let i = 2; i < num; i++) {
    copy = fibOfNum;
    fibOfNum += fibOfPreviousNum;
    fibOfPreviousNum = copy;
    arr.push(fibOfNum);
  }
  return arr;
}

console.log(fibs(10));

/*function fibsRec(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  else
}*/