(function(){Meteor.publish('tacos', function() {
  return Tacos.find();
});

})();
