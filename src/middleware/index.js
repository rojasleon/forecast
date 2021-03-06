import { applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';

const composeEnhancer = compose;

export default composeEnhancer(applyMiddleware(ReduxPromise, logger));
