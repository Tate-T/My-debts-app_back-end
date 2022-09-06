const express = require('express');
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const debtsRouter = require("./routes/api/debts");

const app = express();


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());


app.use("/api/debts", debtsRouter);
app.use(express.static("public"));

app.use((req, res) => {
    res.status(404).json({ message: "Not found, app" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });


module.exports = app;