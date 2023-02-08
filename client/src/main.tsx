import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import Providers from './lib/Providers';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Providers>
    <App />
  </Providers>
);
