import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Task = new Schema ({
    text: {
        type: String
    },
    status: {
        type: String
    },
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    sort: {
        type: Number
    },
    create: {
        type: String
    }
})

export default mongoose.model('Task', Task);