const mongoose = require("mongoose");

const UserModel = mongoose.model('User',
    mongoose.Schema(
        {
            name:{
                type:String,
                require:true,
            },
            age:{
                type:Number,
                require:true,
            },
            gender:{
                type:String,
                require:true,
            }
        },
        {timestamps: true}
    )
);

module.exports = UserModel;