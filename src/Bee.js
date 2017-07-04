var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

//For shared properties with the superclass, declare an instance of
//the Grub prototype, using Object.create.
Bee.prototype = Object.create(Grub.prototype);

//Remember to point the constructor property back at the Bee function.
Bee.prototype.constructor = Bee;
