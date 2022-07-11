// Make sure to put any pre-condition to make sure your application is running well in here
import '../main/config/NoSQLConfig';

/**
 * WRITING TEST
 *
 * You can specify every unit Tests in here.
 */
async function main() {

    await require("./example/Index");
    await require("./example/mqttSubscriberTesting");
}

main().then(() => { console.log("Testing Done. Use CTRL+C or COMMAND+C to close this test run.") });