import { ITransaction } from '../lib/types';

const transactions: ITransaction[] = [];

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 20; j++) {
    transactions.push({
      id: (i * 20 + j).toString(),
      user_id: i.toString(),
      amount: Math.ceil(((Math.random() * 1000) >> 1) + 100),
      type: Math.random() > 0.9 ? 'REPLENISH' : 'WRITE_OFF',
      created_at: new Date(
        1650000000000 + Math.round(Math.random() * 50000000000)
      ),
    });
  }
}

export default transactions;
