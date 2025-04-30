const express = require("express"); // express require gareko
const { books } = require("./database/connection");

const app = express(); // express lai trigger gareko
require("./database/connection");

app.use(express.json()); // json data lai accept garna ko lagi
//test
// let app = require("express")()
app.get("/books", async function (req, res) {
  // logic to fetch books from database
  const datas = await books.findAll(); //select * from books
  res.json({
    message: "books fetched successfully",
    datas,
  });
});

app.post("/books", async function (req, res) {
  // logic to add book to database goes here..
  // console.log(req.body);
  // const bookName = req.body.bookName;
  // const authorName = req.body.authorName;
  const { bookName, authorName, bookPrice, bookGenre } = req.body; // destructuring
  //  await books.create({
  //   bookName:bookName,
  //   authorName:authorName,
  //   bookPrice:bookPrice,
  //   bookGenre: bookGenre,
  // });
  await books.create({
    bookName,
    bookAuthor: authorName,
    price: bookPrice,
    bookGenre,
  });

  res.json({
    message: "Book added successfully",
  });
});

app.delete("/books/:id", function (req, res) {
  // logic to delete book
  res.json({
    message: "Book Deleted successfully",
  });
});
app.patch("/books/:id", function (req, res) {
  // logic to update book
  res.json({
    message: "Book updated successfully",
  });
});

//postgres.scfmicugsxklxgoyqgar:hahahehehuhu@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

postgresql: app.listen(4000, function () {
  console.log("project/server/backend has started at port 4000");
});
