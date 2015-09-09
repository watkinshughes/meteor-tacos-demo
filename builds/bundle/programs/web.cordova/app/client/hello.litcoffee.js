(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.hello.onCreated(function() {
  console.log('created');
  $('button').addClass('created');
});

Template.hello.onRendered(function() {
  this.find('button').setAttribute('class', 'awesome');
  $('button').addClass('jQuery or no jQuery?');
});

Template.hello.helpers({
  counter: function() {
    return Session.get('counter');
  }
});

Template.hello.events({
  'click button': function() {
    Session.set('counter', Session.get('counter') + 1);
  }
});

})();
