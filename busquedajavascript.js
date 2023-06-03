document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById("searchInput").value;
    
    // Aquí puedes realizar acciones adicionales con el término de búsqueda, como realizar una búsqueda en una base de datos o mostrar resultados en la página.
    
    console.log("Término de búsqueda: " + searchTerm);
    
    // Puedes añadir aquí código adicional para mostrar los resultados, limpiar el campo de búsqueda, etc.
  });
  