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
function createObjects() {
  const photos = [];
  for (let i = 1; i < 26; i++) {
    const photo = {
      id : i,
      url : `photos/${i}.jpg`,
      description : 'bruh ,meh... ',
      likes :  RandomInteger(15, 200),
      comments : RandomInteger(0, 200),
    };
    photos.push(photo);
  }
}

