import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Diario from './diario';
import Consultar from './consulta';
import Inicio from './app';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/conteudo' element={<Diario />} />
        <Route path='/conteudo/:id' element={<Diario />} />
        <Route path='/consultar' element={<Consultar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


