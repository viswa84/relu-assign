import logo from "./logo.svg";
import "./App.css";
import Navabr from "./Components/Navabr";
import Sidebar from "./Components/SideBar";
import StoreBoard from "./Components/StoreBoard";
import RightBar from "./Components/RightBar";

function App() {
  return (
    <div className="app-container">
      <Navabr />
      <div className="landing-body">
        <Sidebar />
        <StoreBoard/>
        <RightBar/>
      </div>
    </div>
  );
}

export default App;
