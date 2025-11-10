import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import Button from './components/Button/Button.tsx'
import Encabezado1 from './components/Encabezado1/Encabezado1';
import Image from './components/Image/Image';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Encabezado1 />
    <Button />
    <Image />
    {/* <App /> */}
  </StrictMode>,
)
