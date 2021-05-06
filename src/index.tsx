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

import MenuContainer from './components/MenuContainer'

//store
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//render( <Provider store={store}> <GoogleOAuth2 clientID="162023813570-ir8c6j1hvrinc70qb5c8sv4mlkltgd28.apps.googleusercontent.com" /> </Provider>, document.getElementById('root'))
render( <Provider store={store}> <MenuContainer /> </Provider>, document.getElementById('root'))
