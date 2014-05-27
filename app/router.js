var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route("index", {path: "/" });
  this.route("somepage");   //this establishes the connection to another page
  this.route("about");
});

export default Router;
