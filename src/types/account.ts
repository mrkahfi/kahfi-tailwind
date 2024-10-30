export interface Account {
    id: number;
    lastUpdated: string;
    initialAccount: string;
    accountNumber: string;
    amount: string;
    status: string;
  }
  
  export const accounts: Account[] = [
    {
      id: 1,
      lastUpdated: '2024-10-16 19:21:07',
      initialAccount: 'DONYRISW02',
      accountNumber: '693817646229',
      amount: 'Rp. 70.000,00',
      status: 'Online',
    },
    {
      id: 2,
      lastUpdated: '2024-10-16 19:40:13',
      initialAccount: 'Edo',
      accountNumber: '4120363803',
      amount: 'Rp. 57.518,00',
      status: 'Online',
    },
    {
      id: 3,
      lastUpdated: '2024-10-25 10:42:55',
      initialAccount: 'Dessi',
      accountNumber: '2280334351',
      amount: 'Rp. 0,00',
      status: 'Online',
    },
  ];