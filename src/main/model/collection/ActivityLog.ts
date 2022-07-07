import mongoose from 'mongoose';

// Schema Config
const schema = new mongoose.Schema({
    id: String,
    feature_key: String,
    user_id: String,
    description: String,
    action: String
});

/**
 * MongoDB Collection col_mlm_user_experiences
 * 
 * Within this statement, there's model implementation for MongoDB database
 * for activity log support.
 */
export const ActivityLog =  mongoose.model('col_mlm_user_experiences', schema);