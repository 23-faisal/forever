import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 10000000000)}-${
        file.originalname
      }`
    );
  },
});

const upload = multer({ storage });

export default upload;
