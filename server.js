const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// KONFIG EMAIL (gunakan Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ngodingbareng@gmail.com",
        pass: "MASUKKAN_PASSWORD_APLIKASI",
    },
});

// API simpan + kirim email
app.post("/save-location", async (req, res) => {
    const { latitude, longitude } = req.body;

    console.log(`Lokasi diterima: ${latitude}, ${longitude}`);

    // Kirim email ke developer
    try {
        await transporter.sendMail({
            from: "Location Bot <ngodingbareng@gmail.com>",
            to: "ngodingbareng@gmail.com",
            subject: "Lokasi Pengunjung Baru",
            text: `Lokasi pengguna:\nLatitude: ${latitude}\nLongitude: ${longitude}`,
        });

        res.send("Lokasi disimpan & email terkirim!");
    } catch (error) {
        console.error("Gagal kirim email:", error);
        res.status(500).send("Lokasi tersimpan tapi email gagal dikirim.");
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
