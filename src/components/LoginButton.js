import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const height = '64px';
const styles = {
  loginButton: {
    height,
  },
  dialog: {
  },
};

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class LoginButton extends React.Component {
  state = { // TODO: Fix eslint
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Login"
        primary={true}
        disabled={false}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton style={styles.loginButton} label="Login" onClick={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={this.state.open}
          style={styles.dialog}
        >
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="email"
            fullWidth={true}
            errorText="This field is required"
            style={styles.modalButton}
          /><br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            fullWidth={true}
            style={styles.modalButton}
          />
        </Dialog>
      </div>
    );
  }
}