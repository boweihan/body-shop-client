import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import { grey600, grey900, lightBlueA400 } from 'material-ui/styles/colors';

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
  },
  titleLink: {
    textDecoration: 'none',
  },
  tabItemContainer: {
    backgroundColor: grey600,
  },
  inkBar: {
    background: grey900,
  },
  tab: {
    color: 'white',
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
      >
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="Home"
          containerElement={<Link to="/" />}
        />
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="Control Panel"
          containerElement={<Link to="/cpanel" />}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;
