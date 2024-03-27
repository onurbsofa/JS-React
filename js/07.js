const cliente = {
  nombre: "Juan",
  saldo: 200,
  direccion: {
    ciudad: "Buenos Aires",
    pais: "Argentina",
  },
};

const producto = {
  nombre: "Televisor",
  precio: 300,
};

const venta = {
  ...cliente,
  ...producto,
};

const venta2 = Object.assign( cliente, producto);

console.log(venta);
console.log(venta2);
