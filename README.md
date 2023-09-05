# Proyecto de Gestión de Productos

Este proyecto consta de un sistema de gestión de productos para una tienda en línea. Incluye las siguientes características:

- **Agregar Productos**: Puedes agregar productos a la tienda a través de un formulario en línea.

- **Mostrar Lista de Productos**: La tienda muestra una lista de productos en una tabla con información como código, nombre, descripción, precio y marca.

- **Editar Productos**: Puedes editar productos existentes haciendo clic en el ícono de lápiz en la tabla. Los datos del producto se cargarán en un formulario emergente que te permitirá editarlos y guardar los cambios.

- **Eliminar Productos**: Puedes eliminar productos haciendo clic en el ícono de bote de basura en la tabla.

- **Mensajes de Éxito**: Después de agregar o editar un producto con éxito, se mostrará un mensaje de éxito en la parte superior de la página.

## Cómo Usar

1. Clona este repositorio en tu máquina local.

2. Abre el archivo `index.html` en tu navegador web.

3. Utiliza el formulario para agregar nuevos productos.

4. Visualiza la lista de productos y realiza ediciones o eliminaciones según sea necesario.

## Tecnologías Utilizadas

- HTML, CSS para la estructura y el diseño de la página web.
- JavaScript para la interacción con el usuario y las solicitudes a la API.
- Fetch API para realizar solicitudes HTTP a una API simulada.
- RemixIcon para íconos en la interfaz de usuario.

## Configuración de la API

Este proyecto utiliza una API simulada para almacenar los datos de los productos. Puedes ajustar la URL de la API en el código JavaScript para apuntar a tu propia API o a una API real si lo prefieres.

```javascript
const apiUrl = "https://64f202d20e1e60602d2490bc.mockapi.io/producto";
