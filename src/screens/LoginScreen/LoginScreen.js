import React from 'react';
import styles from './styles';

class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <h1>{ "LoginScreen" }</h1>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LoginScreen;
