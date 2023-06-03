document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Aquí puedes realizar acciones adicionales con los datos del formulario, como enviarlos a un servidor o realizar validaciones.
    
    console.log("Nombre: " + name);
    console.log("Email: " + email);
    console.log("Mensaje: " + message);
    
    // Puedes añadir aquí código adicional para mostrar un mensaje de confirmación, limpiar los campos, etc.
  });
  