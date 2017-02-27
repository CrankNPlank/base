/**
 * See the following article for information about this file:
 * https://themeteorchef.com/tutorials/using-the-module-pattern?utm_source=The+Meteor+Chef+-+Weekly+Digest&utm_campaign=c330f990ec-Weekly_Digest_February_24th_2017&utm_medium=email&utm_term=0_a347eecb12-c330f990ec-438616369
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import processOrder from '../../modules/server/process-order';

Meteor.methods({
  'orders.process': (order) => {
    check(order, Object);
    return processOrder(order);
  },
});
