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
