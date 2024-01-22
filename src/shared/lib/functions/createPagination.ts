import { IPaginationItem } from '../types';

/**
 * Creates an array with page numbers
 * @param {number} quantity Number of pages
 * @param {number} current Current page
 * @param {boolean} tiny Creates a tiny pagination array
 * @returns {IPaginationItem[]} Array with page numbers
 */
export const createPagination = (
  quantity: number,
  current: number,
  tiny?: boolean
): IPaginationItem[] => {
  const all = quantity > 0 ? quantity : 1;
  const curr = current > 0 && current < all + 1 ? current : 1;
  const borders = tiny ? 1 : 2;
  const list: IPaginationItem[] = [];
  let difference = 0;

  for (let i = curr - borders > 0 ? curr - borders : 1; i < curr; i++) {
    list.push({ key: i, value: i });
  }

  for (let i = curr; i < curr + borders + 1 && i < all + 1; i++) {
    list.push({ key: i, value: i });
  }

  if (list[0].value > 1) {
    difference = list[0].value - 1;

    if (difference > 1) {
      list.unshift({
        key: difference > 2 ? '...' : 2,
        value: (list[0].value + 1) >> 1,
      });
    }

    list.unshift({ key: 1, value: 1 });
  }

  if (list[list.length - 1].value < all) {
    difference = all - list[list.length - 1].value;

    if (difference > 1) {
      list.push({
        key: difference > 2 ? '...' : all - 1,
        value: (all + list[list.length - 1].value) >> 1,
      });
    }

    list.push({ key: all, value: all });
  }

  return list;
};
