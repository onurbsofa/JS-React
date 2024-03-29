//objetos
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  saldo: 200,
  direccion: {
    ciudad: "Mexico",
    calle: "Felipe Carrillo Puerto",
  },
};

//destructuring doble evitar repetir nombres
const {
  nombre,
  direccion: { calle },
} = cliente;
const { nombre: nombreProducto } = producto;
