/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n > 9) {
    let sum = 0;
    let tmpArr = n.toString().split('');
    sum = tmpArr.reduce((accum, current) => +accum + +current);
    while (tmpArr.length > 1) {
      sum = tmpArr.reduce((accum, current) => +accum + +current);
      tmpArr = sum.toString().split('');
    }
    return sum;
  }
  return n;
}

module.exports = getSumOfDigits;
