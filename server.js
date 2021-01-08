const express = require("express");
const app = express();
const path = require("path");

// MongoDB Connectivity
const connectDB = require("./config/db");
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// All Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/articles", require('./routes/articles'));
app.use("/api/tags", require("./routes/tag"));


// Server Static assests in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at port - ${PORT}`));
