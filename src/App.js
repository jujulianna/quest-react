import './App.css';
import Paragrafo from './components/paragrafo';
import Button from './components/button';

const textoParagrafo = 'Componente que colore e transforma um texto para maiúsculo (uppercase) utilizando JS.'
const escritoLabel = 'Baixar CV'

function App() {
  return (
    <>
      <Paragrafo textoParagrafo={textoParagrafo}/>
      <Button label={escritoLabel}/>
    </>
  );
}

export default App;
