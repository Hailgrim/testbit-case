import React from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/search-circle.svg';
import useT from '../../hooks/useT';
import SearchLabel from './SearchLabel';
import SearchInput from './SearchInput';

const Search: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    changeDelay?: number;
  }
> = ({ value, onChange, changeDelay = 0, ...props }) => {
  const t = useT();
  const timeout = React.useRef<NodeJS.Timeout>();
  const [innerValue, setInnerValue] = React.useState(value);

  const inputHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
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

  React.useEffect(() => {
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
export default Search;
