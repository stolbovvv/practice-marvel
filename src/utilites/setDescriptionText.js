export function setDescriptionText(text) {
  if (text.length > 150) {
    return text.slice(0, 150).trim() + '...';
  } else {
    return text;
  }
}
