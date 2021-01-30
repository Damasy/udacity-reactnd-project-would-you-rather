import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import combinedReducers from './Reducers/reduces';
import Main from './Main'

const store = createStore(combinedReducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;
