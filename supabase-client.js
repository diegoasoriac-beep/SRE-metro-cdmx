/* ============================================================
   CONEXIÓN REST CON SUPABASE
   No requiere instalar paquetes: utiliza fetch del navegador.
   ============================================================ */
function ensureSupabaseConfig() {
    if (!SUPABASE_URL || SUPABASE_URL.includes("PEGA_AQUI") ||
        !SUPABASE_PUBLISHABLE_KEY || SUPABASE_PUBLISHABLE_KEY.includes("PEGA_AQUI")) {
        throw new Error("Falta configurar SUPABASE_URL y SUPABASE_PUBLISHABLE_KEY en supabase-config.js");
    }
}

function supabaseHeaders(extra = {}) {
    ensureSupabaseConfig();
    return {
        // La publishable key nueva se envía en apikey; no es un JWT.
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json",
        ...extra
    };
}

// Obtiene los reportes públicos ordenados del más reciente al más antiguo.
async function getSharedReports() {
    const response = await fetch(
        `${SUPABASE_URL}/rest/v1/reports?select=id,line,station,type,description,status,created_at,resolved_at&order=created_at.desc`,
        { headers: supabaseHeaders() }
    );
    if (!response.ok) throw new Error(`Supabase GET: ${response.status} ${await response.text()}`);
    const rows = await response.json();
    return rows.map(row => ({
        id: row.id,
        line: row.line,
        station: row.station,
        type: row.type,
        description: row.description,
        status: row.status,
        date: new Date(row.created_at).toLocaleString("es-MX"),
        resolvedDate: row.resolved_at ? new Date(row.resolved_at).toLocaleString("es-MX") : null
    }));
}

// Inserta un nuevo reporte; la base de datos asigna UUID y fecha automáticamente.
async function insertSharedReport(report) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reports`, {
        method: "POST",
        headers: supabaseHeaders({ "Prefer": "return=representation" }),
        body: JSON.stringify({
            line: String(report.line),
            station: report.station,
            type: report.type,
            description: report.description,
            status: "activo"
        })
    });
    if (!response.ok) throw new Error(`Supabase INSERT: ${response.status} ${await response.text()}`);
    return response.json();
}
