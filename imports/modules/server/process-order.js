/* eslint-disable consistent-return */

/**
 * See the following article for information about this file:
 * https://themeteorchef.com/tutorials/using-the-module-pattern?utm_source=The+Meteor+Chef+-+Weekly+Digest&utm_campaign=c330f990ec-Weekly_Digest_February_24th_2017&utm_medium=email&utm_term=0_a347eecb12-c330f990ec-438616369
 */

import { Meteor } from 'meteor/meteor';
import Orders from '../../api/orders/orders';
import Invoices from '../../api/invoices/invoices';

const createInvoice = (orderId, items) => {
  try {
    return Invoices.insert({ orderId, items });
  } catch (exception) {
    throw new Meteor.Error('500',
      `[processOrder.createInvoice] ${exception}`);
  }
};

const createOrder = (order) => {
  try {
    return Orders.insert(order);
  } catch (exception) {
    throw new Meteor.Error('500',
      `[processOrder.createOrder] ${exception}`);
  }
};

const handler = (options) => {
  try {
    const orderId = createOrder(options);
    const invoiceId = createInvoice(orderId, options);
    return { orderId, invoiceId, ...options };
  } catch (exception) {
    throw new Meteor.Error('500',
      `[processOrder.handler] ${exception}`);
  }
};

export default handler;
