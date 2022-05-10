import Header from './components/Header.js';
import './App.css';

function App() {
  const dados = {
    nome:"Manoella Alves",
    empresa:"Avanade",
    site:"https://www.google.com.br",
    className: "App-link",
  };

  return (
    <div className="App">
      <Header title="Bem vindo! Bom almoço!" options={dados}/>
    </div>
  );
}

export default App;
