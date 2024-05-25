const express = require("express");
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is running on 8000`));
