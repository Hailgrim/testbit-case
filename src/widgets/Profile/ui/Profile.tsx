import { FC } from 'react';

import { useT } from '@/shared/lib';
import { ProfileMain } from './ProfileMain';
import { AvatarIcon } from '@/shared/ui';
import { ProfileStatus } from './ProfileStatus';
import { ProfileName } from './ProfileName';

export const Profile: FC = () => {
  const t = useT();

  return (
    <ProfileMain>
      <AvatarIcon />
      <ProfileStatus>{t.youAreAuthorized}</ProfileStatus>
      <ProfileName>{t.administrator}</ProfileName>
    </ProfileMain>
  );
};
