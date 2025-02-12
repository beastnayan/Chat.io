import mongoose , { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
        userImage : {
            type:{
                url: String,
                localPath: String
            }
        },

        username:{
            type: String,
            required:true,
            unique:true,
            trim:true,
            Lowercaese:true,
        },

        fullname:{
            type :String,
            required:true,
            trim:true,
        },

        dob:{
            type: Date,
            required:true,
        },  

        phonenumber:{
            type: String,
            required:true,
            trim:true,
            unique:true,

        },

        refreshtoken:{
            type: String,
            required:true,
            trim:true,
        },

        
    }


   

);

userSchema.methods.generateAcessTokens = function() {
   return jwt.sign(
    {
        _id: this._id,
        username: this.username,
        fullname: this.fullname,
        dob: this.dob,
        phonenumber: this.phonenumber
    },
    process.env.ACESS_TOKEN_SECRET,

    {
       expiresIn: process.env.ACESS_TOKEN_SECRET_EXPIRY
    }
   )
}

userSchema.methods.generateRefershTokens = function() {
    return jwt.sign(
        {
            _id: this._id,
        
        },

        process.env.REFRESH_TOKEN,

        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }

    )
}




export const User = mongoose.model('User', UserSchema); 