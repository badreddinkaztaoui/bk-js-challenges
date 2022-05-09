// Generate objects using a function ❌
function userCreator(name, score) {
  const user = {};
  user.name = name;
  user.score = score;
  user.increment = function () {
    this.score++;
  };

  return user;
}

// Generate objects using prototype chain ✅
function userProtoCreator(name, score) {
  const user = Object.create(userFunctionsStore);
  user.name = name;
  user.score = score;
  return user;
}

const userFunctionsStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged In!");
  },
};

// Generate objects using the new keyword 🆗
function userNewCreator(name, score) {
  this.name = name;
  this.score = score;
}

userNewCreator.prototype.increment = function () {
  this.score++;
};

userNewCreator.prototype.login = function () {
  console.log("User logged in! ✅");
};

const user1 = new userNewCreator("Badr", 50);

user1.increment();

// console.log(user1); // Uncomment this line to see the results
