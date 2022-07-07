import mongoose from 'mongoose';
import NoSQLConfig from '../../config/NoSQLConfig';

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
export const ActivityLog = NoSQLConfig.getMongooseInstance().model('col_mlm_user_experiences', schema);