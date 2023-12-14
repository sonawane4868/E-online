import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Maincomp from './components/Maincomp/Maincomp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Maincomp />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <Maincomp/>
  );
}

export default App;
