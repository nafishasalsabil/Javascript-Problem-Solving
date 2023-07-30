const person = {
    name: ["Jonas", "Kahnwald"],
    age: 24,
    occupation:["scientist"],
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is a ${this.age} years old ${this.occupation}.`);
    },
  };

  console.log(person["name"]);
  
  person.bio();
 