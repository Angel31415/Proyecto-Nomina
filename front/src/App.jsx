import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Principal from "./components/layaouts/pages/Principal";
import Iniciosesion from "./components/layaouts/pages/inicioSesion/InicioSesion";
import Liquidacion from "./components/layaouts/pages/liquidacion/Liquidacion";
import Registro from "./components/layaouts/pages/registro/Registro";
import Empleados from "./components/layaouts/pages/empleado/Empleados";
import Principaliniciosesion from "./components/layaouts/pages/principal-iniciosesion/Principal-iniciosesion";
import Cuenta from "./components/layaouts/pages/cuenta/Cuenta";

const router = createBrowserRouter([
//Importar los componentes con sus respectivas rutas
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/Registro",
    element: <Registro/>,
  },
  {
    path: "/Inicio-Sesion",
    element: <Iniciosesion/>,
  },
  {
    path: "/Liquidacion",
    element: <Liquidacion />,
  },
  {
    path: "/Empleados",
    element: <Empleados />,
  },
  {
    path: "/Principal-iniciosesion",
    element: <Principaliniciosesion />
  },
  {
    path: "/Cuenta",
    element: <Cuenta />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
