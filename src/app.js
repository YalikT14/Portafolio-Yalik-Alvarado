const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

// Configuración de Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Rutas
app.use("/", indexRouter);

// Manejo de errores 404 - DEBE IR AL FINAL
app.use((req, res) => {
  res.status(404).render("error", {
    title: "404 - Página no encontrada",
    message: "La página que buscas no existe",
    currentYear: new Date().getFullYear(),
  });
});

// Manejo de errores del servidor
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).render("error", {
    title: "Error del servidor",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Ocurrió un error en el servidor",
    currentYear: new Date().getFullYear(),
  });
});

module.exports = app;