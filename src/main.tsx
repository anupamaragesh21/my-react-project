import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import ManageTask from './pages/ManageTask.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ManageTask />
  </StrictMode>,
)
