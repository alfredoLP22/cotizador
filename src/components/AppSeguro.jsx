import Formulario from "../components/Formulario";
import useCotizador from "../hooks/useCotizador";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

function AppSeguro() {
  const { resultado, cargando } = useCotizador();
  
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador seguros de auto
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
}

export default AppSeguro;
