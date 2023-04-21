const express = require('express');
const app = express();

// delcare route
app.get("/", (req, res) => {
    res.send("Response to client")
})

app.listen(3001, () => {
    console.log("Node API app us running on port 3001");
})