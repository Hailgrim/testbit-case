import { ReactComponent as AvatarIcon } from '../../../assets/default-avatar.svg';
import useT from '../../../hooks/useT';
import ProfileMain from './ProfileMain';
import ProfileStatus from './ProfileStatus';
import ProfileName from './ProfileName';

const Profile: React.FC = () => {
  const t = useT();

  return (
    <ProfileMain>
      <AvatarIcon />
      <ProfileStatus>{t.youAreAuthorized}</ProfileStatus>
      <ProfileName>{t.administrator}</ProfileName>
    </ProfileMain>
  );
};
export default Profile;
