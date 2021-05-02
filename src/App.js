import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import combinedReducers from './Reducers/reduces';
import middleware from './Middleware';
import Main from './Main'

const store = createStore(combinedReducers, middleware)

function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;
