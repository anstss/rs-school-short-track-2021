/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const list = l;
  list.value = l.value;
  list.next = l.next;
  while (list.value === k) {
    list.value = list.next.value;
    list.next = list.next.next;
  }
  let currentNext = list.next; // 2........
  while (currentNext.next !== null) { // 3.......
    if (currentNext.next.value === k) { // 3
      currentNext.next = currentNext.next.next; // 4.....
    } else {
      currentNext = currentNext.next;
    }
  }

  return l;
}

module.exports = removeKFromList;
