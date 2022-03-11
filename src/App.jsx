import "./App.css";
import { LeftNav, RightNav, Search } from "./components/navbar/components";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage, ProductPage } from "./pages";


function App() {
  return (
    <div className="body">
      <Navbar leftNav={<LeftNav/>} rightNav={<RightNav/>} search={<Search/>}/>
      {/* <HomePage /> */}
      <ProductPage/>
    </div>
  );
}

export default App;
