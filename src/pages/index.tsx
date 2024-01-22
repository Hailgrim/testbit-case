import { FC } from 'react';
import { Routes, Route } from 'react-router';

import { MyOrganization } from './MyOrganization';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MyOrganization />} />
    </Routes>
  );
};
