import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Modal } from 'react-bootstrap';
import { googleOAuth2 } from '../actions/google';

class GoogleAuth2 extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth2);
