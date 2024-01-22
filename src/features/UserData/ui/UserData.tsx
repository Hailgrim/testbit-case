import { FC, useEffect, useState } from 'react';

import { useT } from '@/shared/lib';
import { ITransaction, IUser } from '@/shared/server';
import { usersApi } from '@/shared/api';
import { Devider, Subtitle } from '@/widgets/Layout';
import { Pagination } from '@/shared/ui';
import { TransactionsChart, TransactionsTable } from '@/entities/Transaction';

export const UserData: FC<{ user: IUser }> = ({ user }) => {
  const t = useT();
  const [getUserTransactions, { data, isFetching }] =
    usersApi.useLazyGetUserTransactionsQuery();
  const [pageData, setPageData] = useState<ITransaction[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUserTransactions(user.id);
  }, [getUserTransactions, user]);

  useEffect(() => {
    if (data) {
      setPageData(data.slice((page - 1) * 10, page * 10));
    }
  }, [data, page]);

  return (
    <>
      <Subtitle>{t.tokensUsage}</Subtitle>
      <TransactionsChart legend={user.email} data={data} />
      <Devider />
      <Subtitle>{t.operationsHistory}</Subtitle>
      <TransactionsTable user={user} data={pageData} loading={isFetching} />
      <Pagination
        quantity={data && Math.ceil(data.length / 10)}
        current={page}
        onPageChange={setPage}
        tiny
      />
    </>
  );
};
