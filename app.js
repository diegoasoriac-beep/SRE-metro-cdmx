/* ============================================================
   Metro CDMX - JavaScript
   Contiene los datos de líneas/estaciones y la lógica de reportes,
   selección de estaciones, cálculo de rutas y tiempos estimados.
   ============================================================ */

/*
    =====================================================
    DATOS DEL METRO CDMX
    =====================================================
    */

    const metro = {

        "1": {
            nombre: "Línea 1",
            color: "#E91E63",
            estaciones: [
                "Observatorio",
                "Tacubaya",
                "Juanacatlán",
                "Chapultepec",
                "Sevilla",
                "Insurgentes",
                "Cuauhtémoc",
                "Balderas",
                "Salto del Agua",
                "Isabel la Católica",
                "Pino Suárez",
                "Merced",
                "Candelaria",
                "San Lázaro",
                "Moctezuma",
                "Balbuena",
                "Boulevard Puerto Aéreo",
                "Gómez Farías",
                "Zaragoza",
                "Pantitlán"
            ]
        },


        "2": {
            nombre: "Línea 2",
            color: "#1565C0",
            estaciones: [
                "Cuatro Caminos",
                "Panteones",
                "Tacuba",
                "Cuitláhuac",
                "Popotla",
                "Colegio Militar",
                "Normal",
                "San Cosme",
                "Revolución",
                "Hidalgo",
                "Bellas Artes",
                "Allende",
                "Zócalo/Tenochtitlan",
                "Pino Suárez",
                "San Antonio Abad",
                "Chabacano",
                "Viaducto",
                "Xola",
                "Villa de Cortés",
                "Nativitas",
                "Portales",
                "Ermita",
                "General Anaya",
                "Tasqueña"
            ]
        },


        "3": {
            nombre: "Línea 3",
            color: "#6B8E23",
            estaciones: [
                "Indios Verdes",
                "Deportivo 18 de Marzo",
                "Potrero",
                "La Raza",
                "Tlatelolco",
                "Guerrero",
                "Hidalgo",
                "Juárez",
                "Balderas",
                "Niños Héroes/Poder Judicial CDMX",
                "Hospital General",
                "Centro Médico",
                "Etiopía/Plaza de la Transparencia",
                "Eugenia",
                "División del Norte",
                "Zapata",
                "Coyoacán",
                "Viveros/Derechos Humanos",
                "Miguel Ángel de Quevedo",
                "Copilco",
                "Universidad"
            ]
        },


        "4": {
            nombre: "Línea 4",
            color: "#43C6C6",
            estaciones: [
                "Martín Carrera",
                "Talismán",
                "Bondojito",
                "Consulado",
                "Canal del Norte",
                "Morelos",
                "Candelaria",
                "Fray Servando",
                "Jamaica",
                "Santa Anita"
            ]
        },


        "5": {
            nombre: "Línea 5",
            color: "#F2C500",
            estaciones: [
                "Pantitlán",
                "Hangares",
                "Terminal Aérea",
                "Oceanía",
                "Aragón",
                "Eduardo Molina",
                "Consulado",
                "Valle Gómez",
                "Misterios",
                "La Raza",
                "Autobuses del Norte",
                "Instituto del Petróleo",
                "Politécnico"
            ]
        },


        "6": {
            nombre: "Línea 6",
            color: "#E53935",
            estaciones: [
                "El Rosario",
                "Tezozómoc",
                "UAM Azcapotzalco",
                "Ferrería/Arena Ciudad de México",
                "Norte 45",
                "Vallejo",
                "Instituto del Petróleo",
                "Lindavista",
                "Deportivo 18 de Marzo",
                "La Villa/Basílica",
                "Martín Carrera"
            ]
        },


        "7": {
            nombre: "Línea 7",
            color: "#F57C00",
            estaciones: [
                "El Rosario",
                "Aquiles Serdán",
                "Camarones",
                "Refinería",
                "Tacuba",
                "San Joaquín",
                "Polanco",
                "Auditorio",
                "Constituyentes",
                "Tacubaya",
                "San Pedro de los Pinos",
                "San Antonio",
                "Mixcoac",
                "Barranca del Muerto"
            ]
        },


        "8": {
            nombre: "Línea 8",
            color: "#159447",
            estaciones: [
                "Garibaldi/Lagunilla",
                "Bellas Artes",
                "San Juan de Letrán",
                "Salto del Agua",
                "Doctores",
                "Obrera",
                "Chabacano",
                "La Viga",
                "Santa Anita",
                "Coyuya",
                "Iztacalco",
                "Apatlaco",
                "Aculco",
                "Escuadrón 201",
                "Atlalilco",
                "Iztapalapa",
                "Cerro de la Estrella",
                "UAM-I",
                "Constitución de 1917"
            ]
        },


        "9": {
            nombre: "Línea 9",
            color: "#795548",
            estaciones: [
                "Tacubaya",
                "Patriotismo",
                "Chilpancingo",
                "Centro Médico",
                "Lázaro Cárdenas",
                "Chabacano",
                "Jamaica",
                "Mixiuhca",
                "Velódromo",
                "Ciudad Deportiva",
                "Puebla",
                "Pantitlán"
            ]
        },


        "A": {
            nombre: "Línea A",
            color: "#7E3FA1",
            estaciones: [
                "Pantitlán",
                "Agrícola Oriental",
                "Canal de San Juan",
                "Tepalcates",
                "Guelatao",
                "Peñón Viejo",
                "Acatitla",
                "Santa Marta",
                "Los Reyes",
                "La Paz"
            ]
        },


        "B": {
            nombre: "Línea B",
            color: "#687782",
            estaciones: [
                "Ciudad Azteca",
                "Plaza Aragón",
                "Olímpica",
                "Ecatepec",
                "Múzquiz",
                "Río de los Remedios",
                "Impulsora",
                "Nezahualcóyotl",
                "Villa de Aragón",
                "Bosque de Aragón",
                "Deportivo Oceanía",
                "Oceanía",
                "Romero Rubio",
                "Ricardo Flores Magón",
                "San Lázaro",
                "Morelos",
                "Tepito",
                "Lagunilla",
                "Garibaldi/Lagunilla",
                "Guerrero",
                "Buenavista"
            ]
        },


        "12": {
            nombre: "Línea 12",
            color: "#C8A96B",
            estaciones: [
                "Mixcoac",
                "Insurgentes Sur",
                "Hospital 20 de Noviembre",
                "Zapata",
                "Parque de los Venados",
                "Eje Central",
                "Ermita",
                "Mexicaltzingo",
                "Atlalilco",
                "Culhuacán",
                "San Andrés Tomatlán",
                "Lomas Estrella",
                "Calle 11",
                "Periférico Oriente",
                "Tezonco",
                "Olivos",
                "Nopalera",
                "Zapotitlán",
                "Tlaltenco",
                "Tláhuac"
            ]
        }

    };


    /*
    =====================================================
    VARIABLES
    =====================================================
    */

    let selectedLine = "1";
    let selectedStation = null;

    // Los reportes ahora se consultan desde Supabase para compartirlos entre usuarios.
    let reports = [];


    /*
    =====================================================
    ELEMENTOS
    =====================================================
    */

    const lineButtons =
        document.getElementById("lineButtons");

    const stationsContainer =
        document.getElementById("stations");

    const lineTitle =
        document.getElementById("lineTitle");

    const lineDescription =
        document.getElementById("lineDescription");

    const search =
        document.getElementById("search");

    const modalBackground =
        document.getElementById("modalBackground");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalLine =
        document.getElementById("modalLine");

    const stationReports =
        document.getElementById("stationReports");

    const activeCounter =
        document.getElementById("activeCounter");

    const routeOrigin = document.getElementById("routeOrigin");
    const routeDestination = document.getElementById("routeDestination");
    const routeResults = document.getElementById("routeResults");
    let currentRouteOptions = [];
    let selectedRouteIndex = null;


    /*
    =====================================================
    CREAR BOTONES DE LINEAS
    =====================================================
    */

    function renderLines() {

        lineButtons.innerHTML = "";

        Object.keys(metro).forEach(key => {

            const line = metro[key];

            const button =
                document.createElement("button");

            button.className =
                "line-button" +
                (selectedLine === key ? " active" : "");

            const badgeStyle = key === "B"
                ? "background:linear-gradient(135deg,#687782 0 50%,#159447 50% 100%);color:white"
                : `background:${line.color};color:${["5","4","12"].includes(key) ? "#222" : "#fff"}`;

            button.innerHTML = `
                <span class="line-number" style="${badgeStyle}">
                    ${key}
                </span>
                ${line.nombre}
            `;

            button.onclick = () => {

                selectedLine = key;

                search.value = "";

                renderLines();
                renderStations();
                planRouteIfVisible();

            };

            lineButtons.appendChild(button);

        });

    }


    /*
    =====================================================
    MOSTRAR ESTACIONES
    =====================================================
    */

    function renderStations() {

        const line =
            metro[selectedLine];

        lineTitle.textContent =
            line.nombre;

        lineDescription.textContent =
            `${line.estaciones.length} estaciones. Selecciona una para consultar o registrar un reporte.`;

        const text =
            search.value.toLowerCase().trim();

        stationsContainer.innerHTML = "";

        line.estaciones.forEach((station, index) => {

            if (
                !station
                .toLowerCase()
                .includes(text)
            ) {
                return;
            }

            const activeReports =
                getActiveReports(selectedLine, station);

            const card =
                document.createElement("div");

            card.className =
                "station " +
                (activeReports.length > 0
                    ? "has-report"
                    : "no-report");

            card.onclick = () => {

                openStation(
                    selectedLine,
                    station
                );

            };


            let badge = "";

            if (activeReports.length > 0) {

                badge = `
                    <div class="report-badge">
                        ${activeReports.length}
                    </div>
                `;

            }


            card.innerHTML = `

                ${badge}

                <div class="station-name">
                    ${station}
                </div>

                <div class="station-number">
                    Estación ${index + 1}
                </div>

            `;

            stationsContainer.appendChild(card);

        });


        if (
            stationsContainer.children.length === 0
        ) {

            stationsContainer.innerHTML =
                `<div class="empty">
                    No se encontró la estación.
                </div>`;

        }

    }


    /*
    =====================================================
    BUSCAR
    =====================================================
    */

    search.addEventListener(
        "input",
        renderStations
    );


    /*
    =====================================================
    ABRIR ESTACION
    =====================================================
    */

    function openStation(lineKey, station) {

        selectedLine = lineKey;
        selectedStation = station;

        const line =
            metro[lineKey];

        modalTitle.textContent =
            station;

        modalLine.textContent =
            line.nombre;

        modalBackground.classList.add("show");

        document.getElementById("reportForm").reset();

        renderStationReports();

    }



    /*
    =====================================================
    PLANIFICADOR DE RUTAS CON TRANSBORDOS E INCIDENCIAS
    =====================================================
    */

    // Los nombres que representan una misma estación de correspondencia.
    // Se incluyen variantes de nombre que aparecen escritas distinto por línea.
    const interchangeAliases = {
        "Garibaldi/Lagunilla": "Garibaldi",
        "Lagunilla": "Garibaldi",
        "Garibaldi": "Garibaldi",
        "Zócalo/Tenochtitlan": "Zócalo/Tenochtitlan",
        "Niños Héroes/Poder Judicial CDMX": "Niños Héroes/Poder Judicial CDMX",
        "Etiopía/Plaza de la Transparencia": "Etiopía/Plaza de la Transparencia",
        "Viveros/Derechos Humanos": "Viveros/Derechos Humanos",
        "Ferrería/Arena Ciudad de México": "Ferrería/Arena Ciudad de México"
    };

    function stationKey(lineKey, station) {
        return `${lineKey}|||${station}`;
    }

    function canonicalStationName(station) {
        return interchangeAliases[station] || station;
    }

    function getStationOptions() {
        const options = [];
        Object.keys(metro).forEach(lineKey => {
            metro[lineKey].estaciones.forEach(station => {
                options.push({
                    id: stationKey(lineKey, station),
                    line: lineKey,
                    station,
                    label: `${station} — ${metro[lineKey].nombre}`
                });
            });
        });
        return options;
    }

    function fillRouteSelects() {
        const options = getStationOptions();
        [routeOrigin, routeDestination].forEach(select => {
            const previous = select.value;
            select.innerHTML = '<option value="">Selecciona una estación...</option>';
            options.forEach(item => {
                const option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.label;
                select.appendChild(option);
            });
            if (options.some(item => item.id === previous)) select.value = previous;
        });
    }

    function buildMetroGraph() {
        const graph = new Map();
        const stationInfo = new Map();
        const addNode = (id, info) => {
            if (!graph.has(id)) graph.set(id, []);
            stationInfo.set(id, info);
        };
        const addEdge = (from, to, type, weight) => {
            graph.get(from).push({ to, type, weight });
            graph.get(to).push({ to: from, type, weight });
        };

        Object.keys(metro).forEach(lineKey => {
            const line = metro[lineKey];
            line.estaciones.forEach((station, index) => {
                const id = stationKey(lineKey, station);
                addNode(id, { line: lineKey, station, index });
            });
            for (let i = 0; i < line.estaciones.length - 1; i++) {
                const from = stationKey(lineKey, line.estaciones[i]);
                const to = stationKey(lineKey, line.estaciones[i + 1]);
                addEdge(from, to, "viaje", 1);
            }
        });

        // Las estaciones con el mismo nombre (o alias) se conectan como transbordos.
        const groups = new Map();
        stationInfo.forEach((info, id) => {
            const canonical = canonicalStationName(info.station);
            if (!groups.has(canonical)) groups.set(canonical, []);
            groups.get(canonical).push(id);
        });
        groups.forEach(ids => {
            if (ids.length > 1) {
                for (let i = 0; i < ids.length; i++) {
                    for (let j = i + 1; j < ids.length; j++) {
                        const a = stationInfo.get(ids[i]);
                        const b = stationInfo.get(ids[j]);
                        if (a.line !== b.line) addEdge(ids[i], ids[j], "transbordo", 2);
                    }
                }
            }
        });

        return { graph, stationInfo };
    }

    function nodeHasActiveIncident(id, stationInfo) {
        const info = stationInfo.get(id);
        if (!info) return false;
        return reports.some(report =>
            report.line === info.line &&
            report.station === info.station &&
            report.status === "activo"
        );
    }

    function shortestRoute(graph, stationInfo, start, end, bannedEdges = new Set(), bannedNodes = new Set()) {
        const distances = new Map();
        const previous = new Map();
        const unvisited = new Set(graph.keys());

        graph.forEach((_, id) => distances.set(id, Infinity));
        distances.set(start, 0);

        while (unvisited.size) {
            let current = null;
            let best = Infinity;
            for (const id of unvisited) {
                const d = distances.get(id);
                if (d < best) { best = d; current = id; }
            }
            if (current === null || best === Infinity) break;
            if (current === end) break;
            unvisited.delete(current);

            for (const edge of graph.get(current) || []) {
                if (!unvisited.has(edge.to) || bannedNodes.has(edge.to)) continue;
                const edgeKey = [current, edge.to].sort().join(" <-> ");
                if (bannedEdges.has(edgeKey)) continue;

                let cost = edge.weight;
                // Evita estaciones con reportes activos, excepto origen y destino.
                if (edge.to !== end && edge.to !== start && nodeHasActiveIncident(edge.to, stationInfo)) {
                    cost += 1000;
                }
                const nextDistance = best + cost;
                if (nextDistance < distances.get(edge.to)) {
                    distances.set(edge.to, nextDistance);
                    previous.set(edge.to, { from: current, type: edge.type });
                }
            }
            unvisited.delete(current);
        }

        if (distances.get(end) === Infinity) return null;
        const nodes = [];
        const edges = [];
        let cursor = end;
        nodes.unshift(cursor);
        while (cursor !== start) {
            const step = previous.get(cursor);
            if (!step) return null;
            edges.unshift(step.type);
            cursor = step.from;
            nodes.unshift(cursor);
        }
        return { nodes, edges, cost: distances.get(end) };
    }

    function routeSignature(route) {
        return route.nodes.join("||");
    }

    function findRouteOptions(start, end, count = 3) {
        const { graph, stationInfo } = buildMetroGraph();
        const first = shortestRoute(graph, stationInfo, start, end);
        if (!first) return [];
        const routes = [first];
        const signatures = new Set([routeSignature(first)]);

        // Buscar alternativas penalizando los tramos ya usados para no repetir exactamente la ruta.
        for (let attempt = 0; attempt < count * 5 && routes.length < count; attempt++) {
            const previousRoute = routes[attempt % routes.length];
            const bannedEdges = new Set();
            for (let i = 0; i < previousRoute.nodes.length - 1; i++) {
                bannedEdges.add([previousRoute.nodes[i], previousRoute.nodes[i + 1]].sort().join(" <-> "));
            }
            const candidate = shortestRoute(graph, stationInfo, start, end, bannedEdges);
            if (candidate && !signatures.has(routeSignature(candidate))) {
                signatures.add(routeSignature(candidate));
                routes.push(candidate);
            }
        }

        return routes
            .sort((a, b) => a.cost - b.cost)
            .slice(0, count)
            .map(route => ({ ...route, stationInfo }));
    }

    function getRouteLines(route) {
        const lines = [];
        route.nodes.forEach(id => {
            const line = route.stationInfo.get(id).line;
            if (lines[lines.length - 1] !== line) lines.push(line);
        });
        return lines;
    }

    function getTransfers(route) {
        const transfers = [];
        for (let i = 1; i < route.nodes.length; i++) {
            const previousLine = route.stationInfo.get(route.nodes[i - 1]).line;
            const currentLine = route.stationInfo.get(route.nodes[i]).line;
            if (previousLine !== currentLine) {
                const info = route.stationInfo.get(route.nodes[i]);
                transfers.push(`${info.station} (${metro[previousLine].nombre} → ${metro[currentLine].nombre})`);
            }
        }
        return transfers;
    }

    // Estimación orientativa: 2.5 min por tramo entre estaciones,
    // 5 min por transbordo y 4 min de espera inicial.
    // No representa tiempos oficiales ni información en tiempo real.
    function getApproxTravelMinutes(route) {
        let rideSegments = 0;
        for (let i = 1; i < route.nodes.length; i++) {
            const previousLine = route.stationInfo.get(route.nodes[i - 1]).line;
            const currentLine = route.stationInfo.get(route.nodes[i]).line;
            if (previousLine === currentLine) rideSegments++;
        }
        const transfers = getTransfers(route).length;
        return Math.max(1, Math.round(4 + rideSegments * 2.5 + transfers * 5));
    }

    function formatApproxTravelTime(minutes) {
        if (minutes < 60) return `Aprox. ${minutes} min`;
        const hours = Math.floor(minutes / 60);
        const remaining = minutes % 60;
        return `Aprox. ${hours} h${remaining ? ` ${remaining} min` : ''}`;
    }

    function renderRouteOption(route, index) {
        const lines = getRouteLines(route);
        const transfers = getTransfers(route);
        const approximateMinutes = getApproxTravelMinutes(route);
        const incidentStations = [...new Set(route.nodes
            .filter(id => nodeHasActiveIncident(id, route.stationInfo))
            .map(id => route.stationInfo.get(id).station))];

        const lineChips = lines.map(key => {
            const color = metro[key].color;
            const style = key === "B"
                ? "background:linear-gradient(135deg,#687782 0 50%,#159447 50% 100%)"
                : `background:${color}`;
            return `<span class="route-line-chip" style="${style}">${metro[key].nombre}</span>`;
        }).join("");

        const linePillStyle = key => {
            if (key === "B") return "background:linear-gradient(135deg,#687782 0 50%,#159447 50% 100%)";
            return `background:${metro[key].color}`;
        };
        const steps = route.nodes.map((id, i) => {
            const info = route.stationInfo.get(id);
            const previousLine = i > 0 ? route.stationInfo.get(route.nodes[i - 1]).line : null;
            const isTransfer = Boolean(previousLine && previousLine !== info.line);
            const transferLabel = isTransfer
                ? `<span class="transfer-label" title="Cambiar de ${escapeHTML(metro[previousLine].nombre)} a ${escapeHTML(metro[info.line].nombre)}">TRANSBORDO</span>`
                : "";
            const pillStyle = isTransfer
                ? `background:linear-gradient(115deg,${previousLine === "B" ? "#687782 0%,#159447 35%" : metro[previousLine].color + " 0%," + metro[previousLine].color + " 48%"},${info.line === "B" ? "#159447" : metro[info.line].color} 52%,${info.line === "B" ? "#687782" : metro[info.line].color} 100%)`
                : linePillStyle(info.line);
            const stationPill = `<span class="route-station-pill ${isTransfer ? "transfer-station" : ""}" style="${pillStyle}" title="${escapeHTML(metro[info.line].nombre)}${isTransfer ? " · transbordo desde " + escapeHTML(metro[previousLine].nombre) : ""}">${escapeHTML(info.station)}<small>(${escapeHTML(metro[info.line].nombre)})</small></span>`;
            return `${i > 0 ? '<span class="route-arrow">→</span>' : ""}${transferLabel}${stationPill}`;
        });

        const div = document.createElement("div");
        div.className = "route-option" + (index === 0 ? " recommended" : "") + (selectedRouteIndex === index ? " selected-route" : "");
        div.innerHTML = `
            <h3>${index === 0 ? "Ruta 1 · Recomendada" : `Ruta ${index + 1} · Alternativa`}</h3>
            <div class="route-meta"><strong>Tiempo estimado: ${formatApproxTravelTime(approximateMinutes)}</strong><br>${lines.length} línea(s) · ${transfers.length} transbordo(s) · ${route.nodes.length - 1} tramo(s) aproximados</div>
            <div>${lineChips}</div>
            <div class="route-steps"><strong>Recorrido:</strong><br>${steps.join(" ")}</div>
            ${transfers.length ? `<div class="transfer-note"><strong>Transbordos:</strong> ${transfers.map(escapeHTML).join("; ")}</div>` : `<div class="transfer-note">No necesitas transbordar.</div>`}
            ${incidentStations.length ? `<div class="route-warning">Atención: esta ruta pasa por estación(es) con reportes activos: ${incidentStations.map(escapeHTML).join(", ")}. Verifica el detalle antes de viajar.</div>` : `<div class="route-good">No se detectaron reportes activos en las estaciones de esta ruta, según los reportes registrados en esta aplicación.</div>`}
            <button type="button" class="route-choice-button ${selectedRouteIndex === index ? "selected" : ""}" data-route-index="${index}">${selectedRouteIndex === index ? "✓ Ruta seleccionada" : "Elegir esta ruta"}</button>
        `;
        div.querySelector(".route-choice-button").addEventListener("click", () => selectRoute(index));
        return div;
    }

    function selectRoute(index) {
        if (!currentRouteOptions[index]) return;
        selectedRouteIndex = index;
        const start = routeOrigin.value;
        const end = routeDestination.value;
        routeResults.innerHTML = "";
        const intro = document.createElement("div");
        intro.className = reports.some(r => r.status === "activo") ? "route-warning" : "transfer-note";
        intro.textContent = reports.some(r => r.status === "activo")
            ? "Se priorizan rutas que eviten estaciones con reportes activos. Los reportes comunitarios no sustituyen avisos oficiales del Metro."
            : "Los tiempos son estimaciones orientativas (incluyen espera inicial y transbordos); pueden variar según la espera, la afluencia y el servicio. No son tiempos oficiales ni datos en tiempo real.";
        routeResults.appendChild(intro);
        currentRouteOptions.forEach((route, i) => routeResults.appendChild(renderRouteOption(route, i)));

        const route = currentRouteOptions[index];
        const steps = route.nodes.map((id, i) => {
            const info = route.stationInfo.get(id);
            const previousLine = i > 0 ? route.stationInfo.get(route.nodes[i - 1]).line : null;
            return { station: info.station, line: metro[info.line].nombre, transfer: previousLine && previousLine !== info.line };
        });
        const panel = document.createElement("div");
        panel.className = "chosen-route-panel";
        panel.innerHTML = `<h3>Ruta seleccionada para seguir</h3><div><strong>Tiempo estimado:</strong> ${formatApproxTravelTime(getApproxTravelMinutes(route))}</div><div><strong>Desde:</strong> ${escapeHTML(steps[0].station)} &nbsp; <strong>Hasta:</strong> ${escapeHTML(steps[steps.length - 1].station)}</div><ol>${steps.slice(1).map(step => `<li>${step.transfer ? `<strong>Transbordo:</strong> ` : ""}${escapeHTML(step.station)} — ${escapeHTML(step.line)}</li>`).join("")}</ol><p class="transfer-note">Sigue estas estaciones en orden y revisa los avisos antes de viajar. La aplicación no rastrea tu ubicación en tiempo real.</p>`;
        routeResults.appendChild(panel);
    }

    function planRoute() {
        const start = routeOrigin.value;
        const end = routeDestination.value;
        routeResults.innerHTML = "";

        if (!start || !end) {
            routeResults.innerHTML = '<div class="route-warning">Selecciona tu estación de origen y tu destino.</div>';
            return;
        }
        if (start === end) {
            routeResults.innerHTML = '<div class="route-good">El origen y el destino son la misma estación.</div>';
            return;
        }

        const options = findRouteOptions(start, end, 4);
        if (!options.length) {
            routeResults.innerHTML = '<div class="route-warning">No se encontró una ruta con las conexiones registradas.</div>';
            return;
        }

        const hasIncidents = reports.some(r => r.status === "activo");
        const intro = document.createElement("div");
        intro.className = hasIncidents ? "route-warning" : "transfer-note";
        intro.textContent = hasIncidents
            ? "Se priorizan rutas que eviten estaciones con reportes activos. Los reportes comunitarios no sustituyen avisos oficiales del Metro."
            : "Los tiempos son estimaciones orientativas (incluyen espera inicial y transbordos); pueden variar según la espera, la afluencia y el servicio. No son tiempos oficiales ni datos en tiempo real.";
        routeResults.appendChild(intro);

        currentRouteOptions = options;
        selectedRouteIndex = null;
        options.forEach((route, index) => routeResults.appendChild(renderRouteOption(route, index)));
        if (options.length < 3) {
            const note = document.createElement("p");
            note.className = "transfer-note";
            note.textContent = `Solo se encontraron ${options.length} rutas distintas con las conexiones registradas para este trayecto.`;
            routeResults.appendChild(note);
        }
    }

    function planRouteIfVisible() {
        if (routeOrigin && routeDestination && routeOrigin.value && routeDestination.value) {
            planRoute();
        }
    }

    function swapRouteStations() {
        const origin = routeOrigin.value;
        routeOrigin.value = routeDestination.value;
        routeDestination.value = origin;
        planRoute();
    }


    /*
    =====================================================
    CERRAR MODAL
    =====================================================
    */

    function closeModal() {

        modalBackground.classList.remove("show");

        selectedStation = null;

    }


    /*
    =====================================================
    CREAR REPORTE
    =====================================================
    */

    document
        .getElementById("reportForm")
        .addEventListener(
            "submit",
            async function(event) {

                event.preventDefault();

                const type =
                    document.getElementById(
                        "reportType"
                    ).value;

                const description =
                    document.getElementById(
                        "reportDescription"
                    ).value.trim();


                if (!type || !description) {

                    alert(
                        "Completa todos los campos."
                    );

                    return;

                }


                const report = {
                    line: selectedLine,
                    station: selectedStation,
                    type,
                    description
                };

                const submitButton = document.querySelector('#reportForm button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = "Enviando reporte...";

                try {
                    // Guarda el reporte en la base de datos compartida.
                    await insertSharedReport(report);
                    reports = await getSharedReports();

                    renderStations();
                    renderStationReports();
                    updateCounter();
                    planRouteIfVisible();
                    document.getElementById("reportForm").reset();
                    alert("Reporte registrado y compartido correctamente.");
                } catch (error) {
                    console.error("No se pudo guardar el reporte:", error);
                    alert("No se pudo enviar el reporte. Revisa tu conexión y la configuración de Supabase.");
                } finally {
                    submitButton.disabled = false;
                    submitButton.textContent = "Registrar reporte";
                }

            }
        );


    /*
    =====================================================
    OBTENER REPORTES ACTIVOS
    =====================================================
    */

    function getActiveReports(
        line,
        station
    ) {

        return reports.filter(report =>

            report.line === line &&
            report.station === station &&
            report.status === "activo"

        );

    }


    /*
    =====================================================
    MOSTRAR REPORTES DE ESTACION
    =====================================================
    */

    function renderStationReports() {

        stationReports.innerHTML = "";

        if (!selectedStation) {
            return;
        }


        const stationData =
            reports.filter(report =>

                report.line === selectedLine &&
                report.station === selectedStation

            );


        if (stationData.length === 0) {

            stationReports.innerHTML =
                `<div class="empty">
                    No hay reportes registrados en esta estación.
                </div>`;

            return;

        }


        stationData
            .slice()
            .reverse()
            .forEach(report => {

                const div =
                    document.createElement("div");

                div.className =
                    "report " +
                    (report.status === "resuelto"
                        ? "resolved"
                        : "");


                const typeText = {

                    accidente: "🚨 Accidente",

                    falla: "⚠️ Falla",

                    mantenimiento: "🔧 Mantenimiento",

                    obstruccion: "🚧 Obstrucción",

                    otro: "ℹ️ Otro"

                };


                div.innerHTML = `

                    <div class="report-header">

                        <span class="type ${report.type}">
                            ${typeText[report.type]}
                        </span>

                        <span class="
                            status
                            ${report.status === "resuelto"
                                ? "resuelto"
                                : ""}
                        ">

                            ${
                                report.status === "resuelto"
                                ? "Resuelto"
                                : "Activo"
                            }

                        </span>

                    </div>


                    <div class="report-date">
                        ${report.date}
                    </div>


                    <div class="report-description">
                        ${escapeHTML(report.description)}
                    </div>


                    <p class="transfer-note">Los reportes comunitarios son visibles para todos. La gestión de resolución y eliminación se realiza desde la administración de la base de datos.
                    </p>

                `;


                stationReports.appendChild(div);

            });

    }


    /*
    =====================================================
    MARCAR COMO RESUELTO
    =====================================================
    */

    function resolveReport(id) {

        const report =
            reports.find(
                report => report.id === id
            );

        if (!report) {
            return;
        }


        report.status = "resuelto";

        report.resolvedDate =
            new Date().toLocaleString(
                "es-MX"
            );


        saveReports();

        renderStations();

        renderStationReports();

        updateCounter();
        planRouteIfVisible();

    }


    /*
    =====================================================
    ELIMINAR REPORTE
    =====================================================
    */

    function deleteReport(id) {

        const confirmar =
            confirm(
                "¿Quieres eliminar este reporte?"
            );

        if (!confirmar) {
            return;
        }


        reports =
            reports.filter(
                report => report.id !== id
            );


        saveReports();

        renderStations();

        renderStationReports();

        updateCounter();
        planRouteIfVisible();

    }


    /*
    =====================================================
    GUARDAR EN LOCALSTORAGE
    =====================================================
    */

    // La persistencia se realiza en Supabase; no se utiliza localStorage.
    function saveReports() {
        // Se conserva esta función para no romper llamadas antiguas del código.
    }


    /*
    =====================================================
    CONTADOR
    =====================================================
    */

    function updateCounter() {

        const active =
            reports.filter(
                report =>
                    report.status === "activo"
            ).length;

        activeCounter.textContent =
            active;

    }


    /*
    =====================================================
    SEGURIDAD BASICA PARA DESCRIPCIONES
    =====================================================
    */

    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /*
    =====================================================
    CERRAR MODAL AL HACER CLICK FUERA
    =====================================================
    */

    modalBackground.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                modalBackground
            ) {

                closeModal();

            }

        }
    );


    /*
    =====================================================
    INICIAR APLICACION
    =====================================================
    */

    renderLines();

    renderStations();

    fillRouteSelects();

    updateCounter();

    // Carga inicial y actualización periódica para que los usuarios compartan incidencias.
    async function refreshSharedReports() {
        try {
            reports = await getSharedReports();
            renderStations();
            renderStationReports();
            updateCounter();
            planRouteIfVisible();
        } catch (error) {
            console.error("Error al consultar reportes compartidos:", error);
            if (!reports.length) {
                activeCounter.textContent = "—";
            }
        }
    }

    refreshSharedReports();
    // Actualiza los reportes cada 15 segundos en cada navegador.
    window.setInterval(refreshSharedReports, 15000);


/* =====================================================
   PANTALLA DE BIENVENIDA
   Oculta el recuadro del slogan después de 3 segundos.
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const welcomeOverlay = document.getElementById("welcomeOverlay");
    if (!welcomeOverlay) return;

    // Mantiene visible la bienvenida brevemente y luego aplica el desvanecido.
    window.setTimeout(() => {
        welcomeOverlay.classList.add("is-hidden");
        // Se retira del documento después de la transición para no bloquear la página.
        window.setTimeout(() => welcomeOverlay.remove(), 700);
    }, 3000);
});
