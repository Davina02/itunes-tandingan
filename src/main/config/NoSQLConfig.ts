import mongoose from 'mongoose';
import { Log } from './Logging';
import config from './Config';


/**
 * @singleton 
 * 
 * MongoDBConnection
 * 
 * This class is for configurating MongoDB instance.
 * Should be singleton.
 */
class MongoDBConnection {

    private static _instance: any | null = null;

    /**
     * @private
     * 
     * This constructor is empty, because 
     * this class is singleton.
     */
    private constructor(){
        const mongodb = config.database.mongod;
        const connectionString: string = `mongodb://${mongodb.username}${mongodb.username === '' && mongodb.password === '' ? '' : ':'}${mongodb.password}${mongodb.username === '' && mongodb.password === '' ? '' : '@'}${mongodb.host}:${mongodb.port}/${mongodb.database}`;
        console.log(connectionString);

        mongoose.connect(connectionString).then(e => {
            Log.d("MONGOD_CONNECTION", `Connection to mongodb server has been established.` + connectionString);
            console.log("Connection to mongodb server has been established." + connectionString);
        });
        
    }

    public static getInstance(): MongoDBConnection {

        if(this._instance === null){
            this._instance = new MongoDBConnection();
        }

        return this._instance;
    }
}

export default MongoDBConnection.getInstance();