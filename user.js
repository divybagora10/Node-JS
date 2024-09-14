const { default: mongoose } = require("mongoose");
const userSchema = require("./model/user")

const User = mongoose.model("user",userSchema);

module.exports = User;