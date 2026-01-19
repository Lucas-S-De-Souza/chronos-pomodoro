import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home />;
}

// Que todos os componentes que usam "numero" saibam das mudanças em seu valor
// Sempre que usarmos useState, não vou usar atribuição diretamente
