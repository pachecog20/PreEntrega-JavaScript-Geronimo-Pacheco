// PreEntrega 1

// Compra de articulos Gaming 





let usuario = "Geronimo"
let contraseña = "12345"

// Función de inicio de sesión
const login = () => {
    let ingresar = false

    for (let i = 3; i > 0; i--) {
        let usuarioIngresado = prompt(`Ingresar usuario. Tenes ${i} intentos`)
        let contraseñaIngresada = prompt(`Ingresa tu contraseña. Tenes ${i} intentos`)

        if (contraseñaIngresada === contraseña && usuarioIngresado === usuario) {
            alert(`Bienvenido ${usuario}`)
            ingresar = true
            break
        } else {
            alert("Inicio de Sesion cancelado")
        }
    }

    return ingresar
}

if (login()) {
    // Precios
    let precioAuriculares = 24000
    let precioMouse = 13000
    let precioTeclado = 20000
    let precioMousePad = 15000

    // Variables para contar el total gastado
    let totalGastado = 0

    // Opciones de compra
    let opciones = prompt(`Elegi un articulo para comprar:
                        \n 1- Auriculares $24000
                        \n 2- Mouse $13000
                        \n 3- Teclado $20000
                        \n 4- MousePad $15000
                        \n Salir`).toUpperCase()

    while (opciones !== "SALIR") {

        switch (opciones) {
            case "1":
                let confirmarCompraUno = prompt(`Confirmas la compra de los Auriculares? Precio ${precioAuriculares}
                - 1 para Confirmar
                - 2 para Cancelar`)

                if (confirmarCompraUno === "1") {
                    totalGastado += precioAuriculares
                    console.log(`Compra confirmada, gastaste $${precioAuriculares}`)
                } else if (confirmarCompraUno === "2") {
                    alert(`Compra cancelada`)
                } else {
                    alert("Opción inválida")
                }
                break

            case "2":
                let confirmarCompraDos = prompt(`Confirmas la compra del Mouse? Precio ${precioMouse}
                - 1 para Confirmar
                - 2 para Cancelar`);

                if (confirmarCompraDos === "1") {
                    totalGastado += precioMouse
                    console.log(`Compra confirmada, gastaste $${precioMouse}`)
                } else if (confirmarCompraDos === "2") {
                    alert(`Compra cancelada`)
                } else {
                    alert("Opción inválida")
                }
                break

            case "3":
                let confirmarCompraTres = prompt(`Confirmas la compra del Teclado? Precio ${precioTeclado}
                - 1 para Confirmar
                - 2 para Cancelar`)

                if (confirmarCompraTres === "1") {
                    totalGastado += precioTeclado
                    console.log(`Compra confirmada, gastaste $${precioTeclado}`)
                } else if (confirmarCompraTres === "2") {
                    alert(`Compra cancelada`)
                } else {
                    alert("Opción inválida")
                }
                break;

            case "4":
                let confirmarCompraCuatro = prompt(`Confirmas la compra del MousePad? Precio ${precioMousePad}
                - 1 para Confirmar
                - 2 para Cancelar`)

                if (confirmarCompraCuatro === "1") {
                    totalGastado += precioMousePad
                    console.log(`Compra confirmada, gastaste $${precioMousePad}`)
                } else if (confirmarCompraCuatro === "2") {
                    alert(`Compra cancelada`)
                } else {
                    alert("Opción inválida")
                }
                break

            default:
                alert("Opción inválida")
                break
        }

        opciones = prompt(`Elegi un articulo para comprar:
                \n 1- Auriculares $24000
                \n 2- Mouse $13000
                \n 3- Teclado $20000
                \n 4- MousePad $15000
                \n Salir`).toUpperCase();
    }

    console.log(`Total gastado: $${totalGastado}`)
} else {
    console.log("Ni nos vimos")
}
