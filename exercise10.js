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
    skills: ["Volleyball", "IT"],
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
    skills: ["Soccer", "Art"],
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
    skills: ["Volleyball", "Manicure"],
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
    skills: ["Soccer", "Mechanics"],
  },
];

let allSkills = [];

users.forEach((user) => {
  if (user.skills) {
    allSkills.push(...user.skills);
  }
});

const uniqueSortedSkills = allSkills
  .filter((skill, index, array) => array.indexOf(skill) === index)
  .sort();
console.log(uniqueSortedSkills);
