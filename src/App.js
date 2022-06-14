import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import DesenvolvedorasLista from './pages/desenvolvedoras/DesenvolvedorasLista';
import FormDesenvolvedoras from './pages/desenvolvedoras/FormDesenvolvedoras';
import EditorasLista from './pages/editoras/EditorasLista';
import FormEditoras from './pages/editoras/FormEditoras';
import FormJogos from './pages/jogos/FormJogos';
import JogosLista from './pages/jogos/JogosLista';
import FormPlataformas from './pages/plataformas/FormPlataformas';
import PlataformasLista from './pages/plataformas/PlataformasLista';
import FormGeneros from './pages/generos/FormGeneros';
import GenerosLista from './pages/generos/GenerosLista';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<JogosLista />} />
            <Route path="/jogos" element={<JogosLista />} />
            <Route path="/jogos/create" element={<FormJogos />} />
            <Route path="/jogos/:id" element={<FormJogos />} />
            <Route path="/desenvolvedoras" element={<DesenvolvedorasLista />} />
            <Route path="/desenvolvedoras/create" element={<FormDesenvolvedoras />} />
            <Route path="/desenvolvedoras/:id" element={<FormDesenvolvedoras />} />
            <Route path="/editoras" element={<EditorasLista />} />
            <Route path="/editoras/create" element={<FormEditoras />} />
            <Route path="/editoras/:id" element={<FormEditoras />} />
            <Route path="/plataformas" element={<PlataformasLista />} />
            <Route path="/plataformas/create" element={<FormPlataformas />} />
            <Route path="/plataformas/:id" element={<FormPlataformas />} />
            <Route path="/generos" element={<GenerosLista />} />
            <Route path="/generos/create" element={<FormGeneros />} />
            <Route path="/generos/:id" element={<FormGeneros />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
