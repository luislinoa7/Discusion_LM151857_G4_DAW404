// Definimos la clase Producto
class Producto {
    constructor(nombre, precioUnitario, cantidad) {
        this.nombre = nombre;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
        this.detalle = this.precioUnitario * this.cantidad;
    }
}

// Array para almacenar los productos de la venta
const productosVenta = [];

// Función para agregar un producto a la venta
function agregarProducto() {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Crear un objeto Producto y agregarlo al array productosVenta
    const producto = new Producto(nombreProducto, precioUnitario, cantidad);
    productosVenta.push(producto);

    // Actualizar la tabla de productos
    actualizarTabla();

    // Calcular el total de la venta
    calcularTotalVenta();
}

// Función para actualizar la tabla de productos
function actualizarTabla() {
    const tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = "";

    productosVenta.forEach(producto => {
        const row = tablaProductos.insertRow();
        row.insertCell(0).textContent = producto.nombre;
        row.insertCell(1).textContent = producto.precioUnitario;
        row.insertCell(2).textContent = producto.cantidad;
        row.insertCell(3).textContent = producto.detalle;
    });
}

// Función para calcular el total de la venta
function calcularTotalVenta() {
    const totalVenta = productosVenta.reduce((total, producto) => total + producto.detalle, 0);
    document.getElementById("totalVenta").textContent = totalVenta;
}

// Asociar la función agregarProducto al botón "Agregar Producto"
document.getElementById("agregarProducto").addEventListener("click", agregarProducto);
