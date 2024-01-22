export interface IReqListParams {
  page: number;
  search: string;
  orderBy: string;
}

export interface IResList<T = unknown> {
  data: T[];
  pages: number;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ADMINISTRATOR';
  subscription: ISubscription;
}

export interface ISubscription {
  id: string;
  user_id: string;
  tokens: number;
  plan: IPlan;
}

export interface IPlan {
  id: string;
  type: 'FREE' | 'BASIC' | 'PREMIUM' | 'ELITE';
  currency: string;
}

export interface ITransaction {
  id: string;
  user_id: string;
  type: 'REPLENISH' | 'WRITE_OFF';
  amount: number;
  created_at: Date;
}
