import React, { Component          } from 'react';
import { connect                   } from 'react-redux';
import { bindActionCreators        } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Modal                     } from 'react-bootstrap';
import { googleOAuth2              } from '../actions/google';

class GoogleOAuth2 extends Component {
  render() {
    let self = this;
    
    function LoggedIn(props) {
      return (
        <GoogleLogout
          clientId={self.props.clientID}
          buttonText="Logout"
          onLogoutSuccess={self.props.googleOAuth2}
          style={{ width: 8, height: 8,  }}
        />
      );
    }

    function LoggedOut(props) {
      return (
        <GoogleLogin
         clientId={self.props.clientID}
         buttonText="Sign in with Google"
         onSuccess={self.props.googleOAuth2}
         onFailure={self.props.googleOAuth2}
         cookiePolicy={'single_host_origin'}
         isSignedIn={true}
         style={{ width: 8, height: 8,  }}
        />              
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

export default connect(mapStateToProps, mapDispatchToProps)(GoogleOAuth2);
