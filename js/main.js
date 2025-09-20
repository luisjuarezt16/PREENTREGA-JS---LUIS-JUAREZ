const reservas = []


function agregarHORARIO () {

    let fecha = prompt ("Que dia deseas la visita?:")
    let horario = prompt ("Solo tenemos 2 horarios por dia, a la 10am y a las 2pm:")
    let nombreEMPRESA = prompt ("Ingresa el nombre de tu empresa:")
    let problema = prompt ("Ingresa cual es el problema que tienes:")
        

    let numerodereservas = reservas.length + 1


    reservas.push ([numerodereservas, fecha, horario, nombreEMPRESA, problema])
     
    alert ("TU RESERVA FUE REGISTRADA CON EL NUMERO:  " + numerodereservas)

}

function verReservas () {

    const usuario = prompt("Ingresa el nombre de usuario:");
    const contraseña = parseInt(prompt("Ingresa contraseña:"));

    if (usuario == "admin" && contraseña == 12345) {
        if (reservas.length > 0) {
            let texto = "";
            for (let i = 0; i < reservas.length; i++) {
                texto += "RESERVA NRO: " + reservas[i][0] + "\n" +
                         "FECHA: " + reservas[i][1] + "\n" +
                         "HORA DE ATENCION: " + reservas[i][2] + "\n" +
                         "CLIENTE: " + reservas[i][3] + "\n" +
                         "ASUNTO: " + reservas[i][4] + "\n-------------------\n";
            }
            alert("ESTAS SON LAS RESERVAS HASTA AHORA:\n\n" + texto);
        } else {
            alert("NO HAY RESERVAS REGISTRADAS.");
        }
    } else {
        alert("NO ERES ADMINISTRADOR");
    }

    
}

function borrarReserva () {
    if (reservas.length === 0) {
        alert("No hay reservas para eliminar.");
        return;
    }

    let numero = parseInt(prompt("Ingresa el número de reserva que deseas eliminar:"));

    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i][0] === numero) {
            reservas.splice(i, 1); // elimina esa reserva
            alert("RESERVA N° " + numero + " ELIMINADA correctamente.");
            return;
        }
    }

    alert("NO SE ENCONTRO LA RESERVA N° " + numero);

}

function mensajeSALIDA () {
    alert ("GRACIAS POR RESERVAR CON NOSOTROS!")
}




alert ("BIENVENIDO A TU RESERVA DE HORA, DALE ACEPTAR PARA CONTINUAR")

let selectmenu = parseInt (prompt ("SELECCIONA NUMERO PARA REALIZAR ALGUNA DE LAS OPCIONES: \n 1-AGENDAR RESERVA \n 2-VER RESERVAS PENDIENTES \n 3-EDITAR RESERVA \n 4-SALIR") )


while (selectmenu!==4 ){
    switch (selectmenu) {
        case 1:
            agregarHORARIO ()
            break
        case 2:
            verReservas ()
            break
        case 3:
            borrarReserva ()
            break
        default :
            alert ("OPCION INCORRECTA, INGRESA DE NUEVO EL NUMERO DE LA OPCION")

    }

    selectmenu = parseInt (prompt ("SELECCIONA NUMERO PARA REALIZAR ALGUNA DE LAS OPCIONES: \n 1-AGENDAR RESERVA \n 2-VER RESERVAS PENDIENTES \n 3-EDITAR RESERVA \n 4-SALIR") )

}

mensajeSALIDA ()






