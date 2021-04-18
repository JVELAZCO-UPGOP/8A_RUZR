module.exports = {
  mascotas: [
    { tipo: "Perro", nombre: "Trosky0", dueno: "Camilo" },
    { tipo: "Perro", nombre: "Trosky1", dueno: "Camilo" },
    { tipo: "Perro", nombre: "Trosky2", dueno: "Camilo" },
    { tipo: "Perro", nombre: "Trosky3", dueno: "Camilo" },
    { tipo: "Perro", nombre: "Trosky4", dueno: "Camilo" },
  ],
  veterinarias: [
    { nombre: "Ricardo", apellido: "Zamorano", documento: "1234567890" },
    { nombre: "Luis", apellido: "Castañeda", documento: "4234569999" },
    { nombre: "Laura", apellido: "Marquez", documento: "555666777" },
    { nombre: "Naryie", apellido: "Vasquez", documento: "1000666777" },
  ],
  duenos: [
    { nombre: "Ricardo", apellido: "Rios", documento: "12343333890" },
    { nombre: "Fernando", apellido: "Villa", documento: "4234564321" },
    { nombre: "Julio", apellido: "Tamayo", documento: "456666777" },
    { nombre: "Natalia", apellido: "Gonzales", documento: "9000666777" },
  ],
  consultas: [
    {
      mascota: 0,
      veterinaria: 0,
      fechaCreacion: new Date(),
      fechaEdicion: new Date(),
      historia: "",
      diagnostico: "diagnostico",
    },
  ],
};
