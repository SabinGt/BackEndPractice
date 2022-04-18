const postUser = (req, res) => {

  res.status(200).json("Single user data inserted successfully");
};

const getUsers = (req, res) => {
  res.status(200).json("All users data");
};

const getSingleUser = (req, res) => {
  res.status(200).json("Single user data");
};

const deleteSingleUser = (req, res) => {
  res.status(200).json("Delete single user");
};

const updateSingleUser = (req, res) => {
  res.status(200).json("Update single user ");
};

module.exports = {
  getUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  postUser
};