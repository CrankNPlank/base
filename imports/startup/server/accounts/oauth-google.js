import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const settings = Meteor.settings.private.oAuth.google;

const init = () => {
  if (!settings) return;

  //console.log('In oauth-google & settings are: ', settings);

  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: settings.clientId,
        secret: settings.secret
      }
    }
  );
};

export default init;