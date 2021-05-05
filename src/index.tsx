import React from 'react';
import {render} from 'react-dom';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider ,connect} from 'react-redux';

import thunk from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Modal } from 'react-bootstrap';

import { combineReducers } from "redux";
const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";

//action
const googleOAuth2 = (googleResponse) => {
    return async (dispatch) => {
        console.log("Printing the google auth response");
        console.log(googleResponse);
        if (typeof googleResponse === 'undefined') {
            googleResponse = [];
        }

        dispatch({ type: GOOGLE_OAUTH2, googleResponse });
    };
}

//reducer
const initialState = [];

const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return action.googleResponse;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ googleReducer, });

//store
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    let self = this;
    
    function LoginModal() {   
      return (
        <>  
          <Modal show={true}>
            <Modal.Header>
              <Modal.Title>Medium Tutorial</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <GoogleLogin
                clientId="162023813570-ir8c6j1hvrinc70qb5c8sv4mlkltgd28.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={self.props.googleOAuth2}
                onFailure={self.props.googleOAuth2}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />              
            </Modal.Body>
          </Modal>
        </>
      );
    }

    function LoggedIn(props) {
      return (
        <GoogleLogout
          clientId="162023813570-ir8c6j1hvrinc70qb5c8sv4mlkltgd28.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={self.props.googleOAuth2}
        />
      );
    }

    function LoggedOut(props) {
      return (
        <LoginModal />
      );     
    }

    function HandleAuth(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <LoggedIn />;
      }
      return <LoggedOut />;
    }

    return (
      <HandleAuth isLoggedIn={typeof this.props.googleReducer.accessToken !== 'undefined'} />
    );
  }
};

function mapStateToProps (state) {
  return {
      ...state,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ googleOAuth2 }, dispatch);
}

App = connect(mapStateToProps,mapDispatchToProps)(App)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
