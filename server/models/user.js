import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type:String,reqiured:true},
    email:{type:String,reqiured:true},
    password:{type:String,reqiured:true},
    id:{type:String}
})

export default mongoose.model("User", userSchema);
