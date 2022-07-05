
export interface ActivityLogRepository {

    /**
     * createAuditLog
     * 
     * This function used for create audit log within MongoDB.
     * 
     * @param id 
     * @param feature_key
     * @param user_id
     * @param description
     * @param action
     */
    createActivityLog(
        id: string,
        feature_key: string,
        user_id: bigint,
        description: string,
        action: string
    ): Promise<any>;

}