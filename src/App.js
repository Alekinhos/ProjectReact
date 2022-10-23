
import './App.css';
import HelloWords from './components/HelloWords';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
    <HelloWords />
    <SayMyName name="Alekinho" />
    <Pessoa nome="Alekinho" idade="24" profissao="Programador" foto="https://avatars.githubusercontent.com/u/48743576?v=4" />
    </div>
  );
}

export default App;
