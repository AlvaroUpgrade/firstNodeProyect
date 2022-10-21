const { request, response } = require("express");
const express = require("express");

const PORT = 3000;
const server = express();
const router = express.Router();

router.get("/", (request, response) => {
  // console.log(request);
  console.log(request.params);

  const tortilla = {
    huevos: 3,
    patatas: "Muchas",
    punto: "poco",
  };

  //   console.log(response);      Procesamos la informacion y enviamos el resultado
  return response.send(tortilla);
});

//endpoint
router.get("/huevos-fritos", (request, response) => {
  const huevosFritos = {
    cantidad: 4,
    variedad: "huevos camperos",
    patatas: true,
  };

  return response.send(huevosFritos);
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Servidor a toda maquina en http://localhost:${PORT}`);
});
