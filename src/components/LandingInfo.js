import React from 'react';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const landingMain = () =>
  (
    <div className="c-landing__container">
      <h1 className="c-landing__subTitle">Here&#39;s how it works</h1>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 1</h3>
      <p className="c-landing__subText">{loremIpsum}</p>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 2</h3>
      <p className="c-landing__subText">{loremIpsum}</p>
      <span className="c-landing__whitespace" />
      <h3 className="c-landing__subHeader">Step 3</h3>
      <p className="c-landing__subText">{loremIpsum}</p>
    </div>
  );

export default landingMain;
