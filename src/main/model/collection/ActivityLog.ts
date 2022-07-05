import mongoose from 'mongoose';

// Schema Config
const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    feature_key: {
        type: String,
        required: true
    },
    user_id: {
        type: BigInt,
        required: true
    },
    description: {
        type: String
    },
    action: {
        type: String,
        required: true
    }
});

/**
 * MongoDB Collection col_mlm_user_experiences
 * 
 * Within this statement, there's model implementation for MongoDB database
 * for audit log support.
 */
export const ActivityLog =  mongoose.model('col_mlm_user_experiences', schema);