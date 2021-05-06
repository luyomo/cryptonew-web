// React library import
import React  from 'react';
import { render } from 'react-dom';

// React middleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';

// Local library
import rootReducer from "./reducers";
import GoogleOAuth2 from './components/GoogleOAuth2'

//store
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render( <Provider store={store}> <GoogleOAuth2 /> </Provider>, document.getElementById('root'))
