import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'

export default {
    type: 'postgres',
    "database": "d9mpkuvh5oa1b9",
    "host": "ec2-52-86-2-228.compute-1.amazonaws.com",
    "port": 5432,
    "username": "cggpbentastmehj",
    "password": "ffed1767d46f64fd9f7b0371bed296c1079ffb17cc523065a47f66be0d7888b5",
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
