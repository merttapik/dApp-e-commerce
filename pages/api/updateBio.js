import connectDB from "../../lib/connectDB";
import Users from "../../modul/userSchema";

export default async (req,res) => {

    const{profileId,bio}=req.body;
    await connectDB();
    await Users.findOneAndUpdate({profileId:profileId},{bio:bio});
    try {
        res.status(200).json({bio});
    } catch (error) {
        res.status(400).json({error});
        console.error(error);
    }
    
};