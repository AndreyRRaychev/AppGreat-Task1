
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server started in port 3000!");
})

app.post('/api', (req, res) => {
    const { body } = req;
    const newPhoto = new Photo(body);
    try {
        const photo = newPhoto.save();
        return res.send({ ...photo });
    } catch (err) {
        return res.send({ err: "error 400" });
    }
});

app.get("/api/allPhotos", (req, res) => {
    try {
        const allPhotos = Photo.find();
    }
    catch (err) {
        return res.send({ err: "error 400" });
    }
})

app.delete("/api/photo/:id", (req, res) => {
    const photoId = request.url.split('/')[3];
    try {
        const photo = Photo.findByIdAndDelete(photoId);
        if (!photo) throw new Error(`Photo with id ${photoId} not found`);
        return response.status(200).send({ msg: "Photo deleted successfully" });
    } catch (err) {
        return response.status(404).send({ msg: err.message });
    }
})

app.get("/api/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "./uploads/image.png"));
  });