//objetos manipulacion
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//hacer al objeto estatico
//Object.freeze(producto);
//modificar pero no agregar ni eliminar propiedades
//Object.seal(producto);

//reescribir un valor
producto.disponible = false;

//agregar propiedades
producto.imagen = "imagen.jpg";

//eliminar propiedades
delete producto.precio;

console.log(producto);
