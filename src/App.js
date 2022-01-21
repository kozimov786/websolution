import { useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import AboutPage from './pages/AboutPage'
import Footer from "./components/Footer";
import Header from "./components/Header";

import Navbar from "./components/Navbar";

function App() {

  const show = useSelector(state => state.ui.show)

  return (
    <div className="app">
      <Header />
      {show && <Navbar />}
      <main>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/about' element={AboutPage} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
