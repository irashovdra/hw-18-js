const users = [
  {
    name: "Iryna",
    eyeColor: "gray",
    gender: "female",
    isActive: true,
    email: "ishovdra4@gmail.com",
    age: 14,
  },
  {
    name: "Max",
    eyeColor: "brown",
    gender: "male",
    isActive: false,
    email: "max830@gmail.com",
    age: 16,
  },
  {
    name: "Halia",
    eyeColor: "brown",
    gender: "female",
    isActive: false,
    email: "zabyhal78@gmail.com",
    age: 19,
  },
  {
    name: "Denys",
    eyeColor: "gray",
    gender: "male",
    isActive: true,
    email: "den38@gmail.com",
    age: 18,
  },
];

const grayEyesUsers = users.filter((user) => user.eyeColor === "gray");
const brownEyesUsers = users.filter((user) => user.eyeColor === "brown");
const usersEyeColor = [
  {
    brownEyesUsers: brownEyesUsers,
  },
  {
    grayEyesUsers: grayEyesUsers,
  },
];

console.log(usersEyeColor);
