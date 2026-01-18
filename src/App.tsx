import './styles/theme.css';
import './styles/global.css'


import { Container } from './components/Container';
import {Logo} from './components/Logo'
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { MainForm } from './components/MainForm';

export function App() {
// Que todos os componentes que usam "numero" saibam das mudanças em seu valor
// Sempre que usarmos useState, não vou usar atribuição diretamente

  return (
    <>
    <Container>
      <Logo />
    </Container>

    <Container>
      <Menu />
    </Container>

    <Container>
      <CountDown />       
    </Container>

    <Container>
      <MainForm />   
    </Container>

    <Container>
      <Footer />     
    </Container>
    </>
  );
}
