
import './App.css';
import HelloWords from './components/HelloWords';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
    <Frase/>
    <HelloWords />
    <SayMyName name="Alekinho" />
    <Pessoa nome="Alekinho" idade="24" profissao="Programador" foto="https://avatars.githubusercontent.com/u/48743576?v=4" />
    <List/>
    </div>
  );
}

export default App;
