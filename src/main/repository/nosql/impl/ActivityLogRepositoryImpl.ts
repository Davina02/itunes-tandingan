import { ActivityLog } from "../../../model/collection/ActivityLog";
import { ActivityLogRepository } from "../ActivityLogRepository";

export class ActivityLogRepositoryImpl implements ActivityLogRepository {
    
    public createActivityLog = async (
        id: string, 
        feature_key: string, 
        user_id: string, 
        description: string, 
        action: string): Promise<any> => {
          const activityLog = new ActivityLog({
                "id": id,
                "feature_key": feature_key,
                "user_id": user_id,
                "description": description,
                "action": action
            });
          
          activityLog.save();
        ;}

}