import Banner from "./assets/components/Banner";
import Header from "./assets/components/Header";
import Newsletter from "./assets/components/Newsletter";
import Products from "./assets/components/Products";
import Footer from "./assets/components/Footer";

import './assets/css/general.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
