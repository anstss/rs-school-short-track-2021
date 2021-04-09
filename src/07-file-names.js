/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let j = 1;
  let k = 1;
  const result = [];
  let elem = '';
  for (let i = 0; i < names.length; i++) {
    if (result.includes(names[i])) {
      if (names[i].includes(`(${j - 1})`)) {
        elem = names[i].concat(`(${k})`);
        result.push(elem);
        k++;
      } else {
        elem = names[i].concat(`(${j})`);
        result.push(elem);
        j++;
      }
    } else {
      result.push(names[i]);
    }
  }
  return result;
}

module.exports = renameFiles;
