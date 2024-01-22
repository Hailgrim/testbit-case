/**
 * Creates a shortened version of a number
 * @param {number} num Number of pages
 * @returns {string} Array with page numbers
 */
export const createShortNumber = (num: number): string => {
  let result = String(num);
  if (num > 999999) {
    result = `${(Math.round(num / 100000) / 10).toFixed(1)}KK`;
  } else if (num > 9999) {
    result = `${Math.round(num / 1000)}K`;
  }
  return result;
};
