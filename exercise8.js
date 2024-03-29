const users = [
  {
    name: "Iryna",
    eyeColor: "gray",
    gender: "female",
    isActive: true,
    email: "ishovdra4@gmail.com",
    age: 14,
    balance: 4302,
    friends: ["Max", "Halia", "Denys"],
  },
  {
    name: "Max",
    eyeColor: "brown",
    gender: "male",
    isActive: false,
    email: "max830@gmail.com",
    age: 16,
    balance: 2304,
    friends: ["Denys", "Iryna"],
  },
  {
    name: "Halia",
    eyeColor: "brown",
    gender: "female",
    isActive: false,
    email: "zabyhal78@gmail.com",
    age: 19,
    balance: 32084,
    friends: ["Iryna", "Denys"],
  },
  {
    name: "Denys",
    eyeColor: "gray",
    gender: "male",
    isActive: true,
    email: "den38@gmail.com",
    age: 18,
    balance: 953,
    friends: ["Halia", "Iryna", "Max"],
  },
];

const friendName = prompt("Enter a friend`s name to find his friends");

const usersWithFriend = users.reduce((acc, user) => {
  if (user.friends.includes(friendName)) {
    acc.push(user.name);
  }
  return acc;
}, []);

console.log(usersWithFriend); 
