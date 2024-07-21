const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8001;

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected successfully');
    } catch (error) {
        console.log('DB connection error', error);
        process.exit(1);
    }
};

const corsOptions = {
    origin: 'http://localhost:3000', // allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable cookies and other credentials
    optionsSuccessStatus: 204
};
// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

connectDb();
