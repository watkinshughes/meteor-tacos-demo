(function(){Template.tacos.helpers({
  check: function check() {
    var awesome = 1 > 0;
    return awesome;
  },
  tacos: function tacos() {
    return Tacos.find();
  }
});

})();
