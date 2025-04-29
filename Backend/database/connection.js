// hami yaha database connection ko code/logic lekxam

const { Sequelize, DataTypes } = require("sequelize");
//

// const bookModel = require("./models/book.model")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize(
  "postgresql://postgres.tteecnfnabikqhahykzq:nawap12345dangi@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated vayo, connected vayo !!");
  })
  .catch((err) => {
    console.log("Error aayo" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./models/book.model")(sequelize, DataTypes);
db.users = require("./models/user.model")(sequelize, DataTypes);
db.products = require("./models/product.model")(sequelize, DataTypes);

// migrate code ho yo chai hai
sequelize.sync({ alter: false }).then(() => {
  console.log("Successfully Migrated🚀");
});

module.exports = db;
