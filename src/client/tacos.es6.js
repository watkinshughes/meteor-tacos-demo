Template.tacos.helpers({
  check() {
    let awesome = 1 > 0;
    return awesome;
  },
  tacos() {
    return Tacos.find();
  }
});