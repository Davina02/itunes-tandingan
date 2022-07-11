import { MQTTSubscriberHandler } from "../../main/handler/MQTTSubscriberHandler";

async function main(): Promise<void> {
    console.log("Begin running MQTTSubscriberTesting.ts");

    const handler = new MQTTSubscriberHandler();

    const timeInit = new Date();

    try {
        handler.handleActivityLog({"feature_key": 'Ini adalah feature_key', "user_id": '12345678910', "description": 'Ini adalah description', "action": 'Ini adalah action'});
        console.log(`Handle Activity Log Function Test Passed with time of ${(new Date().getTime() - timeInit.getTime()) / 1000} seconds! `);
    } catch (error: any) {
        console.log("Handle Activity Log Function Error: "+ error.message);
    }  

}

export default main();
