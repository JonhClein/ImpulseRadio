import { stationRadioInfo  }from "@/helpers/stationRadioInfo";

export default function  Main ({ handleSignOut, currentPage, divsPerPage, totalPages, handleClickPrev, handleClickNext }) {
    const currentDivsData = stationRadioInfo.slice((currentPage - 1) * divsPerPage, currentPage * divsPerPage);
    return (
        <div className="bg-color2 h-screen  ">
        <div>Contenido de la página principal</div>
        <button onClick={handleSignOut}>Log Out</button>
  
        <div className="flex justify-center items-center "> {/* Contenedor centrado */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
          {/* Muestra los divs actuales según la página actual */}
          {currentDivsData.map((div) => (
            <div className="bg-indigo-700 m-2 w-56 h-56" key={div.id}>
              <h3>{div.name}</h3>
              {/* Aquí puedes agregar la imagen u otro contenido según tus necesidades */}
            </div>
          ))}
        </div>
      </div>

             {/* Botones para avanzar y retroceder */}
          <div className="flex justify-center  ">
            <button
              onClick={handleClickPrev}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
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
      );
}