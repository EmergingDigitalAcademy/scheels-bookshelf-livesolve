
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import storeInstance from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
