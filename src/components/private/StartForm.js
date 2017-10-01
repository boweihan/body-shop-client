import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import { MenuItem, SelectField, DatePicker } from 'material-ui';

class StartForm extends React.Component {
  state = {
    formData: {
      area: '',
      description: '',
      brand: '',
    },
  };

  /**
   * Leverages react-material-ui-form-validator for form validation
   * If there's an invalid field or a required field hasn't been filled out
   * fail the validation
   */
  isValid = () => {
    if (!this.state.formData.name || !this.state.formData.email || !this.state.formData.password) {
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
  }

  render() {
    const { formData } = this.state;
    return (
      <ValidatorForm
        ref={(r) => { this.formRef = r; }}
        onSubmit={() => {}} // not needed, we use button to submit
      >
        <TextValidator
          floatingLabelText="Step 1: Approximate Location of Damage"
          onChange={this.handleChange}
          name="area"
          type="text"
          value={formData.area}
          fullWidth={true}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <br />
        <TextValidator
          floatingLabelText="Step 2: Description of Damage"
          onChange={this.handleChange}
          name="description"
          type="email"
          value={formData.description}
          fullWidth={true}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <br />
        <SelectField
          floatingLabelText="Step 3: Brand of Vehicle"
          name="brand"
          value={formData.brand}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <MenuItem value={1} primaryText="Toyota" />
          <MenuItem value={2} primaryText="BMW" />
          <MenuItem value={3} primaryText="Mercedes" />
          <MenuItem value={4} primaryText="Volkswagon" />
          <MenuItem value={5} primaryText="Honda" />
          <MenuItem value={5} primaryText="Mazda" />
        </SelectField>
        <br /><br />
        <DatePicker
          hintText="Step 4: Pick your ideal repair date"
          mode="portrait"
          fullWidth={true}
          style={{ marginTop: '5px' }}
        />
      </ValidatorForm>
    );
  }
}

export default StartForm;
