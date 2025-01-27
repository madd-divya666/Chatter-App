import mongoose from "mongoose";
import User from "../models/users_model.js"
import Message from "./message_model.js";

const conversationSchema=new mongoose.Schema({
  members:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:User,
    }
  ],
  messages:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:Message,
      default:[]
    }
  ]
},{timestamps:true});

const Conversation=mongoose.model("conversation",conversationSchema);
export default Conversation