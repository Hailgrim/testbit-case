import { FC, useMemo } from 'react';

import { ITransaction, IUser } from '@/shared/server';
import { ITableColumn, formatDate, useT } from '@/shared/lib';
import { Table } from '@/shared/ui';

export const TransactionsTable: FC<{
  user: IUser;
  data?: ITransaction[];
  loading?: boolean;
}> = ({ user, data, loading }) => {
  const t = useT();

  const columns = useMemo<ITableColumn<ITransaction>[]>(() => {
    return [
      { key: 'id', primary: true, hide: true },
      {
        key: 'type',
        name: t.type,
        value: (item) =>
          item.type === 'REPLENISH' ? t.withdrawal : t.depositing,
      },
      {
        key: 'amount',
        name: t.sum,
        value: (item) => (
          <span className={item.type === 'REPLENISH' ? 'error' : 'success'}>
            {item.type === 'REPLENISH' ? '-' : '+'}
            {`${item.amount} ${user.subscription.plan.currency}`}
          </span>
        ),
      },
      {
        key: 'created_at',
        name: t.date,
        value: (item) =>
          formatDate({
            date: new Date(item.created_at),
            locale: t.localeCode,
          }).replace(', ', ',\r\n'),
      },
    ];
  }, [t, user]);

  return (
    <Table<ITransaction>
      columns={columns}
      data={data}
      loading={loading}
      fixed
    />
  );
};
