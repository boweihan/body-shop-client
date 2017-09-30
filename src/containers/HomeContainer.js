import React from 'react';
import LandingMain from '../components/public/LandingMain';
import LandingInfo from '../components/public/LandingInfo';
import LandingFooter from '../components/public/LandingFooter';

const HomeContainer = () =>
  (
    <div>
      <LandingMain />
      <LandingInfo />
      <LandingFooter />
    </div>
  );

export default HomeContainer;
