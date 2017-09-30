import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { lightBlueA100 } from 'material-ui/styles/colors';

const styles = {
  mainButton: {
    border: '1px solid black',
    height: '50px',
    width: '200px',
    marginTop: '20px',
  },
};

const landingMain = () =>
  (
    <div className="c-landing__container">
      <h1 className="c-landing__title">InsertName</h1>
      <h1 className="c-landing__description">Fixing your car should be as simple as the snap of a picture</h1>
      <FlatButton
        style={styles.mainButton}
        hoverColor={lightBlueA100}
        label="Get an estimate"
      />
    </div>
  );

export default landingMain;
