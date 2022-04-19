import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import './App.css';

import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page404 from './Templates/Layouts/Page404';
import Calculator from './Templates/Calculator';



function App() {
  return (
    <HashRouter>
      <Suspense
        fallback={
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            Loading...
          </div>
        }
      >
        {/* header component here */}
        <Routes>
          <Route exact path="/" element={<Calculator />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* footer component here */}
      </Suspense>
    </HashRouter>
  );
}

export default App;
