const express = require("express");
const app = express();

app.use(express.json()); // important for req.body

const users = [
  {
    name: "atharv singh",
    kidneys: [
      { healthy: true },
      { healthy: false }
    ]
  }
];

// GET kidney info
app.get("/user", function (req, res) {
  const atharvKidneys = users[0].kidneys;
  const numberOfKidneys = atharvKidneys.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < atharvKidneys.length; i++) {
    if (atharvKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  const numberOfUnhealthyKidneys =
    numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// POST - change name
app.post("/", function (req, res) {
  const isname = req.body.isname;
  users[0].name = isname;

  res.json({
    message: "Name updated",
    users
  });
});

// PUT (empty for now)
app.put("/", function (req, res) {
  res.send("PUT route");
});

// DELETE (empty for now)
app.delete("/", function (req, res) {
  res.send("DELETE route");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
