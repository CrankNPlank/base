import { Meteor } from 'meteor/meteor';
import OAuthFacebookInit from './oauth-facebook';
import OAuthGoogleInit from './oauth-google';

Meteor.startup(() => {
  OAuthFacebookInit();
  OAuthGoogleInit();
});