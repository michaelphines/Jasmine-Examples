function Greeter(name) {
  this.name = name;
  this.getName = function() { return name; };
  this.sayHello = function() {
    return "Hello, " + this.getName() + "!";
  };
}
