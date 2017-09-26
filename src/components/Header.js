import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey600, grey900, lightBlueA400 } from 'material-ui/styles/colors';

const styles = {
  nav: {
    backgroundColor: 'white',
  },
  title: {
    color: grey900,
  },
  titleLink: {
    textDecoration: 'none',
  },
  tabItemContainer: {
    backgroundColor: 'white',
  },
  inkBar: {
    background: lightBlueA400,
  },
  homeTab: {
    color: grey600,
    height: '64px',
    padding: '0 30px',
    fontWeight: 400,
  },
  tab: {
    color: grey600,
    height: '64px',
    padding: '0 30px',
    fontWeight: 400,
  },
  tabButton: {
    height: '64px',
  },
  titleIcon: {
    color: lightBlueA400,
  },
};

const Header = () =>
  (
    <AppBar
      title={
        <Link style={styles.titleLink} to="/">
          <i style={styles.titleIcon} className="material-icons">build</i>
        </Link>
      }
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
          style={styles.homeTab}
          buttonStyle={styles.tabButton}
          label="Home"
          containerElement={<Link to="/" />}
        />
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="My Jobs"
          containerElement={<Link to="/jobs" />}
        />
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="My Quotes"
          containerElement={<Link to="/quotes" />}
        />
      </Tabs>
    </AppBar>
  );

export default Header;
