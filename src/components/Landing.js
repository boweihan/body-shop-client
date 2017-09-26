import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { red300 } from 'material-ui/styles/colors';

const styles = {
  mainButton: {
    border: '3px solid black',
    height: '50px',
    width: '200px',
    marginTop: '20px',
  },
};

const Landing = () =>
  (
    <div className="c-landing__container">
      <h1 className="c-landing__title">Unscratch</h1>
      <h1 className="c-landing__description">Fixing your car should be as simple as the snap of a picture</h1>
      <FlatButton
        style={styles.mainButton}
        hoverColor={red300}
        label="Get an estimate"
      />
    </div>
  );

export default Landing;
