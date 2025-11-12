import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const options = { 
  serverApi: { version: '1', strict: true, deprecationErrors: true } 
};

if (!uri) throw new Error("MONGODB_URI must be defined in .env.local");

// Cache połączenia w środowisku serverless
let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, options).then((mongoose) => {
      console.log("Połączono z MongoDB!");
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
