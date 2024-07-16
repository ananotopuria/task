import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <h3 className="text-white flex justify-start mt-5 mb-5">Recent Posts</h3>
      <Posts />
      <div className="text-center mb-8 mt-8 text-white">
        <h4>daily blog</h4>
        <p>
          Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i
          mandatpingis tes. Analigt anede. Arat lagen.Lörem ipsum patt kar i
          renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt
          anede.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
