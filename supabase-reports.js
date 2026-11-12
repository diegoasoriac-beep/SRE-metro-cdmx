
// Importar la conexión con Supabase
import { supabase } from "./supabase-client.js";

// Función para consultar los reportes
async function cargarReportes() {

    const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error al cargar reportes:", error);
        return;
    }

    mostrarReportes(data);
}

// Función para mostrar los reportes
function mostrarReportes(reportes) {

    const contenedor = document.getElementById("reportsList");

    if (!contenedor) return;

    contenedor.replaceChildren();

    reportes.forEach(reporte => {

        const elemento = document.createElement("div");
        const titulo = document.createElement("h3");
        const descripcion = document.createElement("p");
        const estado = document.createElement("p");

        titulo.textContent =
            reporte.line + " - " + reporte.station;

        descripcion.textContent =
            reporte.type + ": " + reporte.description;

        estado.textContent =
            "Estado: " + reporte.status;

        elemento.append(titulo, descripcion, estado);

        contenedor.appendChild(elemento);
    });
}

// Registrar nuevos reportes
document.getElementById("reportForm")
?.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nuevoReporte = {

        line: document.getElementById("line").value,

        station: document.getElementById("station").value,

        type: document.getElementById("type").value,

        description: document.getElementById("description").value,

        status: "activo"
    };

    const mensaje = document.getElementById("reportMessage");

    const { error } = await supabase
        .from("reports")
        .insert([nuevoReporte]);

    if (error) {

        mensaje.textContent =
            "Error al registrar el reporte: " + error.message;

        return;
    }

    mensaje.textContent =
        "Reporte registrado correctamente.";

    event.target.reset();

    cargarReportes();
});

// Cargar reportes al abrir la página
cargarReportes();

// Actualizar reportes cada 15 segundos
setInterval(cargarReportes, 15000);
