import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

const service = 'loginWithFacebook';

const options = {
  requestPermissions: ['email'],
};

const signup = () => {
  Meteor[service](options, (error) => {
    if (error) {
      Bert.alert(error.message, 'danger');
    }
  });
};

export default function handleOAuthSignup() {
  signup();
  //console.log('oauth-signup.handleOAuthSignup>options: ', options);
}
