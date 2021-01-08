const express = require("express");
const app = express();
const path = require("path");

// MongoDB Connectivity
const connectDB = require("./Config/db");
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// All Routes
app.use("/api/user", require("./routes/userServer"));
app.use("/api/auth", require("./routes/authServer"));
app.use("/api/articles", require('./routes/articlesServer'));
app.use("/api/tags", require("./routes/tagServer"));


// Server Static assests in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at port - ${PORT}`));
