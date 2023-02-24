
import mongoose from 'mongoose';



// created schema based upon default data constraint
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});
// created model 
const news = mongoose.model('news', newsSchema);

export default news;