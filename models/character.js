import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const characterSchema = new Schema({
    'name':{
        type:String,
        required:true
    },
    'age':{
        type:Number
    },
    'description':{
        type:String
    },
    'image':{
        type:String
    },
    'house':{
        type:String
    }


}, {'collection':'character',timestamps:true});


export default mongoose.model('character',characterSchema);