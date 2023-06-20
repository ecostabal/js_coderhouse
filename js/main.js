let carrito = [];

const mostrarNotificacion = () => {
  const notificacion = document.createElement('div');
  notificacion.textContent = '👜 Producto agregado al carrito';
  notificacion.classList.add('notificacion');
  document.body.appendChild(notificacion);

  setTimeout(() => {
    notificacion.remove();
  }, 3000);
};

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

    const contadorCarrito = document.getElementById("contadorCarrito");
    contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);

    e.target.reset();
    mostrarNotificacion();
  });
};

const verProductos = async () => {
  const res = await fetch("./productos.json")
  const productos = await res.json()
  productos.forEach((producto) => {
    if (producto.stock !== 0) {
      verProducto(producto);
      agregarCarrito(producto.id, producto.stock);
    }
  });
};

const contadorCarrito = document.getElementById("contadorCarrito");
contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("carrito");
});

verProductos();