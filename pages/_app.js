import "./styles.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Component {...pageProps} />
    </div>
  );
}
export default App;
