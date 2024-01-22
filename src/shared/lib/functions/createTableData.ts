import { ITableColumn, ITableRow } from '../types';

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
