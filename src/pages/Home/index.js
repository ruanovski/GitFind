import Header from "../../components/Header";
import background from "../../assets/background.png";
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
        </div>
      </div>
    </div>
  );
}

export default App;
