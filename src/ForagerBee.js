var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

//Note to self: cannot set the prototype using 'new Bee' since it will
//not allow us to accept arguments that haven't yet been defined.
ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function()  {
  this.treasureChest.push('treasure');
}

