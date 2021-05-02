import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
// import CheckUser from './CheckUser';

export default applyMiddleware(
  thunk,
  // CheckUser
);