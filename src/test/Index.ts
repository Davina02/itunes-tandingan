// Make sure to put any pre-condition to make sure your application is running well in here
import dotenv from 'dotenv';
dotenv.config();

import config from '../main/config/Config';
import { Log } from "../main/config/Logging";
import NoSQLConfig from '../main/config/NoSQLConfig';


/**
 * WRITING TEST
 *
 * You can specify every unit Tests in here.
 */
async function main() {
    NoSQLConfig;

    await require("./example/Index");
    const mqttSubscriberTesting = require("./example/mqttSubscriberTesting");
    await mqttSubscriberTesting;
}

main().then(() => {
    process.exit(0);
})