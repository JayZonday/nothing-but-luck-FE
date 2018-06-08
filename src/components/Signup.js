import React from 'react';
import SignupForm from './SignupForm';

class Signup extends React.Component{
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <div>
          <SignupForm />
        </div>
        <hr />
      </div>
    );
  }

}

export default Signup
