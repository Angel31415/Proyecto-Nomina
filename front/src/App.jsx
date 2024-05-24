import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Principal from "./components/layaouts/pages/Principal";
import Registro from "./components/layaouts/pages/Registro";
import Iniciosesion from "./components/layaouts/pages/InicioSesion";
import Liquidacion from "./components/layaouts/pages/Liquidacion";
import Empleados from "./components/layaouts/pages/Empleados";
const router = createBrowserRouter([
  //Importar los componentes con sus respectivas rutas
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/Registro",
    element: <Registro />,
  },
  {
    path: "/Inicio-Sesion",
    element: <Iniciosesion />,
  },
  {
    path: "/Liquidacion",
    element: <Liquidacion />,
  },
  {
    path: "/Empleados",
    element: <Empleados />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
