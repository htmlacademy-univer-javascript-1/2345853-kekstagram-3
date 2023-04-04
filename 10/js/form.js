import {closeImgUpload} from './bigPicture.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
  errorTextTag: 'span'
});

function validComment(comment){
  return comment.length >= 20 && comment.length <=140;
}


pristine.addValidator(
  form.querySelector('.text__description'),
  validComment,
  'От 20 до 140 с имволов');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(pristine.validate()) {
    closeImgUpload();
  }
});
