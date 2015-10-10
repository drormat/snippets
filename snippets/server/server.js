// general server-side code
// (will get specific if needed)
Meteor.publish("snippets",function(){
	return Snippets.find({owner:this.userId});
	//this.userId is the logged in user ID for the publish "session"
})

Meteor.publish("snippets-admin",function(){
	return Snippets.find({}); //We want all URL's
});

Snippets.allow({
	insert: function(userId, fields){
		return(userId); // make sure user is logged in.
	},
	update: function(userId,fields){
		return(userId); // make sure user is logged in.
	}
})