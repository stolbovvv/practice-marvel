export function setThumbnailStyles(image) {
  if (image.match('image_not_available')) {
    return { objectPosition: 'left bottom' };
  } else {
    return { objectPosition: 'center center' };
  }
}
