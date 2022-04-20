import mongoose from "mongoose";
import contact from "./contact.model.js";
import role from "./role.model.js";
import user from "./user.model.js";
const db = {};
db.mongoose = mongoose;
db.ROLES = ["user", "admin", "moderator"];
db.user = user;
db.contact = contact;
db.role = role;

export default db;
