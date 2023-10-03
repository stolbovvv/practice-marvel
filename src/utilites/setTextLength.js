export function setTextLength(str, length = 150) {
  if (str.length > length) return str.slice(0, length).trim() + '...';

  return str;
}
