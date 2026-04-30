const { createUser } = require("./app/models/user.model");

const users = [
  {
    username: "196807182005011001",
    password: "ASN001180768",
    latitude: -6.62949867534904,
    longitude: 110.72249001053517,
    masuk: "06:05",
    pulang: "22:47",
    jumat: "11:35",
    sabtu: "15:05",
  },
  {
    username: "198305252025211062",
    password: "ASN062250583",
    latitude: -6.62949867534904,
    longitude: 110.72249001053517,
    masuk: "06:05",
    pulang: "22:47",
    jumat: "11:35",
    sabtu: "15:05",
  },
  {
    username: "198806112025211015",
    password: "ASN015110688",
    latitude: -6.62949867534904,
    longitude: 110.72249001053517,
    masuk: "06:05",
    pulang: "22:47",
    jumat: "11:35",
    sabtu: "15:05",
  },
  {
    username: "200010112025211015",
    password: "ASN015111000",
    latitude: -6.62949867534904,
    longitude: 110.72249001053517,
    masuk: "06:05",
    pulang: "22:47",
    jumat: "11:35",
    sabtu: "15:05",
  },
  {
    username: "200107302025211007",
    password: "ASN007300701",
    latitude: -6.62949867534904,
    longitude: 110.72249001053517,
    masuk: "06:05",
    pulang: "22:47",
    jumat: "11:35",
    sabtu: "15:05",
  },
];

for (const user of users) {
  createUser(user);
  console.log(`[✔] User ${user.username} ditambahkan`);
}

console.log("[✔] Seed selesai");
