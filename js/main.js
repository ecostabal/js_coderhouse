const productos = [
     {
        "id": 1,
        "urlImg": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "nombre": "Collar ajustable",
        "descripcion": "Collar resistente y ajustable para perros de todos los tamaños.",
        "precio": 19.99,
        "stock": 10
    },
    {
        "id": 2,
        "urlImg": "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "nombre": "Correa extensible",
        "descripcion": "Correa resistente y extensible para mayor comodidad durante los paseos.",
        "precio": 14.99,
        "stock": 5
    },
    {
        "id": 3,
        "urlImg": "https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
        "nombre": "Juguete mordedor",
        "descripcion": "Juguete de goma duradero para satisfacer el instinto de morder de tu perro.",
        "precio": 9.99,
        "stock": 15
    },
    {
        "id": 4,
        "urlImg": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2428&q=80",
        "nombre": "Cama acolchada",
        "descripcion": "Cama suave y acolchada para que tu perro descanse cómodamente.",
        "precio": 29.99,
        "stock": 8
    },
    {
        "id": 5,
        "urlImg": "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        "nombre": "Comedero de acero inoxidable",
        "descripcion": "Comedero resistente de acero inoxidable para facilitar la alimentación de tu perro.",
        "precio": 12.99,
        "stock": 12
    },
    {
        "id": 6,
        "urlImg": "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "nombre": "Chaqueta impermeable",
        "descripcion": "Chaqueta impermeable para proteger a tu perro de la lluvia y el viento.",
        "precio": 24.99,
        "stock": 3
    },
    {
        "id": 7,
        "urlImg": "https://images.unsplash.com/photo-1562317305-58a17fe2c09e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "nombre": "Cepillo de pelo",
        "descripcion": "Cepillo suave para el pelo de tu perro, evitando enredos y nudos.",
        "precio": 7.99,
        "stock": 20
    },
    {
        "id": 8,
        "urlImg": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "nombre": "Snacks saludables",
        "descripcion": "Snacks naturales y saludables para premiar a tu perro durante el entrenamiento.",
        "precio": 5.99,
        "stock": 18
    },
    {
        "id": 9,
        "urlImg": "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "nombre": "Arnés acolchado",
        "descripcion": "Arnés cómodo y acolchado para pasear a tu perro sin lastimar su cuello.",
        "precio": 17.99,
        "stock": 7
    },
    {
        "id": 10,
        "urlImg": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "nombre": "Pelota de tenis",
        "descripcion": "Pelota de tenis resistente para que tu perro disfrute de jugar al lanzar y atrapar.",
        "precio": 3.99,
        "stock": 25
    },
    {
        "id": 11,
        "urlImg": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "nombre": "Transportín plegable",
        "descripcion": "Transportín plegable y ligero para llevar a tu perro de manera segura.",
        "precio": 39.99,
        "stock": 4
    },
    {
        "id": 12,
        "urlImg": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "nombre": "Bozal ajustable",
        "descripcion": "Bozal ajustable para evitar que tu perro muerda o ladre de forma excesiva.",
        "precio": 9.99,
        "stock": 9
    },
]

let carrito = [];

const verProducto = ({ id, nombre, precio, descripcion, stock, urlImg }) => {
  const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML = `
    <img src="${urlImg}" alt="">
    <div class="contenido">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <span><b>💰</b> $${precio}</span>
    </div>
    <form id="formCarrito${id}">
        <div class="tarjetaAction">
            <p>Quedan ${stock} unidades.</p>
            <input name="id" type="hidden" value="${id}">
            <input name="cantidad" type="number" value="1" min="1" max="${stock}">
            <button id="submit" type="submit">Agregar</button>
        </div>
    </form>`;
  contenedorTarjetas.append(tarjeta);
};

const agregarCarrito = (id, stock) => {
  const formCarrito = document.querySelector("#formCarrito" + id);
  formCarrito.addEventListener("submit", (e) => {
    e.preventDefault();
    const cantidad = parseInt(e.target.elements["cantidad"].value);
    if (cantidad > stock) {
      alert("No hay suficiente stock disponible.");
      return;
    }
    carrito.push({
      id,
      cantidad,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar contador del carrito
    const contadorCarrito = document.getElementById("contadorCarrito");
    contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);

    // Limpiar el formulario
    e.target.reset();
  });
};

const verProductos = () => {
  productos.forEach((producto) => {
    if (producto.stock !== 0) {
      verProducto(producto);
      agregarCarrito(producto.id, producto.stock);
    }
  });
};

// Actualizar contador del carrito al cargar la página
const contadorCarrito = document.getElementById("contadorCarrito");
contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);

// Limpiar carrito al recargar la página
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("carrito");
});

verProductos();