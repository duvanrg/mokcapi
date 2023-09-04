
const abrirPopup = document.getElementById('abrir-popup');
const cerrarPopup = document.getElementById('cerrar-popup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

abrirPopup.addEventListener('click', function () {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

cerrarPopup.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

//obtener el json total de usuarios
const tablaProductos = document.getElementById('tabla-productos');


// Función para cargar y mostrar los datos de la API en la tabla
async function cargarDatos() {
    try {
        const peticion = await fetch('https://64f202d20e1e60602d2490bc.mockapi.io/producto');
        const res = await peticion.json();

        // Limpiar la tabla antes de agregar los datos
        tablaProductos.querySelector('tbody').innerHTML = '';

        // Iterar sobre los productos y agregar filas a la tabla
        res.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${producto.codigo}</td>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>${producto.marca}</td>
                <td>
                <a href="#"><i class="ri-delete-bin-line" onclick="DELETE(${producto.id})"></i></a>
                <a href="#"><i class="ri-edit-line" onclick="EDIT(${producto.id})"></i></i></a>
                </td>
            `;
            tablaProductos.querySelector('tbody').appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Llamar a la función para cargar datos cuando se carga la página
window.addEventListener('load', cargarDatos);

//Enviar un usuario para insertarlo a la api

const form = document.getElementById('formulario-producto');

async function agregarProducto() {

    // Obtener los valores del formulario
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const marca = document.getElementById('marca').value;

    // Crear un objeto con los datos del formulario
    const nuevoProducto = {
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion,
        precio: parseFloat(precio),
        marca: marca,
    };

    let config = {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
    };

    try {
        let peticion = await fetch("https://64f202d20e1e60602d2490bc.mockapi.io/producto", config);
        let res = await peticion.json();
        console.log(res);

        // Mostrar el mensaje de éxito
        document.getElementById('mensaje-exito').style.display = 'block';

        // Limpiar el formulario después de agregar el producto
        document.getElementById('formulario-producto').reset();

        // Ocultar el mensaje de éxito después de unos segundos (opcional)
        setTimeout(function () {
            document.getElementById('mensaje-exito').style.display = 'none';
        }, 3000); // El mensaje se oculta después de 3 segundos (ajusta este valor según tus preferencias)
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
};

addEventListener('submit', agregarProducto);



const EDIT = async (id) => {
    let config = {
        method: "GET",
        headers: { 'Content-type': 'application/json' }
    }
    let peticion = await fetch(`https://64f202d20e1e60602d2490bc.mockapi.io/producto/${id}`, config);
    let producto = await peticion.json();    
    console.log(producto);
    // Mostrar el formulario de edición en el popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Llenar el formulario con los datos del producto
    document.getElementById('codigo').value = producto.codigo;
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('marca').value = producto.marca;

    // Cambiar el texto del botón a "Editar"
    const botonEnviar = document.getElementById('boton-enviar');
    botonEnviar.textContent = 'Editar';

    // Agregar un evento al botón "Editar" para enviar la solicitud PUT
    botonEnviar.removeEventListener('submit', agregarProducto);
    botonEnviar.addEventListener('click', async () => {
        // Obtener los datos del formulario de edición
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const marca = document.getElementById('marca').value;

        // Crear un objeto con los datos actualizados
        const productoActualizado = {
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio),
            marca: marca,
        };

        // Realizar la solicitud PUT para editar el producto
        const config = {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(productoActualizado)
        };

        try {
            console.log(producto.id);
            const peticion = await fetch(`https://64f202d20e1e60602d2490bc.mockapi.io/producto/${producto.id}`, config);
            const res = await peticion.json();
            console.log(res);

            // Mostrar el mensaje de éxito y ocultar el popup
            document.getElementById('mensaje-exito').style.display = 'block';
            setTimeout(function () {
                document.getElementById('mensaje-exito').style.display = 'none';
            }, 3000);
            popup.style.display = 'none';
            document.getElementById('overlay').style.display = 'none';

            // Limpiar el formulario después de editar el producto
            document.getElementById('formulario-producto').reset();

            // Cambiar el botón de vuelta a "Agregar Producto"
            botonEnviar.textContent = 'Agregar Producto';
        } catch (error) {
            console.error('Error al editar el producto:', error);
        }
    });
};


//Eliminar usarios por id
async function DELETE(id) {
    console.log(id);
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este producto?');

    if (confirmacion) {
        
        if (id) {
            try {
                const config = {
                    method: 'DELETE',
                    headers: { 'Content-type': 'application/json' },
                };
                const peticion = await fetch(`https://64f202d20e1e60602d2490bc.mockapi.io/producto/${id}`, config);
                const res = await peticion.json();
                console.log(res);

                cargarDatos();
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
            }
        }
    }
}



// Llamar a la función para cargar datos cuando se carga la página
window.addEventListener('load', cargarDatos);
