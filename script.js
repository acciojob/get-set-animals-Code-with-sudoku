Get Set  Animal class Animal {
constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a generic animal sound
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
	 constructor(species) {
    // Call the constructor of the parent class (Animal)
    super(species);
  }

  // Method specific to Dog class
  bark() {
    console.log("The Golden Retriever makes a sound");
  }

  // Override the makeSound method to provide a dog-specific sound
  makeSound() {
    console.log("woof");
  }
}

class Cat extends Animal {
	 constructor(species) {
    // Call the constructor of the parent class (Animal)
    super(species);
  }

  // Method specific to Cat class
  purr() {
    console.log("The Siamese makes a sound");
  }

  // Override the makeSound method to provide a cat-specific sound
  makeSound() {
    console.log("purr");
  }
}