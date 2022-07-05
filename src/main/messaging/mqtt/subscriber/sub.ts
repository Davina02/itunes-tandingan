import mqtt from "mqtt";
import { MQTTSubscriberHandler } from "../../../handler/MQTTSubscriberHandler";

const client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', function(){
    client.subscribe("ActivityLog");
    console.log("Client has subscribed successfully.");
});

client.on('message', function(topic, message){
    const buf_message = Buffer.from(message).toString();
    const json_message = JSON.parse(buf_message);

    console.log(json_message);

    new MQTTSubscriberHandler().handleActivityLog(json_message);

    /**
     * Test
     */
    // console.log(message.toString());
});