import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='Header'>
    <div className='Heading'>Image Gallary</div>
    <App /> 
  </div>
  </BrowserRouter>,
)
