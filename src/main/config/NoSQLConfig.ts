import mongoose from 'mongoose';
import { Log } from './Logging';
import config from './Config';

const main = async () => {
    const mongodb = config.database.mongod;
    const connectionString: string = `mongodb://${mongodb.username}${mongodb.username === '' && mongodb.password === '' ? '' : ':'}${mongodb.password}${mongodb.username === '' && mongodb.password === '' ? '' : '@'}${mongodb.host}:${mongodb.port}/${mongodb.database}`;
    console.log(connectionString);

    await mongoose.connect(connectionString).then(e => {
        console.log("Within config, the connection ready state is: " + e.connection.readyState);

        Log.d("MONGOD_CONNECTION", `Connection to mongodb server has been established.` + connectionString);
    }).catch(e => {
        console.log(e.message)
        Log.e("MONGOD_CONNECTION", "There's something wrong with the connection: " + e.message)
    });
}

export default main();