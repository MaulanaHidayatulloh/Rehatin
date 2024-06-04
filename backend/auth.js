const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const database = require("./model/database");

// Fungsi untuk mengonversi buffer ke Base64
const encodeImageToBase64 = (buffer) => {
  return buffer.toString("base64");
};

router.post(
  "/register",
  [
    body("first_name").notEmpty().withMessage("First name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name, last_name, email, password } = req.body;

    try {
      // Check if the user already exists
      const [existingUser] = await database.query(
        "SELECT * FROM user WHERE email = ?",
        [email]
      );
      if (existingUser.length > 0) {
        return res.status(400).json({ error: "Email already in use" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const result = await database.query(
        "INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
        [first_name, last_name, email, hashedPassword]
      );

      if (result.affectedRows === 1) {
        return res
          .status(201)
          .json({ message: "User registered successfully" });
      } else {
        throw new Error("Failed to insert user into database");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      return res
        .status(500)
        .json({ error: "Failed to register user in database" });
    }
  }
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find the user by email
      const [users] = await database.query(
        "SELECT * FROM user WHERE email = ?",
        [email]
      );
      if (users.length === 0) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const user = users[0];

      // Check the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      // Encode the image to Base64
      let fotoBase64 = null;
      if (user.foto) {
        fotoBase64 = encodeImageToBase64(user.foto);
      }

      // Format the birth date to include only date, month, and year
      const birthDate = new Date(user.tanggal_lahir);
      const formattedBirthDate = `${birthDate.getFullYear()}-${String(
        birthDate.getMonth() + 1
      ).padStart(2, "0")}-${String(birthDate.getDate()).padStart(2, "0")}`;

      // Save user info in session
      req.session.user = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        foto: fotoBase64,
        last_name: user.last_name,
        gender: user.gender,
        tanggal_daftar: user.tanggal_daftar,
        tanggal_lahir: formattedBirthDate,
        asal: user.asal,
      };

      return res.json({
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          foto: fotoBase64,
          gender: user.gender,
          tanggal_daftar: user.tanggal_daftar,
          tanggal_lahir: formattedBirthDate,
          asal: user.asal,
        },
      });
    } catch (error) {
      console.error("Error logging in:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Could not log out, please try again" });
    }
    res.clearCookie("connect.sid");
    return res.json({ message: "Logged out successfully" });
  });
});

router.put("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    // Update user data in the database
    await database.query(
      "UPDATE user SET first_name = ?, last_name = ?, email = ?, gender = ?, tanggal_lahir = ?, asal = ? WHERE id = ?",
      [
        updatedUserData.first_name,
        updatedUserData.last_name,
        updatedUserData.email,
        updatedUserData.gender,
        updatedUserData.tanggal_lahir,
        updatedUserData.asal,
        userId,
      ]
    );

    return res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
