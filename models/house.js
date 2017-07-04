import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const houseSchema = new Schema({
    
    'name':{
        type:String,
        required:true
    },
    'coat_of_arms':{
        type:String
    },
    'words':{
        type:String
    },
    'seat':{
        type:String
    }

}, {'collection':'house',timestamps:true});

export default mongoose.model('house',houseSchema);