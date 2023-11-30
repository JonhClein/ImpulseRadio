export default function  Main ({ handleSignOut, currentPage, divsPerPage, totalPages, handleClickPrev, handleClickNext }) {
    
    return (
        <div className="bg-color2 h-screen">
          <div>Contenido de la página principal</div>
          <button onClick={handleSignOut}>Log Out</button>
    
          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
            {/* Muestra los divs actuales según la página actual */}
            {Array.from({ length: divsPerPage }).map((_, index) => (
              <div key={currentPage * divsPerPage + index}>
                Station Radio
              </div>
            ))}
    
            {/* Botones para avanzar y retroceder */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleClickPrev}
                disabled={currentPage === 1}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Anterior
              </button>
              <button
                onClick={handleClickNext}
                disabled={currentPage === totalPages}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      );
}