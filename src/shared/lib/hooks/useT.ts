import { d } from '@/shared/locales';
import { useAppSelector } from '@/shared/model';

export const useT = () => {
  const language = useAppSelector((store) => store.app.language);
  return d[language];
};
