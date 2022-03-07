const express = require('express');
const os = require('os');
const fs = require('fs');

const app = express();

const myCss = {
    style: fs.readFileSync('./css/styles.css'),
}
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    
    const { arch, type, totalmem, freemem, cpus} = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const status = {
        cpu: cpus()[0].model,
        os: type(),
        arch: arch(),
        totalRam: `${parseInt(tRam)} MB`,
        freeRam: `${parseInt(fRam)} MB`,
        speedRam: `${cpus()[0].speed} MHz`,
        usage: `${usage.toFixed(2)}%`
    }

    res.render("index", {
        myCss: myCss,
        status: status,
    })
});

app.listen(3080, () => console.log("Server is Running!"));