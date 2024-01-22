import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useT } from '@/shared/lib';
import { SearchLabel } from './SearchLabel';
import { SearchInput } from './SearchInput';
import { SearchIcon } from '@/shared/ui';

export const Search: FC<
  InputHTMLAttributes<HTMLInputElement> & {
    changeDelay?: number;
  }
> = ({ value, onChange, changeDelay = 0, ...props }) => {
  const t = useT();
  const timeout = useRef<NodeJS.Timeout>();
  const [innerValue, setInnerValue] = useState(value);

  const inputHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInnerValue(event.target.value);
      if (onChange === undefined) {
        return;
      }
      if (changeDelay > 0) {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => onChange(event), changeDelay);
      } else {
        onChange(event);
      }
    },
    [onChange, changeDelay]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <SearchLabel>
      <SearchIcon />
      <SearchInput
        {...props}
        type="search"
        placeholder={t.search}
        value={innerValue}
        onChange={inputHandler}
      />
    </SearchLabel>
  );
};
