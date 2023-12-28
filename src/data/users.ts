import { IUser } from '../lib/types';

const users: IUser[] = [];

for (let i = 0; i < 100; i++) {
  users.push({
    id: i.toString(),
    email: `email${i}@mail.com`,
    name:
      Math.random() > 0.5
        ? 'John'
        : Math.random() > 0.5
        ? 'Stacy'
        : Math.random() > 0.5
        ? 'Tom'
        : 'Lana',
    role: Math.random() > 0.9 ? 'ADMINISTRATOR' : 'USER',
    subscription: {
      id: i.toString(),
      user_id: i.toString(),
      tokens: Math.ceil(Math.random() * 10000),
      plan: {
        id: i.toString(),
        type:
          Math.random() > 0.5
            ? 'FREE'
            : Math.random() > 0.5
            ? 'BASIC'
            : Math.random() > 0.5
            ? 'PREMIUM'
            : 'ELITE',
        currency: 'USDT',
      },
    },
  });
}

export default users;
