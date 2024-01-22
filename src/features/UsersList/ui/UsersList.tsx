import { FC, useEffect, useState } from 'react';

import { IUser } from '@/shared/server';
import { usersApi } from '@/shared/api';
import { Pagination, Search } from '@/shared/ui';
import { UsersTable } from '@/entities/User';

export const UsersList: FC<{
  onEdit?: (item: IUser) => void;
}> = ({ onEdit }) => {
  const [getUsers, getUsersReq] = usersApi.useLazyGetUsersQuery();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<'tokens:asc' | 'tokens:desc'>(
    'tokens:asc'
  );

  useEffect(() => {
    getUsers({ page, search, orderBy });
  }, [getUsers, page, search, orderBy]);

  return (
    <>
      <Search
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        changeDelay={500}
      />
      <UsersTable
        data={getUsersReq.data?.data}
        loading={getUsersReq.isFetching}
        error={Boolean(getUsersReq.error)}
        onEdit={onEdit}
        onDelete={(item) => console.log('delete', item)}
        onSort={() =>
          setOrderBy((prev) =>
            prev === 'tokens:asc' ? 'tokens:desc' : 'tokens:asc'
          )
        }
      />
      <Pagination
        quantity={getUsersReq.data?.pages}
        current={page}
        onPageChange={setPage}
        tiny
      />
    </>
  );
};
