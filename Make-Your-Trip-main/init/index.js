if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoUrl = process.env.ATLASDB_URL;

if (!mongoUrl) {
  throw new Error("ATLASDB_URL must be set before seeding the database");
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const listings = initData.data.map((listing) => ({
    ...listing,
    owner: "6a24154f1aea142f090f5ec7",
  }));
  await Listing.insertMany(listings);
  console.log("data was initialized");
  await mongoose.connection.close();
};

initDB().catch((error) => {
  console.error("Unable to initialize database:", error);
  process.exitCode = 1;
});