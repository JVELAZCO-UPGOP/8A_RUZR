module.exports = {
    mascotas: [
        { tipo: "perro", nombre: "Firulais0", dueno: "Esteban" },
        { tipo: "perro", nombre: "Firulais1", dueno: "Esteban" },
        { tipo: "perro", nombre: "Firulais2", dueno: "Esteban" },
        { tipo: "perro", nombre: "Firulais3", dueno: "Esteban" },
        { tipo: "perro", nombre: "Firulais4", dueno: "Esteban" }
    ],
    veterinarios: [
        { nombre: "Pedro", apellido: "Esquivel", documento: "12347584" },
        { nombre: "Sandy", apellido: "Reyes", documento: "64871236" },
        { nombre: "Mateo", apellido: "González", documento: "74853621" },
        { nombre: "Valeria", apellido: "Solis", documento: "74632598" },
        { nombre: "Lisa", apellido: "García", documento: "14789635" }

    ],
    duenos: [
        { nombre: "Ernesto", apellido: "Ramirez", documento: "47853621" },
        { nombre: "Ana", apellido: "Lago", documento: "98745632" },
        { nombre: "Fátima", apellido: "Mendez", documento: "180702536" },
        { nombre: "Gabriel", apellido: "Soto", documento: "95175326" },

    ],
    consultas: [{
            mascotas: 0,
            veterinario: 0,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historial: '',
            diagnostico: "",
        },


    ],
};