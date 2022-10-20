import { MongoClient } from 'mongodb'

type Opts = {
  useNewUrlParser: boolean
  useUnifiedTopology: boolean
}

const { MONGO_URI = '', MONGO_DB = '' } = process.env

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  console.log('process.env.MONGO_URI', process.env.MONGO_URI)
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts: Opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(MONGO_URI, opts).then(client => {
      return {
        client,
        db: client.db(MONGO_DB),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
