import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

const height = '64px';
const styles = {
  loginButton: {
    height,
  },
  dialog: {
    maxWidth: '400px',
  },
  tabButtonLabel: {
    textTransform: 'none',
  },
};

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class LoginButton extends React.Component {
  state = {
    open: false,
    formData: {
      email: '',
      password: '',
    },
  };

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  /**
   * Leverages react-material-ui-form-validator for form validation
   * If there's an invalid field or a required field hasn't been filled out
   * fail the validation
   */
  isValid = () => {
    if (!this.state.formData.email || !this.state.formData.password) {
      return false;
    }
    return !this.formRef.childs.some(child => !child.state.isValid);
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    if (!this.isValid()) {
      return;
    }
    this.props.login(this.state.formData);
    this.handleClose();
  }

  render() {
    const { open, formData } = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Login"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div>
        <FlatButton labelStyle={styles.tabButtonLabel} style={styles.loginButton} label="Login" onClick={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={open}
          contentStyle={styles.dialog}
        >
          <ValidatorForm
            ref={(r) => { this.formRef = r; }}
            onSubmit={this.handleSubmit} // not needed, we use button to submit
          >
            <TextValidator
              floatingLabelText="Email"
              onChange={this.handleChange}
              name="email"
              type="email"
              value={formData.email}
              fullWidth={true}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
            <br />
            <TextValidator
              floatingLabelText="Password"
              onChange={this.handleChange}
              name="password"
              type="password"
              value={formData.password}
              fullWidth={true}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginButton;
