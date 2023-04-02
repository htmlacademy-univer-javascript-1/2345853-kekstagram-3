function RandomInteger (from, to) {
  const minimum = Math.ceil(Math.min(from, to));
  const maximum = Math.floor(Math.max(from, to));
  Math.floor(Math.random()*(maximum - minimum + 1) + minimum);
}

function checkLength(str, maxLength) {
  if(str.length <= maxLength) {
    return false;
  }
}

