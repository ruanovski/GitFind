import { useState } from "react";
import Header from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./style.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    console.log(newUser);

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="github log" className="background" />
        <div className="info">
          <div>
            <input
              type="text"
              name="user"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Find</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="profile">
                <img src={currentUser.avatar_url} alt="github user" />
                <div>
                  <h2>{currentUser.name}</h2>
                  <h5>@{currentUser.login}</h5>
                  <br />
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className="RepositoriesHeader">Repositories</h4>
              {repos
                .filter((repo) => !repo.private)
                .map((repo) => (
                  <ItemList
                    title=<a
                      href={`https://github.com/${currentUser.login}/${repo.name}`}
                    >
                      {repo.name}
                    </a>
                    description={
                      repo.description ? (
                        repo.description
                      ) : (
                        <div className="errorMessage">
                          <span>This project has no description</span>
                        </div>
                      )
                    }
                  />
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
