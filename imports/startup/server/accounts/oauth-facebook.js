import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const settings = Meteor.settings.private.oAuth.facebook;

const init = () => {
  if (!settings) return;

  //console.log('In oauth-facebook & settings are: ', settings);

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: settings.appId,
        secret: settings.secret
      }
    }
  );
};

export default init;