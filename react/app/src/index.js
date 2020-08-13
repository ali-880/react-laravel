import React from 'react';
import ReactDom from 'react-dom';
import App from './container/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { getAllCourse } from './actions/site/index';
ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));
store.dispatch(getAllCourse());