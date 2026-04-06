exports.getHome = (req, res) => {
  res.render("index", {
    title: "Portafolio - Yalik Tapuy",
    name: "Yalik Amilcar Tapuy Alvarado",
    profession: "Programador, Game Designer y Diseñador Web",
    currentYear: new Date().getFullYear(),
  });
};

exports.postContact = (req, res) => {
  const { nombre, correo, telf, motivo, mensaje } = req.body;

  // Aquí puedes procesar el formulario
  console.log("Formulario recibido:", {
    nombre,
    correo,
    telf,
    motivo,
    mensaje,
  });

  // Por ahora solo redirigimos
  res.redirect("/#Contactos");
};