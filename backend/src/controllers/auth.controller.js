import userModel from "../models/user.model.js";
import userRegistrationSchema from "../validation/userValidation.js";
import bcrypt from "bcryptjs";


// User registration
const registerUser = async (req, res, next) => {
  try {
    // Validate request data
    const validatedData = userRegistrationSchema.parse(req.body);
    const { name, email, password } = validatedData;

    // Check if the user already exists
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    // Hash the password
    const hashPassword = bcrypt.hashSync(password, 10);

    // Save the new user to the database
    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    // Send success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return res.status(400).json({
        success: false,
        errors: error.errors.map((err) => ({
          path: err.path,
          message: err.message,
        })),
      });
    }
    next(error); // Pass other errors to the error-handling middleware
  }
};

// user login
const loginUser = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "login Api is working",
    });
  } catch (error) {
    next(error);
  }
};

//admin login

const loginAdmin = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "admin Api is working",
    });
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser, loginAdmin };
