import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { FC } from 'react';

import './styles/index.css';
import { store } from '@/shared/model';
import { Routing } from '@/pages';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
