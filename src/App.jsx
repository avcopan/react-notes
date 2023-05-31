import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Panda } from './components/Panda'
import { Instructions } from './components/Instructions'
import { Counter } from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Panda />
        <Panda disposition='mean' name='Pandy' />
        <Panda disposition='chill' name='Pandala' />
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
        <Instructions />
      </header>
    </div>
  );
}

export default App;
