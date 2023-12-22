import { IPaginationItem, ITableColumn, ITableRow } from './types';

/**
 * Creates an array with data values
 * @param {ITableColumn<T>[]} columns An object with data columns
 * @param {T[]} data Consumed data
 * @returns {ITableRow<T>[]} Array with data values
 */
export const createTableData = <T = unknown>(
  columns: ITableColumn<T>[],
  data?: T[]
): ITableRow<T>[] => {
  let primaryKey: string | null = null;

  // Check the presence of the primary key
  for (const column of columns) {
    if (column.primary === true) {
      primaryKey = String(column.key);
    }
  }

  return data
    ? data.map((item, index) => {
        const row: ITableRow<T> = {
          key: String(index),
          data: item,
          values: [],
        };

        if (item instanceof Object) {
          // Set the primary key value
          if (primaryKey && primaryKey in item) {
            row.key = String(item[primaryKey as keyof typeof item]).concat(
              String(index)
            );
          }

          // Get data values
          for (const column of columns) {
            if (!column.hide && String(column.key) in item) {
              row.values.push(
                column.value
                  ? column.value(item)
                  : String(item[column.key as keyof typeof item])
              );
            }
          }
        }

        return row;
      })
    : [];
};

/**
 * Format default date
 * @param {Date} date Default date
 * @param {string} locale Locale code
 * @returns {string} 'DD.MM.YY, HH:MM:SS'
 */
export const formatDate = (args: {
  date: Date;
  locale: string;
  type?: 'short' | 'tiny';
}): string => {
  let result = '';
  const options: Intl.DateTimeFormatOptions = {};

  if (args.type === 'short') {
    options.year = 'numeric';
    options.month = 'short';
    options.day = '2-digit';
  } else if (args.type === 'tiny') {
    options.year = 'numeric';
    options.month = '2-digit';
  } else {
    options.year = '2-digit';
    options.month = '2-digit';
    options.day = '2-digit';
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.second = '2-digit';
  }

  result = new Intl.DateTimeFormat(args.locale, options).format(args.date);

  if (args.type === 'short') {
    const date = result.split(' ');
    delete date[3];
    date[1] = `${date[1].slice(0, 1).toUpperCase()}${date[1].slice(1, -1)}`;
    result = date.join(' ');
  }

  if (args.type === 'tiny') {
    result = result.split('.').reverse().join('-');
  }

  return result;
};

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
