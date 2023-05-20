class Propiedad {
    constructor(cliente,tipo,comuna,amoblado,precio){
        this.cliente = cliente
        this.tipo = tipo
        this.comuna = comuna
        this.amoblado = amoblado
        this.precio = precio
        this.fechaCreacion = new Date()
        this.fechaActualizacion
        
    }
    aumentoPrecioAmoblado(porcentaje){
        this.precio = this.precio + this.precio * porcentaje
        this.fechaActulizacion = new Date()
    }
}

const propiedades = []

confirm("Bienvenido a nuestro sistema para publicar propiedades.")

let continuar = true

while(continuar === true){
    const cliente = prompt("Ingrese nombre de cliente.").toUpperCase()
    const tipo = prompt("Ingrese tipo de propiedad.").toUpperCase()
    const comuna = prompt("Ingrese comuna de propiedad.").toUpperCase()
    const amoblado = prompt("¿Es amoblado? (Si / No)").toUpperCase()
    const precio = parseInt(prompt("Ingrese el precio de la propiedad."))
    const propiedad = new Propiedad (cliente, tipo, comuna, amoblado, precio)
    propiedades.push(propiedad)
    continuar = confirm("¿Quiere continuar cargando propiedades?")
}
console.log(propiedades)

continuar = confirm("Quiere eliminar alguna propiedad")
while(continuar){
    const propiedadEliminar = prompt("Ingrese al cliente dueño de la propiedad que quiere eliminar.").toUpperCase()
    const index = propiedades.findIndex((propiedad)=> propiedad.cliente === propiedadEliminar)
    if(index != -1){
        propiedades.splice(index,1)
        alert("La propiedad ha sido eliminada.")
    }else{
        alert("No se pudo eliminar la propiedad, ya que el cliente no existe.")
    }
    continuar = confirm("¿Quiere eliminar alguna otra propiedad?")
}

console.log(propiedades)

continuar = confirm("¿Quiere modificar alguna propiedad?")

while(continuar){
    const propiedadActualizar = prompt("Ingrese al cliente dueño de la propiedad que quiere modificar.").toUpperCase()
    const index = propiedades.findIndex((propiedad)=> propiedad.cliente === propiedadActualizar)
    if(index != -1){
        const cliente = prompt("Ingrese nombre de cliente.").toUpperCase()
        const tipo = prompt("Ingrese tipo de propiedad.").toUpperCase()
        const comuna = prompt("Ingrese comuna de propiedad.").toUpperCase()
        const amoblado = prompt("¿Es amoblado? Si / No").toUpperCase()
        const precio = parseInt(prompt("Ingrese el precio de la propiedad.")) 
        propiedades[index].cliente = cliente
        propiedades[index].tipo = tipo
        propiedades[index].comuna = comuna
        propiedades[index].amoblado = amoblado
        propiedades[index].precio = precio     
        propiedades[index].fechaActulizacion = new Date()
        alert("La propiedad ha sido modificada.")
    }else{
        alert("No se pudo modificar la propiedad, ya que el cliente no existe.")
    }
    continuar = confirm("¿Quiere modificar alguna otra propiedad?")
}
console.log(propiedades)

alert("¡Muchas gracias porr ocupar nuestro sistema de publicación!")