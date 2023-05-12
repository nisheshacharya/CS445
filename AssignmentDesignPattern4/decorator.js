class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  class DecoratedUser {
    constructor(user, address, city) {
      this.user = user;
      this.address = address;
      this.city = city;
    }
  
    logger() {
      console.log(`Logged: ${this.user.name} - ${this.address}, ${this.city}`);
    }
  }
  
  // Test code
  const user = new User("Kelly");
  const decorated = new DecoratedUser(user, "Broadway", "New York");
  decorated.logger();
  