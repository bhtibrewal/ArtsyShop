import "./App.css";
import { LeftNav, RightNav, Search } from "./components/navbar/components";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/home_page/HomePage";

function App() {
  return (
    <div className="body">
      <Navbar leftNav={<LeftNav/>} rightNav={<RightNav/>} search={<Search/>}/>
      <HomePage />
    </div>
  );
}

export default App;
