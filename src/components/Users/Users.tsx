import React from 'react';

import Drawer from '../Drawer/Drawer';
import User from '../User/User';
import { IUser } from '../../lib/types';
import UsersList from './UsersList';

const Users: React.FC = () => {
  const [drawer, setDrawer] = React.useState(false);
  const [user, setUser] = React.useState<IUser>();

  const editHandler = (user: IUser) => {
    setUser(user);
    setDrawer(true);
  };

  return (
    <>
      <UsersList onEdit={editHandler} />
      <Drawer
        title={user?.email}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        {user && <User user={user} />}
      </Drawer>
    </>
  );
};
export default Users;
