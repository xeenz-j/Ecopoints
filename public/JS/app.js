// Datos de ejemplo para iniciar el historial
let historial = [];

// Función para actualizar los totales del resumen
function actualizarResumen() {
    let puntosTotales = 0;
    let kgTotales = 0;

    historial.forEach(mov => {
        puntosTotales += mov.puntos;
        kgTotales += mov.kg;
    });

    document.getElementById("puntostotales").textContent = puntosTotales;
    document.getElementById("kgtotales").textContent = kgTotales.toFixed(2);
    document.getElementById("canjestotales").textContent = 0; // por ahora en 0
}
function verRecompensas() {
    const mensaje =
        "🎁 RECOMPENSAS DISPONIBLES:\n\n" +
        "• 50 puntos → Descuento en cafetería\n" +
        "• 100 puntos → Paquete de papelería\n" +
        "• 150 puntos → Playera ecológica\n" +
        "• 200 puntos → Termo reutilizable\n\n" +
        "¡Sigue reciclando para canjearlas!";

    alert(mensaje);
}



// Función para llenar la tabla de historial
function llenarTablaHistorial() {
    const tbody = document.getElementById("tablahistorial");
    tbody.innerHTML = ""; // limpiamos todo

    historial.forEach(mov => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${mov.fecha}</td>
            <td>${mov.kg.toFixed(2)}</td>
            <td>${mov.puntos}</td>
        `;

        tbody.appendChild(fila);
    });
}

// Función para simular un nuevo reciclaje
function simularReciclaje() {

        let fecha = prompt("Ingrese la fecha (formato: AAAA-MMDD):");
        let kg= prompt("Ingrese el peso en kg:");         // ejemplo
        let puntos= prompt(".Ingrese los puntos acumulados:");       // ejemplo de regla de negocio

    if (!fecha || !kg || !puntos) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    kg = parseFloat(kg);
    puntos = parseInt(puntos);

    if (isNaN(puntos) || isNaN(kg)) {
        alert("Pesos y puntos deben de ser nùmeros.");
        return;
    }

    const nuevo = {
        fecha: fecha,
        kg: kg,
        puntos: puntos,
    };


    // Agregamos al inicio del historial
    historial.unshift(nuevo);

    // Actualizamos pantalla
    llenarTablaHistorial();
    actualizarResumen();

    alert("Reciclaje simulado registrado. Se agregaron puntos a tu cuenta.");
}

// Cuando la página termine de cargar
document.addEventListener("DOMContentLoaded", () => {
    llenarTablaHistorial();
    actualizarResumen();
    const btnRecompensas = document.getElementById("btnVerRecompensas");
    if (btnRecompensas) {
        btnRecompensas.addEventListener("click", verRecompensas);
    }


    const btn = document.getElementById("btnreciclar");
    if (btn) {
        btn.addEventListener("click", simularReciclaje);
    }
});
