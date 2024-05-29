const express = require("express");
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (assuming you need it)
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Include the route handlers from separate files
const jakartaRoutes = require("./routes/jakarta");
const bogorRoutes = require("./routes/bogor");
const SemuaTempat = require("./routes/SemuaTempat");

// Mount the routes on specific paths
app.use("/jakarta", jakartaRoutes);
app.use("/bogor", bogorRoutes);
app.use("/place", SemuaTempat);

// Function to handle errors
function handleError(err, res) {
  console.error("Error:", err);
  res.status(500).json({ error: "Terjadi kesalahan pada server" });
}

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
