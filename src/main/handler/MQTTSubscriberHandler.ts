import { MQTTValidationException } from "../common/exception/MQTTValidationException";
import { ActivityLogRepositoryImpl } from "../repository/nosql/impl/ActivityLogRepositoryImpl";

export class MQTTSubscriberHandler {

    public handleActivityLog = (message: any) => {
        
        /**
         * Generate id
        */
        let id = "";

        const currentDate = new Date();
        let month = "";
        let date = "";
        let hours = "";
        let minutes = "";
        let seconds = "";
        let milliseconds = "";

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
        if (message.feature_key == null) {
            throw new MQTTValidationException();
        } else if (message.feature_key.length() > 40) {
            throw new MQTTValidationException();
        }

        if (message.user_id == null) {
            throw new MQTTValidationException();
        }

        if (message.action == null) {
            throw new MQTTValidationException();
        }

        new ActivityLogRepositoryImpl().createActivityLog(id, JSON.stringify(message.feature_key), message.user_id.toString(), JSON.stringify(message.description), JSON.stringify(message.action));

    }
}