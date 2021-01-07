const express = require('express');
const app = express();

// MongoDB Connectivity
const connectDB = require('./Config/db');
connectDB();

app.use(express.json());

// All Routes
app.use('/api/user', require('./routes/User'));
app.use('/api/auth',require('./routes/Auth'));
app.use('/api/articles',require('./routes/Article'));
app.use('/api/tags',require('./routes/Tag'));

const PORT = process.env.PORT || 5000; 

app.listen(PORT , () => {
    console.log(`Server Started at port - ${PORT}`);
})