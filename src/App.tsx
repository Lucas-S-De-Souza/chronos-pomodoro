import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";


export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}

// Que todos os componentes que usam "numero" saibam das mudanças em seu valor
// Sempre que usarmos useState, não vou usar atribuição diretamente
