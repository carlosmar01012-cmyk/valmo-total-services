 const menuMovil = document.getElementById("menuMovil");
const menu = document.getElementById("menu");

const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

const modalEtiqueta = document.getElementById("modalEtiqueta");
const modalTitulo = document.getElementById("modalTitulo");
const modalContenido = document.getElementById("modalContenido");


/* =========================
   MENÚ MÓVIL
========================= */

menuMovil.addEventListener("click", () => {
    menu.classList.toggle("activo");
});

document.querySelectorAll(".menu a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
    });
});


/* =========================
   INFORMACIÓN EDUCATIVA
========================= */

const informacion = {

    compra: {
        etiqueta: "ANTES DE COMPRAR",
        titulo: "Cómo elegir mejor un vuelo",
        contenido: `
            <p>
                Antes de comprar, compara más que el precio.
            </p>

            <ul>
                <li>Revisa si incluye equipaje.</li>
                <li>Compara horarios de salida y llegada.</li>
                <li>Verifica cuántas escalas tiene.</li>
                <li>Revisa políticas de cambios.</li>
                <li>Confirma desde qué aeropuerto sale.</li>
                <li>Consulta el precio final antes de pagar.</li>
            </ul>
        `
    },

    equipaje: {
        etiqueta: "EQUIPAJE",
        titulo: "Entiende qué puedes llevar",
        contenido: `
            <p>
                No todas las tarifas incluyen el mismo equipaje.
            </p>

            <ul>
                <li><strong>Artículo personal:</strong> bolso pequeño o mochila.</li>
                <li><strong>Equipaje de mano:</strong> maleta que va en cabina.</li>
                <li><strong>Equipaje facturado:</strong> maleta que va en bodega.</li>
            </ul>

            <p>
                Siempre revisa las medidas y el peso permitido por tu aerolínea.
            </p>
        `
    },

    aeropuerto: {
        etiqueta: "AEROPUERTO",
        titulo: "Prepárate antes de llegar",
        contenido: `
            <p>
                Llegar con tiempo suficiente puede evitar muchos problemas.
            </p>

            <ul>
                <li>Realiza el check-in cuando esté disponible.</li>
                <li>Ten tus documentos a la mano.</li>
                <li>Confirma terminal y puerta de embarque.</li>
                <li>Consulta las restricciones de equipaje.</li>
                <li>Revisa nuevamente el horario del vuelo.</li>
            </ul>
        `
    }

};


/* =========================
   DESTINOS
========================= */

const destinos = {

    cancun: {
        etiqueta: "MÉXICO",
        titulo: "Cancún",
        contenido: `
            <p>
                Cancún combina playas, turismo y alta demanda durante buena parte del año.
            </p>

            <ul>
                <li><strong>Temporada alta:</strong> diciembre a abril y semanas festivas.</li>
                <li><strong>Clima:</strong> cálido durante gran parte del año.</li>
                <li><strong>Consejo:</strong> compara vuelos y hospedaje con anticipación.</li>
                <li><strong>Antes de viajar:</strong> verifica documentación y requisitos vigentes.</li>
            </ul>
        `
    },

    cartagena: {
        etiqueta: "COLOMBIA",
        titulo: "Cartagena",
        contenido: `
            <p>
                Cartagena es uno de los destinos turísticos más visitados de Colombia.
            </p>

            <ul>
                <li><strong>Mayor demanda:</strong> vacaciones, diciembre, enero y Semana Santa.</li>
                <li><strong>Clima:</strong> cálido y húmedo.</li>
                <li><strong>Consejo:</strong> compara vuelos en días de semana.</li>
                <li><strong>Equipaje:</strong> ropa ligera y protección solar.</li>
            </ul>
        `
    },

    madrid: {
        etiqueta: "ESPAÑA",
        titulo: "Madrid",
        contenido: `
            <p>
                Los viajes internacionales requieren mayor preparación y revisión documental.
            </p>

            <ul>
                <li><strong>Vuelo:</strong> revisa duración, escalas y equipaje.</li>
                <li><strong>Documentación:</strong> confirma requisitos de entrada antes de viajar.</li>
                <li><strong>Aeropuerto:</strong> llega con suficiente anticipación.</li>
                <li><strong>Consejo:</strong> compara fechas flexibles para encontrar mejores tarifas.</li>
            </ul>
        `
    }

};


/* =========================
   ABRIR MODAL
========================= */

function abrirModal(etiqueta, titulo, contenido) {

    modalEtiqueta.textContent = etiqueta;
    modalTitulo.textContent = titulo;
    modalContenido.innerHTML = contenido;

    modal.classList.add("activo");

    document.body.style.overflow = "hidden";
}


/* BOTONES EDUCATIVOS */

document.querySelectorAll("[data-panel]").forEach((boton) => {

    boton.addEventListener("click", () => {

        const clave = boton.dataset.panel;
        const datos = informacion[clave];

        if (datos) {

            abrirModal(
                datos.etiqueta,
                datos.titulo,
                datos.contenido
            );

        }

    });

});


/* BOTONES DE DESTINOS */

document.querySelectorAll("[data-destino]").forEach((boton) => {

    boton.addEventListener("click", () => {

        const clave = boton.dataset.destino;
        const datos = destinos[clave];

        if (datos) {

            abrirModal(
                datos.etiqueta,
                datos.titulo,
                datos.contenido
            );

        }

    });

});


/* =========================
   CERRAR MODAL
========================= */

function cerrarVentana() {

    modal.classList.remove("activo");

    document.body.style.overflow = "";
}


cerrarModal.addEventListener("click", cerrarVentana);


modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        cerrarVentana();
    }

});


document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
        cerrarVentana();
    }

});