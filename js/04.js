//objetos
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

console.table(producto);
console.log(producto.precio);

//destructuring
const { nombreProducto, precio } = producto;
// son lo mismo
const nombre = producto.nombreProducto;

//objet literal enhancement
const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master of Puppets", "Seek & Destroy", "Enter Sandman"];

const metallica = { banda, genero, canciones };
console.log(metallica);
