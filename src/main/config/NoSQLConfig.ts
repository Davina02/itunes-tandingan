import { Mongoose } from 'mongoose';
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
export class MongoDBConnection {

    private static _instance: any | null = null;
    private mongooseInstance: Mongoose | null = null; 

    /**
     * @private
     * 
     * This constructor is empty, because 
     * this class is singleton.
     */
    private constructor(){
        this.instansiateMongooseInstance();
    }

    private instansiateMongooseInstance(): void {
        const mongodb = config.database.mongod;
        const connectionString: string = `mongodb://${mongodb.username}${mongodb.username === '' && mongodb.password === '' ? '' : ':'}${mongodb.password}${mongodb.username === '' && mongodb.password === '' ? '' : '@'}${mongodb.host}:${mongodb.port}/${mongodb.database}`;
        console.log(connectionString);

        const mongoDbInstance = new Mongoose();
        mongoDbInstance.connect(connectionString).then(e => {
            console.log("Within config, the connection ready state is: " + e.connection.readyState);

            Log.d("MONGOD_CONNECTION", `Connection to mongodb server has been established.` + connectionString);
        }).catch(e => {
            console.log(e.message)
            Log.e("MONGOD_CONNECTION", "There's something wrong with the connection: " + e.message)
        });

        this.mongooseInstance = mongoDbInstance;
    }

    public getMongooseInstance(): Mongoose {
        if(this.mongooseInstance === null){
            throw new Error("Mongoose has not been established!!!");
        }

        return this.mongooseInstance;
    }

    public static checkCreatedInstance(): MongoDBConnection | null {
        return this._instance;
    }

    public static getInstance(): MongoDBConnection {

        if(this._instance === null){
            this._instance = new MongoDBConnection();
        }

        return this._instance;
    }
}

export default MongoDBConnection.getInstance();