import { Header } from "../../components/Header";
import background from '../../asserts/background.png';
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/155782406?v=4" 
                   className="profile" 
                   alt="profile"/>
              <div>
                <h3>Sidney Rodrigues</h3>
                <span>Span</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr/>
            <div>
              <h4>Repositórios</h4>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
