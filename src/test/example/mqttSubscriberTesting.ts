
import { MQTTSubscriberHandler } from "../../main/handler/MQTTSubscriberHandler";

async function main(): Promise<void> {
    const handler = new MQTTSubscriberHandler();

    try {
        handler.handleActivityLog({"feature_key": 'Ini adalah feature_key', "user_id": '12345678910', "description": 'Ini adalah description', "action": 'Ini adalah action'});
        console.log("Handle Activity Log Function Test Passed! ");
    } catch (error: any) {
        console.log("Handle Activity Log Function Error! "+ error.message);
    }  

    
  }
  
  export default main();