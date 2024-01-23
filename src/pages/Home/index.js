import Header from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="github log" className="background" />
        <div className="info">
          <div>
            <input type="text" name="user" placeholder="@username" />
            <button>Find</button>
          </div>
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/97916151?s=400&u=65128de805bcc7fb48acf78cad63b92507db5e05&v=4"
              alt="github user"
            />
            <div>
              <h2>Ruan Victor</h2>
              <h5>@username</h5>
              <br />
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="RepositoriesHeader">Repositories</h4>
            <ItemList title="teste" description="descricao" />
            <ItemList title="teste" description="descricao" />
            <ItemList title="teste" description="descricao" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
