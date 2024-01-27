const users = [
  {
    name: "Iryna",
    eyeColor: "gray",
    gender: "female",
    isActive: true,
    email: "ishovdra4@gmail.com",
    age: 14,
    balance: 4302,
  },
  {
    name: "Max",
    eyeColor: "brown",
    gender: "male",
    isActive: false,
    email: "max830@gmail.com",
    age: 16,
    balance: 2304,
  },
  {
    name: "Halia",
    eyeColor: "brown",
    gender: "female",
    isActive: false,
    email: "zabyhal78@gmail.com",
    age: 19,
    balance: 32084,
  },
  {
    name: "Denys",
    eyeColor: "gray",
    gender: "male",
    isActive: true,
    email: "den38@gmail.com",
    age: 18,
    balance: 953,
  },
];

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(totalBalance);
