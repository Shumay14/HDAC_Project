"use strict";

const app = require("../app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server strared on Port 5000");
});
