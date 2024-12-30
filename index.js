const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;
const { createWakeUpServer } = require("@koding88/wakeup-render");

app.get("/", (req, res) => {
    res.send("Hello from test-render1!");
});

app.listen(port, () => {
    console.log(`Server 1 is running at http://localhost:${port}`);
});

const wakeupConfig = {
    port: process.env.WAKEUP_PORT || 3000,
    pingUrl: process.env.PING_URL,
    interval: process.env.INTERVAL || 600000, // 10 minutes
};

createWakeUpServer(wakeupConfig);
