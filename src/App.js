import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter  >
        <Header></Header>
        <Routes>
          {/* 1page là cần 2 thành phần : path (đường dẫn) element (component) */}
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
