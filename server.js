// server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// --- BASE DE DATOS ---
const db = new sqlite3.Database("./ecopoints.db");

// Crear tabla de usuarios si no existe
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

    // Usuario de prueba: eco / 1234

    db.run(
        `INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`,
        ["Hugo", "1234"]
    );

    db.run(
        `INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`,
        ["Emiliano", "1234"]
    );

    db.run(
        `INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`,
        ["Josue", "1234"]
    );
});

// --- MIDDLEWARES ---
app.use(express.json()); // para leer JSON del body
app.use(express.static(path.join(__dirname, "public"))); // servir front (login, index, css, etc.)

// --- RUTA DE LOGIN ---
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res
            .status(400)
            .json({ ok: false, error: "Falta usuario o contraseña" });
    }

    db.get(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, row) => {
            if (err) {
                console.error("Error en la BD:", err);
                return res
                    .status(500)
                    .json({ ok: false, error: "Error interno del servidor" });
            }

            if (!row) {
                return res
                    .status(401)
                    .json({ ok: false, error: "Usuario o contraseña incorrectos" });
            }

            // Para demo: solo regresamos ok y el usuario
            res.json({ ok: true, username: row.username });
        }
    );
});

// --- INICIAR SERVIDOR ---
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
