import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // init creates a promise
      window.gapi.client.init({
        clientId: '849868765482-ckgmpg7fvcno8s0j9dflt7mj9jv30o67.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        // create a auth instance
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Dont know if I am signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>I am not signed in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
