import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* // Wrapping the App component with BrowserRouter to enable routing in the application. Gives us the ability to change components that will be rendering on screen based on the slash route that will be going to webpage. */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
