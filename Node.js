const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Lokasi diterima: Latitude = ${latitude}, Longitude = ${longitude}`);
    res.send("Lokasi diterima!");
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
