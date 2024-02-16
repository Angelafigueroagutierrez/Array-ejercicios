// Negocio

class Producto {
    constructor(nombre, descripcion, precio, cantidadStock, categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidadStock = cantidadStock;
        this.categoria = categoria;
    }
}

let inventario = [];
function agregarProducto(nombre, descripcion, precio, cantidadStock, categoria) {
    let producto = new Producto(nombre, descripcion, precio, cantidadStock, categoria);
    inventario.push(producto);
}

function listarProductos() {
    inventario.forEach(producto => {
        console.log("Nombre:", producto.nombre);
        console.log("Descripción:", producto.descripcion);
        console.log("Precio:", producto.precio);
        console.log("Cantidad en stock:", producto.cantidadStock);
        console.log("Categoría:", producto.categoria);
        console.log("-----------------------------");
    });
}

function buscarProducto(nombre) {
    let productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log("Producto encontrado:");
        console.log("Nombre:", productoEncontrado.nombre);
        console.log("Descripción:", productoEncontrado.descripcion);
        console.log("Precio:", productoEncontrado.precio);
        console.log("Cantidad en stock:", productoEncontrado.cantidadStock);
        console.log("Categoría:", productoEncontrado.categoria);
    } else {
        console.log("Producto no encontrado.");
    }
}

function eliminarProducto(nombre) {
    inventario = inventario.filter(producto => producto.nombre !== nombre);
    console.log("Producto eliminado del inventario.");
}

function actualizarStock(nombre, nuevaCantidad) {
    let producto = inventario.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidadStock = nuevaCantidad;
        console.log("Cantidad en stock actualizada.");
    } else {
        console.log("Producto no encontrado.");
    }
}

agregarProducto("Camisa", "Camisa de algodón", 25.99, 50, "Ropa");
agregarProducto("Pantalón", "Pantalón vaquero", 39.99, 30, "Ropa");

listarProductos();
buscarProducto("Camisa");
eliminarProducto("Pantalón");
actualizarStock("Camisa", 40);

console.log("Inventario actualizado:");
listarProductos();