/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  const s1Arr = s1.split('').sort();
  const s2Arr = s2.split('').sort();
  const maxLength = Math.max(s1.length, s2.length);
  const countElemS1 = [];
  const countElemS2 = [];
  let tmpS1 = 1;
  let tmpS2 = 1;

  for (let i = 0; i < maxLength; i++) {
    if (maxLength < 2) {
      tmpS1 = 0;
      tmpS2 = 0;
    }

    if (s1Arr[i] === s1Arr[i + 1]) {
      tmpS1++;
    } else {
      countElemS1.push(tmpS1);
      tmpS1 = 1;
    }

    if (s2Arr[i] === s2Arr[i + 1]) {
      tmpS2++;
    } else {
      countElemS2.push(tmpS2);
      tmpS2 = 1;
    }

    if (s1Arr[i] !== undefined) {
      if (!s2Arr.includes(s1Arr[i])) {
        countElemS2.push(0);
      }
    }

    if (s2Arr[i] !== undefined) {
      if (!s1Arr.includes(s2Arr[i])) {
        countElemS1.push(0);
      }
    }
  }

  let tmp = 0;
  const minLength = Math.min(countElemS1.length, countElemS2.length);
  for (let i = 0; i < minLength; i++) {
    tmp = Math.min(countElemS1[i], countElemS2[i]);
    common += tmp;
  }

  return common;
}

module.exports = getCommonCharacterCount;
