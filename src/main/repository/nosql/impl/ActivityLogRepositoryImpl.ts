import { ActivityLog } from "../../../model/collection/ActivityLog";
import { ActivityLogRepository } from "../ActivityLogRepository";

export class ActivityLogRepositoryImpl implements ActivityLogRepository {
    
    public createActivityLog = (id: string, feature_key: string, user_id: bigint, description: string, action: string) => ActivityLog.create({
        "id": id,
        "feature_key": feature_key,
        "user_id": user_id,
        "description": description,
        "action": action
    });

}