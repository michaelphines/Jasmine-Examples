describe('Greeter', function() {
  var greeter;
  beforeEach(function() {
    greeter = new Greeter();
  });
  
  it('says hello', function() {
    expect(greeter.sayHello()).toEqual("Hello, World!");
  });
  
  it('says goodnight', function() {
    expect(greeter.sayGoodnight()).toEqual("Goodnight, Moon!");
  });
});
