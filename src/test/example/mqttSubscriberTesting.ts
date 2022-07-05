import { MQTTSubscriberHandler } from "../../main/handler/MQTTSubscriberHandler";

async function main(): Promise<void> {
    const handler = new MQTTSubscriberHandler();
  
    // if(handler.handleActivityLog('{"feature_key": "Ini adalah feature_key", "user_id": 12345678910, "description": "Ini adalah description", "action": "Ini adalah action"}')){
    //   console.log("handleActivityLog Functional Test Passed!");
    // }

  }
  
  export default main();