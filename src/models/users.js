import mongoose from "./index.js";

const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email); 
};

const validateMobile = (mobile) => {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(mobile);
};
const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"], validate: { validator: validateEmail, message: "Invalid email format" } },
    mobile: { type: String, required: [true, "Mobile Number is required"], validate: { validator: validateMobile, message: "Invalid mobile number" } },
    password: { type: String, required: [true, "Password is required"] },
    createdAt: { type: Date, default: Date.now() }
}, {
    collection: 'users',
    versionKey: false
});

const userModel = mongoose.model('users', userSchema);
export default userModel;
