const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const streamifier = require("streamifier"); // Add this line
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(stream); // Use streamifier here
    });

    res
      .status(200)
      .json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
