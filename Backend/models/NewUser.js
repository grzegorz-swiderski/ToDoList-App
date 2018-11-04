import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema ({
    
    userId: {
        type: String
    },

    userName: {
        type: String
    }
})

export default mongoose.model('User', User);