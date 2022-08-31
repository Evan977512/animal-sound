const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "bow wow" });
  } else if (name == "cat") {
    res.json({ sound: "meow" });
  } else if (name == "pig") {
    res.json({ sound: "pigpig" });
  } else {
    res.json({ sound: "unknown" });
  }

  console.log(name);
});

// app.get("/dog", (req, res) => {
//   res.json({ sound: "멍멍!" });
// });

// app.get("/cat", (req, res) => {
//   res.json({ sound: "meow!" });
// });

// app.get("/user/:id", (req, res) => {
//   // const q = req.params;
//   // console.log(q.id);
//   const q = req.query;
//   console.log(q);

//   res.json({ username: q.name });
// });

// app.use(express.json());
// app.post("/dog/:id", (req, res) => {
//   const p = req.params;
//   console.log(p);
//   const b = req.body;
//   console.log(b);

//   res.send({ message: "hello world!" });
// });

setTimeout(() => {
  console.log("one sec");
}, 1000);
