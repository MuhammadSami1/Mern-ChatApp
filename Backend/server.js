import express from 'express'
import { createServer } from 'http'
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMogoDB.js';

// Routes 
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const Port = process.env.port || 5000;
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    return res.send("Hello World")
})

app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()) // to parse the incoming cookies from req.cookie

app.use('/api/auth', authRoutes); // Login Route
app.use('/api/messages', messageRoutes); //message Route
app.use('/api/users', userRoutes); // User Routes

// Server Listening
server.listen(Port, () => {
    connectToMongoDB();
    console.log(`Server successfully running on : ${Port}`);

})

