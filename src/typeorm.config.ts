import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'
// import { User } from './entities/User'
// import { Product } from './entities/Products'


export default {
    type: 'postgres',
    "database": "dcuva41horg1mv",
    "host": "ec2-52-50-171-4.eu-west-1.compute.amazonaws.com",
    "port": 5432,
    "username": "qzdaoiomewrxjn",
    "password": "13172cbcfd564553a3d2ab072702f2e3e047e81de3fb7729c2433cb75475d856",
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
