/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrayDomains = domains;
  for (let i = 0; i < domains.length; i++) {
    arrayDomains[i] = arrayDomains[i].split('.');
  }
  for (let i = 0; i < arrayDomains.length; i++) {
    for (let j = 0; j < arrayDomains[i].length; j++) {
      arrayDomains[i][j] = `.${arrayDomains[i][j]}`;
    }
  }

  const countNoShadow = {}; // special for eslint №3
  let tmp = '';
  let j = 0;

  const noLoopFunction = function (i) {
    arrayDomains[i].reverse().reduce((count, dom) => {
      const noParamReassign = count; // special for eslint №1
      if (!noParamReassign[dom]) {
        if (tmp === '') {
          noParamReassign[dom] = 1;
          tmp = dom;
          j++;
        } else {
          if (!tmp.includes(dom)) {
            tmp = `${tmp}${dom}`;
          }
          if (!count[tmp]) {
            noParamReassign[tmp] = 1;
            j++;
          } else {
            noParamReassign[tmp]++;
            j++;
          }
        }
      } else {
        noParamReassign[dom]++;
        tmp = `${tmp}${dom}`;
        j++;
      }
      if (j >= arrayDomains[i].length) {
        tmp = '';
        j = 0;
      }
      return count;
    }, countNoShadow);
  };

  for (let i = 0; i < arrayDomains.length; i++) {
    noLoopFunction(i); // special for eslint №2
  }
  return countNoShadow;
}

module.exports = getDNSStats;
