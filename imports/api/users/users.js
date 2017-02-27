import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

const Users = new Mongo.Collection('Users');

export default Users;
