/**
 * WRITING TEST
 *
 * You can specify every unit Tests in here.
 */

 import "../main/config/NoSQLConfig";

 async function main() {
     await require("./example/Index");
     await require("./example/mqttSubscriberTesting");
 }
 
 // process.exit(0);
 main().then(() => { console.log("Testing Done. Use CTRL+C or COMMAND+C to close this test run.") });