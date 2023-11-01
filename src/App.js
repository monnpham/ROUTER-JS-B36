import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';
import Header from './Header/Header';
import LifeCycle from './page/LifeCycle/LifeCycle';
import UserPage from './page/UserPage/UserPage';
import HookPage from './page/HookPage/HookPage';
import Ex_XucSac from './page/XucSac/Ex_XucSac';
import Ex_XucSac_Redux from './page/XucSac_redux/Ex_XucSac_Redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter  >
        <Header></Header>
        <Routes>
          {/* 1page là cần 2 thành phần : path (đường dẫn) element (component) */}
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/life-cycle' element={<LifeCycle />} />
          <Route path='/UserPage' element={<UserPage />} />
          <Route path='/HookPage' element={<HookPage />} />
          <Route path='/XucSac' element={<Ex_XucSac />} />
          <Route path='/XucSac_redux' element={<Ex_XucSac_Redux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
