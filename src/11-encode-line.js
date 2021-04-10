/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let encoded = '';
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    const letter = arr[i];
    while (arr[i] === arr[j + 1]) {
      count++;
      i++;
      j++;
    }
    if (count > 1) {
      encoded += `${count}${letter}`;
      count = 1;
    } else {
      encoded += letter;
    }
  }
  return encoded;
}

module.exports = encodeLine;
