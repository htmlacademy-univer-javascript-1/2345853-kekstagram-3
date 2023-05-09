function RandomInteger (from, to) {
  const minimum = Math.ceil(Math.min(from, to));
  const maximum = Math.floor(Math.max(from, to));
  return Math.floor(Math.random()*(maximum - minimum + 1) + minimum);
}

function checkLength(str, maxLength) {
  if (str.length <= maxLength) {
    return false;
  }
}

export {RandomInteger};
export {checkLength};
