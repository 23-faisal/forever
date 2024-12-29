import app from "./app.js";
import "dotenv/config";
import connectDB from "./config/connectDB.js";
import connectCloudinary from "./config/cloudinary.js";

const port = process.env.PORT;

connectCloudinary();

app.listen(port, async () => {
  console.log("Server is running on port " + port);
  await connectDB();
});
