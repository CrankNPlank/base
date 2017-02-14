import { Meteor } from 'meteor/meteor';

Meteor.publish('Meteor.users.userName', function userNamePublication() {
  if (!this.userId) {
    return this.ready();
  }

  return Meteor.users.find({ _id: this.userId });
});
