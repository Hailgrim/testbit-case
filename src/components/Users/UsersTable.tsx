import React from 'react';

import { ITable, ITableColumn, IUser } from '../../lib/types';
import Table from '../Table/Table';
import useT from '../../hooks/useT';

const UsersTable: React.FC<
  Omit<ITable<IUser>, 'columns'> & {
    onSort?: () => void;
  }
> = ({ onSort, ...props }) => {
  const t = useT();

  const columns = React.useMemo<ITableColumn<IUser>[]>(() => {
    return [
      { key: 'id', primary: true, hide: true },
      { key: 'email', name: t.email },
      { key: 'name', name: t.name },
      { key: 'role', name: t.role },
      {
        key: 'subscription',
        name: t.subscription,
        value: (item) => {
          let first = item.subscription.plan.type[0].toUpperCase();
          return first.concat(
            item.subscription.plan.type.slice(1).toLowerCase()
          );
        },
      },
      {
        key: 'subscription',
        name: t.tokens,
        value: (item) =>
          `${item.subscription.tokens} ${item.subscription.plan.currency}`,
        sortable: true,
        sortDirection: 'ASC',
        onSort,
      },
    ];
  }, [t, onSort]);

  return <Table<IUser> {...props} columns={columns} />;
};
export default UsersTable;
