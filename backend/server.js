const express = require("express");
const app = express();
import cors from 'cors'
const PORT = 8000;

app.use(cors())
// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is running on 8000`));
