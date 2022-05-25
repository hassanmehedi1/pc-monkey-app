import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="blogs" element={<Blogs></Blogs>}></Route>
          <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="signup" element={<SignUp></SignUp>}></Route>
          <Route path='purchase/:purchaseId' element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default App
