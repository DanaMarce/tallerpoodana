// Declaración de variables
let nombreUsuario = "dana";
let contraseña = "123";
let numIntentos = 3;
let proveedores = [];
let clientes = [];
let productos = [];

//funcion para iniciar sesion
function iniciarSesion() {
  let inputNombreUsuario = document.getElementById("user").value;
  let inputContraseña = document.getElementById("pass1").value;

  if(inputNombreUsuario == "" || inputContraseña == ""){
    alert("Ingrese el usuario y la contraseña son campos obligatorios");
    return false;
  }

//localStore.set es para almacenar datos en el navegador del usuario de forma permanente 
  const user = localStorage.getItem("usuario");
  const password = localStorage.getItem("contraseña");

//window.location.href es para redireccionar una pagina

  if (inputNombreUsuario === user && inputContraseña === password) {
    alert(`¡Bienvenido, ${user}!`);
    window.location.href = "catalogo.html";
    return false;
  } else {
    numIntentos--;
    alert(" Te queda " + numIntentos + " intentos mas ");
    alert("Datos incorrectos por favor revisa");


    if (numIntentos == 0) {
      alert("Comuniquese con dana la administradora");
      window.location.href = "index.html";
      return false;
   
    }

    return false;
  }
}


//funcion registrar usuario
function registrarUsuario() {
  let userregistro = document.getElementById("userregistro").value;
  let pass1registro = document.getElementById("pass1registro").value;

  
  if(userregistro == "" || pass1registro == ""){
    alert("Ingrese  usuario y contraseña, para poder realizar el registro");
    return false;
  }

  alert("Usuario registrado correctamente");

  localStorage.setItem("usuario", userregistro);
  localStorage.setItem("contraseña", pass1registro);

  document.getElementById("userregistro").value = "";
  document.getElementById("pass1registro").value = "";


}


// // Función para registrar un producto

function registrarProducto() {
  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;
  let cantidad = document.getElementById("cantidad").value;
  let valor_unitario = document.getElementById("valor_unitario").value;

  let nuevoProducto = {
    nombre: nombre,
    descripcion: descripcion,
    cantidad: cantidad,
    valor_unitario: valor_unitario,
  };
  productos.push(nuevoProducto);
  alert("Producto registrado correctamente");

  document.getElementById("nombre").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("valor_unitario").value = "";

  actualizarRegistroProducto();
}

function actualizarRegistroProducto() {
  productos.forEach((user) => {
    console.log(productos.length);
    localStorage.setItem("Productos", productos.length);
  });
}

 // Función para registrar un cliente
function registrarCliente() {
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let correo = document.getElementById("correo").value;

  let nuevoCliente = {
    nombre: nombre,
    telefono: telefono,
    direccion: direccion,
    correo: correo,
  };
  clientes.push(nuevoCliente);
  alert("Cliente registrado correctamente");

  document.getElementById("nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("correo").value = "";

  actualizarRegistroClientes();
}

function actualizarRegistroClientes() {
  clientes.forEach((client) => {
    console.log(clientes.length);
    localStorage.setItem("Clientes", clientes.length);
  });
}

function actualizarRegistroProducto() {
  productos.forEach((user) => {
    console.log(productos.length);
    localStorage.setItem("Productos", productos.length);
  });
}

 //funcion para registrar un proveedor

function registrarProveedor() {
  let nombre = document.getElementById("nombre").value;
  let nit = document.getElementById("nit").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;

  let nuevoProveedor = {
    nombre: nombre,
    nit: nit,
    direccion: direccion,
    telefono: telefono,
  };
  proveedores.push(nuevoProveedor);
  alert("Proveedor registrado correctamente");

  document.getElementById("nombre").value = "";
  document.getElementById("nit").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("telefono").value = "";

  actualizarRegistroProveedor();
}

function actualizarRegistroProveedor() {
  proveedores.forEach((proveedor) => {
    console.log(proveedores.length);
    localStorage.setItem("Proveedores", proveedores.length);
  });
}


function verTotal() {
  const Proveedores = localStorage.getItem("Proveedores");
  const Clientes = localStorage.getItem("Clientes");
  const Productos = localStorage.getItem("Productos");
  

  document.getElementById('provedor').value = Proveedores;
  document.getElementById('cliente').value = Clientes;
  document.getElementById('productos').value = Productos;

  const arr = [Proveedores, Clientes, Productos];
  const max = Math.max(...arr);

  alert("El que tuvo mayor ingresos fue " + max);


  return false;

}

function mostrarCantidadIngresosProveedores() {
  for (let i = 0; i < proveedores.length; i++) {
    alert(proveedores[i].nombre);
    alert(proveedores[i].cantidadIngresos);
  }
}
