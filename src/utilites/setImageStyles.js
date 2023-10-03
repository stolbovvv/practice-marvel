export function setImageStyles(thumbnail) {
  if (thumbnail.includes('image_not_available')) return { objectPosition: 'left bottom' };

  return { objectPosition: 'center' };
}
