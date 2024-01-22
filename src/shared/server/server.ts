import { delay, http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

import users from './users';
import transactions from './transactions';
import { IResList, ITransaction, IUser } from './types';

const worker = setupWorker(
  http.get('/api/user/list', async ({ request }) => {
    const queryParams =
      request.url
        .split('?')[1]
        ?.split('&')
        .map((param) => param.split('=')) || [];

    let page = '1';
    let search = '';
    let orderBy = 'tokens:asc';

    for (const param of queryParams) {
      switch (param[0]) {
        case 'page':
          page = param[1];
          break;
        case 'search':
          search = param[1];
          break;
        case 'orderBy':
          orderBy = decodeURIComponent(param[1]);
          break;
      }
    }

    const data = users
      .filter(
        (user) => user.email.includes(search) || user.name.includes(search)
      )
      .sort((a, b) => {
        if (orderBy === 'tokens:asc') {
          return a.subscription.tokens > b.subscription.tokens ? -1 : 1;
        } else {
          return a.subscription.tokens < b.subscription.tokens ? -1 : 1;
        }
      });

    await delay(500);

    return HttpResponse.json<IResList<IUser>>(
      {
        pages: Math.ceil(data.length / 10),
        data: data.slice((Number(page) - 1) * 10, Number(page) * 10),
      },
      { status: 200, statusText: 'OK' }
    );
  }),

  http.get('/api/user/:id/transactions', async ({ params }) => {
    const id = params.id || 0;
    await delay(500);
    return HttpResponse.json<ITransaction[]>(
      transactions
        .filter((transaction) => transaction.user_id === id)
        .sort((a, b) => (a.created_at > b.created_at ? -1 : 1)),
      {
        status: 200,
        statusText: 'OK',
      }
    );
  })
);

export async function startMockServer() {
  return await worker.start({ onUnhandledRequest: 'bypass' });
}
