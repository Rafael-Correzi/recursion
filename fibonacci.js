function fibs(num) {
  let fibOfNum = 1;
  let fibOfPreviousNum = 0
  let copy;
  for (let i = 1; i < num; i++) {
    copy = fibOfNum;
    fibOfNum += fibOfPreviousNum;
    fibOfPreviousNum = copy;
  }
  return fibOfNum;
}

console.log(fibs(50));