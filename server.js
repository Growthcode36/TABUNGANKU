const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let userLocation = null;

// API untuk menyimpan lokasi pengguna
app.post("/save-location", (req, res) => {
    const { latitude, longitude } = req.body;
    userLocation = { latitude, longitude };
    console.log(`Lokasi diterima: Latitude = ${latitude}, Longitude = ${longitude}`);
    res.send("Lokasi berhasil disimpan!");
});

// API untuk mendapatkan lokasi yang tersimpan
app.get("/get-location", (req, res) => {
    if (userLocation) {
        res.json(userLocation);
    } else {
        res.status(404).send("Belum ada lokasi yang tersimpan.");
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
