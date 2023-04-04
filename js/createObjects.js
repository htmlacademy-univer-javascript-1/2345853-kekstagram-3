import {RandomInteger, checkLength} from 'funcs.js';

const photos = [];
function createObjects() {

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
