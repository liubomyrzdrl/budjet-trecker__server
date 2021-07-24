import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'
// import { User } from './entities/User'
// import { Product } from './entities/Products'


export default {
    type: 'postgres',
    "database": "de9spueqlas61b",
    "host": "ec2-54-228-174-49.eu-west-1.compute.amazonaws.com",
    "port": 5432,
    "username": "rcgqcnqqybbzxj",
    "password": "f8a8e88ff4e1909aac2562e530f7ffa5357092896b2dede157633136f59edc5d",
    "synchronize": true,
    "entities": [

     ],
     "migrations": [
        "src/migration/**/*.ts"
     ],
     "subscribers": [
        "src/subscriber/**/*.ts"
     ],
     "cli": {
        "migrationsDir": "migration",
        "entitiesDir": "src/entity",
        "subscribersDir": "src/subscriber"
    }
} as ConnectionOptions
