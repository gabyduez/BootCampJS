const form = document.getElementsByTagName("form")[0];
const tbody = document.getElementsByTagName("tbody")[0];
const input = document.getElementsByName("input")[0];
const inputCodigo = document.getElementById("codigo");
/** @type {HTMLInputElement} */
const inputNombre = document.getElementById("nombre");
/** @type {HTMLInputElement} */
const inputPrecio = document.getElementById("precio");
/** @type {HTMLInputElement} */
const inputCantidad = document.getElementById("cantidad");
const selectCategoria = document.getElementById("categoria");
const cantidadTotalElement = document.getElementById("cantidad-total");
const precioTotalElement = document.getElementById("precio-total");
const grantotalTotalElement = document.getElementById("gran-total");
let indice = 0;
let cantidadTotal=0;
let preciosTotal=0;
let granTotal=0;
let currentRow;
form.addEventListener("submit",onSubmit);

/**
 * @param {Event} event
 */
function onSubmit(event)
{event.preventDefault(); //evita que el formulario haga lo que tiene por default el navegador
    
    const data = new FormData(form);
    const values = Array.from(data.entries()); //convierte los datos que el usuario ingreso en un array para poder manipularlos
    
    const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria]=values;
    let codigo = frmCodigo[1];
    console.log("codigo"+codigo);
    const nombre = frmNombre[1];
    const cantidad = frmCantidad[1];
    const precio = frmPrecio[1];
    const categoria = frmCategoria[1];
    const total = cantidad *  precio;

    cantidadTotal = cantidadTotal + parseInt(cantidad);
    preciosTotal = preciosTotal + parseFloat(precio);
    granTotal = granTotal + parseFloat(total);

    let tr ;

    if(!codigo)
    {
        console.log("entro: "+codigo);
        indice++;
        codigo = indice;
        tr = document.createElement("tr");
        tbody.appendChild(tr);
    }
    else
    {
        console.log("else"+codigo);
        tr = currentRow;
    }

    
     
    tr.dataset.categoria = categoria;
    tr.innerHTML=`
            <td>${codigo}</td>
                <td>${nombre} </td>
                <td>${cantidad}</td>
                <td>${precio} </td>
                <td>${total}  </td>
                <td>
                <div class="btn-group">
                    <a title="Editar" href="#" onclick="onEdit(event)"   class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-pencil-square"></i>
                    </a>  
                    <a title="Borrar" href="#" onclick="onDelete(event)" class="btn btn-sm btn-outline-danger">
                        <i class="bi bi-trash"></i>
                    </a></td>
                </div>
    `;

    

    cantidadTotalElement.innerText = cantidadTotal;
    precioTotalElement.innerText = preciosTotal;
    grantotalTotalElement.innerText = granTotal;

    form.reset();//borra el formulario
    inputCodigo.value='';
    form.focus(input);
   


    
}
/**
 * 
 * @param {Event} event 
 */
function onEdit(event)
{
    event.preventDefault();
    //referencia del evento del elemento 
    /**@type {HTMLElement} */
    const anchor = event.currentTarget;
    //elemento donde esta incluido el anchor
    const tr =anchor.parentElement.parentElement.parentElement
    const celdas = tr.getElementsByTagName("td");
    const [tdCodigo, tdNombre, tdCantidad, tdPrecio] = celdas;

    inputCodigo.value=tdCodigo.innerText;
    inputNombre.value=tdNombre.innerText;
    inputCantidad.value=tdCantidad.innerText;
    inputPrecio.value=tdPrecio.innerText;
    selectCategoria.value = tr.dataset.categoria;

    currentRow = tr;
    
}

/**
 * 
 * @param {Event} event 
 */
function onDelete(event)
{
    event.preventDefault();
    
    //referencia del evento del elemento 
    /**@type {HTMLElement} */
    const anchor = event.currentTarget;
    //elemento donde esta incluido el anchor
    const tr =anchor.parentElement.parentElement.parentElement
    tbody.removeChild(tr);
    
    
    
}

