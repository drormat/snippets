// for our general client-side JS
//(we will use specific files as needed, and for clarity!)
Meteor.subscribe('snippets');

Router.configure({
	layoutTemplate: 'main'
});