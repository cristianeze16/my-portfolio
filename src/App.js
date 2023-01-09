import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import "./styles/App.css";
function App() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;
