function RandomInteger (from, to) {
  let minimum = Math.ceil(Math.min(from, to));
  let maximum = Math.floor(Math.max(from, to));
  Math.floor(Math.random()*(maximum - minimum + 1) + minimum);
}

function checkLength(str, maxLength = 0) {
  if(str.length <= maxLength) {
    return false;
  }
}

