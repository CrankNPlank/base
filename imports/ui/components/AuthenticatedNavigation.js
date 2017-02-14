import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const getEmailFromService = (services) => {
  if (services) {
    for (let service in services) {
      let current = services[service];

      console.log('current: ', current);

      return service === 'twitter' ? current.screenName : current.email;
    };
  }
};

const userName = () => {
  const userServices = Meteor.subscribe('Meteor.users.userName');
  const user = Meteor.user();
  console.log('user: ', user);
  const emails = user.emails;
  console.log('emails: ', emails);
  const services = user.services;
  console.log('services: ', services);

  if (emails) {
    return emails[0].address;
  } else if (services) {
    return getEmailFromService(services);
  } else {
    return user.profile.name;
  }
};

/* const userName = () => {
  const user = Meteor.user();

  console.log('AuthNav>user: ', user);

  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
}; */

const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
