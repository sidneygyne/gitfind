import { Header } from "../../components/Header";
import background from '../../asserts/background.png';
import "./styles.css"
import ItemList from "../../components/ItemList";
import { useState } from "react";
import Button from "../../components/Button";

function App() {

  const [user, setUser] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()
    //console.log(newUser)

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser
      setCurrentUser({ avatar_url, name, bio, login })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if (newRepos.length) {
        setRepos(newRepos)
        console.log(newRepos)
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div className="busca">
            <input name="usuario"
              placeholder="@username"
              value={user}
              onChange={event => setUser(event.target.value)}
            />
            <Button onClick={handleGetData} text='Buscar'></Button>
          </div>
          {currentUser && currentUser.name ? (
            <>
              <div className="perfil">
                <img src={currentUser.avatar_url}
                  className="profile"
                  alt="profile" />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}

          {repos?.length ? (
            <div>
              <h4 className="repositorio">Repositórios</h4>
              {repos.map(repos => (
                <ItemList title={repos.name}
                  description={repos.description}
                  html_url={repos.html_url}
                  homepage={repos.homepage} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
