//obtener el json total de usuarios
let obtener = async()=> {
    let peticion = await fetch("https://64f2033f0e1e60602d249314.mockapi.io/User");
    let res = await peticion.json();
    console.log("Usuarios: ", res);
}

/* 
//Enviar un usuario para insertarlo a la api
let enviar = async () => {
    let obj = {
        idCard: 1050551551,
        name: "paola",
        lastName: "velasco",
        years: 18
    };
    let config = {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj)
    }
    let peticion = await fetch("https://64f2033f0e1e60602d249314.mockapi.io/User", config);
    let res = await peticion.json();
    console.log(res);
}

//buscar un usuario en expecifico
let buscar = async (id) => {
    let config = {
        method: "GET",
        headers: { 'Content-type': 'application/json' }
    }
    let peticion = await fetch(`https://64f2033f0e1e60602d249314.mockapi.io/User/${id}`, config);
    let res = await peticion.json();
    console.log(res);
}

//Editar un usuario expesificado
let editar = async () => {
    let obj = {
        idCard: 10051142133,
        name: "duvanrg",
        lastName: "Garcia",
        years: 26
    };
    let config = {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj)
    }
    let peticion = await fetch("https://64f2033f0e1e60602d249314.mockapi.io/User/1", config);
    let res = await peticion.json();
    console.log(res);
}

//Eliminar usarios por id
let eliminar = async (id) => {
    let config = {
        method: "DELETE",
        headers: { 'Content-type': 'application/json' },
    }
    let peticion = await fetch(`https://64f2033f0e1e60602d249314.mockapi.io/User/${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
 */

// var userId = prompt("Por favor, ingrese su ID de usuario:");
obtener();
// enviar();
// editar();
// buscar(userId);
// eliminar(userId)



/* let enviarDireccion = async (id) => {
    let obj = {
        "casas": [
            "Calle 11 B Routoque"
        ],
        "departamentos": [
            "avn Bucaramanga"
        ],
        "id": "1",
        "UserId": "1"
    };
    let config = {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj)
    }
    let peticion = await fetch(`https://64f2033f0e1e60602d249314.mockapi.io/User/${id}/direccion`, config);
    let res = await peticion.json();
    console.log(res);
}

enviarDireccion(1)
 */


let obtenerDirecciones = async(id)=> {
    let peticion1 = await fetch(`https://64f2033f0e1e60602d249314.mockapi.io/User/${id}`);
    let usuario = await peticion1.json();
    let peticion2 = await fetch(`https://64f2033f0e1e60602d249314.mockapi.io/User/${id}/direccion`);
    let direccion = await peticion2.json();

    usuario.direccion = direccion;

    console.log(usuario);
}

obtenerDirecciones(1)