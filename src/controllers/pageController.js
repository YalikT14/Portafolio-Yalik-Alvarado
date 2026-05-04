exports.getHome = (req, res) => {
  res.render("pages/home", {
    title: "Portafolio - Yalik Tapuy",
    name: "Yalik Tapuy",
    profession: "Game Designer, Diseñador Web y Actor de Voz",
    currentYear: new Date().getFullYear(),
  });
};

exports.getPortfolio = (req, res) => {
  res.render("pages/portafolio", {
    title: "Portafolio - Yalik Tapuy",
    category: null, // Sin categoría = no renderizar nada
    currentYear: new Date().getFullYear(),
  });
};

exports.getPortfolioCategory = (req, res) => {
  const { category } = req.params;
  const validCategories = ["programacion", "diseno", "doblaje"];

  if (!validCategories.includes(category)) {
    return res.redirect("/portafolio");
  }

  const categoryNames = {
    programacion: "Programación",
    diseno: "Diseño",
    doblaje: "Doblaje",
  };

  res.render("pages/portafolio", {
    title: `Portafolio - ${categoryNames[category]}`,
    category,
    currentYear: new Date().getFullYear(),
  });
};

exports.getAbout = (req, res) => {
  res.render("pages/about", {
    title: "Sobre Mí - Yalik Tapuy",
    name: "Yalik Amilcar Alvarado",
    currentYear: new Date().getFullYear(),
  });
};

exports.postContact = (req, res) => {
  const { nombre, correo, telf, motivo, mensaje } = req.body;

  console.log("Formulario recibido:", {
    nombre,
    correo,
    telf,
    motivo,
    mensaje,
  });

  res.redirect("/sobre-mi#contacto");
};