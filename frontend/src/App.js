import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ListNations from './components/ListNations';
import AddNation from './components/AddNation';
import Login from './auths/Login';
import Register from './auths/Register';
import Read from './components/Read';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path=''>
            {/** public */}

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/** protected */}
            <Route index element={<ListNations />} />
            <Route path=':id' element={<AddNation />} />
            <Route path='read/:id' element={<Read />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
