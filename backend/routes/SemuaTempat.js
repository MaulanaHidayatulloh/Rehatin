const express = require("express");
const router = express.Router();
const database = require("../model/database");

function handleError(err, res) {
  console.error("Error:", err);
  res.status(500).json({ error: "Terjadi kesalahan pada server" });
}

// Fungsi untuk mengencode gambar ke base64
function encodeImageToBase64(imageData) {
  return Buffer.from(imageData).toString("base64");
}

// Route handler
router.get("/", async (req, res) => {
  try {
    const [results] = await database.query(`
      SELECT 
        th.id_tempat, 
        th.nama_tempat, 
        th.kategori_lokasi, 
        th.lokasi, 
        th.harga, 
        th.deskripsi, 
        th.gambar,
        AVG(up.rating) as average_rating
      FROM 
        tempat_hangout th 
      JOIN 
        ulasan_pengguna up 
      ON 
        th.id_tempat = up.tempat_id
    `);

    const places = results.map((place) => {
      // Mengencode gambar longblob ke base64
      const imageDataBase64 = encodeImageToBase64(place.gambar);
      return {
        ...place,
        gambarBase64: imageDataBase64,
        average_rating: parseFloat(place.average_rating).toFixed(1),
      };
    });

    res.json(places);
  } catch (err) {
    handleError(err, res);
  }
});

// Route handler for GET /place/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch place details
    const [placeResults] = await database.query(
      `
      SELECT 
        th.id_tempat, th.nama_tempat, th.kategori_lokasi, th.lokasi, th.harga, th.deskripsi, th.gambar 
      FROM 
        tempat_hangout th
      WHERE 
        th.id_tempat = ?;
    `,
      [id]
    );

    // Fetch user reviews for the place
    const [reviewResults] = await database.query(
      `
      SELECT 
        up.rating, up.ulasan, u.first_name, u.last_name 
      FROM 
        ulasan_pengguna up 
      JOIN 
        user u 
      ON 
        up.id_user = u.id 
      WHERE 
        up.tempat_id = ?;
    `,
      [id]
    );

    if (placeResults.length === 0) {
      return res.status(404).json({ error: "Tempat tidak ditemukan" });
    }

    const place = placeResults[0];
    place.gambarBase64 = Buffer.from(place.gambar).toString("base64");
    place.reviews = reviewResults; // Attach reviews to the place object

    // Calculate average rating
    const totalRating = reviewResults.reduce(
      (sum, review) => sum + parseFloat(review.rating),
      0
    );
    const averageRating =
      reviewResults.length > 0 ? totalRating / reviewResults.length : 0;
    place.averageRating = averageRating; // Attach average rating to the place object

    console.log("Place Data with Average Rating:", place);

    res.json(place);
  } catch (err) {
    handleError(err, res);
  }
});

module.exports = router;
