const { request, response } = require("express");
const express = require("express");

const PORT = 3000;
const server = express();
const router = express.Router();

router.get("/", (request, response) => {
  // console.log(request);
  console.log(request.params);

  const tortilla = {
    huevos: 4,
    patatas: "Muchas",
    punto: "poco",
    materialCocina: {
      sarten: 2,
      ollas: false,
      espatula: true,
    },
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
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
