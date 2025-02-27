const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let userLocation = null;

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    userLocation = { latitude, longitude };
    console.log(`Lokasi diterima: Latitude = ${latitude}, Longitude = ${longitude}`);
    res.send("Lokasi diterima!");
});

app.get('/get-location', (req, res) => {
    if (userLocation) {
        res.json(userLocation);
    } else {
        res.status(404).send("Belum ada lokasi yang diterima.");
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
