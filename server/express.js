const express = require('express');
const { exec } = require('node:child_process');

const app = express();
const port = 3000;

app.use(express.static('../public'));
app.get('/api/rankings', (req, res) => {
    const {scope, wcaId} = req.query();
    exec(`../backend/better_sor --scope ${scope} --wcaId ${wcaId}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).send(stderr);
        }
        res.json(JSON.parse(stdout));
      });
});

app.listen(port, () => {
    console.log(`Running on ${port}`)
});