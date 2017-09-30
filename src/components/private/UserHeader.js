import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import { grey100, grey600, grey900, lightBlueA400 } from 'material-ui/styles/colors';

const height = '40px';
const styles = {
  nav: {
    backgroundColor: grey600,
    borderTop: '2px solid',
    borderColor: lightBlueA400,
  },
  title: {
    color: grey900,
    height,
    flex: 'none',
    width: '20%',
  },
  titleLink: {
    textDecoration: 'none',
  },
  tabItemContainer: {
    backgroundColor: grey600,
  },
  inkBar: {
    background: grey100,
  },
  tab: {
    color: grey100,
    height,
    padding: '0 30px',
    fontWeight: 400,
    textTransform: 'none',
  },
  tabButton: {
    height,
  },
  tabButtonLabel: {
    textTransform: 'none',
  },
};

const currentRouteIndex = () => {
  const location = browserHistory.getCurrentLocation();
  switch (true) {
    case location.pathname.includes('/private/jobs'): return 0;
    case location.pathname.includes('/private/quotes'): return 1;
    default: return 0;
  }
};

const Header = () => {
  return (
    <AppBar
      showMenuIconButton={false}
      style={styles.nav}
      titleStyle={styles.title}
      zDepth={0}
    >
      <Tabs
        tabItemContainerStyle={styles.tabItemContainer}
        inkBarStyle={styles.inkBar}
        initialSelectedIndex={currentRouteIndex()}
      >
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="My Work Requests"
          containerElement={<Link to="/private/jobs" />}
        />
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="My Estimates"
          containerElement={<Link to="/private/quotes" />}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;
