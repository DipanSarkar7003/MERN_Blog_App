const cloudinary = require("cloudinary").v2;
require("dotenv").config();

async function uploadCloudinary(localFilePath) {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    if (!localFilePath) console.log("no file path provided");

    // Upload an image
    const uploadResult = await cloudinary.uploader
      .upload(localFilePath)
      .catch((error) => {
        console.log("cloud error" + error.message);
      });
    return uploadResult; // Make sure to return the upload result
  } catch (err) {
    console.log("cloudinary error : " + err);
    return null;
  }
}

module.exports = uploadCloudinary;
