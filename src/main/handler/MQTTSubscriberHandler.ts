import { ValidationError } from "express-validator";
import { MQTTValidationException } from "../common/exception/MQTTValidationException";
import { ActivityLogRepositoryImpl } from "../repository/nosql/impl/ActivityLogRepositoryImpl";

export class MQTTSubscriberHandler {

    public handleActivityLog = (message: any) => {
        
        /**
         * Generate id
        */
        let id = "";

        const currentDate = new Date();
        let month = ""+(currentDate.getMonth() + 1);
        let date = ""+currentDate.getDate();
        let hours = ""+currentDate.getHours();
        let minutes = ""+currentDate.getMinutes();
        let seconds = ""+currentDate.getSeconds();
        let milliseconds = ""+currentDate.getMilliseconds();

        if((currentDate.getMonth() + 1) < 10) { month = "0"+(currentDate.getMonth() + 1) };
        if(currentDate.getDate() < 10) { date = "0"+currentDate.getDate() };
        if(currentDate.getHours() < 10) { hours = "0"+currentDate.getHours() };
        if(currentDate.getMinutes() < 10) { minutes = "0"+currentDate.getMinutes() };
        if(currentDate.getSeconds() < 10) { seconds = "0"+currentDate.getSeconds() };
        if(currentDate.getMilliseconds() < 10) {
            milliseconds = "00"+currentDate.getMilliseconds();
        } else if(currentDate.getMilliseconds() < 100) {
            milliseconds = "0"+currentDate.getMilliseconds();
        }

        id = `${currentDate.getFullYear()}${month}${date}${hours}${minutes}${seconds}.${milliseconds}.col_mlm_ux.${Math.floor(Math.random()*10000)}`;

        /**
         * Validation
         */
        const errors: Array<ValidationError> = [];

        if (message.feature_key == null) {
            errors.push({
                msg: "Parameter 'feature_key' tidak ditemukan",
                param: "feature_key",
                location: "params",
                value: undefined
            });
        } else if (message.feature_key.length > 40) {
            errors.push({
                msg: "Parameter 'feature_key' harus diisi maksimal 40 karakter.",
                param: "feature_key",
                location: "params",
                value: undefined
            });
        }

        if (message.user_id == null) {
            errors.push({
                msg: "Parameter 'user_id' tidak ditemukan",
                param: "user_id",
                location: "params",
                value: undefined
            });
        }

        if (message.action == null) {
            errors.push({
                msg: "Parameter 'action' tidak ditemukan",
                param: "action",
                location: "params",
                value: undefined
            });
        }

        if (errors.length !== 0) {
            throw new MQTTValidationException(
                errors
            );
        }

        new ActivityLogRepositoryImpl().createActivityLog(id, message.feature_key, message.user_id, message.description, message.action);

    }
}