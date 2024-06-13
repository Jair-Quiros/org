const jsonServer = require('json-server');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const server = express();
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); // Servir archivos estáticos desde la carpeta 'uploads'

const upload = multer({ dest: path.join(__dirname, '..', 'uploads') });

server.post('/productos', upload.single('imagen'), (req, res) => {
    const imagenURL = `/uploads/${req.file.filename}`;
    const { descripcion, precio, titulo } = req.body;

    const dbPath = path.join(__dirname, '..', 'db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const newProduct = {
        id: Date.now(),
        descripcion,
        precio,
        titulo,
        url: imagenURL
    };

    db.productos.push(newProduct);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json(newProduct);
});

server.use('/api', router);

server.listen(3001, () => {
    console.log('JSON Server is running on http://localhost:3001');
});
