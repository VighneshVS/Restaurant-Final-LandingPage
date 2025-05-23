import Home from "./components/home.js";
import NavBar from "./components/navBar.js";
import About from "./components/about.js";
import Menu from "./components/menu.js";
import Chef from "./components/chef.js";
import Awards from "./components/awards.js";
import FindUs from "./components/findUs.js";
import Video from "./components/video.js";
import BookTable from "./components/bookTable.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Menu />
      <Chef />
      <Video />
      <Awards />
      <FindUs />
      <BookTable />
    </div>
  );
}
