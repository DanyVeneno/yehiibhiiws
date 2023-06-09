import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "Juanito Veneno Estudio | Inicio" })
);

router.get("/about", (req, res) =>
  res.render("about", { title: "Juanito Veneno Estudio | Nosotros" })
);

router.get("/servicios", (req, res) =>
  res.render("servicios", { title: "Juanito Veneno Estudio | Servicios" })
);

router.get("/podcast", (req, res) =>
  res.render("podcast", { title: "Juanito Veneno Estudio | Podcast" })
);
router.get("/store", (req, res) =>
  res.render("store", { title: "Juanito Veneno Estudio | Tienda" })
);

router.get("/contact", (req, res) =>
  res.render("contact", { title: "Juanito Veneno Estudio | Contacto" })
);

router.get("/src/views/manual", (req, res) =>
  res.render("manual", {
    title: "Juanito Veneno Estudio | Manual De Identidad"
  })
);

export default router;
