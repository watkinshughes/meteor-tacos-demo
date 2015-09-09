(function(){
Template.__checkName("tacos");
Template["tacos"] = new Template("Template.tacos", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("check"));
  }, function() {
    return [ "\n  ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("tacos"));
    }, function() {
      return [ "\n  ", HTML.P(Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      })), "\n  " ];
    }), "\n  ", HTML.P("Tacos are awesome"), "\n  " ];
  });
}));

})();
