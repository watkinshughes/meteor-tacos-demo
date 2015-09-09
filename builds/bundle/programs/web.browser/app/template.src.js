(function(){
Template.body.addContent((function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("intro")), "\n\n  ", Spacebars.include(view.lookupTemplate("hello")) ];
}));
Meteor.startup(Template.body.renderToDocument);

})();
