import React from 'react';
import { Link } from 'react-router';

const Footer = () =>
  (
    <footer className="page-footer brown">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Interested in learning more?</h5>
            <p className="grey-text text-lighten-4">Give us a call at 555-555-5555</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
              <li><Link className="grey-text text-lighten-3" to="job">Post a Job</Link></li>
              <li><Link className="grey-text text-lighten-3" to="estimate">Quote a Job</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright brown darken-3">
        <div className="container">
          © 2017 Copyright Unscratch
          <a className="grey-text text-lighten-4 right" href="#!">Contact</a>
        </div>
      </div>
    </footer>
  );

export default Footer;
