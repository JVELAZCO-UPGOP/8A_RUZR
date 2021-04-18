const listaVeterinarios=document.getElementById('lista-veterinarios');
const pais=document.getElementById('pais');
const nombre=document.getElementById('nombre');
const identificacion=document.getElementById('identificacion');
const apellido=document.getElementById('apellido');
const indice=document.getElementById('indice');
const btnGuardar=document.getElementById('btn-guardar');
const form=document.getElementById('form');


let veterinarios=[ 
    {
        nombre: "Martha",
        apellido:"Flores",
        pais:"Bolivia",
        identificacion:"1234567890"
    },
    {
        nombre: "Fernando",
        apellido:"Vaquez",
        pais:"Colombia",
        identificacion:"1234567891"
    }
];


function listarVeterinarios()
{
    const htmlVeterinarios = veterinarios.map((veterinario, index)=>`<tr>
    <th scope="row">${index}</th>
    <td>${veterinario.identificacion}</td>
    <td>${veterinario.pais}</td>
    <td>${veterinario.nombre}</td>
    <td>${veterinario.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" ><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
    </td>
  </tr>`).join("");
listaVeterinarios.innerHTML=htmlVeterinarios;
Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index))
Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminar(index))

}

function enviarDatos(evento)
{
    evento.preventDefault();
    const datos =
    {
        nombre: nombre.value,
        apellido:apellido.value,
        pais: pais.value,
        identificacion: identificacion.value
    };
    const accion=btnGuardar.innerHTML;
    switch(accion)
    {
        case 'Editar':
        //editar
        veterinarios[indice.value]=datos;
        break;

        default:
            //crear
            veterinarios.push(datos);
            break;
    }
    
    listarVeterinarios();
    resetModal();

}

function editar(index)
{
    return function cuandoCliqueo()
    {
        btnGuardar.innerHTML='Editar'
        $('#exampleModalCenter').modal('toggle');
        const veterinario=veterinarios[index];
        nombre.value=veterinario.nombre;
        apellido.value=veterinario.apellido;
        pais.value=veterinario.pais;
        identificacion.value=veterinario.identificacion;
        indice.value=index;
    } 
}

function resetModal()
{
    indice.value="",
    nombre.value='';
    apellido.value='';
    pais.value='';
    identificacion.value='';
    btnGuardar.innerHTML='Crear'
}


function eliminar(index)
{
    return function clickEnEliminar()
    {
        veterinarios=veterinarios.filter((veterinario,indiceVeterinario)=>indiceVeterinario !==index);
        listarVeterinarios();
    }
}


listarVeterinarios();
form.onsubmit=enviarDatos;
btnGuardar.onclick=enviarDatos;