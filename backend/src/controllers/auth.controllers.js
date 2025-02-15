import {User} from '../models/user.js';


async function generateAcessTokenAndRefreshToken(userid)  {

    try {
        const user = await User.findById(userid);
        console.log(user);

        const acessToken = user.generateAcessTokens()
        const refreshToken = user.generateRefershTokens()

        user.refreshtoken = refreshToken;

        return {acessToken,refreshToken}    
 
    } catch (error) {
        console.log("error : 500", error)
        
    }
}

const registerUser = async (req , res) => {
   
        
        // check spelling
        try {
            const {username , fullname , dob , phonenumber} = req.body;
            const userExists = await User.findOne({phonenumber,username});


            if(userExists){
                return res.status(400).json({message : "User already exists"})  
            }
            const user = await  User.create({
                username,
                fullname,
                dob,
                phonenumber
            });
            console.log(user);
            user.save({validateBeforeSave : false});
            
            return res.status(201).json({message : "User created successfully", user})

        } catch (error) {
            res.status(500).json({message:"server error"})
            
        }
        
   
}

const loginUSer = async (req , res) => {

   try {
    
    const {phonenumber,username} = req.body;
    
    const createdUser = await User.findOne({phonenumber,username});

    if(!createdUser){
        return res.status(400).json({message : "User does not exist. Register Yourself"})
    }

    const {acessToken,refreshToken} =await generateAcessTokenAndRefreshToken(createdUser._id);

    res.status(200).json(
        {
         acessToken,
         refreshToken,
         message : "User logged in successfully",
         createdUser
        }
    );

   } catch (error) {

    req.status(401).json({message : "Invalid Credentials"})
    
   }
    
}


export {registerUser,loginUSer}