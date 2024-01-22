import { FC, useState } from 'react';

import { Layout, Subtitle } from '@/widgets/Layout';
import { useT } from '@/shared/lib';
import { UsersList } from '@/features/UsersList';
import { Drawer } from '@/shared/ui';
import { IUser } from '@/shared/server';
import { UserData } from '@/features/UserData';

export const MyOrganization: FC = () => {
  const t = useT();
  const [drawer, setDrawer] = useState(false);
  const [user, setUser] = useState<IUser>();

  const editHandler = (user: IUser) => {
    setUser(user);
    setDrawer(true);
  };

  return (
    <Layout h1={t.myOrganization}>
      <Subtitle>{t.users}</Subtitle>
      <UsersList onEdit={editHandler} />
      <Drawer
        title={user?.email}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        {user && <UserData user={user} />}
      </Drawer>
    </Layout>
  );
};
