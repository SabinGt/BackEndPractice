import bcrypt from "bcryptjs";
const saltRounds = 10;

const hashing = {
  passwordHashing: (password) => {
    return bcrypt.hashSync(password, saltRounds);
  },

  passwordComparing: (reqPassword, resPassword) => {
    return bcrypt.compareSync(reqPassword, resPassword);
  }
};

export default hashing;
