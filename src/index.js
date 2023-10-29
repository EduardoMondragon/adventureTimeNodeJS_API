const express = require("express");
const colors = require("colors");
const cors = require("cors");
const app = express();
// imported routes
// const registerRoutes = require("./routes/user/register.routes");


// Middleware que transforma req.body en json
app.use(express.json());
// Middleware para analizar solicitudes URL-encoded
app.use(express.urlencoded({ extended: true }));
// Cors will allow access for selected domains to use the endpoints
app.use(cors());

// routes
// app.use("/auth", loginRoutes, registerRoutes, userAvailableRoutes);


app.listen(() => {
  console.log(`Servidor corriendo en el puerto ${5001}`.green);
});
