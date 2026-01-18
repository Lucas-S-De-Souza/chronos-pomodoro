import './styles/theme.css';
import './styles/global.css'

import { Home } from './pages/Home';

export function App() {
// Que todos os componentes que usam "numero" saibam das mudanças em seu valor
// Sempre que usarmos useState, não vou usar atribuição diretamente

  return (
    <Home />
  );
}
