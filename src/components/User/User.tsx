import React from 'react';

import useT from '../../hooks/useT';
import usersApi from '../../store/api/usersApi';
import UserOperationsTable from './UserOperationsTable';
import UserTitle from './UserTitle';
import UserTokensUsage from './UserTokensUsage';
import { ITransaction, IUser } from '../../lib/types';
import Pagination from '../Pagination/Pagination';
import Devider from '../Layout/Devider';

const User: React.FC<{ user: IUser }> = ({ user }) => {
  const t = useT();
  const [getUserTransactions, { data, isFetching }] =
    usersApi.useLazyGetUserTransactionsQuery();
  const [pageData, setPageData] = React.useState<ITransaction[]>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getUserTransactions(user.id);
  }, [getUserTransactions, user]);

  React.useEffect(() => {
    if (data) {
      setPageData(data.slice((page - 1) * 10, page * 10));
    }
  }, [data, page]);

  return (
    <>
      <UserTitle>{t.tokensUsage}</UserTitle>
      <UserTokensUsage user={user} data={data} />
      <Devider />
      <UserTitle>{t.operationsHistory}</UserTitle>
      <UserOperationsTable user={user} data={pageData} loading={isFetching} />
      <Pagination
        quantity={data && Math.ceil(data.length / 10)}
        current={page}
        onPageChange={setPage}
        tiny
      />
    </>
  );
};
export default User;
