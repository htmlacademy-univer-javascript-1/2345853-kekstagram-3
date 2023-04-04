import {photos} from './createObjects';

const pictureBlock = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');
const fragment = new DocumentFragment();

//console.log(photosInfo);

photos.forEach((photo)=> {
  const pictureBlockClone = pictureBlock.cloneNode(true);
  const img = pictureBlockClone.querySelector('.picture__img');
  const likes = pictureBlockClone.querySelector('.picture__likes');
  const comments = pictureBlockClone.querySelector('.picture__comments');
  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments;

  fragment.append(pictureBlockClone);
});

pictures.append(fragment);

export {pictures};
