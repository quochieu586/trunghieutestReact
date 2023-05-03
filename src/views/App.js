import logo from './logo.svg';
import './App.scss';
import RouteTest from './Router/RouteTest';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  return (
  <div>
      <div className='App'>
        <header className='App-header'>
          <RouteTest className='Test'/>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1>
            Hiếu Trung webpage 
          </h1>
        </header>

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
      </div>
    </div>
  );
}



export default App;