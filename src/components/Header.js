import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey900 } from 'material-ui/styles/colors';

const styles = {
  nav: {
    backgroundColor: 'white',
  },
  title: {
    color: grey900,
  },
  tabItemContainer: {
    backgroundColor: 'white',
  },
  tab: {
    color: grey900,
    height: '64px',
    padding: '0 30px',
  },
  tabButton: {
    height: '64px',
  },
};

const Header = () =>
  (
    <AppBar
      title={<Link to="/">Unscratch</Link>}
      showMenuIconButton={false}
      style={styles.nav}
      titleStyle={styles.title}
    >
      <Tabs
        tabItemContainerStyle={styles.tabItemContainer}
      >
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
