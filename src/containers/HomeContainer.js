import React from 'react';
import LandingMain from '../components/LandingMain';
import LandingInfo from '../components/LandingInfo';
import LandingFooter from '../components/LandingFooter';

const HomeContainer = () =>
  (
    <div>
      <LandingMain />
      <LandingInfo />
      <LandingFooter />
    </div>
  );

export default HomeContainer;
