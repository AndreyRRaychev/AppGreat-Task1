
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server started in port 3000!");
})

app.post('/api/upload', (req, res) => {
    const { body } = req;
    const newPhoto = new Photo(body);
    try {
        const photo = newPhoto.save();
        return res.send({ ...photo });
    } catch (err) {
        return res.send({ err: "error 400" });
    }
});

app.delete("/api/photo/:id", (req, res) => {
    const photoId = req.url.split('/');
    try {
        const photo = photoId.findByIdAndDelete(photoId);
        if (!photo) throw new Error(`Photo with id ${photoId} not found.`);
        return res.status(200).send({ msg: "Photo deleted successfully." });
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
})

app.get("/api/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "./uploads/image.png"));
  });