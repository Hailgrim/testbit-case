import React from 'react';

import { IUser } from '../../lib/types';
import usersApi from '../../store/api/usersApi';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import UsersTable from './UsersTable';

const UsersList: React.FC<{
  onEdit?: (item: IUser) => void;
}> = ({ onEdit }) => {
  const [getUsers, getUsersReq] = usersApi.useLazyGetUsersQuery();
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [orderBy, setOrderBy] = React.useState<'tokens:asc' | 'tokens:desc'>(
    'tokens:asc'
  );

  React.useEffect(() => {
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
      />
    </>
  );
};
export default UsersList;
