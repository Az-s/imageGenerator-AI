import mongoose from "mongoose";

const Post = mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});

const PostShema = mongoose.model('Psot' , Post);

export default PostShema;