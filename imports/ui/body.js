import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'This is task number 1' },
    { text: 'This is task number 2' },
    { text: 'This is task number 3' },
  ],
});